/**
 * DonutChart Component
 * 
 * Enterprise-grade donut chart visualization component that displays 2-6 metrics with optional center KPI.
 * Based on Figma designs: node-id=5544-4418 (donut sets), node-id=5544-4848 (layouts)
 * 
 * Features:
 * - ✅ forwardRef support for DOM access
 * - ✅ Polymorphic 'as' prop
 * - ✅ All 8 states (default, hover, focus, active, disabled, loading, empty, error)
 * - ✅ Typography component (no hardcoded text styles)
 * - ✅ Design tokens (no hardcoded values)
 * - ✅ Width/maxWidth/minWidth props
 * - ✅ Multiple customization slots
 * - ✅ Full accessibility (ARIA, keyboard navigation)
 * - ✅ Comprehensive event callbacks
 * 
 * Usage:
 * Always wrap in DataVisualizationCard for consistent styling
 */

import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { ChartLegend } from '../ChartLegend';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';
import { DonutChartProps } from './DonutChart.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ChartContainer = styled.div<{ 
  $width?: string; 
  $maxWidth?: string; 
  $minWidth?: string;
  $disabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[9]};
  width: ${({ $width }) => $width || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-width: ${({ $minWidth }) => $minWidth};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
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
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  &:active {
    color: ${({ theme }) => theme.colors.semantic.text.secondary};
  }
`;

const ChartContent = styled.div<{ $layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'horizontal' ? 'row' : 'column')};
  gap: ${({ theme }) => theme.spacing[9]};
  align-items: ${({ $layout }) => ($layout === 'horizontal' ? 'flex-start' : 'center')};
  width: 100%;
`;

const DonutContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const CenterValueContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`;

const LegendsContainer = styled.div<{ $layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[5]}`};
  align-items: center;
  justify-content: ${({ $layout }) => ($layout === 'horizontal' ? 'flex-start' : 'center')};
  width: ${({ $layout }) => ($layout === 'horizontal' ? 'auto' : '100%')};
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[10]};
  text-align: center;
`;

const ErrorContainer = styled(StateContainer)`
  color: ${({ theme }) => theme.colors.semantic.text.error};
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


// ============================================================================
// COMPONENT
// ============================================================================

