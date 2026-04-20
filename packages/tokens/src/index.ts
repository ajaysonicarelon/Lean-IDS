/**
 * Lean IDS Design Tokens
 * Centralized design tokens for Carelon and Elevance themes
 */

// Core design tokens (Semantic Layer - Components use these)
export * from './semantic-colors';
export * from './spacing';
export * from './typography';
export * from './shadows';
export * from './borders';
export * from './breakpoints';
export * from './theme';

// Extended design tokens
export * from './accessibility';
export * from './animations';
export * from './elevation';
export * from './opacity';

// Raw Figma tokens (for reference/debugging only)
export { 
  carelonColors as rawCarelonColors, 
  elevanceColors as rawElevanceColors 
} from './colors';

// Token mapping configuration (for customization)
export * from './token-mapping.config';
