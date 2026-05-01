export default function Contact() {
  return (
    <section className="bg-rebrief-light">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-16">
        <hr className="border-black mb-12" />

        <h1 className="font-vanity-expanded text-[clamp(2.5rem,5.8vw,83.42px)] mb-8">
          REBRIEF MASTHEAD
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Masthead list */}
          <div className="lg:w-1/2">
            <div className="font-mono text-[18.77px] leading-[41.71px] tracking-[0.05em] space-y-0">
              <p>
                <span>Founding Editors: </span>
                <span className="italic">
                  Carly Miller, Jon Crowley, PK Lawton, Spencer MacEachern, Zoe
                  Kim
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

          {/* Contact card */}
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

        {/* Editor photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: 'Carly Miller', file: 'carly-miller.jpeg' },
            { name: 'Jon Crowley', file: 'jon-crowley.jpeg' },
            { name: 'PK Lawton', file: 'pk-lawton.jpeg' },
            { name: 'Spencer MacEachern', file: 'spencer-maceachern.jpeg' },
            { name: 'Zoe Kim', file: 'zoe-kim.jpeg' },
          ].map((editor) => (
            <div key={editor.name} className="text-center">
              <img
                src={`/images/editors/${editor.file}`}
                alt={editor.name}
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="font-mono text-[14px] tracking-[0.05em] mt-2">
                {editor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
