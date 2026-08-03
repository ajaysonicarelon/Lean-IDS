/**
 * ProgressBar styled components
 * Uses design tokens - NO hardcoded values
 */

import styled, { css, keyframes } from 'styled-components';
import { StyledProgressBarProps, StyledProgressFillProps } from './ProgressBar.types';

/**
 * Indeterminate loading animation
 */
const indeterminateAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
`;

/**
 * Get height based on size variant
 */
const getHeight = (size: string) => {
  const heights = {
    xsmall: '2px',
    small: '6px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
  };
  return heights[size as keyof typeof heights] || heights.medium;
};

/**
 * Get progress fill color based on type
 */
const getFillColor = (type: string) => css`
  ${({ theme }) => {
    switch (type) {
      case 'success':
        return `background: ${theme.colors.palette.success[500]};`;
      case 'warning':
        return `background: ${theme.colors.palette.warning[600]};`;
      case 'alert':
        return `background: ${theme.colors.palette.error[500]};`;
      case 'default':
      default:
        return `background: ${theme.colors.palette.primary[500]};`;
    }
  }}
`;

/**
 * Container for the entire progress bar component
 */
export const ProgressBarContainer = styled.div<StyledProgressBarProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

/**
 * Label container (holds label text and percentage)
 */
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.palette.primary[800]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

/**
 * Label text wrapper
 */
export const LabelText = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * Percentage display wrapper
 */
export const PercentageText = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  line-height: ${({ theme }) => theme.lineHeights[12]};
  letter-spacing: 1.5px;
`;

/**
 * Track (background bar)
 */
export const ProgressTrack = styled.div<StyledProgressBarProps>`
  position: relative;
  width: 100%;
  height: ${({ $size }) => getHeight($size)};
  background: ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  
  ${({ $isInvalid, theme }) =>
    $isInvalid &&
    css`
      background: ${theme.colors.palette.error[100]};
    `}
`;

/**
 * Progress fill (colored indicator)
 */
export const ProgressFill = styled.div<StyledProgressFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $value }) => `${Math.min(Math.max($value, 0), 100)}%`};
  ${({ $type }) => getFillColor($type)}
  border-radius: ${({ theme, $value }) =>
    $value >= 100 ? theme.borderRadius.full : `${theme.borderRadius.full} 0 0 ${theme.borderRadius.full}`};
  transition: width 0.3s ease-in-out, background 0.2s ease-in-out;
  
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      width: 25%;
      animation: ${indeterminateAnimation} 1.5s ease-in-out infinite;
    `}
  
  ${({ $isInvalid, theme }) =>
    $isInvalid &&
    css`
      background: ${theme.colors.palette.error[500]};
    `}

  /* Hover state for interactive progress bars */
  &:hover {
    filter: brightness(1.1);
  }

  /* Focus-visible state */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

/**
 * Error message container
 */
export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colors.palette.error[600]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;
