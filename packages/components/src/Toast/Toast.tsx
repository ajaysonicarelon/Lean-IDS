/**
 * Toast component
 * 
 * A compact notification component for temporary feedback messages.
 * Supports multiple types (warning, success, error, info) and styles (default, subdued).
 */

import React, { forwardRef } from 'react';
import { ToastProps } from './Toast.types';
import {
  StyledToast,
  MessageContainer,
  MessageText,
  ActionsContainer,
  ActionButton,
  IconWrapper,
} from './Toast.styles';

// Default icons
const WarningIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1.33334L1.33334 13.3333H14.6667L8 1.33334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V9.33333M8 12H8.00667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5.33334 8L7.33334 10L10.6667 6.66667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 6L6 10M6 6L10 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 10.6667V8M8 5.33334H8.00667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const getDefaultIcon = (type: string) => {
  switch (type) {
    case 'warning':
      return <WarningIcon />;
    case 'success':
      return <SuccessIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return <InfoIcon />;
  }
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      type = 'warning',
      style = 'default',
      text,
      showLeadIcon = true,
      showTrailIcon = true,
      action = true,
      leadIcon,
      trailIcon,
      buttonText = 'Button',
      onActionClick,
      onClose,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <StyledToast
        ref={ref}
        $type={type}
        $style={style}
        className={className}
        role="status"
        aria-live="polite"
        {...props}
      >
        <MessageContainer>
          {showLeadIcon && (
            <IconWrapper>{leadIcon || getDefaultIcon(type)}</IconWrapper>
          )}
          <MessageText>{text}</MessageText>
        </MessageContainer>

        <ActionsContainer>
          {action && (
            <ActionButton onClick={onActionClick} type="button">
              {buttonText}
            </ActionButton>
          )}
          {showTrailIcon && (
            <IconWrapper
              onClick={onClose}
              role="button"
              aria-label="Close toast"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClose?.();
                }
              }}
            >
              {trailIcon || <CloseIcon />}
            </IconWrapper>
          )}
        </ActionsContainer>
      </StyledToast>
    );
  }
);

Toast.displayName = 'Toast';
