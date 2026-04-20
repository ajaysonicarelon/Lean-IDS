/**
 * Parse Figma Token JSON files and generate TypeScript token files
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface FigmaToken {
  $type: string;
  $value: any;
  $extensions?: any;
}

interface ColorValue {
  colorSpace: string;
  components: number[];
  alpha: number;
  hex: string;
}

interface TypographyToken {
  fontFamily: FigmaToken;
  fontSize: FigmaToken;
  fontWeight: FigmaToken;
  lineHeight: FigmaToken;
  letterSpacing: FigmaToken;
}

// Convert RGB components to hex
function rgbToHex(components: number[]): string {
  const r = Math.round(components[0] * 255);
  const g = Math.round(components[1] * 255);
  const b = Math.round(components[2] * 255);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

// Parse color tokens
function parseColorTokens(tokens: any): any {
  const colors: any = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'object' && value !== null && '$value' in value) {
      const token = value as FigmaToken;
      if (token.$type === 'color' && typeof token.$value === 'object') {
        const colorValue = token.$value as ColorValue;
        colors[key] = colorValue.hex || rgbToHex(colorValue.components);
      }
    } else if (typeof value === 'object' && value !== null) {
      colors[key] = parseColorTokens(value);
    }
  }
  
  return colors;
}

// Parse spacing tokens
function parseSpacingTokens(tokens: any): any {
  const spacing: any = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'object' && value !== null && '$value' in value) {
      const token = value as FigmaToken;
      if (token.$type === 'number') {
        const spacingKey = key.replace('spacing-', '');
        spacing[spacingKey] = `${token.$value}px`;
      }
    }
  }
  
  return spacing;
}

// Parse typography tokens
function parseTypographyTokens(tokens: any): any {
  const typography: any = {};
  
  for (const [category, weights] of Object.entries(tokens)) {
    if (typeof weights === 'object' && weights !== null) {
      typography[category] = {};
      
      for (const [weight, props] of Object.entries(weights as any)) {
        if (typeof props === 'object' && props !== null) {
          const typo = props as TypographyToken;
          typography[category][weight] = {
            fontFamily: typo.fontFamily?.$value || 'Elevance Sans',
            fontSize: `${typo.fontSize?.$value || 14}px`,
            fontWeight: typo.fontWeight?.$value || 'Regular',
            lineHeight: `${typo.lineHeight?.$value || 16}px`,
            letterSpacing: `${typo.letterSpacing?.$value || 0}px`,
          };
        }
      }
    }
  }
  
  return typography;
}

// Main parsing function
function parseTokenFile(filePath: string): any {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  
  const parsed: any = {
    colors: {},
    spacing: {},
    typography: {},
    radius: {},
  };
  
  if (data.primitive) {
    // Parse colors
    if (data.primitive.primary) {
      parsed.colors.primary = parseColorTokens(data.primitive.primary);
    }
    if (data.primitive.neutral) {
      parsed.colors.neutral = parseColorTokens(data.primitive.neutral);
    }
    if (data.primitive.feedback) {
      parsed.colors.feedback = parseColorTokens(data.primitive.feedback);
    }
    if (data.primitive.secondary) {
      parsed.colors.secondary = parseColorTokens(data.primitive.secondary);
    }
    
    // Parse spacing
    if (data.primitive.spacing) {
      parsed.spacing = parseSpacingTokens(data.primitive.spacing);
    }
    
    // Parse typography
    const typographyCategories = ['code', 'caption', 'paragraph', 'body', 'headingS', 'headingM', 'headingL', 'headingXL', 'displayS', 'displayM', 'displayL'];
    for (const category of typographyCategories) {
      if (data.primitive[category]) {
        parsed.typography[category] = parseTypographyTokens({ [category]: data.primitive[category] })[category];
      }
    }
    
    // Parse radius
    if (data.primitive.radius) {
      for (const [key, value] of Object.entries(data.primitive.radius)) {
        if (typeof value === 'object' && value !== null && '$value' in value) {
          const token = value as FigmaToken;
          const radiusKey = key.replace('Radius ', '').toLowerCase();
          parsed.radius[radiusKey] = typeof token.$value === 'string' ? token.$value : `${token.$value}px`;
        }
      }
    }
  }
  
  return parsed;
}

// Generate TypeScript color file
function generateColorFile(carelonColors: any, elevanceColors: any): string {
  return `/**
 * Color tokens for Lean IDS
 * Auto-generated from Figma design tokens
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

export interface FeedbackColors {
  red: ColorScale;
  green: ColorScale;
  yellow: ColorScale;
  blue: ColorScale;
}

export interface SecondaryColors {
  cyan: ColorScale;
  turquoise: ColorScale;
  terracotta: ColorScale;
  pantone: ColorScale;
}

export interface ColorPalette {
  primary: ColorScale;
  neutral: Partial<ColorScale> & { 1000?: string };
  feedback: FeedbackColors;
  secondary: SecondaryColors;
}

// Carelon Brand Colors
export const carelonColors: ColorPalette = ${JSON.stringify(carelonColors, null, 2)};

// Elevance Brand Colors
export const elevanceColors: ColorPalette = ${JSON.stringify(elevanceColors, null, 2)};

// Semantic color mapping for Carelon
export const carelonSemanticColors = {
  text: {
    primary: carelonColors.neutral['900'],
    secondary: carelonColors.neutral['600'],
    disabled: carelonColors.neutral['400'],
    inverse: carelonColors.neutral['50'],
    error: carelonColors.feedback.red['600'],
    success: carelonColors.feedback.green['600'],
    warning: carelonColors.feedback.yellow['700'],
  },
  background: {
    primary: carelonColors.neutral['50'],
    secondary: carelonColors.neutral['100'],
    tertiary: carelonColors.neutral['200'],
    inverse: carelonColors.neutral['900'],
    disabled: carelonColors.neutral['200'],
  },
  border: {
    default: carelonColors.neutral['300'],
    hover: carelonColors.neutral['400'],
    focus: carelonColors.primary['500'],
    error: carelonColors.feedback.red['500'],
    disabled: carelonColors.neutral['200'],
  },
  interactive: {
    default: carelonColors.primary['500'],
    hover: carelonColors.primary['600'],
    active: carelonColors.primary['700'],
    disabled: carelonColors.neutral['300'],
  },
};

// Semantic color mapping for Elevance
export const elevanceSemanticColors = {
  text: {
    primary: elevanceColors.neutral['900'],
    secondary: elevanceColors.neutral['600'],
    disabled: elevanceColors.neutral['400'],
    inverse: elevanceColors.neutral['50'],
    error: elevanceColors.feedback.red['600'],
    success: elevanceColors.feedback.green['600'],
    warning: elevanceColors.feedback.yellow['700'],
  },
  background: {
    primary: elevanceColors.neutral['50'],
    secondary: elevanceColors.neutral['100'],
    tertiary: elevanceColors.neutral['200'],
    inverse: elevanceColors.neutral['900'],
    disabled: elevanceColors.neutral['200'],
  },
  border: {
    default: elevanceColors.neutral['300'],
    hover: elevanceColors.neutral['400'],
    focus: elevanceColors.primary['500'],
    error: elevanceColors.feedback.red['500'],
    disabled: elevanceColors.neutral['200'],
  },
  interactive: {
    default: elevanceColors.primary['500'],
    hover: elevanceColors.primary['600'],
    active: elevanceColors.primary['700'],
    disabled: elevanceColors.neutral['300'],
  },
};
`;
}

// Generate TypeScript spacing file
function generateSpacingFile(spacing: any): string {
  return `/**
 * Spacing tokens for Lean IDS
 * Based on Figma design tokens
 */

