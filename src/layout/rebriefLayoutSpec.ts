export type ObjectSpec = {
  x: number
  y: number
  width: number
  height: number
  rotation?: number
  zIndex?: number
}

export type SectionSpec = {
  height: number
  background: string
  overflow: 'hidden' | 'visible'
  objects: Record<string, ObjectSpec>
}

export type LayoutSpec = {
  targetWidth: number
  sections: Record<string, SectionSpec>
}

export type NavSpec = {
  targetWidth: number
  height: number
  background: string
  objects: Record<string, ObjectSpec>
}

/* ────────────────────────────────────────────
   DESKTOP — 1440 px artboard
   ──────────────────────────────────────────── */

export const desktop: LayoutSpec = {
  targetWidth: 1440,
  sections: {

    header: {
      height: 74,
      background: 'rgba(240,236,228,0.94)',
      overflow: 'hidden',
      objects: {
        logo:       { x: 157, y: 15, width: 138, height: 44 },
        desktopNav: { x: 906, y: 0,  width: 376, height: 74 },
      },
    },

    hero: {
      height: 901,
      background: 'transparent',
      overflow: 'hidden',
      objects: {
        heroComposite: { x: 0, y: 0, width: 1440, height: 901 },
      },
    },

    about: {
      height: 916,
      background: '#efefec',
      overflow: 'visible',
      objects: {
        introLine:       { x: 362, y: 142, width: 700, height: 24 },
        aboutTitleImage: { x: 268, y: 229, width: 908, height: 216, zIndex: 2 },
        faceImage:       { x: 160, y: 540, width: 480, height: 509, zIndex: 5 },
        copyBlock:       { x: 660, y: 551, width: 535, height: 280 },
      },
    },

    currentIssue: {
      height: 908,
      background: '#222323',
      overflow: 'hidden',
      objects: {
        issueLabel:       { x: 349, y: 260, width: 120, height: 36 },
        canadaTitleImage: { x: 155, y: 333, width: 445, height: 95 },
        subhead:          { x: 349, y: 487, width: 530, height: 44 },
        bodyCopy:         { x: 349, y: 545, width: 420, height: 300 },
        launchLine:       { x: 349, y: 785, width: 260, height: 24 },
        starLarge:        { x: 630, y: -102, width: 754, height: 716 },
        starSmall:        { x: 865, y: 437, width: 438, height: 414 },
      },
    },

    sponsorship: {
      height: 794,
      background: '#f5f5f5',
      overflow: 'visible',
      objects: {
        compositeImage:        { x: 103, y: -86, width: 1140, height: 772 },
        copyBlock:             { x: 733, y: 500, width: 475, height: 250 },
      },
    },

    getInTouch: {
      height: 797,
      background: '#3a3a3a',
      overflow: 'hidden',
      objects: {
        mastheadTexture:    { x: 0,   y: 0,   width: 720, height: 797 },
        paperTexture:       { x: 720, y: 0,   width: 720, height: 797 },
        mastheadNamesImage: { x: 142, y: 110, width: 471, height: 576 },
        flyerImage:         { x: 570, y: 119, width: 747, height: 679 },
      },
    },

    footer: {
      height: 649,
      background: '#fbfaf6',
      overflow: 'hidden',
      objects: {
        wordmark:              { x: 157, y: 121, width: 743, height: 246 },
        magazineSocietyLockup: { x: 926, y: 250, width: 352, height: 118 },
        leftCopy:              { x: 157, y: 425, width: 250, height: 112 },
        contactBlock:          { x: 637, y: 425, width: 220, height: 140 },
        subscribeBlock:        { x: 925, y: 425, width: 320, height: 80 },
        emailInput:            { x: 925, y: 505, width: 300, height: 48 },
      },
    },

  },
}

/* ────────────────────────────────────────────
   MOBILE — 402 px artboard
   ──────────────────────────────────────────── */

