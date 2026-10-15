# Customization options

Paths are relative to the repo root. "Placeholder" means the value must be replaced with real content.

## Identity: `src/data/profile.ts`

| Field | Used for | Constraint |
|---|---|---|
| `name` | Rail, SEO, About | Full name |
| `firstName` | "Hi, I'm ___." on About | First name only |
| `handle` | Under name | `@handle` |
| `role` | Phone header line | Short title |
| `avatarSrc` | Rail/phone avatar | Square; SVG/WebP/PNG, transparent best. Default `public/avatar.svg` |
| `verifiedLabel` | Tooltip on the verified tick | What the tick certifies |
| `email`, `location` | Contact, rail | Plain strings |
| `stats[3]` | Phone Home glance widget | `{value, label, Icon}`; Icon is any Phosphor icon exported from `@/components/slab` |
| `displayName.line1/line2` | Intro type-on, then Home headline | 5-8 words total |
| `hero.body`, `portraitSrc`, `portraitAlt` | Home lede and portrait | One line |
| `socials[]` | Rail icons | `{label, href, iconPath}`; icons in `public/icons/` |

## SEO and head: `index.html`, `public/favicon.svg`

Title, description, author, `og:*` and Twitter tags, canonical/URLs, share image.

## Pages (copy at top of each component in `src/components/`)

| Route | Component | Customizable |
|---|---|---|
| `/` | `HomeBento.tsx`, `HomeMobile.tsx`, `Home.tsx` | Bento card copy, explore cards, headline |
| `/projects` | `ProjectsGrid.tsx`, `Projects.tsx`, `src/data/projects.ts`, `src/data/ai-stack.ts` | Apps/extensions (name, tagline, description, imageSrc, accentColor, stats, badge), systems tree, headlines |
| `/services` | `ServicesGrid.tsx`, `Autopilot.tsx` | Three-step method, five services, automation demo steps |
| `/showcase` | `ShowcaseGrid.tsx`, `Flagship.tsx`, `FunnelBarrel.tsx`, `src/data/funnels.ts` | Flagship product screens, changelog, tasks, listings, 3D carousel entries |
| `/testimonials` | `TestimonialsGrid.tsx` | `CLIPS` (video + poster), `CLIENTS` (logo, poster). Real quotes only |
| `/about` | `AboutGrid.tsx` | Bio, credentials, timeline |
| `/contact` | `ContactGrid.tsx`, `src/data/faqs.ts`, `src/lib/contact.ts` | Headline, 5 FAQs, form behavior |
| `/privacy`, `/terms` | `Privacy.tsx`, `ToS.tsx` | Legal text |
| `*` | `NotFound.tsx`, `ThankYou.tsx` | Copy |

## Tools marquee: `src/components/ToolsMarquee.tsx`

List of `{label, icon, color?}`. With `color`, single-color SVG is tinted via mask; without, rendered as `<img>`. Logos in `public/icons/`. The list is duplicated in JSX for a seamless -50% loop; keep that.

## Funnels and websites (3D carousel)

1. HTML into `public/funnels/` (16:9) or `public/samples/` (3:4).
2. Entry in `src/data/funnels.ts` (`file`, `label`, `tag`, `desc`, optional `dir`).
3. `node scripts/make-thumbs.mjs` (needs `npx playwright install chromium` once).
Regenerate placeholders: `node scripts/make-placeholder-sites.mjs`.

## Media

`public/placeholders/` (app, project, testimonial, flagship images), `public/home/` (carousel previews), `public/testimonials/` (videos).

## Contact form: `src/lib/contact.ts`

Default opens visitor's email app. Set `VITE_CONTACT_ENDPOINT` (and `VITE_TURNSTILE_SITE_KEY`) in `.env.production` to post to a backend.

## Design: `src/styles/tokens.css`

See `design-system.md`. Also `--headline-em` in `src/styles/mobile-pass.css` (phone headline size; measure so the headline stays on one line).

## Behavior

- Perf tiers: `src/lib/perf.ts`.
- Accessibility menu / Reduce motion: `src/components/AccessMenu.tsx`, `src/styles/a11y.css`.
- Intro animation: `src/components/IntroOverlay.tsx`, `src/styles/boot.css`.
- Routes: `src/main.tsx`; fixed (non-scrolling) routes list in `src/App.tsx`.
