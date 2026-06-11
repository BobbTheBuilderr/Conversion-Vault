/* ----------------------------------------------------------------------------
   A FRAME AHEAD — single-page composition.
   Sections are assembled here in scroll order. Through Phase 1 this remains a
   scaffold/scroll-test harness that proves the unified render loop (Lenis +
   tempus + GSAP) drives smooth scrolling; each later phase swaps a block below
   for its real component.

   Build order (BUILD_BRIEF §5 / §9):
     1. Preloader            (Phase 2)        7. Approach / founders  (Phase 6)
     2. Header / nav         (Phase 3)        8. Testimonials (OMITTED — stub)
     3. Hero (WebGL)         (Phase 4)        9. Awards       (OMITTED — stub)
     4. Intro / positioning  (Phase 5)       10. Insights     (OMITTED — stub)
     5. Plans block          (Phase 5)       11. Contact / CTA       (Phase 8)
     6. Client marquee       (Phase 5)       12. Footer              (Phase 8)
---------------------------------------------------------------------------- */

// TEMP (Phase 1): scroll-test blocks. Removed once real sections land.
const TEST_BLOCKS = [
  { label: 'Phase 1 — Scroll & render core', note: 'Lenis + tempus + GSAP, one rAF loop. Scroll to feel the smoothing.' },
  { label: 'Unified loop', note: 'tempus patches rAF · drives Lenis · syncs ScrollTrigger.' },
  { label: 'Reduced motion', note: 'Enable “Reduce motion” in your OS — smoothing hands back to native scroll.' },
  { label: 'Sections land next', note: 'Preloader, header, WebGL hero, plans, marquee, contact, footer.' },
]

export default function Home() {
  return (
    <main>
      {TEST_BLOCKS.map((block, i) => (
        <section
          key={block.label}
          className="flex min-h-dvh flex-col items-center justify-center gap-4 px-[--gutter] text-center"
        >
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">
            {String(i + 1).padStart(2, '0')} / {String(TEST_BLOCKS.length).padStart(2, '0')}
          </p>
          <h1 className="font-display text-[length:--text-h1] leading-[0.95]">
            {block.label}
          </h1>
          <p className="text-muted max-w-xl text-[length:--text-lead]">
            {block.note}
          </p>
        </section>
      ))}
    </main>
  )
}
