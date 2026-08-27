/**
 * Table Component - Complete Data Table with All Features
 * 
 * A production-ready table component with:
 * - Column freezing (max 3 columns)
 * - Sorting (ascending, descending, none)
 * - Row selection (single and bulk)
 * - Column search
 * - Pagination
 * - Column visibility toggle
 * - Column reordering (drag & drop)
 * - Resizable columns
 * - Customizable data and columns
 * 
 * @example
 * ```tsx
 * <Table
 *   data={myData}
 *   columns={myColumns}
 *   onRowSelect={(selectedIds) => {}}
 *   onRowAction={(action, rowId) => {}}
 * />
 * ```
 */

import React, { useState, useEffect, useMemo, useLayoutEffect, useRef, forwardRef, ElementType } from 'react';
import styled from 'styled-components';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { Button } from '../Button';
import ErrorIcon from '@mui/icons-material/Error';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from '../Checkbox';
import { TableSettings, ColumnConfig } from '../TableSettings';
import { TableToolbar } from './TableToolbar';
import { Typography } from '../Typography';
import { TableGroupHeader } from './TableGroupHeader';
import { TableGroup, TableGroupConfig } from './types';

// ============================================================================
// TYPES
// ============================================================================

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
  actions?: Array<{
    icon: string;
    label: string;
    onClick: (row: any) => void;
  }>;
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
  /** Custom toolbar content - when provided, renders instead of default toolbar */
  toolbar?: React.ReactNode;
  /** Table title */
  title?: string;
  /** Table description */
  description?: string;
  /** Show toolbar */
  showToolbar?: boolean;
  /** Show global search in toolbar */
  showGlobalSearch?: boolean;
  /** Show filter button in toolbar */
  showFilter?: boolean;
  /** Show download button in toolbar */
  showDownload?: boolean;
  /** Download handler */
  onDownload?: () => void;
  /** Sorting mode: 'client' (default) or 'server' */
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
  /** Grouped data - when provided, data prop is ignored */
  groups?: TableGroup[];
  /** Group configuration */
  groupConfig?: TableGroupConfig;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;
`;

const ScrollContainer = styled.div<{ $maxHeight?: string }>`
  overflow-x: auto;
  overflow-y: auto;
  width: min-content; /* Allow table to use natural width based on column widths */
  min-width: 100%; /* But don't shrink below container width */
  max-height: ${({ $maxHeight }) => $maxHeight || 'calc(100vh - 300px)'};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  
  /* Always show scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.palette.neutral[100]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.palette.neutral[400]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[500]};
  }
`;

const StyledTable = styled.table<{ $hasMaxHeight?: boolean }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  
  ${({ $hasMaxHeight }) => $hasMaxHeight && `
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[24]};
  min-height: min(25rem, 50vh);
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
`;

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: min(18.75rem, 90%);
`;

const EmptyStateIconWrapper = styled.div`
  width: ${({ theme }) => theme.spacing[20]};
  height: ${({ theme }) => theme.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const EmptyStateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

// Removed custom styled text components - using Typography component instead

const SkeletonRow = styled.tr``;

const AnimatedTableRow = styled.tr<{ $animationDelay: number }>`
  /* Keyframe animation disabled - using FLIP animation instead */
