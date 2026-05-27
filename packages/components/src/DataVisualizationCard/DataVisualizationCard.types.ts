export interface DataVisualizationCardProps {
  /** Title of the visualization */
  title?: string;
  
  /** Show info icon next to title */
  showInfoIcon?: boolean;
  
  /** Callback when info icon is clicked */
  onInfoClick?: () => void;
  
  /** Tooltip content for info icon */
  infoTooltipContent?: string;
  
  /** Show time range selector */
  showTimeRange?: boolean;
  
  /** Currently selected time range value */
  timeRangeValue?: string;
  
  /** Callback when time range changes */
  onTimeRangeChange?: (value: string) => void;
  
  /** Callback when custom date range is selected */
  onCustomDateRange?: (fromDate: string, toDate: string) => void;
  
  /** Chart content to display */
  children: React.ReactNode;
  
  /** Height of the visualization area */
  height?: string | number;
  
  /** Additional CSS class */
  className?: string;
}

export type TimeRangeOption = 
  | 'Last 7 days'
  | 'Last 30 days'
  | 'Last 6 months'
  | 'Last 365 days'
  | 'Custom range';
