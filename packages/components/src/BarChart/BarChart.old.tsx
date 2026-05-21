/**
 * BarChart Component
 * 
 * A flexible bar chart component for displaying comparative data.
 * Supports both vertical and horizontal orientations.
 * 
 * Features:
 * - Vertical and horizontal orientations
 * - Optional value labels
 * - Grid lines
 * - Hover tooltips
 * - Info icon with tooltip
 * - Responsive sizing
 * 
 * Usage:
 * Always wrap in DataVisualizationCard for consistent styling
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { BarChartProps } from './BarChart.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChartTitle = styled.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #222222;
  margin: 0;
`;

const InfoIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #909090;
  padding: 0;
  
  &:hover {
    color: #222222;
  }
`;

const ChartContent = styled.div<{ $height: number }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height}px;
  display: flex;
  flex-direction: column;
`;

const BarsContainer = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'row' : 'column')};
  align-items: ${({ $orientation }) => ($orientation === 'vertical' ? 'flex-end' : 'flex-start')};
  justify-content: ${({ $orientation }) => ($orientation === 'vertical' ? 'space-evenly' : 'flex-start')};
  gap: ${({ $orientation }) => ($orientation === 'vertical' ? '16px' : '16px')};
  width: 100%;
  height: ${({ $orientation }) => ($orientation === 'vertical' ? 'calc(100% - 50px)' : '100%')};
  padding: ${({ $orientation }) => ($orientation === 'vertical' ? '20px 20px 0 70px' : '0 0 0 120px')};
  position: relative;
`;

const BarWrapper = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  align-items: ${({ $orientation }) => ($orientation === 'vertical' ? 'center' : 'flex-start')};
  justify-content: ${({ $orientation }) => ($orientation === 'vertical' ? 'flex-end' : 'flex-start')};
  gap: 8px;
  flex: ${({ $orientation }) => ($orientation === 'vertical' ? '1' : '1')};
  height: ${({ $orientation }) => ($orientation === 'vertical' ? '100%' : 'auto')};
  position: relative;
  ${({ $orientation }) => $orientation === 'horizontal' && 'width: 100%;'}
`;

const Bar = styled.div<{ 
  $color: string; 
  $percentage: number; 
  $orientation: 'vertical' | 'horizontal';
}>`
  background: ${({ $color }) => $color};
  border-radius: 4px;
  transition: opacity 0.2s ease;
  cursor: pointer;
  position: relative;
  
  ${({ $orientation, $percentage }) => $orientation === 'vertical' ? `
    width: 48px;
    height: ${$percentage}%;
    min-height: 8px;
    max-height: 100%;
  ` : `
    height: 32px;
    width: ${$percentage}%;
    min-width: 4px;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`;

const BarLabel = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #464646;
  text-align: ${({ $orientation }) => ($orientation === 'vertical' ? 'center' : 'right')};
  white-space: nowrap;
  ${({ $orientation }) => $orientation === 'vertical' ? `
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
  ` : `
    position: absolute;
    left: -120px;
    width: 110px;
  `}
`;

const BarValue = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #222222;
  ${({ $orientation }) => $orientation === 'vertical' ? `
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  ` : `
    margin-left: 8px;
  `}
`;

const YAxisContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;

const YAxisLabel = styled.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  color: #6C6C6C;
  text-align: right;
  padding-right: 8px;
`;

const GridLines = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  position: absolute;
  ${({ $orientation }) => $orientation === 'vertical' ? `
    top: 0;
    left: 50px;
    right: 0;
    bottom: 50px;
  ` : `
    top: 0;
    left: 120px;
    right: 0;
    bottom: 0;
  `}
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  justify-content: space-between;
  pointer-events: none;
  z-index: 0;
  padding: ${({ $orientation }) => ($orientation === 'vertical' ? '20px 0 0 0' : '0')};
`;

const GridLine = styled.div<{ $orientation: 'vertical' | 'horizontal' }>`
  ${({ $orientation }) => $orientation === 'vertical' ? `
    width: 100%;
    height: 1px;
  ` : `
    width: 1px;
    height: 100%;
  `}
  background: #E6E6E6;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  orientation = 'vertical',
  showValues = true,
  showGrid = true,
  height = 300,
  width,
  showInfoIcon = false,
  onInfoClick,
  infoTooltipContent,
  className,
}) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    heading: '',
    description: '',
    x: 0,
    y: 0,
  });

  const [infoTooltip, setInfoTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  // Calculate max value for percentage calculation
  const maxValue = Math.max(...data.map(item => item.value));

  const handleBarHover = (event: React.MouseEvent, item: typeof data[0]) => {
    setTooltip({
      visible: true,
      heading: item.label,
      description: `Value: ${item.value.toLocaleString()}`,
      x: event.clientX + 15,
      y: event.clientY - 40,
    });
  };

  const handleBarLeave = () => {
    setTooltip({
      visible: false,
      heading: '',
      description: '',
      x: 0,
      y: 0,
    });
  };

  const handleInfoIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onInfoClick) {
      onInfoClick();
    }
    
    if (infoTooltipContent) {
      const rect = event.currentTarget.getBoundingClientRect();
      setInfoTooltip((prev) => ({
        visible: !prev.visible,
        x: rect.left,
        y: rect.bottom + 10,
      }));
    }
  };

  React.useEffect(() => {
    if (infoTooltip.visible) {
      const handleClickOutside = () => {
        setInfoTooltip({ visible: false, x: 0, y: 0 });
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [infoTooltip.visible]);

  return (
    <ChartContainer className={className} style={{ width }}>
      {/* Header */}
      {title && (
        <ChartHeader>
          <ChartTitle>{title}</ChartTitle>
          {showInfoIcon && (
            <InfoIconButton 
              onClick={(e) => {
                e.stopPropagation();
                handleInfoIconClick(e);
              }}
              aria-label="More information"
            >
              <Icon name="Info" size="small" />
            </InfoIconButton>
          )}
        </ChartHeader>
      )}
      
      {/* Info Icon Tooltip */}
      {infoTooltipContent && (
        <Tooltip
          visible={infoTooltip.visible}
          heading={infoTooltipContent}
          x={infoTooltip.x}
          y={infoTooltip.y}
          variant="pointer"
          pointerPosition="top"
        />
      )}

      {/* Chart Content */}
      <ChartContent $height={height}>
        {/* Y-Axis for vertical orientation */}
        {orientation === 'vertical' && (
          <YAxisContainer>
            {[...Array(6)].map((_, index) => {
              const value = Math.round((maxValue / 5) * (5 - index));
              return (
                <YAxisLabel key={index}>
                  {value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value}
                </YAxisLabel>
              );
            })}
          </YAxisContainer>
        )}

        {/* Grid Lines */}
        {showGrid && (
          <GridLines $orientation={orientation}>
            {[...Array(5)].map((_, index) => (
              <GridLine key={index} $orientation={orientation} />
            ))}
          </GridLines>
        )}

        {/* Bars */}
        <BarsContainer $orientation={orientation}>
          {data.map((item, index) => {
            const percentage = (item.value / maxValue) * 100;
            
            return (
              <BarWrapper key={index} $orientation={orientation}>
                <BarLabel $orientation={orientation}>
                  {item.label}
                </BarLabel>
                <Bar
                  $color={item.color}
                  $percentage={percentage}
                  $orientation={orientation}
                  onMouseMove={(e) => handleBarHover(e, item)}
                  onMouseLeave={handleBarLeave}
                >
                  {showValues && (
                    <BarValue $orientation={orientation}>
                      {item.value.toLocaleString()}
                    </BarValue>
                  )}
                </Bar>
              </BarWrapper>
            );
          })}
        </BarsContainer>
      </ChartContent>

      {/* Hover Tooltip */}
      <Tooltip
        visible={tooltip.visible}
        heading={tooltip.heading}
        description={tooltip.description}
        x={tooltip.x}
        y={tooltip.y}
        variant="default"
      />
    </ChartContainer>
  );
};
