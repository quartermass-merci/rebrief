const SUBSTACK_URL =
  'https://rebrief.substack.com/?r=2jup5m&utm_medium=ios'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-13 py-15">
        <div className="flex flex-col gap-20">
          {/* Subscribe CTA */}
          <div className="flex flex-col gap-5">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,5.8vw,83.42px)] leading-[1.05]">
              SUBSCRIBE TO{' '}
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

          {/* Wordmark */}
          <div>
            <img
              src="/images/rebrief-masthead.png"
              alt="Rebrief"
              className="w-full max-w-[1312px] h-auto opacity-90"
            />
          </div>

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