export const spacing = ${JSON.stringify(spacing, null, 2)} as const;

// Semantic spacing aliases
export const semanticSpacing = {
  xs: spacing['1'],    // 4px
  sm: spacing['3'],    // 8px
  md: spacing['5'],    // 12px
  lg: spacing['7'],    // 16px
  xl: spacing['10'],   // 20px
  '2xl': spacing['13'], // 24px
  '3xl': spacing['16'], // 28px
} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = typeof spacing[SpacingKey];
export type SemanticSpacingKey = keyof typeof semanticSpacing;
`;
}

// Generate TypeScript typography file
function generateTypographyFile(typography: any): string {
  // Map font weights to numeric values
  const weightMap: any = {
    'Light': 300,
    'Regular': 400,
    'Medium': 500,
    'Semibold': 600,
    'Bold': 700,
  };
  
  // Convert font weights to numbers
  const processedTypography: any = {};
  for (const [category, weights] of Object.entries(typography)) {
    processedTypography[category] = {};
    for (const [weight, props] of Object.entries(weights as any)) {
      const typedProps = props as any;
      processedTypography[category][weight] = {
        fontFamily: typedProps.fontFamily,
        fontSize: typedProps.fontSize,
        lineHeight: typedProps.lineHeight,
        letterSpacing: typedProps.letterSpacing,
        fontWeight: weightMap[typedProps.fontWeight] || 400,
      };
    }
  }
  
  return `/**
 * Typography tokens for Lean IDS
 * Auto-generated from Figma design tokens
 */

export const fontFamilies = {
  primary: '"Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  monospace: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

export const typography = ${JSON.stringify(processedTypography, null, 2)} as const;

export type TypographyKey = keyof typeof typography;
`;
}

// Main execution
const carelonPath = path.join(__dirname, '../../../Carelon.tokens.json');
const elevancePath = path.join(__dirname, '../../../Elevance.tokens.json');

console.log('📖 Parsing Figma token files...');

const carelonTokens = parseTokenFile(carelonPath);
const elevanceTokens = parseTokenFile(elevancePath);

console.log('✅ Tokens parsed successfully!');

// Generate TypeScript files
const srcDir = path.join(__dirname, '../src');

// Generate colors.ts
const colorsContent = generateColorFile(carelonTokens.colors, elevanceTokens.colors);
fs.writeFileSync(path.join(srcDir, 'colors.ts'), colorsContent);
console.log('✅ Generated colors.ts');

// Generate spacing.ts
const spacingContent = generateSpacingFile(carelonTokens.spacing);
fs.writeFileSync(path.join(srcDir, 'spacing.ts'), spacingContent);
console.log('✅ Generated spacing.ts');

// Generate typography.ts
const typographyContent = generateTypographyFile(carelonTokens.typography);
fs.writeFileSync(path.join(srcDir, 'typography.ts'), typographyContent);
console.log('✅ Generated typography.ts');

console.log('\n🎉 All token files generated successfully!');
