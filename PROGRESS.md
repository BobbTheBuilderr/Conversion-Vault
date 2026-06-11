# PROGRESS — A Frame Ahead

Running log of phases, stubs, asset swaps, and version caveats.
Reference: `BUILD_BRIEF.md`. Build phases: §9.

---

## Phase 0 — Plan & scaffold ✅ (current)

**Decision: fresh Next.js scaffold (not a satus clone).**
Rationale: satus bundles Darkroom-specific dev-tag packages, opinionated
WebGL/Theatre wiring, and a lot of demo cruft that would need stripping. A clean
App Router scaffold gives exact, auditable dependency pinning and full control
over the file tree, while still adopting satus's key *patterns* — isolated
`lib/webgl` layer and a single unified rAF loop (tempus) driving Lenis + GSAP +
R3F. We get the architecture without inheriting the boilerplate.

### Done

- `package.json` with **exactly pinned** versions (no `^`/`~`). Every version
  was verified against the live npm registry before pinning.
- TypeScript strict, `tsconfig.json` (Next auto-added `.next/dev/types` include
  + flipped `jsx` to `react-jsx` — expected).
- Tailwind v4 via `@tailwindcss/postcss`; design tokens live in
  `app/globals.css` under `@theme` (palette, fluid type scale, easings,
  durations, layout). Single swappable `--color-accent`.
- `next.config.ts` with `transpilePackages` for three/r3f stack.
- ESLint flat config (`next/core-web-vitals` + `next/typescript`).
- Full directory tree (Section 10) with `.gitkeep`s.
- `app/layout.tsx` (metadata, font-var placeholders), `app/page.tsx` (Phase 0
  placeholder composition with the section build-order map).
- README + this PROGRESS.

### Verified

- `npm install` → 449 packages, all pinned versions resolved exactly
  (`npm ls` confirmed next 16.2.9, react 19.2.7, three 0.184.0, r3f 9.6.1,
  drei 10.7.7, lenis 1.3.23, gsap 3.15.0, motion 12.40.0, scroll-rig 8.15.0,
  tempus 1.0.0-dev.17, hamo 1.0.0-dev.10).
- `npm run build` → ✓ compiled, TS passed, static pages generated.
- `npm run typecheck` → exit 0.
- `npm run dev` → boots in ~0.4s, `GET /` → HTTP 200.

### Version caveats / things to verify

- **TypeScript pinned to 5.9.3**, not the 6.0.3 latest — TS 6.0 is a fresh
  major and Next 16's type plugin isn't yet battle-tested against it. Revisit
  once TS 6 + Next compatibility is confirmed.
- **`tempus` / `hamo` are Darkroom dev-tag packages** (`1.0.0-dev.17` /
  `1.0.0-dev.10`). Pinned to exact dev builds; APIs may shift between dev tags.
  Will verify each against its installed README before use in Phase 1.
- **`lucide-react@1.17.0`** — confirmed `latest` dist-tag (lucide moved past
  0.x to a 1.x line). Not a typo.
- **npm audit**: 2 moderate advisories, both from a transitive `postcss`
  inside Next's own bundle. The only "fix" downgrades Next to 9.3.3 — not
  actionable; ignored intentionally.
- **GSAP licensing**: all plugins free for commercial use since v3.13 — no Club
  GreenSock membership needed. ✅

### ⛔ BLOCKER for content phases

- **`AFrameAhead_Copy.md` is not in the repo.** The brief mandates all section
  copy be used verbatim and forbids inventing copy/clients/testimonials. This
  does not block Phase 0–3 (scaffold, scroll core, preloader, nav chrome) but
  **must be provided before Phase 4–5/8** (hero, plans, approach, contact,
  footer). Flagged for the user.

### Stubs / omissions (per brief)

- Testimonials (§8), Awards (§9), Insights (§10) — OMITTED for launch; will
  leave commented, easily-enabled component stubs. Insights nav link removed.
- Theatre.js, Sanity/Storyblok — optional; not installed yet. Will add only if
  a phase needs them.

---

## Phase 1 — Scroll & render core ⏳ (next)

Planned: Lenis + tempus single rAF loop, GSAP plugin registration,
`prefers-reduced-motion` gate hook. Awaiting Phase 0 review.
