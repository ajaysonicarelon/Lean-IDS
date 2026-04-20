/**
 * Button Component
 * 
 * An interactive control that triggers actions. Combines text and iconography
 * for clear communication with multiple interactive states.
 * 
 * Features:
 * - Five sizes (xs, small, medium, large, xl)
 * - Three variants (primary, outlined, link)
 * - Optional leading and trailing icons
 * - Multiple states (default, hover, focused, disabled, success, warning, alert)
 * - Full accessibility support
 */

import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import {
  StyledButton,
  IconWrapper,
  ButtonLabel,
} from './Button.styles';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'primary',
      buttonType = 'default',
      disabled = false,
      leadingIcon,
      trailingIcon,
      showLabel = true,
      type = 'button',
      onClick,
      className,
      fullWidth = false,
      ...restProps
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $size={size}
        $buttonType={buttonType}
        $variant={variant}
        $disabled={disabled}
        $fullWidth={fullWidth}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={className}
        {...restProps}
      >
        {leadingIcon && (
          <IconWrapper $size={size}>
            {leadingIcon}
          </IconWrapper>
        )}
        
        {showLabel && (
          <ButtonLabel>{children}</ButtonLabel>
        )}
        
        {trailingIcon && (
          <IconWrapper $size={size}>
            {trailingIcon}
          </IconWrapper>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
