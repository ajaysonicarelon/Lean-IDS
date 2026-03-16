/**
 * Checkbox styled components
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
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  transition: all 0.2s ease-in-out;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  
  ${({ $size }) => {
    const size = $size === 'large' ? '24px' : '16px';
    return `
      width: ${size};
      height: ${size};
    `;
  }}
  
  ${({ theme, $checked, $disabled }) => {
    if ($disabled && $checked) {
      return `
        background-color: ${theme.colors.palette.neutral[300]};
        border: 1px solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($disabled) {
      return `
        background-color: ${theme.colors.palette.neutral[50]};
        border: 1px solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($checked) {
      return `
        background-color: ${theme.colors.palette.primary[500]};
        border: 1px solid ${theme.colors.palette.primary[500]};
      `;
    }
    return `
      background-color: ${theme.colors.palette.neutral[50]};
      border: 1px solid ${theme.colors.palette.neutral[400]};
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
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.palette.neutral[50] : theme.colors.palette.neutral[50]};
  }
`;

interface CheckboxLabelProps {
  $size: CheckboxSize;
  $disabled: boolean;
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  
  ${({ theme, $size }) => {
    if ($size === 'large') {
      return `font-size: ${theme.fontSizes[16]};`;
    }
    return `font-size: ${theme.fontSizes[14]};`;
  }}
  
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[900]};
`;

interface TrailingIconProps {
  $size: CheckboxSize;
  $disabled: boolean;
}

export const TrailingIcon = styled.div<TrailingIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $size }) => {
    const size = $size === 'large' ? '24px' : '16px';
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
