export interface FilterAction {
  icon: React.ReactNode;
  onClick: () => void;
  title?: string;
}

export interface TableSubHeaderProps {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  locked?: boolean;
  leftOffset?: number;
  width?: string | number;
  className?: string;
  
  // Filter action buttons
  showClearFilter?: boolean;
  onClearFilter?: () => void;
  showAdvancedFilter?: boolean;
  onAdvancedFilter?: () => void;
  customActions?: FilterAction[];
}
