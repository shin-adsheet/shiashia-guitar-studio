/* Cache only this application's shell; never upload projects. */
'use strict';
const PREFIX='guitar-studio-'+encodeURIComponent(self.registration.scope)+'-',CACHE=PREFIX+'v193',CORE=['index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
const page=new URL('index.html',self.registration.scope).href;
const isApp=r=>r.ok&&!r.redirected&&(r.headers.get('Content-Type')||'').includes('text/html');
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);for(const name of CORE){const url=new URL(name,self.registration.scope).href,response=await fetch(url,{cache:'reload'});if(!response.ok||response.redirected||(name==='index.html'&&!isApp(response)))throw Error('App shell unavailable');await cache.put(url,response);}await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request,url=new URL(req.url),scope=new URL(self.registration.scope);if(req.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 if(req.mode==='navigate'&&(url.pathname===scope.pathname||url.pathname===new URL(page).pathname)){event.respondWith(fetch(req).then(response=>{if(isApp(response)){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(page,copy)));}return response;}).catch(()=>caches.open(CACHE).then(c=>c.match(page)).then(hit=>hit||Response.error())));return;}
 if(url.pathname.startsWith(new URL('assets/',scope).pathname)&&(/\.webp$/.test(url.pathname)||(url.pathname.startsWith(new URL('assets/audio-v90/',scope).pathname)||url.pathname.startsWith(new URL('assets/audio-v133/',scope).pathname))&&/\.(json|mp3)$/.test(url.pathname)||url.pathname.startsWith(new URL('assets/legacy-audio/',scope).pathname)&&/\.js$/.test(url.pathname))){event.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(req);if(hit)return hit;const response=await fetch(req);if(response.ok&&!response.redirected)event.waitUntil(c.put(req,response.clone()));return response;}));return;}
 if(CORE.some(name=>url.href===new URL(name,scope).href))event.respondWith(caches.open(CACHE).then(c=>c.match(req)).then(hit=>hit||fetch(req)));
});
