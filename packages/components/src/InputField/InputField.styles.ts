/**
 * InputField styled components
 */

import styled, { css } from 'styled-components';
import { InputSize, InputState } from './InputField.types';

interface StyledInputContainerProps {
  $fullWidth?: boolean;
}

export const InputContainer = styled.div<StyledInputContainerProps>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

interface StyledLabelProps {
  $required?: boolean;
  $disabled?: boolean;
}

export const Label = styled.label<StyledLabelProps>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.semantic.text.disabled : theme.colors.semantic.text.primary};
  
  ${({ $required }) =>
    $required &&
    css`
      &::after {
        content: ' *';
        color: ${({ theme }) => theme.colors.semantic.text.error};
      }
    `}
`;

interface StyledInputWrapperProps {
  $size: InputSize;
  $error?: boolean;
  $success?: boolean;
  $disabled?: boolean;
  $hasLeadingIcon?: boolean;
  $hasTrailingIcon?: boolean;
}

const sizeStyles = {
  small: css`
    height: 32px;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  medium: css`
    height: 40px;
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  large: css`
    height: 48px;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

export const InputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semantic.background.primary};
  border: ${({ theme }) => theme.borderWidth[1]} solid
    ${({ theme, $error, $success, $disabled }) => {
      if ($disabled) return theme.colors.semantic.border.disabled;
      if ($error) return theme.colors.semantic.border.error;
      if ($success) return theme.colors.semantic.text.success;
      return theme.colors.semantic.border.default;
    }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  
  ${({ $size }) => sizeStyles[$size]}
  
  &:hover:not(:has(input:disabled)) {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.semantic.border.error : theme.colors.semantic.border.hover};
  }
  
  &:focus-within {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.semantic.border.error : theme.colors.semantic.border.focus};
    box-shadow: ${({ theme, $error }) =>
      $error
        ? `0 0 0 3px ${theme.colors.error[50]}`
        : theme.shadows.focus};
  }
  
  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.semantic.background.disabled};
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({ $hasLeadingIcon, theme }) =>
    $hasLeadingIcon &&
    css`
      padding-left: ${theme.spacing[8]};
    `}
  
  ${({ $hasTrailingIcon, theme }) =>
    $hasTrailingIcon &&
    css`
      padding-right: ${theme.spacing[8]};
    `}
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  padding: 0;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.secondary};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.semantic.text.disabled};
  }
  
  /* Remove default number input spinners */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
  /* Remove default search input clear button */
  &[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

interface IconWrapperProps {
  $position: 'leading' | 'trailing';
  $size: InputSize;
}

const iconSizes = {
  small: '16px',
  medium: '20px',
  large: '24px',
};

export const IconWrapper = styled.span<IconWrapperProps>`
  position: absolute;
  ${({ $position }) => ($position === 'leading' ? 'left' : 'right')}: ${({ theme }) => theme.spacing[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
  pointer-events: none;
  
  svg {
    width: ${({ $size }) => iconSizes[$size]};
    height: ${({ $size }) => iconSizes[$size]};
  }
`;

interface HelperTextProps {
  $error?: boolean;
  $success?: boolean;
}

export const HelperText = styled.span<HelperTextProps>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme, $error, $success }) => {
    if ($error) return theme.colors.semantic.text.error;
    if ($success) return theme.colors.semantic.text.success;
    return theme.colors.semantic.text.secondary;
  }};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;
