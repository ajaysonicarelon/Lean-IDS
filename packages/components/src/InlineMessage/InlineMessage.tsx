/**
 * InlineMessage component
 * 
 * A contextual message component for inline feedback with title, description, and optional actions.
 * Supports multiple types (warning, success, error, info) and styles (subdued, accent border).
 */

import React, { forwardRef } from 'react';
import { InlineMessageProps } from './InlineMessage.types';
import {
  StyledInlineMessage,
  ContentWrapper,
  IconWrapper,
  ContentContainer,
  TitleText,
  DescriptionText,
  ActionsRow,
  Link,
  ActionsContainer,
  ActionButton,
  CloseIconWrapper,
} from './InlineMessage.styles';

// Default icons
const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L2 20H22L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 9V13M12 17H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12L11 15L16 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 9L9 15M9 9L15 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 16V12M12 8H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
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

export const InlineMessage = forwardRef<HTMLDivElement, InlineMessageProps>(
  (
    {
      type = 'warning',
      style = 'subdued',
      text,
      descriptionText,
      showLeadingIcon = true,
      showTrailingIcon = true,
      action = true,
      link = true,
      leadingIcon,
      trailingIcon,
      buttonText = 'Button',
      linkText = 'Link',
      onActionClick,
      onLinkClick,
      onClose,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <StyledInlineMessage
        ref={ref}
        $type={type}
        $style={style}
        className={className}
        role="status"
        {...props}
      >
        <ContentWrapper>
          {showLeadingIcon && (
            <IconWrapper>{leadingIcon || getDefaultIcon(type)}</IconWrapper>
          )}
          
          <ContentContainer>
            <TitleText>{text}</TitleText>
            <DescriptionText>{descriptionText}</DescriptionText>
            
            {link && (
              <ActionsRow>
                <Link onClick={onLinkClick} type="button">
                  {linkText}
                </Link>
              </ActionsRow>
            )}
          </ContentContainer>
        </ContentWrapper>

        <ActionsContainer>
          {action && (
            <ActionButton onClick={onActionClick} type="button">
              {buttonText}
            </ActionButton>
          )}
          {showTrailingIcon && (
            <CloseIconWrapper
              onClick={onClose}
              role="button"
              aria-label="Close message"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClose?.();
                }
              }}
            >
              {trailingIcon || <CloseIcon />}
            </CloseIconWrapper>
          )}
        </ActionsContainer>
      </StyledInlineMessage>
    );
  }
);

InlineMessage.displayName = 'InlineMessage';
