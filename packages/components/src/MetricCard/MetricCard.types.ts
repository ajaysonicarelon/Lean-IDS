/**
 * MetricCard component types
 */

export interface MetricData {
  /** Metric label */
  label: string;
  /** Metric value (can be number or formatted string) */
  value: string | number;
  /** Highlight this metric */
  highlighted?: boolean;
}

export interface MetricCardProps {
  /** Card variant */
  variant?: 'basic' | 'filled' | 'set';
  /** Metric name/label */
  metricName?: string;
  /** Metric value */
  value?: string | number;
  /** Show change badge */
  showChange?: boolean;
  /** Change value (e.g., "+56" or "-12") */
  changeValue?: string;
  /** Change type for badge color */
  changeType?: 'positive' | 'negative' | 'neutral';
  /** Comparison text (e.g., "vs last week") */
  comparisonText?: string;
  /** Show progress bar */
  showProgressBar?: boolean;
  /** Progress percentage (0-100) */
  progressValue?: number;
  /** Show action chip */
  showActionChip?: boolean;
  /** Action chip text */
  actionText?: string;
  /** Action chip type */
  actionType?: 'warning' | 'error' | 'info';
  /** Action chip click handler */
  onActionClick?: () => void;
  /** Section heading (for "set" variant) */
  sectionHeading?: string;
  /** Show info icon next to heading */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Show dropdown (for "set" variant) */
  showDropdown?: boolean;
  /** Dropdown value */
  dropdownValue?: string;
  /** Dropdown change handler */
  onDropdownChange?: () => void;
  /** Array of metrics (for "set" variant) */
  metrics?: MetricData[];
  /** Custom className */
  className?: string;
}