export const mobile: LayoutSpec = {
  targetWidth: 402,
  sections: {

    /* navbar-mobile.svg  402×66 (rect 402×55 + 11px shadow) */
    header: {
      height: 55,
      background: '#f4f4f4',
      overflow: 'hidden',
      objects: {
        hamburger: { x: 30,  y: 22, width: 18,  height: 14 },
        logo:      { x: 141, y: 14, width: 120, height: 28 },
      },
    },

    /* hero-composite-mobile.png  402×640 */
    hero: {
      height: 638,
      background: 'transparent',
      overflow: 'hidden',
      objects: {
        heroComposite: { x: 0, y: 0, width: 402, height: 638 },
      },
    },

    /* about-title-mobile-composite.png 342×492 (title + face baked together) */
    about: {
      height: 1006,
      background: '#f4f4f4',
      overflow: 'visible',
      objects: {
        introLine:          { x: 24, y: 40,  width: 354, height: 30 },
        titleFaceComposite: { x: 30, y: 110, width: 342, height: 492 },
        copyBlock:          { x: 24, y: 665, width: 354, height: 325 },
      },
    },

    /* canada-text-mobile.png 342×493, canada-star-mobile.png 339×530 */
    currentIssue: {
      height: 628,
      background: '#222323',
      overflow: 'hidden',
      objects: {
        canadaTextImage: { x: 30,  y: 70,  width: 342, height: 493 },
        starLarge:       { x: 55, y: -189, width: 347, height: 543 },
      },
    },

    /* sponsorship-title-mobile.png 326×177, sponsorship-bubble-mobile.png 326×247 */
    sponsorship: {
      height: 688,
      background: '#f4f4f4',
      overflow: 'visible',
      objects: {
        sponsorshipTitleImage: { x: 38,  y: 40,  width: 326, height: 177 },
        copyBlock:             { x: 24,  y: 280, width: 354, height: 237 },
        speechBubbleImage:     { x: 38,  y: 548, width: 326, height: 247 },
      },
    },

    /* masthead-texture-mobile.png 402×1050 (top 705px), masthead-names-mobile.svg 342×454 */
    getInTouchMasthead: {
      height: 705,
      background: '#3a3a3a',
      overflow: 'hidden',
      objects: {
        mastheadTexture:    { x: 0,  y: 0,   width: 402, height: 705 },
        mastheadNamesImage: { x: 30, y: 200, width: 342, height: 454 },
      },
    },

    /* masthead-texture-mobile.png (bottom 344px), get-in-touch-flyer-mobile.png 386×385 */
    getInTouchFlyer: {
      height: 344,
      background: '#4a4a4a',
      overflow: 'visible',
      objects: {
        paperTexture: { x: 0, y: 0,   width: 402, height: 344 },
        flyerImage:   { x: 8, y: 45, width: 386, height: 385 },
      },
    },

    /* footer-rebrief-logo-composite-mobile.svg 342×151, footerStationery-mobile.png 386×523 */
    footer: {
      height: 645,
      background: '#f4f4f4',
      overflow: 'hidden',
      objects: {
        footerStationery: { x: 8, y: 0, width: 386, height: 74 },
        logoComposite:   { x: 30, y: 74,  width: 342, height: 151 },
        leftCopy:        { x: 28, y: 262, width: 354, height: 85 },
        contactBlock:    { x: 28, y: 364, width: 354, height: 80 },
        subscribeBlock:  { x: 28, y: 491, width: 354, height: 20 },
        emailInput:      { x: 28, y: 545, width: 354, height: 48 },
      },
    },

  },
}

/* ────────────────────────────────────────────
   MOBILE NAV OVERLAY — 402 × 874
   ──────────────────────────────────────────── */

export const mobileNav: NavSpec = {
  targetWidth: 402,
  height: 874,
  background: '#f4f4f4',
  objects: {
    closeButton:  { x: 16, y: 5,   width: 44,  height: 44 },
    navList:      { x: 24, y: 240, width: 354, height: 280 },
    contactBlock: { x: 24, y: 690, width: 354, height: 130 },
  },
}
