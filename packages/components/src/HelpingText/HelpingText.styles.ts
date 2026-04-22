/**
 * HelpingText styled components
 */

import styled from 'styled-components';
import { HelpingTextState, HelpingTextSize } from './HelpingText.types';

export const HelpingTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]}; /* 4px gap as per Figma */
`;

interface StyledIconProps {
  $state: HelpingTextState;
}

export const IconWrapper = styled.span<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  
  color: ${({ theme, $state }) => {
    switch ($state) {
      case 'error':
        return theme.colors.palette.error[500]; // #D2093C
      case 'warning':
        return theme.colors.palette.warning[500]; // #FFBD11
      case 'info':
        return theme.colors.palette.info[500]; // #1666BE
      default:
        return theme.colors.palette.neutral[900]; // #222222
    }
  }};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

interface StyledTextProps {
  $state: HelpingTextState;
  $size: HelpingTextSize;
}

export const TextContent = styled.p<StyledTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  margin: 0;
  
  ${({ theme, $size }) => {
    if ($size === 'large') {
      return `
        font-size: ${theme.fontSizes[14]};
        line-height: ${theme.lineHeights[16]};
        letter-spacing: 0px;
      `;
    }
    return `
      font-size: ${theme.fontSizes[12]};
      line-height: ${theme.lineHeights[14]};
      letter-spacing: 1px;
    `;
  }}
  
  color: ${({ theme, $state }) => {
    switch ($state) {
      case 'error':
        return theme.colors.palette.error[500]; // #D2093C
      case 'warning':
        return theme.colors.palette.warning[500]; // #FFBD11
      case 'info':
        return theme.colors.palette.info[500]; // #1666BE
      default:
        return theme.colors.palette.neutral[900]; // #222222
    }
  }};
`;
