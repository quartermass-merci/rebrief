import { useState, useEffect } from 'react'

/**
 * Reactive media-query hook.
 * Initialises synchronously from window.matchMedia so the first
 * render already reflects the correct viewport — no flash.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    // Sync in case the value changed between render and effect
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}
