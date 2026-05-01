import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Editorial colophon for the curious.
console.log(
  '%cREBRIEF',
  'font: 700 32px/1 system-ui; letter-spacing: 0.04em; color: #212121; padding: 8px 0;',
)
console.log(
  '%cA New Canadian Journal of Advertising · Issue One · Launches 09 July 2026',
  'font: italic 12px/1.4 system-ui; color: #7a6f3a;',
)
console.log(
  '%cSet in Vanity Condensed, Vanity Expanded, Nicholas, Nord & Roboto.\nImprinted Tkaronto · 43°38′N · 79°25′W',
  'font: 11px/1.5 system-ui; color: #555; padding-bottom: 6px;',
)
console.log(
  '%cWant to write for us? hello@rebrief.ca',
  'font: 11px/1.4 system-ui; color: #7a6f3a; padding-bottom: 8px;',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
