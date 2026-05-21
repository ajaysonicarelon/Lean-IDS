/**
 * Tooltip component types
 */

export type TooltipVariant = 'default' | 'pointer';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Whether the tooltip is visible */
  visible?: boolean;
  /** Tooltip heading (main text) */
  heading?: string;
  /** Tooltip description (secondary text) */
  description?: string;
  /** X position in pixels (screen coordinates) */
  x?: number;
  /** Y position in pixels (screen coordinates) */
  y?: number;
  /** Tooltip variant - 'default' (rectangular) or 'pointer' (with triangle) */
  variant?: TooltipVariant;
  /** Position of the pointer triangle (only for 'pointer' variant) */
  pointerPosition?: TooltipPosition;
  /** Custom className */
  className?: string;
}
