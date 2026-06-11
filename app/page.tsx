/* ----------------------------------------------------------------------------
   A FRAME AHEAD — single-page composition.
   Sections are assembled here in scroll order. In Phase 0 this is a minimal
   placeholder that proves the scaffold renders; each subsequent phase swaps a
   stub below for its real component.

   Build order (BUILD_BRIEF §5 / §9):
     1. Preloader            (Phase 2)
     2. Header / nav         (Phase 3)
     3. Hero (WebGL)         (Phase 4)
     4. Intro / positioning  (Phase 5)
     5. Plans block          (Phase 5)
     6. Client marquee       (Phase 5)
     7. Approach / founders  (Phase 6)
     8. Testimonials         (OMITTED — commented stub)
     9. Awards               (OMITTED — commented stub)
    10. Insights             (OMITTED — commented stub)
    11. Contact / CTA        (Phase 8)
    12. Footer               (Phase 8)
---------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-[--gutter] text-center">
      <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">
        Phase 0 — Scaffold
      </p>
      <h1 className="font-display text-[length:--text-display] leading-[0.9]">
        A Frame Ahead
      </h1>
      <p className="text-muted max-w-xl text-[length:--text-lead]">
        Scaffold online. Scroll &amp; render core, preloader, WebGL hero, and
        sections land in the phases ahead.
      </p>
    </main>
  )
}
