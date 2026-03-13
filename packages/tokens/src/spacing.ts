/**
 * Spacing tokens for Lean IDS
 * Based on 8px grid system
 */

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '40px',
  7: '48px',
  8: '56px',
  9: '64px',
  10: '72px',
  11: '80px',
  12: '88px',
  13: '96px',
  14: '104px',
  15: '112px',
} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = typeof spacing[SpacingKey];
