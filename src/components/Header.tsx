import { desktop } from '../layout/rebriefLayoutSpec'

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'CURRENT ISSUE', href: '#current-issue' },
  { label: 'SPONSORSHIP', href: '#sponsorship' },
  { label: 'GET IN TOUCH', href: '#contact' },
]

export default function Header() {
  const h = desktop.sections.header

  return (
    <header
      style={{
        height: h.height,
        background: h.background,
        overflow: h.overflow,
      }}
    >
      <div className="desktop-artboard">
        {/* Logo */}
        <a
          href="/"
          aria-label="Rebrief home"
          style={{
            position: 'absolute',
            left: h.objects.logo.x,
            top: h.objects.logo.y,
            width: h.objects.logo.width,
            height: h.objects.logo.height,
            display: 'block',
          }}
        >
          <img
            src="/images/rebrief-logo-large.png"
            alt="Rebrief"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          style={{
            position: 'absolute',
            left: h.objects.desktopNav.x,
            top: h.objects.desktopNav.y,
            width: h.objects.desktopNav.width,
            height: h.objects.desktopNav.height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 8,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-vanity-condensed)',
                fontSize: 14,
                lineHeight: 1.1,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                color: '#212121',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
