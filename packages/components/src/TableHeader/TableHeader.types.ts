export type SortDirection = 'asc' | 'desc' | 'none';

export type TableHeaderVariant = 'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search';

export type TableHeaderSide = 'left' | 'middle' | 'right';

export interface TableHeaderProps {
  label: string;
  variant?: TableHeaderVariant;
  side?: TableHeaderSide;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
  showCheckbox?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onCheckChange?: (checked: boolean) => void;
  
  // Locked column feature
  locked?: boolean;
  onLockToggle?: () => void;
  leftOffset?: number;
  isChildColumn?: boolean; // Hide lock icon for child columns
  
  // Resizable column feature
  resizable?: boolean;
  onResize?: (width: number) => void;
  
  // Search feature
  searchable?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  className?: string;
  
  // Sub-header feature (for nested columns)
  subHeader?: string;
  subHeaderSpan?: number;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  
  // Table structure
  colSpan?: number;
  rowSpan?: number;
}
