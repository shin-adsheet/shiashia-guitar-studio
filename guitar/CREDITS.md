# 音源の由来 / Guitar Studio 0.3.0

## 使用したもの

既存のユーザー提供ファイル `PercussiveAcoustic_v09(2).dslibrary` のCC0部分から、下記を抜粋して内蔵しました。試聴用の軽量サブセットであり、元音源のすべての奏法・マッピング・DSPを再現していません。

- REALWOOD通常音：16音高×2ベロシティレイヤー×2ラウンドロビン＝64サンプル。
- 打撃・ブラシ・デッド：7種類×2ラウンドロビン＝14サンプル。
- モノラル32kHz / MP3 80kbpsへ軽量化。長さの上限と末尾フェードを追加。
- サンプル全体の個別出典・変換前パスは `assets/sample-manifest.json` に記録。

REALWOODはv0.9制作者による既存録音のオフライン音響処理版です。Shinyguitarを土台に、Martin HD28のボディ/サステイン成分やスペクトルを利用しています。新規に録音したスティール弦ギターではありません。

### Karoryfer Samples / Shinyguitar v1.002 — CC0

公式リリースはCC0への変更を明記しています。
https://github.com/sfzinstruments/karoryfer.shinyguitar/releases/tag/v1.002

元ライブラリの出典メモ：`provenance/Source_LICENSE_AND_SOURCE.txt`

### Jeff Learman / Martin HD28 — 原典SFZのCC0表記に基づく

既存ライブラリが同梱していた `provenance/Martin_CC0_original.sfz` 内の表記と、v0.9同梱資料を根拠にしています。今回、現行の配布先Webページまでは独立確認していません。SFZを動作用音源として使用するものではなく、出典記録として添付しています。

## 含めていないもの

元v0.9に別途含まれていた、クレジットが必要なredafsのCC BYスラップ（ノート29）は使用していません。Taylorハーモニクス（ノート28）もこのWeb版には含めていません。

Appleの画面画像・ロゴ・GarageBand音源・ループ・演奏プリセットは含めていません。コード帯、弦を触る操作、自動演奏という操作方式を参考に、独自の画面・音源構成で実装しています。300演奏パターンと100フィルは、このアプリ用に作成したフレーズと奏法違いのバリエーションです。

## アプリのコードとプロジェクト

JavaScript / CSS / HTMLは本制作で作成。外部JavaScriptライブラリ、CDN、Webフォント、解析・広告スクリプトは使っていません。配布フォントは含んでいません。動作には端末のシステムフォントを利用します。

プロジェクトJSONとMIDIは演奏データです。読み込んだ他者のMIDIや曲の権利まで、このアプリやサンプルのライセンスが保証するわけではありません。

## v0.3.0の配信確認

元音源はバイト単位で維持しています。今回の原配布元の外部再確認は完了していません。詳細はprovenance/WEB_DISTRIBUTION_REVIEW.md。Sitesは所有者と登録済み外部閲覧者1名の限定共有設定を維持します。一般公開用の権利確認が完了したとは扱っていません。


## v0.3.2 追加ギター音源

FluidR3 by Frank Wen / MIDI.js Soundfonts by Benjamin Gleitzman。ナイロン・スチール・ジャズ・クリーン・オーバードライブ、各25音高、合計125 MP3サンプル。配布元README表記 CC BY 3.0。既存78サンプルは変更なし。

- 出典: https://github.com/gleitz/midi-js-soundfonts
- ライセンス: https://creativecommons.org/licenses/by/3.0/
- 著作者・加工内容・原典のMIT通知: licenses/GUITAR_BANKS.txt、licenses/FLUIDR3_MIT.txt、licenses/MIDIJS_LICENSE.txt

元MP3の音声バイトはそのまま、収録音高の選択とデータ形式を変更。再生時の音量・フィルター・音価・ピッチ変更を実施。追加音源を使ったWAVを公開する際は出典とライセンス表記を添えてください。MIDI自体にはサンプルは入りません。

## v0.5.0 カードゲーム

