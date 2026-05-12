import styled from 'styled-components';
import { BrandVariant } from './Brand.types';

interface StyledBrandProps {
  $variant: BrandVariant;
}

export const StyledBrand = styled.div<StyledBrandProps>`
  position: relative;
  height: 26px;
  width: ${({ $variant }) => $variant === 'logo' ? '120px' : '25.923px'};
  flex-shrink: 0;
`;

export const BrandImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// For the symbol variant, we'll use SVG components
export const SymbolContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SymbolPart = styled.div<{ $position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' }>`
  position: absolute;
  
  ${({ $position }) => {
    switch ($position) {
      case 'topLeft':
        return `
          top: 0;
          left: 0;
          right: 51.75%;
          bottom: 35.82%;
        `;
      case 'topRight':
        return `
          top: 0;
          right: 0;
          left: 35.82%;
          bottom: 51.74%;
        `;
      case 'bottomLeft':
        return `
          bottom: 0;
          left: 0;
          right: 35.82%;
          top: 51.74%;
        `;
      case 'bottomRight':
        return `
          bottom: 0;
          right: 0;
          left: 51.75%;
          top: 35.82%;
        `;
    }
  }}
`;
