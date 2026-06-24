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
  width: ${({ $state }) => $state === 'collapsed' ? '60px' : '236px'};
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({ theme }) => theme.colors.palette.primary[800]};
  padding: 16px ${({ $state, theme }) => $state === 'collapsed' ? theme.spacing[1] : theme.spacing[2]};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent content from overflowing horizontally */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
`;

interface BrandContainerProps {
  $state: SideNavigationState;
}

export const BrandContainer = styled.div<BrandContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $state }) => $state === 'collapsed' ? 'center' : 'space-between'};
  gap: 8px;
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

export const GroupTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({ theme }) => theme.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const UserName = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.palette.neutral[50]};
  flex-shrink: 0;
`;

export const UserSubtitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.palette.primary[50]};
  flex-shrink: 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
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
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: ${({ $isPinned }) => $isPinned ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.palette.neutral[50]};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  flex-shrink: 0;
  
  /* Hidden by default, shown on hover or when pinned */
  opacity: ${({ $isPinned }) => $isPinned ? '1' : '0'};
  visibility: ${({ $isPinned }) => $isPinned ? 'visible' : 'hidden'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    width: 18px;
    height: 18px;
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
