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
}
