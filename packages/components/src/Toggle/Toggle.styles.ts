/**
 * Toggle styled components
 */

import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HiddenToggleInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

interface StyledToggleTrackProps {
  $checked: boolean;
  $disabled: boolean;
  $isInvalid?: boolean;
}

export const ToggleTrack = styled.div<StyledToggleTrackProps>`
  position: relative;
  width: 44px;
  height: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: ${({ theme }) => (theme as any).transitions?.default || 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  flex-shrink: 0;
  
  ${HiddenToggleInput}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.semantic.focus.indicator};
  }
  
  ${({ theme, $checked, $disabled, $isInvalid }) => {
    if ($isInvalid) {
      return `
        background-color: ${theme.colors.palette.error[50]};
        border: ${theme.borderWidth[2]} solid ${theme.colors.palette.error[500]};
      `;
    }
    if ($disabled && $checked) {
      return `background-color: ${theme.colors.palette.primary[200]};`;
    }
    if ($disabled) {
      return `background-color: ${theme.colors.palette.neutral[200]};`;
    }
    if ($checked) {
      return `background-color: ${theme.colors.palette.primary[500]};`;
    }
    return `background-color: ${theme.colors.palette.neutral[300]};`;
  }}
  
  &:hover {
    ${({ theme, $checked, $disabled }) => {
      if ($disabled) return '';
      if ($checked) {
        return `background-color: ${theme.colors.palette.primary[600]};`;
      }
      return `background-color: ${theme.colors.palette.neutral[400]};`;
    }}
  }
`;

interface ToggleThumbProps {
  $checked: boolean;
  $disabled: boolean;
}

export const ToggleThumb = styled.div<ToggleThumbProps>`
  position: absolute;
  top: 2px;
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  transition: left 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
  ${({ $checked }) => {
    if ($checked) {
      // Move to right: track width (44px) - thumb width (20px) - margin (2px) = 22px
      return `left: 22px;`;
    }
    return `left: 2px;`;
  }}
`;

// ❌ REMOVED: ToggleLabel - Now using Typography component

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  color: ${({ theme }) => theme.colors.palette.primary[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
