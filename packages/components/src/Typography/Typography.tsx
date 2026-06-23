import React from 'react';
import { TypographyProps } from './Typography.types';
import { StyledTypography } from './Typography.styles';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  weight = 'regular',
  codeSize = '14',
  as,
  align,
  color,
  className,
  style,
  children,
}) => {
  const getDefaultElement = (): React.ElementType => {
    if (as) return as;
    
    switch (variant) {
      case 'displayL':
      case 'displayM':
      case 'displayS':
        return 'h1';
      case 'headingXL':
        return 'h1';
      case 'headingL':
        return 'h2';
      case 'headingM':
        return 'h3';
      case 'headingS':
        return 'h4';
      case 'code':
        return 'code';
      case 'paragraph':
      case 'body':
        return 'p';
      case 'caption':
        return 'span';
      default:
        return 'p';
    }
  };

  return (
    <StyledTypography
      as={getDefaultElement()}
      $variant={variant}
      $weight={weight}
      $codeSize={variant === 'code' ? codeSize : undefined}
      $align={align}
      $color={color}
      className={className}
      style={style}
    >
      {children}
    </StyledTypography>
  );
};
