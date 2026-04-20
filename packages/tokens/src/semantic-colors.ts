/**
 * Semantic Color Tokens
 * Stable API layer that components use
 * 
 * This structure NEVER changes, even when Figma tokens change.
 * Components import from here, not from raw Figma tokens.
 */

import { TOKEN_MAPPING } from './token-mapping.config';

// Import raw Figma tokens
import { carelonColors as rawCarelonColors, elevanceColors as rawElevanceColors } from './colors';

/**
 * Standard color scale interface
 * All semantic colors follow this structure
 */
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Neutral color scale (includes 1000 for true black)
 */
export interface NeutralColorScale extends ColorScale {
  1000: string;
}

/**
 * Secondary color palette
 */
export interface SecondaryColors {
  blue: ColorScale;
  turquoise: ColorScale;
  cyan: ColorScale;
  tealgreen: ColorScale;
  terracotta: ColorScale;
  yellow: ColorScale;
  pink: Partial<ColorScale>;
  orange: Partial<ColorScale>;
  pantone: ColorScale;
}

/**
 * Semantic color palette interface
 * This is what components use
 */
export interface SemanticColorPalette {
  primary: ColorScale;
  neutral: NeutralColorScale;
  error: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  info: ColorScale;
  secondary: SecondaryColors;
}

/**
 * Map raw Figma tokens to semantic structure
 */
function mapColorScale(
  rawTokens: any,
  path: string,
  prefix: string,
  scales: number[]
): any {
  const result: any = {};
  
  // Navigate to the correct path in raw tokens
  const pathParts = path.split('.');
  let source = rawTokens;
  for (const part of pathParts) {
    source = source[part];
    if (!source) {
      console.warn(`Warning: Path ${path} not found in raw tokens`);
      return result;
    }
  }
  
  // Extract values for each scale
  for (const scale of scales) {
    const key = `${prefix}${scale}`;
    if (source[key]) {
      result[scale] = source[key];
    } else {
      console.warn(`Warning: ${key} not found in ${path}`);
    }
  }
  
  return result;
}

/**
 * Map secondary colors (special handling for nested structure)
 */
function mapSecondaryColors(rawTokens: any): SecondaryColors {
  const secondary = rawTokens.secondary;
  
  return {
    blue: mapColorScale({ secondary }, 'secondary', 'cyan-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    turquoise: mapColorScale({ secondary }, 'secondary', 'turquoise-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    cyan: mapColorScale({ secondary }, 'secondary', 'cyan-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    tealgreen: mapColorScale({ secondary }, 'secondary', 'terracotta-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    terracotta: mapColorScale({ secondary }, 'secondary', 'terracotta-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    yellow: mapColorScale({ secondary }, 'secondary', 'pantone-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    pink: {
      500: secondary['pantone-500'] || '#E85C7F'
    },
    orange: {
      500: secondary['pantone-500'] || '#F3833D'
    },
    pantone: mapColorScale({ secondary }, 'secondary', 'pantone-', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  };
}

/**
 * Generate semantic color palette from raw Figma tokens
 */
function generateSemanticPalette(rawTokens: any): SemanticColorPalette {
  const mapping = TOKEN_MAPPING.colors;
  
  return {
    primary: mapColorScale(rawTokens, mapping.primary.figmaPath, mapping.primary.figmaPrefix, mapping.primary.scales),
    neutral: {
      ...mapColorScale(rawTokens, mapping.neutral.figmaPath, mapping.neutral.figmaPrefix, mapping.neutral.scales),
      1000: rawTokens.neutral['gray-1000'] || '#000000'
    } as NeutralColorScale,
    error: mapColorScale(rawTokens, mapping.error.figmaPath, mapping.error.figmaPrefix, mapping.error.scales),
    success: mapColorScale(rawTokens, mapping.success.figmaPath, mapping.success.figmaPrefix, mapping.success.scales),
    warning: mapColorScale(rawTokens, mapping.warning.figmaPath, mapping.warning.figmaPrefix, mapping.warning.scales),
    info: mapColorScale(rawTokens, mapping.info.figmaPath, mapping.info.figmaPrefix, mapping.info.scales),
    secondary: mapSecondaryColors(rawTokens),
  };
}

/**
 * Carelon semantic colors
 * Components use this instead of raw tokens
 */
export const carelonColors: SemanticColorPalette = generateSemanticPalette(rawCarelonColors);

/**
 * Elevance semantic colors
 * Components use this instead of raw tokens
 */
export const elevanceColors: SemanticColorPalette = generateSemanticPalette(rawElevanceColors);

/**
 * Semantic color mappings for component states
 */
export interface SemanticColors {
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
    warning: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
  border: {
    default: string;
    hover: string;
    focus: string;
    error: string;
    disabled: string;
  };
  interactive: {
    default: string;
    hover: string;
    active: string;
    disabled: string;
  };
}

// Semantic color mapping for Carelon
export const carelonSemanticColors: SemanticColors = {
  text: {
    primary: carelonColors.neutral[900],
    secondary: carelonColors.neutral[600],
    disabled: carelonColors.neutral[400],
    inverse: carelonColors.neutral[50],
    error: carelonColors.error[600],
    success: carelonColors.success[600],
    warning: carelonColors.warning[700],
  },
  background: {
    primary: carelonColors.neutral[50],
    secondary: carelonColors.neutral[100],
    tertiary: carelonColors.neutral[200],
    inverse: carelonColors.neutral[900],
    disabled: carelonColors.neutral[200],
  },
  border: {
    default: carelonColors.neutral[300],
    hover: carelonColors.neutral[400],
    focus: carelonColors.primary[500],
    error: carelonColors.error[500],
    disabled: carelonColors.neutral[200],
  },
  interactive: {
    default: carelonColors.primary[500],
    hover: carelonColors.primary[600],
    active: carelonColors.primary[700],
    disabled: carelonColors.neutral[300],
  },
};

// Semantic color mapping for Elevance
export const elevanceSemanticColors: SemanticColors = {
  text: {
    primary: elevanceColors.neutral[900],
    secondary: elevanceColors.neutral[600],
    disabled: elevanceColors.neutral[400],
    inverse: elevanceColors.neutral[50],
    error: elevanceColors.error[600],
    success: elevanceColors.success[600],
    warning: elevanceColors.warning[700],
  },
  background: {
    primary: elevanceColors.neutral[50],
    secondary: elevanceColors.neutral[100],
    tertiary: elevanceColors.neutral[200],
    inverse: elevanceColors.neutral[900],
    disabled: elevanceColors.neutral[200],
  },
  border: {
    default: elevanceColors.neutral[300],
    hover: elevanceColors.neutral[400],
    focus: elevanceColors.primary[500],
    error: elevanceColors.error[500],
    disabled: elevanceColors.neutral[200],
  },
  interactive: {
    default: elevanceColors.primary[500],
    hover: elevanceColors.primary[600],
    active: elevanceColors.primary[700],
    disabled: elevanceColors.neutral[300],
  },
};
