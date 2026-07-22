/**
 * RadioButton styled components
 */

import styled from 'styled-components';
import { RadioButtonSize } from './RadioButton.types';

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

interface StyledRadioInputProps {
  $size: RadioButtonSize;
}

export const HiddenRadioInput = styled.input.attrs({ type: 'radio' })<StyledRadioInputProps>`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

interface StyledRadioProps {
  $size: RadioButtonSize;
  $checked: boolean;
  $disabled: boolean;
  $isInvalid?: boolean;
}

export const StyledRadio = styled.div<StyledRadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  
  ${HiddenRadioInput}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.semantic.focus.indicator};
  }
  
  ${({ $size, theme }) => {
    // Default: 16px (spacing[7]), Large: 24px (spacing[10])
    const size = $size === 'large' ? theme.spacing[10] : theme.spacing[7];
    return `
      width: ${size};
      height: ${size};
    `;
  }}
  
  ${({ theme, $checked, $disabled, $isInvalid }) => {
    if ($isInvalid) {
      return `
        background-color: ${theme.colors.palette.error[50]};
        border: ${theme.borderWidth[2]} solid ${theme.colors.palette.error[500]};
      `;
    }
    if ($disabled && $checked) {
      return `
        border: ${theme.borderWidth[2]} solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($disabled) {
      return `
        border: ${theme.borderWidth[2]} solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($checked) {
      return `
        border: ${theme.borderWidth[2]} solid ${theme.colors.palette.primary[500]};
      `;
    }
    return `
      border: ${theme.borderWidth[2]} solid ${theme.colors.palette.neutral[400]};
    `;
  }}
  
  &:hover {
    ${({ theme, $checked, $disabled }) => {
      if ($disabled) return '';
      if ($checked) {
        return `border-color: ${theme.colors.palette.primary[600]};`;
      }
      return `border-color: ${theme.colors.palette.neutral[500]};`;
    }}
  }
`;

interface RadioInnerDotProps {
  $size: RadioButtonSize;
  $disabled: boolean;
}

export const RadioInnerDot = styled.div<RadioInnerDotProps>`
  border-radius: 50%;
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  
  ${({ $size, theme }) => {
    // Inner dot: Large 10px (spacing[4]), Default 7px (spacing[3])
    const size = $size === 'large' ? theme.spacing[4] : theme.spacing[3];
    return `
      width: ${size};
      height: ${size};
    `;
  }}
  
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[300] : theme.colors.palette.primary[500]};
`;

// ❌ REMOVED: RadioLabel - Now using Typography component

interface TrailingIconProps {
  $size: RadioButtonSize;
  $disabled: boolean;
}

export const TrailingIcon = styled.div<TrailingIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $size, theme }) => {
    // Trailing icon smaller than radio: Default 14px (spacing[5]), Large 16px (spacing[6])
    const size = $size === 'large' ? theme.spacing[6] : theme.spacing[5];
    return `
      width: ${size};
      height: ${size};
    `;
  }}
  
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  color: ${({ theme }) => theme.colors.palette.primary[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
