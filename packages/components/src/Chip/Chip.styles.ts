/**
 * Chip styled components
 */

import styled from 'styled-components';
import { ChipSize, ChipVariant, ChipType } from './Chip.types';

interface StyledChipProps {
  $size: ChipSize;
  $variant: ChipVariant;
  $type: ChipType;
  $disabled?: boolean;
  $clickable?: boolean;
}

export const ChipContainer = styled.div<StyledChipProps>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: ${({ $clickable, $disabled }) => 
    $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  
  ${({ $size, theme }) => {
    switch ($size) {
      case 'large':
        return `
          gap: ${theme.spacing[2]};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
        `;
      case 'medium':
        return `
          gap: ${theme.spacing[2]};
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          font-size: ${theme.fontSizes[16]};
          line-height: ${theme.lineHeights[19]};
        `;
      case 'small':
      default:
        return `
          gap: ${theme.spacing[1]};
          padding: 2px ${theme.spacing[1]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
        `;
    }
  }}
  
  ${({ theme, $variant, $type }) => {
    // Filled variant colors
    if ($variant === 'filled') {
      switch ($type) {
        case 'success':
          return `
            background-color: ${theme.colors.palette.success[500]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'warning':
          return `
            background-color: ${theme.colors.palette.warning[500]};
            color: ${theme.colors.palette.warning[900]};
            border: none;
          `;
        case 'error':
          return `
            background-color: ${theme.colors.palette.error[500]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'neutral':
          return `
            background-color: ${theme.colors.palette.neutral[700]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'default':
        default:
          return `
            background-color: ${theme.colors.palette.primary[500]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
      }
    }
    
    // Outlined variant colors
    if ($variant === 'outlined') {
      switch ($type) {
        case 'success':
          return `
            background-color: ${theme.colors.palette.success[50]};
            color: ${theme.colors.palette.success[500]};
            border: 1px solid ${theme.colors.palette.success[500]};
          `;
        case 'warning':
          return `
            background-color: ${theme.colors.palette.warning[100]};
            color: ${theme.colors.palette.warning[700]};
            border: 1px solid ${theme.colors.palette.warning[700]};
          `;
        case 'error':
          return `
            background-color: ${theme.colors.palette.error[50]};
            color: ${theme.colors.palette.error[500]};
            border: 1px solid ${theme.colors.palette.error[500]};
          `;
        case 'neutral':
          return `
            background-color: ${theme.colors.palette.neutral[100]};
            color: ${theme.colors.palette.neutral[700]};
            border: 1px solid ${theme.colors.palette.neutral[700]};
          `;
        case 'default':
        default:
          return `
            background-color: ${theme.colors.palette.primary[50]};
            color: ${theme.colors.palette.primary[400]};
            border: 1px solid ${theme.colors.palette.primary[400]};
          `;
      }
    }
  }}
  
  &:hover {
    ${({ $clickable, $disabled, theme, $variant, $type }) => {
      if ($disabled || !$clickable) return '';
      
      if ($variant === 'filled') {
        switch ($type) {
          case 'success':
            return `background-color: ${theme.colors.palette.success[600]};`;
          case 'warning':
            return `background-color: ${theme.colors.palette.warning[600]};`;
          case 'error':
            return `background-color: ${theme.colors.palette.error[600]};`;
          case 'neutral':
            return `background-color: ${theme.colors.palette.neutral[800]};`;
          case 'default':
          default:
            return `background-color: ${theme.colors.palette.primary[600]};`;
        }
      }
      
      if ($variant === 'outlined') {
        return `opacity: 0.8;`;
      }
    }}
  }
`;

export const ChipLabel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TrailingIconWrapper = styled.span<{ $clickable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${({ $clickable }) => $clickable && 'opacity: 0.7;'}
  }
`;
