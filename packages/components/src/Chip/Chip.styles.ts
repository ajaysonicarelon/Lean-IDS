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
  $isLoading?: boolean;
  $isInvalid?: boolean;
  $isActive?: boolean;
  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;
}

export const ChipContainer = styled.div<StyledChipProps>`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: ${({ $clickable, $disabled }) => 
    $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  width: ${({ $width }) => $width || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-width: ${({ $minWidth }) => $minWidth};
  
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
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
        `;
    }
  }}
  
  ${({ theme, $variant, $type, $isActive, $isInvalid }) => {
    // Error state override
    if ($isInvalid) {
      return `
        background-color: ${theme.colors.palette.error[50]};
        color: ${theme.colors.palette.error[700]};
        border: 1px solid ${theme.colors.palette.error[500]};
      `;
    }
    
    // Filled variant colors
    if ($variant === 'filled') {
      switch ($type) {
        case 'success':
          return `
            background-color: ${$isActive ? theme.colors.palette.success[600] : theme.colors.palette.success[500]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'warning':
          return `
            background-color: ${$isActive ? theme.colors.palette.warning[600] : theme.colors.palette.warning[500]};
            color: ${theme.colors.palette.warning[900]};
            border: none;
          `;
        case 'error':
          return `
            background-color: ${$isActive ? theme.colors.palette.error[600] : theme.colors.palette.error[500]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'neutral':
          return `
            background-color: ${$isActive ? theme.colors.palette.neutral[800] : theme.colors.palette.neutral[700]};
            color: ${theme.colors.palette.neutral[50]};
            border: none;
          `;
        case 'default':
        default:
          return `
            background-color: ${$isActive ? theme.colors.palette.primary[600] : theme.colors.palette.primary[500]};
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
            background-color: ${$isActive ? theme.colors.palette.success[100] : theme.colors.palette.success[50]};
            color: ${theme.colors.palette.success[500]};
            border: 1px solid ${theme.colors.palette.success[500]};
          `;
        case 'warning':
          return `
            background-color: ${$isActive ? theme.colors.palette.warning[200] : theme.colors.palette.warning[100]};
            color: ${theme.colors.palette.warning[700]};
            border: 1px solid ${theme.colors.palette.warning[700]};
          `;
        case 'error':
          return `
            background-color: ${$isActive ? theme.colors.palette.error[100] : theme.colors.palette.error[50]};
            color: ${theme.colors.palette.error[500]};
            border: 1px solid ${theme.colors.palette.error[500]};
          `;
        case 'neutral':
          return `
            background-color: ${$isActive ? theme.colors.palette.neutral[200] : theme.colors.palette.neutral[100]};
            color: ${theme.colors.palette.neutral[700]};
            border: 1px solid ${theme.colors.palette.neutral[700]};
          `;
        case 'default':
        default:
          return `
            background-color: ${$isActive ? theme.colors.palette.primary[100] : theme.colors.palette.primary[50]};
            color: ${theme.colors.palette.primary[400]};
            border: 1px solid ${theme.colors.palette.primary[400]};
          `;
      }
    }
    
    return '';
  }}
  
  &:hover {
    ${({ $clickable, $disabled, $isLoading, theme, $variant, $type }) => {
      if ($disabled || !$clickable || $isLoading) return '';
      
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
      
      return '';
    }}
  }
  
  &:active {
    ${({ $clickable, $disabled, $isLoading }) => {
      if ($disabled || !$clickable || $isLoading) return '';
      return 'transform: scale(0.98);';
    }}
  }
  
  &:focus-visible {
    ${({ $clickable, theme }) => $clickable && `
      outline: 2px solid ${theme.colors.semantic.focus.indicator};
      outline-offset: 2px;
    `}
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
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  
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
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: opacity 0.2s ease-in-out;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${({ $clickable }) => $clickable && 'opacity: 0.7;'}
  }
  
  &:focus-visible {
    ${({ theme }) => `
      outline: 2px solid ${theme.colors.semantic.focus.indicator};
      outline-offset: 2px;
      border-radius: ${theme.borderRadius.sm};
    `}
  }
`;

export const LoadingSpinner = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  svg {
    width: 100%;
    height: 100%;
    animation: spin 1s linear infinite;
  }
`;

export const ErrorIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  color: ${({ theme }) => theme.colors.palette.error[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
