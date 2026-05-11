import { desktop, type ObjectSpec } from '../layout/rebriefLayoutSpec'

const SUBSTACK_URL =
  'https://rebrief.substack.com/?r=2jup5m&utm_medium=ios'

/** Absolute-position helper — reads x/y/width/height/zIndex from spec. */
function pos(o: ObjectSpec) {
  return {
    position: 'absolute' as const,
    left: o.x,
    top: o.y,
    width: o.width,
    height: o.height,
    zIndex: o.zIndex,
  }
}

export default function Footer() {
  const f = desktop.sections.footer

  return (
    <footer
      style={{
        height: f.height,
        background: f.background,
        overflow: f.overflow,
      }}
    >
      <div className="desktop-artboard">
        {/* Wordmark */}
        <img
          src="/images/footer/rebrief-wordmark-large.svg"
          alt="Rebrief"
          style={pos(f.objects.wordmark)}
        />

        {/* Magazine Society lockup */}
        <img
          src="/images/footer/rebrief-magazine-society-lockup.svg"
          alt="Rebrief Magazine Society"
          style={pos(f.objects.magazineSocietyLockup)}
        />

        {/* Left copy — disclaimer + copyright */}
        <div
          style={{
            ...pos(f.objects.leftCopy),
            fontFamily: 'var(--font-nicholas)',
            fontSize: 14,
            lineHeight: 1.55,
            letterSpacing: '0.01em',
            color: '#2a2a2a',
            display: 'flex',
            flexDirection: 'column' as const,
          }}
        >
          <p>
            Rebrief is not affiliated with any agency. It is an entirely
            volunteer-run project incorporated as a not-for-profit as the
            Rebrief Magazine Society.
          </p>
          <p style={{ marginTop: 'auto' }}>&copy; Rebrief Magazine Society 2026</p>
        </div>

        {/* Contact block */}
        <div style={pos(f.objects.contactBlock)}>
          <p
            style={{
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 14,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: '#212121',
              marginBottom: 16,
            }}
          >
            GET IN TOUCH
          </p>
          <p
            style={{
              fontFamily: 'var(--font-nicholas)',
              fontSize: 13,
              lineHeight: 1.55,
              color: '#2a2a2a',
              marginBottom: 18,
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
              fontSize: 13,
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
              fontSize: 13,
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

        {/* Subscribe block */}
        <div style={pos(f.objects.subscribeBlock)}>
          <p
            style={{
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 16,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: '#212121',
              marginBottom: 8,
            }}
          >
            Subscribe to the Rebrief Substack
          </p>
          <p
            style={{
              fontFamily: 'var(--font-nicholas)',
              fontSize: 13,
              lineHeight: 1.55,
              color: '#2a2a2a',
            }}
          >
            Get our latest delivered straight to your inbox.
          </p>
        </div>

        {/* Email input */}
        <div
          style={{
            ...pos(f.objects.emailInput),
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
              fontSize: 14,
              color: '#2a2a2a',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid #212121',
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
              borderBottom: '1px solid #212121',
              padding: '8px 0',
              cursor: 'pointer',
              fontSize: 18,
              lineHeight: 1,
              color: '#212121',
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </footer>
  )
}
