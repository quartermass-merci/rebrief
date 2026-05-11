import { useState, useEffect, useCallback } from 'react'
import { mobile, mobileNav, type ObjectSpec } from '../layout/rebriefLayoutSpec'

const SUBSTACK_URL =
  'https://rebrief.substack.com/?r=2jup5m&utm_medium=ios'

/** Absolute-position helper — reads x/y/width/height/zIndex from spec. */
function pos(o: ObjectSpec): React.CSSProperties {
  return {
    position: 'absolute',
    left: o.x,
    top: o.y,
    width: o.width,
    height: o.height,
    zIndex: o.zIndex,
  }
}

/* ── Nav links ──────────────────────────────── */
const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Current Issue', id: 'current-issue' },
  { label: 'Sponsorship', id: 'sponsorship' },
  { label: 'Get In Touch', id: 'contact' },
] as const

/* ── Mobile Nav Overlay ─────────────────────── */
function MobileNavOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const nav = mobileNav

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = useCallback(
    (id: string) => {
      onClose()
      // Small delay so overlay closes before scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    },
    [onClose],
  )

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: nav.background,
        zIndex: 9999,
      }}
    >
      <div className="mobile-artboard" style={{ height: '100%' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            ...pos(nav.objects.closeButton),
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 22,
            fontWeight: 300,
            color: '#212121',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          &#x2715;
        </button>

        {/* Nav list */}
        <div
          style={{
            ...pos(nav.objects.navList),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-vanity-condensed)',
                fontSize: 38,
                lineHeight: 1.1,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#212121',
                padding: 0,
                textAlign: 'center',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Contact block */}
        <div
          style={{
            ...pos(nav.objects.contactBlock),
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 16,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#212121',
              marginBottom: 16,
            }}
          >
            GET IN TOUCH
          </p>
          <p
            style={{
              fontFamily: 'var(--font-nicholas)',
              fontSize: 14,
              lineHeight: 1.55,
              color: '#2a2a2a',
              marginBottom: 4,
            }}
          >
            <a
              href="mailto:hello@rebrief.ca"
              style={{ color: '#2a2a2a', textDecoration: 'none' }}
            >
              hello@rebrief.ca
            </a>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-nicholas)',
              fontSize: 14,
              lineHeight: 1.55,
              color: '#2a2a2a',
            }}
          >
            <a
              href="https://www.instagram.com/rebriefmagazine/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2a2a2a', textDecoration: 'underline' }}
            >
              Instagram
            </a>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-nicholas)',
              fontSize: 14,
              lineHeight: 1.55,
              color: '#2a2a2a',
            }}
          >
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2a2a2a', textDecoration: 'underline' }}
            >
              Substack
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function HomeMobile() {
  const [navOpen, setNavOpen] = useState(false)

  const hdr = mobile.sections.header
  const hero = mobile.sections.hero
  const about = mobile.sections.about
  const ci = mobile.sections.currentIssue
  const sp = mobile.sections.sponsorship
  const mh = mobile.sections.getInTouchMasthead
  const fl = mobile.sections.getInTouchFlyer
  const ft = mobile.sections.footer

  return (
    <>
      {/* ── Nav Overlay ──────────────────────── */}
      <MobileNavOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ── Header ───────────────────────────── */}
      <header
        style={{
          height: hdr.height,
          background: hdr.background,
          overflow: hdr.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          {/* navbar-mobile.svg is 402×66; overflow:hidden clips bottom 11px shadow */}
          <img
            src="/mobile/navbar-mobile.svg"
            alt="Rebrief"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 402,
              height: 66,
            }}
          />
          {/* Hamburger hit area — over the ≡ icon in the SVG */}
          <button
            onClick={() => setNavOpen(true)}
            aria-label="Open menu"
            style={{
              position: 'absolute',
              left: hdr.objects.hamburger.x - 10,
              top: hdr.objects.hamburger.y - 10,
              width: hdr.objects.hamburger.width + 20,
              height: hdr.objects.hamburger.height + 20,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        </div>
      </header>

      {/* ── Hero ─────────────────────────────── */}
      <section
        style={{
          height: hero.height,
          background: hero.background,
          overflow: hero.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          <img
            src="/mobile/hero-composite-mobile.png"
            alt="Rebrief Magazine"
            style={{
              ...pos(hero.objects.heroComposite),
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>
      </section>

      {/* ── About ────────────────────────────── */}
      <section
        id="about"
        style={{
          height: about.height,
          background: about.background,
          overflow: about.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          {/* Intro line — live text */}
          <div
            style={{
              ...pos(about.objects.introLine),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 17,
              fontStyle: 'italic',
              lineHeight: 1.35,
              letterSpacing: '0.01em',
              color: '#2a2a2a',
              textAlign: 'center',
            }}
          >
            Advertising is full of things we take for granted. So, each issue asks:
          </div>

          {/* Title + face composite (baked from Figma with correct overlap) */}
          <img
            src="/mobile/about-title-mobile-composite.png"
            alt="What if we took a second look?"
            style={pos(about.objects.titleFaceComposite)}
          />

          {/* Body copy — below composite */}
          <div
            style={{
              ...pos(about.objects.copyBlock),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 16,
              lineHeight: 1.6,
              letterSpacing: '0.015em',
              color: '#2a2a2a',
              textAlign: 'center',
            }}
          >
            <p style={{ marginBottom: 20 }}>
              <em>Rebrief</em> is an independent Canadian journal of advertising.
              We publish essays, fiction, visual experiments, and interviews
              from emerging and established voices across the country,
              treating the industry less like a rulebook and more like a
              playground for ideas.
            </p>
            <p style={{ marginBottom: 20 }}>
              It captures the &ldquo;is this nuts or is this actually
              brilliant?&rdquo; conversations we all have about the work and
              the culture around it. The kind that leave you buzzing.
            </p>
            <p>
              If you take advertising seriously enough to love it, and love
              it enough to take it seriously, this is for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Current Issue ────────────────────── */}
      <section
        id="current-issue"
        style={{
          height: ci.height,
          background: ci.background,
          overflow: ci.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          {/* Star behind text — rendered first, lower z */}
          <img
            src="/mobile/canada-star-mobile.png"
            alt=""
            style={pos(ci.objects.starLarge)}
          />

          {/* Canada text composite (title + subhead + body + launch line) */}
          <img
            src="/mobile/canada-text-mobile.png"
            alt="Issue 01: Canada — What is Canadian advertising?"
            style={pos(ci.objects.canadaTextImage)}
          />
        </div>
      </section>

      {/* ── Sponsorship ──────────────────────── */}
      <section
        id="sponsorship"
        style={{
          height: sp.height,
          background: sp.background,
          overflow: sp.overflow,
          position: 'relative',
          width: '100vw',
          zIndex: 2,
        }}
      >
        <div className="mobile-artboard">
          {/* Sponsorship title image */}
          <img
            src="/mobile/sponsorship-title-mobile.png"
            alt="Return of the Agency House Ad"
            style={pos(sp.objects.sponsorshipTitleImage)}
          />

          {/* Body copy — live text */}
          <div
            style={{
              ...pos(sp.objects.copyBlock),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 16,
              lineHeight: 1.25,
              letterSpacing: '0.01em',
              color: '#2a2a2a',
            }}
          >
            <p style={{ marginBottom: 20 }}>
              Did we go to the trouble of making a physical print magazine
              solely to revive the lost art of the agency house ad? Maybe.
            </p>
            <p style={{ marginBottom: 20 }}>
              At one point these were the sharpest piece of self-promotion
              and critique an agency could make. Let&rsquo;s bring them
              back.
            </p>
            <p>
              See our{' '}
              <a
                href="https://docs.google.com/presentation/d/1eWVAVwSRWv6a1V00ezfZfrk3A8CM96rN9Lx26tGQftc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#c26a2a',
                  textDecoration: 'underline',
                }}
              >
                sponsorship package
              </a>{' '}
              or reach us at{' '}
              <a
                href="mailto:hello@rebrief.ca"
                style={{
                  color: '#2a2a2a',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                hello@rebrief.ca
              </a>
              {' '}for more information on becoming a Rebrief sponsor.
            </p>
          </div>

          {/* Speech bubble image */}
          <img
            src="/mobile/sponsorship-bubble-mobile.png"
            alt="I only read Rebrief for the ads."
            style={pos(sp.objects.speechBubbleImage)}
          />
        </div>
      </section>

      {/* ── Get In Touch — Masthead ──────────── */}
      <section
        id="contact"
        style={{
          height: mh.height,
          background: mh.background,
          overflow: mh.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          {/* Masthead texture — top 705px of 402×1050 image */}
          <img
            src="/mobile/masthead-texture-mobile.png"
            alt=""
            style={{
              ...pos(mh.objects.mastheadTexture),
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />

          {/* Masthead names SVG */}
          <img
            src="/mobile/masthead-names-mobile.svg"
            alt="Masthead — contributors"
            style={pos(mh.objects.mastheadNamesImage)}
          />
        </div>
      </section>

      {/* ── Get In Touch — Flyer ─────────────── */}
      <section
        style={{
          height: fl.height,
          background: fl.background,
          overflow: fl.overflow,
          position: 'relative',
          width: '100vw',
          zIndex: 2,
        }}
      >
        <div className="mobile-artboard">
          {/* Paper texture — bottom 344px of 402×1050 image */}
          <img
            src="/mobile/masthead-texture-mobile.png"
            alt=""
            style={{
              ...pos(fl.objects.paperTexture),
              objectFit: 'cover',
              objectPosition: 'bottom',
            }}
          />

          {/* Flyer image */}
          <img
            src="/mobile/get-in-touch-flyer-mobile.png"
            alt="Have an idea? Want to get involved?"
            style={pos(fl.objects.flyerImage)}
          />
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <footer
        style={{
          height: ft.height,
          background: ft.background,
          overflow: ft.overflow,
          position: 'relative',
          width: '100vw',
        }}
      >
        <div className="mobile-artboard">
          {/* Footer stationery items (top zone, cropped from composite PNG) */}
          <img
            src="/mobile/footerStationery-mobile.png"
            alt=""
            style={{
              ...pos(ft.objects.footerStationery),
              objectFit: 'none',
              objectPosition: '0px -298px',
            }}
          />

          {/* Logo composite SVG */}
          <img
            src="/mobile/footer-rebrief-logo-composite-mobile.svg"
            alt="Rebrief Magazine Society"
            style={pos(ft.objects.logoComposite)}
          />

          {/* Left copy — disclaimer + copyright */}
          <div
            style={{
              ...pos(ft.objects.leftCopy),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 14,
              lineHeight: 1.55,
              letterSpacing: '0.01em',
              color: '#2a2a2a',
            }}
          >
            <p style={{ marginBottom: 10 }}>
              Rebrief is not affiliated with any agency. It is an entirely
              volunteer-run project incorporated as as not-for-profit as the
              Rebrief Magazine Society.
            </p>
            <p style={{ fontWeight: 700 }}>&copy; Rebrief Magazine Society 2026</p>
          </div>

          {/* Contact block */}
          <div style={pos(ft.objects.contactBlock)}>
            <p
              style={{
                fontFamily: 'var(--font-vanity-condensed)',
                fontSize: 18,
                lineHeight: 1.1,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#212121',
                marginBottom: 10,
              }}
            >
              GET IN TOUCH
            </p>
            <p
              style={{
                fontFamily: 'var(--font-nicholas)',
                fontSize: 15,
                lineHeight: 1.45,
                color: '#2a2a2a',
              }}
            >
              <a
                href="mailto:hello@rebrief.ca"
                style={{ color: '#2a2a2a', textDecoration: 'none' }}
              >
                hello@rebrief.ca
              </a>
            </p>
            <p
              style={{
                fontFamily: 'var(--font-nicholas)',
                fontSize: 15,
                lineHeight: 1.45,
                color: '#2a2a2a',
              }}
            >
              <a
                href="https://www.instagram.com/rebriefmagazine/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2a2a2a', textDecoration: 'underline' }}
              >
                Instagram
              </a>
            </p>
            <p
              style={{
                fontFamily: 'var(--font-nicholas)',
                fontSize: 15,
                lineHeight: 1.45,
                color: '#2a2a2a',
              }}
            >
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2a2a2a', textDecoration: 'underline' }}
              >
                Substack
              </a>
            </p>
          </div>

          {/* Subscribe block */}
          <div style={pos(ft.objects.subscribeBlock)}>
            <p
              style={{
                fontFamily: 'var(--font-vanity-condensed)',
                fontSize: 17,
                lineHeight: 1.1,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#212121',
              }}
            >
              Subscribe to the Rebrief Substack
            </p>
          </div>

          {/* Email input */}
          <div
            style={{
              ...pos(ft.objects.emailInput),
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email address"
              style={{
                flex: 1,
                fontFamily: 'var(--font-nicholas)',
                fontSize: 16,
                color: '#2a2a2a',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #212121',
                padding: '8px 0',
                outline: 'none',
              }}
            />
            <button
              type="button"
              aria-label="Subscribe"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #212121',
                padding: '8px 0',
                cursor: 'pointer',
                fontSize: 22,
                lineHeight: 1,
                fontWeight: 700,
                color: '#212121',
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
