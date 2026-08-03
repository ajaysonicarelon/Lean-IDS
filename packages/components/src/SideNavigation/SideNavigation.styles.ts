import styled from 'styled-components';
import { SideNavigationState } from './SideNavigation.types';

interface StyledSideNavigationProps {
  $state: SideNavigationState;
}

export const StyledSideNavigation = styled.nav<StyledSideNavigationProps>`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ $state }) => $state === 'collapsed' ? 'center' : 'flex-start'};
  width: ${({ $state }) => $state === 'collapsed' ? '60px' : '14.75rem'}; /* 60px : 236px - No spacing token for 60px */
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({ theme }) => theme.colors.palette.primary[800]};
  padding: ${({ $state, theme }) => `${theme.spacing[4]} ${$state === 'collapsed' ? theme.spacing[1] : theme.spacing[2]}`};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
  z-index: 101; /* Above TopHeader (100) so sidebar and toggle button appear on top */
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[11]}; /* 46px */
  width: 100%;
  flex: 1;
  overflow: visible; /* No overflow here - logo and user profile stay fixed */
  min-height: 0; /* Important for flex children to scroll properly */
`;

export const ScrollableMenuArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[11]}; /* 46px */
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0; /* Important for flex scrolling */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing[1]}; /* 6px */
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[20] || '0.2'});
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[30] || '0.3'});
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[20] || '0.2'}) transparent;
`;

interface BrandContainerProps {
  $state: SideNavigationState;
}

export const BrandContainer = styled.div<BrandContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $state }) => $state === 'collapsed' ? 'center' : 'space-between'};
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[7]};
  width: 100%;
  flex-shrink: 0;
  position: relative;
  
  /* Show pin button on hover */
  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`;

export const NavigationGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`;

// ❌ REMOVED - Use Typography component instead
// GroupTitle should use: <Typography variant="caption" weight="medium" style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItemWrapper = styled.div`
  width: 100%; /* Critical for text truncation to work */
`;

export const UserProfileContainer = styled.div<{ $state: SideNavigationState }>`
  display: flex;
  align-items: ${({ $state }) => $state === 'collapsed' ? 'center' : 'flex-start'};
  justify-content: ${({ $state }) => $state === 'collapsed' ? 'center' : 'flex-start'};
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ $state, theme }) => $state === 'collapsed' ? '0' : `0 ${theme.spacing[7]}`};
  width: 100%;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`;

// ❌ REMOVED - Use Typography component instead
// UserName should use: <Typography variant="body" weight="semibold">

// ❌ REMOVED - Use Typography component instead
// UserSubtitle should use: <Typography variant="caption" style={{ fontFamily: 'Roboto Mono', letterSpacing: '1.5px' }}>

export const Divider = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.borderWidth[1]};
  background-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[10] || '0.1'});
  margin: ${({ theme }) => theme.spacing[3]} 0;
`;

interface PinButtonProps {
  $isPinned: boolean;
  $state: SideNavigationState;
}

export const PinButton = styled.button<PinButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[8]}; /* 32px */
  height: ${({ theme }) => theme.spacing[8]};
  min-width: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ $isPinned, theme }) => $isPinned ? `rgba(255, 255, 255, ${(theme as any).opacity?.[15] || '0.15'})` : 'transparent'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme }) => theme.colors.palette.neutral[50]};
  cursor: pointer;
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 0.2s ease'};
  padding: 0;
  flex-shrink: 0;
  
  /* Hidden by default, shown on hover or when pinned */
  opacity: ${({ $isPinned }) => $isPinned ? '1' : '0'};
  visibility: ${({ $isPinned }) => $isPinned ? 'visible' : 'hidden'};
  
  &:hover {
    background-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[10] || '0.1'});
  }
  
  &:active {
    background-color: rgba(255, 255, 255, ${({ theme }) => (theme as any).opacity?.[20] || '0.2'});
  }
  
  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: ${({ theme }) => theme.spacing[1]};
  }
  
  svg {
    width: ${({ theme }) => theme.spacing[4]}; /* 18px - closest to spacing[4]=16px */
    height: ${({ theme }) => theme.spacing[4]};
    flex-shrink: 0;
  }
`;

interface ToggleButtonProps {
  $position: 'top' | 'bottom';
  $offset: number;
  $size: 'small' | 'large';
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({ $position, $offset, $size }) => {
    const buttonSize = $size === 'small' ? 24 : 32;
    const halfSize = buttonSize / 2;
    
    if ($position === 'top') {
      // Align with brand logo (logo is at ~16px top padding + logo height/2)
      // Default offset is calculated to center with logo
      return `
        top: ${$offset}px;
        right: -${halfSize}px; /* Half outside */
      `;
    } else {
      return `
        bottom: ${$offset}px;
        right: -${halfSize}px; /* Half outside */
      `;
    }
  }}
  
  /* Size variants - small: 24px, large: 32px */
  width: ${({ $size }) => $size === 'small' ? '24px' : '32px'};
  height: ${({ $size }) => $size === 'small' ? '24px' : '32px'};
  
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]}; /* White background */
  border: 2px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 102;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
    border-color: ${({ theme }) => theme.colors.palette.primary[600]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: ${({ $size }) => $size === 'small' ? '16px' : '20px'};
    height: ${({ $size }) => $size === 'small' ? '16px' : '20px'};
    color: ${({ theme }) => theme.colors.palette.primary[600]}; /* Primary color icon */
    flex-shrink: 0;
  }
`;
