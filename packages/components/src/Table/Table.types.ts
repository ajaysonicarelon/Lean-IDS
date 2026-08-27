/**
 * Type definitions for Table component
 */

import React, { ElementType } from 'react';

/**
 * Column configuration for Table component
 */
export interface TableColumn {
  /** Unique identifier for the column */
  id: string;
  /** Display label for column header */
  label: string;
  /** Data accessor - property name or function to extract value from row */
  accessor?: string | ((row: any) => any);
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Enable search/filter for this column */
  searchable?: boolean;
  /** Enable column resizing by dragging column border */
  resizable?: boolean;
  /** Initial/preferred column width in pixels */
  width?: number;
  /** Minimum width constraint - prevents resizing below this value */
  minWidth?: number;
  /** Maximum width constraint - prevents resizing above this value */
  maxWidth?: number;
  /** Initial visibility state (default: true) */
  visible?: boolean;
  /** 
   * Lock column to left side (sticky). Basic Table only.
   * For Advanced Table, use `pinned` instead for left/right pinning.
   */
  locked?: boolean;
  /** 
   * Pin column to left or right side (sticky). Advanced Table only.
   * - 'left': Pin to left side
   * - 'right': Pin to right side
   * - 'none': Not pinned (default)
   * Takes precedence over `locked` if both are set.
   * Controlled by `enableDevPinning` prop.
   */
  pinned?: 'left' | 'right' | 'none';
  /** Display order for column (used in column reordering). Advanced Table only. */
  order?: number;
  /** 
   * Custom cell renderer function.
   * @param value - The cell value (extracted using accessor or column.id)
   * @param row - The complete row data object
   * @param rowIndex - The row index (0-based)
   * @returns React node to render in the cell
   * @example
   * renderCell: (value, row, rowIndex) => (
   *   <Chip label={value} type="success" />
   * )
   */
  renderCell?: (value: any, row: any, rowIndex: number) => React.ReactNode;
  /** Sub-columns for nested/grouped column headers (Advanced Table only) */
  subColumns?: TableColumn[];
}

export interface TableAction {
  icon: string;
  label: string;
  onClick: (row: any) => void;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Polymorphic component type (default: 'div') */
  as?: ElementType;
  /** Array of data objects to display */
  data: any[];
  /** Column configuration */
  columns: TableColumn[];
  /** Enable row selection */
  selectable?: boolean;
  /** Enable pagination */
  paginated?: boolean;
  /** Items per page (default: 10) */
  itemsPerPage?: number;
  /** Pagination mode: 'client' (default) or 'server'. When 'server', use onPageChange callback */
  paginationMode?: 'client' | 'server';
  /** Callback for page change (server-side pagination). Called with (page, itemsPerPage) */
  onPageChange?: (page: number, itemsPerPage: number) => void;
  /** Current page (controlled, for server-side pagination) */
  currentPage?: number;
  /** Total number of items (required for server-side pagination) */
  totalItems?: number;
  /** Enable column settings */
  showSettings?: boolean;
  /** Enable actions column */
  showActions?: boolean;
  /** Custom actions for each row */
  actions?: TableAction[];
  /** Callback when rows are selected */
  onRowSelect?: (selectedIds: string[]) => void;
  /** Callback when row action is triggered */
  onRowAction?: (action: string, row: any) => void;
  /** Callback when a row is clicked */
  onRowClick?: (row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void;
  /** Custom row key accessor (default: 'id') */
  rowKey?: string;
  /** Custom empty state message */
  emptyMessage?: string;
  /** Empty state icon name (Material Icons) */
  emptyIcon?: string;
  /** Empty state title */
  emptyTitle?: string;
  /** Empty state description */
  emptyDescription?: string;
  /** Empty state action button label */
  emptyActionLabel?: string;
  /** Empty state action button handler */
  onEmptyAction?: () => void;
  /** Loading state */
  loading?: boolean;
  /** Custom className */
  className?: string;
  /** Show side panel for column/filter controls (alternative to modal settings) */
  showSidePanel?: boolean;
  /** Show column search bars in sub-header */
  showColumnFilters?: boolean;
  /** Custom toolbar content - when provided, renders instead of default toolbar */
  toolbar?: React.ReactNode;
  /** Table title (used in default toolbar) */
  title?: string;
  /** Table description (used in default toolbar) */
  description?: string;
  /** Show default toolbar */
  showToolbar?: boolean;
  /** Enable column header menu (three-dot menu with sort, pin, autosize options) */
  showColumnMenu?: boolean;
  /** Allow users to pin columns to the left via menu */
  allowUserLeftPin?: boolean;
  /** Allow users to pin columns to the right via menu */
  allowUserRightPin?: boolean;
  /** Allow developers to set initial left-pinned columns */
  allowDevLeftPin?: boolean;
  /** Allow developers to set initial right-pinned columns */
  allowDevRightPin?: boolean;
  /** Show global search in default toolbar */
  showGlobalSearch?: boolean;
  /** Show filter button in default toolbar */
  showFilter?: boolean;
  /** Show download button in default toolbar */
  showDownload?: boolean;
  /** Download handler */
  onDownload?: () => void;
  /** Sorting mode: 'client' (default) or 'server'. When 'server', use onSort callback to handle sorting */
  sortMode?: 'client' | 'server';
  /** Callback when sort changes (only used when sortMode='server') */
  onSort?: (columnId: string, direction: 'asc' | 'desc' | 'none') => void;
  /** Controlled sort column (only used when sortMode='server') */
  sortColumn?: string;
  /** Controlled sort direction (only used when sortMode='server') */
  sortDirection?: 'asc' | 'desc' | 'none';
  /** Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh' */
  maxHeight?: string;
  /** Invalid/error state */
  isInvalid?: boolean;
  /** Error message to display when isInvalid is true */
  errorMessage?: string;
  /** Override className for scroll container */
  scrollContainerClassName?: string;
  /** Override style for scroll container */
  scrollContainerStyle?: React.CSSProperties;
  /** Override className for empty state */
  emptyStateClassName?: string;
  /** Override style for empty state */
  emptyStateStyle?: React.CSSProperties;
}
