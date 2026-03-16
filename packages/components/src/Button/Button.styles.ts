/**
 * Button styled components
 */

import styled from 'styled-components';
import { ButtonSize, ButtonVariant } from './Button.types';

interface StyledButtonProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $disabled?: boolean;
  $fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  user-select: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  &:focus {
    outline: none;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.palette.primary[300]};
    outline-offset: 2px;
  }
  
  ${({ $size, theme }) => {
    switch ($size) {
      case 'xs':
        return `
          gap: ${theme.spacing[1]};
          padding: 4px ${theme.spacing[2]};
          font-size: ${theme.fontSizes[12]};
          line-height: ${theme.lineHeights[14]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 24px;
        `;
      case 'small':
        return `
          gap: ${theme.spacing[1]};
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 32px;
        `;
      case 'large':
        return `
          gap: ${theme.spacing[2]};
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes[16]};
          line-height: ${theme.lineHeights[19]};
          border-radius: ${theme.borderRadius.md};
          min-height: 48px;
        `;
      case 'xl':
        return `
          gap: ${theme.spacing[2]};
          padding: ${theme.spacing[3]} ${theme.spacing[5]};
          font-size: ${theme.fontSizes[18]};
          line-height: ${theme.lineHeights[21]};
          border-radius: ${theme.borderRadius.md};
          min-height: 56px;
        `;
      case 'medium':
      default:
        return `
          gap: ${theme.spacing[2]};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 40px;
        `;
    }
  }}
  
  ${({ theme, $variant, $disabled }) => {
    // Primary variant
    if ($variant === 'primary') {
      if ($disabled) {
        return `
          background-color: ${theme.colors.palette.neutral[300]};
          color: ${theme.colors.palette.neutral[500]};
          pointer-events: none;
        `;
      }
      return `
        background-color: ${theme.colors.palette.primary[500]};
        color: ${theme.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${theme.colors.palette.primary[600]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.primary[700]};
        }
      `;
    }
    
    // Outlined variant
    if ($variant === 'outlined') {
      if ($disabled) {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.neutral[400]};
          border: 1px solid ${theme.colors.palette.neutral[300]};
          pointer-events: none;
        `;
      }
      return `
        background-color: transparent;
        color: ${theme.colors.palette.primary[500]};
        border: 1px solid ${theme.colors.palette.primary[500]};
        
        &:hover {
          background-color: ${theme.colors.palette.primary[50]};
          border-color: ${theme.colors.palette.primary[600]};
          color: ${theme.colors.palette.primary[600]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.primary[100]};
          border-color: ${theme.colors.palette.primary[700]};
          color: ${theme.colors.palette.primary[700]};
        }
      `;
    }
    
    // Link variant
    if ($variant === 'link') {
      if ($disabled) {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.neutral[400]};
          text-decoration: none;
          pointer-events: none;
        `;
      }
      return `
        background-color: transparent;
        color: ${theme.colors.palette.primary[500]};
        text-decoration: underline;
        padding: 0;
        min-height: auto;
        
        &:hover {
          color: ${theme.colors.palette.primary[600]};
        }
        
        &:active {
          color: ${theme.colors.palette.primary[700]};
        }
      `;
    }
    
    // Success variant
    if ($variant === 'success') {
      if ($disabled) {
        return `
          background-color: ${theme.colors.palette.neutral[300]};
          color: ${theme.colors.palette.neutral[500]};
          pointer-events: none;
        `;
      }
      return `
        background-color: ${theme.colors.palette.success[500]};
        color: ${theme.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${theme.colors.palette.success[600]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.success[700]};
        }
      `;
    }
    
    // Warning variant
    if ($variant === 'warning') {
      if ($disabled) {
        return `
          background-color: ${theme.colors.palette.neutral[300]};
          color: ${theme.colors.palette.neutral[500]};
          pointer-events: none;
        `;
      }
      return `
        background-color: ${theme.colors.palette.warning[500]};
        color: ${theme.colors.palette.warning[850]};
        
        &:hover {
          background-color: ${theme.colors.palette.warning[600]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.warning[700]};
        }
      `;
    }
    
    // Alert variant
    if ($variant === 'alert') {
      if ($disabled) {
        return `
          background-color: ${theme.colors.palette.neutral[300]};
          color: ${theme.colors.palette.neutral[500]};
          pointer-events: none;
        `;
      }
      return `
        background-color: ${theme.colors.palette.error[500]};
        color: ${theme.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${theme.colors.palette.error[600]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.error[700]};
        }
      `;
    }
  }}
`;

export const IconWrapper = styled.span<{ $size: ButtonSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $size }) => {
    switch ($size) {
      case 'xs':
        return `
          width: 12px;
          height: 12px;
        `;
      case 'small':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'large':
        return `
          width: 20px;
          height: 20px;
        `;
      case 'xl':
        return `
          width: 24px;
          height: 24px;
        `;
      case 'medium':
      default:
        return `
          width: 16px;
          height: 16px;
        `;
    }
  }}
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
`;
