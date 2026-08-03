/**
 * ProgressBar component types
 * Enterprise-grade progress indicator for tracking completion status
 */

import { HTMLAttributes, ReactNode, ElementType, CSSProperties } from 'react';

/**
 * Size variants for the progress bar
 * - xsmall: 2px height, compact spaces
 * - small: 6px height, inline indicators
 * - medium: 8px height, standard use cases
 * - large: 12px height, prominent displays
 * - xlarge: 16px height, dashboard metrics
 */
export type ProgressBarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Type variants for semantic meaning
 * - default: Standard progress tracking (purple)
 * - success: Completed or successful operations (green)
 * - warning: Operations requiring attention (yellow)
 * - alert: Critical operations or errors (red)
 */
export type ProgressBarType = 'default' | 'success' | 'warning' | 'alert';

/**
 * Props for the ProgressBar component
 */
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Current progress value (0-100)
   * @required
   */
  value: number;

  /**
   * Polymorphic prop - render as different element
   * @default 'div'
   */
  as?: ElementType;

  /**
   * Size variant
   * @default 'medium'
   */
  size?: ProgressBarSize;

  /**
   * Type variant for semantic meaning
   * @default 'default'
   */
  type?: ProgressBarType;

  /**
   * Optional label text displayed above the progress bar
   */
  label?: string;

  /**
   * Whether to show the percentage value
   * @default true for medium/large/xlarge, false for xsmall/small
   */
  showPercentage?: boolean;

  /**
   * Custom percentage formatter
   * @default (value) => `${Math.round(value)}%`
   */
  formatPercentage?: (value: number) => string;

  /**
   * Whether the progress bar is in loading state
   * Shows animated indeterminate state
   */
  isLoading?: boolean;

  /**
   * Whether the progress bar is disabled
   * Reduces opacity and prevents interaction
   */
  disabled?: boolean;

  /**
   * Whether the progress bar is in error state
   */
  isInvalid?: boolean;

  /**
   * Error message to display when isInvalid is true
   */
  errorMessage?: string;

  /**
   * Custom content to render in the label area
   * Overrides default label and percentage display
   */
  customLabel?: ReactNode | ((props: { value: number; label?: string }) => ReactNode);

  /**
   * Callback fired when progress value changes
   */
  onChange?: (value: number) => void;

  /**
   * Callback fired when progress reaches 100%
   */
  onComplete?: () => void;

  /**
   * Additional className for the container
   */
  className?: string;

  /**
   * Additional styles for the container
   */
  style?: CSSProperties;

  /**
   * Additional className for the track (background bar)
   */
  trackClassName?: string;

  /**
   * Additional className for the fill (progress indicator)
   */
  fillClassName?: string;

  /**
   * Additional className for the label container
   */
  labelClassName?: string;

  /**
   * ARIA label for accessibility
   * @default label or 'Progress'
   */
  'aria-label'?: string;

  /**
   * ARIA description for additional context
   */
  'aria-describedby'?: string;

  /**
   * Minimum value for progress
   * @default 0
   */
  min?: number;

  /**
   * Maximum value for progress
   * @default 100
   */
  max?: number;
}

/**
 * Internal styled component props
 */
export interface StyledProgressBarProps {
  $size: ProgressBarSize;
  $type: ProgressBarType;
  $disabled?: boolean;
  $isInvalid?: boolean;
  $isLoading?: boolean;
}

export interface StyledProgressFillProps extends StyledProgressBarProps {
  $value: number;
}
