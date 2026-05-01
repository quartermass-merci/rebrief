import { useState, useEffect, useCallback, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

type Props = {
  src: string
  title?: string
  edition?: string
  deadline?: string
}

export default function PdfFlipbook({
  src,
  title = 'Sponsorship Package',
  edition = 'Issue One Launches July 09, 2026',
  deadline = 'House Ad files due May 31, 2026',
}: Props) {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageWidth, setPageWidth] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [viewportSize, setViewportSize] = useState({ w: 0, h: 0 })
  const pageContainerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  useEffect(() => {
    if (!pageContainerRef.current) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0
      setPageWidth(w)
    })
    ro.observe(pageContainerRef.current)
    return () => ro.disconnect()
  }, [])

  // Track viewport for lightbox sizing
  useEffect(() => {
    const update = () =>
      setViewportSize({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const goPrev = useCallback(() => {
    setPageNumber((p) => Math.max(1, p - 1))
  }, [])

  const goNext = useCallback(() => {
    setPageNumber((p) => Math.min(numPages || p, p + 1))
  }, [numPages])

  const openLightbox = useCallback(() => {
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox()
        return
      }
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext, lightboxOpen, closeLightbox])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 50) return
    if (dx < 0) goNext()
    else goPrev()
  }

  // Lightbox page width — fit to viewport with margin
  const lightboxPageWidth =
    viewportSize.w > 0
      ? Math.min(viewportSize.w - 96, viewportSize.h * 0.78, 1400)
      : 1000

  return (
    <div className="w-full">
      {/* Editorial layout: page left, archive label right */}
      <div
        className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_220px] bg-rebrief-cream border-y border-rebrief-dark/12 register-marks"
        style={{ minHeight: '660px' }}
        role="region"
        aria-label="Sponsorship package PDF"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <span aria-hidden="true" className="register-bl" />
        <span aria-hidden="true" className="register-br" />
        {/* Left: PDF page */}
        <div
          ref={pageContainerRef}
          className="relative flex items-center justify-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-rebrief-dark/12 bg-rebrief-light"
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-rebrief-dark/60 hover:text-rebrief-dark disabled:text-rebrief-dark/15 disabled:cursor-not-allowed transition-colors text-3xl font-vanity-condensed"
          >
            &#8249;
          </button>

          {/* Page render — click to zoom into lightbox */}
          <button
            onClick={openLightbox}
            aria-label={`Enlarge page ${pageNumber}`}
            className="flex items-center justify-center w-full max-h-[600px] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-rebrief-gold focus-visible:outline-offset-4"
          >
            <Document
              file={src}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={
                <p className="font-body italic text-rebrief-dark/60 text-[16px] py-32">
                  Pulling the proofs from the press…
                </p>
              }
              error={
                <p className="font-body text-rebrief-dark/80 text-[16px] py-32">
                  The press is jammed.{' '}
                  <a
                    href={src}
                    className="underline text-rebrief-gold hover:text-rebrief-dark"
                  >
                    Download it instead.
                  </a>
                </p>
              }
            >
              {pageWidth > 0 && (
                <Page
                  pageNumber={pageNumber}
                  width={Math.max(pageWidth - 80, 480)}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                />
              )}
            </Document>
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={pageNumber >= numPages}
            aria-label="Next page"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center text-rebrief-dark/60 hover:text-rebrief-dark disabled:text-rebrief-dark/15 disabled:cursor-not-allowed transition-colors text-3xl font-vanity-condensed"
          >
            &#8250;
          </button>
        </div>

        {/* Right: archive label — slim */}
        <aside className="flex flex-col justify-between p-6 lg:p-7">
          <div>
            <p className="font-vanity-condensed text-[10px] uppercase tracking-[0.18em] text-rebrief-dark/60">
              Rebrief Media Kit
            </p>
            <p className="font-vanity-expanded text-rebrief-dark leading-[1] mt-2 text-[40px]">
              {String(pageNumber).padStart(2, '0')}
              <span className="font-vanity-condensed text-rebrief-dark/40 text-[20px] ml-1">
                / {numPages > 0 ? String(numPages).padStart(2, '0') : '—'}
              </span>
            </p>

            <div className="mt-8 space-y-4 border-t border-rebrief-dark/15 pt-5">
              <div>
                <p className="font-vanity-condensed text-[10px] uppercase tracking-[0.18em] text-rebrief-dark/50">
                  Document
                </p>
                <p className="font-vanity-expanded text-rebrief-dark uppercase leading-[1.1] mt-1 text-[16px]">
                  {title}
                </p>
              </div>
              <div>
                <p className="font-vanity-condensed text-[10px] uppercase tracking-[0.18em] text-rebrief-dark/50">
                  Edition
                </p>
                <p className="font-body italic text-rebrief-dark text-[14px] leading-[1.35] mt-1">
                  {edition}
                </p>
              </div>
              {deadline && (
                <div>
                  <p className="font-vanity-condensed text-[10px] uppercase tracking-[0.18em] text-rebrief-red">
                    Deadline
                  </p>
                  <p className="font-body text-rebrief-dark text-[13px] leading-[1.35] mt-1">
                    {deadline}
                  </p>
                </div>
              )}
            </div>
          </div>

          <a
            href={src}
            download
            className="self-start mt-6 font-vanity-condensed text-[13px] tracking-[0.1em] uppercase text-rebrief-dark border-b-2 border-rebrief-dark hover:text-rebrief-gold hover:border-rebrief-gold transition-colors pb-1 inline-flex items-center min-h-[44px]"
          >
            Download PDF ↓
          </a>
        </aside>
      </div>

      {/* Page-dot navigator — visible dots, padded 44px hit areas */}
      {numPages > 0 && (
        <div className="flex flex-wrap items-center gap-0 mt-4 -ml-2">
          {Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPageNumber(n)}
              aria-label={`Go to page ${n}`}
              aria-current={n === pageNumber ? 'page' : undefined}
              className="inline-flex items-center justify-center min-w-[44px] h-11 px-2 group"
            >
              <span
                className={`block h-[6px] transition-all ${
                  n === pageNumber
                    ? 'bg-rebrief-dark w-[28px]'
                    : 'bg-rebrief-dark/25 group-hover:bg-rebrief-dark/50 w-[16px]'
                }`}
              />
            </button>
          ))}
        </div>
      )}

      <p className="font-body text-[13px] text-rebrief-dark/60 tracking-[0.02em] mt-3">
        ← → to flip · click page to zoom · {numPages || '—'} pages
      </p>

      {/* Lightbox — full-size page with prev/next */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Sponsorship package lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10 w-11 h-11 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white disabled:text-white/15 disabled:cursor-not-allowed text-4xl z-10 w-12 h-12 flex items-center justify-center"
          >
            &#8249;
          </button>

          <div className="max-w-[92vw] max-h-[88vh] flex flex-col items-center">
            <Document file={src}>
              <Page
                pageNumber={pageNumber}
                width={lightboxPageWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
            <p className="font-vanity-condensed text-white/70 text-[12px] tracking-[0.1em] uppercase mt-3">
              Page {String(pageNumber).padStart(2, '0')} of{' '}
              {String(numPages).padStart(2, '0')}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            disabled={pageNumber >= numPages}
            aria-label="Next page"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white disabled:text-white/15 disabled:cursor-not-allowed text-4xl z-10 w-12 h-12 flex items-center justify-center"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  )
}
