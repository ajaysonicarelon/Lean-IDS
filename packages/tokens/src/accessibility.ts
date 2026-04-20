/**
 * Accessibility tokens for Lean IDS
 * High-contrast colors, focus indicators, and a11y-specific values
 */

export interface AccessibilityColors {
  highContrast: {
    text: {
      primary: string;
      secondary: string;
      inverse: string;
    };
    background: {
      primary: string;
      secondary: string;
      inverse: string;
    };
    border: {
      default: string;
      focus: string;
    };
    interactive: {
      default: string;
      hover: string;
      active: string;
    };
  };
  focus: {
    outline: string;
    outlineOffset: string;
    outlineWidth: string;
    shadow: string;
  };
}

// High-contrast mode colors (WCAG AAA - 7:1 contrast ratio)
export const accessibilityColors: AccessibilityColors = {
  highContrast: {
    text: {
      primary: '#000000',
      secondary: '#1a1a1a',
      inverse: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      inverse: '#000000',
    },
    border: {
      default: '#000000',
      focus: '#0000FF', // Pure blue for maximum contrast
    },
    interactive: {
      default: '#0047AB', // High contrast blue
      hover: '#003380',
      active: '#002255',
    },
  },
  focus: {
    outline: '3px solid #0000FF',
    outlineOffset: '2px',
    outlineWidth: '3px',
    shadow: '0 0 0 4px rgba(0, 71, 171, 0.3)',
  },
};

// Minimum touch target sizes (WCAG 2.1 Level AAA)
export const touchTargets = {
  minimum: '44px',
  recommended: '48px',
  comfortable: '56px',
} as const;

// Text size multipliers for accessibility
export const textSizeMultipliers = {
  small: 0.875, // 87.5%
  medium: 1, // 100%
  large: 1.25, // 125%
  extraLarge: 1.5, // 150%
} as const;

// Minimum contrast ratios
export const contrastRatios = {
  normalText: {
    aa: 4.5,
    aaa: 7,
  },
  largeText: {
    aa: 3,
    aaa: 4.5,
  },
  uiComponents: {
    aa: 3,
  },
} as const;

export type TextSizeMultiplier = keyof typeof textSizeMultipliers;
