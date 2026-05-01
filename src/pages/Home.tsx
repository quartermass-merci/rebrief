import { lazy, Suspense } from 'react'
import HouseAdViewer from '../components/HouseAdViewer'

// Lazy-load the PDF flipbook (~1MB pdfjs-dist) — only loads when section enters viewport.
const PdfFlipbook = lazy(() => import('../components/PdfFlipbook'))

const RE_WORDS = [
  'REWIND',
  'REIDENTIFY',
  'REWRITE',
  'RECONSIDER',
  'REDIRECT',
  'REARTICULATE',
]

const SPONSORSHIP_PDF =
  '/Rebrief%20Sponsorshp%20Package%202026%20%5BAPR%202026%5D.pdf'

export default function Home() {
  return (
    <>
      {/* Hero — masthead lockup, flat warm paper bg merges with page */}
      <section className="w-full bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto pt-[24px] pb-[24px]">
          <h1 className="w-full flex items-center justify-center m-0">
            <img
              src="/images/rebrief-masthead.svg"
              alt="Rebrief — A New Canadian Journal of Advertising"
              className="block w-full max-w-[1280px] h-auto"
            />
          </h1>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[52px] pt-16 lg:pt-[100px] pb-12 lg:pb-[60px]">
          <div className="space-y-8 lg:space-y-[40px]">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,9vw,83.42px)] leading-[1.05]">
              CANADIAN ADVERTISING
              <br />
              NEEDS A REBRIEF
            </h2>
            <div className="flex flex-col lg:flex-row items-stretch justify-start gap-8 lg:gap-[60px]">
              <div className="flex-1 min-w-0 max-w-full lg:max-w-[640px] space-y-[20px] font-body text-[18px] lg:text-[22px] leading-[1.5] tracking-[0.01em]">
                <p>
                  <span
                    className="font-vanity-expanded float-left mr-3 text-rebrief-dark leading-[0.85]"
                    style={{
                      fontSize: 'clamp(4.5rem, 7vw, 6rem)',
                      marginTop: '0.05em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    A
                  </span>
                  dvertising is full of things we take for granted. So, each
                  issue asks: what if we took a second look?
                </p>
                <p>
                  We publish essays, fiction, visual experiments, and interviews
                  from emerging and established voices across the country,
                  treating the industry less like a rulebook and more like a
                  playground for ideas.
                </p>
                <p>
                  Rebrief captures the &ldquo;is this nuts or is this actually
                  brilliant?&rdquo; conversations we all have about the work and
                  the culture around it. The kind that leave you buzzing.
                </p>
                <p>
                  If you take advertising seriously enough to love it, and love
                  it enough to take it seriously, this is for you.
                </p>
              </div>
              <div className="flex-1 min-w-0 max-w-full lg:max-w-[680px]">
                <img
                  src="https://framerusercontent.com/images/QPbCI9VEOY4mZAru67zI61HdSs.png?width=2028&height=1800"
                  alt="Rebrief Issue One spread"
                  className="w-full h-auto lg:h-full object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue One */}
      <section id="current-issue" className="bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:pl-[49px] lg:pr-[55px] pt-8 lg:pt-[20px] pb-16 lg:pb-[100px]">
          <div className="space-y-8 lg:space-y-[29px]">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,9vw,83.42px)] leading-[1] tracking-[0.01em]">
              ISSUE 01: CANADA
            </h2>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-[60px]">
              <div className="flex-1 min-w-0 w-full max-w-full lg:max-w-[600px] space-y-[25px]">
                <p className="font-nord text-[20px] lg:text-[25.03px] leading-[1.1] tracking-[0.05em]">
                  What is Canadian advertising?
                </p>
                <div className="font-body text-[18px] lg:text-[22px] leading-[1.5] tracking-[0.01em] space-y-[20px]">
                  <p>
                    It should be a simple question. We&rsquo;re the country of
                    McLuhan, Like a Girl, and VS. Our impact on ideas and media
                    is anything but small. And still, we find ourselves looking
                    outward, comparing against bigger, more &lsquo;pedigreed&rsquo;
                    markets. Across 20+ contributors, we explore the magic, the
                    myths, the insecurities, and the brilliance that shape
                    Canadian advertising.
                  </p>
                  <p>Issue 01 drops July 9, 2026.</p>
                </div>
              </div>

              {/* RE- words — mixed Vanity Condensed (RE) + Vanity Expanded (rest) */}
              <div className="flex flex-col gap-[6px] w-full lg:w-auto lg:flex-shrink-0">
                {RE_WORDS.map((word) => {
                  const re = word.slice(0, 2)
                  const rest = word.slice(2)
                  return (
                    <div
                      key={word}
                      className="leading-[0.95] text-rebrief-dark whitespace-nowrap"
                      style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}
                    >
                      <span className="font-vanity-condensed">{re}</span>
                      <span className="font-vanity-expanded">{rest}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return of the Agency House Ad */}
      <section id="sponsorship" className="bg-rebrief-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:pl-[52px] lg:pr-[84px] py-16 lg:py-[100px]">
          <div className="space-y-12 lg:space-y-[70px]">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,9vw,83.42px)] leading-[1.05]">
              RETURN OF THE
              <br />
              AGENCY HOUSE AD
            </h2>
            <div className="flex flex-col lg:flex-row justify-start gap-8 lg:gap-[60px]">
              <div className="flex-1 min-w-0 max-w-full lg:max-w-[640px] font-body text-[18px] lg:text-[22px] leading-[1.5] tracking-[0.01em] space-y-[20px]">
                <p>
                  Did we go to the trouble of making a physical print magazine
                  solely to revive the lost art of the agency house ad? Maybe.
                </p>
                <p>
                  At one point these were the sharpest piece of self-promotion
                  and critique an agency could make. Let&rsquo;s bring them
                  back.
                </p>
                <p>
                  Browse the full sponsorship package below — or reach out to{' '}
                  <a
                    href="mailto:hello@rebrief.ca"
                    className="text-rebrief-gold hover:text-rebrief-dark transition-colors"
                  >
                    hello@rebrief.ca
                  </a>
                  .
                </p>
              </div>
              <div className="w-full lg:w-[420px] lg:flex-shrink-0 flex flex-col justify-center pl-6 lg:pl-8 border-l-2 lg:border-l border-rebrief-red/30 self-stretch lg:self-center">
                <p
                  className="font-body italic text-rebrief-red leading-[1.15]"
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 2.375rem)' }}
                >
                  &ldquo;I only read Rebrief for the ads.&rdquo;
                </p>
                <p className="font-vanity-condensed text-rebrief-red text-[16px] lg:text-[18px] tracking-[0.05em] mt-4 uppercase">
                  — Your next hire
                </p>
              </div>
            </div>

            <div>
              <p className="font-vanity-condensed text-[16.68px] uppercase tracking-[0.02em] mb-0 pb-2">
                A few of our favourite house ads
              </p>
              <HouseAdViewer />
            </div>

            {/* Sponsorship Package PDF Viewer */}
            <div>
              <Suspense
                fallback={
                  <div className="w-full bg-rebrief-cream border-y border-rebrief-dark/12 p-12 text-center">
                    <p className="font-body italic text-rebrief-dark/60 text-[16px]">
                      Pulling the proofs from the press…
                    </p>
                  </div>
                }
              >
                <PdfFlipbook
                  src={SPONSORSHIP_PDF}
                  title="Sponsorship Package"
                  edition="Issue One Launches July 09, 2026"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Masthead */}
      <section id="contact" className="bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:pl-[44px] lg:pr-[84px] py-16 lg:pt-[120px] lg:pb-[100px]">
          <div className="space-y-8 lg:space-y-[40px]">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,9vw,83.42px)] leading-[1]">
              REBRIEF MASTHEAD
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start justify-start">
              <div className="flex-1 min-w-0 max-w-full lg:max-w-[640px]">
                <div className="font-body text-[18px] lg:text-[23px] leading-[1.7] tracking-[0.02em]">
                  <p>
                    <span>Founding Editors: </span>
                    <span className="italic">
                      Carly Miller, Jon Crowley, PK Lawton, Spencer MacEachern,
                      Zoe Kim
                    </span>
                  </p>
                  <p>
                    <span>Designers: </span>
                    <span className="italic">Zoe Kim and Vince Rozas</span>
                  </p>
                  <p>
                    <span>Creative Collaborators: </span>
                    <span className="italic">Sarah Philips, Hayden Lawton</span>
                  </p>
                </div>
                <p className="font-body text-[15px] leading-[1.6] tracking-[0.02em] mt-[28px] opacity-60">
                  Rebrief is not affiliated with any agency. It is an entirely
                  volunteer-run project incorporated as a not-for-profit as the
                  Rebrief Magazine Society.
                </p>
              </div>

              <div className="w-full lg:w-[420px] lg:flex-shrink-0 bg-black text-white p-7 lg:px-[28px] lg:pt-[28px] lg:pb-[28px] self-start">
                <div className="space-y-[18px]">
                  <h3 className="font-vanity-condensed text-rebrief-gold-bright text-[22px] leading-[1.15] tracking-[0.02em]">
                    HAVE AN IDEA? WANT TO GET INVOLVED?
                  </h3>
                  <p className="font-body text-[17px] leading-[1.55] text-white/85">
                    Have a pitch? Want to help pull together the next issue?
                    Want to share your mom&rsquo;s pizza dough recipe? Want to
                    send us an e-transfer or buy PK something off his Amazon
                    wish list?
                  </p>
                  <a
                    href="mailto:hello@rebrief.ca"
                    className="font-body text-rebrief-gold-bright text-[16px] tracking-[0.05em] hover:text-white transition-colors inline-flex items-center min-h-[44px] uppercase"
                  >
                    hello@rebrief.ca
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