チップ試聴音はWeb Audioのtriangle／square oscillatorで合成し、外部の録音・ゲーム音源を使いません。ドット絵ダンサーは本アプリ向けにbuilt-in imagegenで生成したオリジナル素材です（assets/quest-dancer.png、provenance/DANCER_v050.md）。既存キャラクター、Slay the Spireの画像・音・ロゴは収録しません。既存ギター音源の音声バイトと配布クレジットは変更していません。共有範囲も維持します。

## クラック＋レトロ（試作）

本アプリ独自のWeb Audio波形合成。コード用リードとメロディ用シンセを分けて発音します。追加の第三者サンプル・プリセットファイルは含みません。ユーザー提供の参考録音の周波数分析をもとに、コードの奇数倍音とメロディの三角波成分を調整しました。Crackling Lead／A Simpler Timeの個別プリセットを分離した比較・聴感での一致検証は未実施です。参考録音の音声は収録していません。名称は制作上の参照先を識別するための記載であり、公式版や権利者の監修を意味しません。

## ボディ打撃音の拡張（v109）

既存の打撃サンプル4種類に、ピッチ加工した3種類と強弱をつけた2連打を加えました。新たな第三者音源は追加していません。加工音もMIDIノートに分けて保存します（独自マッピング: 24=低音、25=中音、26=タップ、27=リム、28=ディープ、29=フィンガー、32=ノック）。GMガイドでは近い打楽器へ割り当てます。

## 右向き歩行・走行（v110）

既存のユーザー指定キャラクターを参照し、built-in image_genで本アプリ向けに新規生成した透過スプライトです。4コマの右向き歩行と4コマの右向き走行。外部ゲームの画像・アニメーション素材は収録していません。生成プロンプトと工程は `provenance/RIGHT_MOTION_v110.md` に記録しています。

### Code-and-chord loop library (v111)

The 100 short loop arrangements in `src/song-materials.js` are original MIDI recipes assembled for Guitar Studio from its existing performance patterns, chord voicings, fills and entrances. They contain no Apple Loops audio, MIDI files or GarageBand preset data. They use the selected Guitar Studio instrument and project tempo. Existing sample credits and distribution terms above still apply.

## 2026-09-24: スマホMIDIとGAMEのイラスト

MIDI編集画面はMEDLY公式画面のコンパクトな操作配置を参考にし、このアプリの既存MIDI処理に独自実装しました。MEDLYのコード・音源・画面画像は同梱していません。12場面のカード絵と3種類の歩行キャラは本アプリ用に画像生成した素材です。詳細は `provenance/MEDLY_INSPIRED_v114.md`。既存音源と共有範囲を維持し、新たな外部サンプル音源は追加していません。

## ファンク・クリーン音源

FreePats FSBS Electric Guitar Clean #1 のブリッジピックアップ録音（small SFZ、12音）を使用しました。CC0 1.0。44.1 kHz / 160 kbps に変換し、各音の冒頭から2.5秒を収録しています。カッティング時には音量と余韻を調整しています。出典、対応音高、変換内容は `licenses/FREEPATS_CLEAN.txt` に記載しています。

## Integrated physical guitar model

The acoustic, clean-electric and crunch-electric models, eight string articulations,
five percussion voices, 20 accompaniment patterns, nine entrances, eight fills and
seven effects are adapted from the user-supplied `guitar-studio-src.zip` Claude reference.
These voices synthesize string vibration and percussion; no additional third-party
recordings were downloaded for this integration. Existing sample-bank credits above
continue to apply to the legacy instrument choices.

## Additional card illustrations (2026-09-26)
Three original illustrations generated with OpenAI image generation: electric guitar storm, moonlit waterfall, and fox bard festival. Used as additional game card art; no third-party characters or logos. Source prompts are recorded in `docs/card-art-v60.json`.

## Front-facing companions (v63)

`assets/companions-front-v63.png`: original front-facing dance sprite variants generated with OpenAI image generation from the existing character references. Used for Play, card-building and character selection. The existing side-facing atlas is retained for MIDI movement.

