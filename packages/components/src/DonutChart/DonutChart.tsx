/**
 * DonutChart Component
 * 
 * A donut chart visualization component that displays 2-6 metrics with optional center KPI.
 * Based on Figma designs: node-id=5544-4418 (donut sets), node-id=5544-4848 (layouts)
 * 
 * Features:
 * - Supports 2-6 metrics
 * - Optional center KPI value
 * - Vertical or horizontal layout
 * - Interactive legends (click to toggle metrics)
 * - SVG-based rendering
 * - Customizable colors
 * 
 * Usage:
 * Always wrap in DataVisualizationCard for consistent styling
 */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { ChartLegend } from '../ChartLegend';
import { Tooltip } from '../Tooltip';
import { DonutChartProps, DonutChartData } from './DonutChart.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const ChartTitle = styled.h4`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #222222; // gray-900
  margin: 0;
`;

const InfoIconButton = styled.button`
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
  
  &:hover {
    color: ${({ theme }) => theme.colors.semantic.text.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

const ChartContent = styled.div<{ $layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'horizontal' ? 'row' : 'column')};
  gap: 20px;
  align-items: ${({ $layout }) => ($layout === 'horizontal' ? 'flex-start' : 'center')};
  width: 100%;
`;

const DonutContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const CenterValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: #222222; // gray-900
  text-align: center;
  pointer-events: none;
`;

const LegendsContainer = styled.div<{ $layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 12px;
  align-items: center;
  justify-content: ${({ $layout }) => ($layout === 'horizontal' ? 'flex-start' : 'center')};
  width: ${({ $layout }) => ($layout === 'horizontal' ? 'auto' : '100%')};
`;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const calculateDonutSegments = (data: { value: number; color: string; label: string }[], size: number) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = size / 2;
  const innerRadius = radius * 0.6; // 60% inner radius for donut
  const strokeWidth = radius - innerRadius;
  
  let currentAngle = -90; // Start from top
  
  return data.map((item) => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    
    currentAngle = endAngle;
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle,
      strokeWidth,
      radius: innerRadius + strokeWidth / 2,
    };
  });
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  
  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');
};

// ============================================================================
// COMPONENT
// ============================================================================

export const DonutChart: React.FC<DonutChartProps> = ({
  title,
  showInfoIcon = false,
  onInfoClick,
  infoTooltipContent,
  data,
  centerValue,
  showCenterValue = true,
  layout = 'vertical',
  size = 196,
  onLegendClick,
  className,
}) => {
  const [activeMetrics, setActiveMetrics] = useState<Set<number>>(
    new Set(data.map((_: typeof data[0], index: number) => index))
  );
  
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    heading: string;
    description: string;
    x: number;
    y: number;
  }>({
    visible: false,
    heading: '',
    description: '',
    x: 0,
    y: 0,
  });
  
  const [infoTooltip, setInfoTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });
  
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const handleLegendClick = (index: number) => {
    if (onLegendClick) {
      onLegendClick(index);
    } else {
      // Default toggle behavior
      setActiveMetrics((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  const handleSegmentHover = (event: React.MouseEvent, segment: ReturnType<typeof calculateDonutSegments>[0]) => {
    // Use screen coordinates since tooltip is now fixed positioned via Portal
    setTooltip({
      visible: true,
      heading: segment.label,
      description: `Value: ${segment.value}`,
      x: event.clientX + 15,
      y: event.clientY - 40,
    });
  };

  const handleSegmentLeave = () => {
    setTooltip({
      visible: false,
      heading: '',
      description: '',
      x: 0,
      y: 0,
    });
  };

  const handleInfoIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Call user's onClick handler if provided
    if (onInfoClick) {
      onInfoClick();
    }
    
    // Toggle tooltip
    if (infoTooltipContent) {
      const rect = event.currentTarget.getBoundingClientRect();
      setInfoTooltip((prev) => ({
        visible: !prev.visible,
        x: rect.left,
        y: rect.bottom + 10,
      }));
    }
  };

  // Close tooltip when clicking outside
  React.useEffect(() => {
    if (infoTooltip.visible) {
      const handleClickOutside = () => {
        setInfoTooltip({ visible: false, x: 0, y: 0 });
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
    return undefined;
  }, [infoTooltip.visible]);

  // Keep all data but set inactive metrics to 0 value for smooth transitions
  const activeData = data
    .map((item: typeof data[0], index: number) => ({ 
      ...item, 
      originalIndex: index,
      value: activeMetrics.has(index) ? item.value : 0
    }));

  const segments = calculateDonutSegments(activeData, size);
  const center = size / 2;

  return (
    <ChartContainer className={className}>
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

      {/* Chart and Legends */}
      <ChartContent $layout={layout}>
        {/* Donut Chart */}
        <DonutContainer ref={svgContainerRef}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {segments.map((segment, index) => {
              const radius = segment.radius;
              const circumference = 2 * Math.PI * radius;
              const arcLength = (segment.percentage * circumference);
              const dashArray = `${arcLength} ${circumference}`;
              
              // Calculate rotation to position this segment
              let totalAngleBefore = -90; // Start from top
              for (let i = 0; i < index; i++) {
                totalAngleBefore += (segments[i].percentage * 360);
              }
              
              return (
                <circle
                  key={index}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={segment.strokeWidth}
                  strokeDasharray={dashArray}
                  strokeDashoffset={0}
                  strokeLinecap="butt"
                  transform={`rotate(${totalAngleBefore} ${center} ${center})`}
                  onMouseMove={(e) => handleSegmentHover(e, segment)}
                  onMouseLeave={handleSegmentLeave}
                  style={{ 
                    cursor: 'pointer',
                    transition: 'stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'stroke-dasharray, transform'
                  }}
                />
              );
            })}
          </svg>
          
          {/* Center Value */}
          {showCenterValue && centerValue && activeData.length > 0 && (
            <CenterValue>{centerValue}</CenterValue>
          )}
          
          {/* Tooltip */}
          <Tooltip
            visible={tooltip.visible}
            heading={tooltip.heading}
            description={tooltip.description}
            x={tooltip.x}
            y={tooltip.y}
            variant="default"
          />
        </DonutContainer>

        {/* Legends */}
        <LegendsContainer $layout={layout}>
          {data.map((item, index) => (
            <ChartLegend
              key={index}
              color={item.color}
              label={item.label}
              active={activeMetrics.has(index)}
              onClick={() => handleLegendClick(index)}
            />
          ))}
        </LegendsContainer>
      </ChartContent>
    </ChartContainer>
  );
};
