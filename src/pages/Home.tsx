import { desktop, type ObjectSpec } from '../layout/rebriefLayoutSpec'

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

export default function Home() {
  const hero = desktop.sections.hero
  const about = desktop.sections.about
  const ci = desktop.sections.currentIssue
  const sp = desktop.sections.sponsorship
  const git = desktop.sections.getInTouch

  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section
        style={{
          height: hero.height,
          background: hero.background,
          overflow: hero.overflow,
        }}
      >
        <div className="desktop-artboard">
          <img
            src="/images/hero/hero-composite-desktop.png"
            alt="Rebrief — A New Canadian Journal of Advertising. Issue 01: Canada. Launching July 2026."
            style={pos(hero.objects.heroComposite)}
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
        }}
      >
        <div className="desktop-artboard">
          {/* Intro line */}
          <div
            style={{
              ...pos(about.objects.introLine),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 17,
              fontStyle: 'italic',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
              color: '#2a2a2a',
              textAlign: 'center',
            }}
          >
            Advertising is full of things we take for granted. So, each issue asks:
          </div>

          {/* About title (flattened PNG) */}
          <img
            src="/images/about/about-title.png"
            alt="Canadian Advertising Needs a Rebrief"
            style={pos(about.objects.aboutTitleImage)}
          />

          {/* Halftone face */}
          <img
            src="/images/about/about-halftone-face.png"
            alt=""
            style={pos(about.objects.faceImage)}
          />

          {/* Body copy */}
          <div
            style={{
              ...pos(about.objects.copyBlock),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 17,
              lineHeight: 1.5,
              letterSpacing: '0.015em',
              color: '#2a2a2a',
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
        }}
      >
        <div className="desktop-artboard">
          {/* Issue label */}
          <div
            style={{
              ...pos(ci.objects.issueLabel),
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 32,
              lineHeight: 1.1,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
              whiteSpace: 'nowrap' as const,
              color: 'var(--leaf, #c9b755)',
            }}
          >
            Issue 01:
          </div>

          {/* Canada title (flattened PNG) */}
          <img
            src="/images/current-issue/canada-title.png"
            alt="Canada"
            style={pos(ci.objects.canadaTitleImage)}
          />

          {/* Subhead */}
          <div
            style={{
              ...pos(ci.objects.subhead),
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 45,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              whiteSpace: 'nowrap' as const,
              color: '#f5f5f5',
            }}
          >
            What is Canadian advertising?
          </div>

          {/* Body copy */}
          <div
            style={{
              ...pos(ci.objects.bodyCopy),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 15.5,
              lineHeight: 1.5,
              letterSpacing: '0.015em',
              color: '#d0d0d0',
            }}
          >
            <p style={{ marginBottom: 24 }}>
              It should be a simple question. We&rsquo;re the country of
              McLuhan, Like a Girl, and VS. Our impact on ideas and media
              is anything but small. And still, we find ourselves looking
              outward, comparing against bigger, more
              &ldquo;polished&rdquo; markets.
            </p>
            <p style={{ marginBottom: 24 }}>
              Across 20+ contributors, we explore the magic, the myths,
              the insecurities, and the brilliance that shape Canadian
              advertising.
            </p>
            <p>
              Yes, there are house hippos.
            </p>
          </div>

          {/* Launch line */}
          <div
            style={{
              ...pos(ci.objects.launchLine),
              fontFamily: 'var(--font-vanity-condensed)',
              fontSize: 21,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              whiteSpace: 'nowrap' as const,
              color: 'var(--leaf, #c9b755)',
            }}
          >
            Issue 01 launches July 9, 2026.
          </div>

          {/* Star large */}
          <img
            src="/images/current-issue/star-large.svg"
            alt=""
            style={pos(ci.objects.starLarge)}
          />

          {/* Star small */}
          <img
            src="/images/current-issue/star-small.svg"
            alt=""
            style={pos(ci.objects.starSmall)}
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
        }}
      >
        <div className="desktop-artboard">
          {/* Bubble + title composite */}
          <img
            src="/images/sponsorship/sponsorship-bubble-title-composite.png"
            alt="I only read Rebrief for the ads. Return of the Agency House Ad."
            style={pos(sp.objects.compositeImage)}
          />

          {/* Body copy */}
          <div
            style={{
              ...pos(sp.objects.copyBlock),
              fontFamily: 'var(--font-nicholas)',
              fontSize: 15,
              lineHeight: 1.5,
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
                  color: 'var(--copper, #ac6120)',
                  textDecoration: 'underline',
                }}
              >
                sponsorship package
              </a>{' '}
              or reach us at{' '}
              <a
                href="mailto:hello@rebrief.ca"
                style={{
                  color: 'var(--copper, #ac6120)',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                hello@rebrief.ca
              </a>
              {' '}for more information on becoming a Rebrief sponsor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Get In Touch ─────────────────────── */}
      <section
        id="contact"
        style={{
          height: git.height,
          background: git.background,
          overflow: git.overflow,
        }}
      >
        <div className="desktop-artboard">
          {/* Left panel — masthead texture (left half of full-width image) */}
          <div
            style={{
              ...pos(git.objects.mastheadTexture),
              backgroundImage:
                'url(/images/get-in-touch/masthead-texture-desktop.jpg)',
              backgroundSize: '1440px 797px',
              backgroundPosition: '0 0',
            }}
          />

          {/* Right panel — paper texture (right half of full-width image) */}
          <div
            style={{
              ...pos(git.objects.paperTexture),
              backgroundImage:
                'url(/images/get-in-touch/masthead-texture-desktop.jpg)',
              backgroundSize: '1440px 797px',
              backgroundPosition: '-720px 0',
            }}
          />

          {/* Masthead names */}
          <img
            src="/images/get-in-touch/masthead-names.png"
            alt="Rebrief Masthead"
            style={pos(git.objects.mastheadNamesImage)}
          />

          {/* Get In Touch flyer */}
          <img
            src="/images/get-in-touch/get-in-touch-flyer.png"
            alt="Get In Touch"
            style={pos(git.objects.flyerImage)}
          />
        </div>
      </section>
    </>
  )
}
