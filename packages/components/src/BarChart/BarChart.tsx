/**
 * BarChart Component
 * 
 * A flexible bar chart component matching Figma design specifications.
 * Supports both single and stacked bars with proper axes, dotted grid lines, and legends.
 * 
 * Features:
 * - Vertical and horizontal orientations
 * - Stacked bars (multiple metrics per bar)
 * - Dotted grid lines
 * - Solid left and bottom borders (axes)
 * - Y-axis and X-axis labels
 * - Legend with color indicators
 * - Hover tooltips
 * - Info icon with tooltip
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
  gap: 26px;
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

const GraphContainer = styled.div<{ $height: number }>`
  display: flex;
  gap: 16px;
  align-items: center;
  height: ${({ $height }) => $height}px;
  width: 100%;
`;

const GraphLabelsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`;

const YAxisLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 78px;
  flex-shrink: 0;
`;

const YAxisLabelText = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
  white-space: nowrap;
  transform: rotate(-90deg);
  margin: 0;
`;

const YValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
  text-align: right;
`;

const YValueLabel = styled.p`
  margin: 0;
  white-space: nowrap;
`;

const BarsContainer = styled.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid #222222;
  border-bottom: 2px solid #222222;
  padding: 30px 21px 0 21px;
  display: flex;
  gap: 31px;
  align-items: flex-end;
  position: relative;
`;

const GridLinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  padding-top: 30px;
  z-index: 0;
`;

const DottedGridLine = styled.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, #E6E6E6 50%, transparent 50%);
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;

const BarColumn = styled.div<{ $height: number }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;
  width: 31px;
  height: ${({ $height }) => $height}px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
`;

const BarSegment = styled.div<{ $color: string; $height: number }>`
  width: 100%;
  height: ${({ $height }) => $height}px;
  background: ${({ $color }) => $color};
  border-radius: 2px;
  flex-shrink: 0;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
`;

// Horizontal Bar Components (matching Figma design)
const HorizontalGraphLabelsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`;

const HorizontalYAxisLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 41px;
  flex-shrink: 0;
`;

const HorizontalYAxisLabelText = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
  white-space: nowrap;
  transform: rotate(-90deg);
  margin: 0;
`;

const HorizontalYValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
  text-align: right;
  padding: 26px 0;
`;

const HorizontalYValueLabel = styled.p`
  margin: 0;
  white-space: nowrap;
`;

const HorizontalBarsContainer = styled.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid #222222;
  border-bottom: 2px solid #222222;
  padding-right: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
`;

const HorizontalBarRow = styled.div`
  display: flex;
  align-items: center;
  height: 31px;
  width: 100%;
  flex-shrink: 0;
  position: relative;
`;

const HorizontalBarTrack = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: ${({ $width }) => Math.max($width, 1)}%;
  min-width: 10px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
`;

const HorizontalBarSegment = styled.div<{ $color: string; $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: ${({ $color }) => $color};
  border-radius: 2px;
  flex-shrink: 0;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
`;

const HorizontalXAxisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding-left: 81px;
`;

const HorizontalXValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
`;

const HorizontalXValueLabel = styled.p<{ $flex?: boolean }>`
  ${({ $flex }) => $flex ? 'flex: 1; min-width: 0;' : 'flex-shrink: 0;'}
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const XAxisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding-left: 81px;
`;

const XValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 14px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
`;

const XValueLabel = styled.p`
  flex: 1;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const XAxisLabelText = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  color: #222222;
  text-align: center;
  width: 100%;
  margin: 0;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const LegendTitle = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #222222;
  text-align: center;
  width: 100%;
  margin: 0;
`;

const LegendItemsContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LegendItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${({ $isActive }) => ($isActive ? 0.8 : 0.6)};
  }
`;

const LegendColorDot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const LegendLabel = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #222222;
  white-space: nowrap;
  margin: 0;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  orientation = 'vertical',
  showValues = false,
  showGrid = true,
  height = 300,
  width,
  yAxisLabel,
  xAxisLabel,
  showLegend = false,
  legendTitle,
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

  // Get unique metrics for legend
  const uniqueMetrics = Array.from(
    new Map(
      data.flatMap(item => item.metrics).map(m => [m.name, m])
    ).values()
  );

  // State for active/inactive metrics (for legend toggle)
  const [activeMetrics, setActiveMetrics] = useState<Set<string>>(
    new Set(uniqueMetrics.map(m => m.name))
  );

  // Toggle metric visibility
  const toggleMetric = (metricName: string) => {
    setActiveMetrics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(metricName)) {
        newSet.delete(metricName);
      } else {
        newSet.add(metricName);
      }
      return newSet;
    });
  };

  // Don't filter data - keep all metrics but render with 0 height when inactive
  const filteredData = data;

  // Calculate max value for scaling (only from active metrics)
  const maxValue = Math.max(
    ...data.map(item => 
      item.metrics
        .filter(m => activeMetrics.has(m.name))
        .reduce((sum, metric) => sum + metric.value, 0)
    ),
    1 // Minimum value to avoid division by zero
  );

  // Calculate Y-axis labels (4 labels: max, 2/3, 1/3, 0)
  const yAxisValues = [
    maxValue,
    Math.round((maxValue * 2) / 3),
    Math.round(maxValue / 3),
    0,
  ];

  const formatValue = (value: number): string => {
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K`;
    }
    return value.toString();
  };

  const handleBarHover = (event: React.MouseEvent, item: typeof data[0]) => {
    const totalValue = item.metrics.reduce((sum, m) => sum + m.value, 0);
    const description = item.metrics
      .map(m => `${m.name}: ${formatValue(m.value)}`)
      .join('\n');
    
    setTooltip({
      visible: true,
      heading: `${item.label} - Total: ${formatValue(totalValue)}`,
      description,
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

      {/* Graph Container */}
      {orientation === 'vertical' ? (
        <>
          <GraphContainer $height={height}>
            {/* Y-Axis Labels */}
            <GraphLabelsContainer>
              {yAxisLabel && (
                <YAxisLabelContainer>
                  <YAxisLabelText>{yAxisLabel}</YAxisLabelText>
                </YAxisLabelContainer>
              )}
              <YValuesContainer>
                {yAxisValues.map((value, index) => (
                  <YValueLabel key={index}>{formatValue(value)}</YValueLabel>
                ))}
              </YValuesContainer>
            </GraphLabelsContainer>

            {/* Vertical Bars Container with Grid */}
            <BarsContainer>
              {/* Dotted Grid Lines */}
              {showGrid && (
                <GridLinesContainer>
                  {[...Array(4)].map((_, index) => (
                    <DottedGridLine key={index} />
                  ))}
                </GridLinesContainer>
              )}

              {/* Vertical Bars */}
              {filteredData.map((item, index) => {
                const totalValue = item.metrics
                  .filter(m => activeMetrics.has(m.name))
                  .reduce((sum, m) => sum + m.value, 0);
                const barHeight = (totalValue / maxValue) * (height - 30);

                return (
                  <BarColumn
                    key={index}
                    $height={barHeight}
                    onMouseMove={(e) => handleBarHover(e, data[index])}
                    onMouseLeave={handleBarLeave}
                  >
                    {item.metrics.map((metric, metricIndex) => {
                      const isActive = activeMetrics.has(metric.name);
                      const segmentHeight = isActive ? (metric.value / maxValue) * (height - 30) : 0;
                      return (
                        <BarSegment
                          key={metricIndex}
                          $color={metric.color}
                          $height={segmentHeight}
                        />
                      );
                    })}
                  </BarColumn>
                );
              })}
            </BarsContainer>
          </GraphContainer>

          {/* X-Axis */}
          <XAxisContainer>
            <XValuesContainer>
              {data.map((item, index) => (
                <XValueLabel key={index}>{item.label}</XValueLabel>
              ))}
            </XValuesContainer>
            {xAxisLabel && <XAxisLabelText>{xAxisLabel}</XAxisLabelText>}
          </XAxisContainer>
        </>
      ) : (
        <>
          {/* Horizontal Bars (Figma Design) */}
          <GraphContainer $height={height}>
            {/* Y-Axis Labels (Status labels) */}
            <HorizontalGraphLabelsContainer>
              {yAxisLabel && (
                <HorizontalYAxisLabelContainer>
                  <HorizontalYAxisLabelText>{yAxisLabel}</HorizontalYAxisLabelText>
                </HorizontalYAxisLabelContainer>
              )}
              <HorizontalYValuesContainer>
                {data.map((item, index) => (
                  <HorizontalYValueLabel key={index}>{item.label}</HorizontalYValueLabel>
                ))}
              </HorizontalYValuesContainer>
            </HorizontalGraphLabelsContainer>

            {/* Horizontal Bars Container */}
            <HorizontalBarsContainer>
              {filteredData.map((item, index) => {
                const totalValue = item.metrics
                  .filter(m => activeMetrics.has(m.name))
                  .reduce((sum, m) => sum + m.value, 0);
                const barWidthPercent = totalValue > 0 ? (totalValue / maxValue) * 100 : 0;

                return (
                  <HorizontalBarRow key={index}>
                    <HorizontalBarTrack
                      $width={barWidthPercent}
                      onMouseMove={(e) => handleBarHover(e, data[index])}
                      onMouseLeave={handleBarLeave}
                    >
                      {item.metrics.map((metric, metricIndex) => {
                        const isActive = activeMetrics.has(metric.name);
                        const segmentWidthPercent = isActive && totalValue > 0 ? (metric.value / totalValue) * 100 : 0;
                        return (
                          <HorizontalBarSegment
                            key={metricIndex}
                            $color={metric.color}
                            $width={segmentWidthPercent}
                          />
                        );
                      })}
                    </HorizontalBarTrack>
                  </HorizontalBarRow>
                );
              })}
            </HorizontalBarsContainer>
          </GraphContainer>

          {/* X-Axis (Percentage labels) */}
          <HorizontalXAxisContainer>
            <HorizontalXValuesContainer>
              <HorizontalXValueLabel $flex>0%</HorizontalXValueLabel>
              <HorizontalXValueLabel $flex>10%</HorizontalXValueLabel>
              <HorizontalXValueLabel $flex>25%</HorizontalXValueLabel>
              <HorizontalXValueLabel $flex>50%</HorizontalXValueLabel>
              <HorizontalXValueLabel $flex>75%</HorizontalXValueLabel>
              <HorizontalXValueLabel>100%</HorizontalXValueLabel>
            </HorizontalXValuesContainer>
            {xAxisLabel && <XAxisLabelText>{xAxisLabel}</XAxisLabelText>}
          </HorizontalXAxisContainer>
        </>
      )}

      {/* Legend */}
      {showLegend && uniqueMetrics.length > 0 && (
        <LegendContainer>
          {legendTitle && <LegendTitle>{legendTitle}</LegendTitle>}
          <LegendItemsContainer>
            {uniqueMetrics.map((metric, index) => (
              <LegendItem 
                key={index}
                $isActive={activeMetrics.has(metric.name)}
                onClick={() => toggleMetric(metric.name)}
              >
                <LegendColorDot $color={metric.color} />
                <LegendLabel>{metric.name}</LegendLabel>
              </LegendItem>
            ))}
          </LegendItemsContainer>
        </LegendContainer>
      )}

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
