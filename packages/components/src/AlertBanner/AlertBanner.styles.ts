/**
 * AlertBanner styled components
 */

import styled from 'styled-components';
import { AlertBannerType, AlertBannerStyle } from './AlertBanner.types';

export const StyledAlertBanner = styled.div<{
  $type: AlertBannerType;
  $style: AlertBannerStyle;
  $width?: string;
  $maxWidth?: string;
  $disabled?: boolean;
  $isLoading?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  min-height: ${({ theme }) => theme.spacing[12]};
  width: ${({ $width }) => $width || '100%'};
  max-width: ${({ $maxWidth }) => $maxWidth};
  position: relative;
  transition: opacity 0.2s ease;

  ${({ $disabled, $isLoading }) => 
    ($disabled || $isLoading) && `
      opacity: 0.6;
      pointer-events: ${$disabled ? 'none' : 'auto'};
      cursor: ${$disabled ? 'not-allowed' : 'default'};
    `
  }

  &:hover {
    ${({ $disabled, $isLoading }) => 
      !$disabled && !$isLoading && `
        opacity: 0.95;
      `
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  ${({ theme, $type, $style }) => {
    // Default style
    if ($style === 'default') {
      if ($type === 'warning') {
        return `
          background-color: ${theme.colors.palette.warning[500]};
          color: ${theme.colors.palette.warning[900]};
        `;
      }
      if ($type === 'success') {
        return `
          background-color: ${theme.colors.palette.success[500]};
          color: ${theme.colors.palette.neutral[50]};
        `;
      }
      if ($type === 'error') {
        return `
          background-color: ${theme.colors.palette.error[500]};
          color: ${theme.colors.palette.neutral[50]};
        `;
      }
      if ($type === 'info') {
        return `
          background-color: ${theme.colors.palette.secondary.pantone[500]};
          color: ${theme.colors.palette.neutral[50]};
        `;
      }
    }

    // Subdued style
    if ($style === 'subdued') {
      if ($type === 'warning') {
        return `
          background-color: ${theme.colors.palette.warning[100]};
          color: ${theme.colors.palette.warning[900]};
        `;
      }
      if ($type === 'success') {
        return `
          background-color: ${theme.colors.palette.success[50]};
          color: ${theme.colors.palette.success[600]};
        `;
      }
      if ($type === 'error') {
        return `
          background-color: ${theme.colors.palette.error[50]};
          color: ${theme.colors.palette.error[600]};
        `;
      }
      if ($type === 'info') {
        return `
          background-color: ${theme.colors.palette.secondary.pantone[50]};
          color: ${theme.colors.palette.secondary.pantone[600]};
        `;
      }
    }

    // Accent Border style
    if ($style === 'accentBorder') {
      let borderColor = '';
      let backgroundColor = '';
      let textColor = '';

      if ($type === 'warning') {
        borderColor = theme.colors.palette.warning[500];
        backgroundColor = theme.colors.palette.warning[100];
        textColor = theme.colors.palette.warning[900];
      } else if ($type === 'success') {
        borderColor = theme.colors.palette.success[500];
        backgroundColor = theme.colors.palette.success[50];
        textColor = theme.colors.palette.success[600];
      } else if ($type === 'error') {
        borderColor = theme.colors.palette.error[500];
        backgroundColor = theme.colors.palette.error[50];
        textColor = theme.colors.palette.error[600];
      } else if ($type === 'info') {
        borderColor = theme.colors.palette.secondary.pantone[500];
        backgroundColor = theme.colors.palette.secondary.pantone[50];
        textColor = theme.colors.palette.secondary.pantone[600];
      }

      return `
        background-color: ${backgroundColor};
        color: ${textColor};
        border-left: 4px solid ${borderColor};
      `;
    }
  }}
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  min-width: 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;
`;

export const IconWrapper = styled.span<{ $clickable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing[7]}; /* 16px minimum for icons */
  height: ${({ theme }) => theme.spacing[7]}; /* 16px minimum for icons */
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};
  transition: opacity 0.2s ease;

  ${({ $clickable }) => $clickable && `
    &:hover {
      opacity: 0.8;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-radius: 2px;
    }

    &:active {
      opacity: 0.6;
    }
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  z-index: 1;
`;

export const StateMessage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
`;
