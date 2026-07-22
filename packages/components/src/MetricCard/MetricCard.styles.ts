/**
 * MetricCard Styled Components
 * Uses Typography component for all text - no custom styled text
 */

import styled from 'styled-components';

// ============================================================================
// CARD CONTAINER
// ============================================================================

export const CardContainer = styled.div<{ 
  $variant: 'basic' | 'filled' | 'set';
  $disabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  gap: ${({ $variant, theme }) => ($variant === 'set' ? '24px' : theme.spacing[3])};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  transition: all 0.2s ease;
  
  ${({ $variant }) => {
    if ($variant === 'filled') {
      return `
        background: #6222BC;
        border-color: #180336;
      `;
    }
    return `
      background: #FFFFFF;
      border-color: #D5D5D5;
    `;
  }}
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

// ============================================================================
// CONTENT WRAPPER
// ============================================================================

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit; /* Inherits gap from CardContainer */
`;

// ============================================================================
// METRIC HEADER
// ============================================================================

export const MetricHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

// ============================================================================
// CHANGE INDICATOR
// ============================================================================

export const ChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ChangeBadge = styled.div<{ $type: 'positive' | 'negative' | 'neutral' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 2px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  
  ${({ $type }) => {
    if ($type === 'positive') {
      return `
        background: #E7F3E6;
        color: #108808;
      `;
    }
    if ($type === 'negative') {
      return `
        background: #FBE7EC;
        color: #D2093C;
      `;
    }
    return `
      background: #F8F8F8;
      color: #464646;
    `;
  }}
`;

// ============================================================================
// PROGRESS BAR
// ============================================================================

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #EFE6F8;
  border-radius: 24px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $value: number; $color?: string }>`
  height: 100%;
  width: ${({ $value }) => Math.min(Math.max($value, 0), 100)}%;
  background: ${({ $color }) => $color || '#6222BC'};
  border-radius: 999px;
  transition: width 0.3s ease;
`;

// ============================================================================
// ACTION CHIP
// ============================================================================

export const ActionChip = styled.button<{ 
  $type: 'warning' | 'error' | 'info' | 'success';
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 999px;
  border: 1px solid;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  width: fit-content;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;
  
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  
  ${({ $type }) => {
    if ($type === 'warning') {
      return `
        background: #FFEBB8;
        border-color: #99710A;
        color: #99710A;
      `;
    }
    if ($type === 'error') {
      return `
        background: #FBE7EC;
        border-color: #D2093C;
        color: #D2093C;
      `;
    }
    if ($type === 'success') {
      return `
        background: #B7DBB5;
        border-color: #108808;
        color: #108808;
      `;
    }
    return `
      background: #E8F0F9;
      border-color: #1666BE;
      color: #1666BE;
    `;
  }}
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

// ============================================================================
// SET VARIANT (Multiple Metrics)
// ============================================================================

export const SetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SetTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const InfoIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]};
  height: ${({ theme }) => theme.spacing[7]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
  padding: 0;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.semantic.text.primary};
    background: ${({ theme }) => theme.colors.semantic.background.secondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  width: 100%;
`;

export const MetricItem = styled.button<{ $highlighted?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ $highlighted, theme }) =>
    $highlighted
      ? theme.colors.palette.primary[50]
      : theme.colors.semantic.background.secondary};
  border: 1px solid ${({ $highlighted, theme }) =>
    $highlighted
      ? theme.colors.palette.primary[200]
      : theme.colors.semantic.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background: ${({ $highlighted, theme }) =>
      $highlighted
        ? theme.colors.palette.primary[100]
        : '#FDFDFD'};
    border-color: ${({ $highlighted, theme }) =>
      $highlighted
        ? theme.colors.palette.primary[300]
        : theme.colors.semantic.border.hover};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

// ============================================================================
// STATE CONTAINERS
// ============================================================================

export const LoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[8]};
  min-height: 10rem;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[8]};
  min-height: 10rem;
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[8]};
  min-height: 10rem;
  color: #A80730;
`;
