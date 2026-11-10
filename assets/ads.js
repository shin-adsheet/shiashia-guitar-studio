/* しあしあ site ads: one modest unit at the bottom of APP STUDIO and ずぼらなマスタリングツール.
   Dormant until ads.config.json has an AdSense client id and a unit id for the page
   (assemble.py writes them to assets/ads-config.js). Nothing is loaded before that.
   Preview where the units go without loading any ad: add ?adpreview=1 to the URL.
   The unit is filled only when it scrolls near the screen, and never while the
   mastering tool is processing (<html data-busy>). Unfilled units hide themselves. */
(function () {
  var cfg = window.SHIA_ADS || {};
  var client = String(cfg.client || '').trim();
  var slots = cfg.slots || {};
  var preview = /[?&]adpreview=1(&|$)/.test(location.search);
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.adbox[data-ad]'));
  if (!boxes.length) return;

  function unitId(box) { return String(slots[box.getAttribute('data-ad')] || '').trim(); }
  var live = boxes.filter(function (b) { return client && unitId(b); });
  if (!preview && !live.length) return;

  var css = document.createElement('style');
  css.textContent =
    '.adbox{display:block;max-width:760px;width:100%;margin:28px auto 0;padding:10px 0 0;border-top:1px solid rgba(128,128,128,.28)}' +
    '.adbox.wait{height:0;margin:0 auto;padding:0;border:0;overflow:hidden}' +
    '.adbox .adlabel{display:block;font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 0 6px}' +
    '.adbox .adph{display:grid;place-items:center;height:100px;border:1px dashed rgba(128,128,128,.55);border-radius:10px;font-size:13px;opacity:.75}' +
    '.adbox:has(ins[data-ad-status="unfilled"]){display:none}';
  document.head.appendChild(css);

  var libLoaded = false;
  function loadLib() {
    if (libLoaded) return;
    libLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(client);
    document.head.appendChild(s);
  }
  function busy() { return document.documentElement.hasAttribute('data-busy'); }
  function whenIdle(fn) {
    if (!busy()) { fn(); return; }
    var mo = new MutationObserver(function () { if (!busy()) { mo.disconnect(); fn(); } });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-busy'] });
  }
  function fill(box) {
    var area = box.querySelector('.adarea');
    var id = unitId(box);
    if (client && id) {
      area.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' + client +
        '" data-ad-slot="' + id + '" data-ad-format="horizontal" data-full-width-responsive="true"></ins>';
      box.classList.remove('wait');
      loadLib();
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { box.hidden = true; }
    } else if (preview) {
      area.innerHTML = '<div class="adph">広告枠（プレビュー）</div>';
      box.classList.remove('wait');
    }
  }

  boxes.forEach(function (box) {
    if (!preview && !(client && unitId(box))) return;
    box.classList.add('wait');
    box.hidden = false;
    if (!('IntersectionObserver' in window)) { whenIdle(function () { fill(box); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.disconnect();
        whenIdle(function () { fill(box); });
      });
    }, { rootMargin: '300px 0px' });
    io.observe(box);
  });
})();
