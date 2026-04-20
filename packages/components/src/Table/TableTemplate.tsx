/**
 * Advanced Data Table Template
 * 
 * This is a production-ready table template with the following features:
 * - Column freezing (max 3 columns)
 * - Sorting (ascending, descending, none)
 * - Row selection (single and bulk)
 * - Column search
 * - Pagination
 * - Column visibility toggle
 * - Column reordering (drag & drop)
 * - Resizable columns
 * 
 * HOW TO USE:
 * 1. Define your data structure (see DataRow interface)
 * 2. Configure columns (see columnConfigs)
 * 3. Replace sample data with your API data
 * 4. Customize handlers for your business logic
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { Icon } from '../Icon';
import { TableSettings, ColumnConfig } from '../TableSettings';

// ============================================================================
// STYLED COMPONENTS (Keep as is)
// ============================================================================

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
`;

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

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f8f7fb;
`;

// ============================================================================
// TYPE DEFINITIONS - CUSTOMIZE THIS FOR YOUR DATA
// ============================================================================

/**
 * Define your data structure here
 * Replace these fields with your actual data fields
 */
interface DataRow {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  amount: string;
  date: string;
  department: string;
  manager: string;
  status: 'Active' | 'Inactive';
  avatar: string;
}

// ============================================================================
// CONFIGURATION - CUSTOMIZE THIS SECTION
// ============================================================================

/**
 * Sample data - Replace this with your API data
 */
const getSampleData = (): DataRow[] => [
  {
    id: '1001',
    name: 'Alice Johnson',
    role: 'Senior Developer',
    email: 'alice.johnson@company.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    amount: '$125,000',
    date: 'Jan 15, 2025',
    department: 'Engineering',
    manager: 'Sarah Chen',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/32?img=1',
  },
  // Add more rows...
];

/**
 * Column configuration
 * - id: Unique identifier (must match DataRow keys)
 * - label: Display name
 * - visible: Show/hide column
 * - locked: Freeze column (max 3)
 * - order: Display order
 */
