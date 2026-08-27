export interface FilterAction {
  icon: React.ReactNode;
  onClick: () => void;
  title?: string;
}

export interface TableSubHeaderProps {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  locked?: boolean; // Deprecated - use 'pinned' instead
  pinned?: 'left' | 'right' | 'none'; // Column pinning direction
  leftOffset?: number;
  rightOffset?: number; // Offset from right edge for right-pinned columns
  width?: string | number;
  className?: string;
  showPinBorder?: boolean; // Show border on last left-pinned or first right-pinned column;
  
  // Filter action buttons
  showClearFilter?: boolean;
  onClearFilter?: () => void;
  showAdvancedFilter?: boolean;
  onAdvancedFilter?: () => void;
  customActions?: FilterAction[];
}
