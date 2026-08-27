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
  onSortNone?: () => void;
  showCheckbox?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onCheckChange?: (checked: boolean) => void;
  
  // Locked column feature (deprecated - use 'pinned' instead)
  locked?: boolean;
  onPinChange?: (pinState: 'none' | 'left' | 'right') => void; // Set specific pin state
  onAutosizeColumn?: () => void; // Autosize this column to fit content
  onAutosizeAll?: () => void; // Autosize all columns
  onResetColumn?: () => void; // Reset column to original state
  showColumnMenu?: boolean; // Show/hide three-dot column menu (default: true for Advanced Table, false for Basic Table)
  enableUserPinning?: boolean; // Allow users to pin columns via menu (default: true)
  leftOffset?: number;
  rightOffset?: number; // Offset from right edge for right-pinned columns
  pinned?: 'left' | 'right' | 'none'; // Column pinning direction
  isChildColumn?: boolean; // Hide lock/pin icon for child columns
  hasSubColumns?: boolean;
  showPinBorder?: boolean; // Show border on last left-pinned or first right-pinned column
  
  // Resizable column feature
  resizable?: boolean;
  onResize?: (width: number) => void;
  initialWidth?: number; // Original width to reset to on double-click
  
  // Search feature
  searchable?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
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
