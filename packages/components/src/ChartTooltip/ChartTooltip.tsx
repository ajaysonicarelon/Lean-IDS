/**
 * ChartTooltip Component
 * 
 * A tooltip component for displaying chart data on hover.
 * Based on Figma design: node-id=5851-3357 (without triangular tip)
 * 
 * Usage:
 * - Display metric name and value on chart hover
 * - Positioned near cursor or chart element
 * - Clean, minimal design
 */

import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ChartTooltipProps } from './ChartTooltip.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const TooltipContainer = styled.div<{ $visible: boolean }>`
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;
  padding: 13px 11px;
  background: #FFFFFF; // gray-50
  border: 1.358px solid #E6E6E6; // gray-300
  border-radius: 12px;
  box-shadow: 0px 2.716px 0.679px rgba(0, 0, 0, 0.08);
  width: 253px;
  pointer-events: none;
  z-index: 9999;
`;

const TooltipHeading = styled.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #000000; // gray-1000
  white-space: nowrap;
`;

const TooltipDescription = styled.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #6C6C6C; // gray-700
  width: 100%;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
  visible = false,
  heading,
  description,
  x = 0,
  y = 0,
  className,
}) => {
  const tooltipContent = (
    <TooltipContainer
      $visible={visible}
      className={className}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
      role="tooltip"
      aria-hidden={!visible}
    >
      {heading && <TooltipHeading>{heading}</TooltipHeading>}
      {description && <TooltipDescription>{description}</TooltipDescription>}
    </TooltipContainer>
  );

  // Render tooltip at document body level to prevent clipping
  return typeof document !== 'undefined' 
    ? createPortal(tooltipContent, document.body)
    : tooltipContent;
};
