/**
 * MetricCard Component
 * 
 * A data visualization component for displaying KPIs and metrics.
 * Based on Figma design: node-id=5281-15994
 * 
 * Usage:
 * - Show single or multiple KPIs/metrics in dashboards
 * - Display metric name, value, change, time comparison, and action chips
 * - Three variants: Basic (default), Filled (highlighted), Set of Metrics (grouped)
 */

import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { MetricCardProps, MetricData } from './MetricCard.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const CardContainer = styled.div<{ $variant: 'basic' | 'filled' | 'set' }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  gap: ${({ $variant }) => ($variant === 'set' ? '24px' : '8px')};
  
  ${({ $variant }) => {
    if ($variant === 'filled') {
      return `
        background: #6222BC; // primary-400
        border-color: #180336; // primary-900
      `;
    }
    return `
      background: #FFFFFF;
      border-color: #D5D5D5; // gray-400
    `;
  }}
`;

const MetricHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const MetricLabel = styled.p<{ $filled?: boolean }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ $filled }) => ($filled ? '#CBB5E9' : '#909090')}; // primary-200 : gray-600
  margin: 0;
`;

const MetricValue = styled.p<{ $filled?: boolean }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 1px;
  color: ${({ $filled }) => ($filled ? '#FFFFFF' : '#222222')}; // white : gray-900
  margin: 0;
`;

const ChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChangeBadge = styled.div<{ $type: 'positive' | 'negative' | 'neutral' }>`
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
        background: #E7F3E6; // green-100
        color: #108808; // green-500
      `;
    }
    if ($type === 'negative') {
      return `
        background: #FBE7EC; // red-100
        color: #D2093C; // red-500
      `;
    }
    return `
      background: #F8F8F8; // gray-200
      color: #464646; // gray-800
    `;
  }}
`;

const ComparisonText = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  color: #909090; // gray-600
  margin: 0;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #EFE6F8; // primary-100
  border-radius: 24px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $value: number }>`
  height: 100%;
  width: ${({ $value }) => $value}%;
  background: #6222BC; // primary-400
  border-radius: 999px;
  transition: width 0.3s ease;
`;

const ActionChip = styled.button<{ $type: 'warning' | 'error' | 'info' }>`
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
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
  
  ${({ $type }) => {
    if ($type === 'warning') {
      return `
        background: #FFEBB8; // yellow-200
        border-color: #99710A; // yellow-700
        color: #99710A;
      `;
    }
    if ($type === 'error') {
      return `
        background: #FBE7EC; // red-100
        border-color: #D2093C; // red-500
        color: #D2093C;
      `;
    }
    return `
      background: #E8F0F9; // blue-100
      border-color: #1666BE; // blue-500
      color: #1666BE;
    `;
  }}
`;

const SetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SectionHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionHeading = styled.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #222222; // gray-900
  margin: 0;
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
  color: #909090; // gray-600
  
  &:hover {
    color: #222222;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  cursor: pointer;
  
  &:hover {
    border-color: #909090;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
`;

const MetricItem = styled.div<{ $highlighted?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 6px;
  background: ${({ $highlighted }) => ($highlighted ? '#F8F7FB' : 'transparent')}; // primary-50
`;

const MetricItemLabel = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #222222; // gray-900
  margin: 0;
`;

const MetricItemValue = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #5009B5; // primary-500
  margin: 0;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const MetricCard: React.FC<MetricCardProps> = ({
  variant = 'basic',
  metricName = 'Metric Name',
  value = '8,888',
  showChange = true,
  changeValue = '+56',
  changeType = 'positive',
  comparisonText = 'vs last week',
  showProgressBar = false,
  progressValue = 60,
  showActionChip = false,
  actionText = 'Need Action',
  actionType = 'warning',
  onActionClick,
  sectionHeading = 'Section Heading',
  showInfoIcon = true,
  onInfoClick,
  showDropdown = true,
  dropdownValue = 'Last 7 days',
  onDropdownChange,
  metrics = [],
  className,
}) => {
  const isFilled = variant === 'filled';
  const isSet = variant === 'set';

  // Render single metric card (basic or filled)
  if (!isSet) {
    return (
      <CardContainer $variant={variant} className={className}>
        {/* Metric Header */}
        <MetricHeader>
          <MetricLabel $filled={isFilled}>{metricName}</MetricLabel>
          <MetricValue $filled={isFilled}>{value}</MetricValue>
        </MetricHeader>

        {/* Change Badge & Comparison */}
        {showChange && (
          <ChangeContainer>
            <ChangeBadge $type={changeType}>{changeValue}</ChangeBadge>
            <ComparisonText>{comparisonText}</ComparisonText>
          </ChangeContainer>
        )}

        {/* Progress Bar */}
        {showProgressBar && (
          <ProgressBarContainer>
            <ProgressBarFill $value={progressValue} />
          </ProgressBarContainer>
        )}

        {/* Action Chip */}
        {showActionChip && (
          <ActionChip $type={actionType} onClick={onActionClick}>
            <Icon name="Warning" size="small" />
            <span>{actionText}</span>
            <Icon name="ArrowForward" size="small" />
          </ActionChip>
        )}
      </CardContainer>
    );
  }

  // Render set of metrics card
  return (
    <CardContainer $variant="set" className={className}>
      {/* Header with Section Heading and Dropdown */}
      <SetHeader>
        <SectionHeadingContainer>
          <SectionHeading>{sectionHeading}</SectionHeading>
          {showInfoIcon && (
            <InfoIconButton onClick={onInfoClick}>
              <Icon name="Info" size="small" />
            </InfoIconButton>
          )}
        </SectionHeadingContainer>
        
        {showDropdown && (
          <DropdownButton onClick={onDropdownChange}>
            <span>{dropdownValue}</span>
            <Icon name="ExpandMore" size="small" />
          </DropdownButton>
        )}
      </SetHeader>

      {/* Metrics Grid */}
      <MetricsGrid>
        {metrics.map((metric, index) => (
          <MetricItem key={index} $highlighted={metric.highlighted}>
            <MetricItemLabel>{metric.label}</MetricItemLabel>
            <MetricItemValue>{metric.value}</MetricItemValue>
          </MetricItem>
        ))}
      </MetricsGrid>
    </CardContainer>
  );
};
