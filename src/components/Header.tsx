import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'ABOUT', href: '/#about' },
  { label: 'CURRENT ISSUE', href: '/#current-issue' },
  { label: 'SPONSORSHIP', href: '/sponsorship' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const location = useLocation()

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-center py-2">
        <p className="font-nord text-rebrief-light text-[16.68px] tracking-wide">
          ISSUE ONE launches july 9th
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-rebrief-light/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 flex items-center justify-between h-[69px]">
          <Link to="/">
            <img
              src="/images/rebrief-logo.png"
              alt="Rebrief"
              className="h-[26px] w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/sponsorship'
                  ? location.pathname === '/sponsorship'
                  : item.href === '/contact'
                    ? location.pathname === '/contact'
                    : false

              if (item.href.startsWith('/#')) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`font-vanity-condensed text-[20.85px] px-2 py-1 transition-colors hover:text-rebrief-gold ${
                      isActive ? 'text-rebrief-gold' : 'text-rebrief-dark'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-vanity-condensed text-[20.85px] px-2 py-1 transition-colors hover:text-rebrief-gold ${
                    isActive ? 'text-rebrief-gold' : 'text-rebrief-dark'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
