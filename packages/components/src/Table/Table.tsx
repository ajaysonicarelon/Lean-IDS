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
 *   onRowSelect={(selectedIds) => console.log(selectedIds)}
 *   onRowAction={(action, rowId) => console.log(action, rowId)}
 * />
 * ```
 */

import React, { useState, useEffect, useMemo, useLayoutEffect, useRef, forwardRef, ElementType } from 'react';
import styled from 'styled-components';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { TableSettings, ColumnConfig } from '../TableSettings';
import { TableToolbar } from './TableToolbar';
import { Typography } from '../Typography';

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
  overflow-y: hidden; /* Prevent rows from appearing outside during animation */
  ${({ $maxHeight }) => $maxHeight && `
    max-height: ${$maxHeight};
    overflow-y: auto;
    display: block;
  `}
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
`;

const StyledTable = styled.table<{ $hasMaxHeight?: boolean }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  
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

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.palette.error[50]};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.semantic.border.error};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const Table = forwardRef<HTMLDivElement, TableProps>(({  as: Component = 'div',
  data = [],
  columns = [],
  selectable = false,
  paginated = true,
  itemsPerPage: initialItemsPerPage = 10,
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
  style,
  ...restProps
}, ref) => {
  // ============================================================================
  // STATE
  // ============================================================================

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [internalSortColumn, setInternalSortColumn] = useState<string>('');
  const [internalSortDirection, setInternalSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
  
  // Use controlled props in server mode, internal state in client mode
  const sortColumn = sortMode === 'server' ? (controlledSortColumn || '') : internalSortColumn;
  const sortDirection = sortMode === 'server' ? (controlledSortDirection || 'none') : internalSortDirection;
  const [allChecked, setAllChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
  const [lockWarning, setLockWarning] = useState(false);
  const [animateSorting, setAnimateSorting] = useState(false);
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({});
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>({});
  const [globalSearch, setGlobalSearch] = useState('');
  
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
      console.log('🔵 CLIENT-SIDE: Capturing positions before sort...');
      const rows = Array.from(tbodyRef.current.querySelectorAll('tr')) as HTMLElement[];
      // Capture current positions (don't clear - keep positions of rows not currently visible)
      rows.forEach((row, index) => {
        const rowId = paginatedData[index]?.[rowKey];
        if (rowId) {
          const position = row.getBoundingClientRect().top;
          rowPositionsRef.current.set(rowId, position);
          console.log(`🔵 Row ${index} (ID: ${rowId}): position = ${position}px`);
        }
      });
    }

    let newDirection: 'asc' | 'desc' | 'none';
    
    if (sortColumn === columnId) {
      newDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc';
    } else {
      newDirection = 'asc';
    }

    console.log(`🟣 Sort state changing: column=${columnId}, direction=${newDirection}`);

    if (sortMode === 'server' && onSort) {
      // Server-side sorting: call the callback (parent manages state)
      onSort(columnId, newDirection);
    } else {
      // Client-side sorting: update internal state
      console.log('🟣 Setting internal sort state...');
      setInternalSortColumn(columnId);
      setInternalSortDirection(newDirection);
    }
    
    // Trigger animation
    setAnimateSorting(true);
    setTimeout(() => setAnimateSorting(false), 50);
  };

  const handleSelectAll = (checked: boolean) => {
    setAllChecked(checked);
    const newSelectedRows = checked ? data.map(row => row[rowKey]) : [];
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
        setAllChecked(newSelectedRows.length === data.length);
        onRowSelect?.(newSelectedRows);
      } else {
        // Normal click: Add single row
        const newSelectedRows = [...selectedRows, id];
        setSelectedRows(newSelectedRows);
        setAllChecked(newSelectedRows.length === data.length);
        setLastSelectedIndex(rowIndex);
        onRowSelect?.(newSelectedRows);
      }
    } else {
      // Uncheck: Remove row
      const newSelectedRows = selectedRows.filter(rowId => rowId !== id);
      setSelectedRows(newSelectedRows);
      setAllChecked(false);
      setLastSelectedIndex(rowIndex);
      onRowSelect?.(newSelectedRows);
    }
  };

  const handleSearch = (columnId: string, value: string) => {
    setSearchValues(prev => ({ ...prev, [columnId]: value }));
    setCurrentPage(1); // Reset to first page on search
  };

  const handleResize = (columnId: string, width: number) => {
    setColumnWidths(prev => ({ ...prev, [columnId]: width }));
  };

  // ============================================================================
  // DATA PROCESSING
  // ============================================================================

  const processedData = useMemo(() => {
    console.log(`🟠 Processing data - sortMode=${sortMode}, sortColumn=${sortColumn}, sortDirection=${sortDirection}`);
    let result = [...data];

    // Apply search filters
    Object.entries(searchValues).forEach(([columnId, searchValue]) => {
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

    // Apply sorting (only for client-side mode)
    if (sortMode === 'client' && sortColumn && sortDirection !== 'none') {
      const column = columns.find(col => col.id === sortColumn);
      if (column) {
        result.sort((a, b) => {
          const aValue = column.accessor
            ? typeof column.accessor === 'function'
              ? column.accessor(a)
              : a[column.accessor]
            : a[sortColumn];
          
          const bValue = column.accessor
            ? typeof column.accessor === 'function'
              ? column.accessor(b)
              : b[column.accessor]
            : b[sortColumn];

          if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
          if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
          return 0;
        });
      }
    }

    return result;
  }, [data, columns, searchValues, sortColumn, sortDirection, rowKey]);

  // Pagination
  const totalItems = processedData.length;
  const totalPages = paginated ? Math.ceil(totalItems / itemsPerPage) : 1;
  const startIndex = paginated ? (currentPage - 1) * itemsPerPage : 0;
  const endIndex = paginated ? startIndex + itemsPerPage : totalItems;
  const paginatedData = processedData.slice(startIndex, endIndex);

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
        console.log(`🔵 SERVER-SIDE: Initial capture Row ${index} (ID: ${rowId}): position = ${position}px`);
      }
    });
  }); // Run on every render for server-side

  // FLIP animation for row reordering
  useLayoutEffect(() => {
    console.log('🟢 AFTER SORT - useLayoutEffect running...');
    
    // Prevent multiple animations from running simultaneously
    if (isAnimatingRef.current) {
      console.log('⏸️ Animation already in progress, skipping...');
      return;
    }
    
    if (!tbodyRef.current) {
      console.log('🔴 No tbody ref!');
      return;
    }

    const rows = Array.from(tbodyRef.current.querySelectorAll('tr')) as HTMLElement[];
    console.log('🟢 Found rows in DOM:', rows.length);
    
    let hasAnimation = false;
    
    rows.forEach((row, index) => {
      const rowId = paginatedData[index]?.[rowKey];
      if (!rowId) return;

      // Get old and new positions
      const oldPosition = rowPositionsRef.current.get(rowId);
      const newPosition = row.getBoundingClientRect().top;

      console.log(`🟢 Row ${index} (ID: ${rowId}): old=${oldPosition}px, new=${newPosition}px`);

      if (oldPosition !== undefined && oldPosition !== newPosition) {
        const delta = oldPosition - newPosition;
        
        // Clamp delta to prevent rows from going too far outside viewport
        const maxDelta = 1000; // Maximum pixels to animate
        const clampedDelta = Math.max(-maxDelta, Math.min(maxDelta, delta));
        
        console.log(`🟡 ANIMATING Row ${rowId}: delta=${delta}px (clamped: ${clampedDelta}px)`);
        
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
      } else {
        console.log(`⚪ Row ${rowId}: No animation (same position or first render)`);
      }

      // Store new position for next render
      rowPositionsRef.current.set(rowId, newPosition);
    });
    
    // Set animation lock and clear it after animation completes
    if (hasAnimation) {
      isAnimatingRef.current = true;
      setTimeout(() => {
        isAnimatingRef.current = false;
        console.log('✅ Animation complete, lock released');
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
                />
              );
            })}
          </tr>
        </thead>
      </StyledTable>
      
      <EmptyStateContainer 
        className={emptyStateClassName} 
        style={emptyStateStyle}
        role="status"
        aria-live="polite"
      >
        <EmptyStateContent>
          <EmptyStateIconWrapper>
            <Icon name={emptyIcon} size="large" style={{ width: '60px', height: '60px' }} />
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

  return (
    <Component ref={ref} style={style} {...restProps}>
      <TableContainer 
        className={className}
        role="region"
        aria-label={title || 'Data table'}
        aria-busy={loading}
        aria-invalid={isInvalid}
      >
      {/* Error state */}
      {isInvalid && errorMessage && (
        <ErrorContainer role="alert" aria-live="polite">
          <Icon name="Error" size="small" />
          <Typography variant="body" color="error">
            {errorMessage}
          </Typography>
        </ErrorContainer>
      )}
      
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
          onFilter={() => console.log('Filter clicked')}
          showSettings={showSettings}
          onSettingsClick={() => setSettingsOpen(true)}
          showGlobalSearch={showGlobalSearch}
        />
      ) : null}
      
      {data.length === 0 && !loading ? (
        renderEmptyState()
      ) : (
        <ScrollContainer 
          data-scroll-container 
          $maxHeight={maxHeight}
          className={scrollContainerClassName}
          style={scrollContainerStyle}
        >
          <StyledTable 
            $hasMaxHeight={!!maxHeight}
            role="table"
            aria-label={title || 'Data table'}
            aria-rowcount={totalItems}
          >
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
                      onCheckChange={handleSelectAll}
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
                    onLockToggle={() => handleColumnLock(column.id, !isLocked)}
                    locked={isLocked}
                    leftOffset={offset}
                    data-locked={isLocked}
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
            ) : (
              paginatedData.map((row, rowIndex) => {
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
                        >
                          <div style={{ display: 'flex', gap: '8px' }}>
                            {actions.map((action, actionIndex) => (
                              <Button
                                key={actionIndex}
                                variant="tertiary"
                                size="small"
                                showLabel={false}
                                leadingIcon={<Icon name={action.icon} size="small" />}
                                onClick={() => action.onClick(row)}
                                aria-label={action.label}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </div>
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
            })
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
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
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
