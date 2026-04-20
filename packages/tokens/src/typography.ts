/**
 * Typography tokens for Lean IDS
 * Auto-generated from Figma design tokens
 */

export const fontFamilies = {
  primary: '"Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  monospace: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

export const typography = {
  "code": {
    "regular-10": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "10px",
      "lineHeight": "12px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "regular-12": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "regular-14": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "medium-10": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "10px",
      "lineHeight": "12px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    },
    "medium-12": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    },
    "medium-14": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    },
    "regular-italic-10": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "10px",
      "lineHeight": "12px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "regular-italic-12": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "regular-italic-14": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "1.5px",
      "fontWeight": 400
    },
    "medium-italic-10": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "10px",
      "lineHeight": "12px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    },
    "medium-italic-12": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    },
    "medium-italic-14": {
      "fontFamily": "{primitive.Roboto Mono}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "1.5px",
      "fontWeight": 500
    }
  },
  "caption": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "12px",
      "lineHeight": "14px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "paragraph": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "0px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "0px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "0px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "0px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "14px",
      "lineHeight": "16px",
      "letterSpacing": "0px",
      "fontWeight": 700
    }
  },
  "body": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "16px",
      "lineHeight": "19px",
      "letterSpacing": "0px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "16px",
      "lineHeight": "19px",
      "letterSpacing": "0px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "16px",
      "lineHeight": "19px",
      "letterSpacing": "0px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "16px",
      "lineHeight": "19px",
      "letterSpacing": "0px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "16px",
      "lineHeight": "19px",
      "letterSpacing": "0px",
      "fontWeight": 700
    }
  },
  "headingS": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "20px",
      "lineHeight": "24px",
      "letterSpacing": "0px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "20px",
      "lineHeight": "24px",
      "letterSpacing": "0px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "20px",
      "lineHeight": "24px",
      "letterSpacing": "0px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "20px",
      "lineHeight": "24px",
      "letterSpacing": "0px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "20px",
      "lineHeight": "24px",
      "letterSpacing": "0px",
      "fontWeight": 700
    }
  },
  "headingM": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "24px",
      "lineHeight": "28px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "24px",
      "lineHeight": "28px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "24px",
      "lineHeight": "28px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "24px",
      "lineHeight": "28px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "24px",
      "lineHeight": "28px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "headingL": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "28px",
      "lineHeight": "33px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "28px",
      "lineHeight": "33px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "28px",
      "lineHeight": "33px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "28px",
      "lineHeight": "33px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "28px",
      "lineHeight": "33px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "headingXL": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "32px",
      "lineHeight": "38px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "32px",
      "lineHeight": "38px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "32px",
      "lineHeight": "38px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "32px",
      "lineHeight": "38px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "32px",
      "lineHeight": "38px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "displayS": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "48px",
      "lineHeight": "56px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "48px",
      "lineHeight": "56px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "48px",
      "lineHeight": "56px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "48px",
      "lineHeight": "56px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "48px",
      "lineHeight": "56px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "displayM": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "60px",
      "lineHeight": "72px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "60px",
      "lineHeight": "72px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "60px",
      "lineHeight": "72px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "60px",
      "lineHeight": "72px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "60px",
      "lineHeight": "72px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  },
  "displayL": {
    "light": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "72px",
      "lineHeight": "86px",
      "letterSpacing": "1px",
      "fontWeight": 300
    },
    "regular": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "72px",
      "lineHeight": "86px",
      "letterSpacing": "1px",
      "fontWeight": 400
    },
    "medium": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "72px",
      "lineHeight": "86px",
      "letterSpacing": "1px",
      "fontWeight": 500
    },
    "semibold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "72px",
      "lineHeight": "86px",
      "letterSpacing": "1px",
      "fontWeight": 600
    },
    "bold": {
      "fontFamily": "{primitive.Elevance Sans}",
      "fontSize": "72px",
      "lineHeight": "86px",
      "letterSpacing": "1px",
      "fontWeight": 700
    }
  }
} as const;

export type TypographyKey = keyof typeof typography;