## Flat card illustrations and stage dance (2026-09-27)
Twelve original music-card illustrations and eighteen dance poses for the established bunny, cat and fox characters, created with OpenAI image generation. The reference game informed card hierarchy and hand layout; none of its artwork, characters, audio or logos are included. Optimized card tiles: `assets/flat-cards-v70/`; transparent dance atlas: `assets/dance-flat-v70.webp`. Pose and source information: `docs/card-art-v70.json`. Existing audio credits and licenses are unchanged.

## Expanded score-driven dance (2026-09-27)
Three original transparent sprite atlases generated from the established character references with OpenAI image generation. Each character has48 poses (144 drawings total). The30 base movement families combine with4 floor routes/endings to form120 choreography phrases; this is not120 separately drawn full animations. Assets: `assets/dance-v73-{bunny,cat,fox}.webp`. Prompts, crop provenance, pose indices and limitations: `assets/dance-v73/`. No third-party game artwork or audio is included.

## Additional flat card illustrations (v83)
Twelve original music-card scenes for the established purple-and-gold bunny-cap mascot, generated with the built-in OpenAI image tool using the existing v70 card illustrations as style and character references. Original tiles 0–11 remain unchanged; additions are 12–23 in `assets/flat-cards-v70/`. Prompt and source records: `docs/card-art-v83.json`. Optimized as separate 362 × 362 WebP files.

## Card illustration expansion (v84)
26 original illustrations, generated with the built-in OpenAI image tool using the existing flat chibi card art and established bunny, mint-haired and orange-haired mascots as references. Files 24–49 in `assets/flat-cards-v70/` extend the collection to 50 images; existing files 0–23 are preserved. Exact prompts, references and source records: `docs/card-art-v84.json`. Each delivered card image is a separate 362 × 362 WebP.

## 100-card illustration collection (v86)
50 additional original flat illustrations, generated with the built-in OpenAI image tool using the existing chibi card art as style and character references. Files 50–99 in `assets/flat-cards-v70/` bring the active collection to 100. The additions include 25 instrument/room/object scenes and 25 scenes with the established bunny, mint-haired and orange-haired mascots. Existing files 0–49 remain unchanged. Each asset is an individual 362 × 362 WebP; exact prompts, references, source files and checksums are recorded in `docs/card-art-v86.json`.

## Recorded studio guitars and body percussion (v87)
The standard Acoustic, Clean and Crunch instruments now use recorded samples. The Steel, Nylon, Jazz, Funk Clean and Overdrive selections were also revised. Existing instrument IDs remain compatible with saved projects.

- Karoryfer Shinyguitar CC0 source recordings: microphone and direct-pickup banks, each with 17 pitches × 4 recorded velocity layers × 2 round robins, plus release samples. Recorded body/muted-string percussion has three round robins.
- Jeff Learman's Martin HD28, 15 recordings, CC0 per the instrument's original SFZ header.
- FreePats Spanish Classical Guitar by roberto@zenvoid.org, 43 recordings, CC0.
- 440 recorded files total. Mono 44.1 kHz, MP3 VBR quality 2; original attacks preserved with onset alignment and end fades. Articulation playback, velocity crossfading, EQ, amp drive and levels are this application's implementation. Not every articulation is a separately recorded technique.

The five banks are loaded separately on selection and cached. If loading fails, the existing embedded recording/physical-model fallback remains available; the UI marks that fallback. The old REALWOOD selection and legacy embedded bank files are retained. Historical credits above continue to apply to those fallback sources.

Sources, license texts and processing details: `licenses/STUDIO_SAMPLES.txt`, `licenses/SHINYGUITAR_CC0.txt`, `licenses/SPANISH_GUITAR_CC0.txt`, `licenses/MARTIN_HD28_SOURCE.sfz`. Exact sample URLs, revisions, hashes and processing metadata: `provenance/studio-samples-v87.json`.

## Lean audio loading and handheld voices (v90)
The v87 recordings are now packaged as small starter banks and separately cached MP3 recordings under `assets/audio-v90/`, without re-encoding. The source audio, ownership and licenses above remain unchanged. Only the needed velocity layer and round-robin recording are loaded; one recorded performance plays per note, avoiding phase cancellation from blending independent performances. Legacy sample scripts are downloaded only when that legacy/fallback path is needed. Initial loading requires a connection; cached files can be reused offline.

