import styled, { css } from 'styled-components';
import { MenuItemBorder, MenuItemMode, MenuItemState, MenuItemAligned, MenuItemType } from './MenuItem.types';

interface StyledMenuItemProps {
  $aligned: MenuItemAligned;
  $border: MenuItemBorder;
  $mode: MenuItemMode;
  $state: MenuItemState;
  $type: MenuItemType;
  $label?: string; // Label text to determine alignment
  $disabled?: boolean;
  $isLoading?: boolean;
  $isInvalid?: boolean;
}

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  display: flex;
  align-items: center; /* Vertically center icon and text */
  gap: ${({ theme }) => theme.spacing[4]};
  width: 100%; /* Constrain width for text truncation */
  overflow: hidden;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  position: relative;
  opacity: ${({ $disabled, theme }) => ($disabled ? (theme as any).opacity?.[40] || 0.4 : 1)};

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
            ? `rgba(255, 255, 255, ${(theme as any).opacity?.[5] || '0.05'})` 
            : `rgba(199, 199, 199, ${(theme as any).opacity?.[5] || '0.05'})`};
          ${borderRadius}
        }
        
        &:focus-visible {
          outline: ${theme.borderWidth[2]} solid ${theme.colors.semantic.focus.indicator};
          outline-offset: ${theme.spacing[1]};
          ${borderRadius}
        }
      `;
    }

    // Active state
    const borderColor = $mode === 'dark' 
      ? theme.colors.palette.neutral[50]
      : theme.colors.palette.neutral[900];
    
    const opacity = (theme as any).opacity?.[10] || '0.1';
    const backgroundColor = $mode === 'dark'
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(199, 199, 199, ${opacity})`;

    const borderStyle = $border === 'left'
      ? `border-left: ${theme.borderWidth[2]} solid ${borderColor};`
      : `border-bottom: ${theme.borderWidth[2]} solid ${borderColor};`;
    
    const focusStyle = `
      &:focus-visible {
        outline: ${theme.borderWidth[2]} solid ${theme.colors.semantic.focus.indicator};
        outline-offset: ${theme.spacing[1]};
      }
    `;

    return css`
      ${flexDirection}
      ${basePadding}
      ${borderRadius}
      background-color: ${backgroundColor};
      ${borderStyle}
      ${focusStyle}
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
  $label?: string; // Label text to determine alignment based on length
}

export const MenuItemLabel = styled.div<MenuItemLabelProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0; /* Important for text truncation to work */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* Dynamic text alignment: center for short labels (≤7 chars), left for longer labels */
  text-align: ${({ $aligned, $label }) => {
    const isVertical = $aligned === 'vertical';
    if (!isVertical) return 'left'; // Horizontal always left-aligned
    
    const labelLength = $label?.length || 0;
    return labelLength > 7 ? 'left' : 'center';
  }};

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
  width: ${({ theme }) => theme.spacing[2]};
  height: ${({ theme }) => theme.spacing[2]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.error[500]};
  
  ${({ $border, $aligned, theme }) => {
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
        right: ${theme.spacing[2]};
        top: ${theme.spacing[2]};
      `;
    }
    // For side nav horizontal (expanded), position on the right side
    return css`
      right: ${theme.spacing[4]};
      top: ${theme.spacing[3]};
    `;
  }}
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
    color: currentColor;
  }
`;

interface ChildrenArrowProps {
  $mode: MenuItemMode;
}

export const ChildrenArrow = styled.div<ChildrenArrowProps>`
  width: ${({ theme }) => theme.spacing[6]};
  height: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;
  color: ${({ $mode, theme }) => 
    $mode === 'dark' ? '#FFFFFF' : '#1A1A1A'};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MenuItemContainer = styled.div`
  position: relative;
  width: 100%;
`;
