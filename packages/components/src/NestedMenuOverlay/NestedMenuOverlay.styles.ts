import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: fixed;
  z-index: 1000;
  
  /* Add invisible left padding to create safe zone for mouse movement */
  padding-left: 8px;
  margin-left: -8px; /* Offset to maintain visual position */
  
  /* Inner container styling */
  background-color: ${({ theme }) => theme.colors.palette.primary[700]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 2px 2px 10.5px 0px rgba(70, 62, 93, 0.55);
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-right: ${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 237px;
  overflow: hidden;
`;

interface NestedMenuItemProps {
  $isActive: boolean;
  $hasChildren: boolean;
}

export const NestedMenuItemContainer = styled.div<NestedMenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[7]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  
  background-color: ${({ $isActive, theme }) =>
    $isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuItemLabel = styled.div<{ $isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.fontWeights.semibold : theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.palette.neutral[50]};
  white-space: nowrap;
`;

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.palette.neutral[50]};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
