/**
 * InlineMessage styled components
 */

import styled from 'styled-components';
import { InlineMessageType, InlineMessageStyle } from './InlineMessage.types';

export const StyledInlineMessage = styled.div<{
  $type: InlineMessageType;
  $style: InlineMessageStyle;
}>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 100%;

  ${({ theme, $type, $style }) => {
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
          color: ${theme.colors.palette.success[700]};
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
          color: ${theme.colors.palette.secondary.pantone[700]};
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
        borderColor = theme.colors.palette.success[600];
        backgroundColor = theme.colors.palette.success[50];
        textColor = theme.colors.palette.success[800];
      } else if ($type === 'error') {
        borderColor = theme.colors.palette.error[500];
        backgroundColor = theme.colors.palette.error[50];
        textColor = theme.colors.palette.error[600];
      } else if ($type === 'info') {
        borderColor = theme.colors.palette.secondary.pantone[500];
        backgroundColor = theme.colors.palette.secondary.pantone[50];
        textColor = theme.colors.palette.secondary.pantone[700];
      }

      return `
        background-color: ${backgroundColor};
        color: ${textColor};
        border-left: 4px solid ${borderColor};
      `;
    }
  }}
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  min-width: 0;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1;
  min-width: 0;
`;

export const TitleText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  margin: 0;
`;

export const DescriptionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  margin: 0;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[1]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;
`;

export const CloseIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
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
