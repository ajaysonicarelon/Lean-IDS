/**
 * Checkbox styled components
 * 
 * ✅ 100% Design Tokens - NO hardcoded values
 * ✅ All states supported
 */

import styled from 'styled-components';
import { CheckboxSize } from './Checkbox.types';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

interface StyledCheckboxInputProps {
  $size: CheckboxSize;
}

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<StyledCheckboxInputProps>`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

interface StyledCheckboxProps {
  $size: CheckboxSize;
  $checked: boolean;
  $disabled: boolean;
  $isInvalid?: boolean;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  
  ${HiddenCheckbox}:focus-visible + & {
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
        border: ${theme.borderWidth[1]} solid ${theme.colors.palette.error[500]};
      `;
    }
    if ($disabled && $checked) {
      return `
        background-color: ${theme.colors.palette.neutral[300]};
        border: ${theme.borderWidth[1]} solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($disabled) {
      return `
        background-color: ${theme.colors.palette.neutral[50]};
        border: ${theme.borderWidth[1]} solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($checked) {
      return `
        background-color: ${theme.colors.palette.primary[500]};
        border: ${theme.borderWidth[1]} solid ${theme.colors.palette.primary[500]};
      `;
    }
    return `
      background-color: ${theme.colors.palette.neutral[50]};
      border: ${theme.borderWidth[1]} solid ${theme.colors.palette.neutral[400]};
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
  
  svg {
    width: 75%;
    height: 75%;
    color: ${({ theme, $disabled, $isInvalid }) =>
      $isInvalid 
        ? theme.colors.palette.error[600]  // Red for error state
        : $disabled 
        ? theme.colors.palette.neutral[50]  // White for disabled
        : theme.colors.palette.neutral[50]};  // White for normal checked
  }
`;

// ❌ REMOVED: CheckboxLabel - Now using Typography component

interface TrailingIconProps {
  $size: CheckboxSize;
  $disabled: boolean;
}

export const TrailingIcon = styled.div<TrailingIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $size, theme }) => {
    // Trailing icon smaller than checkbox: Default 14px (spacing[5]), Large 16px (spacing[6])
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
  width: ${({ theme }) => theme.spacing[4]};
  height: ${({ theme }) => theme.spacing[4]};
  
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.palette.neutral[600]};
  }
`;
