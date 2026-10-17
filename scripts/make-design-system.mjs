// Generates public/design-system/index.html: tokens (read live from
// src/styles/tokens.css), type, shape, motion, animation samples and links to
// every route and sample page. Run: node scripts/make-design-system.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const css = readFileSync(join(root, 'src/styles/tokens.css'), 'utf8')

const grab = (block) => {
  const out = {}
  for (const m of block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);(?:\s*\/\*\s*(.*?)\s*\*\/)?/g)) {
    out[m[1]] = { value: m[2].trim(), note: m[3] || '' }
  }
  return out
}
const rootBlocks = [...css.matchAll(/:root\s*\{([\s\S]*?)\n\}/g)].map((m) => m[1]).join('\n')
const darkBlock = (css.match(/\[data-theme='dark'\]\s*\{([\s\S]*?)\n\}/) || [, ''])[1]
const light = grab(rootBlocks)
const dark = grab(darkBlock)

const colorNames = Object.keys(light).filter((k) => /^#|^rgba?\(/.test(light[k].value))
const swatch = (k) => `<div class="sw"><div class="chip" style="background:var(${k})"></div>
  <b>${k}</b><code>${light[k].value}</code>${dark[k] ? `<code class="d">dark ${dark[k].value}</code>` : ''}
  <small>${light[k].note.replace(/</g, '&lt;')}</small></div>`

const list = (dir, ext) => {
  try {
    return readdirSync(join(root, 'public', dir)).filter((f) => f.endsWith(ext)).sort()
  } catch {
    return []
  }
}
const links = (dir) =>
  list(dir, '.html').map((f) => `<a class="lnk" href="/${dir}/${f}" target="_blank">${f}</a>`).join('')

const routes = ['/', '/projects', '/services', '/showcase', '/testimonials', '/about', '/contact', '/privacy', '/terms', '/thank-you', '/nope']
const anims = [
  ['marquee', 'Tools marquee loop', '<div class="track"><span>Canva</span><span>Classroom</span><span>Zoom</span><span>Docs</span><span>Canva</span><span>Classroom</span><span>Zoom</span><span>Docs</span></div>', 'marquee 6s linear infinite'],
  ['hero-badge-float', 'Badge float', '<div class="badge"></div>', 'float 3.2s ease-in-out infinite'],
  ['route-rise', 'Page arrival', '<div class="card">Page</div>', 'rise 600ms var(--ease-out) both'],
  ['cgrid-pop', 'Pop in (spring)', '<div class="dot"></div>', 'pop 500ms var(--ease-spring) both'],
  ['cgrid-shake', 'Form error shake', '<div class="card">Error</div>', 'shake 500ms both'],
  ['ppanel-shimmer', 'Loading shimmer', '<div class="bar shim"></div>', ''],
  ['nameplate-pulse', 'Status pulse', '<div class="dot pulse"></div>', ''],
  ['intro-word', 'Intro word', '<div class="word">Welcome</div>', 'word 900ms var(--ease-out) both'],
  ['intro-flash', 'Intro flash', '<div class="dot flash"></div>', ''],
  ['picon-draw', 'Icon stroke draw', '<svg width="80" height="40"><path d="M5 20h70" stroke="var(--orange)" stroke-width="4" stroke-linecap="round" stroke-dasharray="70" class="draw"/></svg>', ''],
  ['bento-drift-up', 'Bento drift', '<div class="drift"><i></i><i></i><i></i><i></i></div>', 'drift 4s linear infinite'],
  ['theme-sweep', 'Theme switch', '<button class="btn" onclick="toggleTheme()">Toggle light/dark</button>', ''],
]

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Design System Samples</title>
<style>
${css.split('/* ============================================\n   SHELL')[0]}
${css.match(/\[data-theme='dark'\]\s*\{[\s\S]*?\n\}/)[0]}
:root{--paper:#FBFBF7;--line:rgba(11,30,63,.14);--tint:rgba(11,30,63,.05)}
[data-theme='dark']{--paper:#0B1120;--line:rgba(255,255,255,.09);--tint:rgba(255,255,255,.05)}
*{box-sizing:border-box}
body{margin:0;font-family:var(--font-display);background:var(--cream);color:var(--navy);font-size:var(--fs-body);line-height:var(--lh-body)}
main{max-width:1100px;margin:0 auto;padding:32px 20px 96px}
header.top{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
h1{font-size:var(--fs-h2);line-height:var(--lh-heading);letter-spacing:var(--ls-display);margin:0}
h2{font-size:var(--fs-h3);margin:56px 0 4px}
.eyebrow{font-size:var(--fs-eyebrow);letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--orange-ink);font-weight:600}
p.sub{color:var(--muted);margin:0 0 16px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.sw,.cell{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:4px}
.chip{height:56px;border-radius:10px;border:1px solid var(--line)}
code{font-size:12px;color:var(--muted);word-break:break-all}code.d{color:var(--orange-ink)}
small{font-size:11px;color:var(--muted)}
.btn{font:inherit;font-weight:600;background:var(--orange);color:#fff;border:0;border-radius:var(--radius-pill);padding:10px 20px;cursor:pointer;box-shadow:var(--shadow-btn);transition:background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-spring)}
.btn:hover{background:var(--orange-hover);transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--navy);border:1px solid var(--line)}
.card{background:var(--white);border:1px solid var(--line);border-radius:var(--radius-card);padding:20px;box-shadow:var(--shadow-soft)}
.type div{border-bottom:1px solid var(--line);padding:8px 0}
.lnk{display:inline-block;margin:4px 6px 4px 0;padding:6px 12px;border:1px solid var(--line);border-radius:999px;color:var(--navy);text-decoration:none;font-size:13px;background:var(--paper)}
.lnk:hover{border-color:var(--orange)}
.stage{height:96px;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:12px;background:var(--tint);margin-bottom:8px}
.replay{font:inherit;font-size:12px;background:none;border:1px solid var(--line);border-radius:999px;padding:4px 10px;color:var(--navy);cursor:pointer;align-self:flex-start}
.track{display:flex;gap:28px;white-space:nowrap;font-weight:600;width:max-content}
.badge{width:44px;height:44px;border-radius:12px;background:var(--orange)}
.dot{width:32px;height:32px;border-radius:50%;background:var(--orange)}
.word{font-size:24px;font-weight:600}
.bar{height:16px;width:80%;border-radius:8px}
.shim{background:linear-gradient(90deg,rgba(128,128,128,.18) 25%,rgba(128,128,128,.45) 50%,rgba(128,128,128,.18) 75%);background-size:200% 100%;animation:shimmer 1.6s linear infinite}
.drift{height:60px;overflow:hidden}.drift i{display:block;height:28px;margin-bottom:6px;border-radius:8px;background:var(--orange)}
.ease{height:12px;border-radius:6px;background:var(--tint);position:relative;margin:10px 0}.ease b{position:absolute;top:-4px;left:0;width:20px;height:20px;border-radius:50%;background:var(--orange)}
.shadows .cell{height:90px;background:var(--white)}
.pulse{position:relative}.pulse::after{content:'';position:absolute;inset:0;border-radius:50%;background:var(--orange);animation:pulse 1.6s ease-out infinite}.flash{animation:flash 1.2s ease-out infinite}.draw{animation:draw 900ms var(--ease-out) infinite alternate}
@keyframes marquee{to{transform:translate(-50%)}}
@keyframes float{50%{transform:translateY(-10px) rotate(-8deg)}}
@keyframes rise{from{opacity:0;transform:translateY(8px)}}
@keyframes pop{from{opacity:0;transform:scale(.4)}}
@keyframes shake{10%,90%{transform:translateX(-1px)}20%,80%{transform:translateX(2px)}30%,50%,70%{transform:translateX(-4px)}40%,60%{transform:translateX(4px)}}
@keyframes shimmer{from{background-position:200% 0}to{background-position:-200% 0}}
@keyframes pulse{0%{transform:scale(.85);opacity:.55}70%,100%{transform:scale(1.5);opacity:0}}
@keyframes word{from{opacity:0;transform:translateY(12px);letter-spacing:.12em}to{opacity:1;letter-spacing:.04em}}
@keyframes flash{0%{opacity:0;transform:scale(.2)}35%{opacity:1;transform:scale(1.6)}100%{opacity:0;transform:scale(.3)}}
@keyframes draw{from{stroke-dashoffset:70}to{stroke-dashoffset:0}}
@keyframes drift{to{transform:translateY(-34px)}}
@keyframes slide{0%,100%{left:0}50%{left:calc(100% - 20px)}}
</style></head><body><main>
<header class="top"><div><div class="eyebrow">Design system</div><h1>Samples &amp; animations</h1></div>
<div><button class="btn" onclick="toggleTheme()">Light / dark</button> <button class="btn ghost" onclick="replayAll()">Replay all</button></div></header>
<p class="sub">Generated from <code>src/styles/tokens.css</code>. Edit tokens, rerun <code>node scripts/make-design-system.mjs</code>.</p>

<h2>Colors</h2><p class="sub">Light value shown; dark override in orange.</p>
<div class="grid">${colorNames.map(swatch).join('')}</div>

<h2>Type</h2><p class="sub">Poppins.</p>
<div class="card type">
<div class="eyebrow">Eyebrow label</div>
<div style="font-size:var(--fs-display);line-height:var(--lh-tight);letter-spacing:var(--ls-display);font-weight:600">Display</div>
<div style="font-size:var(--fs-h2);line-height:var(--lh-heading);font-weight:600">Heading two</div>
<div style="font-size:var(--fs-h3);font-weight:600">Heading three</div>
<div>Body text at ${light['--fs-body']?.value}. Teaching that makes learning stick.</div></div>

<h2>Buttons &amp; cards</h2>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px"><button class="btn">Primary</button><button class="btn ghost">Secondary</button></div>
<div class="grid"><div class="card">Card · radius ${light['--radius-card']?.value}</div><div class="card" style="background:var(--panel-dark);color:#fff">Dark panel</div><div class="card" style="background:var(--glass);backdrop-filter:blur(8px)">Glass</div></div>

<h2>Shadows</h2>
<div class="grid shadows"><div class="cell" style="box-shadow:var(--shadow-soft)">soft</div><div class="cell" style="box-shadow:var(--shadow-card)">card</div><div class="cell" style="box-shadow:var(--shadow-btn)">btn</div></div>

<h2>Motion tokens</h2><p class="sub">Easing and durations.</p>
<div class="grid">
${[['--ease-out', 'var(--dur-slow)'], ['--ease-spring', 'var(--dur-slow)'], ['linear', 'var(--dur-slow)']]
  .map(([e, d]) => `<div class="cell"><b>${e}</b><div class="ease"><b class="mv" style="animation:slide 2s ${e.startsWith('--') ? `var(${e})` : e} infinite"></b></div></div>`)
  .join('')}
<div class="cell"><b>durations</b><code>fast ${light['--dur-fast']?.value} · med ${light['--dur-med']?.value} · slow ${light['--dur-slow']?.value}</code></div></div>

<h2>Animation samples</h2><p class="sub">Simplified replicas of the site's keyframes. Press Replay to restart.</p>
<div class="grid">
${anims
  .map(
    ([id, label, markup, anim]) => `<div class="cell"><div class="stage"><div class="a" data-anim="${anim}" style="${anim ? `animation:${anim}` : ''}">${markup}</div></div><b>${label}</b><code>@keyframes ${id}</code><button class="replay" onclick="replay(this)">Replay</button></div>`
  )
  .join('')}
</div>

<h2>Live pages</h2><p class="sub">Open the running app (intro, shader, 3D carousel and Lenis scroll can only be seen there).</p>
<div>${routes.map((r) => `<a class="lnk" href="${r}" target="_blank">${r}</a>`).join('')}</div>
<h2>Funnels</h2><div>${links('funnels')}</div>
<h2>Websites</h2><div>${links('samples')}</div>
<h2>Other</h2><div><a class="lnk" href="/placeholders/sample-plan.html" target="_blank">sample-plan.html</a></div>
</main>
<script>
function toggleTheme(){var r=document.documentElement;r.dataset.theme=r.dataset.theme==='dark'?'light':'dark'}
function replay(b){var a=b.parentElement.querySelector('.a');var els=[a].concat([].slice.call(a.querySelectorAll('*')));els.forEach(function(e){var p=e.style.animation;e.style.animation='none';e.getBoundingClientRect();e.style.animation=p})}
function replayAll(){document.querySelectorAll('.replay').forEach(replay)}
</script></body></html>`

mkdirSync(join(root, 'public/design-system'), { recursive: true })
writeFileSync(join(root, 'public/design-system/index.html'), html)
console.log('wrote public/design-system/index.html')
