/**
 * Type definitions for Table component
 */

import React from 'react';

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

export interface TableProps {
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
  /** Loading state */
  loading?: boolean;
  /** Custom className */
  className?: string;
  /** Show side panel for column/filter controls (alternative to modal settings) */
  showSidePanel?: boolean;
  /** Show column search bars in sub-header */
  showColumnFilters?: boolean;
}
