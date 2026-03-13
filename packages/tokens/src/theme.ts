/**
 * Theme configuration for Lean IDS
 * Combines all design tokens into cohesive themes
 */

import {
  carelonColors,
  elevanceColors,
  carelonSemanticColors,
  elevanceSemanticColors,
  type ColorPalette,
  type SemanticColors,
} from './colors';
import { spacing } from './spacing';
import { typography, fontFamilies, fontSizes, fontWeights, lineHeights } from './typography';
import { shadows } from './shadows';
import { borderRadius, borderWidth } from './borders';
import { breakpoints, mediaQueries } from './breakpoints';

export interface Theme {
  name: string;
  colors: {
    palette: ColorPalette;
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
