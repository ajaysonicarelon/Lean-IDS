/**
 * MenuItem Component
 * 
 * A navigation menu item that can be used in both horizontal (top header)
 * and vertical (side navigation) layouts.
 * 
 * Features:
 * - Two border orientations (bottom for horizontal, left for vertical)
 * - Two color modes (dark, light)
 * - Active/inactive states
 * - Optional icon and notification indicator
 * - Responsive sizing based on context
 */

import React from 'react';
import { MenuItemProps } from './MenuItem.types';
import {
  MenuItemContainer,
  StyledMenuItem,
  IconWrapper,
  MenuItemLabel,
  NotificationIndicator,
} from './MenuItem.styles';

export const MenuItem: React.FC<MenuItemProps> = ({
  border = 'bottom',
  iconM,
  iconS,
  mode = 'dark',
  showIcon = true,
  showIndicator = false,
  showLabel = true,
  state = 'inactive',
  label = 'Menu Item',
  onClick,
  className,
}) => {
  // Use appropriate icon based on border type
  const icon = border === 'left' ? iconM : iconS;

  return (
    <MenuItemContainer className={className}>
      <StyledMenuItem
        $border={border}
        $mode={mode}
        $state={state}
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-current={state === 'active' ? 'page' : undefined}
      >
        {showIcon && icon && (
          <IconWrapper $mode={mode}>
            {icon}
          </IconWrapper>
        )}
        
        {showLabel && (
          <MenuItemLabel
            $border={border}
            $state={state}
            $mode={mode}
          >
            {label}
          </MenuItemLabel>
        )}
      </StyledMenuItem>
      
      {showIndicator && state === 'inactive' && (
        <NotificationIndicator $mode={mode} $border={border} />
      )}
    </MenuItemContainer>
  );
};
