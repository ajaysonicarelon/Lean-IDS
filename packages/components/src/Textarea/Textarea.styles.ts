/**
 * Textarea styled components
 * Based on Figma design system specifications
 */

import styled, { css } from 'styled-components';

interface StyledTextareaContainerProps {
  $fullWidth?: boolean;
}

export const TextareaContainer = styled.div<StyledTextareaContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '300px')};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: flex-start;
`;

interface StyledLabelProps {
  $disabled?: boolean;
}

export const Label = styled.label<StyledLabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[500] : theme.colors.palette.neutral[1000]};
  white-space: nowrap;
`;

interface StyledTextareaWrapperProps {
  $error?: boolean;
  $disabled?: boolean;
  $isFocused?: boolean;
  $hasValue?: boolean;
}

export const TextareaWrapper = styled.div<StyledTextareaWrapperProps>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme, $disabled, $hasValue }) => {
    if ($disabled && $hasValue) return theme.colors.palette.primary[50];
    return theme.colors.palette.neutral[50];
  }};
  border: 1px solid;
  border-color: ${({ theme, $error, $disabled, $isFocused, $hasValue }) => {
    if ($disabled && $hasValue) return theme.colors.palette.primary[100];
    if ($disabled) return theme.colors.palette.neutral[300];
    if ($error && $isFocused) return theme.colors.palette.error[500];
    if ($error) return theme.colors.palette.error[500];
    if ($isFocused) return theme.colors.palette.neutral[900];
    if ($hasValue) return theme.colors.palette.neutral[900];
    return theme.colors.palette.neutral[500];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  min-height: 100px;
  
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

export const StyledTextarea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  min-height: 84px;
  resize: vertical;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[500]};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
    resize: none;
  }
  
  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ResizeIconWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 16px;
  height: 100%;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;
