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
        launchLine:       { x: 349, y: 784, width: 260, height: 24 },
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

    header: {
      height: 56,
      background: 'rgba(240,236,228,0.94)',
      overflow: 'hidden',
      objects: {
        logo:      { x: 141, y: 14, width: 120, height: 28 },
        hamburger: { x: 16,  y: 16, width: 24,  height: 24 },
      },
    },

    hero: {
      height: 640,
      background: 'transparent',
      overflow: 'hidden',
      objects: {
        heroComposite: { x: 0, y: 0, width: 402, height: 640 },
      },
    },

    about: {
      height: 1006,
      background: '#efefec',
      overflow: 'visible',
      objects: {
        introLine:       { x: 24, y: 40,  width: 354, height: 50 },
        aboutTitleImage: { x: 24, y: 110, width: 354, height: 84 },
        copyBlock:       { x: 24, y: 220, width: 354, height: 300 },
        faceImage:       { x: 60, y: 660, width: 280, height: 297, zIndex: 5 },
      },
    },

    currentIssue: {
      height: 628,
      background: '#222323',
      overflow: 'hidden',
      objects: {
        issueLabel:       { x: 24,  y: 80,  width: 200, height: 22 },
        canadaTitleImage: { x: 24,  y: 118, width: 354, height: 76 },
        subhead:          { x: 24,  y: 216, width: 354, height: 26 },
        bodyCopy:         { x: 24,  y: 260, width: 354, height: 180 },
        launchLine:       { x: 24,  y: 460, width: 300, height: 18 },
        starLarge:        { x: 200, y: 280, width: 220, height: 209 },
      },
    },

    sponsorship: {
      height: 688,
      background: '#f0ebdf',
      overflow: 'hidden',
      objects: {
        sponsorshipTitleImage: { x: 24, y: 40,  width: 354, height: 192 },
        copyBlock:             { x: 24, y: 250, width: 354, height: 160 },
        speechBubbleImage:     { x: 60, y: 420, width: 280, height: 383 },
      },
    },

    getInTouchMasthead: {
      height: 525,
      background: '#3a3a3a',
      overflow: 'hidden',
      objects: {
        mastheadTexture:    { x: 0,  y: 0,  width: 402, height: 525 },
        mastheadNamesImage: { x: 24, y: 40, width: 354, height: 432 },
      },
    },

    getInTouchFlyer: {
      height: 524,
      background: '#4a4a4a',
      overflow: 'hidden',
      objects: {
        paperTexture: { x: 0,  y: 0,  width: 402, height: 524 },
        flyerImage:   { x: 24, y: 40, width: 354, height: 323 },
      },
    },

    footer: {
      height: 645,
      background: '#fbfaf6',
      overflow: 'hidden',
      objects: {
        wordmark:              { x: 24, y: 60,  width: 354, height: 117 },
        magazineSocietyLockup: { x: 24, y: 190, width: 200, height: 66 },
        leftCopy:              { x: 24, y: 280, width: 354, height: 80 },
        contactBlock:          { x: 24, y: 380, width: 354, height: 60 },
        subscribeBlock:        { x: 24, y: 460, width: 354, height: 50 },
        emailInput:            { x: 24, y: 530, width: 354, height: 48 },
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
