# Rebrief Magazine

**A New Canadian Journal of Advertising.**

One-page site for the launch of Rebrief — a print-forward, not-for-profit magazine publishing Issue 01 in Toronto, June 2026.

---

## Stack

- Hand-written HTML / CSS / vanilla JS. No build step.
- Local fonts: Vanity Condensed, Vanity Expanded, Nicholas Regular, Nord.
- Deployable as static files (GitHub Pages, Netlify, Vercel, etc.).

## Local preview

```bash
python3 -m http.server 4311
# then open http://localhost:4311
```

Or any static server — this site has no runtime dependencies.

## Structure

```
/
├── index.html          One page, one file.
├── styles.css          All type, colour, layout.
├── script.js           Scroll reveals, hero parallax, form stub.
└── assets/
    ├── fonts/          Vanity + Nicholas + Nord (.otf / .ttf)
    └── images/         Masthead, logo, colour reference
```

## Sections

1. **Hero** — Masthead lockup, volume/issue/date, nav.
2. **Manifesto** — Why Rebrief exists, three-column body, stat block.
3. **Issue 01** — TOC for *What is Canadian Advertising?* across Re:Wind, Re:Identify, Re:Articulate, Re:Consider, Re:Direct.
4. **Sponsorship** — Three tiers ($5K / $1K / $500), ledger, deadlines.
5. **Society** — The five-person editorial masthead.
6. **Subscribe** — Substack signup + general inbox.

## Brand notes

- **Large Headline**: Vanity Condensed + Expanded mix. Tracking 20 / leading 110%.
- **Small Headline**: Vanity Condensed. Tracking 20 / leading 100%.
- **Body**: Nicholas Regular. Tracking 20 / leading 120%. Lead-in phrase bold.
- Vanity is always ALL CAPS. Nicholas handles all running text.

## Deploy to GitHub Pages

```bash
# from the repo root on main
# Settings → Pages → Deploy from branch → main / root
```

Or point a custom domain (`rebriefmag.ca`) at Pages.

## Contact

ideas@rebriefmagazine.com

---

© MMXXVI Rebrief Magazine Society. Made in Canada.
