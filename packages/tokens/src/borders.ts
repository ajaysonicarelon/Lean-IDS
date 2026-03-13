/**
 * Border tokens for Lean IDS
 */

export const borderRadius = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '999px',
} as const;

export const borderWidth = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
export type BorderWidthKey = keyof typeof borderWidth;
