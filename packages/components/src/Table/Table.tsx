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
  gap: ${({ theme }) => theme.spacing[16]};
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

const EmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing[48]} ${({ theme }) => theme.spacing[24]};
  text-align: center;
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const SettingsButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  borderradius: 50%;
  background: ${({ theme }) => theme.colors.palette.primary[600]};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.primary[700]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
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
  loading = false,
  className,
  title,
  description,
  showToolbar = true,
  showGlobalSearch = true,
  showFilter = false,
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

  const handleRowSelect = (id: string, checked: boolean) => {
    const newSelectedRows = checked
      ? [...selectedRows, id]
      : selectedRows.filter(rowId => rowId !== id);
    
    setSelectedRows(newSelectedRows);
    setAllChecked(newSelectedRows.length === data.length);
    onRowSelect?.(newSelectedRows);
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

  if (data.length === 0 && !loading) {
    return (
      <TableContainer className={className}>
        <EmptyState>{emptyMessage}</EmptyState>
      </TableContainer>
    );
  }

  return (
    <TableContainer className={className}>
      {showToolbar && (
        <TableToolbar
          title={title}
          description={description}
          showSearch={showGlobalSearch}
          searchValue={globalSearch}
          onSearchChange={setGlobalSearch}
          showFilter={showFilter}
          showDownload={showDownload}
          onDownload={onDownload}
          showSettings={false}
          selectedCount={selectedRows.length}
        />
      )}
      
      <ScrollContainer data-scroll-container>
        {loading && (
          <LoadingOverlay>
            <div>Loading...</div>
          </LoadingOverlay>
        )}
        
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
                      variant="default"
                      side={side}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                    >
                      <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={e => handleSelectAll(e.target.checked)}
                      />
                    </TableHeader>
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
            {paginatedData.map((row, rowIndex) => {
              const rowId = row[rowKey];
              const isSelected = selectedRows.includes(rowId);

              return (
                <tr key={rowId}>
                  {visibleColumns.map((colConfig) => {
                    const column = columns.find(col => col.id === colConfig.id);
                    const isLocked = colConfig.locked;
                    const offset = columnOffsets[colConfig.id];

                    // Checkbox cell
                    if (colConfig.id === 'checkbox') {
                      return (
                        <TableCell
                          key={colConfig.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={e => handleRowSelect(rowId, e.target.checked)}
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
                              <button
                                key={actionIndex}
                                onClick={() => action.onClick(row)}
                                title={action.label}
                              >
                                <Icon name={action.icon} size="small" />
                              </button>
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

                    return (
                      <TableCell
                        key={colConfig.id}
                        selected={isSelected}
                        locked={isLocked}
                        leftOffset={offset}
                        data-locked={isLocked}
                      >
                        {column.renderCell ? column.renderCell(value, row, rowIndex) : value}
                      </TableCell>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </ScrollContainer>

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

          <SettingsButton onClick={() => setSettingsOpen(true)}>
            <Icon name="Settings" size="medium" />
          </SettingsButton>
        </>
      )}
    </TableContainer>
  );
};
