import { ColumnConfig } from '../TableSettings';

export interface TableSidePanelProps {
  columns: ColumnConfig[];
  onColumnsChange: (columns: ColumnConfig[]) => void;
  onFilterToggle?: () => void;
  showFilters?: boolean;
  lockWarning?: boolean;
  className?: string;
}
