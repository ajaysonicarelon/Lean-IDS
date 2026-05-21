/**
 * DataVisualizationCard component types
 */

export interface DataVisualizationCardProps {
  /** Title of the visualization */
  title?: string;
  /** Show info icon next to title */
  showInfoIcon?: boolean;
  /** Info icon click handler */
  onInfoClick?: () => void;
  /** Tooltip content to show on info icon hover */
  infoTooltipContent?: string;
  /** Show dropdown for time period/filter selection */
  showDropdown?: boolean;
  /** Dropdown value */
  dropdownValue?: string;
  /** Dropdown options */
  dropdownOptions?: string[];
  /** Dropdown change handler */
  onDropdownChange?: (value: string) => void;
  /** Visualization content (chart, graph, etc.) */
  children: React.ReactNode;
  /** Custom height for visualization area */
  height?: string | number;
  /** Custom className */
  className?: string;
}
