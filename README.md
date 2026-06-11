# A Frame Ahead

A cinematic, scroll-driven single-page marketing site for **A Frame Ahead** — a
creative digital agency (immersive web design, 3D storytelling, brand
experiences). Built with Next.js App Router, GSAP scroll choreography, Lenis
smooth scroll, and React Three Fiber WebGL.

> Structure & motion reference (patterns only, no assets cloned):
> <https://noomoagency.com/>. Architecture patterns adapted from Darkroom
> Engineering's `satus` starter.

## Stack (pinned)

| Concern        | Package                                                                 | Version        |
| -------------- | ----------------------------------------------------------------------- | -------------- |
| Framework      | `next` / `react` / `react-dom`                                          | 16.2.9 / 19.2.7 |
| Smooth scroll  | `lenis`                                                                  | 1.3.23         |
| Animation      | `gsap` (+ ScrollTrigger, SplitText, Flip, DrawSVG — all free in 3.13+)   | 3.15.0         |
| UI motion      | `motion` (Framer Motion)                                                 | 12.40.0        |
| 3D             | `three` / `@react-three/fiber` / `@react-three/drei` / `…/postprocessing`| 0.184.0 / 9.6.1 / 10.7.7 / 3.0.4 |
| Scroll-rig     | `@14islands/r3f-scroll-rig`                                              | 8.15.0         |
| rAF loop       | `tempus` (Darkroom dev-tag)                                             | 1.0.0-dev.17   |
| Hooks          | `hamo` (Darkroom dev-tag)                                               | 1.0.0-dev.10   |
| Icons          | `lucide-react`                                                          | 1.17.0         |
| Headlines      | `react-wrap-balancer`                                                   | 1.1.1          |
| Styling        | `tailwindcss` + `@tailwindcss/postcss` (v4)                             | 4.3.0          |
| Language       | `typescript` (strict)                                                   | 5.9.3          |

All versions are pinned exactly in `package.json`. See `PROGRESS.md` for
version caveats verified against the live registry.

## Getting started

```bash
npm install       # install pinned deps
npm run dev       # dev server → http://localhost:3000
npm run build     # production build (must pass before merging a phase)
npm run typecheck # tsc --noEmit (strict)
npm run lint      # eslint (next/core-web-vitals + next/typescript)
```

Requires Node 22+.

## Environment variables

Create `.env.local` (never committed) when wiring the contact form:

```bash
NOTION_TOKEN=secret_xxx      # Notion internal integration token
NOTION_DB_ID=xxxxxxxxxxxx    # target database id for contact submissions
```

Until these are set, the contact handler logs the payload and returns the
animated thank-you state (see Phase 8).

## Project structure

```
app/            layout, page composition, globals.css (design tokens)
components/     section + UI components (preloader, header, hero, …, ui/, cursor/)
lib/
  webgl/        canvas, scenes, shaders (isolated WebGL layer)
  animations/   gsap registration, splitText helpers
  scroll/       lenis + tempus setup (one rAF loop)
  hooks/        useRect, useIsVisible, useMagnetic, …
public/placeholders/   labeled placeholder logos, badges, fonts, models
```

## ⚠️ SWAP THESE ASSETS (placeholder checklist)

These are intentional placeholders — replace before launch:

- [ ] **Section copy** — drop in `AFrameAhead_Copy.md` and wire verbatim copy
      into each section (**required**; not present yet — see PROGRESS).
- [ ] **3D hero scene** — `lib/webgl/scenes` ships a placeholder shader/geometry.
- [ ] **Fonts** — wire real display + sans faces via `next/font` in
      `app/layout.tsx` (`--font-display-face`, `--font-sans-face`).
- [ ] **Client logos** — `public/placeholders/logos` (8 intro slots + marquee).
      No real client names until permitted.
- [ ] **Accent color** — `--color-accent` in `app/globals.css` (single swap).
- [ ] **Location / contact** — email `hello@aframeahead.com`, Kuala Lumpur,
      Malaysia are real and baked in per brief.
- [ ] **Notion credentials** — `NOTION_TOKEN`, `NOTION_DB_ID`.

## Licensing notes

- **GSAP**: as of v3.13 (Webflow, mid-2025) **all** plugins — including
  SplitText, DrawSVG, MorphSVG — are free for commercial use. No Club
  GreenSock membership required.
- `tempus` and `hamo` are Darkroom Engineering **dev-tag** packages; pinned to
  exact dev versions (`1.0.0-dev.*`) because tags can move.
