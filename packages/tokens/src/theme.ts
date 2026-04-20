/**
 * Theme configuration for Lean IDS
 * Combines all design tokens into cohesive themes
 */

import {
  carelonColors,
  elevanceColors,
  carelonSemanticColors,
  elevanceSemanticColors,
  type SemanticColorPalette,
  type SemanticColors,
} from './semantic-colors';
import { spacing } from './spacing';
import { typography, fontFamilies, fontWeights } from './typography';
import { shadows } from './shadows';
import { borderRadius, borderWidth } from './borders';
import { breakpoints, mediaQueries } from './breakpoints';

// Legacy support - map to new structure
export const fontSizes = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  48: '48px',
  60: '60px',
  72: '72px',
} as const;

export const lineHeights = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  19: '19px',
  21: '21px',
  24: '24px',
  28: '28px',
  32: '32px',
  48: '48px',
  60: '60px',
  72: '72px',
} as const;

export interface Theme {
  name: string;
  colors: {
    palette: SemanticColorPalette;
    semantic: SemanticColors;
  };
  spacing: typeof spacing;
  typography: typeof typography;
  fonts: typeof fontFamilies;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  shadows: typeof shadows;
  borderRadius: typeof borderRadius;
  borderWidth: typeof borderWidth;
  breakpoints: typeof breakpoints;
  mediaQueries: typeof mediaQueries;
}

export const carelonTheme: Theme = {
  name: 'carelon',
  colors: {
    palette: carelonColors,
    semantic: carelonSemanticColors,
  },
  spacing,
  typography,
  fonts: fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  borderRadius,
  borderWidth,
  breakpoints,
  mediaQueries,
};

export const elevanceTheme: Theme = {
  name: 'elevance',
  colors: {
    palette: elevanceColors,
    semantic: elevanceSemanticColors,
  },
  spacing,
  typography,
  fonts: fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  borderRadius,
  borderWidth,
  breakpoints,
  mediaQueries,
};

export const themes = {
  carelon: carelonTheme,
  elevance: elevanceTheme,
} as const;

export type ThemeName = keyof typeof themes;
