/**
 * CalendarDay Component Styles
 * Styled components for calendar day cells
 */

import styled from 'styled-components';
import { DayOfWeek, DayRange, DayState } from './CalendarDay.types';

interface DayContainerProps {
  $dayOfWeek: DayOfWeek;
  $range: DayRange;
  $state: DayState;
  $disabled: boolean;
}

interface DayInnerProps {
  $state: DayState;
  $range: DayRange;
}

export const DayContainer = styled.div<DayContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36px;
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  
  /* Background based on range and state */
  background: ${({ $range, $state, theme }) => {
    if ($range === 'none' && ($state === 'Selected' || $state === 'Default')) {
      return 'transparent';
    }
    if ($range === 'Start' && $state === 'Selected') {
      return theme.colors.palette.primary[100];
    }
    if ($range === 'End' && $state === 'Selected') {
      return theme.colors.palette.primary[100];
    }
    if ($range === 'Middle' && $state === 'Selected') {
      return theme.colors.palette.primary[100];
    }
    if ($range === 'none' && $state === 'Hover') {
      return theme.colors.palette.neutral[400];
    }
    if ($range === 'none' && $state === 'Active') {
      return theme.colors.palette.neutral[300];
    }
    return 'transparent';
  }};
  
  /* Border radius based on range */
  border-radius: ${({ $range, $state }) => {
    if ($state === 'Selected' && ($range === 'Start' || $range === 'End')) return '999px';
    if ($range === 'Middle' && $state === 'Selected') return '38px';
    if ($range === 'none') return '18px';
    return '18px';
  }};
  
  /* Focus state */
  ${({ $state, theme }) =>
    $state === 'Focus' &&
    `
    box-shadow: 0px 0px 0px 2px ${theme.colors.palette.neutral[50]},
                0px 0px 0px 4px ${theme.colors.palette.secondary.turquoise[400]};
    border-radius: 18px;
    overflow: clip;
  `}
  
  transition: background 0.2s ease, box-shadow 0.2s ease;
`;

export const DayInner = styled.div<DayInnerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 14px;
  
  /* Background for selected states */
  background: ${({ $state, $range, theme }) =>
    $state === 'Selected' && ($range === 'none' || $range === 'Start' || $range === 'End')
      ? theme.colors.palette.primary[400]
      : 'transparent'};
`;

interface DayTextProps {
  $dayOfWeek: DayOfWeek;
  $state: DayState;
  $range: DayRange;
}

export const DayText = styled.div<DayTextProps>`
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  line-height: ${({ theme }) => theme.typography.body.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.medium.letterSpacing};
  text-align: center;
  white-space: nowrap;
  
  /* Font weight based on state */
  font-weight: ${({ $state, $range }) =>
    $state === 'Selected' && ($range === 'none' || $range === 'Start' || $range === 'End')
      ? 600
      : 500};
  
  /* Color based on day type and state */
  color: ${({ $dayOfWeek, $state, $range, theme }) => {
    // Selected state (Start, End, or none)
    if ($state === 'Selected' && ($range === 'none' || $range === 'Start' || $range === 'End')) {
      return theme.colors.palette.neutral[50];
    }
    
    // Today
    if ($dayOfWeek === 'Today') {
      if ($state === 'Active') return theme.colors.palette.primary[500];
      return theme.colors.palette.primary[400];
    }
    
    // Other month
    if ($dayOfWeek === 'OtherMonth') {
      return theme.colors.palette.neutral[500];
    }
    
    // Weekend
    if ($dayOfWeek === 'Weekend') {
      return theme.colors.palette.neutral[600];
    }
    
    // Weekday (default)
    return theme.colors.palette.neutral[900];
  }};
`;
