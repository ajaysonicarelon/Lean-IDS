import styled from 'styled-components';
import { SideNavigationState } from './SideNavigation.types';

interface StyledSideNavigationProps {
  $state: SideNavigationState;
}

export const StyledSideNavigation = styled.nav<StyledSideNavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ $state }) => $state === 'collapsed' ? 'center' : 'flex-start'};
  width: ${({ $state }) => $state === 'collapsed' ? '60px' : '236px'};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.palette.primary[800]};
  padding: 39px ${({ $state, theme }) => $state === 'collapsed' ? theme.spacing[1] : theme.spacing[2]};
  overflow: hidden;
  transition: width 0.3s ease, padding 0.3s ease;
  z-index: 99;
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  
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
