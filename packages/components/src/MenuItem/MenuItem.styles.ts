import styled, { css } from 'styled-components';
import { MenuItemBorder, MenuItemMode, MenuItemState } from './MenuItem.types';

interface StyledMenuItemProps {
  $border: MenuItemBorder;
  $mode: MenuItemMode;
  $state: MenuItemState;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $border, $state, $mode, theme }) => {
    // Base padding based on border type
    const basePadding = $border === 'left' 
      ? `padding: ${theme.spacing[7]};`
      : `padding: ${theme.spacing[4]} ${theme.spacing[5]}; justify-content: center;`;

    // Inactive state
    if ($state === 'inactive') {
      return css`
        ${basePadding}
        background-color: transparent;
        
        &:hover {
          background-color: ${$mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(199, 199, 199, 0.05)'};
        }
      `;
    }

    // Active state
    const borderColor = $mode === 'dark' 
      ? theme.colors.palette.neutral[50]
      : theme.colors.palette.neutral[900];
    
    const backgroundColor = $mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(199, 199, 199, 0.1)';

    const borderStyle = $border === 'left'
      ? `border-left: 3px solid ${borderColor};`
      : `border-bottom: 3px solid ${borderColor};`;

    return css`
      ${basePadding}
      background-color: ${backgroundColor};
      ${borderStyle}
    `;
  }}
`;

interface IconWrapperProps {
  $mode: MenuItemMode;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $mode, theme }) => {
    // Color based on mode - neutral-50 for dark, neutral-900 for light
    const color = $mode === 'dark'
      ? theme.colors.palette.neutral[50]
      : theme.colors.palette.neutral[900];
    
    return css`
      color: ${color};
      
      svg {
        color: ${color};
      }
    `;
  }}
`;

interface MenuItemLabelProps {
  $border: MenuItemBorder;
  $state: MenuItemState;
  $mode: MenuItemMode;
}

export const MenuItemLabel = styled.div<MenuItemLabelProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;

  ${({ $border, $state, $mode, theme }) => {
    const isActive = $state === 'active';
    const isDark = $mode === 'dark';
    const isLeft = $border === 'left';

    // Font size based on border type
    const fontSize = isLeft 
      ? theme.fontSizes.body 
      : theme.fontSizes.paragraph;
    
    const lineHeight = isLeft
      ? theme.lineHeights.body
      : theme.lineHeights.paragraph;

    // Font weight based on state
    const fontWeight = isActive 
      ? theme.fontWeights.semibold 
      : theme.fontWeights.regular;

    // Color based on mode
    const color = isDark
      ? theme.colors.palette.neutral[50]
      : theme.colors.palette.neutral[900];

    return css`
      font-family: ${theme.fonts.primary};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
      color: ${color};
    `;
  }}
`;

interface NotificationIndicatorProps {
  $mode: MenuItemMode;
  $border: MenuItemBorder;
}

export const NotificationIndicator = styled.div<NotificationIndicatorProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.error[500]};
  
  ${({ $border }) => {
    // For top header (horizontal), position above the text
    if ($border === 'bottom') {
      return css`
        right: 8px;
        top: 8px;
      `;
    }
    // For side nav (vertical), position on the right side
    return css`
      right: 16px;
      top: 15px;
    `;
  }}
`;

export const MenuItemContainer = styled.div`
  position: relative;
  width: 100%;
`;
