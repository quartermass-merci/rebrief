const SUBSTACK_URL =
  'https://rebrief.substack.com/?r=2jup5m&utm_medium=ios'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:pl-[52px] lg:pr-[73px] py-12 lg:pt-[59px] lg:pb-[88px]">
        <div className="flex flex-col gap-12 lg:gap-[81px]">
          {/* Subscribe CTA */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-vanity-expanded text-[clamp(2.5rem,9vw,83.42px)] leading-[1.05]">
              SUBSCRIBE TO
              <br />
              THE REBRIEF SUBSTACK
            </h2>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[180px] h-[52px] border-2 border-white text-white font-vanity-condensed text-[20.85px] tracking-[0.04em] hover:bg-white hover:text-black transition-all duration-150 active:translate-y-[2px] active:shadow-none"
            >
              SUBSCRIBE
            </a>
          </div>

          {/* Massive REBRIEF wordmark — full-bleed image */}
          <div className="w-full">
            <img
              src="https://framerusercontent.com/images/Cyp6T6QSo8ABI0oeB8HlbYc3zhc.png?width=3935&height=752"
              alt="REBRIEF"
              className="w-full h-auto block"
            />
          </div>

          {/* Bottom bar — folio + colophon row */}
          <div className="flex flex-col gap-3">
            <p className="font-body italic text-white/55 text-[12px] tracking-[0.08em] uppercase">
              Imprinted Tkaronto · 43°38′N · 79°25′W
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4 max-w-[675px]">
              <p className="font-body text-[17px] tracking-[0.02em]">
                <span className="italic">&copy;</span> Rebrief Magazine Society
                2026
              </p>
              <div className="flex items-center gap-1">
                <a
                  href="https://www.instagram.com/rebriefmagazine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rebrief on Instagram"
                  className="inline-flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://framerusercontent.com/images/b5CmpD9zWn90MKV8LPBOz0Vzqlw.png?width=512&height=512"
                    alt=""
                    className="w-[31px] h-[31px]"
                  />
                </a>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rebrief on Substack"
                  className="inline-flex items-center justify-center w-11 h-11 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://framerusercontent.com/images/HwEgElK6YMPilKV07QyBhirDmQ.png?width=512&height=512"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
