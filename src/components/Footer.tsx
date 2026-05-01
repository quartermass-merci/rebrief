const SUBSTACK_URL =
  'https://rebrief.substack.com/?r=2jup5m&utm_medium=ios'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-13 pt-16 pb-8">
        <div className="flex flex-col gap-12">
          {/* Subscribe CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="font-vanity-expanded text-[clamp(2.2rem,5.5vw,75px)] leading-[1.05]">
              SUBSCRIBE TO
              <br />
              THE REBRIEF SUBSTACK
            </h2>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[138px] h-[49px] bg-[#d9d9d9] text-black font-vanity-condensed text-[20.85px] hover:bg-rebrief-gold transition-colors"
            >
              SUBSCRIBE
            </a>
          </div>

          {/* Massive REBRIEF wordmark */}
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-vanity-expanded text-white leading-[0.85] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(5rem, 18vw, 17rem)' }}
            >
              REBRIEF
            </h2>
            <p
              className="font-vanity-condensed uppercase tracking-[0.05em] pb-3"
              style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.25rem)' }}
            >
              A New Canadian Journal{' '}
              <span className="italic font-serif normal-case">of</span>{' '}
              Advertising
            </p>
          </div>

          <hr className="border-white/40" />

          {/* Bottom bar */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="font-mono text-[14.6px] tracking-[0.05em]">
              <span className="italic">&copy;</span> Rebrief Magazine Society
              2026
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rebriefmagazine/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://framerusercontent.com/images/b5CmpD9zWn90MKV8LPBOz0Vzqlw.png?width=512&height=512"
                  alt="Instagram"
                  className="w-[31px] h-[31px]"
                />
              </a>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
              >
                <img
                  src="https://framerusercontent.com/images/HwEgElK6YMPilKV07QyBhirDmQ.png?width=512&height=512"
                  alt="Substack"
                  className="w-[30px] h-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
