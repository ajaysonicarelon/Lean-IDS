/**
 * Brand Component
 * 
 * Displays brand logos (Carelon or Elevance) in two variants:
 * - logo: Full logo with text (120px width)
 * - symbol: Symbol/icon only (26px square)
 * 
 * Supports dark and light modes for each brand.
 * Used in navigation headers and sidebars.
 */

import React from 'react';
import { useTheme } from 'styled-components';
import { BrandProps } from './Brand.types';
import { StyledBrand } from './Brand.styles';

// Import SVG assets
import CarelonLogoDark from './assets/Brand=Carelon Logo, Mode=Dark.svg';
import CarelonLogoLight from './assets/Brand=Carelon Logo, Mode=Light.svg';
import CarelonSymbolDark from './assets/Brand=Carelon Symbol, Mode=Dark.svg';
import CarelonSymbolLight from './assets/Brand=Carelon Symbol, Mode=Light.svg';
import ElevanceLogoDark from './assets/Brand=Elevance Logo, Mode=Dark.svg';
import ElevanceLogoLight from './assets/Brand=Elevance Logo, Mode=Light.svg';
import ElevanceSymbolDark from './assets/Brand=Elevance Symbol, Mode=Dark.svg';
import ElevanceSymbolLight from './assets/Brand=Elevance Symbol, Mode=Light.svg';

export const Brand: React.FC<BrandProps> = ({
  variant = 'logo',
  brand,
  mode = 'dark',
  className,
  alt,
}) => {
  const theme = useTheme();
  
  // Use theme name if brand prop is not provided
  const brandName = brand || (theme.name as 'carelon' | 'elevance') || 'carelon';
  
  // Select the appropriate SVG based on brand, variant, and mode
  // When background is dark, use light logo (and vice versa)
  const getBrandSvg = () => {
    if (brandName === 'carelon') {
      if (variant === 'logo') {
        return mode === 'dark' ? CarelonLogoLight : CarelonLogoDark;
      }
      return mode === 'dark' ? CarelonSymbolLight : CarelonSymbolDark;
    } else {
      // elevance
      if (variant === 'logo') {
        return mode === 'dark' ? ElevanceLogoLight : ElevanceLogoDark;
      }
      return mode === 'dark' ? ElevanceSymbolLight : ElevanceSymbolDark;
    }
  };

  const BrandSvg = getBrandSvg();
  const defaultAlt = alt || `${brandName.charAt(0).toUpperCase() + brandName.slice(1)} ${variant === 'logo' ? 'Logo' : 'Symbol'}`;

  return (
    <StyledBrand
      $variant={variant}
      className={className}
      role="img"
      aria-label={defaultAlt}
    >
      <img src={BrandSvg} alt={defaultAlt} />
    </StyledBrand>
  );
};
