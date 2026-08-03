/**
 * AlertBanner component
 * 
 * A feedback component for system messages that combines text and iconography
 * for clear communication. Supports multiple types (warning, success, error, info)
 * and styles (default, subdued, accent border).
 * 
 * @component
 * @example
 * ```tsx
 * <AlertBanner
 *   type="warning"
 *   styleVariant="default"
 *   text="This is a warning message"
 *   onClose={() => console.log('Closed')}
 * />
 * ```
 */

import React, { forwardRef, useEffect, useId } from 'react';
import { AlertBannerProps } from './AlertBanner.types';
import {
  StyledAlertBanner,
  MessageContainer,
  ActionsContainer,
  IconWrapper,
  LoadingOverlay,
  StateMessage,
} from './AlertBanner.styles';
import { Button } from '../Button';
import { Typography } from '../Typography';
import {
  WarningAmberOutlined,
  CheckCircleOutlined,
  CancelOutlined,
  InfoOutlined,
  Close,
  Autorenew
} from '@mui/icons-material';

const getDefaultIcon = (type: string) => {
  switch (type) {
    case 'warning':
      return <WarningAmberOutlined sx={{ fontSize: 16 }} />;
    case 'success':
      return <CheckCircleOutlined sx={{ fontSize: 16 }} />;
    case 'error':
      return <CancelOutlined sx={{ fontSize: 16 }} />;
    case 'info':
      return <InfoOutlined sx={{ fontSize: 16 }} />;
    default:
      return <InfoOutlined sx={{ fontSize: 16 }} />;
  }
};

export const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      type = 'warning',
      styleVariant = 'default',
      text,
      as,
      isLoading = false,
      disabled = false,
      isInvalid = false,
      isEmpty = false,
      showLeadingIcon = true,
      showTrailingIcon = true,
      leadingIcon,
      trailingIcon,
      action = true,
      buttonText = 'Button',
      customContent,
      customActions,
      customLeading,
      customTrailing,
      onActionClick,
      onClose,
      onMount,
      onUnmount,
      onClick,
      onFocus,
      onBlur,
      className,
      style,
      messageClassName,
      actionsClassName,
      iconClassName,
      buttonClassName,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-live': ariaLive = 'polite',
      width,
      maxWidth,
      loadingMessage = 'Loading...',
      emptyMessage = 'No content to display',
      errorMessage,
      ...restProps
    },
    ref
  ) => {
    const generatedId = useId();
    const messageId = ariaDescribedby || `alert-message-${generatedId}`;

    useEffect(() => {
      onMount?.();
      return () => {
        onUnmount?.();
      };
    }, [onMount, onUnmount]);

    const Container = as || 'div';

    const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled || isLoading) return;
      onClose?.(e);
    };

    const handleCloseKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (disabled || isLoading) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClose?.(e);
      }
    };

    const handleActionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;
      onActionClick?.(e);
    };

    const renderContent = () => {
      if (isEmpty) {
        return (
          <StateMessage>
            <Typography variant="body" weight="medium">
              {emptyMessage}
            </Typography>
          </StateMessage>
        );
      }

      if (isInvalid && errorMessage) {
        return (
          <StateMessage id={messageId}>
            <IconWrapper $clickable={false} className={iconClassName}>
              <CancelOutlined sx={{ fontSize: 16 }} />
            </IconWrapper>
            <Typography variant="body" weight="medium">
              {errorMessage}
            </Typography>
          </StateMessage>
        );
      }

      if (customContent) {
        return (
          <MessageContainer className={messageClassName}>
            {typeof customContent === 'function'
              ? customContent({ type })
              : customContent}
          </MessageContainer>
        );
      }

      return (
        <MessageContainer className={messageClassName} id={messageId}>
          {customLeading}
          {showLeadingIcon && (
            <IconWrapper $clickable={false} className={iconClassName}>
              {leadingIcon || getDefaultIcon(type)}
            </IconWrapper>
          )}
          {text && (
            <Typography variant="body" weight="medium">
              {text}
            </Typography>
          )}
          {customTrailing}
        </MessageContainer>
      );
    };

    const renderActions = () => {
      if (customActions) {
        return (
          <ActionsContainer className={actionsClassName}>
            {typeof customActions === 'function'
              ? customActions({ type, onClose })
              : customActions}
          </ActionsContainer>
        );
      }

      return (
        <ActionsContainer className={actionsClassName}>
          {action && !isEmpty && (
            <Button
              onClick={handleActionClick}
              variant="tertiary"
              size="small"
              disabled={disabled || isLoading}
              buttonType={
                type === 'success'
                  ? 'safe'
                  : type === 'warning'
                  ? 'warning'
                  : type === 'error'
                  ? 'alert'
                  : 'default'
              }
              className={buttonClassName}
              style={{
                color:
                  styleVariant === 'default'
                    ? 'var(--color-neutral-50)'
                    : type === 'success'
                    ? 'var(--color-success-600)'
                    : type === 'warning'
                    ? 'var(--color-warning-900)'
                    : type === 'error'
                    ? 'var(--color-error-600)'
                    : 'var(--color-pantone-600)',
                '--hover-bg': styleVariant === 'default' ? 'transparent' : undefined,
              } as React.CSSProperties}
            >
              {buttonText}
            </Button>
          )}
          {showTrailingIcon && !isEmpty && (
            <IconWrapper
              $clickable={true}
              onClick={handleCloseClick}
              role="button"
              aria-label="Close alert"
              tabIndex={disabled || isLoading ? -1 : 0}
              onKeyDown={handleCloseKeyDown}
              className={iconClassName}
            >
              {trailingIcon || <Close sx={{ fontSize: 16 }} />}
            </IconWrapper>
          )}
        </ActionsContainer>
      );
    };

    return (
      <StyledAlertBanner
        ref={ref}
        as={Container}
        $type={type}
        $style={styleVariant}
        $width={width}
        $maxWidth={maxWidth}
        $disabled={disabled}
        $isLoading={isLoading}
        className={className}
        style={style}
        role="alert"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={messageId}
        aria-live={ariaLive}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      >
        {renderContent()}
        {renderActions()}

        {isLoading && (
          <LoadingOverlay>
            <Autorenew sx={{ fontSize: 20, animation: 'spin 1s linear infinite' }} />
            {loadingMessage && (
              <Typography variant="body" weight="medium" style={{ marginLeft: '8px' }}>
                {loadingMessage}
              </Typography>
            )}
          </LoadingOverlay>
        )}
      </StyledAlertBanner>
    );
  }
);

AlertBanner.displayName = 'AlertBanner';