GB・パルス, GB・スクエア and GB・プラック are original synthesized pulse voices with short stepped amplitude envelopes. The existing chip voice also uses a cached oscillator spectrum instead of allocating multi-second PCM per pitch. These are handheld-inspired sounds, not hardware emulation; no game recordings, ROM data, melodies or third-party game assets are included.

### Game card scenes v91
12 additional illustrations generated with OpenAI ImageGen for this project, preserving its original bunny, mint cat and fox designs. Scenes depict rest, low/high strings, bend, slide, repeat picking, volume swell, duet, fingerpicking, body percussion and upstroke. Exported as 362px WebP; semantic assignments and asset hashes are recorded in `docs/card-art-v91-*.json`. Existing illustrations are retained.

## Guitar recordings and performance revision (v106)

The five electric selections now use FreePats Electric Guitar FSBS Direct, version 2022-09-11 (CC0). The 120 included recordings cover 19 pitch zones with four separately recorded takes per velocity layer. Eleven zones have soft and strong layers, split at velocity 92/93 as in the original SFZ; the eight higher zones have one layer. A small application-designed preamp/cabinet EQ and soft saturation process the direct pickup recordings. This is not a model of a named commercial amplifier or plugin.

Electric dead strokes now use 50 direct-pickup muted-string recordings from the existing CC0 Karoryfer Shinyguitar source: six individual strings and four all-string contacts, each with five recorded takes. Body percussion retains the microphone-recorded bank. New assets use mono 44.1 kHz MP3 VBR quality 1 with onset alignment and end fades, and shared gain calibration per pitch/layer preserves differences between takes. Startup loads one playable take per pitch; later takes and soft layers stream as needed. The unused previous direct-pickup bank is retained in source history and omitted from the published bundle.

Acoustic velocity layers, alternates and recorded release sounds are prepared ahead of playback. Whole-stroke timings, low/high string roles, shorter dead strokes, palm damping and legato attacks were revised using aggregate measurements of the user-provided reference MIDIs. No reference melody or third-party performance MIDI is published. Standard notes, dead strings and body hits are recorded; palm muting, legato, tap, harmonics and pitch gestures still include application processing rather than a complete set of separately recorded articulations. This revision has not been benchmarked as equivalent to a commercial guitar library.

Sources: https://freepats.zenvoid.org/ElectricGuitar/clean-electric-guitar.html and https://github.com/sfzinstruments/karoryfer.shinyguitar . Original FreePats license/readme/SFZ: `licenses/FSBS_DIRECT_CC0.txt`, `licenses/FSBS_DIRECT_README.txt`, `licenses/FSBS_DIRECT_SOURCE.sfz`. Download revisions, per-file hashes and processing metadata: `provenance/guitar-quality-v106.json`; reproduction: `scripts/prepare_guitar_quality.py`.

## Rooftop Carnival Stage (2026-10-04)

Original background generated for Guitar Studio with the available OpenAI image-generation tool. No specific image model version is asserted. Converted to WebP for the in-game backdrop. The existing character atlases and card artwork are retained.

## October 2026 visual refinement
- `lobby-midnight-studio-v112.webp`: original image generated for this project using the built-in image generation tool. Atmospheric pixel-art direction informed by the user's supplied references; no portfolio or commercial game artwork was copied into the app. The scene deliberately contains no character while the replacement character design is being reviewed.
- In-play geometric rhythm-space animation: original procedural canvas geometry, driven by the existing song clock.

## Approved character-first TOP and Shia, October 2026
- `lobby-shia-*-v113.webp` and matching posters: three original pixel-style character scenes, generated from the user-approved Shia identity with the built-in image generation tool. Local animation packaging preserves the exact body/background and plays authored eye/hair/ear changes. No reference portfolio artwork is embedded.
- `dance-shia-v113.webp`: 16 original full-body dance keyposes generated from the approved taller Shia model; measured source rectangles share one scale and fixed ground anchor. Animation uses the app's existing song clock and choreography, with supported pose families only.
- The detailed v112 music-room lobby is retained only in source/version history and is not part of the current deployment output.

