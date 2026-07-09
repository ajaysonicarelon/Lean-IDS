export interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
  locked: boolean;
  order: number;
  filterable?: boolean; // Whether column can have filter (default: true)
  width?: string | number; // Custom column width (e.g., '150px', '20%', 200)
  subColumns?: ColumnConfig[];
  parentId?: string;
}

export interface TableSettingsProps {
  /**
   * Whether the settings modal is open
   */
  isOpen: boolean;
  
  /**
   * Callback when modal is closed
   */
  onClose: () => void;
  
  /**
   * Array of column configurations
   */
  columns: ColumnConfig[];
  
  /**
   * Callback when columns are updated
   */
  onColumnsChange: (columns: ColumnConfig[]) => void;
  
  /**
   * Whether to show lock warning
   */
  lockWarning?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}
