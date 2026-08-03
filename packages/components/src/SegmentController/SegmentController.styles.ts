import styled, { css } from 'styled-components';
import { SegmentControllerSize } from './SegmentController.types';

interface StyledSegmentControllerProps {
  $size: SegmentControllerSize;
  $selected: boolean;
  $disabled: boolean;
}

interface StyledSegmentControllerGroupProps {
  $orientation: 'horizontal' | 'vertical';
  $width?: string | number;
  $minWidth?: string | number;
  $maxWidth?: string | number;
}

const getSizeStyles = ($size: SegmentControllerSize) => {
  switch ($size) {
    case 'small':
      return css`
        padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
        gap: ${({ theme }) => theme.spacing[1]};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
        gap: ${({ theme }) => theme.spacing[3]};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
        gap: ${({ theme }) => theme.spacing[3]};
        border-radius: ${({ theme }) => theme.borderRadius.md};
      `;
  }
};

export const StyledSegmentController = styled.button<StyledSegmentControllerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
  outline: none;
  position: relative;
  
  ${({ $size }) => getSizeStyles($size)}

  ${({ $selected, $disabled, theme }) => {
    if ($disabled) {
      return css`
        opacity: 1;
        pointer-events: none;
      `;
    }
    
    if ($selected) {
      return css`
        background: ${theme.colors.palette.neutral[50]};
        box-shadow: ${theme.shadows.xs};
      `;
    }
    
    return css`
      background: transparent;
    `;
  }}

  &:hover:not(:disabled) {
    ${({ $selected, theme }) =>
      !$selected &&
      css`
        background: ${theme.colors.palette.primary[100]};
      `}
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    ${({ $selected, theme }) =>
      !$selected &&
      css`
        background: ${theme.colors.palette.primary[200]};
      `}
  }
`;

interface StyledIconSlotProps {
  $selected: boolean;
  $disabled: boolean;
}

interface StyledTypographyWrapperProps {
  $selected: boolean;
  $disabled: boolean;
}

export const StyledTypographyWrapper = styled.span<StyledTypographyWrapperProps>`
  ${({ $selected, $disabled, theme }) => {
    if ($disabled) {
      return css`
        color: ${theme.colors.palette.neutral[500]};
      `;
    }
    
    if ($selected) {
      return css`
        color: ${theme.colors.palette.primary[500]};
      `;
    }
    
    return css`
      color: ${theme.colors.palette.neutral[900]};
    `;
  }}
`;

export const StyledIconSlot = styled.span<StyledIconSlotProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $selected, $disabled, theme }) => {
    if ($disabled) {
      return css`
        color: ${theme.colors.palette.neutral[500]};
      `;
    }
    
    if ($selected) {
      return css`
        color: ${theme.colors.palette.primary[500]};
      `;
    }
    
    return css`
      color: ${theme.colors.palette.neutral[900]};
    `;
  }}
  
  svg {
    width: 1em;
    height: 1em;
  }
`;

const getWidthValue = (value?: string | number) => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

export const StyledSegmentControllerGroup = styled.div<StyledSegmentControllerGroupProps>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  gap: ${({ $orientation, theme }) => ($orientation === 'vertical' ? theme.spacing[2] : theme.spacing[1])};
  padding: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.palette.primary[100]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  
  /* Width controls */
  width: ${({ $width }) => getWidthValue($width) || 'fit-content'};
  min-width: ${({ $minWidth }) => getWidthValue($minWidth) || 'auto'};
  max-width: ${({ $maxWidth }) => getWidthValue($maxWidth) || 'none'};
  
  /* Overflow handling with horizontal scroll */
  ${({ $orientation }) =>
    $orientation === 'horizontal'
      ? css`
          overflow-x: auto;
          overflow-y: hidden;
          
          /* Smooth scrolling */
          scroll-behavior: smooth;
          
          /* Hide scrollbar for cleaner look but keep functionality */
          scrollbar-width: thin;
          scrollbar-color: ${({ theme }) => theme.colors.palette.primary[300]} transparent;
          
          &::-webkit-scrollbar {
            height: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: ${({ theme }) => theme.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.palette.primary[300]};
            border-radius: ${({ theme }) => theme.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.colors.palette.primary[400]};
          }
        `
      : css`
          overflow-x: hidden;
          overflow-y: auto;
          
          /* Smooth scrolling */
          scroll-behavior: smooth;
          
          /* Scrollbar styling for vertical */
          scrollbar-width: thin;
          scrollbar-color: ${({ theme }) => theme.colors.palette.primary[300]} transparent;
          
          &::-webkit-scrollbar {
            width: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: ${({ theme }) => theme.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.palette.primary[300]};
            border-radius: ${({ theme }) => theme.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.colors.palette.primary[400]};
          }
        `}
`;
