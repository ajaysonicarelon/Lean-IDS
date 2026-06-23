import styled from 'styled-components';
import { typography } from '@ajaysoni7832/lean-ids-tokens';
import { TypographyVariant, TypographyWeight, TypographyAlign, TypographyCodeSize } from './Typography.types';

interface StyledTypographyProps {
  $variant: TypographyVariant;
  $weight: TypographyWeight;
  $codeSize?: TypographyCodeSize;
  $align?: TypographyAlign;
  $color?: string;
}

const getTypographyStyles = (variant: TypographyVariant, weight: TypographyWeight, codeSize?: TypographyCodeSize) => {
  if (variant === 'code' && codeSize) {
    const codeKey = `${weight}-${codeSize}` as keyof typeof typography.code;
    return typography.code[codeKey] || typography.code['regular-14'];
  }
  
  const variantStyles = typography[variant] as Record<string, any>;
  return variantStyles[weight] || variantStyles.regular;
};

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${({ $variant, $weight, $codeSize }) => {
    const styles = getTypographyStyles($variant, $weight, $codeSize);
    return `
      font-family: ${styles.fontFamily.replace('{primitive.Elevance Sans}', '"Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif').replace('{primitive.Roboto Mono}', '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace')};
      font-size: ${styles.fontSize};
      font-weight: ${styles.fontWeight};
      line-height: ${styles.lineHeight};
      letter-spacing: ${styles.letterSpacing};
    `;
  }}
  
  ${({ $align }) => $align && `text-align: ${$align};`}
  ${({ $color }) => $color && `color: ${$color};`}
  
  margin: 0;
  padding: 0;
`;
