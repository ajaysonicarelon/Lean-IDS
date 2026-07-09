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

import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { TableSettings, ColumnConfig } from '../TableSettings';
import { TableToolbar } from './TableToolbar';

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
  actions?: Array<{
    icon: string;
    label: string;
    onClick: (row: any) => void;
  }>;
  /** Callback when rows are selected */
  onRowSelect?: (selectedIds: string[]) => void;
  /** Callback when row action is triggered */
  onRowAction?: (action: string, row: any) => void;
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

const ScrollContainer = styled.div`
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: 8px;
  position: relative;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[24]};
  min-height: 400px;
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
`;

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 300px;
`;

const EmptyStateIconWrapper = styled.div`
  width: 80px;
  height: 80px;
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

const EmptyStateTitle = styled.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  margin: 0;
`;

const EmptyStateDescription = styled.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
  margin: 0;
`;

const SkeletonRow = styled.tr``;

const SkeletonCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
`;

const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  background: ${({ theme }) => theme.colors.palette.neutral[200]};
  border-radius: 4px;
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

export const Table: React.FC<TableProps> = ({
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
  rowKey = 'id',
  emptyMessage = 'No data available',
  emptyIcon = 'CloudOff',
  emptyTitle = 'No data available',
  emptyDescription = 'There are no items to display',
  emptyActionLabel,
  onEmptyAction,
  loading = false,
  className,
  title,
  description,
  showToolbar = true,
  showGlobalSearch = false,
  showFilter = true,
  showDownload = true,
  onDownload,
}) => {
  // ============================================================================
  // STATE
  // ============================================================================

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
  const [allChecked, setAllChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
  const [lockWarning, setLockWarning] = useState(false);
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({});
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>({});
  const [globalSearch, setGlobalSearch] = useState('');

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
    if (sortColumn === columnId) {
      setSortDirection(
        sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc'
      );
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
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

    // Apply sorting
    if (sortColumn && sortDirection !== 'none') {
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

  // ============================================================================
  // RENDER
  // ============================================================================

  // Empty state - show full table structure with centered empty content
  const renderEmptyState = () => (
    <ScrollContainer data-scroll-container>
      <StyledTable>
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
      
      <EmptyStateContainer>
        <EmptyStateContent>
          <EmptyStateIconWrapper>
            <Icon name={emptyIcon} size="large" style={{ width: '60px', height: '60px' }} />
          </EmptyStateIconWrapper>
          
          <EmptyStateTextWrapper>
            <EmptyStateTitle>{emptyTitle}</EmptyStateTitle>
            <EmptyStateDescription>{emptyDescription}</EmptyStateDescription>
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
    <TableContainer className={className}>
      {showToolbar && (
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
        />
      )}
      
      {data.length === 0 && !loading ? (
        renderEmptyState()
      ) : (
        <ScrollContainer data-scroll-container>
          <StyledTable>
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
                    onLockToggle={() => handleColumnLock(column.id, !isLocked)}
                    locked={isLocked}
                    leftOffset={offset}
                    data-locked={isLocked}
                  />
                );
              })}
            </tr>
          </thead>

          <tbody>
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

              return (
                <tr key={rowId}>
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
                          <Checkbox
                            checked={isSelected}
                            onChange={(e) => handleRowSelect(rowId, e.target.checked, rowIndex, (e.nativeEvent as MouseEvent).shiftKey)}
                          />
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
                                variant="secondary"
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
  );
};
