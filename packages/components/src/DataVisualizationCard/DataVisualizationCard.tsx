/**
 * DataVisualizationCard Component
 * 
 * A universal container for all data visualizations (bar graphs, line graphs, pie charts, donuts, maps, etc.)
 * Based on Figma design: node-id=5543-4296
 * 
 * IMPORTANT GUIDELINE:
 * When implementing ANY data visualization (charts, graphs, maps, etc.), ALWAYS use this container.
 * Do NOT create custom containers for visualizations. This ensures consistency across all data viz.
 * 
 * Usage:
 * - Wrap any chart/graph component inside this container
 * - Provides consistent header, title, info icon, and dropdown
 * - Handles responsive sizing and spacing
 * - Maintains design system consistency
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
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
  border: 1px solid #D5D5D5; // gray-400
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  color: #222222; // gray-900
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
  color: #909090; // gray-600
  padding: 0;
  
  &:hover {
    color: #222222;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  height: 32px;
  min-width: 118px;
  background: #FFFFFF;
  border: 1px solid #222222; // gray-900
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #222222;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    border-color: #464646;
  }
  
  &:focus {
    outline: 2px solid #6222BC;
    outline-offset: 2px;
  }
`;

const VisualizationArea = styled.div<{ $height?: string | number }>`
  width: 100%;
  height: ${({ $height }) => {
    if (typeof $height === 'number') return `${$height}px`;
    if ($height) return $height;
    return '246px'; // Default height from Figma
  }};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const DataVisualizationCard: React.FC<DataVisualizationCardProps> = ({
  title = 'Graph Name',
  showInfoIcon = true,
  onInfoClick,
  infoTooltipContent,
  showDropdown = true,
  dropdownValue = 'Last 7 days',
  dropdownOptions = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last year'],
  onDropdownChange,
  children,
  height,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [infoTooltip, setInfoTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });

  const handleDropdownClick = () => {
    if (onDropdownChange) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (onDropdownChange) {
      onDropdownChange(option);
    }
    setIsDropdownOpen(false);
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

  const handleClickOutside = () => {
    setInfoTooltip({
      visible: false,
      x: 0,
      y: 0,
    });
  };

  // Close tooltip when clicking outside
  React.useEffect(() => {
    if (infoTooltip.visible) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [infoTooltip.visible]);

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

        {/* Dropdown */}
        {showDropdown && (
          <div style={{ position: 'relative' }}>
            <DropdownButton onClick={handleDropdownClick} aria-label="Select time period">
              <span>{dropdownValue}</span>
              <Icon name="ExpandMore" size="small" />
            </DropdownButton>
            
            {/* Simple dropdown menu (can be enhanced with a proper Dropdown component) */}
            {isDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '36px',
                  right: 0,
                  background: '#FFFFFF',
                  border: '1px solid #D5D5D5',
                  borderRadius: '4px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                  minWidth: '150px',
                }}
              >
                {dropdownOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '8px 12px',
                      background: option === dropdownValue ? '#F8F7FB' : 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'Elevance Sans, sans-serif',
                      fontSize: '14px',
                      color: '#222222',
                    }}
                    onMouseEnter={(e) => {
                      if (option !== dropdownValue) {
                        e.currentTarget.style.background = '#F8F8F8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (option !== dropdownValue) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </Header>

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
