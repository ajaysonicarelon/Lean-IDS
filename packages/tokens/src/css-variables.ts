/**
 * CSS Variables Generator for Design Tokens
 * Generates CSS custom properties for use in Angular and other CSS-based frameworks
 */

import { carelonTheme, elevanceTheme } from './theme';

/**
 * Generate CSS variables string for a theme
 */
export function generateCSSVariables(themeName: 'carelon' | 'elevance'): string {
  const theme = themeName === 'carelon' ? carelonTheme : elevanceTheme;
  
  const variables: string[] = [
    '/* Semantic Focus Colors */',
    `--focus-indicator: ${theme.colors.semantic.focus.indicator};`,
    `--focus-input: ${theme.colors.semantic.focus.input};`,
    '',
    '/* Legacy Focus (deprecated - use semantic focus colors above) */',
    `--primary-500: ${theme.colors.palette.primary[500]};`,
    `--turquoise-400: ${theme.colors.palette.secondary.turquoise[400]};`,
  ];
  
  return variables.join('\n  ');
}

/**
 * CSS Variables for Carelon Theme
 */
export const carelonCSSVariables = `:root {
  ${generateCSSVariables('carelon')}
}`;

/**
 * CSS Variables for Elevance Theme
 */
export const elevanceCSSVariables = `:root {
  ${generateCSSVariables('elevance')}
}`;

/**
 * Export CSS file content
 */
export function generateCSSFile(themeName: 'carelon' | 'elevance'): string {
  return `/**
 * Design System CSS Variables - ${themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme
 * Auto-generated from design tokens
 * 
 * FOCUS COLORS:
 * --focus-indicator: Use for all keyboard navigation focus (buttons, links, breadcrumbs, checkboxes, toggles, etc.)
 * --focus-input: Use for input field focus borders (text inputs, textareas, selects, etc.)
 * 
 * To change focus colors system-wide, update /packages/tokens/src/semantic-colors.ts
 */

:root {
  ${generateCSSVariables(themeName)}
}
`;
}
