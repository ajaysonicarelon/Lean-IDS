export interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
  locked: boolean;
  order: number;
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
