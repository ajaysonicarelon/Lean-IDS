import styled from 'styled-components';

export const StyledTableSubHeader = styled.th<{
  $locked?: boolean; // Deprecated - use $pinned instead
  $pinned?: 'left' | 'right' | 'none';
  $leftOffset?: number;
  $rightOffset?: number;
  $showPinBorder?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[7]};
  background-color: ${({ theme }) => theme.colors.palette.primary[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  transition: box-shadow 0.2s ease;
  
  ${({ $locked, $pinned, $leftOffset, $rightOffset, $showPinBorder, theme }) => {
    // Backward compatibility: locked = true means pinned left
    const pinnedSide = $pinned || ($locked ? 'left' : 'none');
    
    if (pinnedSide === 'left') {
      return `
        position: sticky;
        left: ${$leftOffset || 0}px;
        z-index: 3;
        ${$showPinBorder ? `border-right: 1px solid ${theme.colors.palette.neutral[300]};` : ''}
        
        &.is-stuck {
          box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `;
    }
    
    if (pinnedSide === 'right') {
      return `
        position: sticky;
        right: ${$rightOffset || 0}px;
        z-index: 3;
        ${$showPinBorder ? `border-left: 1px solid ${theme.colors.palette.neutral[300]};` : ''}
        
        &.is-stuck-right {
          box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `;
    }
    
    return 'position: relative; z-index: 1;';
  }}
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[500]};
  }
`;

export const FilterIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
