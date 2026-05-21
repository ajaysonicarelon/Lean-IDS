/**
 * ChartLegend component types
 */

export interface ChartLegendProps {
  /** Color for the indicator dot */
  color: string;
  /** Metric label text */
  label: string;
  /** Whether the legend item is active (affects opacity) */
  active?: boolean;
  /** Click handler for toggling metric visibility */
  onClick?: () => void;
  /** Custom className */
  className?: string;
}
