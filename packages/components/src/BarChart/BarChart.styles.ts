import styled from 'styled-components';

// ============================================================================
// CHART CONTAINER
// ============================================================================

export const ChartContainer = styled.div<{ $width?: string; $maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  width: ${({ $width }) => $width || '100%'};
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
  height: 100%;
`;

// ============================================================================
// HEADER
// ============================================================================

export const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const InfoIconButton = styled.button`
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// ============================================================================
// GRAPH CONTAINER
// ============================================================================

export const GraphContainer = styled.div<{ $height: string }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  height: ${({ $height }) => $height};
  width: 100%;
`;

export const GraphLabelsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`;

export const YAxisLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[3]};
  height: min(${({ theme }) => theme.spacing[20]}, 30%);
  flex-shrink: 0;
`;

export const YAxisLabelText = styled.div`
  white-space: nowrap;
  transform: rotate(-90deg);
`;

export const YValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
`;

// ============================================================================
// BARS CONTAINER
// ============================================================================

export const BarsContainer = styled.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({ theme }) => theme.colors.semantic.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.semantic.text.primary};
  padding: ${({ theme }) => `${theme.spacing[7]} ${theme.spacing[5]} 0 ${theme.spacing[5]}`};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const GridLinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  padding-top: ${({ theme }) => theme.spacing[7]};
  z-index: 0;
`;

export const DottedGridLine = styled.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.semantic.border.default} 50%, transparent 50%);
  background-size: ${({ theme }) => theme.spacing[2]} 1px;
  background-repeat: repeat-x;
`;

export const BarColumn = styled.div<{ $height: string }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;
  width: ${({ theme }) => theme.spacing[8]};
  min-width: ${({ theme }) => theme.spacing[8]};
  max-width: ${({ theme }) => theme.spacing[12]};
  height: ${({ $height }) => $height};
  flex: 1 1 ${({ theme }) => theme.spacing[8]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

export const BarSegment = styled.div<{ $color: string; $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  flex-shrink: 0;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
`;

// ============================================================================
// HORIZONTAL BAR COMPONENTS
// ============================================================================

export const HorizontalGraphLabelsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`;

export const HorizontalYAxisLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[3]};
  height: min(${({ theme }) => theme.spacing[10]}, 20%);
  flex-shrink: 0;
`;

export const HorizontalYValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
  padding-top: 1.55rem;
  padding-bottom: 1.75rem;
`;

export const HorizontalBarsContainer = styled.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({ theme }) => theme.colors.semantic.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.semantic.text.primary};
  padding-right: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
`;

export const HorizontalBarRow = styled.div`
  display: flex;
  align-items: center;
  height: 1.875rem;
  width: 100%;
  flex-shrink: 0;
  position: relative;
`;

export const HorizontalBarTrack = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: ${({ $width }) => Math.max($width, 1)}%;
  min-width: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

export const HorizontalBarSegment = styled.div<{ $color: string; $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  flex-shrink: 0;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
`;

// ============================================================================
// AXIS CONTAINERS
// ============================================================================

export const XAxisContainer = styled.div<{ $paddingLeft?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({ $paddingLeft }) => $paddingLeft || '0'};
  padding-right: ${({ theme }) => theme.spacing[5]};
`;

export const HorizontalXAxisContainer = styled.div<{ $paddingLeft?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({ $paddingLeft }) => $paddingLeft || '0'};
`;

export const XValuesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const XValueLabel = styled.div`
  width: auto;
  min-width: ${({ theme }) => theme.spacing[8]};
  max-width: ${({ theme }) => theme.spacing[12]};
  flex: 1 1 ${({ theme }) => theme.spacing[8]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HorizontalXValueLabel = styled.div<{ $flex?: boolean }>`
  ${({ $flex }) => $flex ? 'flex: 1; min-width: 0;' : 'flex-shrink: 0;'}
  overflow: hidden;
  text-overflow: ellipsis;
`;

// ============================================================================
// LEGEND
// ============================================================================

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  width: 100%;
`;

export const LegendItemsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const LegendItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transition: opacity 0.2s ease;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing[1]};
  
  &:hover {
    opacity: ${({ $isActive }) => ($isActive ? 0.8 : 0.6)};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const LegendColorDot = styled.div<{ $color: string }>`
  width: ${({ theme }) => theme.spacing[3]};
  height: ${({ theme }) => theme.spacing[3]};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

// ============================================================================
// LOADING & EMPTY STATES
// ============================================================================

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.semantic.background.primary};
  opacity: 0.9;
  z-index: 10;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  color: ${({ theme }) => theme.colors.semantic.text.error};
`;
