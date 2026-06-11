'use client'

import { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { useTempus } from 'tempus/react'
import { ScrollTrigger } from '@/lib/animations/gsap'

/**
 * RafDriver — the heart of the single unified render loop.
 *
 * Must render INSIDE <ReactLenis> so `useLenis()` can reach the instance.
 *
 * 1. tempus owns the one real rAF (ReactTempus calls Tempus.patch(), which
 *    routes window.requestAnimationFrame — and therefore GSAP's ticker and the
 *    R3F loop — through tempus).
 * 2. Here we add Lenis to that same loop: every tempus tick advances
 *    `lenis.raf(time)`. `time` is tempus's monotonic elapsed-ms clock, exactly
 *    what Lenis expects.
 * 3. On every Lenis scroll we call `ScrollTrigger.update()` so GSAP scroll
 *    animations stay in sync with the smoothed scroll position.
 *
 * Result: Lenis + GSAP + R3F all advance on ONE rAF — no competing loops, no jank.
 */
export function RafDriver() {
  // Subscribe a scroll callback and grab the live Lenis instance.
  // (3) Keep ScrollTrigger in lock-step with the smoothed scroll position.
  const lenis = useLenis(() => {
    ScrollTrigger.update()
  })

  // (2) Drive Lenis from the unified tempus loop. priority 0 = run early so the
  // scroll position is updated before dependent animations read it this frame.
  // useTempus refreshes its callback ref each render, so this always sees the
  // current `lenis` without re-subscribing the loop.
  useTempus(
    (time: number) => {
      lenis?.raf(time)
    },
    { priority: 0 },
  )

  // After mount (and whenever Lenis swaps in), refresh ScrollTrigger so pin
  // positions/measurements account for the smooth-scroll container.
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [lenis])

  return null
}
