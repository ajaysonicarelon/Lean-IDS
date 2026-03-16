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
}

export const StyledRadio = styled.div<StyledRadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  
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
        border: 2px solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($disabled) {
      return `
        border: 2px solid ${theme.colors.palette.neutral[300]};
      `;
    }
    if ($checked) {
      return `
        border: 2px solid ${theme.colors.palette.primary[500]};
      `;
    }
    return `
      border: 2px solid ${theme.colors.palette.neutral[400]};
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
  transition: all 0.2s ease-in-out;
  
  ${({ $size }) => {
    const size = $size === 'large' ? '10px' : '7px';
    return `
      width: ${size};
      height: ${size};
    `;
  }}
  
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[300] : theme.colors.palette.primary[500]};
`;

interface RadioLabelProps {
  $size: RadioButtonSize;
  $disabled: boolean;
}

export const RadioLabel = styled.label<RadioLabelProps>`
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
  $size: RadioButtonSize;
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
