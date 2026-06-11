'use client'

import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * useReducedMotion — SSR-safe live subscription to the user's
 * `prefers-reduced-motion` setting.
 *
 * Returns `false` on the server and during the first client render (so markup
 * matches and there's no hydration mismatch), then updates after mount and on
 * any OS-level change. Use this to gate heavy motion: smooth scroll, scrubbed
 * scroll, WebGL idle animation, etc. Content must remain fully usable when true.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    setReduced(mql.matches)

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
