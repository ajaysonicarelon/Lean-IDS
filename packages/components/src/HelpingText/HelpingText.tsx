/**
 * HelpingText Component
 * 
 * Displays contextual helper text with optional icons for form inputs.
 * Supports multiple states: default, informational, warning, and error.
 */

import React from 'react';
import { HelpingTextProps } from './HelpingText.types';
import { HelpingTextContainer, IconWrapper, TextContent } from './HelpingText.styles';

// Icon components
const InfoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.33" />
    <path d="M8 7.33V11.33M8 5.33H8.01" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.865 2.5L14.93 12.5C15.32 13.16 14.85 14 14.065 14H1.935C1.15 14 0.68 13.16 1.07 12.5L7.135 2.5C7.525 1.84 8.475 1.84 8.865 2.5ZM8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10ZM7 6V9H9V6H7Z" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.33" />
    <path d="M10 6L6 10M6 6L10 10" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
  </svg>
);

export const HelpingText: React.FC<HelpingTextProps> = ({
  text,
  state = 'default',
  size = 'default',
  showIcon = true,
  className,
}) => {
  const getIcon = () => {
    switch (state) {
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <HelpingTextContainer className={className}>
      {showIcon && (
        <IconWrapper $state={state}>
          {getIcon()}
        </IconWrapper>
      )}
      <TextContent $state={state} $size={size}>
        {text}
      </TextContent>
    </HelpingTextContainer>
  );
};

HelpingText.displayName = 'HelpingText';
