/**
 * Chip Component
 * 
 * A compact element that represents an input, attribute, or action.
 * 
 * Features:
 * - Three sizes (small, medium, large)
 * - Two variants (filled, outlined)
 * - Five types (default, success, warning, error, neutral)
 * - Optional leading and trailing icons
 * - Clickable with hover states
 * - Disabled state
 */

import React from 'react';
import { ChipProps } from './Chip.types';
import {
  ChipContainer,
  ChipLabel,
  IconWrapper,
  TrailingIconWrapper,
} from './Chip.styles';

// Default close icon
const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Chip: React.FC<ChipProps> = ({
  label,
  size = 'small',
  variant = 'filled',
  type = 'default',
  leadingIcon,
  trailingIcon,
  onClick,
  onTrailingIconClick,
  disabled = false,
  className,
}) => {
  const handleTrailingIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onTrailingIconClick) {
      onTrailingIconClick(e);
    }
  };

  const handleChipClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <ChipContainer
      $size={size}
      $variant={variant}
      $type={type}
      $disabled={disabled}
      $clickable={!!onClick}
      onClick={handleChipClick}
      className={className}
    >
      {leadingIcon && <IconWrapper>{leadingIcon}</IconWrapper>}
      
      <ChipLabel>{label}</ChipLabel>
      
      {trailingIcon && (
        <TrailingIconWrapper
          $clickable={!!onTrailingIconClick}
          onClick={handleTrailingIconClick}
        >
          {trailingIcon}
        </TrailingIconWrapper>
      )}
    </ChipContainer>
  );
};

Chip.displayName = 'Chip';

// Export default close icon for convenience
export { CloseIcon };
