import { useState, useEffect } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DevOverlay from '../components/DevOverlay'
import Home from './Home'
import HomeMobile from './HomeMobile'

const MOBILE_DESIGN_WIDTH = 402

/**
 * Responsive root page.
 *   <= 1242 px  -->  mobile layout  (self-contained header/footer/nav)
 *   >= 1243 px  -->  desktop layout (Header + Home + Footer)
 *
 * Desktop content is 1243 px wide, so the breakpoint sits exactly
 * where desktop stops causing horizontal scroll.
 *
 * When the viewport is narrower than the 402 px mobile artboard,
 * CSS zoom scales the layout down to fit — no horizontal overflow.
 * zoom (unlike transform) does NOT create a new containing block,
 * so the fixed-position nav overlay keeps working.
 */
export default function ResponsiveHome() {
  const isMobile = useMediaQuery('(max-width: 1242px)')

  if (isMobile) return <MobileView />

  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
      {import.meta.env.DEV && <DevOverlay />}
    </div>
  )
}

/* ── Scaled mobile wrapper ─────────────────────── */

function MobileView() {
  const [zoom, setZoom] = useState<number>(() =>
    Math.min(1, window.innerWidth / MOBILE_DESIGN_WIDTH),
  )

  useEffect(() => {
    const update = () =>
      setZoom(Math.min(1, window.innerWidth / MOBILE_DESIGN_WIDTH))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Only apply zoom when viewport is narrower than design width
  const needsZoom = zoom < 1

  return (
    <div
      style={
        needsZoom
          ? { zoom, overflow: 'hidden' as const, width: '100vw' }
          : undefined
      }
    >
      <HomeMobile />
    </div>
  )
}
