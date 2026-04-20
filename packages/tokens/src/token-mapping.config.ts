/**
 * Token Mapping Configuration
 * Defines how Figma tokens map to semantic tokens for components
 * 
 * This file is the SINGLE SOURCE OF TRUTH for token mapping.
 * If Figma structure changes, only update this file - components never break!
 */

export interface ColorMapping {
  figmaPath: string;        // Path in Figma tokens (e.g., 'feedback')
  figmaPrefix: string;      // Prefix in Figma keys (e.g., 'red-')
  scales: number[];         // Scale values to extract
}

export interface TokenMappingConfig {
  colors: {
    [semanticName: string]: ColorMapping;
  };
  spacing: {
    figmaToSemantic: {
      [figmaKey: string]: string;
    };
  };
}

/**
 * Token Mapping Configuration
 * Update this if Figma structure changes
 */
export const TOKEN_MAPPING: TokenMappingConfig = {
  colors: {
    // Primary brand color
    primary: {
      figmaPath: 'primary',
      figmaPrefix: 'primary-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    
    // Neutral/Gray colors
    neutral: {
      figmaPath: 'neutral',
      figmaPrefix: 'gray-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    },
    
    // Error/Danger colors (maps from feedback.red)
    error: {
      figmaPath: 'feedback',
      figmaPrefix: 'red-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    
    // Success colors (maps from feedback.green)
    success: {
      figmaPath: 'feedback',
      figmaPrefix: 'green-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    
    // Warning colors (maps from feedback.yellow)
    warning: {
      figmaPath: 'feedback',
      figmaPrefix: 'yellow-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    
    // Info colors (maps from feedback.blue)
    info: {
      figmaPath: 'feedback',
      figmaPrefix: 'blue-',
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    
    // Secondary colors
    secondary: {
      figmaPath: 'secondary',
      figmaPrefix: '', // Will handle nested structure separately
      scales: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  
  spacing: {
    // Map Figma spacing keys to semantic names
    figmaToSemantic: {
      '0': '0',
      '1': 'xs',    // 4px
      '2': '1',     // 6px
      '3': 'sm',    // 8px
      '4': '2',     // 10px
      '5': 'md',    // 12px
      '6': '3',     // 14px
      '7': 'lg',    // 16px
      '8': '4',     // 20px
      '9': '5',     // 22px
      '10': 'xl',   // 24px
      '11': '6',    // 26px
      '12': '7',    // 30px
      '13': '2xl',  // 34px
      '14': '8',    // 38px
      '15': '9',    // 42px
      '16': '3xl',  // 46px
    }
  }
};
