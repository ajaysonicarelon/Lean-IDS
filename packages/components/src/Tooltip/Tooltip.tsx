/**
 * Tooltip Component
 * 
 * A universal tooltip component for displaying contextual information.
 * Based on Figma design: node-id=5851-3357
 * 
 * Features:
 * - Two variants: 'default' (rectangular) and 'pointer' (with triangle)
 * - Portal rendering (no clipping)
 * - Fixed positioning (always on top)
 * - Accessible with ARIA attributes
 * 
 * Usage:
 * - Chart hover tooltips: use 'default' variant
 * - Info icon tooltips: use 'pointer' variant with triangle
 */

import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { TooltipProps } from './Tooltip.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const TooltipContainer = styled.div<{ 
  $visible: boolean; 
  $variant: 'default' | 'pointer';
  $pointerPosition: 'top' | 'bottom' | 'left' | 'right';
}>`
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;
  padding: 13px 11px;
  background: #FFFFFF;
  border: 1.358px solid #E6E6E6;
  border-radius: 12px;
  box-shadow: 0px 2.716px 0.679px rgba(0, 0, 0, 0.08);
  width: 253px;
  pointer-events: ${({ $variant }) => ($variant === 'pointer' ? 'auto' : 'none')};
  z-index: 9999;
  
  /* Triangle pointer for 'pointer' variant */
  ${({ $variant, $pointerPosition }) => $variant === 'pointer' && `
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${$pointerPosition === 'top' && `
        bottom: 100%;
        left: 20px;
        border-width: 0 8px 10px 8px;
        border-color: transparent transparent #E6E6E6 transparent;
      `}
      
      ${$pointerPosition === 'bottom' && `
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px 8px 0 8px;
        border-color: #E6E6E6 transparent transparent transparent;
      `}
      
      ${$pointerPosition === 'left' && `
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px 10px 8px 0;
        border-color: transparent #E6E6E6 transparent transparent;
      `}
      
      ${$pointerPosition === 'right' && `
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px 0 8px 10px;
        border-color: transparent transparent transparent #E6E6E6;
      `}
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${$pointerPosition === 'top' && `
        bottom: 100%;
        left: 21px;
        border-width: 0 7px 9px 7px;
        border-color: transparent transparent #FFFFFF transparent;
        margin-bottom: -1px;
      `}
      
      ${$pointerPosition === 'bottom' && `
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 9px 7px 0 7px;
        border-color: #FFFFFF transparent transparent transparent;
        margin-top: -1px;
      `}
      
      ${$pointerPosition === 'left' && `
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 7px 9px 7px 0;
        border-color: transparent #FFFFFF transparent transparent;
        margin-right: -1px;
      `}
      
      ${$pointerPosition === 'right' && `
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 7px 0 7px 9px;
        border-color: transparent transparent transparent #FFFFFF;
        margin-left: -1px;
      `}
    }
  `}
`;

const TooltipHeading = styled.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #000000;
  white-space: normal;
  word-wrap: break-word;
`;

const TooltipDescription = styled.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #6C6C6C;
  width: 100%;
  white-space: normal;
  word-wrap: break-word;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Tooltip: React.FC<TooltipProps> = ({
  visible = false,
  heading,
  description,
  x = 0,
  y = 0,
  variant = 'default',
  pointerPosition = 'top',
  className,
}) => {
  const tooltipContent = (
    <TooltipContainer
      $visible={visible}
      $variant={variant}
      $pointerPosition={pointerPosition}
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