- v116: Original GUITAR QUEST title typography and Shia running keyposes were generated for this project. The running character uses the existing project character as its visual reference. Production images preserve source RGBA pixels through lossless WebP. Generation prompts and measured registration are recorded beside the source assets.

## Shia tempo character revision (v117)

The sideways tempo character uses original transparent cutout artwork generated with the built-in OpenAI image tool, referencing the project's existing Shia design. Four faces progress from a relaxed smile to a strained, sweating sprint. `assets/tempo-shia-v117.webp` is a lossless 4 × 3 atlas of the generated heads, torso and limb components; crops and transparent padding preserve source RGBA pixels. The application animates those components with measured joints, fixed limb lengths, grounded walking, running flight and opposite arm swings, driven by the selected BPM. No commercial game character or animation is embedded.

Exact prompts, including rejected earlier pose-sheet attempts, are in `assets/tempo-shia-v117-prompts.json`; measured pivots, generation records and the shipped atlas hash are in `assets/tempo-shia-v117.json`. The generated earlier four-pose v116 tempo loop is omitted from the deployed bundle. Other character animation and the approved lobby artwork retain their original credits.

## Two-head pixel Shia and rhythm-space variety (v118)

`assets/tempo-shia-v118.webp` contains 16 original complete pixel-art character frames generated for this project with the built-in OpenAI image tool. Four transparent rows cover relaxed steps, cheerful steps, running and a strained sprint. A shared scale, sole alignment and transparent padding preserve the generated art; the renderer selects whole frames rather than moving separate limbs. Exact generation instructions and registration are recorded in `assets/tempo-shia-v118-prompt.txt` and `assets/tempo-shia-v118.json`. The older v117 cutout rig is retained in source history and omitted from the deployed bundle.

## Matching taller dance cast (v119)

Five original transparent dance sheets were generated with the built-in OpenAI image tool: 16 additional Shia poses and 32 newly drawn poses each for the teal cat and orange fox. Together with Shia's existing 16 poses, the stage uses 32 full-body drawings per character, 96 in total. The cat and fox match the taller Shia model's head-to-body proportions, jacket, leg definition and shoe construction, with their established colors, ears and tails. Shia's older “girl” stage choice uses the same taller Shia model.

Whole-character frames are mechanically cropped, aligned to a shared canonical sole anchor and stored as lossless WebP. No limb synthesis or frame interpolation is used. Added gestures include overhead waves, knee drives, heel-toe glides, low grooves, turns and finishing poses. The existing song clock controls pose selection, grounded movement and jump timing. Unsupported handstands and inverted poses stay outside this cast's choreography.

Generated sources, exact prompts, pose registration and inspection information are in `docs/art/v119/` and `assets/dance-cast-v119.json`. Runtime sheets are `assets/dance-bunny-extra-v119.webp` and `assets/dance-{cat,fox}-{base,extra}-v119.webp`, with Shia's existing base in `assets/dance-shia-v113.webp`. The separate two-head BPM mascot is retained.

The six in-game geometric environments are original canvas geometry. Their travel, transitions and musical envelopes follow the song clock. No Groove Coaster assets or code are embedded.

## Stage, typography and session controls (v120)

Two original transparent wordmarks replace the title and header: `assets/guitar-title-v120.webp` and `assets/guitar-header-v120.webp`. Their exact text is “しあしあのguitar questi” and “しあしあのguitar studio”. The angular italic lettering was generated with the built-in OpenAI image tool; no particular model version is asserted. Sources and prompts: `docs/art/v120/generation-v120.json`.

The separate two-head tempo mascot now has calm half-lidded faces in its first three movement rows and retains the strained sprint expression in the final row. `assets/tempo-shia-jitome-v120.webp` contains16 whole-character poses, generated as an identity-preserving edit. Its raw source and registration/prompt record are in `docs/art/v120/tempo-shia-jitome-v120.json`.

