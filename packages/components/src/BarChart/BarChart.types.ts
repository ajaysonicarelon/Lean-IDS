/**
 * BarChart component types
 */

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

export interface BarChartProps {
  /** Chart title */
  title?: string;
  /** Array of bar data */
  data: BarChartData[];
  /** Chart orientation */
  orientation?: BarChartOrientation;
  /** Show value labels on bars */
  showValues?: boolean;
  /** Show grid lines (dotted) */
  showGrid?: boolean;
  /** Chart height in pixels */
  height?: number;
  /** Chart width in pixels */
  width?: number;
  /** Y-axis label (vertical text on left) */
  yAxisLabel?: string;
  /** X-axis label (horizontal text below) */
  xAxisLabel?: string;
  /** Show legend at bottom */
  showLegend?: boolean;
  /** Legend title */
  legendTitle?: string;
  /** Show info icon */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Info icon tooltip content */
  infoTooltipContent?: string;
  /** Custom className */
  className?: string;
}