const getInitialColumnConfigs = (): ColumnConfig[] => [
  { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
  { id: 'id', label: 'ID', visible: true, locked: false, order: 1 },
  { id: 'user', label: 'User', visible: true, locked: false, order: 2 },
  { id: 'email', label: 'Email', visible: true, locked: false, order: 3 },
  { id: 'phone', label: 'Phone', visible: true, locked: false, order: 4 },
  { id: 'location', label: 'Location', visible: true, locked: false, order: 5 },
  { id: 'amount', label: 'Amount', visible: true, locked: false, order: 6 },
  { id: 'date', label: 'Date', visible: true, locked: false, order: 7 },
  { id: 'department', label: 'Department', visible: true, locked: false, order: 8 },
  { id: 'manager', label: 'Manager', visible: true, locked: false, order: 9 },
  { id: 'status', label: 'Status', visible: true, locked: false, order: 10 },
  { id: 'actions', label: 'Actions', visible: true, locked: false, order: 11 },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const AdvancedDataTable: React.FC = () => {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
  const [allChecked, setAllChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
  const [lockWarning, setLockWarning] = useState(false);
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>(getInitialColumnConfigs());
  
  // Column widths (adjust as needed)
  const [idWidth, setIdWidth] = useState(100);
  const [nameWidth, setNameWidth] = useState(200);
  const [emailSearch, setEmailSearch] = useState('');
  const [amountWidth, setAmountWidth] = useState(150);
  const [statusWidth, setStatusWidth] = useState(120);

  // Data (replace with your API call)
  const sampleData = getSampleData();

  // ============================================================================
  // HANDLERS - Customize these for your business logic
  // ============================================================================

  /**
   * Handle column locking/unlocking
   * Max 3 columns can be locked (excluding checkbox)
   */
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

  /**
   * Handle sorting
   */
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(
        sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  /**
   * Handle select all checkbox
   */
  const handleSelectAll = (checked: boolean) => {
    setAllChecked(checked);
    setSelectedRows(checked ? Array.from({ length: sampleData.length }, (_, i) => i) : []);
  };

  /**
   * Handle individual row selection
   */
  const handleRowSelect = (index: number, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, index]);
    } else {
      setSelectedRows(selectedRows.filter(i => i !== index));
      setAllChecked(false);
    }
  };

  // ============================================================================
  // DATA PROCESSING
  // ============================================================================

  // Filter data (customize search logic)
  const filteredData = emailSearch
    ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase()))
    : sampleData;

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortDirection === 'none') return 0;

    let aValue: any = a[sortColumn as keyof typeof a];
    let bValue: any = b[sortColumn as keyof typeof b];

    if (sortColumn === 'amount') {
      aValue = parseFloat(String(aValue).replace(/[$,]/g, ''));
      bValue = parseFloat(String(bValue).replace(/[$,]/g, ''));
    }

    if (sortColumn === 'date') {
      aValue = new Date(String(aValue)).getTime();
      bValue = new Date(String(bValue)).getTime();
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Paginate data
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Get visible columns
  const visibleColumns = columnConfigs
    .filter(col => col.visible)
    .sort((a, b) => a.order - b.order);

  // ============================================================================
  // DYNAMIC COLUMN OFFSET CALCULATION (Keep as is)
  // ============================================================================

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

  // Scroll handler for sticky styling
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const lockedHeaders = scrollContainer.querySelectorAll('thead th[data-locked="true"]');
      const lockedCells = scrollContainer.querySelectorAll('tbody td[data-locked="true"]');

      [...lockedHeaders, ...lockedCells].forEach(element => {
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

  return (
    <TableContainer>
      <ScrollContainer data-scroll-container>
        <StyledTable>
          <thead>
            <tr>
              {visibleColumns.map((col, index) => {
                const isLocked = col.locked;
                const offset = columnOffsets[col.id];
                const side = index === 0 ? 'left' : index === visibleColumns.length - 1 ? 'right' : undefined;

                // Checkbox column
                if (col.id === 'checkbox') {
                  return (
                    <TableHeader
                      key={col.id}
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

                // ID column
                if (col.id === 'id') {
                  return (
                    <TableHeader
                      key={col.id}
                      label="ID"
                      variant={!isLocked ? 'resizeable-locked' : 'resizeable'}
                      side={side}
                      resizable={!isLocked}
                      onLockToggle={() => handleColumnLock('id', !isLocked)}
                      onResize={!isLocked ? setIdWidth : undefined}
                      width={!isLocked ? idWidth : undefined}
                      sortable
                      sortDirection={sortColumn === 'id' ? sortDirection : 'none'}
                      onSort={() => handleSort('id')}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                    />
                  );
                }

                // User column (with avatar)
                if (col.id === 'user') {
                  return (
                    <TableHeader
                      key={col.id}
                      label="User"
                      variant={!isLocked ? 'resizeable-locked' : 'resizeable'}
                      side={side}
                      resizable={!isLocked}
                      onLockToggle={() => handleColumnLock('user', !isLocked)}
                      onResize={!isLocked ? setNameWidth : undefined}
                      width={!isLocked ? nameWidth : undefined}
                      sortable
                      sortDirection={sortColumn === 'name' ? sortDirection : 'none'}
                      onSort={() => handleSort('name')}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                    />
                  );
                }

                // Email column (with search)
                if (col.id === 'email') {
                  return (
                    <TableHeader
                      key={col.id}
                      label="Email"
                      variant="search"
                      side={side}
                      sortable
                      sortDirection={sortColumn === 'email' ? sortDirection : 'none'}
                      onSort={() => handleSort('email')}
                      searchValue={emailSearch}
                      onSearchChange={setEmailSearch}
                      onLockToggle={() => handleColumnLock('email', !isLocked)}
                      locked={isLocked}
                      leftOffset={offset}
                      data-locked={isLocked}
                    />
                  );
                }

                // Other columns - customize as needed
                return (
                  <TableHeader
                    key={col.id}
                    label={col.label}
                    variant={!isLocked ? 'resizeable-locked' : 'default'}
                    side={side}
                    sortable
                    sortDirection={sortColumn === col.id ? sortDirection : 'none'}
                    onSort={() => handleSort(col.id)}
                    onLockToggle={() => handleColumnLock(col.id, !isLocked)}
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
              const isSelected = selectedRows.includes(startIndex + rowIndex);

              return (
                <tr key={row.id}>
                  {visibleColumns.map((col, colIndex) => {
                    const isLocked = col.locked;
                    const offset = columnOffsets[col.id];

                    // Checkbox cell
                    if (col.id === 'checkbox') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={e => handleRowSelect(startIndex + rowIndex, e.target.checked)}
                          />
                        </TableCell>
                      );
                    }

                    // ID cell
                    if (col.id === 'id') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          {row.id}
                        </TableCell>
                      );
                    }

                    // User cell (with avatar)
                    if (col.id === 'user') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img
                              src={row.avatar}
                              alt={row.name}
                              style={{ width: 32, height: 32, borderRadius: '50%' }}
                            />
                            <div>
                              <div style={{ fontWeight: 600 }}>{row.name}</div>
                              <div style={{ fontSize: '12px', color: '#666' }}>{row.role}</div>
                            </div>
                          </div>
                        </TableCell>
                      );
                    }

                    // Status cell (with chip)
                    if (col.id === 'status') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          <span
                            style={{
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: 600,
                              backgroundColor: row.status === 'Active' ? '#D1FAE5' : '#FEE2E2',
                              color: row.status === 'Active' ? '#065F46' : '#991B1B',
                            }}
                          >
                            {row.status}
                          </span>
                        </TableCell>
                      );
                    }

                    // Actions cell
                    if (col.id === 'actions') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                        >
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={() => console.log('Edit', row.id)}>
                              <Icon name="Edit" size="small" />
                            </button>
                            <button onClick={() => console.log('Delete', row.id)}>
                              <Icon name="Delete" size="small" />
                            </button>
                          </div>
                        </TableCell>
                      );
                    }

                    // Default cell - render field value
                    return (
                      <TableCell
                        key={col.id}
                        selected={isSelected}
                        locked={isLocked}
                        leftOffset={offset}
                        data-locked={isLocked}
                      >
                        {row[col.id as keyof DataRow]}
                      </TableCell>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </ScrollContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />

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

      {/* Settings button */}
      <button
        onClick={() => setSettingsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#6366F1',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <Icon name="Settings" size="medium" />
      </button>
    </TableContainer>
  );
};
