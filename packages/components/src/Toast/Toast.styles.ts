/**
 * Toast styled components
 */

import styled from 'styled-components';
import { ToastType, ToastStyle } from './Toast.types';

export const StyledToast = styled.div<{
  $type: ToastType;
  $style: ToastStyle;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  min-height: 48px;
  width: 404px;
  max-width: 100%;

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
