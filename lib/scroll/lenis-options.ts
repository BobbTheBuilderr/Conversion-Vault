import type { LenisOptions } from 'lenis'

/**
 * Shared Lenis configuration.
 *
 * `autoRaf` is OFF on purpose: Lenis does NOT run its own requestAnimationFrame.
 * Instead it is driven from the single unified loop (tempus) in RafDriver, so
 * Lenis + GSAP + R3F all advance on ONE rAF tick — see SmoothScrollProvider.
 *
 * When the user prefers reduced motion we disable wheel/touch smoothing, which
 * effectively hands scrolling back to the browser's native behavior while
 * keeping the Lenis instance (and `useLenis`) available to the rest of the app.
 */
export function getLenisOptions(reducedMotion: boolean): LenisOptions {
  return {
    autoRaf: false,

    // --- feel (tunable) ---
    duration: 1.2, // seconds to ease to target; higher = heavier glide
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out

    // --- smoothing toggles, gated by reduced-motion ---
    smoothWheel: !reducedMotion,
    syncTouch: false, // keep native touch scrolling (better mobile a11y/perf)

    // --- input tuning ---
    wheelMultiplier: 1,
    touchMultiplier: 1,
  }
}
