import { ColumnConfig } from '../TableSettings';

export interface ColumnFilter {
  columnId: string;
  value: string;
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
}
