import styled, { css } from 'styled-components';
import { MenuItemBorder, MenuItemMode, MenuItemState, MenuItemAligned, MenuItemType } from './MenuItem.types';

interface StyledMenuItemProps {
  $aligned: MenuItemAligned;
  $border: MenuItemBorder;
  $mode: MenuItemMode;
  $state: MenuItemState;
  $type: MenuItemType;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  ${({ $aligned, $border, $state, $mode, theme }) => {
    const isVertical = $aligned === 'vertical';
    
    // Flex direction based on alignment
    const flexDirection = isVertical ? 'flex-direction: column;' : '';
    
    // Base padding based on border type and alignment
    const basePadding = isVertical
      ? `padding: ${theme.spacing[2]} ${theme.spacing[2]};`
      : $border === 'left' 
        ? `padding: ${theme.spacing[7]};`
        : `padding: ${theme.spacing[4]} ${theme.spacing[5]}; justify-content: center;`;

    // Border radius
    const borderRadius = `border-radius: ${theme.borderRadius.sm};`;

    // Inactive state
    if ($state === 'inactive') {
      return css`
        ${flexDirection}
        ${basePadding}
        background-color: transparent;
        
        &:hover {
          background-color: ${$mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(199, 199, 199, 0.05)'};
          ${borderRadius}
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
      ${flexDirection}
      ${basePadding}
      ${borderRadius}
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
  $aligned: MenuItemAligned;
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

  ${({ $aligned, $border, $state, $mode, theme }) => {
    const isActive = $state === 'active';
    const isDark = $mode === 'dark';
    const isLeft = $border === 'left';
    const isVertical = $aligned === 'vertical';

    // Font size based on alignment and border type
    // Vertical: 12px (caption), Horizontal with left border: 16px (body), Horizontal with bottom border: 14px (paragraph)
    const fontSize = isVertical 
      ? theme.fontSizes[12]
      : isLeft 
        ? theme.fontSizes[16]
        : theme.fontSizes[14];
    
    const lineHeight = isVertical
      ? theme.lineHeights[14]
      : isLeft
        ? theme.lineHeights[19]
        : theme.lineHeights[16];

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
  $aligned: MenuItemAligned;
}

export const NotificationIndicator = styled.div<NotificationIndicatorProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.error[500]};
  
  ${({ $border, $aligned }) => {
    // For vertical alignment (collapsed state), position at top-right
    if ($aligned === 'vertical') {
      return css`
        right: 0;
        top: 0;
      `;
    }
    // For top header (horizontal), position above the text
    if ($border === 'bottom') {
      return css`
        right: 8px;
        top: 8px;
      `;
    }
    // For side nav horizontal (expanded), position on the right side
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
