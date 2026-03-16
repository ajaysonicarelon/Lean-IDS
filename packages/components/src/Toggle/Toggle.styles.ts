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
}

export const ToggleTrack = styled.div<StyledToggleTrackProps>`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  transition: background-color 0.2s ease-in-out;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  flex-shrink: 0;
  
  ${({ theme, $checked, $disabled }) => {
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
  ${({ $checked }) => {
    if ($checked) {
      return `
        transform: translateX(20px);
        left: 2px;
      `;
    }
    return `
      transform: translateX(0);
      left: 2px;
    `;
  }}
`;

interface ToggleLabelProps {
  $disabled: boolean;
}

export const ToggleLabel = styled.label<ToggleLabelProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[900]};
`;
