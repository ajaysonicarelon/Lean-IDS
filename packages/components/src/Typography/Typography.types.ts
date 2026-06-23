export type TypographyVariant =
  | 'displayL'
  | 'displayM'
  | 'displayS'
  | 'headingXL'
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'body'
  | 'paragraph'
  | 'caption'
  | 'code';

export type TypographyWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyCodeSize = '10' | '12' | '14';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'code';

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  codeSize?: TypographyCodeSize;
  as?: TypographyElement;
  align?: TypographyAlign;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
