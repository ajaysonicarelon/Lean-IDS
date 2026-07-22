/**
 * Button Component
 * 
 * An interactive control that triggers actions. Combines text and iconography
 * for clear communication with multiple interactive states.
 * 
 * Features:
 * - Five sizes (xsmall, small, medium, large, xlarge)
 * - Three variants (primary, secondary, tertiary)
 * - Four button types (default, safe, warning, alert)
 * - Optional leading and trailing icons
 * - Multiple states (default, hover, focus, active, disabled, loading, error)
 * - Polymorphic 'as' prop for rendering as different elements
 * - Full accessibility support with ARIA attributes
 * - Comprehensive event callbacks
 */

import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import {
  StyledButton,
  IconWrapper,
  ButtonLabel,
  LoadingSpinner,
  LoadingOverlay,
} from './Button.styles';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as,
      size = 'medium',
      variant = 'primary',
      buttonType = 'default',
      disabled = false,
      isLoading = false,
      isInvalid = false,
      isEmpty = false,
      leadingIcon,
      trailingIcon,
      loadingIndicator,
      showLabel = true,
      type = 'button',
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      className,
      style,
      iconClassName,
      labelClassName,
      fullWidth = false,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
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
      
      if (!showLabel && !ariaLabel && !ariaLabelledby) {
        console.warn(
          '[Lean IDS Button] Warning: Icon-only buttons require "aria-label" or "aria-labelledby" for accessibility.\n' +
          'Example: <Button leadingIcon={<Icon />} showLabel={false} aria-label="Close">Close</Button>\n' +
          'See: Button component documentation'
        );
      }
    }
    
    const isDisabled = disabled || isLoading;
    const Component = as || 'button';
    
    return (
      <StyledButton
        as={Component}
        ref={ref}
        $size={size}
        $buttonType={buttonType}
        $variant={variant}
        $disabled={isDisabled}
        $isLoading={isLoading}
        $isInvalid={isInvalid}
        $isEmpty={isEmpty}
        $fullWidth={fullWidth}
        disabled={isDisabled}
        type={type}
        onClick={isDisabled ? undefined : onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        style={style}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        aria-busy={isLoading}
        aria-invalid={isInvalid}
        aria-disabled={isDisabled}
        {...restProps}
      >
        {isLoading && (
          <LoadingOverlay>
            {loadingIndicator || <LoadingSpinner $size={size} />}
          </LoadingOverlay>
        )}
        
        {leadingIcon && (
          <IconWrapper $size={size} className={iconClassName}>
            {leadingIcon}
          </IconWrapper>
        )}
        
        {showLabel && (
          <ButtonLabel className={labelClassName}>{children}</ButtonLabel>
        )}
        
        {trailingIcon && (
          <IconWrapper $size={size} className={iconClassName}>
            {trailingIcon}
          </IconWrapper>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
