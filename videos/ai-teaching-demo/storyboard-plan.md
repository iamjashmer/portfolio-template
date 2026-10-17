# Storyboard plan v2: Beyond PPT, AI for teaching (area of a circle demo)

Status: **v2, waiting for AJ's approval.** Nothing is animated yet. v2 changes: contrast check, macOS-style demo windows, simulated AI prompting and generation in S04, subtle falling snow, tech-demo styling. Frames: `storyboard-frames.png`.

## 1. Brief
- Topic and audience: using AI to make a math idea visible (area of a circle, doubling the radius, area of a triangle). Teachers on TikTok and Facebook.
- Language: Taglish (S11 and S12 are English, as in the script).
- Format: **vertical 9:16**, 720 x 1280 design units (renders 1080 x 1920 at `--scale 1.5`).
- Length: the voice-over is **1:41** (storyboard estimated 1:56), so under the 2:00 cap. Gumagana ito sa kahit anong triangle stays in.
- The viewer should remember: AI + HTML makes math visible, and the teacher still checks it and asks the questions.
- Brand pill: `#HeyAJ` (top 10% stays clear, so the pill sits in the top band with nothing else).
- Voice-over: `vo.mp3`. Captions from `narration.txt` (the storyboard's spoken lines, tags removed, spelled out words kept as the on-screen text from your file where it differs: PPT, HTML, pi r squared).

## 2. Visual language (tech demonstration)
- **Presenter:** April's whole-body mascot, identical in every scene (as AJ).
- **Look:** dark navy gradient, frosted-glass panels with soft cyan / violet edges, Poppins for headlines and captions, **JetBrains Mono style monospace for prompt and code**. Technology-demo feel: clean, precise, calm glow.
- **Snow:** very subtle falling snowflakes behind everything (small, 25 to 40 flakes, 8 to 18% opacity, slow drift, soft blur on the nearer ones). Drawn from time so renders repeat. Never over the demo window or text, never distracting.
- **Demo windows are macOS style:** rounded window, traffic-light buttons (red, yellow, green), title bar with a centered title, soft system shadow, SF-style UI font inside the chat and controls, macOS slider and button look, a real arrow cursor that moves and clicks. A **macOS notification banner** is allowed for one beat (S04 "Done").
- **Screen scenes (S03 to S09):** a macOS window fills the top ~65% (y 140 to 830). The mascot sits in the bottom ~35% at the left as the picture-in-picture, on-screen text at its right, captions below the window at y ~870. Nothing in the bottom 20% (y > 1024) and top 10% (y < 128) except the pill.
- **Avatar scenes (S01, S02, S10, S11, S12):** mascot centered, waist-up size, text in the safe area.
- **Contrast rules (checked in the frames):**
  - Text on the dark background is white (#fff) or pale cyan (#b6f0ff), never navy. Minimum 4.5:1.
  - Text on the light demo page is deep navy (#0b1e3f) on #f5f5f7 (about 16:1).
  - Orange (#ff7a1a) is used for shapes and big numbers only. Orange small text is `#ffb070` on dark, `#b4490a` on light.
  - Captions: white on a dark glass pill so they stay readable over snow and the mascot.
  - Cyan = base, violet = height, orange = area. On the light page I use darker shades (cyan #0e7490, violet #6d28d9, orange #d9570a) so they pass contrast.
- **Demo prop:** one self-contained HTML page with the three views (`prop/index.html`) styled as a macOS app window, plus a time-driven copy for the frame-exact render. No logos, tabs or account names.
- **Sound:** soft key ticks while typing, trackpad click on Send, a soft system alert on "Done", pen ticks on label reveals, a soft tap on x4. No music swell in S11.
- **3D:** none. Glass, glow and the demo window are the hero.

## S04 in detail: simulating the AI prompting and generation (0:17 to 0:30)
This is the one scene that shows the process, in four beats on the voice-over (a clean macOS chat window, no brand, no account, no tabs):
1. **"Ito ang ginawa ko" (17.1 s):** an empty chat window opens, mascot PiP curious. A blinking caret in the prompt field.
2. **"Sinabi ko sa AI" to "slices" (18.5 to 27.5 s):** the prompt types out in sync with the speech, large monospace, the field grows to two or three lines. Key ticks.
3. **Right after "slices" (about 27.6 s):** the cursor moves to the send arrow and clicks (trackpad click). The prompt becomes a message bubble. A status line appears: "Thinking..." with a soft pulsing dot, then "Writing the animation".
4. **"At ito ang lumabas" (27.9 to 30.1 s):** a code pane streams about 8 lines of HTML / CSS / JS (blurred-edge, scrolling, not meant to be read), a progress bar fills, a macOS banner "Done" slides in, then the chat window flips into the live demo page (this hands off to S05).

The code shown is decorative placeholder markup, not claims about any tool. The prompt text is exactly the storyboard's on-screen text.

## 2b. Storyboard frames
One mock frame per scene: `storyboard-frames.png`.

## 3. Scene table (times from the real audio)

| # | Time | Voice-over (exact) | On-screen | Hero visual | Beats (word -> motion) | Mascot | Sound |
|---|---|---|---|---|---|---|---|
| S01 Hook | 0:00-0:05 | If you are still using P-P-T in class... you are missing something. | "Still using PPT?" | Plain bullet slide behind the mascot, fades out | text on frame 1; "missing" -> slide fades | curious | soft tap |
| S02 Intro | 0:05-0:09 | Hi, this is AJ, teacher dito sa Alaska! | Lower third "AJ \| Teacher in Alaska" (whole scene) | Mascot only | "Hi" -> wave, lower third slides in | wave | soft tap |
| S03 Problem | 0:09-0:17 | Hindi ko sinasabing itapon na ang PowerPoint. Pero may mga idea sa math na mahirap makita sa isang static na slide. | "Abstract na idea sa math" | Static circle with "Area = ?" in a macOS-style window (Keynote-like slide frame, no brand) | "Pero" -> circle and Area = ? appear | think (warm, thoughtful) | tap |
| S04 Prompt | 0:17-0:30 | Ito ang ginawa ko. Sinabi ko sa AI... At ito ang lumabas. | Prompt text, large (as in your file) | macOS chat window: prompt types, cursor clicks Send, Thinking, code streams, Done banner, demo page opens | see S04 in detail above | curious | key ticks, trackpad click, soft alert |
| S05 Slices | 0:30-0:38 | Tingnan natin! Hinihiwa ang circle sa maliliit na slices... tapos pinagsasama-sama, at nagiging parallelogram! | "Circle -> Slices -> Parallelogram" | Prop view 1: circle cut into slices, slices rearrange point-up / point-down into a parallelogram | "Hinihiwa" -> cut; "tapos" -> rearrange; "parallelogram" -> settled | point (excited) | tap per slice group |
| S06 Slider | 0:38-0:44 | Ngayon, itaas natin ang slider. Habang dumarami ang slices, mas nagiging kamukha ito ng rectangle. | "Mas maraming slices = mas kamukha ng rectangle" | Slices slider 4 to 64, value shown, shape tends to rectangle | "slider" -> drag starts; "rectangle" -> at 64 | cheer | slider ticks |
| S07 Formula | 0:44-0:56 | Ang base ay kalahati ng circumference. Ang taas ay ang radius. Kaya ang area ay pi r squared. Hindi na lang formula... Nakita na nila kung bakit. | "Base = 1/2 circumference \| Height = radius \| Area = pi x r x r" | Frozen shape; labels appear one by one | "base" -> pi r (cyan); "taas" -> r (violet); "area" -> pi r squared; holds through the pause | confident | pen ticks |
| S08 Doubling | 0:56-1:06 | Tanong sa klase: kapag dinoble natin ang radius, dalawang beses lang ba ang area? Apat na beses! Kasi naka-square ang radius. | "Dinoble ang radius = ilang beses ang area?" | Prop view 2: "?" over Area during the pause, then radius doubles, "Area: x4" | "Dalawang" -> "?"; "Apat" -> slider doubles, x4, hold ~2 s | think, then shocked at "Apat" | tap, stamp tap on x4 |
| S09 Triangle | 1:06-1:23 | Isa pa! ... Gumagana ito sa kahit anong triangle. | "2 triangles = 1 parallelogram \| Triangle area = 1/2 x base x height" | Prop view 3: triangle with b and h, copy rotates 180 and attaches, formula, "New triangle" replays | "Kopyahin" -> copy appears; "Irrotate" -> rotates; "Parallelogram!" -> shape settles; "kahit anong" -> New triangle clicked | curious, cheer at "Parallelogram", then calm | taps, click |
| S10 Teacher | 1:23-1:31 | Pero ako pa rin ang nag-check... "Ano sa tingin ninyo ang susunod na mangyayari?" | "Teacher pa rin ang nag-check \| Ano sa tingin ninyo ang susunod na mangyayari?" | Checkmark, then speech bubble with the question | "nag-check" -> check; "Ano" -> bubble | confident | soft tap |
| S11 Resolution | 1:31-1:37 | AI will not replace teachers. In fact, teachers are needed more than ever. | Two sentences fading in, one at a time | Mascot on a calm background | sentence 1 on "AI"; sentence 2 on "In fact" | calm | none |
| S12 Outro | 1:37-1:42 | Once again, this is AJ, a teacher here in Alaska. Follow for more! | Lower third, then "FOLLOW FOR MORE!" button | Mascot, lower third first, then follow button | "Once" -> lower third; "Follow" -> button pops | wave, then double-thumbs | tap |

Note: S01 text is "Still using PPT?" exactly as in your file; the lint may flag nothing here since it is above the caption band.

## 4. Open questions and placeholders
1. **Avatar:** OK to use April's existing mascot as AJ's avatar? (Your file says appearance is to be provided.)
2. **Exclamation marks:** the storyboard keeps them in the voice-over; on-screen I keep your exact text ("Follow for more!"). My house style is no exclamation marks on screen. Keep yours?
3. **Whisper misheard some Tagalog words** (Hindi hiwa vs Hinihiwa, itapun, kuni...). Captions use your script spelling, not the recognised words, so this only affects my timing anchors.
4. **S04 prompt:** a generic macOS chat window with no logo or name. Fine?
7. **Snow:** subtle as described (about 8 to 18% opacity). Want it even fainter, or only in the avatar scenes?
5. **Engine work needed:** the video engine is landscape-first. I will set the canvas to 720 x 1280 and add a snow layer, the macOS chat/code elements for S04, and a small "prop" element that draws the three demo views from time (so the render is deterministic). This is the main build cost.
6. Placeholders: none for facts. The "AJ | Teacher in Alaska" lower third and #HeyAJ are the only branded text.

## 5. Approval
Approved by AJ on 2026-10-17 (v2): April's mascot as AJ, exact on-screen text kept, snow as planned.

Build notes: S05 to S07 are one continuous scene so the demo window never blinks; captions sit right of the mascot in screen scenes and above the head in full-frame scenes.

---

# v3 additions: more 3D motion graphics, sound design, visual cues (proposed, not built)

Rule kept: the demo window stays the hero. 3D objects sit in the open space around it (top gap, beside the mascot) and never behind text. 3D is rendered by the engine's three.js layer, so every frame stays deterministic.

## 3D motion graphics (glossy glass icons on glowing discs, slow float and spin)
| Scene | Time | 3D object | Why |
|---|---|---|---|
| S01 Hook | 0:00 | Glass "PPT" slide card tilting, then dimming as the real slide fades | sets up the "missing something" idea |
| S02 Intro | 0:05 | Orbiting ring of 3 small icons (book, bulb, cap) around the lower third | teacher intro, adds depth |
| S03 Problem | 0:12 | 3D question-mark icon beside the static slide | abstract idea, hard to see |
| S04 Prompt | 0:28 | 3D sparkle / AI orb that pulses on Send and bursts into small particles at "Done" | the generation moment |
| S05-S07 Circle | 0:31 to 0:56 | 3D pi icon pops at "pi r squared" (0:50); a small floating 3D circle that spins into a rectangle at "rectangle" (0:43) | reinforces the transformation |
| S08 Doubling | 1:02 | Big 3D "x4" cube-face number that drops in at "Apat" (1:02.5) with a short shockwave ring | the answer reveal |
| S09 Triangle | 1:14 | 3D parallelogram outline spins once at "Parallelogram!" (1:14.1) | the reveal word |
| S10 Teacher | 1:25 | 3D checkmark badge (replaces the flat badge), rotating slowly | teacher's role |
| S11 Resolution | 1:31 | Slow rotating 3D heart + cap pair, calm, no swell | resolution |
| S12 Outro | 1:40 | 3D follow bell / plus icon that pops with the button | call to action |
Placement: x/y in the top gap (y 130 to 260) or right of the mascot, size 70 to 110 px so nothing covers captions or windows. Max one new 3D object per scene beat.

## Visual cues (flat, on beat, tied to the spoken word)
- **Highlight pulse** on the thing being named: the slider thumb at "slider" (0:39.6), the Play button at "Tingnan natin" (0:30.2), the New triangle button at 1:21.8.
- **Glow ring** around the window when the demo page opens (S05) and when "x4" lands.
- **Label arrows**: short animated arrows pointing from the note text to base (cyan) and height (violet) in S07, so the colors match the labels.
- **Sparkle burst** (6 small stars) at "Parallelogram" (0:36.8 and 1:14.1) and at the "Done" banner.
- **Slice counter pop**: the slice number scales up briefly each time it changes in S06.
- **Progress dots** under the window in S05-S07 showing the three steps (Slice, Rearrange, Formula), the current one lit.
- **Underline sweep** on emphasized caption words (PPT, parallelogram, radius, triangle).
- **Scene change cue**: a thin light line wipes across the top as each screen scene starts (with a soft whoosh, no flash).

## Sound design (still soft and tactile, per house style)
Existing library (no cost): paper tap, key, click, alert, pen tick, stamp, page flip.
| Moment | Sound |
|---|---|
| Window opens (S03, S05, S08, S09) | soft tap |
| Each slice splits (S05, 0:31.5) | quick cascade of 8 to 12 very soft ticks (pen_tick, low gain) |
| Rearrange (0:34.1 to 0:36.7) | gentle row of taps rising in pitch, ends on a soft click at "parallelogram" |
| Slider drag (S06) | stepped ticks, one per slice change |
| Base / height / area labels | pen tick each (already), plus a quiet glow tone on "pi r squared" |
| "?" appears (S08) | single soft alert |
| x4 reveal | stamp, with the shockwave |
| Parallelogram reveal (S09) | click, then sparkle chimes (very soft, 3 notes) |
| 3D objects appearing | quiet pop, pitched per object |
| Send / Thinking / Done (S04) | click, a low soft pulse loop while "Thinking", alert on Done (exists) |
| Final follow button | click + one soft pop |
New sound files (optional, ElevenLabs sound effects, costs credits and are downloads): "soft glass tick", "soft sparkle chime", "low thinking pulse", "soft shockwave thud". I would quote the credit count before generating anything; without a yes I build everything from the existing library with pitch and gain variations.
Mix: music none; sound effects stay about 1 dB under the voice-over, loudness check after render.

## Open questions
1. OK to use the existing sound library only, or may I generate the 4 optional new effects (I will quote credits first)?
2. 3D density: all 10 scenes as listed, or only the hero beats (S04, S05-S07, S08, S09)?
3. ~~No-whoosh rule~~ removed by AJ: soft whooshes are allowed on scene changes, window opens and 3D entrances. I would add two files, `whoosh.wav` and `whoosh_soft.wav` (about 110 credits est. more).

## Approval
Waiting for AJ.
