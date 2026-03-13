/**
 * Typography tokens for Lean IDS
 */

export const fontFamilies = {
  primary: '"Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  monospace: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
} as const;

export const fontSizes = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  48: '48px',
  60: '60px',
  72: '72px',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeights = {
  12: '12px',
  14: '14px',
  16: '16px',
  19: '19px',
  24: '24px',
  28: '28px',
  33: '33px',
  38: '38px',
  56: '56px',
  72: '72px',
  86: '86px',
} as const;

export const letterSpacing = {
  0: '0px',
  1: '1px',
  1.5: '1.5px',
} as const;

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

export const typography = {
  code: {
    regular: {
      fontFamily: fontFamilies.monospace,
      fontSize: fontSizes[10],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[12],
      letterSpacing: letterSpacing[1.5],
    },
  },
  caption: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[12],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[14],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[12],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[14],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[12],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[14],
      letterSpacing: letterSpacing[1],
    },
  },
  paragraph: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[14],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[16],
      letterSpacing: letterSpacing[0],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[14],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[16],
      letterSpacing: letterSpacing[0],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[14],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[16],
      letterSpacing: letterSpacing[0],
    },
  },
  body: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[16],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[19],
      letterSpacing: letterSpacing[0],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[16],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[19],
      letterSpacing: letterSpacing[0],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[16],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[19],
      letterSpacing: letterSpacing[0],
    },
  },
  headingS: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[20],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[24],
      letterSpacing: letterSpacing[0],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[20],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[24],
      letterSpacing: letterSpacing[0],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[20],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[24],
      letterSpacing: letterSpacing[0],
    },
  },
  headingM: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[24],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[28],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[24],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[28],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[24],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[28],
      letterSpacing: letterSpacing[1],
    },
  },
  headingL: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[28],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[33],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[28],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[33],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[28],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[33],
      letterSpacing: letterSpacing[1],
    },
  },
  headingXL: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[32],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[38],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[32],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[38],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[32],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[38],
      letterSpacing: letterSpacing[1],
    },
  },
  displayS: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[48],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[56],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[48],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[56],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[48],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[56],
      letterSpacing: letterSpacing[1],
    },
  },
  displayM: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[60],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[72],
      letterSpacing: letterSpacing[1],
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[60],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights[72],
      letterSpacing: letterSpacing[1],
    },
    semibold: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[60],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights[72],
      letterSpacing: letterSpacing[1],
    },
  },
  displayL: {
    regular: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes[72],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[86],
      letterSpacing: letterSpacing[1],
    },
  },
} as const;

export type TypographyKey = keyof typeof typography;
