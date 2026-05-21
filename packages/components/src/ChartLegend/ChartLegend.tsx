/**
 * ChartLegend Component
 * 
 * A reusable legend item for data visualizations with color indicator and metric label.
 * Based on Figma design: node-id=5493-15856
 * 
 * Usage:
 * - Display metric names with color indicators
 * - Can be clicked to toggle metric visibility in charts
 * - Reusable across all chart types (donut, bar, line, etc.)
 */

import React from 'react';
import styled from 'styled-components';
import { ChartLegendProps } from './ChartLegend.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const LegendContainer = styled.button<{ $active: boolean; $clickable: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${({ $clickable, $active }) => ($clickable && !$active ? 0.7 : 1)};
  }
`;

const ColorIndicator = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const Label = styled.span<{ $active: boolean }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #222222; // gray-900
  white-space: nowrap;
  text-decoration: ${({ $active }) => ($active ? 'none' : 'line-through')};
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const ChartLegend: React.FC<ChartLegendProps> = ({
  color,
  label,
  active = true,
  onClick,
  className,
}) => {
  const isClickable = !!onClick;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <LegendContainer
      $active={active}
      $clickable={isClickable}
      onClick={handleClick}
      className={className}
      type="button"
      aria-label={`${label} - ${active ? 'active' : 'inactive'}`}
      aria-pressed={isClickable ? active : undefined}
    >
      <ColorIndicator $color={color} />
      <Label $active={active}>{label}</Label>
    </LegendContainer>
  );
};
