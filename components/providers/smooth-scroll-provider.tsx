'use client'

import { ReactLenis } from 'lenis/react'
import { ReactTempus } from 'tempus/react'
import { getLenisOptions } from '@/lib/scroll/lenis-options'
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion'
import { RafDriver } from './raf-driver'

/**
 * SmoothScrollProvider — site-wide scroll + render-loop wiring (Phase 1).
 *
 * - <ReactTempus patch /> patches window.requestAnimationFrame so the WHOLE app
 *   (GSAP ticker, R3F canvas, our Lenis driver) shares ONE real rAF.
 * - <ReactLenis root> installs smooth scroll on the document and exposes the
 *   Lenis context (`useLenis`) to every descendant.
 * - <RafDriver /> advances Lenis from the tempus tick and syncs ScrollTrigger.
 *
 * `prefers-reduced-motion` is honored by feeding reduced options into Lenis
 * (smoothing off → native scroll) while keeping the instance available so
 * `useLenis` consumers never break.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const reducedMotion = useReducedMotion()

  return (
    <>
      {/* Single rAF: patch global requestAnimationFrame through tempus. */}
      <ReactTempus patch />

      <ReactLenis root options={getLenisOptions(reducedMotion)}>
        <RafDriver />
        {children}
      </ReactLenis>
    </>
  )
}
