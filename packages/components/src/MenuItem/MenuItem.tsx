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
  aligned = 'horizontal',
  border = 'bottom',
  iconM,
  iconS,
  mode = 'dark',
  nestedMenu = false,
  showIcon = true,
  showIndicator = false,
  showLabel = true,
  state = 'inactive',
  type = 'single',
  label = 'Menu Item',
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}) => {
  // Use appropriate icon based on border type
  const icon = border === 'left' ? iconM : iconS;

  return (
    <MenuItemContainer 
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StyledMenuItem
        $aligned={aligned}
        $border={border}
        $mode={mode}
        $state={state}
        $type={type}
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
            $aligned={aligned}
            $border={border}
            $state={state}
            $mode={mode}
          >
            {label}
          </MenuItemLabel>
        )}

        {nestedMenu && type === 'single' && aligned === 'horizontal' && (
          <IconWrapper $mode={mode}>
            {/* Arrow icon for nested menu - only visible in expanded state */}
            {border === 'bottom' ? '▼' : '▶'}
          </IconWrapper>
        )}
      </StyledMenuItem>
      
      {showIndicator && state === 'inactive' && (
        <NotificationIndicator $mode={mode} $border={border} $aligned={aligned} />
      )}
    </MenuItemContainer>
  );
};
