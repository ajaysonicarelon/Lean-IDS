export type SortDirection = 'asc' | 'desc' | 'none';

export interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
  showCheckbox?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onCheckChange?: (checked: boolean) => void;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  className?: string;
}
