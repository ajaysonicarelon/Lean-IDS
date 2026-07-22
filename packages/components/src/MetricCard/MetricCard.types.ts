/**
 * MetricCard component types
 */

import { HTMLAttributes, ReactNode, ElementType, CSSProperties } from 'react';

/** Single metric data point */
export interface MetricData {
  /** Metric label */
  label: string;
  /** Metric value (can be number or formatted string) */
  value: string | number;
  /** Highlight this metric */
  highlighted?: boolean;
}

export type MetricCardVariant = 'basic' | 'filled' | 'set';
export type ChangeType = 'positive' | 'negative' | 'neutral';
export type ActionType = 'warning' | 'error' | 'info' | 'success';

export interface MetricCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onError'> {
  // ============================================================================
  // CORE PROPS
  // ============================================================================
  
  /** Card variant */
  variant?: MetricCardVariant;
  /** Metric name/label */
  metricName?: ReactNode;
  /** Metric value */
  value?: string | number;
  
  // ============================================================================
  // CHANGE INDICATOR
  // ============================================================================
  
  /** Show change badge */
  showChange?: boolean;
  /** Change value (e.g., "+56" or "-12") */
  changeValue?: string;
  /** Change type for badge color */
  changeType?: ChangeType;
  /** Comparison text (e.g., "vs last week") */
  comparisonText?: string;
  
  // ============================================================================
  // PROGRESS BAR
  // ============================================================================
  
  /** Show progress bar */
  showProgressBar?: boolean;
  /** Progress percentage (0-100) */
  progressValue?: number;
  /** Progress bar color */
  progressColor?: string;
  
  // ============================================================================
  // ACTION CHIP
  // ============================================================================
  
  /** Show action chip */
  showActionChip?: boolean;
  /** Action chip text */
  actionText?: string;
  /** Action chip type */
  actionType?: ActionType;
  /** Action chip click handler */
  onActionClick?: () => void;
  
  // ============================================================================
  // SET VARIANT (Multiple Metrics)
  // ============================================================================
  
  /** Section heading (for "set" variant) */
  sectionHeading?: ReactNode;
  /** Show info icon next to heading */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Show dropdown (for "set" variant) */
  showDropdown?: boolean;
  /** Dropdown value */
  dropdownValue?: string;
  /** Dropdown options */
  dropdownOptions?: Array<{ value: string; label: string }>;
  /** Dropdown change handler */
  onDropdownChange?: (value: string) => void;
  /** Array of metrics (for "set" variant) */
  metrics?: MetricData[];
  
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
  
  /** Called when card loads successfully */
  onLoad?: () => void;
  /** Called when card encounters an error */
  onError?: (error: Error) => void;
  /** Called when card is clicked */
  onCardClick?: () => void;
  /** Called when metric is clicked (for set variant) */
  onMetricClick?: (metric: MetricData, index: number) => void;
  
  // ============================================================================
  // CUSTOMIZATION SLOTS
  // ============================================================================
  
  /** Custom header render function */
  customHeader?: (heading?: ReactNode) => ReactNode;
  /** Custom value render function */
  customValue?: (value?: string | number) => ReactNode;
  /** Custom change badge render function */
  customChangeBadge?: (changeValue?: string, changeType?: ChangeType) => ReactNode;
  /** Custom progress bar render function */
  customProgressBar?: (progressValue?: number) => ReactNode;
  /** Custom action chip render function */
  customActionChip?: (actionText?: string, actionType?: ActionType) => ReactNode;
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
  /** Custom className for content area */
  contentClassName?: string;
  /** Custom className for header */
  headerClassName?: string;
  /** Custom className for metrics container (set variant) */
  metricsClassName?: string;
}
