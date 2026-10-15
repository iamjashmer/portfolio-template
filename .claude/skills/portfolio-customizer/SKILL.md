---
name: portfolio-customizer
description: Customize this portfolio template (Vite + React + TS) for a specific person. Use when asked to personalize, rebrand, fill placeholders, change colors/fonts/animations, add projects/funnels/testimonials, or review the design system samples.
---

# Portfolio customizer

This repo is a template. Every piece of content is a placeholder (`grep -rn PLACEHOLDER src index.html`). Work from the person's real facts only: never invent testimonials, credentials, years, prices, or clients. Leave anything unknown marked `PLACEHOLDER` and list it at the end.

## Workflow

1. **Intake.** Collect: full name, first name, handle, role/title, city or timezone, years in the field, certifications, subjects/services, 3 proof stats, what visitors should do (contact, view work, book), socials, photo, brand color preference, light/dark preference.
2. **Identity first.** Edit `src/data/profile.ts` and the SEO block in `index.html`. Rebuild nothing else until these are right.
3. **Page copy.** Walk the view components in the order in `references/options.md` (Home, Projects, Services, Showcase, Testimonials, About, Contact, FAQs).
4. **Design.** Change colors, type and motion only through tokens (`src/styles/tokens.css`), never per component. See `references/design-system.md`.
5. **Verify.** `npx tsc --noEmit`, `npm run lint`, run the dev server, and check Home, every route, phone width (under 1100px), dark mode, and reduced motion.
6. **Review samples.** Open `/design-system/index.html` (regenerate with `node scripts/make-design-system.mjs`) to check tokens, components and every animation before pushing.
7. **Report.** Summarize what changed and list remaining placeholders. Do not push until the user has reviewed.

## Rules

- Content lives in `src/data/*.ts` and at the top of view components. Prefer data edits over JSX edits.
- Keep exported names and types stable in `src/data/*`.
- Anything new above the fold on Home must join the hold-back list in `src/styles/boot.css`.
- Keep `backdrop-filter` blur off layers above the animated shader (perf).
- Respect `prefers-reduced-motion` and the Reduce motion switch for any new animation.
- License is PolyForm Noncommercial: fine for the person's own portfolio, not for building sites for others for pay.

## References

- `references/options.md`: every customizable spot, file, field and constraint.
- `references/design-system.md`: tokens, type, radii, shadows, motion, animation catalog.
