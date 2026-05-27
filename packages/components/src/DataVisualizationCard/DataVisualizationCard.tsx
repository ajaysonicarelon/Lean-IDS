/**
 * DataVisualizationCard Component
 * 
 * A reusable card wrapper for data visualizations (charts, graphs, etc.)
 * 
 * Features:
 * - Title with optional info icon
 * - Time range selector with Select component
 * - Default options: Last 7 days, Last 30 days, Last 6 months, Last 365 days, Custom range
 * - Custom date range picker (from/to dates)
 * - Clean card design with border and padding
 * 
 * Usage:
 * Wrap any chart component inside this container for consistent styling
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { Select } from '../Select';
import { InputField } from '../InputField';
import { DataVisualizationCardProps } from './DataVisualizationCard.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
  margin: 0;
  white-space: nowrap;
`;

const InfoIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #909090;
  padding: 0;
  
  &:hover {
    color: #222222;
  }
`;

const TimeRangeContainer = styled.div`
  width: fit-content;
  max-width: 180px;
  flex-shrink: 0;
  
  /* Override Select component's internal width */
  & > div,
  & > div > div,
  & input,
  & button {
    width: 100% !important;
    max-width: 180px !important;
  }
  
  /* Force the wrapper to hug content */
  & > div:first-child {
    width: fit-content !important;
    min-width: 150px !important;
  }
`;

const CustomDateRangeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CustomDateRangeModal = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 400px;
`;

const ModalTitle = styled.h4`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  margin: 0 0 16px 0;
`;

const DateInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

const DateInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({ $variant }) => $variant === 'primary' ? '#6222BC' : '#D5D5D5'};
  background: ${({ $variant }) => $variant === 'primary' ? '#6222BC' : '#FFFFFF'};
  color: ${({ $variant }) => $variant === 'primary' ? '#FFFFFF' : '#222222'};
  
  &:hover {
    background: ${({ $variant }) => $variant === 'primary' ? '#4E1A96' : '#F8F8F8'};
  }
`;

const DateLabel = styled.span`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  white-space: nowrap;
`;

const VisualizationArea = styled.div<{ $height?: string | number }>`
  width: 100%;
  height: ${({ $height }) => {
    if (typeof $height === 'number') return `${$height}px`;
    if ($height) return $height;
    return 'auto';
  }};
  position: relative;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const DataVisualizationCard: React.FC<DataVisualizationCardProps> = ({
  title = 'Graph Name',
  showInfoIcon = true,
  onInfoClick,
  infoTooltipContent,
  showTimeRange = true,
  timeRangeValue = 'Last 7 days',
  onTimeRangeChange,
  onCustomDateRange,
  children,
  height,
  className,
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRangeValue);
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [infoTooltip, setInfoTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });

  const timeRangeOptions = [
    { value: 'Last 7 days', label: 'Last 7 days' },
    { value: 'Last 30 days', label: 'Last 30 days' },
    { value: 'Last 6 months', label: 'Last 6 months' },
    { value: 'Last 365 days', label: 'Last 365 days' },
    { value: 'Custom range', label: 'Custom range' },
  ];

  const handleTimeRangeChange = (value: string | string[]) => {
    const selectedValue = Array.isArray(value) ? value[0] : value;
    setSelectedTimeRange(selectedValue);
    
    if (selectedValue === 'Custom range') {
      setShowCustomDatePicker(true);
    } else {
      setShowCustomDatePicker(false);
      if (onTimeRangeChange) {
        onTimeRangeChange(selectedValue);
      }
    }
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

  const handleClickOutside = () => {
    setInfoTooltip({
      visible: false,
      x: 0,
      y: 0,
    });
  };

  React.useEffect(() => {
    if (infoTooltip.visible) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [infoTooltip.visible]);

  // Update when external value changes
  React.useEffect(() => {
    setSelectedTimeRange(timeRangeValue);
  }, [timeRangeValue]);

  return (
    <CardContainer className={className}>
      {/* Header */}
      <Header>
        {/* Title with Info Icon */}
        <TitleContainer>
          <Title>{title}</Title>
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
        </TitleContainer>

        {/* Time Range Selector */}
        {showTimeRange && (
          <TimeRangeContainer>
            <Select
              label=""
              options={timeRangeOptions}
              value={selectedTimeRange}
              onChange={handleTimeRangeChange}
              placeholder="Select time range"
              helperText=""
              size="small"
              showLeadingIcon={false}
            />
          </TimeRangeContainer>
        )}
      </Header>

      {/* Custom Date Range Picker Overlay */}
      {showCustomDatePicker && (
        <CustomDateRangeOverlay onClick={() => setShowCustomDatePicker(false)}>
          <CustomDateRangeModal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Select Custom Date Range</ModalTitle>
            <DateInputsContainer>
              <DateInputRow>
                <DateLabel>From:</DateLabel>
                <InputField
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  size="small"
                />
              </DateInputRow>
              <DateInputRow>
                <DateLabel>To:</DateLabel>
                <InputField
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  size="small"
                />
              </DateInputRow>
            </DateInputsContainer>
            <ModalActions>
              <Button $variant="secondary" onClick={() => setShowCustomDatePicker(false)}>
                Cancel
              </Button>
              <Button 
                $variant="primary" 
                onClick={() => {
                  if (fromDate && toDate && onCustomDateRange) {
                    onCustomDateRange(fromDate, toDate);
                  }
                  setShowCustomDatePicker(false);
                }}
              >
                Apply
              </Button>
            </ModalActions>
          </CustomDateRangeModal>
        </CustomDateRangeOverlay>
      )}

      {/* Visualization Area */}
      <VisualizationArea $height={height}>
        {children}
      </VisualizationArea>
      
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
    </CardContainer>
  );
};
