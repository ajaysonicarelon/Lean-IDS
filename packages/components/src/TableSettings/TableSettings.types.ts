export interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
  locked: boolean; // Deprecated: use 'pinned' instead. Kept for backward compatibility (locked: true = pinned: 'left')
  pinned?: 'left' | 'right' | 'none'; // Column pinning: 'left' (freeze to left), 'right' (freeze to right), 'none' (scrollable)
  order: number;
  filterable?: boolean; // Whether column can have filter (default: true)
  width?: string | number; // Custom column width (e.g., '150px', '20%', 200)
  minWidth?: number; // Minimum width constraint in pixels
  maxWidth?: number; // Maximum width constraint in pixels
  resizable?: boolean; // Enable column resizing by dragging column border
  subColumns?: ColumnConfig[];
  parentId?: string;
  render?: (value: any, row: any, rowIndex?: number) => React.ReactNode; // Custom cell renderer function. Receives cell value, full row data, and optional row index. Matches TableColumn.renderCell signature.
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
