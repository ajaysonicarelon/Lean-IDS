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
    // Runtime prop validation warnings for common mistakes
    if (process.env.NODE_ENV !== 'production') {
      const unknownProps = restProps as any;
      
      if (unknownProps.label !== undefined) {
        console.warn(
          '[Lean IDS Button] Warning: "label" prop is not supported. Use "children" instead.\n' +
          'Example: <Button>Click Me</Button>\n' +
          'See: Button component documentation'
        );
      }
      
      if (unknownProps.icon !== undefined) {
        console.warn(
          '[Lean IDS Button] Warning: "icon" prop is not supported. Use "leadingIcon" or "trailingIcon" instead.\n' +
          'Example: <Button leadingIcon={<Icon name="Add" />}>Add Item</Button>\n' +
          'See: Button component documentation'
        );
      }
    }
    
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
