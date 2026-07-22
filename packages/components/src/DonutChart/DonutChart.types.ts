/**
 * DonutChart component types
 */

export interface DonutChartData {
  /** Metric label */
  label: string;
  /** Metric value */
  value: number;
  /** Color for this segment */
  color: string;
}

export interface DonutChartProps {
  /** Chart title */
  title?: string;
  /** Show info icon next to title */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Info icon tooltip content */
  infoTooltipContent?: string;
  /** Array of data points (2-6 metrics recommended) */
  data: DonutChartData[];
  /** Center KPI value to display */
  centerValue?: string;
  /** Show center value */
  showCenterValue?: boolean;
  /** Layout orientation */
  layout?: 'vertical' | 'horizontal';
  /** Chart size (diameter in pixels) */
  size?: number;
  /** Legend click handler (for custom toggle behavior) */
  onLegendClick?: (index: number) => void;
  /** Custom className */
  className?: string;
}
