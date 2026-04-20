/**
 * Animation and transition tokens for Lean IDS
 */

// Animation durations
export const durations = {
  instant: '0ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
  slowest: '1000ms',
} as const;

// Easing functions
export const easings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// Common transitions
export const transitions = {
  default: `all 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
  fast: `all 150ms cubic-bezier(0, 0, 0.2, 1)`,
  slow: `all 500ms cubic-bezier(0.4, 0, 0.2, 1)`,
  color: `color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
  transform: `transform 300ms cubic-bezier(0, 0, 0.2, 1)`,
  opacity: `opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
  shadow: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
} as const;

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type Transition = keyof typeof transitions;
