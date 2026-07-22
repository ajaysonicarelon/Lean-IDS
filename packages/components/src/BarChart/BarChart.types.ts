/**
 * BarChart component types
 */

import { HTMLAttributes, ReactNode, ElementType, CSSProperties } from 'react';

/** Single metric data point for stacked bars */
export interface BarMetric {
  /** Metric name for legend */
  name: string;
  /** Metric value */
  value: number;
  /** Metric color */
  color: string;
}

/** Data for a single bar (can have multiple metrics for stacking) */
export interface BarChartData {
  /** Label for the bar (e.g., "Jan", "Feb") */
  label: string;
  /** Array of metrics (single metric = regular bar, multiple = stacked bar) */
  metrics: BarMetric[];
}

export type BarChartOrientation = 'vertical' | 'horizontal';

export interface BarChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onError'> {
  // ============================================================================
  // CORE PROPS
  // ============================================================================
  
  /** Chart title */
  title?: ReactNode;
  /** Array of bar data */
  data: BarChartData[];
  /** Chart orientation */
  orientation?: BarChartOrientation;
  
  // ============================================================================
  // DISPLAY OPTIONS
  // ============================================================================
  
  /** Show value labels on bars */
  showValues?: boolean;
  /** Show grid lines (dotted) */
  showGrid?: boolean;
  /** Chart height (responsive units: rem, %, vh, or auto) */
  height?: string;
  /** Chart width (responsive units: rem, %, vw, or auto) */
  width?: string;
  /** Maximum width (responsive units) */
  maxWidth?: string;
  
  // ============================================================================
  // AXIS CONFIGURATION
  // ============================================================================
  
  /** Y-axis label (vertical text on left) */
  yAxisLabel?: string;
  /** X-axis label (horizontal text below) */
  xAxisLabel?: string;
  
  // ============================================================================
  // LEGEND
  // ============================================================================
  
  /** Show legend at bottom */
  showLegend?: boolean;
  /** Legend title */
  legendTitle?: string;
  /** Custom legend render function */
  customLegend?: (metrics: BarMetric[], activeMetrics: Set<string>, toggleMetric: (name: string) => void) => ReactNode;
  
  // ============================================================================
  // INFO ICON
  // ============================================================================
  
  /** Show info icon */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Info icon tooltip content */
  infoTooltipContent?: string;
  
  // ============================================================================
  // STATES
  // ============================================================================
  
  /** Loading state */
  isLoading?: boolean;
  /** Loading message */
  loadingMessage?: string;
  /** Empty state (no data) */
  isEmpty?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Error state */
  isInvalid?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /** Called when chart loads successfully */
  onLoad?: () => void;
  /** Called when chart encounters an error */
  onError?: (error: Error) => void;
  /** Called when a bar is clicked */
  onBarClick?: (data: BarChartData, index: number) => void;
  /** Called when a bar is hovered */
  onBarHover?: (data: BarChartData, index: number) => void;
  /** Called when legend item is clicked */
  onLegendClick?: (metricName: string, isActive: boolean) => void;
  
  // ============================================================================
  // CUSTOMIZATION SLOTS
  // ============================================================================
  
  /** Custom header render function */
  customHeader?: (title?: ReactNode) => ReactNode;
  /** Custom tooltip render function */
  customTooltip?: (data: BarChartData) => ReactNode;
  /** Custom empty state render function */
  customEmptyState?: () => ReactNode;
  /** Custom loading state render function */
  customLoadingState?: () => ReactNode;
  /** Custom error state render function */
  customErrorState?: (error?: string) => ReactNode;
  
  // ============================================================================
  // POLYMORPHISM & STYLING
  // ============================================================================
  
  /** Render as different element */
  as?: ElementType;
  /** Custom className for root container */
  className?: string;
  /** Custom inline styles for root container */
  style?: CSSProperties;
  /** Custom className for chart content area */
  chartClassName?: string;
  /** Custom className for header */
  headerClassName?: string;
  /** Custom className for legend */
  legendClassName?: string;
}
