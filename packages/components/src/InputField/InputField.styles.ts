/**
 * InputField styled components
 * Based on Figma design system specifications
 */

import styled, { css } from 'styled-components';
import { InputSize } from './InputField.types';

interface StyledInputContainerProps {
  $fullWidth?: boolean;
}

export const InputContainer = styled.div<StyledInputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '300px')};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`;

interface StyledLabelProps {
  $size: InputSize;
  $disabled?: boolean;
}

export const Label = styled.label<StyledLabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[900]};
  white-space: nowrap;
  
  ${({ $size, theme }) => {
    if ($size === 'large') {
      return css`
        font-size: ${theme.fontSizes[16]};
        line-height: ${theme.lineHeights[19]};
      `;
    }
    return css`
      font-size: ${theme.fontSizes[14]};
      line-height: ${theme.lineHeights[16]};
    `;
  }}
`;

export const FieldImportance = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  color: ${({ theme }) => theme.colors.palette.error[500]};
  white-space: nowrap;
`;

interface StyledInputWrapperProps {
  $size: InputSize;
  $error?: boolean;
  $disabled?: boolean;
  $isFocused?: boolean;
}

const sizeStyles = {
  small: css`
    height: 32px;
    padding: ${({ theme }) => theme.spacing[2]};
    gap: ${({ theme }) => theme.spacing[2]};
  `,
  default: css`
    height: 40px;
    padding: ${({ theme }) => theme.spacing[2]};
    gap: ${({ theme }) => theme.spacing[2]};
  `,
  large: css`
    height: 50px;
    padding: ${({ theme }) => theme.spacing[2]};
    gap: ${({ theme }) => theme.spacing[2]};
  `,
};

export const InputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[100] : theme.colors.palette.neutral[50]};
  border: 1px solid;
  border-color: ${({ theme, $error, $disabled, $isFocused }) => {
    if ($disabled) return theme.colors.palette.neutral[300];
    if ($error && $isFocused) return theme.colors.palette.error[500];
    if ($error) return theme.colors.palette.error[500];
    if ($isFocused) return theme.colors.palette.primary[500];
    return theme.colors.palette.neutral[400];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  
  ${({ $size }) => sizeStyles[$size]}
  
  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({ $error, $isFocused, theme }) =>
    $error && $isFocused &&
    css`
      background-color: ${theme.colors.palette.error[50]};
    `}
`;

interface StyledInputProps {
  $size: InputSize;
}

export const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  
  ${({ $size, theme }) => {
    if ($size === 'large') {
      return css`
        font-size: ${theme.fontSizes[16]};
        line-height: ${theme.lineHeights[19]};
      `;
    }
    return css`
      font-size: ${theme.fontSizes[14]};
      line-height: ${$size === 'small' ? 'normal' : theme.lineHeights[16]};
    `;
  }}
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[400]};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.palette.neutral[500]};
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
  $size: InputSize;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  
  ${({ $size }) => {
    const size = $size === 'large' ? '24px' : '16px';
    return css`
      width: ${size};
      height: ${size};
    `;
  }}
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