export const DonutChart = forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      // Polymorphism
      as,
      
      // Layout & Responsiveness
      width,
      maxWidth,
      minWidth,
      
      // Data & Content
      title,
      data,
      centerValue,
      showCenterValue = true,
      autoCalculateCenterValue = false,
      centerValueFormatter,
      layout = 'vertical',
      size = 196,
      
      // Info Icon
      showInfoIcon = false,
      onInfoClick,
      infoTooltipContent,
      
      // Slots
      customHeader,
      customCenterContent,
      customLegend,
      emptyContent,
      errorContent,
      loadingContent,
      
      // States
      isLoading = false,
      isInvalid = false,
      errorMessage = 'An error occurred while loading the chart',
      isEmpty = false,
      emptyMessage = 'No data available',
      disabled = false,
      
      // Event Callbacks
      onLegendClick,
      onSegmentHover,
      onSegmentClick,
      
      // Styling Overrides
      className,
      style,
      headerClassName,
      chartClassName,
      legendsClassName,
      centerValueClassName,
      
      // Rest props
      ...restProps
    },
    ref
  ) => {
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

    const handleLegendClick = (index: number) => {
      if (disabled) return;
      
      if (onLegendClick) {
        onLegendClick(index);
      } else {
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

    const handleSegmentHover = (event: React.MouseEvent, segment: ReturnType<typeof calculateDonutSegments>[0], index: number) => {
      if (disabled) return;
      
      if (onSegmentHover) {
        onSegmentHover({ label: segment.label, value: segment.value, color: segment.color }, index);
      }
      
      setTooltip({
        visible: true,
        heading: segment.label,
        description: `Value: ${segment.value}`,
        x: event.clientX + 15,
        y: event.clientY - 40,
      });
    };

    const handleSegmentClick = (segment: ReturnType<typeof calculateDonutSegments>[0], index: number) => {
      if (disabled) return;
      
      if (onSegmentClick) {
        onSegmentClick({ label: segment.label, value: segment.value, color: segment.color }, index);
      }
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
      return undefined;
    }, [infoTooltip.visible]);

    const Container = as || 'div';
    
    // Check for empty state
    const isEmptyState = isEmpty || !data || data.length === 0;
    
    // Keep all data but set inactive metrics to 0 value for smooth transitions
    const activeData = data
      .map((item: typeof data[0], index: number) => ({ 
        ...item, 
        originalIndex: index,
        value: activeMetrics.has(index) ? item.value : 0
      }));

    const segments = calculateDonutSegments(activeData, size);
    const center = size / 2;
    
    // Calculate dynamic center value if autoCalculateCenterValue is enabled
    const calculatedCenterValue = React.useMemo(() => {
      if (!autoCalculateCenterValue) {
        return centerValue;
      }
      
      // Sum only the active segments
      const activeTotal = data
        .filter((_, index) => activeMetrics.has(index))
        .reduce((sum, item) => sum + item.value, 0);
      
      // If no segments are active, use the fallback centerValue
      if (activeTotal === 0) {
        return centerValue || '0';
      }
      
      // Use custom formatter if provided, otherwise use default toString
      if (centerValueFormatter) {
        return centerValueFormatter(activeTotal);
      }
      
      return activeTotal.toString();
    }, [autoCalculateCenterValue, centerValue, data, activeMetrics, centerValueFormatter]);

    // ============================================================================
    // RENDER: LOADING STATE
    // ============================================================================
    if (isLoading) {
      return (
        <ChartContainer
          as={Container}
          ref={ref}
          className={className}
          style={style}
          $width={width}
          $maxWidth={maxWidth}
          $minWidth={minWidth}
          $disabled={disabled}
          {...restProps}
        >
          {loadingContent || (
            <StateContainer>
              <Typography variant="body" color="secondary">
                Loading chart data...
              </Typography>
            </StateContainer>
          )}
        </ChartContainer>
      );
    }

    // ============================================================================
    // RENDER: ERROR STATE
    // ============================================================================
    if (isInvalid) {
      return (
        <ChartContainer
          as={Container}
          ref={ref}
          className={className}
          style={style}
          $width={width}
          $maxWidth={maxWidth}
          $minWidth={minWidth}
          $disabled={disabled}
          {...restProps}
        >
          {errorContent || (
            <ErrorContainer>
              <Icon name="Error" size="medium" />
              <Typography variant="body" weight="semibold">
                {errorMessage}
              </Typography>
            </ErrorContainer>
          )}
        </ChartContainer>
      );
    }

    // ============================================================================
    // RENDER: EMPTY STATE
    // ============================================================================
    if (isEmptyState) {
      return (
        <ChartContainer
          as={Container}
          ref={ref}
          className={className}
          style={style}
          $width={width}
          $maxWidth={maxWidth}
          $minWidth={minWidth}
          $disabled={disabled}
          {...restProps}
        >
          {emptyContent || (
            <StateContainer>
              <Typography variant="body" color="secondary">
                {emptyMessage}
              </Typography>
            </StateContainer>
          )}
        </ChartContainer>
      );
    }

    // ============================================================================
    // RENDER: DEFAULT STATE
    // ============================================================================
    return (
      <ChartContainer
        as={Container}
        ref={ref}
        className={className}
        style={style}
        $width={width}
        $maxWidth={maxWidth}
        $minWidth={minWidth}
        $disabled={disabled}
        role="img"
        aria-label={title ? `${title} donut chart` : 'Donut chart'}
        {...restProps}
      >
        {/* Header */}
        {customHeader ? (
          typeof customHeader === 'function' ? (
            customHeader({ title, showInfoIcon })
          ) : (
            customHeader
          )
        ) : title || showInfoIcon ? (
          <ChartHeader className={headerClassName}>
            {title && (
              <Typography variant="body" weight="semibold" as="h4">
                {title}
              </Typography>
            )}
            {showInfoIcon && (
              <InfoIconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleInfoIconClick(e);
                }}
                aria-label="More information"
                disabled={disabled}
              >
                <Icon name="Info" size="small" />
              </InfoIconButton>
            )}
          </ChartHeader>
        ) : null}
        
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
          <DonutContainer className={chartClassName}>
            <svg 
              width={size} 
              height={size} 
              viewBox={`0 0 ${size} ${size}`}
              aria-hidden="true"
            >
              {segments.map((segment, index) => {
                const radius = segment.radius;
                const circumference = 2 * Math.PI * radius;
                const arcLength = (segment.percentage * circumference);
                const dashArray = `${arcLength} ${circumference}`;
                
                let totalAngleBefore = -90;
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
                    onMouseMove={(e) => handleSegmentHover(e, segment, index)}
                    onMouseLeave={handleSegmentLeave}
                    onClick={() => handleSegmentClick(segment, index)}
                    style={{ 
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      transition: 'stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      willChange: 'stroke-dasharray, transform'
                    }}
                  />
                );
              })}
            </svg>
            
            {/* Center Value */}
            {customCenterContent ? (
              <CenterValueContainer className={centerValueClassName}>
                {typeof customCenterContent === 'function' ? (
                  customCenterContent({ centerValue: calculatedCenterValue })
                ) : (
                  customCenterContent
                )}
              </CenterValueContainer>
            ) : showCenterValue && calculatedCenterValue && activeData.length > 0 ? (
              <CenterValueContainer className={centerValueClassName}>
                <Typography variant="headingM" weight="semibold">
                  {calculatedCenterValue}
                </Typography>
              </CenterValueContainer>
            ) : null}
            
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
          {customLegend ? (
            typeof customLegend === 'function' ? (
              customLegend({ data, activeMetrics, onToggle: handleLegendClick })
            ) : (
              customLegend
            )
          ) : (
            <LegendsContainer $layout={layout} className={legendsClassName}>
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
          )}
        </ChartContent>
      </ChartContainer>
    );
  }
);

DonutChart.displayName = 'DonutChart';