Five new dance sheets contain80 authored poses: Shia's32 base/extra poses were redrawn to match the fox's face/body proportion, excluding ears; each of the three characters receives16 additional back-facing, quarter-turn, running-man and Charleston poses. Active cast sheets contain48 poses per character,144 total. New assets are `assets/dance-bunny-{base,extra,break}-v120.webp` and `assets/dance-{cat,fox}-break-v120.webp`; cat/fox base and extra sheets retain v119. Exact prompts, native sources, whole-sheet scale factors, crop/ground registration and quality limitations are in `docs/art/v120/`. The first Shia-extra generation was rejected for its oversized head; one explicitly requested corrective edit is used instead. Anatomical measurements remain approximate, some side views are three-quarter views, and some running-man drawings have ambiguous anatomical knee alternation. No pose interpolation, limb reconstruction or CSS body flattening is used for the new rotation sequence.

Thirty-four movement families and four floor routes/endings produce136 choreography phrases. These are combinations of authored poses and score-driven movement, rather than136 separately drawn animations. Mirror-ball facets, spotlights, color washes and LED patterns are original canvas graphics and follow actual song sections and playback beats.

Player workflow research used the user-supplied Bass Player tutorial (`https://www.youtube.com/watch?v=CojmKkr0zow`) and Apple's official Logic Pro guides (`https://support.apple.com/en-mn/guide/logicpro/lgcp74b34026/mac` and `https://support.apple.com/en-ae/guide/logicpro-ipad/lpipa6dd7181/ipados`). The guitar-specific rhythm, swing, dynamics and articulation generator is this application's code. No tutorial footage, transcript, Apple interface artwork, Apple code or Studio Bass recordings are included.

## Card-matched BPM Shia (v122)

`assets/tempo-shia-card-v122.webp` replaces the separate tempo mascot with sixteen full-body drawings based on the Shia deck-card illustrations. One built-in OpenAI ImageGen call produced the native 1254 × 1254 RGBA source; no particular model version is asserted. Complete frames were mechanically cropped, uniformly enlarged 1.30× with nearest-neighbor sampling, padded and sole-aligned into a lossless 2048 × 2048 atlas. All cell edges are fully transparent, including the 144 BPM run. Default eyes are half-lidded; the final row uses the strained sprint face.

Exact prompt, unchanged native source, registration and generation records are in `docs/art/v122/`. Native partial-alpha edge fringe is preserved. Poses use a right-facing three-quarter view, and some recovery silhouettes are similar. Existing stride timing remains driven by the selected tempo.

## v133 新録ギター音源（追加）

v132までの録音音源はそのまま残し、次のCC0素材から作り直した音源を別の音色として追加しました（「アコースティック（新録）」「ナイロン（新録）」「エレキ（新録）」）。音源ファイルは `assets/audio-v133/`、個別ファイルのハッシュは `provenance/guitar-samples-v133.json` に記録しています。ボディ打撃音（`assets/audio-v90/percussion`）は共通です。

| 音色 | 元素材 | 作者・配布元 | ライセンス | 加工 |
|---|---|---|---|---|
| アコースティック（新録） | Shinyguitar（マイク録音） | Karoryfer Samples | CC0 1.0 | EQ、長さの整理、強弱4段×2テイクの音量合わせ、音程の実測補正、MP3化。ブリッジミュート・ハーモニクス・デッド音を派生生成 |
| エレキ（新録） | Emilyguitar（ハムバッカー、ライン録り） | Karoryfer Samples | CC0 1.0 | 高域補正、長さの整理、音量合わせ、音程補正、MP3化。アンプの音作りはアプリ内のEQ・歪み・コンプで行う |
| ナイロン（新録） | Spanish classical guitar | FreePats project | CC0 1.0 | 音名を実測確認、EQ、長さの整理、音量合わせ、MP3化。打撃・ミュートはShinyguitarを流用 |

- https://github.com/sfzinstruments/karoryfer.shinyguitar
- https://github.com/sfzinstruments/karoryfer.emilyguitar
- https://github.com/freepats/spanish-classical-guitar
