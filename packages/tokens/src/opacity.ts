/**
 * Opacity tokens for Lean IDS
 */

export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  100: '1',
} as const;

// Semantic opacity values
export const semanticOpacity = {
  disabled: opacity[40],
  hover: opacity[80],
  pressed: opacity[90],
  overlay: opacity[50],
  subtle: opacity[10],
} as const;

export type OpacityKey = keyof typeof opacity;
export type OpacityValue = typeof opacity[OpacityKey];
