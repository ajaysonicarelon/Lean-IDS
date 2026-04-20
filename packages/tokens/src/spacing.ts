/**
 * Spacing tokens for Lean IDS
 * Based on Figma design tokens
 */

export const spacing = {
  "1": "4px",
  "2": "6px",
  "3": "8px",
  "4": "10px",
  "5": "12px",
  "6": "14px",
  "7": "16px",
  "8": "20px",
  "9": "22px",
  "10": "24px",
  "11": "26px",
  "12": "30px",
  "13": "34px",
  "14": "38px",
  "15": "42px",
  "16": "46px",
  "17": "50px",
  "18": "54px",
  "19": "58px",
  "20": "62px",
  "21": "70px",
  "22": "78px",
  "23": "86px",
  "24": "94px",
  "25": "102px",
  "26": "110px",
  "27": "118px",
  "28": "126px",
  "29": "134px",
  "30": "142px",
  "31": "150px",
  "32": "158px"
} as const;

// Semantic spacing aliases
export const semanticSpacing = {
  xs: spacing['1'],    // 4px
  sm: spacing['3'],    // 8px
  md: spacing['5'],    // 12px
  lg: spacing['7'],    // 16px
  xl: spacing['10'],   // 20px
  '2xl': spacing['13'], // 24px
  '3xl': spacing['16'], // 28px
} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = typeof spacing[SpacingKey];
export type SemanticSpacingKey = keyof typeof semanticSpacing;
