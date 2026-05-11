import { useEffect, useState } from 'react'

const overlays = {
  desktop: { src: '/reference/desktop.png', width: 1520 },
  mobile: { src: '/reference/mobile.png', width: 402 },
  nav: { src: '/reference/nav-menu.png', width: 402 },
} as const

type OverlayMode = keyof typeof overlays

export default function DevOverlay() {
  const params = new URLSearchParams(window.location.search)
  const mode = params.get('overlay') as OverlayMode | null
  const initialOpacity = parseFloat(params.get('opacity') ?? '0.4')

  const [visible, setVisible] = useState(!!mode)
  const [opacity, setOpacity] = useState(initialOpacity)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'O') {
        e.preventDefault()
        setVisible((v) => !v)
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'ArrowUp') {
        e.preventDefault()
        setOpacity((o) => Math.min(1, o + 0.1))
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'ArrowDown') {
        e.preventDefault()
        setOpacity((o) => Math.max(0.05, o - 0.1))
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  if (!mode || !overlays[mode] || !visible) return null

  const { src, width } = overlays[mode]

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity,
      }}
    />
  )
}
