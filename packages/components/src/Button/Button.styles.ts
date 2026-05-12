/**
 * Button styled components - Matching Figma Design
 * Variants: primary, secondary, tertiary
 * Sizes: xsmall, small, medium, large, xlarge
 * States: active, hover, pressed, focussed, disabled
 * Types: default, safe, warning, alert
 */

import styled from 'styled-components';
import { ButtonSize, ButtonVariant, ButtonType } from './Button.types';

interface StyledButtonProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $buttonType: ButtonType;
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
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  ${({ $size, theme }) => {
    switch ($size) {
      case 'xsmall':
        return `
          gap: ${theme.spacing[3]};
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          font-size: ${theme.fontSizes[12]};
          line-height: ${theme.lineHeights[14]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 27px;
        `;
      case 'small':
        return `
          gap: ${theme.spacing[3]};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: ${theme.fontSizes[14]};
          line-height: ${theme.lineHeights[16]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 35px;
        `;
      case 'large':
        return `
          gap: ${theme.spacing[3]};
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes[16]};
          line-height: ${theme.lineHeights[19]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 43px;
        `;
      case 'xlarge':
        return `
          gap: ${theme.spacing[3]};
          padding: ${theme.spacing[3]} ${theme.spacing[5]};
          font-size: ${theme.fontSizes[18]};
          line-height: ${theme.lineHeights[21]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 48px;
        `;
      case 'medium':
      default:
        return `
          gap: ${theme.spacing[3]};
          padding: ${theme.spacing[4]} ${theme.spacing[6]};
          font-size: ${theme.fontSizes[16]};
          line-height: ${theme.lineHeights[19]};
          border-radius: ${theme.borderRadius.sm};
          min-height: 39px;
        `;
    }
  }}
  
  ${({ theme, $variant, $buttonType, $disabled }) => {
    // PRIMARY VARIANT
    if ($variant === 'primary') {
      if ($disabled) {
        return `
          background-color: ${theme.colors.palette.neutral[300]};
          color: ${theme.colors.palette.neutral[500]};
          pointer-events: none;
        `;
      }
      
      if ($buttonType === 'safe') {
        return `
          background-color: ${theme.colors.palette.success[500]};
          color: ${theme.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${theme.colors.palette.success[300]};
          }
          
          &:active {
            background-color: ${theme.colors.palette.success[400]};
          }
        `;
      }
      
      if ($buttonType === 'warning') {
        return `
          background-color: ${theme.colors.palette.warning[700]};
          color: ${theme.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${theme.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: ${theme.colors.palette.warning[600]};
          }
        `;
      }
      
      if ($buttonType === 'alert') {
        return `
          background-color: ${theme.colors.palette.error[500]};
          color: ${theme.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${theme.colors.palette.error[300]};
          }
          
          &:active {
            background-color: ${theme.colors.palette.error[400]};
          }
        `;
      }
      
      // Default primary
      return `
        background-color: ${theme.colors.palette.primary[400]};
        color: ${theme.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${theme.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: ${theme.colors.palette.primary[400]};
        }
      `;
    }
    
    // SECONDARY VARIANT
    if ($variant === 'secondary') {
      if ($disabled) {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.neutral[400]};
          border: 1px solid ${theme.colors.palette.neutral[300]};
          pointer-events: none;
        `;
      }
      
      if ($buttonType === 'safe') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.success[500]};
          border: 1px solid ${theme.colors.palette.success[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${theme.colors.palette.success[300]};
            color: ${theme.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${theme.colors.palette.success[400]};
            color: ${theme.colors.palette.success[400]};
          }
        `;
      }
      
      if ($buttonType === 'warning') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.warning[700]};
          border: 1px solid ${theme.colors.palette.warning[700]};
          
          &:hover {
            background-color: transparent;
            border-color: ${theme.colors.palette.warning[500]};
            color: ${theme.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${theme.colors.palette.warning[600]};
            color: ${theme.colors.palette.warning[600]};
          }
        `;
      }
      
      if ($buttonType === 'alert') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.error[500]};
          border: 1px solid ${theme.colors.palette.error[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${theme.colors.palette.error[300]};
            color: ${theme.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${theme.colors.palette.error[400]};
            color: ${theme.colors.palette.error[400]};
          }
        `;
      }
      
      // Default secondary
      return `
        background-color: transparent;
        color: ${theme.colors.palette.primary[400]};
        border: 1px solid ${theme.colors.palette.primary[400]};
        
        &:hover {
          background-color: transparent;
          border-color: ${theme.colors.palette.primary[300]};
          color: ${theme.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          border-color: ${theme.colors.palette.primary[400]};
          color: ${theme.colors.palette.primary[400]};
        }
      `;
    }
    
    // TERTIARY VARIANT (Figma Design)
    if ($variant === 'tertiary') {
      if ($disabled) {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.neutral[400]};
          border: none;
          pointer-events: none;
        `;
      }
      
      if ($buttonType === 'safe') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.success[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${theme.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${theme.colors.palette.success[400]};
          }
        `;
      }
      
      if ($buttonType === 'warning') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.warning[700]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${theme.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            color: ${theme.colors.palette.warning[600]};
          }
        `;
      }
      
      if ($buttonType === 'alert') {
        return `
          background-color: transparent;
          color: ${theme.colors.palette.error[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${theme.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${theme.colors.palette.error[400]};
          }
        `;
      }
      
      // Default tertiary
      return `
        background-color: transparent;
        color: ${theme.colors.palette.primary[400]};
        border: none;
        
        &:hover {
          background-color: transparent;
          color: ${theme.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          color: ${theme.colors.palette.primary[400]};
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
      case 'xsmall':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'small':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'large':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'xlarge':
        return `
          width: 16px;
          height: 16px;
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
