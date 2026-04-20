export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface IconProps {
  /**
   * Material icon name (e.g., 'Home', 'Settings', 'ArrowDropDown')
   */
  name: string;
  
  /**
   * Icon size
   * @default 'medium'
   */
  size?: IconSize;
  
  /**
   * Icon color - uses theme colors or any CSS color
   */
  color?: string;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  
  /**
   * Additional props to pass to the MUI Icon component
   */
  [key: string]: any;
}

/**
 * Commonly used Material Design Icons in the design system
 */
export const COMMON_ICONS = {
  // Navigation
  ArrowBack: 'ArrowBack',
  ArrowForward: 'ArrowForward',
  ArrowDropDown: 'ArrowDropDown',
  ArrowDropUp: 'ArrowDropUp',
  ChevronLeft: 'ChevronLeft',
  ChevronRight: 'ChevronRight',
  FirstPage: 'FirstPage',
  LastPage: 'LastPage',
  Menu: 'Menu',
  Close: 'Close',
  
  // Actions
  Add: 'Add',
  Remove: 'Remove',
  Edit: 'Edit',
  Delete: 'Delete',
  Save: 'Save',
  Cancel: 'Cancel',
  Check: 'Check',
  Clear: 'Clear',
  Search: 'Search',
  FilterAlt: 'FilterAlt',
  Download: 'Download',
  Upload: 'Upload',
  Settings: 'Settings',
  MoreVert: 'MoreVert',
  MoreHoriz: 'MoreHoriz',
  
  // Content
  ContentCopy: 'ContentCopy',
  ContentPaste: 'ContentPaste',
  ContentCut: 'ContentCut',
  Visibility: 'Visibility',
  VisibilityOff: 'VisibilityOff',
  Lock: 'Lock',
  LockOpen: 'LockOpen',
  
  // Status
  Info: 'Info',
  Warning: 'Warning',
  Error: 'Error',
  CheckCircle: 'CheckCircle',
  Cancel: 'Cancel',
  
  // UI Elements
  DragIndicator: 'DragIndicator',
  UnfoldMore: 'UnfoldMore',
  Refresh: 'Refresh',
  Sync: 'Sync',
  
  // Table specific
  Sort: 'Sort',
  SortByAlpha: 'SortByAlpha',
  ViewColumn: 'ViewColumn',
  TableRows: 'TableRows',
} as const;
