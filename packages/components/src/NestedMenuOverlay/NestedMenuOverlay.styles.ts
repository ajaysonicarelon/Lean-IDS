import styled from 'styled-components';

interface OverlayContainerProps {
  $mode?: 'dark' | 'light';
  $disabled?: boolean;
}

export const OverlayContainer = styled.div<OverlayContainerProps>`
  position: fixed;
  z-index: ${({ theme }) => (theme as any).zIndex?.overlay || 1000};
  
  /* Add invisible left padding to create safe zone for mouse movement */
  padding-left: ${({ theme }) => theme.spacing[2]};
  margin-left: calc(-1 * ${({ theme }) => theme.spacing[2]}); /* Offset to maintain visual position */
  
  /* Inner container styling */
  background-color: ${({ $mode, theme }) => 
    $mode === 'light' 
      ? theme.colors.palette.neutral[50]
      : theme.colors.palette.primary[700]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => (theme as any).shadows?.lg || '2px 2px 10.5px 0px rgba(70, 62, 93, 0.55)'};
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-right: ${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 237px;
  overflow: hidden;
  opacity: ${({ $disabled, theme }) => ($disabled ? (theme as any).opacity?.[40] || 0.4 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

interface NestedMenuItemProps {
  $isActive: boolean;
  $hasChildren: boolean;
  $mode?: 'dark' | 'light';
  $disabled?: boolean;
}

export const NestedMenuItemContainer = styled.div<NestedMenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[7]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: ${({ theme }) => (theme as any).transitions?.default || 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  position: relative;
  opacity: ${({ $disabled, theme }) => ($disabled ? (theme as any).opacity?.[40] || 0.4 : 1)};
  
  background-color: ${({ $isActive, $mode, theme }) => {
    if (!$isActive) return 'transparent';
    const opacity = (theme as any).opacity?.[10] || '0.1';
    return $mode === 'light'
      ? `rgba(0, 0, 0, ${opacity})`
      : `rgba(255, 255, 255, ${opacity})`;
  }};

  &:hover {
    background-color: ${({ $mode, theme }) => {
      const opacity = (theme as any).opacity?.[10] || '0.1';
      return $mode === 'light'
        ? `rgba(0, 0, 0, ${opacity})`
        : `rgba(255, 255, 255, ${opacity})`;
    }};
  }
  
  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: ${({ theme }) => theme.spacing[1]};
  }
`;

interface ArrowIconProps {
  $mode?: 'dark' | 'light';
}

export const ArrowIcon = styled.div<ArrowIconProps>`
  width: ${({ theme }) => theme.spacing[6]};
  height: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $mode, theme }) => 
    $mode === 'light'
      ? theme.colors.palette.neutral[900]
      : theme.colors.palette.neutral[50]};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  
  svg {
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
    color: currentColor;
  }
`;
