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
    450: string;
    500: string;
    550: string;
    600: string;
    700: string;
    800: string;
  };
  neutral: {
    50: string;
    75: string;
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
  error: {
    50: string;
    400: string;
    500: string;
    600: string;
  };
  warning: {
    150: string;
    500: string;
    700: string;
    850: string;
  };
  success: {
    50: string;
    200: string;
    500: string;
    600: string;
  };
  info: {
    50: string;
    250: string;
    500: string;
    600: string;
  };
  link: {
    500: string;
  };
  secondary: {
    blue: {
      900: string;
      700: string;
      500: string;
      400: string;
      300: string;
      50: string;
      25: string;
    };
    turquoise: {
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
    };
    tealgreen: {
      500: string;
      400: string;
      300: string;
      200: string;
      50: string;
    };
    terracotta: {
      500: string;
      400: string;
      300: string;
      200: string;
    };
    yellow: {
      500: string;
      400: string;
      300: string;
      200: string;
    };
    pink: {
      500: string;
    };
    orange: {
      500: string;
    };
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
    50: '#f8f7fb',
    100: '#efe6f8',
    200: '#cbb5e9',
    300: '#a884da',
    400: '#8553cb',
    450: '#6222bc',
    500: '#5009b5',
    550: '#4808a3',
    600: '#400791',
    700: '#30056d',
    800: '#200448',
  },
  neutral: {
    50: '#ffffff',
    75: '#fdfdfd',
    100: '#f8f8f8',
    200: '#e6e6e6',
    300: '#d5d5d5',
    400: '#b1b1b1',
    500: '#909090',
    600: '#6c6c6c',
    700: '#464646',
    800: '#222222',
    900: '#000000',
  },
  error: {
    50: '#FBE7EC',
    400: '#db3b63',
    500: '#d2093c',
    600: '#a80830',
  },
  warning: {
    150: '#FFEBB8',
    500: '#ffbd11',
    700: '#99710A',
    850: '#4c3905',
  },
  success: {
    50: '#E7F3E6',
    200: '#70B86B',
    500: '#108808',
    600: '#0D6D06',
  },
  info: {
    50: '#E8F0F9',
    250: '#8BB3DF',
    500: '#1666BE',
    600: '#125298',
  },
  link: {
    500: '#0064EF',
  },
  secondary: {
    blue: {
      900: '#00436B',
      700: '#005385',
      500: '#0079C2',
      400: '#4A88CC',
      300: '#44B8F3',
      50: '#C2E8FF',
      25: '#ECF8FE',
    },
    turquoise: {
      500: '#00BBBA',
      400: '#66D6D6',
      300: '#B2EBEA',
      200: '#D9F5F5',
      100: '#E6F8F8',
    },
    tealgreen: {
      500: '#0093A6',
      400: '#53B1A3',
      300: '#5D9674',
      200: '#92C9AE',
      50: '#F1F9F7',
    },
    terracotta: {
      500: '#E3725F',
      400: '#EEAA9F',
      300: '#F7D5CF',
      200: '#FBEAE7',
    },
    yellow: {
      500: '#EDAE28',
      400: '#FEC246',
      300: '#F0CF58',
      200: '#F4E0B5',
    },
    pink: {
      500: '#E85C7F',
    },
    orange: {
      500: '#F3833D',
    },
  },
};

// Elevance Brand Colors (using same structure as Carelon for consistency)
export const elevanceColors: ColorPalette = {
  primary: {
    50: '#F0F4FF',
    100: '#E0E9FF',
    200: '#C1D3FF',
    300: '#A3BDFF',
    400: '#84A7FF',
    450: '#7599FF',
    500: '#6591FF',
    550: '#5A84E6',
    600: '#5174CC',
    700: '#3D5799',
    800: '#283A66',
  },
  neutral: {
    50: '#FFFFFF',
    75: '#FCFCFC',
    100: '#F9FAFB',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  error: {
    50: '#FEF2F2',
    400: '#F87171',
    500: '#EF4444',
    600: '#B91C1C',
  },
  warning: {
    150: '#FEF3C7',
    500: '#F59E0B',
    700: '#B45309',
    850: '#78350F',
  },
  success: {
    50: '#ECFDF5',
    200: '#6EE7B7',
    500: '#10B981',
    600: '#047857',
  },
  info: {
    50: '#EFF6FF',
    250: '#93C5FD',
    500: '#3B82F6',
    600: '#1D4ED8',
  },
  link: {
    500: '#2563EB',
  },
  secondary: {
    blue: {
      900: '#1E3A8A',
      700: '#1D4ED8',
      500: '#3B82F6',
      400: '#60A5FA',
      300: '#93C5FD',
      50: '#DBEAFE',
      25: '#EFF6FF',
    },
    turquoise: {
      500: '#14B8A6',
      400: '#2DD4BF',
      300: '#5EEAD4',
      200: '#99F6E4',
      100: '#CCFBF1',
    },
    tealgreen: {
      500: '#0D9488',
      400: '#14B8A6',
      300: '#2DD4BF',
      200: '#5EEAD4',
      50: '#F0FDFA',
    },
    terracotta: {
      500: '#F97316',
      400: '#FB923C',
      300: '#FDBA74',
      200: '#FED7AA',
    },
    yellow: {
      500: '#EAB308',
      400: '#FACC15',
      300: '#FDE047',
      200: '#FEF08A',
    },
    pink: {
      500: '#EC4899',
    },
    orange: {
      500: '#F97316',
    },
  },
};

// Semantic color mapping for Carelon
export const carelonSemanticColors: SemanticColors = {
  text: {
    primary: carelonColors.neutral[900],
    secondary: carelonColors.neutral[600],
    disabled: carelonColors.neutral[400],
    inverse: carelonColors.neutral[50],
    error: carelonColors.error[600],
    success: carelonColors.success[600],
    warning: carelonColors.warning[700],
  },
  background: {
    primary: carelonColors.neutral[50],
    secondary: carelonColors.neutral[75],
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
    inverse: elevanceColors.neutral[50],
    error: elevanceColors.error[600],
    success: elevanceColors.success[600],
    warning: elevanceColors.warning[700],
  },
  background: {
    primary: elevanceColors.neutral[50],
    secondary: elevanceColors.neutral[75],
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
