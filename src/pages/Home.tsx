import HouseAdViewer from '../components/HouseAdViewer'

const RE_WORDS = [
  'REWIND',
  'REIDENTIFY',
  'REWRITE',
  'RECONSIDER',
  'REDIRECT',
  'REARTICULATE',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-10 sm:py-16 flex flex-col items-center">
          <img
            src="/images/rebrief-masthead.png"
            alt="Rebrief — A New Canadian Journal of Advertising"
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-[1440px] mx-auto px-8 sm:px-13">
        <div className="py-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-[55%] space-y-6">
              <h2 className="font-vanity-expanded text-[clamp(16px,1.75vw,25px)] leading-[25px] tracking-[0.05em] uppercase">
                Rebrief is an independent
                <br />
                Canadian journal of advertising.
              </h2>
              <div className="font-mono text-[clamp(14px,1.3vw,18.77px)] leading-[25.03px] tracking-[0.05em] space-y-6">
                <p>
                  Advertising is full of things we take for granted. So, each
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
            </div>
            <div className="lg:w-[40%]">
              <img
                src="https://framerusercontent.com/images/QPbCI9VEOY4mZAru67zI61HdSs.png?width=2028&height=1800"
                alt="Rebrief Issue One spread"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Issue One */}
      <section id="current-issue" className="max-w-[1440px] mx-auto px-8 sm:px-13">
        <div className="py-12">
          <hr className="border-black border-t-2 mb-8" />
          <h2 className="font-vanity-expanded text-[clamp(2.5rem,5.8vw,83.42px)] leading-[1] mb-8">
            ISSUE 01: CANADA
          </h2>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-[55%] space-y-6">
              <p className="font-nord text-[clamp(18px,1.75vw,25px)] leading-[25px] tracking-[0.05em]">
                What is Canadian advertising?
              </p>
              <div className="font-mono text-[clamp(14px,1.3vw,18.77px)] leading-[25.03px] tracking-[0.05em] space-y-6">
                <p>
                  It should be a simple question. We&rsquo;re the country of
                  McLuhan, Like a Girl, and VS.
                  <br />
                  Our impact on ideas and media is anything but small. And still,
                  we find ourselves looking outward, comparing against bigger,
                  more &lsquo;pedigreed&rsquo; markets.
                </p>
                <p>
                  Across 20+ contributors, we explore the magic, the myths, the
                  insecurities, and the brilliance that shape Canadian
                  advertising.
                </p>
                <p>Yes, there are house hippos.</p>
                <p>Issue 01 drops July 9, 2026.</p>
              </div>
            </div>

            {/* RE- words typographic column */}
            <div className="lg:w-[40%] flex flex-col justify-center gap-0">
              {RE_WORDS.map((word) => (
                <span
                  key={word}
                  className="font-vanity-expanded text-[clamp(2rem,4.5vw,64px)] leading-[1.15] tracking-[0.02em] text-rebrief-dark"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Return of the Agency House Ad */}
      <section id="sponsorship" className="bg-rebrief-cream">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-16">
          <h2 className="font-vanity-expanded text-[clamp(2rem,5.8vw,83.42px)] leading-[1.05] mb-8">
            RETURN OF THE
            <br />
            AGENCY HOUSE AD
          </h2>
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-14">
            <div className="lg:w-1/2 font-mono text-[clamp(14px,1.3vw,18.77px)] leading-[25.03px] tracking-[0.05em] space-y-6">
              <p>
                Did we go to the trouble of making a physical print magazine
                solely to revive the lost art of the agency house ad? Maybe.
              </p>
              <p>
                At one point these were the sharpest piece of self-promotion and
                critique an agency could make. Let&rsquo;s bring them back.
              </p>
              <p>
                You can find our media kit{' '}
                <a
                  href="https://docs.google.com/presentation/d/1eWVAVwSRWv6a1V00ezfZfrk3A8CM96rN9Lx26tGQftc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-rebrief-gold hover:text-rebrief-dark transition-colors"
                >
                  here
                </a>
                .
              </p>
              <p>
                Or you can reach out to{' '}
                <a
                  href="mailto:hello@rebrief.ca"
                  className="text-rebrief-gold hover:text-rebrief-dark transition-colors"
                >
                  hello@rebrief.ca
                </a>
              </p>
            </div>
            <div className="lg:w-[433px] flex flex-col items-center justify-center">
              <p className="font-mono text-rebrief-red text-[clamp(28px,3vw,44px)] leading-[1] font-bold text-center">
                &ldquo;I only read Rebrief for the ads.&rdquo;
              </p>
              <p className="font-mono text-rebrief-red text-[clamp(16px,1.7vw,25px)] tracking-[0.05em] mt-3">
                - Your next hire.
              </p>
            </div>
          </div>

          <p className="font-vanity-condensed text-[16.68px] uppercase mb-4">
            An upcoming Rebrief feature — Six decades of self-promotion
          </p>
          <HouseAdViewer />
        </div>
      </section>

      {/* Masthead */}
      <section id="contact" className="bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-16">
          <h2 className="font-vanity-expanded text-[clamp(2rem,5.8vw,83.42px)] leading-[1] mb-8">
            REBRIEF MASTHEAD
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="font-mono text-[clamp(14px,1.3vw,18.77px)] leading-[41.71px] tracking-[0.05em]">
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
              <p className="font-[Roboto_Condensed,sans-serif] text-[14px] leading-[25.03px] tracking-[0.05em] mt-8">
                Rebrief is not affiliated with any agency. It is an entirely
                volunteer-run project incorporated as a not-for-profit as the
                Rebrief Magazine Society.
              </p>
            </div>

            <div className="lg:w-[493px] bg-black text-white border border-white p-6 sm:p-8 self-start">
              <h3 className="font-vanity-condensed text-rebrief-gold text-[25.03px] mb-1">
                HAVE AN IDEA?
              </h3>
              <h3 className="font-vanity-condensed text-rebrief-gold text-[25.03px] mb-6">
                WANT TO GET INVOLVED?
              </h3>
              <p className="font-[IBM_Plex_Mono,monospace] text-[15.64px] leading-[20.85px] mb-6">
                Have a pitch? Want to help pull together the next issue? Want to
                share your mom&rsquo;s pizza dough recipe? Want to send us an
                e-transfer or buy PK something off his Amazon wish list?
              </p>
              <a
                href="mailto:hello@rebrief.ca"
                className="font-mono text-rebrief-gold text-[14.6px] hover:text-white transition-colors"
              >
                HELLO@REBRIEF.CA
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
