/**
 * ChartTooltip component types
 */

export interface ChartTooltipProps {
  /** Whether the tooltip is visible */
  visible?: boolean;
  /** Tooltip heading (metric name) */
  heading?: string;
  /** Tooltip description (metric value) */
  description?: string;
  /** X position in pixels */
  x?: number;
  /** Y position in pixels */
  y?: number;
  /** Custom className */
  className?: string;
}
