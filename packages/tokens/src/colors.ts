/**
 * Color tokens for Lean IDS
 * Extracted from Figma design system
 */

export interface ColorPalette {
  primary: {
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
  };
  secondary: {
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
  };
  neutral: {
    0: string;
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
    1000: string;
  };
  success: {
    50: string;
    500: string;
    700: string;
  };
  error: {
    50: string;
    500: string;
    700: string;
  };
  warning: {
    50: string;
    500: string;
    700: string;
  };
  info: {
    50: string;
    500: string;
    700: string;
  };
}

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

// Carelon Brand Colors
export const carelonColors: ColorPalette = {
  primary: {
    50: '#E6F2FF',
    100: '#CCE5FF',
    200: '#99CBFF',
    300: '#66B0FF',
    400: '#3396FF',
    500: '#007CFF', // Primary brand color
    600: '#0063CC',
    700: '#004A99',
    800: '#003166',
    900: '#001933',
  },
  secondary: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    1000: '#000000',
  },
  success: {
    50: '#ECFDF5',
    500: '#10B981',
    700: '#047857',
  },
  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    700: '#B91C1C',
  },
  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    700: '#B45309',
  },
  info: {
    50: '#EFF6FF',
    500: '#3B82F6',
    700: '#1D4ED8',
  },
};

// Elevance Brand Colors
export const elevanceColors: ColorPalette = {
  primary: {
    50: '#F0F4FF',
    100: '#E0E9FF',
    200: '#C1D3FF',
    300: '#A3BDFF',
    400: '#84A7FF',
    500: '#6591FF', // Primary brand color
    600: '#5174CC',
    700: '#3D5799',
    800: '#283A66',
    900: '#141D33',
  },
  secondary: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    1000: '#000000',
  },
  success: {
    50: '#ECFDF5',
    500: '#10B981',
    700: '#047857',
  },
  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    700: '#B91C1C',
  },
  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    700: '#B45309',
  },
  info: {
    50: '#EFF6FF',
    500: '#3B82F6',
    700: '#1D4ED8',
  },
};

// Semantic color mapping for Carelon
export const carelonSemanticColors: SemanticColors = {
  text: {
    primary: carelonColors.neutral[900],
    secondary: carelonColors.neutral[600],
    disabled: carelonColors.neutral[400],
    inverse: carelonColors.neutral[0],
    error: carelonColors.error[700],
    success: carelonColors.success[700],
    warning: carelonColors.warning[700],
  },
  background: {
    primary: carelonColors.neutral[0],
    secondary: carelonColors.neutral[50],
    tertiary: carelonColors.neutral[100],
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
    inverse: elevanceColors.neutral[0],
    error: elevanceColors.error[700],
    success: elevanceColors.success[700],
    warning: elevanceColors.warning[700],
  },
  background: {
    primary: elevanceColors.neutral[0],
    secondary: elevanceColors.neutral[50],
    tertiary: elevanceColors.neutral[100],
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
