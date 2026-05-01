import { useState, useEffect, useCallback, useRef } from 'react'

// Curated 15 — strongest, best-credited examples from the archive.
const HOUSE_ADS = [
  { src: '/images/house-ads/Ogilvy-Run.webp', credit: 'Ogilvy — "Run"' },
  { src: '/images/house-ads/DDB-Im-a-Writer.jpg', credit: 'DDB — "I\'m a Writer"' },
  { src: '/images/house-ads/DDB-150.jpg', credit: 'DDB — "£150"' },
  { src: '/images/house-ads/Fallon-Liquor.jpg', credit: 'Fallon McElligott — Liquor Account' },
  { src: '/images/house-ads/BBH-NextTime.jpg', credit: 'BBH — "Next Time"' },
  { src: '/images/house-ads/CDD-ad-3.webp', credit: 'Collett Dickenson Pearce' },
  { src: '/images/house-ads/McCann-Brownjohn.webp', credit: 'McCann — Robert Brownjohn' },
  { src: '/images/house-ads/Scali-McCabe.jpg', credit: 'Scali McCabe Sloves' },
  { src: '/images/house-ads/GGT.jpg', credit: 'Gold Greenlees Trott' },
  { src: '/images/house-ads/Saatchi-First-Over-Wall.jpg', credit: 'Saatchi & Saatchi — "First Over the Wall"' },
  { src: '/images/house-ads/Ogilvy-Sacking.webp', credit: 'Ogilvy & Mather — Indra Sinha' },
  { src: '/images/house-ads/AMV-How-Long.jpg', credit: 'AMV BBDO — "How Long Can These Men Survive?"' },
  { src: '/images/house-ads/Davidson-Pearce.webp', credit: 'Davidson Pearce — Observer' },
  { src: '/images/house-ads/ChiatDay-Chicken.webp', credit: 'Chiat/Day — "Chicken"' },
  { src: '/images/house-ads/DoThisOrDie.jpg', credit: '"Do This or Die"' },
]

export default function HouseAdViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const touchStartX = useRef(0)

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % HOUSE_ADS.length)
  }, [])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + HOUSE_ADS.length) % HOUSE_ADS.length)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, closeLightbox, showNext, showPrev])

  const onLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 50) return
    if (dx < 0) showNext()
    else showPrev()
  }

  return (
    <>
      {/* Editorial archive frame */}
      <div
        className="relative w-full bg-rebrief-cream border-y border-rebrief-dark/12 register-marks p-6 lg:p-10"
        role="region"
        aria-label="House ad archive"
      >
        <span aria-hidden="true" className="register-bl" />
        <span aria-hidden="true" className="register-br" />

        {/* Deadline note */}
        <div className="flex justify-end pb-4 lg:pb-6 mb-6 lg:mb-8 border-b border-rebrief-dark/15">
          <div className="text-right">
            <p className="font-vanity-condensed text-[10px] uppercase tracking-[0.18em] text-rebrief-red">
              Files Due
            </p>
            <p className="font-body text-rebrief-dark text-[13px] mt-1">
              May 31, 2026
            </p>
          </div>
        </div>

        {/* Expanding-panel slider — pure CSS hover, no state, no jank */}
        <div
          className="hidden md:flex items-stretch gap-1.5 h-[820px] w-full"
          role="list"
        >
          {HOUSE_ADS.map((ad, i) => (
            <button
              key={ad.src}
              onClick={() => openLightbox(i)}
              aria-label={`View: ${ad.credit}`}
              className="group relative flex-[1] hover:flex-[6] focus-visible:flex-[6] transition-[flex-grow] duration-[600ms] ease-out overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-rebrief-gold focus-visible:outline-offset-2 bg-rebrief-light"
            >
              <img
                src={ad.src}
                alt={ad.credit}
                className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.55] group-hover:object-contain group-hover:scale-100 group-hover:brightness-100 group-focus-visible:object-contain group-focus-visible:scale-100 group-focus-visible:brightness-100 transition-[filter,transform] duration-[400ms] ease-out"
                loading="lazy"
                decoding="async"
              />
              {/* Plate number — always visible */}
              <span className="absolute top-2.5 left-2.5 z-10 font-vanity-condensed text-[10px] tracking-[0.15em] text-white bg-black/55 px-1.5 py-[3px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Credit overlay — appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-[400ms]">
                <p className="font-vanity-condensed text-white text-[11px] lg:text-[12px] tracking-[0.1em] uppercase leading-[1.3]">
                  {ad.credit}
                </p>
                <p className="font-body italic text-white/65 text-[10px] lg:text-[11px] mt-1">
                  Click to view full size
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile fallback — simple swipeable horizontal list (no hover on touch) */}
        <ul className="md:hidden flex gap-2 overflow-x-auto pb-3 list-none p-0 -mx-2 px-2 snap-x snap-mandatory">
          {HOUSE_ADS.map((ad, i) => (
            <li key={ad.src} className="flex-shrink-0 snap-start">
              <button
                onClick={() => openLightbox(i)}
                aria-label={`View: ${ad.credit}`}
                className="block w-[220px] focus-visible:outline-2 focus-visible:outline-rebrief-gold"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-rebrief-light">
                  <img
                    src={ad.src}
                    alt={ad.credit}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2 left-2 font-vanity-condensed text-[10px] tracking-[0.15em] text-white bg-black/55 px-1.5 py-[3px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-vanity-condensed text-[11px] uppercase tracking-[0.12em] text-rebrief-dark mt-2 leading-[1.3] text-left">
                  {ad.credit.split('—')[0].trim()}
                </p>
              </button>
            </li>
          ))}
        </ul>

        <p className="font-body italic text-[13px] text-rebrief-dark/55 tracking-[0.02em] mt-4 lg:mt-6">
          {HOUSE_ADS.length} plates · hover to expand · click to view full size
        </p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
          onTouchStart={onLightboxTouchStart}
          onTouchEnd={onLightboxTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="House ad lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
            <img
              src={HOUSE_ADS[lightboxIndex].src}
              alt={HOUSE_ADS[lightboxIndex].credit}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-3 text-center">
              <p className="font-vanity-condensed text-white text-[14px] tracking-[0.1em] uppercase">
                {HOUSE_ADS[lightboxIndex].credit}
              </p>
              <p className="font-body italic text-white/50 text-[12px] mt-1">
                Plate {String(lightboxIndex + 1).padStart(2, '0')} of{' '}
                {String(HOUSE_ADS.length).padStart(2, '0')}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); showNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  )
}
