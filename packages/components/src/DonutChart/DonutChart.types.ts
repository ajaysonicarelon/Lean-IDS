/**
 * DonutChart component types
 */

import { ElementType, ReactNode, CSSProperties, HTMLAttributes } from 'react';

/**
 * Data structure for each donut chart segment
 */
export interface DonutChartData {
  /** Metric label displayed in legend */
  label: string;
  /** Numeric value for this segment */
  value: number;
  /** Color for this segment (use theme tokens when possible) */
  color: string;
}

/**
 * DonutChart component props
 * 
 * Enterprise-grade donut chart with full customization, accessibility, and state management.
 * Supports 2-6 metrics with optional center KPI display.
 * 
 * @example
 * ```tsx
 * <DonutChart
 *   data={[
 *     { label: 'Product A', value: 60, color: theme.colors.palette.primary[400] },
 *     { label: 'Product B', value: 40, color: theme.colors.palette.terracotta[500] },
 *   ]}
 *   centerValue="$3m"
 *   layout="vertical"
 *   width="min(90vw, 37.5rem)"
 * />
 * ```
 */
export interface DonutChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /**
   * Render as a different HTML element or custom component
   * @default 'div'
   */
  as?: ElementType;
  
  // ============================================================================
  // LAYOUT & RESPONSIVENESS
  // ============================================================================
  
  /**
   * Custom width (supports px, rem, %, vw, min(), max())
   * @default 'auto'
   * @example '100%' | 'min(90vw, 37.5rem)' | '25rem'
   */
  width?: string;
  
  /**
   * Maximum width constraint
   * @example '600px' | '37.5rem'
   */
  maxWidth?: string;
  
  /**
   * Minimum width constraint
   * @example '200px' | '12.5rem'
   */
  minWidth?: string;
  
  // ============================================================================
  // DATA & CONTENT
  // ============================================================================
  
  /**
   * Chart title (use Typography component for custom rendering)
   */
  title?: ReactNode;
  
  /**
   * Array of data points (2-6 metrics recommended)
   */
  data: DonutChartData[];
  
  /**
   * Center KPI value to display
   * If autoCalculateCenterValue is true, this serves as a fallback when no segments are active
   * @example '$3m' | '85%' | '1,234'
   */
  centerValue?: string;
  
  /**
   * Show center value
   * @default true
   */
  showCenterValue?: boolean;
  
  /**
   * Automatically calculate and update center value based on active segments
   * When true, the center value will update when legends are toggled
   * @default false
   */
  autoCalculateCenterValue?: boolean;
  
  /**
   * Custom formatter for auto-calculated center value
   * Receives the sum of active segment values
   * @example (total) => `$${total.toFixed(1)}m`
   * @example (total) => `${Math.round(total)}%`
   * @default (total) => total.toString()
   */
  centerValueFormatter?: (total: number) => string;
  
  /**
   * Layout orientation
   * @default 'vertical'
   */
  layout?: 'vertical' | 'horizontal';
  
  /**
   * Chart size (diameter in pixels)
   * @default 196
   */
  size?: number;
  
  // ============================================================================
  // INFO ICON
  // ============================================================================
  
  /**
   * Show info icon next to title
   * @default false
   */
  showInfoIcon?: boolean;
  
  /**
   * Info icon click handler
   */
  onInfoClick?: () => void;
  
  /**
   * Info icon tooltip content
   */
  infoTooltipContent?: string;
  
  // ============================================================================
  // SLOTS & CUSTOMIZATION
  // ============================================================================
  
  /**
   * Custom header content (replaces default title + info icon)
   */
  customHeader?: ReactNode | ((props: { title?: ReactNode; showInfoIcon?: boolean }) => ReactNode);
  
  /**
   * Custom center content (replaces default center value)
   */
  customCenterContent?: ReactNode | ((props: { centerValue?: string }) => ReactNode);
  
  /**
   * Custom legend renderer
   */
  customLegend?: ReactNode | ((props: { data: DonutChartData[]; activeMetrics: Set<number>; onToggle: (index: number) => void }) => ReactNode);
  
  /**
   * Custom empty state content
   */
  emptyContent?: ReactNode;
  
  /**
   * Custom error state content
   */
  errorContent?: ReactNode;
  
  /**
   * Custom loading state content
   */
  loadingContent?: ReactNode;
  
  // ============================================================================
  // STATES
  // ============================================================================
  
  /**
   * Loading state - shows loading indicator
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Error state - shows error message
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Error message to display when isInvalid is true
   */
  errorMessage?: string;
  
  /**
   * Empty state - shows when data array is empty
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Empty state message
   * @default 'No data available'
   */
  emptyMessage?: string;
  
  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /**
   * Legend click handler (for custom toggle behavior)
   */
  onLegendClick?: (index: number) => void;
  
  /**
   * Segment hover handler
   */
  onSegmentHover?: (segment: DonutChartData, index: number) => void;
  
  /**
   * Segment click handler
   */
  onSegmentClick?: (segment: DonutChartData, index: number) => void;
  
  // ============================================================================
  // STYLING OVERRIDES
  // ============================================================================
  
  /**
   * Custom className for root container
   */
  className?: string;
  
  /**
   * Custom inline styles for root container
   */
  style?: CSSProperties;
  
  /**
   * Custom className for header section
   */
  headerClassName?: string;
  
  /**
   * Custom className for chart SVG container
   */
  chartClassName?: string;
  
  /**
   * Custom className for legends container
   */
  legendsClassName?: string;
  
  /**
   * Custom className for center value
   */
  centerValueClassName?: string;
}