`;

const SkeletonCell = styled.td`
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[200]};
`;

const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '1rem'};
  background: ${({ theme }) => theme.colors.palette.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.palette.neutral[100]} 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[100]};
    color: ${({ theme }) => theme.colors.palette.primary[600]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.palette.neutral[200]};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.palette.primary[400]};
    outline-offset: 2px;
  }

  svg {
    font-size: 20px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const Table = forwardRef<HTMLDivElement, TableProps>(({  as: Component = 'div',
  data = [],
  columns = [],
  selectable = false,
  paginated = true,
  itemsPerPage: initialItemsPerPage = 10,
  paginationMode = 'client',
  onPageChange,
  currentPage: controlledCurrentPage,
  totalItems: propTotalItems,
  showSettings = true,
  showActions = false,
  actions = [],
  onRowSelect,
  onRowAction,
  onRowClick,
  rowKey = 'id',
  emptyMessage = 'No data available',
  emptyIcon = 'CloudOff',
  emptyTitle = 'No data available',
  emptyDescription = 'There are no items to display',
  emptyActionLabel,
  onEmptyAction,
  loading = false,
  className,
  toolbar,
  title,
  description,
  showToolbar = true,
  showGlobalSearch = false,
  showFilter = true,
  showDownload = true,
  onDownload,
  sortMode = 'client',
  onSort,
  sortColumn: controlledSortColumn,
  sortDirection: controlledSortDirection,
  maxHeight,
  isInvalid = false,
  errorMessage,
  scrollContainerClassName,
  scrollContainerStyle,
  emptyStateClassName,
  emptyStateStyle,
  groups,
  groupConfig,
  style,
  ...restProps
}, ref) => {
  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================

  // Map icon name string to Material Icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType } = {
      'Edit': EditIcon,
      'Delete': DeleteIcon,
      'Visibility': VisibilityIcon,
      'View': VisibilityIcon,
      'MoreVert': MoreVertIcon,
      'More': MoreVertIcon,
    };
    return iconMap[iconName] || MoreVertIcon;
  };

  // ============================================================================
  // STATE
  // ============================================================================

  // Pagination state - controlled/uncontrolled pattern
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  
  // Use controlled values if provided (server mode), otherwise use internal state (client mode)
  const currentPage = controlledCurrentPage !== undefined ? controlledCurrentPage : internalCurrentPage;
  
  // Sorting state - controlled/uncontrolled pattern
  const [internalSortColumn, setInternalSortColumn] = useState<string>('');
  const [internalSortDirection, setInternalSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
  
  // Use controlled props in server mode, internal state in client mode
  const sortColumn = sortMode === 'server' ? (controlledSortColumn || '') : internalSortColumn;
  const sortDirection = sortMode === 'server' ? (controlledSortDirection || 'none') : internalSortDirection;
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
  const [lockWarning, setLockWarning] = useState(false);
  const [animateSorting, setAnimateSorting] = useState(false);
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({});
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>(() => {
    // Initialize with column widths from props, respecting min/max constraints
    const initialWidths: { [key: string]: number } = {};
    columns.forEach(col => {
      if (col.width) {
        let width = typeof col.width === 'number' ? col.width : parseInt(col.width, 10);
        
        // Clamp to minWidth and maxWidth if provided
        const minWidth = col.minWidth ? (typeof col.minWidth === 'number' ? col.minWidth : parseInt(col.minWidth, 10)) : 0;
        const maxWidth = col.maxWidth ? (typeof col.maxWidth === 'number' ? col.maxWidth : parseInt(col.maxWidth, 10)) : Infinity;
        
        const clampedWidth = Math.max(minWidth, Math.min(maxWidth, width));
        initialWidths[col.id] = clampedWidth;
      }
    });
    return initialWidths;
  });
  
  // Group expand/collapse state
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
    if (!groups) return new Set();
    // Initialize with groups that have defaultExpanded=true
    return new Set(groups.filter(g => g.defaultExpanded !== false).map(g => g.id));
  });
  
  // FLIP animation refs
  const rowPositionsRef = useRef<Map<string, number>>(new Map());
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const isAnimatingRef = useRef(false);

  // Initialize column configs
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>(() => {
    const configs: ColumnConfig[] = [];
    
    if (selectable) {
      configs.push({ id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 });
    }

    columns.forEach((col, index) => {
      configs.push({
        id: col.id,
        label: col.label,
        visible: col.visible !== false,
        locked: col.locked || false,
        order: selectable ? index + 1 : index,
      });
    });

    if (showActions) {
      configs.push({
        id: 'actions',
        label: 'Actions',
        visible: true,
        locked: false,
        order: configs.length,
      });
    }

    return configs;
  });

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleColumnLock = (columnId: string, locked: boolean) => {
    const currentLockedCount = columnConfigs.filter(
      col => col.locked && col.id !== 'checkbox'
    ).length;

    if (locked && currentLockedCount >= 3) {
      setLockWarning(true);
      setTimeout(() => setLockWarning(false), 3000);
      return;
    }

    const updatedConfigs = columnConfigs.map(col =>
      col.id === columnId ? { ...col, locked } : col
    );

    const sortedConfigs = updatedConfigs.sort((a, b) => {
      if (a.id === 'checkbox') return -1;
      if (b.id === 'checkbox') return 1;
      if (a.locked && !b.locked) return -1;
      if (!a.locked && b.locked) return 1;
      return a.order - b.order;
    });

    const reorderedConfigs = sortedConfigs.map((col, index) => ({
      ...col,
      order: index,
    }));

    setColumnConfigs(reorderedConfigs);
  };

  const handleSort = (columnId: string) => {
    // CAPTURE positions BEFORE sorting for CLIENT-SIDE mode
    if (sortMode === 'client' && tbodyRef.current) {
      const rows = Array.from(tbodyRef.current.querySelectorAll('tr')) as HTMLElement[];
      // Capture current positions (don't clear - keep positions of rows not currently visible)
      rows.forEach((row, index) => {
        const rowId = paginatedData[index]?.[rowKey];
        if (rowId) {
          const position = row.getBoundingClientRect().top;
          rowPositionsRef.current.set(rowId, position);
        }
      });
    }

    let newDirection: 'asc' | 'desc' | 'none';
    
    if (sortColumn === columnId) {
      newDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc';
    } else {
      newDirection = 'asc';
    }

    if (sortMode === 'server' && onSort) {
      // Server-side sorting: call the callback (parent manages state)
      onSort(columnId, newDirection);
    } else {
      // Client-side sorting: update internal state
      setInternalSortColumn(columnId);
      setInternalSortDirection(newDirection);
    }
    
    // Trigger animation
    setAnimateSorting(true);
    setTimeout(() => setAnimateSorting(false), 50);
  };

  const handleSelectAll = (checked: boolean) => {
    // Use flatData which includes both grouped and non-grouped data
    const newSelectedRows = checked ? flatData.map(row => row[rowKey]) : [];
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const handleRowSelect = (id: string, checked: boolean, rowIndex: number, shiftKey: boolean = false) => {
    if (checked) {
      // Shift-click: Select range from last selected to current
      if (shiftKey && lastSelectedIndex !== null) {
        const start = Math.min(lastSelectedIndex, rowIndex);
        const end = Math.max(lastSelectedIndex, rowIndex);
        const rangeIds = paginatedData.slice(start, end + 1).map(row => row[rowKey]);
        const newSelectedRows = Array.from(new Set([...selectedRows, ...rangeIds]));
        setSelectedRows(newSelectedRows);
        onRowSelect?.(newSelectedRows);
      } else {
        // Normal click: Add single row
        const newSelectedRows = [...selectedRows, id];
        setSelectedRows(newSelectedRows);
        setLastSelectedIndex(rowIndex);
        onRowSelect?.(newSelectedRows);
      }
    } else {
      // Uncheck: Remove row
      const newSelectedRows = selectedRows.filter(rowId => rowId !== id);
      setSelectedRows(newSelectedRows);
      setLastSelectedIndex(rowIndex);
      onRowSelect?.(newSelectedRows);
    }
  };

  const handleSearch = (columnId: string, value: string) => {
    setSearchValues(prev => ({ ...prev, [columnId]: value }));
    handlePageChange(1); // Reset to first page on search
  };

  const handlePageChange = (page: number) => {
    if (paginationMode === 'server' && onPageChange) {
      // Server-side pagination: call the callback
      onPageChange(page, itemsPerPage);
    } else {
      // Client-side pagination: update internal state
      setInternalCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    if (paginationMode === 'server' && onPageChange) {
      // Server-side pagination: call the callback with page 1 and new items per page
      onPageChange(1, newItemsPerPage);
    } else {
      // Client-side pagination: update internal state
      setInternalCurrentPage(1);
      setItemsPerPage(newItemsPerPage);
    }
  };

  const handleResize = (columnId: string, width: number) => {
    setColumnWidths(prev => ({ ...prev, [columnId]: width }));
  };

  const handleGroupToggle = (groupId: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
    
    // Call callback if provided
    if (groupConfig?.onGroupToggle) {
      const isExpanded = !expandedGroups.has(groupId);
      groupConfig.onGroupToggle(groupId, isExpanded);
    }
  };

  const handleGroupSelect = (groupId: string, checked: boolean) => {
    const group = processedGroups?.find(g => g.id === groupId);
    if (!group) return;
    
    const groupRowIds = group.rows.map(row => row[rowKey]);
    
    if (checked) {
      // Select all rows in group
      setSelectedRows(prev => [...new Set([...prev, ...groupRowIds])]);
    } else {
      // Deselect all rows in group
      setSelectedRows(prev => prev.filter(id => !groupRowIds.includes(id)));
    }
  };

  // Helper to check if all rows in a group are selected
  const isGroupSelected = (group: TableGroup) => {
    if (group.rows.length === 0) return false;
    const groupRowIds = group.rows.map(row => row[rowKey]);
    return groupRowIds.every(id => selectedRows.includes(id));
  };

  // Helper function to render a single row (reused for flat and grouped rendering)
  const renderRow = (row: any, rowIndex: number) => {
    const rowId = row[rowKey];
    const isSelected = selectedRows.includes(rowId);
    
    const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
      if (onRowClick) {
        onRowClick(row, rowIndex, e);
      }
    };

    const cells = (
      <React.Fragment>
        {visibleColumns.map((colConfig, colIndex) => {
          const column = columns.find(col => col.id === colConfig.id);
          const isLocked = colConfig.locked;
          const offset = columnOffsets[colConfig.id];
          const isFirstCell = colIndex === 0;

          // Checkbox cell
          if (colConfig.id === 'checkbox') {
            return (
              <TableCell
                key={colConfig.id}
                selected={isSelected}
                locked={isLocked}
                leftOffset={offset}
                data-locked={isLocked}
                isFirstColumn={isFirstCell}
                width={48}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowSelect(rowId, !isSelected, rowIndex, e.shiftKey);
                  }}
                  style={{ cursor: 'pointer', display: 'inline-flex' }}
                >
                  <Checkbox
                    checked={isSelected}
                    onChange={() => {}} // Controlled by wrapper click
                  />
                </div>
              </TableCell>
            );
          }

          // Actions cell
          if (colConfig.id === 'actions') {
            return (
              <TableCell
                key={colConfig.id}
                selected={isSelected}
                locked={isLocked}
                leftOffset={offset}
                data-locked={isLocked}
                width={120}
              >
                <ActionsContainer>
                  {actions.map((action, actionIndex) => {
                    const IconComponent = getIconComponent(action.icon);
                    return (
                      <ActionButton
                        key={actionIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(row);
                          if (onRowAction) {
                            onRowAction(action.label, row);
                          }
                        }}
                        aria-label={action.label}
                        title={action.label}
                      >
                        <IconComponent />
                      </ActionButton>
                    );
                  })}
                </ActionsContainer>
              </TableCell>
            );
          }

          // Regular cell
          if (!column) return null;

          const value = column.accessor
            ? typeof column.accessor === 'function'
              ? column.accessor(row)
              : row[column.accessor]
            : row[column.id];

          // If column has custom renderCell, render it directly
          if (column.renderCell) {
            return (
              <TableCell
                key={colConfig.id}
                selected={isSelected}
                locked={isLocked}
                leftOffset={offset}
                data-locked={isLocked}
                isFirstColumn={isFirstCell}
                width={columnWidths[column.id] || column.width}
              >
                {column.renderCell(value, row, rowIndex)}
              </TableCell>
            );
          }

          // Otherwise use showText prop
          return (
            <TableCell
              key={colConfig.id}
              selected={isSelected}
              locked={isLocked}
              leftOffset={offset}
              data-locked={isLocked}
              isFirstColumn={isFirstCell}
              width={columnWidths[column.id] || column.width}
            >
              {String(value || '')}
            </TableCell>
          );
        })}
      </React.Fragment>
    );

    // Use animated row when sorting, regular row otherwise
    return animateSorting ? (
      <AnimatedTableRow 
        key={rowId} 
        $animationDelay={rowIndex * 30}
        onClick={handleRowClick}
        style={{ cursor: onRowClick ? 'pointer' : 'default' }}
      >
        {cells}
      </AnimatedTableRow>
    ) : (
      <tr 
        key={rowId}
        onClick={handleRowClick}
        style={{ cursor: onRowClick ? 'pointer' : 'default' }}
      >
        {cells}
      </tr>
    );
  };

// Helper function to sort rows
const sortRows = (rows: any[], columnId: string, direction: 'asc' | 'desc' | 'none') => {
  if (sortMode !== 'client' || !columnId || direction === 'none') {
    return rows;
  }

  const column = columns.find(col => col.id === columnId);
  if (!column) return rows;

  return [...rows].sort((a, b) => {
    const aValue = column.accessor
      ? typeof column.accessor === 'function'
        ? column.accessor(a)
        : a[column.accessor]
      : a[columnId];
    
    const bValue = column.accessor
      ? typeof column.accessor === 'function'
        ? column.accessor(b)
        : b[column.accessor]
      : b[columnId];

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

// Helper function to filter rows
const filterRows = (rows: any[], searchVals: { [key: string]: string }) => {
  let result = [...rows];
  
  Object.entries(searchVals).forEach(([columnId, searchValue]) => {
    if (searchValue) {
      const column = columns.find(col => col.id === columnId);
      if (column) {
        result = result.filter(row => {
          const value = column.accessor
            ? typeof column.accessor === 'function'
              ? column.accessor(row)
              : row[column.accessor]
            : row[columnId];
          
          return String(value).toLowerCase().includes(searchValue.toLowerCase());
        });
      }
    }
  });
  
  return result;
};

// Process groups: filter and sort within each group
const processedGroups = useMemo(() => {
  if (!groups || groups.length === 0) return null;

  return groups.map(group => {
    // Apply search filters within group
    let filteredRows = filterRows(group.rows, searchValues);
    
    // Apply sorting within group
    let sortedRows = sortRows(filteredRows, sortColumn, sortDirection);
    
    return {
      ...group,
      rows: sortedRows,
    };
  });
}, [groups, columns, searchValues, sortColumn, sortDirection]);

// Flatten grouped data if groups are provided
const flatData = useMemo(() => {
  if (processedGroups) {
    return processedGroups.flatMap(group => group.rows);
  }
  return data;
}, [processedGroups, data]);

// Process data: filter, sort (for non-grouped tables)
const processedData = useMemo(() => {
  if (processedGroups) {
    // For grouped tables, use flattened processed groups
    return flatData;
  }

  // For non-grouped tables, apply filters and sorting
  let result = filterRows(data, searchValues);
  result = sortRows(result, sortColumn, sortDirection);
  return result;
}, [processedGroups, flatData, data, searchValues, sortColumn, sortDirection]);

  // Compute if all rows are selected
  const allChecked = useMemo(() => {
    if (flatData.length === 0) return false;
    return flatData.every(row => selectedRows.includes(row[rowKey]));
  }, [flatData, selectedRows, rowKey]);

  // Compute indeterminate state (some but not all rows selected)
  const isIndeterminate = useMemo(() => {
    if (flatData.length === 0 || selectedRows.length === 0) return false;
    const selectedCount = flatData.filter(row => selectedRows.includes(row[rowKey])).length;
    return selectedCount > 0 && selectedCount < flatData.length;
  }, [flatData, selectedRows, rowKey]);

  // Pagination
  // For server-side pagination, use the provided totalItems; for client-side, calculate from data
  const totalItems = paginationMode === 'server' ? (propTotalItems || 0) : processedData.length;
  const totalPages = paginated ? Math.ceil(totalItems / itemsPerPage) : 1;
  const startIndex = paginated ? (currentPage - 1) * itemsPerPage : 0;
  const endIndex = paginated ? startIndex + itemsPerPage : totalItems;
  // For server-side pagination, data is already paginated; for client-side, slice it
  const paginatedData = paginationMode === 'server' ? processedData : processedData.slice(startIndex, endIndex);

  // Visible columns
  const visibleColumns = columnConfigs
    .filter(col => col.visible)
    .sort((a, b) => a.order - b.order);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Capture positions on every render for SERVER-SIDE mode (before DOM updates)
  useLayoutEffect(() => {
    if (sortMode !== 'server' || !tbodyRef.current) return;
    
    // Capture CURRENT positions before React updates the DOM
    const rows = Array.from(tbodyRef.current.querySelectorAll('tr')) as HTMLElement[];
    rows.forEach((row, index) => {
      const rowId = paginatedData[index]?.[rowKey];
      if (rowId && !rowPositionsRef.current.has(rowId)) {
        // Only capture if we don't have this row's position yet
        const position = row.getBoundingClientRect().top;
        rowPositionsRef.current.set(rowId, position);
      }
    });
  }); // Run on every render for server-side

  // FLIP animation for row reordering
  useLayoutEffect(() => {
    // Prevent multiple animations from running simultaneously
    if (isAnimatingRef.current) {
      return;
    }
    
    if (!tbodyRef.current) {
      return;
    }

    const rows = Array.from(tbodyRef.current.querySelectorAll('tr')) as HTMLElement[];
    
    let hasAnimation = false;
    
    rows.forEach((row, index) => {
      const rowId = paginatedData[index]?.[rowKey];
      if (!rowId) return;

      // Get old and new positions
      const oldPosition = rowPositionsRef.current.get(rowId);
      const newPosition = row.getBoundingClientRect().top;

      if (oldPosition !== undefined && oldPosition !== newPosition) {
        const delta = oldPosition - newPosition;
        
        // Clamp delta to prevent rows from going too far outside viewport
        const maxDelta = 1000; // Maximum pixels to animate
        const clampedDelta = Math.max(-maxDelta, Math.min(maxDelta, delta));
        
        hasAnimation = true;
        
        // FLIP technique:
        // 1. Apply transform immediately (move to old position)
        row.style.transform = `translateY(${clampedDelta}px)`;
        row.style.transition = 'none';
        
        // 2. Force reflow
        row.offsetHeight;
        
        // 3. Enable transition and animate to new position
        requestAnimationFrame(() => {
          row.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          row.style.transform = 'translateY(0)';
        });
      }

      // Store new position for next render
      rowPositionsRef.current.set(rowId, newPosition);
    });
    
    // Set animation lock and clear it after animation completes
    if (hasAnimation) {
      isAnimatingRef.current = true;
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 600); // Match animation duration
    }
  }, [paginatedData, rowKey]);

  // Calculate column offsets for locked columns
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const updateOffsets = () => {
      const headers = scrollContainer.querySelectorAll('thead th');
      const newOffsets: { [key: string]: number } = {};
      let cumulativeOffset = 0;

      visibleColumns.forEach((col, index) => {
        if (col.locked && headers[index]) {
          newOffsets[col.id] = cumulativeOffset;
          const actualWidth = (headers[index] as HTMLElement).offsetWidth;
          cumulativeOffset += actualWidth;
        }
      });

      setColumnOffsets(newOffsets);
    };

    updateOffsets();

    const resizeObserver = new ResizeObserver(() => {
      updateOffsets();
    });

    const headers = scrollContainer.querySelectorAll('thead th');
    headers.forEach(header => resizeObserver.observe(header));

    return () => {
      resizeObserver.disconnect();
    };
  }, [visibleColumns.map(c => c.id + c.locked).join(',')]);

  // Handle scroll for sticky styling
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const lockedElements = scrollContainer.querySelectorAll('[data-locked="true"]');

      lockedElements.forEach(element => {
        if (scrollLeft > 0) {
          element.classList.add('is-stuck');
        } else {
          element.classList.remove('is-stuck');
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close settings modal
      if (e.key === 'Escape' && settingsOpen) {
        setSettingsOpen(false);
      }
      
      // Ctrl/Cmd + A to select all rows (when selectable)
      if ((e.ctrlKey || e.metaKey) && e.key === 'a' && selectable && data.length > 0) {
        e.preventDefault();
        handleSelectAll(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settingsOpen, selectable, data.length]);

  // ============================================================================
  // RENDER
  // ============================================================================

  // Empty state - show full table structure with centered empty content
  const renderEmptyState = () => (
    <ScrollContainer data-scroll-container $maxHeight={maxHeight}>
      <StyledTable $hasMaxHeight={!!maxHeight}>
        <thead>
          <tr>
            {visibleColumns.map((colConfig, index) => {
              const column = columns.find(col => col.id === colConfig.id);
              const side = index === 0 ? 'left' : index === visibleColumns.length - 1 ? 'right' : undefined;

              return (
                <TableHeader
                  key={colConfig.id}
                  label={column?.label || colConfig.id}
                  variant="default"
                  side={side}
                  showColumnMenu={false}
                />
              );
            })}
          </tr>
        </thead>
      </StyledTable>
      
      <EmptyStateContainer 
        className={emptyStateClassName} 
        style={safeEmptyStateStyle}
        role="status"
        aria-live="polite"
      >
        <EmptyStateContent>
          <EmptyStateIconWrapper>
            <CloudOffIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
          </EmptyStateIconWrapper>
          
          <EmptyStateTextWrapper>
            <Typography variant="headingL" weight="semibold" as="h3">
              {emptyTitle}
            </Typography>
            <Typography variant="body" color="secondary">
              {emptyDescription}
            </Typography>
          </EmptyStateTextWrapper>
          
          {emptyActionLabel && onEmptyAction && (
            <Button
              variant="primary"
              size="medium"
              onClick={onEmptyAction}
            >
              {emptyActionLabel}
            </Button>
          )}
        </EmptyStateContent>
      </EmptyStateContainer>
    </ScrollContainer>
  );

  // Error state - show full table structure with centered error content
  const renderErrorState = () => (
    <ScrollContainer data-scroll-container $maxHeight={maxHeight}>
      <StyledTable $hasMaxHeight={!!maxHeight}>
        <thead>
          <tr>
            {visibleColumns.map((colConfig, index) => {
              const column = columns.find(col => col.id === colConfig.id);
              const side = index === 0 ? 'left' : index === visibleColumns.length - 1 ? 'right' : undefined;

              return (
                <TableHeader
                  key={colConfig.id}
                  label={column?.label || colConfig.id}
                  variant="default"
                  side={side}
                  showColumnMenu={false}
                />
              );
            })}
          </tr>
        </thead>
      </StyledTable>
      
      <EmptyStateContainer 
        role="alert"
        aria-live="assertive"
      >
        <EmptyStateContent>
          <EmptyStateIconWrapper>
            <ErrorIcon sx={{ fontSize: 64, color: 'error.main' }} />
          </EmptyStateIconWrapper>
          
          <EmptyStateTextWrapper>
            <Typography variant="headingL" weight="semibold" as="h3" color="error">
              {errorMessage || 'Crazy'}
            </Typography>
            <Typography variant="body" color="secondary">
              There was a problem loading the table data.
            </Typography>
          </EmptyStateTextWrapper>
          
          {onEmptyAction && (
            <Button
              variant="primary"
              size="medium"
              onClick={onEmptyAction}
            >
              {emptyActionLabel || 'Retry'}
            </Button>
          )}
        </EmptyStateContent>
      </EmptyStateContainer>
    </ScrollContainer>
  );

  // Ensure style is an object, not a string
  const safeStyle = typeof style === 'object' ? style : undefined;
  const safeScrollContainerStyle = typeof scrollContainerStyle === 'object' ? scrollContainerStyle : undefined;
  const safeEmptyStateStyle = typeof emptyStateStyle === 'object' ? emptyStateStyle : undefined;

  return (
    <Component ref={ref} style={safeStyle} {...restProps}>
      <TableContainer 
        className={className}
        role="region"
        aria-label={title || 'Data table'}
        aria-busy={loading}
        aria-invalid={isInvalid}
      >
      
      {/* Custom toolbar takes precedence */}
      {toolbar ? (
        toolbar
      ) : showToolbar ? (
        <TableToolbar
          title={title}
          showDropdown={false}
          dropdownOptions={[]}
          showDownload={showDownload}
          onDownload={onDownload}
          showFilter={showFilter}
          onFilter={() => {}}
          showSettings={showSettings}
          onSettingsClick={() => setSettingsOpen(true)}
          showGlobalSearch={showGlobalSearch}
        />
      ) : null}
      
      {isInvalid ? (
        renderErrorState()
      ) : flatData.length === 0 && !loading ? (
        renderEmptyState()
      ) : (
        <ScrollContainer 
          data-scroll-container 
          $maxHeight={maxHeight}
          className={scrollContainerClassName}
          style={safeScrollContainerStyle}
        >
          <StyledTable 
            $hasMaxHeight={!!maxHeight}
            role="table"
            aria-label={title || 'Data table'}
            aria-rowcount={totalItems}
          >
          <colgroup>
            {visibleColumns.map((colConfig) => {
              const column = columns.find(col => col.id === colConfig.id);
              const dynamicWidth = columnWidths[colConfig.id];
              
              // Use dynamic width if available, otherwise use column width with clamping, otherwise default
              let widthValue: string;
              if (dynamicWidth) {
                widthValue = `${dynamicWidth}px`;
              } else if (column?.width) {
                // Clamp the width to min/max constraints even on initial render
                let width = typeof column.width === 'number' ? column.width : parseInt(column.width, 10);
                const minWidth = column.minWidth ? (typeof column.minWidth === 'number' ? column.minWidth : parseInt(column.minWidth, 10)) : 0;
                const maxWidth = column.maxWidth ? (typeof column.maxWidth === 'number' ? column.maxWidth : parseInt(column.maxWidth, 10)) : Infinity;
                width = Math.max(minWidth, Math.min(maxWidth, width));
                widthValue = `${width}px`;
              } else if (colConfig.id === 'checkbox') {
                widthValue = '48px';
              } else if (colConfig.id === 'actions') {
                widthValue = '120px';
              } else {
                widthValue = '150px'; // Default width
              }
              
              // Set width as both attribute and style for better browser compatibility
              return <col key={colConfig.id} width={widthValue} style={{ width: widthValue }} />;
            })}
          </colgroup>
          <thead>
            <tr>
              {visibleColumns.map((colConfig, index) => {
                const column = columns.find(col => col.id === colConfig.id);
                const isLocked = colConfig.locked;
                const offset = columnOffsets[colConfig.id];
                const side = index === 0 ? 'left' : index === visibleColumns.length - 1 ? 'right' : undefined;

                // Checkbox column
                if (colConfig.id === 'checkbox') {
                  return (
                    <TableHeader
                      key={colConfig.id}
                      label=""
                      variant="default"
                      side={side}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                      showCheckbox={true}
                      checked={allChecked}
                      indeterminate={isIndeterminate}
                      onCheckChange={handleSelectAll}
                      onPinChange={(pinState) => {
                        if (pinState === 'none') {
                          handleColumnLock('checkbox', false);
                        }
                      }}
                      showColumnMenu={false}
                    />
                  );
                }

                // Actions column
                if (colConfig.id === 'actions') {
                  return (
                    <TableHeader
                      key={colConfig.id}
                      label="Actions"
                      variant="default"
                      side={side}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                      onPinChange={(pinState) => {
                        if (pinState === 'none') {
                          handleColumnLock('actions', false);
                        }
                      }}
                      showColumnMenu={false}
                    />
                  );
                }

                // Regular column
                if (!column) return null;

                const variant = column.searchable
                  ? 'search'
                  : column.resizable && !isLocked
                  ? 'resizeable-locked'
                  : column.resizable
                  ? 'resizeable'
                  : 'default';

                return (
                  <TableHeader
                    key={colConfig.id}
                    label={column.label}
                    variant={variant}
                    side={side}
                    sortable={column.sortable}
                    sortDirection={sortColumn === column.id ? sortDirection : 'none'}
                    onSort={column.sortable ? () => handleSort(column.id) : undefined}
                    searchValue={searchValues[column.id] || ''}
                    onSearchChange={column.searchable ? (value) => handleSearch(column.id, value) : undefined}
                    resizable={column.resizable && !isLocked}
                    onResize={column.resizable && !isLocked ? (width) => handleResize(column.id, width) : undefined}
                    width={columnWidths[column.id] || column.width}
                    minWidth={column.minWidth}
                    maxWidth={column.maxWidth}
                    initialWidth={typeof column.width === 'number' ? column.width : undefined}
                    onPinChange={(pinState) => {
                      if (pinState === 'none') {
                        handleColumnLock(column.id, false);
                      } else {
                        handleColumnLock(column.id, true);
                      }
                    }}
                    locked={isLocked}
                    leftOffset={offset}
                    data-locked={isLocked}
                    showColumnMenu={false}
                  />
                );
              })}
            </tr>
          </thead>

          <tbody ref={tbodyRef}>
            {loading ? (
              // Show skeleton rows when loading
              Array.from({ length: itemsPerPage }).map((_, skeletonIndex) => (
                <SkeletonRow key={`skeleton-${skeletonIndex}`}>
                  {visibleColumns.map((colConfig) => (
                    <SkeletonCell key={colConfig.id}>
                      {colConfig.id === 'checkbox' ? (
                        <SkeletonBox width="20px" height="20px" />
                      ) : colConfig.id === 'actions' ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <SkeletonBox width="32px" height="32px" />
                          <SkeletonBox width="32px" height="32px" />
                        </div>
                      ) : (
                        <SkeletonBox width="80%" />
                      )}
                    </SkeletonCell>
                  ))}
                </SkeletonRow>
              ))
            ) : processedGroups && processedGroups.length > 0 ? (
              // GROUPED RENDERING
              processedGroups.map(group => {
                const isExpanded = expandedGroups.has(group.id);
                
                return (
                  <React.Fragment key={group.id}>
                    {/* Group Header */}
                    <TableGroupHeader
                      groupName={group.groupName}
                      groupDescription={group.groupDescription}
                      isExpanded={isExpanded}
                      onToggle={() => handleGroupToggle(group.id)}
                      colSpan={visibleColumns.length}
                      expandPosition={groupConfig?.expandPosition || 'left'}
                      customContent={
                        groupConfig?.renderGroupContent 
                          ? groupConfig.renderGroupContent(group)
                          : group.customContent
                      }
                      className={group.className}
                      style={group.style}
                      showCheckbox={selectable}
                      isSelected={isGroupSelected(group)}
                      onCheckboxChange={(checked) => handleGroupSelect(group.id, checked)}
                    />
                    
                    {/* Group Rows (only if expanded) */}
                    {isExpanded && group.rows.map((row, rowIndex) => renderRow(row, rowIndex))}
                  </React.Fragment>
                );
              })
            ) : (
              // FLAT RENDERING
              paginatedData.map((row, rowIndex) => renderRow(row, rowIndex))
            )}
          </tbody>
        </StyledTable>
      </ScrollContainer>
      )}

      {paginated && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}

      {showSettings && (
        <>
          <TableSettings
            isOpen={settingsOpen}
            onClose={() => setSettingsOpen(false)}
            columns={columnConfigs.filter(col => col.id !== 'checkbox')}
            lockWarning={lockWarning}
            onColumnsChange={(newConfigs) => {
              const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
              const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;

              const hasLockChanges = newConfigs.some(newCol => {
                const oldCol = columnConfigs.find(c => c.id === newCol.id);
                return oldCol && oldCol.locked !== newCol.locked;
              });

              if (hasLockChanges) {
                const sortedConfigs = mergedConfigs.sort((a, b) => {
                  if (a.id === 'checkbox') return -1;
                  if (b.id === 'checkbox') return 1;
                  if (a.locked && !b.locked) return -1;
                  if (!a.locked && b.locked) return 1;
                  return a.order - b.order;
                });

                const reorderedConfigs = sortedConfigs.map((col, index) => ({
                  ...col,
                  order: index,
                }));

                setColumnConfigs(reorderedConfigs);
              } else {
                setColumnConfigs(mergedConfigs);
              }
            }}
          />
        </>
      )}
    </TableContainer>
    </Component>
  );
});

Table.displayName = 'Table';
