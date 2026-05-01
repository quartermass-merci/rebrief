import { useState, useEffect, useCallback, useRef } from 'react'

const HOUSE_ADS = [
  { src: '/images/house-ads/Ogilvy-Run.webp', credit: 'Ogilvy — "Run"' },
  { src: '/images/house-ads/DDB-Im-a-Writer.jpg', credit: 'DDB — "I\'m a Writer"' },
  { src: '/images/house-ads/DDB-Richard-Denney.jpg', credit: 'DDB — Richard Denney' },
  { src: '/images/house-ads/Fallon-McElligott-Houses.jpg', credit: 'Fallon McElligott — Houses' },
  { src: '/images/house-ads/Fallon-Liquor.jpg', credit: 'Fallon McElligott — Liquor Account' },
  { src: '/images/house-ads/BBH-NextTime.jpg', credit: 'BBH — "Next Time"' },
  { src: '/images/house-ads/CDD-ad-3.webp', credit: 'Collett Dickenson Pearce' },
  { src: '/images/house-ads/Deighton-Mullen.webp', credit: 'Deighton Mullen' },
  { src: '/images/house-ads/McCann-Brownjohn.webp', credit: 'McCann — Robert Brownjohn' },
  { src: '/images/house-ads/Richard-Cope.webp', credit: 'Richard Cope' },
  { src: '/images/house-ads/Scali-McCabe.jpg', credit: 'Scali McCabe Sloves' },
  { src: '/images/house-ads/GGT.jpg', credit: 'Gold Greenlees Trott' },
]

export default function HouseAdViewer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const stripRef = useRef<HTMLDivElement>(null)
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

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') showNext()
        if (e.key === 'ArrowLeft') showPrev()
        return
      }
      if (e.key === 'ArrowRight') {
        setActiveIndex((i) => Math.min(i + 1, HOUSE_ADS.length - 1))
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter') {
        openLightbox(activeIndex)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, activeIndex, closeLightbox, showNext, showPrev, openLightbox])

  // Swipe support on the strip
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 50) return
    if (dx < 0) {
      setActiveIndex((i) => Math.min(i + 1, HOUSE_ADS.length - 1))
    } else {
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
  }

  // Swipe support in lightbox
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
      {/* Expanding Panel Strip */}
      <div
        ref={stripRef}
        className="flex h-[500px] gap-1 cursor-pointer"
        role="tablist"
        aria-label="House ad gallery"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {HOUSE_ADS.map((ad, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={ad.src}
              role="tab"
              aria-selected={isActive}
              aria-label={ad.credit}
              className={`relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-full ${
                isActive ? 'flex-[5]' : 'flex-[0.6]'
              } focus-visible:outline-2 focus-visible:outline-rebrief-gold focus-visible:outline-offset-[-2px]`}
              onClick={() => {
                if (isActive) {
                  openLightbox(i)
                } else {
                  setActiveIndex(i)
                }
              }}
            >
              <img
                src={ad.src}
                alt={ad.credit}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  isActive ? 'scale-100 brightness-100' : 'scale-110 brightness-50'
                }`}
                loading="lazy"
              />
              {/* Credit overlay — visible on active panel */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-mono text-white text-[13px] tracking-[0.05em]">
                  {ad.credit}
                </p>
                <p className="font-mono text-white/60 text-[11px] mt-0.5">
                  Click to enlarge
                </p>
              </div>
              {/* Panel number — visible on collapsed panels */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isActive ? 'opacity-0' : 'opacity-70'
                }`}
              >
                <span className="font-vanity-condensed text-white text-[22px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Strip counter */}
      <div className="flex items-center justify-between mt-3">
        <p className="font-mono text-[13px] text-rebrief-dark/60 tracking-[0.05em]">
          {activeIndex + 1} / {HOUSE_ADS.length} &mdash;{' '}
          {HOUSE_ADS[activeIndex].credit}
        </p>
        <p className="font-mono text-[11px] text-rebrief-dark/40 tracking-[0.05em]">
          Arrow keys to browse &middot; Enter to enlarge
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
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-mono z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-mono z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
            <img
              src={HOUSE_ADS[lightboxIndex].src}
              alt={HOUSE_ADS[lightboxIndex].credit}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-3 text-center">
              <p className="font-mono text-white text-[14px] tracking-[0.05em]">
                {HOUSE_ADS[lightboxIndex].credit}
              </p>
              <p className="font-mono text-white/50 text-[12px] mt-1">
                {lightboxIndex + 1} / {HOUSE_ADS.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-mono z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  )
}
