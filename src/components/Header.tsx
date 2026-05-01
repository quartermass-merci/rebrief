import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'ABOUT', href: '/#about', id: 'about' },
  { label: 'CURRENT ISSUE', href: '/#current-issue', id: 'current-issue' },
  { label: 'SPONSORSHIP', href: '/#sponsorship', id: 'sponsorship' },
  { label: 'CONTACT', href: '/#contact', id: 'contact' },
]

export default function Header() {
  const [activeId, setActiveId] = useState<string>('')

  // Track which section is at the top of the viewport — highlight matching nav link.
  useEffect(() => {
    let raf = 0
    function update() {
      const sections = NAV_ITEMS.map((n) => ({
        id: n.id,
        el: document.getElementById(n.id),
      })).filter((s): s is { id: string; el: HTMLElement } => s.el !== null)
      if (!sections.length) return

      // Pick whichever section's top is closest to (but not below) the sticky-nav line.
      const navOffset = 120 // px below viewport top
      const top = sections
        .map((s) => ({ id: s.id, top: s.el.getBoundingClientRect().top }))
        .filter((s) => s.top - navOffset <= 0)
        .sort((a, b) => b.top - a.top) // closest to top of band wins

      setActiveId(top[0]?.id ?? '')
    }

    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black h-[35px] flex items-center justify-center">
        <p className="font-nord text-rebrief-light text-[14px] tracking-[0.18em] uppercase">
          Issue One Launches July 09, 2026
        </p>
      </div>

      {/* Navigation — bg matches warm paper gradient top so header reads as one continuous unit */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(240, 236, 228, 0.94)' }}
        aria-label="Primary"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[52px] flex items-center justify-between gap-3 h-[60px] lg:h-[72px]">
          <Link
            to="/"
            className="flex-shrink-0 inline-flex items-center min-h-[44px] -ml-2 px-2"
            aria-label="Rebrief home"
          >
            <img
              src="/images/rebrief-logo.png"
              alt=""
              className="h-[22px] lg:h-[26px] w-auto object-contain"
            />
          </Link>

          <ul className="flex items-center gap-0.5 lg:gap-2 overflow-x-auto scrollbar-none list-none p-0 m-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`font-vanity-condensed text-[14px] lg:text-[20.85px] inline-flex items-center min-h-[44px] px-2 lg:px-3 transition-colors hover:text-rebrief-gold whitespace-nowrap ${
                      isActive ? 'text-rebrief-gold' : 'text-rebrief-dark'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
