import { ReactNode } from 'react';
import { ColumnConfig } from '../TableSettings';

export interface ColumnFilter {
  columnId: string;
  value: string;
}

export interface CustomTabConfig {
  id: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  content?: ReactNode;
}

export interface TableSidePanelProps {
  columns: ColumnConfig[];
  onColumnsChange: (columns: ColumnConfig[]) => void;
  onFilterToggle?: () => void;
  showFilters?: boolean;
  lockWarning?: boolean;
  className?: string;
  tableData?: any[];
  columnFilters?: ColumnFilter[];
  onFiltersChange?: (filters: ColumnFilter[]) => void;
  customTabs?: CustomTabConfig[];
  onClose?: () => void;
}
