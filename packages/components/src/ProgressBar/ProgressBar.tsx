/**
 * ProgressBar Component
 * Enterprise-grade progress indicator with full accessibility support
 * 
 * Features:
 * - 5 size variants (xsmall to xlarge)
 * - 4 type variants (default, success, warning, alert)
 * - Optional label and percentage display
 * - Loading/indeterminate state
 * - Error state with message
 * - Full keyboard accessibility
 * - forwardRef support
 * - Polymorphic 'as' prop
 * - Multiple customization slots
 */

import { forwardRef, useEffect, useRef } from 'react';
import { ProgressBarProps } from './ProgressBar.types';
import {
  ProgressBarContainer,
  LabelContainer,
  LabelText,
  PercentageText,
  ProgressTrack,
  ProgressFill,
  ErrorMessage,
} from './ProgressBar.styles';
import { Typography } from '../Typography';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      as,
      size = 'medium',
      type = 'default',
      label,
      showPercentage,
      formatPercentage = (val) => `${Math.round(val)}%`,
      isLoading = false,
      disabled = false,
      isInvalid = false,
      errorMessage,
      customLabel,
      onChange,
      onComplete,
      className,
      style,
      trackClassName,
      fillClassName,
      labelClassName,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      min = 0,
      max = 100,
      ...restProps
    },
    ref
  ) => {
    // Normalize value to 0-100 range
    const normalizedValue = Math.min(Math.max(value, min), max);
    const percentage = ((normalizedValue - min) / (max - min)) * 100;

    // Track previous value for onComplete callback
    const prevValueRef = useRef(percentage);

    // Determine if we should show percentage by default
    const shouldShowPercentage =
      showPercentage !== undefined
        ? showPercentage
        : ['medium', 'large', 'xlarge'].includes(size);

    // Determine if we should show label section
    const shouldShowLabel = label || shouldShowPercentage || customLabel;

    // Call onChange when value changes
    useEffect(() => {
      if (onChange && percentage !== prevValueRef.current) {
        onChange(percentage);
      }
      prevValueRef.current = percentage;
    }, [percentage, onChange]);

    // Call onComplete when reaching 100%
    useEffect(() => {
      if (onComplete && percentage >= 100 && prevValueRef.current < 100) {
        onComplete();
      }
    }, [percentage, onComplete]);

    // Render custom label if provided
    const renderLabel = () => {
      if (customLabel) {
        return typeof customLabel === 'function'
          ? customLabel({ value: percentage, label })
          : customLabel;
      }

      return (
        <LabelContainer className={labelClassName}>
          {label && (
            <LabelText>
              <Typography variant="caption" weight="medium" as="span">
                {label}
              </Typography>
            </LabelText>
          )}
          {shouldShowPercentage && (
            <PercentageText>{formatPercentage(percentage)}</PercentageText>
          )}
        </LabelContainer>
      );
    };

    // Container element (polymorphic)
    const Container = as || 'div';

    return (
      <ProgressBarContainer
        as={Container}
        ref={ref}
        $size={size}
        $type={type}
        $disabled={disabled}
        $isInvalid={isInvalid}
        $isLoading={isLoading}
        className={className}
        style={style}
        {...restProps}
      >
        {/* Label section */}
        {shouldShowLabel && renderLabel()}

        {/* Progress bar track and fill */}
        <ProgressTrack
          $size={size}
          $type={type}
          $disabled={disabled}
          $isInvalid={isInvalid}
          $isLoading={isLoading}
          className={trackClassName}
          role="progressbar"
          aria-label={ariaLabel || label || 'Progress'}
          aria-valuenow={isLoading ? undefined : normalizedValue}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-describedby={ariaDescribedby}
          aria-busy={isLoading}
          aria-invalid={isInvalid}
        >
          <ProgressFill
            $size={size}
            $type={type}
            $value={percentage}
            $disabled={disabled}
            $isInvalid={isInvalid}
            $isLoading={isLoading}
            className={fillClassName}
          />
        </ProgressTrack>

        {/* Error message */}
        {isInvalid && errorMessage && (
          <ErrorMessage role="alert">
            <Typography variant="caption" as="span" color="error">
              {errorMessage}
            </Typography>
          </ErrorMessage>
        )}
      </ProgressBarContainer>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
