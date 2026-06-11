/* ----------------------------------------------------------------------------
   GSAP — single registration point.
   Import gsap + the configured plugins from HERE everywhere else in the app so
   registration happens exactly once and stays SSR-safe.

   Plugins (all free for commercial use since GSAP 3.13 — no Club membership):
     - ScrollTrigger : scroll-driven timelines, pinning, scrub
     - SplitText     : line/word/char masking for headline reveals
     - Flip          : FLIP layout transitions
     - DrawSVGPlugin : animated SVG stroke draw-on

   GSAP touches `window`/`document` on import, so plugin registration must only
   run in the browser. We register lazily on first client import.
---------------------------------------------------------------------------- */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip, DrawSVGPlugin)

  // The render loop is unified under tempus (which patches rAF). Disable GSAP's
  // lag smoothing so big rAF gaps don't cause animation jumps — tempus owns timing.
  gsap.ticker.lagSmoothing(0)

  // Global tween defaults — tune motion language in ONE place.
  gsap.defaults({
    ease: 'expo.out', // matches --ease-out-expo token in globals.css
    duration: 0.8, // matches --dur-base
  })
}

export { gsap, ScrollTrigger, SplitText, Flip, DrawSVGPlugin }
