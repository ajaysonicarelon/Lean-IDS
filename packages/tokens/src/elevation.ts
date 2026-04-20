/**
 * Z-index elevation tokens for Lean IDS
 * Manages layering and stacking context
 */

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
  a11yToolbar: 1800,
  skipLink: 9999,
} as const;

export type ZIndexKey = keyof typeof zIndex;
export type ZIndexValue = typeof zIndex[ZIndexKey];
