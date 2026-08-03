/**
 * Badge component
 * 
 * A compact element for labels or status indicators that combines text and iconography
 * for clear communication.
 * 
 * @component
 * @example
 * ```tsx
 * <Badge
 *   label="Active"
 *   type="success"
 *   styleVariant="default"
 *   showLeadingIcon
 * />
 * ```
 */

import React, { forwardRef, useEffect } from 'react';
import { BadgeProps } from './Badge.types';
import { StyledBadge, IconWrapper, LabelText, LoadingSpinner } from './Badge.styles';
import { 
  InfoOutlined, 
  CheckCircleOutlined, 
  WarningAmberOutlined, 
  CancelOutlined,
  Close,
  Autorenew
} from '@mui/icons-material';

const defaultIcons = {
  info: <InfoOutlined sx={{ fontSize: 12 }} />,
  success: <CheckCircleOutlined sx={{ fontSize: 12 }} />,
  warning: <WarningAmberOutlined sx={{ fontSize: 12 }} />,
  error: <CancelOutlined sx={{ fontSize: 12 }} />,
  neutral: <InfoOutlined sx={{ fontSize: 12 }} />,
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      label,
      type = 'info',
      styleVariant = 'default',
      as,
      isLoading = false,
      disabled = false,
      isInvalid = false,
      isEmpty = false,
      interactive = false,
      leadingIcon,
      trailingIcon,
      showLeadingIcon = false,
      showTrailingIcon = false,
      customContent,
      customLeading,
      customTrailing,
      onClick,
      onRemove,
      onMount,
      onUnmount,
      onFocus,
      onBlur,
      onKeyDown,
      className,
      style,
      iconClassName,
      labelClassName,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      role,
      loadingMessage = 'Loading...',
      emptyMessage = 'No content',
      errorMessage,
      ...restProps
    },
    ref
  ) => {
    useEffect(() => {
      onMount?.();
      return () => {
        onUnmount?.();
      };
    }, [onMount, onUnmount]);

    const Container = as || 'span';
    const defaultLeadingIcon = defaultIcons[type];
    const defaultTrailingIcon = <Close sx={{ fontSize: 12 }} />;

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled || isLoading || !interactive) return;
      onClick?.(e);
    };

    const handleRemoveClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled || isLoading) return;
      e.stopPropagation();
      onRemove?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (disabled || isLoading) return;
      if (interactive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.(e as any);
      }
      onKeyDown?.(e);
    };

    const renderContent = () => {
      if (isEmpty) {
        return <LabelText className={labelClassName}>{emptyMessage}</LabelText>;
      }

      if (isInvalid && errorMessage) {
        return (
          <>
            <IconWrapper $type="error" $style={styleVariant} $clickable={false} className={iconClassName}>
              <CancelOutlined sx={{ fontSize: 12 }} />
            </IconWrapper>
            <LabelText className={labelClassName}>{errorMessage}</LabelText>
          </>
        );
      }

      if (isLoading) {
        return (
          <>
            <LoadingSpinner>
              <Autorenew sx={{ fontSize: 12 }} />
            </LoadingSpinner>
            <LabelText className={labelClassName}>{loadingMessage}</LabelText>
          </>
        );
      }

      if (customContent) {
        return typeof customContent === 'function'
          ? customContent({ type })
          : customContent;
      }

      return (
        <>
          {customLeading}
          {showLeadingIcon && (
            <IconWrapper $type={type} $style={styleVariant} $clickable={false} className={iconClassName}>
              {leadingIcon || defaultLeadingIcon}
            </IconWrapper>
          )}
          {label && <LabelText className={labelClassName}>{label}</LabelText>}
          {customTrailing}
          {showTrailingIcon && (
            <IconWrapper
              $type={type}
              $style={styleVariant}
              $clickable={!!onRemove}
              className={iconClassName}
              onClick={onRemove ? handleRemoveClick : undefined}
              role={onRemove ? 'button' : undefined}
              aria-label={onRemove ? 'Remove' : undefined}
              tabIndex={onRemove && !disabled && !isLoading ? 0 : undefined}
              onKeyDown={
                onRemove
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleRemoveClick(e as any);
                      }
                    }
                  : undefined
              }
            >
              {trailingIcon || defaultTrailingIcon}
            </IconWrapper>
          )}
        </>
      );
    };

    const computedRole = role || (interactive ? 'button' : 'status');
    
    // Ensure style is an object, not a string
    const safeStyle = typeof style === 'object' ? style : undefined;

    return (
      <StyledBadge
        ref={ref}
        as={Container}
        $type={type}
        $style={styleVariant}
        $disabled={disabled}
        $isLoading={isLoading}
        $interactive={interactive}
        className={className}
        style={safeStyle}
        onClick={interactive ? handleClick : undefined}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={interactive ? handleKeyDown : undefined}
        role={computedRole}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        tabIndex={interactive && !disabled && !isLoading ? 0 : undefined}
        {...restProps}
      >
        {renderContent()}
      </StyledBadge>
    );
  }
);

Badge.displayName = 'Badge';
