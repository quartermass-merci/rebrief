import { Suspense, lazy, useId, useState, useTransition } from 'react'

const HouseAdViewer = lazy(() => import('./HouseAdViewer'))
const PdfFlipbook = lazy(() => import('./PdfFlipbook'))

type PanelKey = 'overview' | 'media-kit' | 'house-ads'

const PANELS: Array<{
  key: PanelKey
  label: string
  eyebrow: string
  title: string
}> = [
  {
    key: 'overview',
    label: 'Overview',
    eyebrow: 'Editorial pitch',
    title: 'How sponsorship works',
  },
  {
    key: 'media-kit',
    label: 'Media kit',
    eyebrow: 'Press desk',
    title: 'Flip through the package',
  },
  {
    key: 'house-ads',
    label: 'House ad archive',
    eyebrow: 'Reference room',
    title: 'See the form we are reviving',
  },
]

const SPONSORSHIP_PDF = '/Rebrief Sponsorshp Package 2026 [APR 2026].pdf'

function PanelLoadingState({ label }: { label: string }) {
  return (
    <div className="border border-rebrief-dark/10 bg-white/70 p-6 lg:p-8">
      <p className="editorial-kicker">{label}</p>
      <p className="mt-3 font-body text-[16px] italic leading-[1.6] text-rebrief-dark/62">
        Pulling this section onto the desk...
      </p>
    </div>
  )
}

export default function SponsorshipStudio() {
  const [activePanel, setActivePanel] = useState<PanelKey>('overview')
  const [isPending, startTransition] = useTransition()
  const tabsId = useId()

  const currentPanel = PANELS.find((panel) => panel.key === activePanel) ?? PANELS[0]

  function switchPanel(panel: PanelKey) {
    startTransition(() => {
      setActivePanel(panel)
    })
  }

  return (
    <div
      className="editorial-desk"
      data-pending={isPending ? 'true' : 'false'}
    >
      <div className="editorial-desk__mast flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[42rem] space-y-4">
          <p className="editorial-kicker">{currentPanel.eyebrow}</p>
          <h3 className="font-vanity-expanded text-rebrief-dark uppercase leading-[0.92] text-[clamp(2.3rem,5vw,4.8rem)]">
            {currentPanel.title}
          </h3>
          <p className="font-body text-[clamp(1rem,1.35vw,1.14rem)] leading-[1.55] text-rebrief-dark/72 max-w-[39rem]">
            Rebrief is not trying to feel like a polished corporate media kit.
            It should feel more like a working editorial desk: tactile,
            referential, and alive. Use the overview for the pitch, the media
            kit for practical details, and the archive when you want to show why
            the house ad still matters.
          </p>
        </div>

        <div className="editorial-tablist" role="tablist" aria-label="Sponsorship studio views">
          {PANELS.map((panel) => {
            const isActive = activePanel === panel.key
            const tabId = `${tabsId}-${panel.key}-tab`
            const panelId = `${tabsId}-${panel.key}-panel`

            return (
              <button
                key={panel.key}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                data-active={isActive ? 'true' : 'false'}
                className="editorial-tab"
                onClick={() => switchPanel(panel.key)}
              >
                <span className="editorial-tab__label">{panel.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="editorial-panel-wrap">
        {activePanel === 'overview' && (
          <section
            id={`${tabsId}-overview-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-overview-tab`}
            className="editorial-panel"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
              <div className="space-y-6">
                <p className="font-body text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.6] text-rebrief-dark/84 max-w-[40rem]">
                  Sponsors are supporting a print-first, volunteer-run magazine
                  that treats advertising as culture, not just commerce. The
                  best fit is a partner who wants to look good in the issue and
                  also genuinely belongs in the conversation.
                </p>

                <div className="editorial-card-grid">
                  <article className="editorial-card">
                    <p className="editorial-kicker">What you get</p>
                    <p className="font-body text-[15px] leading-[1.55] text-rebrief-dark/76">
                      House ad placement, a sharper brand presence, and a place
                      inside a launch that feels collected rather than generic.
                    </p>
                  </article>

                  <article className="editorial-card">
                    <p className="editorial-kicker">Best next step</p>
                    <p className="font-body text-[15px] leading-[1.55] text-rebrief-dark/76">
                      Read the media kit for rates and deadlines, then browse
                      the archive to understand the tone of the format.
                    </p>
                  </article>

                  <article className="editorial-card">
                    <p className="editorial-kicker">Contact</p>
                    <p className="font-body text-[15px] leading-[1.55] text-rebrief-dark/76">
                      Email{' '}
                      <a
                        href="mailto:hello@rebrief.ca"
                        className="underline decoration-rebrief-dark/30 underline-offset-4 hover:text-rebrief-gold transition-colors"
                      >
                        hello@rebrief.ca
                      </a>{' '}
                      when you are ready to talk placements, timing, or custom
                      ideas for the issue.
                    </p>
                  </article>
                </div>
              </div>

              <aside className="editorial-sidecar">
                <div className="space-y-4">
                  <p className="editorial-kicker">Quick picks</p>
                  <button
                    type="button"
                    className="editorial-link-row"
                    onClick={() => switchPanel('media-kit')}
                  >
                    <span>Open the media kit</span>
                    <span aria-hidden="true">01</span>
                  </button>
                  <button
                    type="button"
                    className="editorial-link-row"
                    onClick={() => switchPanel('house-ads')}
                  >
                    <span>Browse the house ad archive</span>
                    <span aria-hidden="true">02</span>
                  </button>
                </div>

                <div className="editorial-note">
                  Best sponsorship pages usually look less like ads dropped into
                  a layout and more like contributions that understand the
                  magazine&apos;s tone.
                </div>
              </aside>
            </div>
          </section>
        )}

        {activePanel === 'media-kit' && (
          <section
            id={`${tabsId}-media-kit-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-media-kit-tab`}
            className="editorial-panel"
          >
            <Suspense fallback={<PanelLoadingState label="Press desk" />}>
              <PdfFlipbook src={SPONSORSHIP_PDF} />
            </Suspense>
          </section>
        )}

        {activePanel === 'house-ads' && (
          <section
            id={`${tabsId}-house-ads-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-house-ads-tab`}
            className="editorial-panel"
          >
            <Suspense fallback={<PanelLoadingState label="Reference room" />}>
              <HouseAdViewer />
            </Suspense>
          </section>
        )}
      </div>
    </div>
  )
}
