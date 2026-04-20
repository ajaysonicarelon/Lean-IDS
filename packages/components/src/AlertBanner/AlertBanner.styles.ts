/**
 * AlertBanner styled components
 */

import styled from 'styled-components';
import { AlertBannerType, AlertBannerStyle } from './AlertBanner.types';

export const StyledAlertBanner = styled.div<{
  $type: AlertBannerType;
  $style: AlertBannerStyle;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  min-height: 48px;
  width: 100%;

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
          background-color: ${theme.colors.palette.info[500]};
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
          background-color: ${theme.colors.palette.info[50]};
          color: ${theme.colors.palette.info[600]};
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
        borderColor = theme.colors.palette.info[500];
        backgroundColor = theme.colors.palette.info[50];
        textColor = theme.colors.palette.info[600];
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

export const MessageText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  flex: 1;
  min-width: 0;
  margin: 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  color: inherit;
  white-space: nowrap;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
