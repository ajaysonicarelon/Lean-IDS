/**
 * Chip Component
 * 
 * A compact, enterprise-grade element that represents an input, attribute, or action.
 * 
 * Features:
 * - Three sizes (small, medium, large)
 * - Two variants (filled, outlined)
 * - Five types (default, success, warning, error, neutral)
 * - Eight states (default, hover, focus, active, disabled, loading, error, empty)
 * - Optional leading and trailing icons with render slots
 * - Polymorphic 'as' prop for custom element types
 * - Full keyboard navigation and ARIA support
 * - forwardRef support for DOM access
 * - Multiple customization points (className overrides, style props)
 */

import React, { forwardRef, KeyboardEvent, MouseEvent } from 'react';
import { ChipProps } from './Chip.types';
import {
  ChipContainer,
  ChipLabel,
  IconWrapper,
  TrailingIconWrapper,
  LoadingSpinner,
  ErrorIcon,
} from './Chip.styles';

// Default close icon
const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Loading spinner icon
const SpinnerIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 20" />
  </svg>
);

// Error icon
const ErrorIconSVG = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm1 10H7V9h2v2zm0-3H7V5h2v3z" />
  </svg>
);

export const Chip = forwardRef<HTMLElement, ChipProps>(
  (
    {
      label,
      size = 'small',
      variant = 'filled',
      type = 'default',
      as,
      leadingIcon,
      trailingIcon,
      renderLeadingIcon,
      renderTrailingIcon,
      renderLabel,
      onClick,
      onTrailingIconClick,
      onRemove,
      disabled = false,
      isLoading = false,
      isInvalid = false,
      isActive = false,
      errorMessage,
      loadingText = 'Loading',
      className,
      labelClassName,
      leadingIconClassName,
      trailingIconClassName,
      style,
      width,
      maxWidth,
      minWidth,
      tabIndex,
      role,
      'aria-label': ariaLabel,
      ...restProps
    },
    ref
  ) => {
    const Container = as || 'div';
    const isClickable = !!onClick && !disabled && !isLoading;

    const handleTrailingIconClick = (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (!disabled && !isLoading && onTrailingIconClick) {
        onTrailingIconClick(e);
      }
      // Legacy support
      if (!disabled && !isLoading && onRemove) {
        onRemove();
      }
    };

    const handleChipClick = (e: MouseEvent<HTMLElement>) => {
      if (!disabled && !isLoading && onClick) {
        onClick(e);
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
      // Enter or Space to activate
      if ((e.key === 'Enter' || e.key === ' ') && isClickable) {
        e.preventDefault();
        onClick?.(e as unknown as MouseEvent<HTMLElement>);
      }
      // Escape to blur
      if (e.key === 'Escape') {
        (e.currentTarget as HTMLElement).blur();
      }
    };

    const handleTrailingIconKeyDown = (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled && !isLoading && onTrailingIconClick) {
          onTrailingIconClick(e as unknown as MouseEvent<HTMLElement>);
        }
        if (!disabled && !isLoading && onRemove) {
          onRemove();
        }
      }
    };

    // Render leading icon with priority: renderLeadingIcon > isLoading > isInvalid > leadingIcon
    const renderLeading = () => {
      if (renderLeadingIcon) {
        return (
          <IconWrapper className={leadingIconClassName}>
            {renderLeadingIcon({ size, type })}
          </IconWrapper>
        );
      }
      if (isLoading) {
        return (
          <LoadingSpinner className={leadingIconClassName} aria-label={loadingText}>
            <SpinnerIcon />
          </LoadingSpinner>
        );
      }
      if (isInvalid && errorMessage) {
        return (
          <ErrorIcon className={leadingIconClassName} aria-label="Error">
            <ErrorIconSVG />
          </ErrorIcon>
        );
      }
      if (leadingIcon) {
        return <IconWrapper className={leadingIconClassName}>{leadingIcon}</IconWrapper>;
      }
      return null;
    };

    // Render trailing icon
    const renderTrailing = () => {
      if (renderTrailingIcon) {
        return (
          <TrailingIconWrapper
            className={trailingIconClassName}
            $clickable={!!onTrailingIconClick || !!onRemove}
            onClick={handleTrailingIconClick}
            onKeyDown={handleTrailingIconKeyDown}
            tabIndex={onTrailingIconClick || onRemove ? 0 : undefined}
            role={onTrailingIconClick || onRemove ? 'button' : undefined}
            aria-label={onTrailingIconClick || onRemove ? 'Remove' : undefined}
          >
            {renderTrailingIcon({ size, type })}
          </TrailingIconWrapper>
        );
      }
      if (trailingIcon) {
        return (
          <TrailingIconWrapper
            className={trailingIconClassName}
            $clickable={!!onTrailingIconClick || !!onRemove}
            onClick={handleTrailingIconClick}
            onKeyDown={handleTrailingIconKeyDown}
            tabIndex={onTrailingIconClick || onRemove ? 0 : undefined}
            role={onTrailingIconClick || onRemove ? 'button' : undefined}
            aria-label={onTrailingIconClick || onRemove ? 'Remove' : undefined}
          >
            {trailingIcon}
          </TrailingIconWrapper>
        );
      }
      return null;
    };

    // Render label
    const renderLabelContent = () => {
      if (renderLabel) {
        return renderLabel(label);
      }
      return label;
    };

    // Determine ARIA attributes
    const getAriaAttributes = () => {
      const attrs: Record<string, string | boolean | undefined> = {
        'aria-label': ariaLabel,
        'aria-disabled': disabled || isLoading,
        'aria-busy': isLoading,
        'aria-invalid': isInvalid,
        'aria-pressed': isActive,
      };
      
      if (errorMessage && isInvalid) {
        attrs['aria-describedby'] = 'chip-error';
      }
      
      return attrs;
    };

    return (
      <ChipContainer
        ref={ref as React.Ref<HTMLDivElement>}
        as={Container}
        $size={size}
        $variant={variant}
        $type={type}
        $disabled={disabled}
        $clickable={isClickable}
        $isLoading={isLoading}
        $isInvalid={isInvalid}
        $isActive={isActive}
        $width={width}
        $maxWidth={maxWidth}
        $minWidth={minWidth}
        onClick={handleChipClick}
        onKeyDown={handleKeyDown}
        className={className}
        style={style}
        tabIndex={isClickable ? (tabIndex ?? 0) : undefined}
        role={role || (isClickable ? 'button' : undefined)}
        {...getAriaAttributes()}
        {...restProps}
      >
        {renderLeading()}
        
        <ChipLabel className={labelClassName}>
          {renderLabelContent()}
        </ChipLabel>
        
        {renderTrailing()}
        
        {/* Hidden error message for screen readers */}
        {isInvalid && errorMessage && (
          <span id="chip-error" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
            {errorMessage}
          </span>
        )}
      </ChipContainer>
    );
  }
);

Chip.displayName = 'Chip';

// Export default icons for convenience
export { CloseIcon, SpinnerIcon, ErrorIconSVG as ErrorIcon };
