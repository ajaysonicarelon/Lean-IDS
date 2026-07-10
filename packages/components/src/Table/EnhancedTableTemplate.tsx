/**
 * Enhanced Data Table Template with Side Panel & Sub-Headers
 * 
 * NEW FEATURES:
 * - Sub-header support for nested columns
 * - Column search filters in sub-header row
 * - Side panel for column/filter controls (alternative to modal)
 * - Conditional border radius when using side panel
 * 
 * EXISTING FEATURES:
 * - Column freezing (max 3 columns)
 * - Sorting (ascending, descending, none)
 * - Row selection (single and bulk)
 * - Pagination
 * - Column visibility toggle
 * - Column reordering (drag & drop)
 * - Resizable columns
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TableHeader } from '../TableHeader';
import { TableSubHeader } from '../TableSubHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { TableSettings, ColumnConfig } from '../TableSettings';
import { TableSidePanel, ColumnFilter, CustomTabConfig } from '../TableSidePanel';
import { TableToolbar } from './TableToolbar';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`;

const AnimatedTableRow = styled.tr<{ $animationDelay: number }>`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: slideIn 0.3s ease-out;
  animation-delay: ${({ $animationDelay }) => $animationDelay}ms;
  animation-fill-mode: backwards;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;
`;

const TableWrapper = styled.div<{ $hasSidePanel?: boolean }>`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`;

const ScrollContainer = styled.div<{ $hasSidePanel?: boolean }>`
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ $hasSidePanel }) => 
    $hasSidePanel ? '8px 0 0 8px' : '8px'};
  position: relative;
  flex: 1;
  min-height: 500px;
`;

interface DataRow {
  id: string;
  claimId: string;
  firstName: string;
  lastName: string;
  userDetails: string;
  nrCodes: string;
  paidAmount: string;
  acrLoadDates: string;
  contact: string;
  amount: string;
  avatar: string;
  city: string;
  state: string;
  status: string;
  priority: string;
}

const getSampleData = (): DataRow[] => [
  { id: '1234567890', claimId: '1234567890', firstName: 'John', lastName: 'Doe', userDetails: 'Associate Name', nrCodes: 'NR001', paidAmount: '$4,680', acrLoadDates: 'March 12, 2025', contact: '(555) 112.3334', amount: '$4,680', avatar: 'https://i.pravatar.cc/32?img=1', city: 'New York', state: 'NY', status: 'Approved', priority: 'High' },
  { id: '1234567891', claimId: '1234567891', firstName: 'Jane', lastName: 'Smith', userDetails: 'Manager', nrCodes: 'NR002', paidAmount: '$10,293', acrLoadDates: 'March 15, 2025', contact: '(555) 800.0000', amount: '$10,293', avatar: 'https://i.pravatar.cc/32?img=2', city: 'Los Angeles', state: 'CA', status: 'Pending', priority: 'Medium' },
  { id: '1234567892', claimId: '1234567892', firstName: 'Michael', lastName: 'Johnson', userDetails: 'Senior Associate', nrCodes: 'NR003', paidAmount: '$7,450', acrLoadDates: 'March 18, 2025', contact: '(555) 234.5678', amount: '$7,450', avatar: 'https://i.pravatar.cc/32?img=3', city: 'Chicago', state: 'IL', status: 'Approved', priority: 'Low' },
  { id: '1234567893', claimId: '1234567893', firstName: 'Emily', lastName: 'Brown', userDetails: 'Analyst', nrCodes: 'NR004', paidAmount: '$5,820', acrLoadDates: 'March 20, 2025', contact: '(555) 345.6789', amount: '$5,820', avatar: 'https://i.pravatar.cc/32?img=4', city: 'Houston', state: 'TX', status: 'Rejected', priority: 'High' },
  { id: '1234567894', claimId: '1234567894', firstName: 'David', lastName: 'Wilson', userDetails: 'Supervisor', nrCodes: 'NR005', paidAmount: '$12,100', acrLoadDates: 'March 22, 2025', contact: '(555) 456.7890', amount: '$12,100', avatar: 'https://i.pravatar.cc/32?img=5', city: 'Phoenix', state: 'AZ', status: 'Approved', priority: 'Medium' },
  { id: '1234567895', claimId: '1234567895', firstName: 'Sarah', lastName: 'Martinez', userDetails: 'Associate Name', nrCodes: 'NR006', paidAmount: '$8,900', acrLoadDates: 'March 25, 2025', contact: '(555) 567.8901', amount: '$8,900', avatar: 'https://i.pravatar.cc/32?img=6', city: 'Philadelphia', state: 'PA', status: 'Pending', priority: 'High' },
  { id: '1234567896', claimId: '1234567896', firstName: 'James', lastName: 'Anderson', userDetails: 'Lead', nrCodes: 'NR007', paidAmount: '$15,200', acrLoadDates: 'March 28, 2025', contact: '(555) 678.9012', amount: '$15,200', avatar: 'https://i.pravatar.cc/32?img=7', city: 'San Antonio', state: 'TX', status: 'Approved', priority: 'Low' },
  { id: '1234567897', claimId: '1234567897', firstName: 'Linda', lastName: 'Taylor', userDetails: 'Manager', nrCodes: 'NR008', paidAmount: '$6,750', acrLoadDates: 'March 30, 2025', contact: '(555) 789.0123', amount: '$6,750', avatar: 'https://i.pravatar.cc/32?img=8', city: 'San Diego', state: 'CA', status: 'Pending', priority: 'Medium' },
  { id: '1234567898', claimId: '1234567898', firstName: 'Robert', lastName: 'Thomas', userDetails: 'Associate Name', nrCodes: 'NR009', paidAmount: '$9,300', acrLoadDates: 'April 2, 2025', contact: '(555) 890.1234', amount: '$9,300', avatar: 'https://i.pravatar.cc/32?img=9', city: 'Dallas', state: 'TX', status: 'Approved', priority: 'High' },
  { id: '1234567899', claimId: '1234567899', firstName: 'Patricia', lastName: 'Jackson', userDetails: 'Senior Associate', nrCodes: 'NR010', paidAmount: '$11,500', acrLoadDates: 'April 5, 2025', contact: '(555) 901.2345', amount: '$11,500', avatar: 'https://i.pravatar.cc/32?img=10', city: 'San Jose', state: 'CA', status: 'Rejected', priority: 'Low' },
  { id: '1234567900', claimId: '1234567900', firstName: 'Christopher', lastName: 'White', userDetails: 'Analyst', nrCodes: 'NR011', paidAmount: '$7,200', acrLoadDates: 'April 8, 2025', contact: '(555) 012.3456', amount: '$7,200', avatar: 'https://i.pravatar.cc/32?img=11', city: 'Austin', state: 'TX', status: 'Approved', priority: 'Medium' },
  { id: '1234567901', claimId: '1234567901', firstName: 'Barbara', lastName: 'Harris', userDetails: 'Supervisor', nrCodes: 'NR012', paidAmount: '$13,800', acrLoadDates: 'April 10, 2025', contact: '(555) 123.4567', amount: '$13,800', avatar: 'https://i.pravatar.cc/32?img=12', city: 'Jacksonville', state: 'FL', status: 'Pending', priority: 'High' },
  { id: '1234567902', claimId: '1234567902', firstName: 'Daniel', lastName: 'Martin', userDetails: 'Associate Name', nrCodes: 'NR013', paidAmount: '$5,600', acrLoadDates: 'April 12, 2025', contact: '(555) 234.5678', amount: '$5,600', avatar: 'https://i.pravatar.cc/32?img=13', city: 'Fort Worth', state: 'TX', status: 'Approved', priority: 'Low' },
  { id: '1234567903', claimId: '1234567903', firstName: 'Nancy', lastName: 'Thompson', userDetails: 'Lead', nrCodes: 'NR014', paidAmount: '$10,900', acrLoadDates: 'April 15, 2025', contact: '(555) 345.6789', amount: '$10,900', avatar: 'https://i.pravatar.cc/32?img=14', city: 'Columbus', state: 'OH', status: 'Pending', priority: 'Medium' },
  { id: '1234567904', claimId: '1234567904', firstName: 'Matthew', lastName: 'Garcia', userDetails: 'Manager', nrCodes: 'NR015', paidAmount: '$8,400', acrLoadDates: 'April 18, 2025', contact: '(555) 456.7890', amount: '$8,400', avatar: 'https://i.pravatar.cc/32?img=15', city: 'Charlotte', state: 'NC', status: 'Approved', priority: 'High' },
  { id: '1234567905', claimId: '1234567905', firstName: 'Karen', lastName: 'Martinez', userDetails: 'Associate Name', nrCodes: 'NR016', paidAmount: '$14,200', acrLoadDates: 'April 20, 2025', contact: '(555) 567.8901', amount: '$14,200', avatar: 'https://i.pravatar.cc/32?img=16', city: 'San Francisco', state: 'CA', status: 'Rejected', priority: 'Low' },
  { id: '1234567906', claimId: '1234567906', firstName: 'Joseph', lastName: 'Robinson', userDetails: 'Senior Associate', nrCodes: 'NR017', paidAmount: '$6,900', acrLoadDates: 'April 22, 2025', contact: '(555) 678.9012', amount: '$6,900', avatar: 'https://i.pravatar.cc/32?img=17', city: 'Indianapolis', state: 'IN', status: 'Approved', priority: 'Medium' },
  { id: '1234567907', claimId: '1234567907', firstName: 'Lisa', lastName: 'Clark', userDetails: 'Analyst', nrCodes: 'NR018', paidAmount: '$12,700', acrLoadDates: 'April 25, 2025', contact: '(555) 789.0123', amount: '$12,700', avatar: 'https://i.pravatar.cc/32?img=18', city: 'Seattle', state: 'WA', status: 'Pending', priority: 'High' },
  { id: '1234567908', claimId: '1234567908', firstName: 'Thomas', lastName: 'Rodriguez', userDetails: 'Supervisor', nrCodes: 'NR019', paidAmount: '$9,800', acrLoadDates: 'April 28, 2025', contact: '(555) 890.1234', amount: '$9,800', avatar: 'https://i.pravatar.cc/32?img=19', city: 'Denver', state: 'CO', status: 'Approved', priority: 'Low' },
  { id: '1234567909', claimId: '1234567909', firstName: 'Betty', lastName: 'Lewis', userDetails: 'Associate Name', nrCodes: 'NR020', paidAmount: '$11,100', acrLoadDates: 'April 30, 2025', contact: '(555) 901.2345', amount: '$11,100', avatar: 'https://i.pravatar.cc/32?img=20', city: 'Boston', state: 'MA', status: 'Pending', priority: 'Medium' },
];

// Simple columns without sub-headers (default)
const getSimpleColumnConfigs = (): ColumnConfig[] => [
  { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
  { id: 'claimId', label: 'Claim ID', visible: true, locked: false, order: 1 },
  { id: 'firstName', label: 'First Name', visible: true, locked: false, order: 2 },
  { id: 'lastName', label: 'Last Name', visible: true, locked: false, order: 3 },
  { id: 'userDetails', label: 'Role', visible: true, locked: false, order: 4 },
  { id: 'nrCodes', label: 'NR Codes', visible: true, locked: false, order: 5 },
  { id: 'paidAmount', label: 'Paid Amount', visible: true, locked: false, order: 6 },
  { id: 'acrLoadDates', label: 'ACR Load Dates', visible: true, locked: false, order: 7 },
  { id: 'city', label: 'City', visible: true, locked: false, order: 8 },
  { id: 'state', label: 'State', visible: true, locked: false, order: 9 },
  { id: 'contact', label: 'Contact', visible: true, locked: false, order: 10 },
  { id: 'status', label: 'Status', visible: true, locked: false, order: 11 },
  { id: 'priority', label: 'Priority', visible: true, locked: false, order: 12 },
  { id: 'amount', label: 'Amount', visible: true, locked: false, order: 13 },
];

// Columns with sub-headers (for WithSubHeaders story)
export const getNestedColumnConfigs = (): ColumnConfig[] => [
  { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
  { 
    id: 'claimId', 
    label: 'User Details', 
    visible: true, 
    locked: false, 
    order: 1,
    subColumns: [
      { id: 'firstName', label: 'First Name', visible: true, locked: false, order: 0, parentId: 'claimId' },
      { id: 'lastName', label: 'Last Name', visible: true, locked: false, order: 1, parentId: 'claimId' },
    ]
  },
  { id: 'userDetails', label: 'Role', visible: true, locked: false, order: 2 },
  { id: 'nrCodes', label: 'NR Codes', visible: true, locked: false, order: 3 },
  { id: 'paidAmount', label: 'Paid Amount', visible: true, locked: false, order: 4 },
  { id: 'acrLoadDates', label: 'ACR Load Dates', visible: true, locked: false, order: 5 },
  { 
    id: 'address', 
    label: 'Address', 
    visible: true, 
    locked: false, 
    order: 6,
    subColumns: [
      { id: 'city', label: 'City', visible: true, locked: false, order: 0, parentId: 'address' },
      { id: 'state', label: 'State', visible: true, locked: false, order: 1, parentId: 'address' },
    ]
  },
  { id: 'contact', label: 'Contact', visible: true, locked: false, order: 7 },
  { id: 'status', label: 'Status', visible: true, locked: false, order: 8 },
  { id: 'priority', label: 'Priority', visible: true, locked: false, order: 9 },
  { id: 'amount', label: 'Amount', visible: true, locked: false, order: 10 },
];

interface AdvancedTableProps {
  useSidePanel?: boolean;
  useModal?: boolean;
  showToolbar?: boolean;
  toolbarTitle?: string;
  initialColumns?: ColumnConfig[];
  onRowClick?: (row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void;
  showColumnSearchByDefault?: boolean;
  customSidePanelTabs?: CustomTabConfig[];
}

export const AdvancedDataTable: React.FC<AdvancedTableProps> = ({ 
  useSidePanel = false,
  useModal = false,
  showToolbar = true,
  toolbarTitle = 'Data Table',
  initialColumns,
  onRowClick,
  showColumnSearchByDefault = false,
  customSidePanelTabs = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
  const [allChecked, setAllChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
  const [lockWarning, setLockWarning] = useState(false);
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>(initialColumns || getSimpleColumnConfigs());
  const [showColumnFilters, setShowColumnFilters] = useState(false);
  const [columnSearches, setColumnSearches] = useState<{ [key: string]: string }>({});
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>({});
  const [animateSorting, setAnimateSorting] = useState(false);
  const [sidePanelFilters, setSidePanelFilters] = useState<ColumnFilter[]>([]);

  const sampleData = getSampleData();

  const handleColumnLock = (columnId: string) => {
    const column = columnConfigs.find(col => col.id === columnId);
    if (!column) return;

    const currentLockedCount = columnConfigs.filter(
      col => col.locked && col.id !== 'checkbox'
    ).length;

    // If trying to lock and already have 3 locked, prevent it
    if (!column.locked && currentLockedCount >= 3) {
      setLockWarning(true);
      setTimeout(() => setLockWarning(false), 3000);
      return;
    }

    // Toggle lock status - if parent is toggled, apply to all children
    const updatedConfigs = columnConfigs.map(col => {
      if (col.id === columnId) {
        if (col.subColumns) {
          return {
            ...col,
            locked: !col.locked,
            subColumns: col.subColumns.map((sub) => ({
              ...sub,
              locked: !col.locked,
            })),
          };
        }
        return { ...col, locked: !col.locked };
      }
      return col;
    });

    // Reorder: checkbox first, then locked columns, then unlocked columns
    const checkboxCol = updatedConfigs.find(col => col.id === 'checkbox');
    const nonCheckboxCols = updatedConfigs.filter(col => col.id !== 'checkbox');
    
    const sortedCols = nonCheckboxCols.sort((a, b) => {
      if (a.locked && !b.locked) return -1;
      if (!a.locked && b.locked) return 1;
      return a.order - b.order;
    });
    
    const finalConfigs = checkboxCol 
      ? [{ ...checkboxCol, order: 0 }, ...sortedCols.map((col, idx) => ({ ...col, order: idx + 1 }))]
      : sortedCols.map((col, idx) => ({ ...col, order: idx }));

    setColumnConfigs(finalConfigs);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(
        sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    
    // Trigger animation
    setAnimateSorting(true);
    setTimeout(() => setAnimateSorting(false), 50);
  };

  const handleSelectAll = (checked: boolean) => {
    setAllChecked(checked);
    setSelectedRows(checked ? Array.from({ length: sampleData.length }, (_, i) => i) : []);
  };

  const handleRowSelect = (index: number, checked: boolean, shiftKey: boolean = false) => {
    if (checked) {
      // Shift-click: Select range from last selected to current
      if (shiftKey && lastSelectedIndex !== null) {
        const start = Math.min(lastSelectedIndex, index);
        const end = Math.max(lastSelectedIndex, index);
        const rangeIndices = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        const newSelection = Array.from(new Set([...selectedRows, ...rangeIndices]));
        setSelectedRows(newSelection);
      } else {
        // Normal click: Add single row
        setSelectedRows([...selectedRows, index]);
        setLastSelectedIndex(index);
      }
    } else {
      // Uncheck: Remove row
      setSelectedRows(selectedRows.filter(i => i !== index));
      setAllChecked(false);
      setLastSelectedIndex(index);
    }
  };

  const handleFilterToggle = () => {
    // This is now just a placeholder - search headers are controlled by filters being applied
    // or showColumnSearchByDefault prop
  };

  // Automatically show/hide search headers based on applied filters
  useEffect(() => {
    if (showColumnSearchByDefault) {
      setShowColumnFilters(true);
    } else {
      setShowColumnFilters(sidePanelFilters.length > 0);
    }
  }, [sidePanelFilters, showColumnSearchByDefault]);

  const handleColumnResize = (columnId: string, width: number) => {
    setColumnWidths(prev => ({
      ...prev,
      [columnId]: width
    }));
  };

  const handleColumnSearchChange = (columnId: string, value: string) => {
    setColumnSearches(prev => ({ ...prev, [columnId]: value }));
  };

  const filteredData = sampleData.filter(row => {
    // Global search filter
    if (globalSearch) {
      const searchLower = globalSearch.toLowerCase();
      const matchesGlobalSearch = Object.values(row).some(value => 
        String(value || '').toLowerCase().includes(searchLower)
      );
      if (!matchesGlobalSearch) return false;
    }

    // Column-specific search filters (from sub-header search inputs)
    const matchesColumnSearch = Object.entries(columnSearches).every(([columnId, searchValue]) => {
      if (!searchValue) return true;
      const value = row[columnId as keyof DataRow];
      return String(value).toLowerCase().includes(searchValue.toLowerCase());
    });
    if (!matchesColumnSearch) return false;

    // Side panel dropdown filters (exact match)
    const matchesSidePanelFilters = sidePanelFilters.every(filter => {
      const value = row[filter.columnId as keyof DataRow];
      return String(value) === filter.value;
    });
    
    return matchesSidePanelFilters;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortDirection === 'none' || !sortColumn) return 0;
    let aValue: any = a[sortColumn as keyof typeof a];
    let bValue: any = b[sortColumn as keyof typeof b];
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const flattenColumns = (cols: ColumnConfig[]): ColumnConfig[] => {
    const result: ColumnConfig[] = [];
    cols.forEach(col => {
      if (col.subColumns && col.subColumns.length > 0) {
        result.push(...col.subColumns);
      } else {
        result.push(col);
      }
    });
    return result;
  };

  const visibleColumns = columnConfigs.filter(col => col.visible);
  const flatVisibleColumns = flattenColumns(visibleColumns);

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const updateOffsets = () => {
      // Use the first body row to get accurate column widths
      const firstBodyRow = scrollContainer.querySelector('tbody tr');
      if (!firstBodyRow) return;

      const cells = firstBodyRow.querySelectorAll('td');
      if (!cells || cells.length === 0) return;

      const newOffsets: { [key: string]: number } = {};
      let cumulativeOffset = 0;

      // Calculate offsets for all locked columns (including sub-columns)
      flatVisibleColumns.forEach((col, index) => {
        if (col.locked && cells[index]) {
          newOffsets[col.id] = cumulativeOffset;
          const actualWidth = (cells[index] as HTMLElement).offsetWidth;
          cumulativeOffset += actualWidth;
        }
      });

      // Calculate offsets for parent columns with locked sub-columns
      visibleColumns.forEach((parentCol) => {
        if (parentCol.subColumns && parentCol.subColumns.length > 0) {
          // If parent has sub-columns, check if any are locked
          const hasLockedChildren = parentCol.subColumns.some(sub => sub.locked);
          if (hasLockedChildren || parentCol.locked) {
            // Parent offset should be the same as its first sub-column
            const firstSubCol = parentCol.subColumns[0];
            if (newOffsets[firstSubCol.id] !== undefined) {
              newOffsets[parentCol.id] = newOffsets[firstSubCol.id];
            }
          }
        }
      });

      // Ensure checkbox is always at offset 0 and locked
      if (flatVisibleColumns.some(col => col.id === 'checkbox')) {
        newOffsets['checkbox'] = 0;
      }

      setColumnOffsets(newOffsets);
    };

    updateOffsets();

    const resizeObserver = new ResizeObserver(() => {
      updateOffsets();
    });

    const firstBodyRow = scrollContainer.querySelector('tbody tr');
    if (firstBodyRow) {
      const cells = firstBodyRow.querySelectorAll('td');
      cells.forEach(cell => resizeObserver.observe(cell));
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [flatVisibleColumns.map(c => c.id + c.locked).join(',')]);

  // Check if we have any nested columns
  const hasNestedColumns = visibleColumns.some(col => col.subColumns && col.subColumns.length > 0);

  const renderHeaderRow = () => {
    return (
      <>
        {/* Row 1: Parent headers */}
        <tr>
          {visibleColumns.map((col) => {
            const isLocked = col.locked;
            const offset = columnOffsets[col.id];
            const colSpan = col.subColumns && col.subColumns.length > 0 ? col.subColumns.length : 1;
            const rowSpan = hasNestedColumns && (!col.subColumns || col.subColumns.length === 0) ? 2 : 1;

            if (col.id === 'checkbox') {
              return (
                <TableHeader
                  key={col.id}
                  label=""
                  variant="default"
                  showCheckbox
                  checked={allChecked}
                  onCheckChange={handleSelectAll}
                  locked={isLocked}
                  leftOffset={offset}
                  data-locked={isLocked}
                  rowSpan={rowSpan}
                  isChildColumn={true}
                />
              );
            }

            const dynamicWidth = columnWidths[col.id];
            const currentWidth = dynamicWidth || (typeof col.width === 'number' ? col.width : undefined);
            
            return (
              <TableHeader
                key={col.id}
                label={col.label}
                variant={!isLocked && !col.subColumns ? 'resizeable-locked' : 'default'}
                sortable={!col.subColumns || col.subColumns.length === 0}
                sortDirection={sortColumn === col.id ? sortDirection : 'none'}
                onSort={() => handleSort(col.id)}
                locked={isLocked}
                onLockToggle={() => handleColumnLock(col.id)}
                leftOffset={offset}
                data-locked={isLocked}
                align={colSpan > 1 ? 'center' : 'left'}
                colSpan={colSpan}
                rowSpan={rowSpan}
                resizable={!col.subColumns}
                onResize={!col.subColumns ? (width) => handleColumnResize(col.id, width) : undefined}
                width={currentWidth}
              />
            );
          })}
        </tr>

        {/* Row 2: Sub-headers (only if nested columns exist) */}
        {hasNestedColumns && (
          <tr>
            {visibleColumns.map((parentCol) => {
              // Only render sub-columns for parents that have them
              if (!parentCol.subColumns || parentCol.subColumns.length === 0) {
                return null;
              }

              return parentCol.subColumns.map((subCol) => {
                const isLocked = subCol.locked;
                const offset = columnOffsets[subCol.id];
                const dynamicWidth = columnWidths[subCol.id];
                const currentWidth = dynamicWidth || (typeof subCol.width === 'number' ? subCol.width : undefined);

                return (
                  <TableHeader
                    key={subCol.id}
                    label={subCol.label}
                    variant={!isLocked ? 'resizeable-locked' : 'default'}
                    sortable
                    sortDirection={sortColumn === subCol.id ? sortDirection : 'none'}
                    onSort={() => handleSort(subCol.id)}
                    locked={isLocked}
                    leftOffset={offset}
                    data-locked={isLocked}
                    isChildColumn={true}
                    resizable={true}
                    onResize={(width) => handleColumnResize(subCol.id, width)}
                    width={currentWidth}
                  />
                );
              });
            })}
          </tr>
        )}
      </>
    );
  };

  const renderSearchFilterRow = () => {
    if (!showColumnFilters) return null;

    return (
      <tr>
        {flatVisibleColumns.map((col) => {
          const isLocked = col.locked;
          const offset = columnOffsets[col.id];
          const isFilterable = col.filterable !== false; // Default to true if not specified

          // Skip filter input for checkbox-only columns (first column with only checkbox, no label)
          if (col.id === 'checkbox') {
            return (
              <th
                key={col.id}
                style={{
                  position: isLocked ? 'sticky' : 'relative',
                  left: isLocked ? `${offset}px` : 'auto',
                  zIndex: isLocked ? 3 : 1,
                  background: '#f9fafb',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '8px 12px',
                  minWidth: '48px',
                }}
                data-locked={isLocked ? 'true' : undefined}
              />
            );
          }

          // If column is not filterable, render empty cell
          if (!isFilterable) {
            return (
              <th
                key={col.id}
                style={{
                  position: isLocked ? 'sticky' : 'relative',
                  left: isLocked ? `${offset}px` : 'auto',
                  zIndex: isLocked ? 3 : 1,
                  background: '#f9fafb',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '8px 12px',
                }}
                data-locked={isLocked ? 'true' : undefined}
              />
            );
          }

          return (
            <TableSubHeader
              key={col.id}
              searchValue={columnSearches[col.id] || ''}
              searchPlaceholder={`Search ${col.label}`}
              onSearchChange={(value) => handleColumnSearchChange(col.id, value)}
              locked={isLocked}
              leftOffset={offset}
              data-locked={isLocked}
            />
          );
        })}
      </tr>
    );
  };

  return (
    <TableContainer>
      {showToolbar && (
        <TableToolbar
          title={toolbarTitle}
          showGlobalSearch={true}
          globalSearchValue={globalSearch}
          onGlobalSearchChange={setGlobalSearch}
          globalSearchPlaceholder="Search across all columns..."
          showDropdown={false}
          dropdownOptions={[]}
          showDownload={false}
          onDownload={() => console.log('Download clicked')}
          showFilter={false}
          onFilter={() => console.log('Filter clicked')}
          showSettings={useModal}
          onSettingsClick={() => setSettingsOpen(true)}
        />
      )}

      <TableWrapper $hasSidePanel={useSidePanel}>
        <ScrollContainer data-scroll-container $hasSidePanel={useSidePanel}>
          <StyledTable>
            <colgroup>
              {visibleColumns.map((col) => {
                if (col.subColumns && col.subColumns.length > 0) {
                  // For grouped columns, each sub-column can have its own width
                  return col.subColumns.map((subCol) => {
                    const dynamicWidth = columnWidths[subCol.id];
                    const width = dynamicWidth ? `${dynamicWidth}px` : (subCol.width || col.width || '150px');
                    return <col key={subCol.id} style={{ width }} />;
                  });
                } else if (col.id === 'checkbox') {
                  const dynamicWidth = columnWidths[col.id];
                  const width = dynamicWidth ? `${dynamicWidth}px` : (col.width || '48px');
                  return <col key={col.id} style={{ width }} />;
                } else {
                  const dynamicWidth = columnWidths[col.id];
                  const width = dynamicWidth ? `${dynamicWidth}px` : (col.width || '150px');
                  return <col key={col.id} style={{ width }} />;
                }
              })}
            </colgroup>
            <thead>
              {renderHeaderRow()}
              {renderSearchFilterRow()}
            </thead>

            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td 
                    colSpan={flatVisibleColumns.length} 
                    style={{ 
                      textAlign: 'center', 
                      padding: '48px 24px',
                      color: '#666',
                      fontSize: '14px',
                      fontStyle: 'italic'
                    }}
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, rowIndex) => {
                  const isSelected = selectedRows.includes(startIndex + rowIndex);

                  // Render cells once - used by both animated and regular rows
                  const cells = flatVisibleColumns.map((col, colIndex) => {
                    const isLocked = col.locked;
                    const offset = columnOffsets[col.id];
                    const isFirstColumn = colIndex === 0;

                    if (col.id === 'checkbox') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                          isFirstColumn={isFirstColumn}
                          showCheckbox
                          checked={isSelected}
                          onCheckChange={(checked, shiftKey) => handleRowSelect(startIndex + rowIndex, checked, shiftKey)}
                        />
                      );
                    }

                    if (col.id === 'userDetails') {
                      return (
                        <TableCell
                          key={col.id}
                          selected={isSelected}
                          locked={isLocked}
                          leftOffset={offset}
                          data-locked={isLocked}
                          isFirstColumn={isFirstColumn}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img
                              src={row.avatar}
                              alt={row.userDetails}
                              style={{ width: 32, height: 32, borderRadius: '50%' }}
                            />
                            <div>
                              <div style={{ fontWeight: 600 }}>{row.userDetails}</div>
                              <div style={{ fontSize: '12px', color: '#666' }}>Role</div>
                            </div>
                          </div>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={col.id}
                        selected={isSelected}
                        locked={isLocked}
                        leftOffset={offset}
                        data-locked={isLocked}
                        isFirstColumn={isFirstColumn}
                      >
                        {row[col.id as keyof DataRow]}
                      </TableCell>
                    );
                  });

                  // Row click handler
                  const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
                    if (onRowClick) {
                      onRowClick(row, startIndex + rowIndex, e);
                    }
                  };

                  // Use animated row when sorting, regular row otherwise
                  return animateSorting ? (
                    <AnimatedTableRow 
                      key={row.id} 
                      $animationDelay={rowIndex * 20}
                      onClick={handleRowClick}
                      style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                    >
                      {cells}
                    </AnimatedTableRow>
                  ) : (
                    <tr 
                      key={row.id}
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

        {useSidePanel && (
          <TableSidePanel
            columns={columnConfigs.filter(col => col.id !== 'checkbox')}
            onColumnsChange={(newConfigs) => {
              const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
              const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;
              setColumnConfigs(mergedConfigs);
            }}
            onFilterToggle={handleFilterToggle}
            showFilters={showColumnFilters}
            lockWarning={lockWarning}
            tableData={sampleData}
            columnFilters={sidePanelFilters}
            onFiltersChange={setSidePanelFilters}
            customTabs={customSidePanelTabs}
          />
        )}
      </TableWrapper>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />

      {useModal && (
        <TableSettings
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          columns={columnConfigs.filter(col => col.id !== 'checkbox')}
          lockWarning={lockWarning}
          onColumnsChange={(newConfigs) => {
            const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
            const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;
            setColumnConfigs(mergedConfigs);
          }}
        />
      )}
    </TableContainer>
  );
};
