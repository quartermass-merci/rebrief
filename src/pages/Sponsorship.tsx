import HouseAdViewer from '../components/HouseAdViewer'

export default function Sponsorship() {
  return (
    <>
      {/* Hero */}
      <section className="bg-rebrief-cream">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 pt-16 pb-10">
          <hr className="border-black mb-12" />
          <h1 className="font-vanity-expanded text-[clamp(2.5rem,5.8vw,83.42px)] leading-[1.05] mb-8">
            RETURN OF THE
            <br />
            AGENCY HOUSE AD
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div className="lg:w-1/2 font-mono text-[18.77px] leading-[25.03px] tracking-[0.05em] space-y-6">
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
              <p className="font-mono text-rebrief-red text-[44px] leading-[44px] font-bold text-center">
                &ldquo;I only read Rebrief for the ads.&rdquo;
              </p>
              <p className="font-mono text-rebrief-red text-[25.03px] tracking-[0.05em] mt-2">
                - Your next hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* House Ad Viewer */}
      <section className="bg-rebrief-light">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-16">
          <p className="font-vanity-condensed text-[16.68px] mb-4">
            A REBRIEF FEATURE — SIX DECADES OF SELF-PROMOTION
          </p>
          <HouseAdViewer />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-16">
          <div className="border border-white p-8 max-w-xl">
            <h3 className="font-vanity-condensed text-rebrief-gold text-[25.03px] mb-2">
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
      </section>
    </>
  )
}
