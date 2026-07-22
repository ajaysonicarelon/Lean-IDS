/**
 * Type definitions for Table component
 */

import React, { ElementType } from 'react';

export interface TableColumn {
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  searchable?: boolean;
  resizable?: boolean;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  visible?: boolean;
  locked?: boolean;
  renderCell?: (value: any, row: any, rowIndex: number) => React.ReactNode;
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
