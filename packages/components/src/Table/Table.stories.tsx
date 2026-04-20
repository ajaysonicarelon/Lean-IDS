import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { Icon } from '../Icon';
import { TableSettings, ColumnConfig } from '../TableSettings';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const StyledThead = styled.thead``;
const StyledTbody = styled.tbody``;
const StyledTr = styled.tr``;

const meta: Meta = {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Usage

\`\`\`tsx
import { TableHeader, TableCell } from '@lean-ids/components';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell 
            showAvatar 
            showUserInfo 
            userName="John Doe" 
            userRole="Developer" 
          />
          <TableCell showText text="john@example.com" />
          <TableCell showBadge badgeLabel="Active" badgeType="success" />
        </tr>
      </tbody>
    </table>
  );
}
\`\`\`

The Table components provide a flexible system for building data tables with sortable headers and customizable cells.

### TableHeader Variants

- **default** - Standard header with optional checkbox, label, and sort arrow
- **locked** - Adds a lock icon for freezing/pinning columns
- **resizeable** - Adds a resize handle for adjustable column width
- **resizeable-locked** - Combines both lock and resize features
- **search** - Replaces label with a search input field

### TableHeader Props

- \`variant\` - Header variant type
- \`side\` - Position for border radius ('left' | 'middle' | 'right')
- \`locked\` - Whether column is locked/frozen
- \`resizable\` - Whether column is resizable
- \`searchValue\` - Controlled search input value
- \`onLockToggle\` - Callback when lock is toggled
- \`onResize\` - Callback when column is resized
- \`onSearchChange\` - Callback when search value changes
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const TableContainer = styled.div`
  width: 100%;
`;

const TableHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
`;

const TableTitle = styled.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

const TableActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #6c6c6c;
  transition: all 0.2s;
  
  &:hover {
    color: #222;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
`;

const Dropdown = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  background-color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  max-height: 600px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
`;

const StickyThead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f8f7fb;
`;

export const CompleteExample: Story = {
  render: () => {
    const CompleteTable = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(10);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const [settingsOpen, setSettingsOpen] = useState(false);
      const [columnOffsets, setColumnOffsets] = useState<{ [key: string]: number }>({});
      const [lockWarning, setLockWarning] = useState(false);
      const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([
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
      ]);

      // Handle column locking with auto-arrangement
      const handleColumnLock = (columnId: string, locked: boolean) => {
        // Check if trying to lock and already have 3 locked columns (excluding checkbox)
        const currentLockedCount = columnConfigs.filter(col => col.locked && col.id !== 'checkbox').length;
        
        if (locked && currentLockedCount >= 3) {
          setLockWarning(true);
          setTimeout(() => setLockWarning(false), 3000);
          return;
        }
        
        const updatedConfigs = columnConfigs.map(col =>
          col.id === columnId ? { ...col, locked } : col
        );

        // Sort to move locked columns to the left (after checkbox)
        const sortedConfigs = updatedConfigs.sort((a, b) => {
          // Checkbox always first
          if (a.id === 'checkbox') return -1;
          if (b.id === 'checkbox') return 1;
          
          // Then locked columns
          if (a.locked && !b.locked) return -1;
          if (!a.locked && b.locked) return 1;
          
          // Maintain original order for same lock state
          return a.order - b.order;
        });

        // Update order property
        const reorderedConfigs = sortedConfigs.map((col, index) => ({
          ...col,
          order: index,
        }));

        setColumnConfigs(reorderedConfigs);
      };

      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };

      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? Array.from({ length: sampleData.length }, (_, i) => i) : []);
      };

      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };

      // Reset to page 1 when items per page changes
      useEffect(() => {
        setCurrentPage(1);
      }, [itemsPerPage]);

      // Detect when locked columns are stuck and add is-stuck class
      useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
        if (!scrollContainer) return;

        const handleScroll = () => {
          const scrollLeft = scrollContainer.scrollLeft;
          const lockedElements = scrollContainer.querySelectorAll('[data-locked="true"]');
          
          lockedElements.forEach((element) => {
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

      const sampleData = [
        { id: '1001', name: 'Alice Johnson', role: 'Senior Developer', email: 'alice.johnson@company.com', phone: '+1 (555) 123-4567', location: 'New York, NY', amount: '$245,000', date: 'March 15, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=1' },
        { id: '1002', name: 'Bob Smith', role: 'Product Manager', email: 'bob.smith@company.com', phone: '+1 (555) 234-5678', location: 'San Francisco, CA', amount: '$189,500', date: 'March 18, 2025', department: 'Product', manager: 'Michael Torres', status: 'Pending', avatar: 'https://i.pravatar.cc/32?img=2' },
        { id: '1003', name: 'Carol Williams', role: 'UX Designer', email: 'carol.williams@company.com', phone: '+1 (555) 345-6789', location: 'Austin, TX', amount: '$312,750', date: 'March 20, 2025', department: 'Design', manager: 'Jennifer Lee', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=3' },
        { id: '1004', name: 'David Brown', role: 'DevOps Engineer', email: 'david.brown@company.com', phone: '+1 (555) 456-7890', location: 'Seattle, WA', amount: '$198,250', date: 'March 22, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?img=4' },
        { id: '1005', name: 'Emma Davis', role: 'Data Analyst', email: 'emma.davis@company.com', phone: '+1 (555) 567-8901', location: 'Boston, MA', amount: '$275,800', date: 'March 25, 2025', department: 'Analytics', manager: 'Robert Kim', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=5' },
        { id: '1006', name: 'Frank Martinez', role: 'Backend Developer', email: 'frank.martinez@company.com', phone: '+1 (555) 678-9012', location: 'Chicago, IL', amount: '$220,000', date: 'April 1, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=6' },
        { id: '1007', name: 'Grace Lee', role: 'Marketing Manager', email: 'grace.lee@company.com', phone: '+1 (555) 789-0123', location: 'Los Angeles, CA', amount: '$165,000', date: 'April 3, 2025', department: 'Marketing', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=7' },
        { id: '1008', name: 'Henry Wilson', role: 'QA Engineer', email: 'henry.wilson@company.com', phone: '+1 (555) 890-1234', location: 'Denver, CO', amount: '$145,500', date: 'April 5, 2025', department: 'Quality', manager: 'Jennifer Lee', status: 'Pending', avatar: 'https://i.pravatar.cc/32?img=8' },
        { id: '1009', name: 'Iris Taylor', role: 'Frontend Developer', email: 'iris.taylor@company.com', phone: '+1 (555) 901-2345', location: 'Portland, OR', amount: '$210,000', date: 'April 8, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=9' },
        { id: '1010', name: 'Jack Anderson', role: 'Sales Director', email: 'jack.anderson@company.com', phone: '+1 (555) 012-3456', location: 'Miami, FL', amount: '$295,000', date: 'April 10, 2025', department: 'Sales', manager: 'Robert Kim', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=10' },
        { id: '1011', name: 'Kelly Thompson', role: 'HR Manager', email: 'kelly.thompson@company.com', phone: '+1 (555) 123-4568', location: 'Atlanta, GA', amount: '$155,000', date: 'April 12, 2025', department: 'Human Resources', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=11' },
        { id: '1012', name: 'Liam Garcia', role: 'Security Analyst', email: 'liam.garcia@company.com', phone: '+1 (555) 234-5679', location: 'Phoenix, AZ', amount: '$185,000', date: 'April 15, 2025', department: 'Security', manager: 'Sarah Chen', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?img=12' },
        { id: '1013', name: 'Mia Rodriguez', role: 'Content Writer', email: 'mia.rodriguez@company.com', phone: '+1 (555) 345-6780', location: 'Nashville, TN', amount: '$125,000', date: 'April 18, 2025', department: 'Marketing', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=13' },
        { id: '1014', name: 'Noah Martinez', role: 'Cloud Architect', email: 'noah.martinez@company.com', phone: '+1 (555) 456-7891', location: 'Dallas, TX', amount: '$285,000', date: 'April 20, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=14' },
        { id: '1015', name: 'Olivia Hernandez', role: 'Business Analyst', email: 'olivia.hernandez@company.com', phone: '+1 (555) 567-8902', location: 'Philadelphia, PA', amount: '$175,000', date: 'April 22, 2025', department: 'Analytics', manager: 'Robert Kim', status: 'Pending', avatar: 'https://i.pravatar.cc/32?img=15' },
        { id: '1016', name: 'Paul Lopez', role: 'Mobile Developer', email: 'paul.lopez@company.com', phone: '+1 (555) 678-9013', location: 'San Diego, CA', amount: '$225,000', date: 'April 25, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=16' },
        { id: '1017', name: 'Quinn Gonzalez', role: 'UI Designer', email: 'quinn.gonzalez@company.com', phone: '+1 (555) 789-0124', location: 'Minneapolis, MN', amount: '$195,000', date: 'April 28, 2025', department: 'Design', manager: 'Jennifer Lee', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=17' },
        { id: '1018', name: 'Rachel Wilson', role: 'Project Manager', email: 'rachel.wilson@company.com', phone: '+1 (555) 890-1235', location: 'Detroit, MI', amount: '$205,000', date: 'May 1, 2025', department: 'Product', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=18' },
        { id: '1019', name: 'Samuel Moore', role: 'Database Admin', email: 'samuel.moore@company.com', phone: '+1 (555) 901-2346', location: 'Columbus, OH', amount: '$165,000', date: 'May 3, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?img=19' },
        { id: '1020', name: 'Tara Taylor', role: 'Scrum Master', email: 'tara.taylor@company.com', phone: '+1 (555) 012-3457', location: 'Charlotte, NC', amount: '$155,000', date: 'May 5, 2025', department: 'Product', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=20' },
        { id: '1021', name: 'Uma Patel', role: 'Technical Writer', email: 'uma.patel@company.com', phone: '+1 (555) 123-4569', location: 'San Jose, CA', amount: '$135,000', date: 'May 8, 2025', department: 'Documentation', manager: 'Jennifer Lee', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=21' },
        { id: '1022', name: 'Victor Chang', role: 'Solutions Architect', email: 'victor.chang@company.com', phone: '+1 (555) 234-5680', location: 'Houston, TX', amount: '$265,000', date: 'May 10, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=22' },
        { id: '1023', name: 'Wendy Kim', role: 'Customer Success Manager', email: 'wendy.kim@company.com', phone: '+1 (555) 345-6791', location: 'Raleigh, NC', amount: '$145,000', date: 'May 12, 2025', department: 'Customer Success', manager: 'Michael Torres', status: 'Pending', avatar: 'https://i.pravatar.cc/32?img=23' },
        { id: '1024', name: 'Xavier Santos', role: 'Network Engineer', email: 'xavier.santos@company.com', phone: '+1 (555) 456-7892', location: 'Tampa, FL', amount: '$175,000', date: 'May 15, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=24' },
        { id: '1025', name: 'Yara Ahmed', role: 'Product Designer', email: 'yara.ahmed@company.com', phone: '+1 (555) 567-8903', location: 'Baltimore, MD', amount: '$205,000', date: 'May 18, 2025', department: 'Design', manager: 'Jennifer Lee', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=25' },
        { id: '1026', name: 'Zachary Brown', role: 'Systems Administrator', email: 'zachary.brown@company.com', phone: '+1 (555) 678-9014', location: 'Indianapolis, IN', amount: '$155,000', date: 'May 20, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?img=26' },
        { id: '1027', name: 'Aria Johnson', role: 'Data Scientist', email: 'aria.johnson@company.com', phone: '+1 (555) 789-0125', location: 'San Antonio, TX', amount: '$235,000', date: 'May 22, 2025', department: 'Analytics', manager: 'Robert Kim', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=27' },
        { id: '1028', name: 'Blake Miller', role: 'DevOps Lead', email: 'blake.miller@company.com', phone: '+1 (555) 890-1236', location: 'Jacksonville, FL', amount: '$255,000', date: 'May 25, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=28' },
        { id: '1029', name: 'Chloe Davis', role: 'Brand Manager', email: 'chloe.davis@company.com', phone: '+1 (555) 901-2347', location: 'Columbus, OH', amount: '$165,000', date: 'May 28, 2025', department: 'Marketing', manager: 'Michael Torres', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=29' },
        { id: '1030', name: 'Dylan Garcia', role: 'Full Stack Developer', email: 'dylan.garcia@company.com', phone: '+1 (555) 012-3458', location: 'Fort Worth, TX', amount: '$215,000', date: 'June 1, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Pending', avatar: 'https://i.pravatar.cc/32?img=30' },
        { id: '1031', name: 'Elena Martinez', role: 'Compliance Officer', email: 'elena.martinez@company.com', phone: '+1 (555) 123-4570', location: 'Charlotte, NC', amount: '$185,000', date: 'June 3, 2025', department: 'Legal', manager: 'Robert Kim', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=31' },
        { id: '1032', name: 'Felix Rodriguez', role: 'AI Engineer', email: 'felix.rodriguez@company.com', phone: '+1 (555) 234-5681', location: 'San Francisco, CA', amount: '$295,000', date: 'June 5, 2025', department: 'Engineering', manager: 'Sarah Chen', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=32' },
        { id: '1033', name: 'Gina Wilson', role: 'Account Manager', email: 'gina.wilson@company.com', phone: '+1 (555) 345-6792', location: 'Denver, CO', amount: '$175,000', date: 'June 8, 2025', department: 'Sales', manager: 'Robert Kim', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=33' },
        { id: '1034', name: 'Hugo Anderson', role: 'Release Manager', email: 'hugo.anderson@company.com', phone: '+1 (555) 456-7893', location: 'Seattle, WA', amount: '$195,000', date: 'June 10, 2025', department: 'Operations', manager: 'Sarah Chen', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?img=34' },
        { id: '1035', name: 'Ivy Thompson', role: 'UX Researcher', email: 'ivy.thompson@company.com', phone: '+1 (555) 567-8904', location: 'Austin, TX', amount: '$185,000', date: 'June 12, 2025', department: 'Design', manager: 'Jennifer Lee', status: 'Active', avatar: 'https://i.pravatar.cc/32?img=35' },
      ];

      const filteredData = emailSearch
        ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase()))
        : sampleData;

      // Sort the filtered data
      const sortedData = [...filteredData].sort((a, b) => {
        if (sortDirection === 'none') return 0;
        
        let aValue: any = a[sortColumn as keyof typeof a];
        let bValue: any = b[sortColumn as keyof typeof b];
        
        // Handle amount sorting (remove $ and commas)
        if (sortColumn === 'amount') {
          aValue = parseFloat(String(aValue).replace(/[$,]/g, ''));
          bValue = parseFloat(String(bValue).replace(/[$,]/g, ''));
        }
        
        // Handle date sorting
        if (sortColumn === 'date') {
          aValue = new Date(String(aValue)).getTime();
          bValue = new Date(String(bValue)).getTime();
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });

      const totalItems = sortedData.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      // Paginate the data
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = sortedData.slice(startIndex, endIndex);

      // Get visible columns sorted by order
      const visibleColumns = columnConfigs
        .filter(col => col.visible)
        .sort((a, b) => a.order - b.order);

      // Dynamically calculate offsets from actual rendered column widths using ResizeObserver
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

        // Initial calculation
        updateOffsets();

        // Observe all header elements for size changes
        const resizeObserver = new ResizeObserver(() => {
          updateOffsets();
        });

        const headers = scrollContainer.querySelectorAll('thead th');
        headers.forEach(header => resizeObserver.observe(header));

        return () => {
          resizeObserver.disconnect();
        };
      }, [visibleColumns.map(c => c.id + c.locked).join(',')]);

      // Helper to render cell based on column ID
      const renderCell = (columnId: string, row: any, isSelected: boolean, isFirstColumn: boolean, locked: boolean, leftOffset: number) => {
        const commonProps = { selected: isSelected, isFirstColumn, locked, leftOffset };
        
        switch (columnId) {
          case 'checkbox':
            return null; // Handled separately
          case 'id':
            return <TableCell key="id" showNumber number={row.id} {...commonProps} />;
          case 'user':
            return <TableCell key="user" showAvatar avatarSrc={row.avatar} showUserInfo userName={row.name} userRole={row.role} {...commonProps} />;
          case 'email':
            return <TableCell key="email" showText text={row.email} {...commonProps} />;
          case 'phone':
            return <TableCell key="phone" showText text={row.phone} {...commonProps} />;
          case 'location':
            return <TableCell key="location" showText text={row.location} {...commonProps} />;
          case 'amount':
            return <TableCell key="amount" showAmount amount={row.amount} align="right" {...commonProps} />;
          case 'date':
            return <TableCell key="date" showDate date={row.date} {...commonProps} />;
          case 'department':
            return <TableCell key="department" showText text={row.department} {...commonProps} />;
          case 'manager':
            return <TableCell key="manager" showText text={row.manager} {...commonProps} />;
          case 'status':
            return <TableCell key="status" showBadge badgeLabel={row.status} badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'} {...commonProps} />;
          case 'actions':
            return <TableCell key="actions" showEditAction showDeleteAction {...commonProps} />;
          default:
            return null;
        }
      };

      return (
        <TableContainer>
          {/* Table Heading Section */}
          <TableHeading>
            <TableTitle>Tabular View</TableTitle>
            <TableActions>
              <Dropdown defaultValue="all">
                <option value="all">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
              </Dropdown>
              <ActionButton title="Download">
                <Icon name="Download" size="medium" />
              </ActionButton>
              <ActionButton title="Filter">
                <Icon name="FilterAlt" size="medium" />
              </ActionButton>
              <ActionButton title="Settings" onClick={() => setSettingsOpen(true)}>
                <Icon name="Settings" size="medium" />
              </ActionButton>
            </TableActions>
          </TableHeading>

          {/* Table with Scroll */}
          <ScrollContainer data-scroll-container>
            <StyledTable>
              <StickyThead>
                <StyledTr>
                  {visibleColumns.map((col, index) => {
                    const isFirst = index === 0;
                    const isLast = index === visibleColumns.length - 1;
                    const side = isFirst ? 'left' : isLast ? 'right' : 'middle';
                    const isLocked = col.locked || false;
                    const offset = columnOffsets[col.id] || 0;
                    
                    // Render checkbox column
                    if (col.id === 'checkbox') {
                      return (
                        <TableHeader
                          key={col.id}
                          label=""
                          side={side}
                          showCheckbox
                          checked={allChecked}
                          onCheckChange={handleSelectAll}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render ID column
                    if (col.id === 'id') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant={isLocked ? "resizeable-locked" : "resizeable"}
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
                        />
                      );
                    }
                    
                    // Render User column
                    if (col.id === 'user') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant={isLocked ? "resizeable-locked" : "resizeable"}
                          side={side}
                          resizable
                          onLockToggle={() => handleColumnLock('user', !isLocked)}
                          onResize={setNameWidth}
                          width={nameWidth}
                          sortable
                          sortDirection={sortColumn === 'name' ? sortDirection : 'none'}
                          onSort={() => handleSort('name')}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render Email column with search
                    if (col.id === 'email') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant="search"
                          side={side}
                          searchValue={emailSearch}
                          searchPlaceholder="Search emails..."
                          onSearchChange={setEmailSearch}
                          onLockToggle={isLocked ? undefined : () => handleColumnLock('email', !isLocked)}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render Amount column
                    if (col.id === 'amount') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant={isLocked ? "resizeable-locked" : "resizeable"}
                          side={side}
                          resizable
                          onLockToggle={() => handleColumnLock('amount', !isLocked)}
                          onResize={setAmountWidth}
                          width={amountWidth}
                          align="right"
                          sortable
                          sortDirection={sortColumn === 'amount' ? sortDirection : 'none'}
                          onSort={() => handleSort('amount')}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render Status column
                    if (col.id === 'status') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant={isLocked ? "resizeable-locked" : "resizeable"}
                          side={side}
                          resizable
                          onLockToggle={() => handleColumnLock('status', !isLocked)}
                          onResize={setStatusWidth}
                          width={statusWidth}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render Date column (sortable)
                    if (col.id === 'date') {
                      return (
                        <TableHeader
                          key={col.id}
                          label={col.label}
                          variant={isLocked ? "resizeable-locked" : "default"}
                          side={side}
                          sortable
                          sortDirection={sortColumn === 'date' ? sortDirection : 'none'}
                          onSort={() => handleSort('date')}
                          onLockToggle={() => handleColumnLock('date', !isLocked)}
                          locked={isLocked}
                          leftOffset={offset}
                        />
                      );
                    }
                    
                    // Render other columns (phone, location, department, manager, actions)
                    return (
                      <TableHeader
                        key={col.id}
                        label={col.label}
                        variant={isLocked ? "resizeable-locked" : "default"}
                        side={side}
                        onLockToggle={() => handleColumnLock(col.id, !isLocked)}
                        locked={isLocked}
                        leftOffset={offset}
                      />
                    );
                  })}
                </StyledTr>
              </StickyThead>
              <StyledTbody>
                {paginatedData.map((row, index) => {
                  const actualIndex = startIndex + index;
                  const isSelected = selectedRows.includes(actualIndex);
                  return (
                    <StyledTr key={row.id}>
                      {visibleColumns.map((col, colIndex) => {
                        const isFirstColumn = colIndex === 0;
                        const isLocked = col.locked || false;
                        const offset = columnOffsets[col.id] || 0;
                        if (col.id === 'checkbox') {
                          return (
                            <TableCell
                              key="checkbox"
                              showCheckbox
                              checked={isSelected}
                              onCheckChange={(checked) => handleRowSelect(actualIndex, checked)}
                              selected={isSelected}
                              isFirstColumn={isFirstColumn}
                              locked={isLocked}
                              leftOffset={offset}
                            />
                          );
                        }
                        return renderCell(col.id, row, isSelected, isFirstColumn, isLocked, offset);
                      })}
                    </StyledTr>
                  );
                })}
              </StyledTbody>
            </StyledTable>
          </ScrollContainer>

          {/* Pagination */}
          <Pagination
            variant="filled"
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
          />

          {/* Table Settings Modal */}
          <TableSettings
            isOpen={settingsOpen}
            onClose={() => setSettingsOpen(false)}
            columns={columnConfigs.filter(col => col.id !== 'checkbox')}
            lockWarning={lockWarning}
            onColumnsChange={(newConfigs) => {
              // Merge checkbox column back
              const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
              const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;
              
              // Check if any lock state changed - if so, reorder locked columns to the left
              const hasLockChanges = newConfigs.some(newCol => {
                const oldCol = columnConfigs.find(c => c.id === newCol.id);
                return oldCol && oldCol.locked !== newCol.locked;
              });

              if (hasLockChanges) {
                // Sort to move locked columns to the left (after checkbox)
                const sortedConfigs = mergedConfigs.sort((a, b) => {
                  // Checkbox always first
                  if (a.id === 'checkbox') return -1;
                  if (b.id === 'checkbox') return 1;
                  
                  // Then locked columns
                  if (a.locked && !b.locked) return -1;
                  if (!a.locked && b.locked) return 1;
                  
                  // Maintain original order for same lock state
                  return a.order - b.order;
                });

                // Update order property
                const reorderedConfigs = sortedConfigs.map((col, index) => ({
                  ...col,
                  order: index,
                }));

                setColumnConfigs(reorderedConfigs);
              } else {
                // Otherwise just update configs (for visibility/order changes)
                setColumnConfigs(mergedConfigs);
              }
            }}
          />
        </TableContainer>
      );
    };

    return <CompleteTable />;
  },
};

export const SortableHeaders: Story = {
  render: () => (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" sortable sortDirection="none" />
          <TableHeader label="Date" sortable sortDirection="desc" />
          <TableHeader label="Status" />
        </StyledTr>
      </StyledThead>
    </StyledTable>
  ),
};

export const CellWithUserInfo: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell
            showAvatar
            showUserInfo
            userName="John Doe"
            userRole="Senior Developer"
          />
        </StyledTr>
        <StyledTr>
          <TableCell
            showAvatar
            avatarSrc="https://i.pravatar.cc/32?img=5"
            showUserInfo
            userName="Jane Smith"
            userRole="Product Manager"
          />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithDataFields: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showNumber number="1234567890" />
          <TableCell showAmount amount="$123,654,000" />
          <TableCell showDate date="March 12, 2025" />
          <TableCell showText text="Regular text content" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithStatusIndicators: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showBadge badgeLabel="Active" badgeType="success" badgeStyle="default" />
          <TableCell showBadge badgeLabel="Pending" badgeType="warning" badgeStyle="subdued" />
          <TableCell showBadge badgeLabel="Error" badgeType="error" badgeStyle="outlined" />
        </StyledTr>
        <StyledTr>
          <TableCell showChip chipLabel="Premium" chipType="success" />
          <TableCell showChip chipLabel="Trial" chipType="warning" />
          <TableCell showChip chipLabel="Free" chipType="neutral" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithActions: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showEditAction showDeleteAction />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="View Details" />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="Download" showEditAction />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const SelectableRows: Story = {
  render: () => (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="" showCheckbox checked={false} indeterminate={true} />
          <TableHeader label="Name" />
          <TableHeader label="Email" />
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="John Doe" />
          <TableCell showText text="john@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="Jane Smith" />
          <TableCell showText text="jane@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={false} />
          <TableCell showText text="Bob Johnson" />
          <TableCell showText text="bob@example.com" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const AllHeaderFeatures: Story = {
  render: () => {
    const AllFeaturesTable = () => {
      const [idLocked, setIdLocked] = useState(true);
      const [statusLocked, setStatusLocked] = useState(false);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [departmentWidth, setDepartmentWidth] = useState(180);
      const [locationWidth, setLocationWidth] = useState(160);
      const [phoneWidth, setPhoneWidth] = useState(140);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);

      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };

      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? [0, 1, 2, 3] : []);
      };

      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };

      const sampleData = [
        {
          id: '1001',
          name: 'Alice Johnson',
          role: 'Senior Developer',
          email: 'alice.johnson@company.com',
          amount: '$245,000',
          date: 'March 15, 2025',
          department: 'Engineering',
          location: 'New York, NY',
          phone: '+1 (555) 123-4567',
          status: 'Active',
          avatar: 'https://i.pravatar.cc/32?img=1',
        },
        {
          id: '1002',
          name: 'Bob Smith',
          role: 'Product Manager',
          email: 'bob.smith@company.com',
          amount: '$189,500',
          date: 'March 18, 2025',
          department: 'Product',
          location: 'San Francisco, CA',
          phone: '+1 (555) 234-5678',
          status: 'Pending',
          avatar: 'https://i.pravatar.cc/32?img=2',
        },
        {
          id: '1003',
          name: 'Carol Williams',
          role: 'UX Designer',
          email: 'carol.williams@company.com',
          amount: '$312,750',
          date: 'March 20, 2025',
          department: 'Design',
          location: 'Austin, TX',
          phone: '+1 (555) 345-6789',
          status: 'Active',
          avatar: 'https://i.pravatar.cc/32?img=3',
        },
        {
          id: '1004',
          name: 'David Brown',
          role: 'DevOps Engineer',
          email: 'david.brown@company.com',
          amount: '$198,250',
          date: 'March 22, 2025',
          department: 'Operations',
          location: 'Seattle, WA',
          phone: '+1 (555) 456-7890',
          status: 'Inactive',
          avatar: 'https://i.pravatar.cc/32?img=4',
        },
      ];

      const filteredData = emailSearch
        ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase()))
        : sampleData;

      return (
        <div>
          <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f8f7fb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Interactive Features Demo</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', lineHeight: '1.6' }}>
              <li><strong>ID Column:</strong> Locked (frozen) + Resizable - Stays visible when scrolling horizontally</li>
              <li><strong>Horizontal Scroll:</strong> Table has many columns - scroll right to see more</li>
              <li><strong>Name Column:</strong> Resizable + Sortable - Drag to resize, click to sort</li>
              <li><strong>Email Column:</strong> Search header - Type to filter rows</li>
              <li><strong>Status Column:</strong> Can be locked/unlocked - Toggle lock icon to freeze</li>
            </ul>
          </div>
          <div style={{ overflowX: 'auto', border: '1px solid #e6e6e6', borderRadius: '8px' }}>
            <StyledTable>
            <StyledThead>
              <StyledTr>
                <TableHeader
                  label=""
                  side="left"
                  showCheckbox
                  checked={allChecked}
                  onCheckChange={handleSelectAll}
                />
                <TableHeader
                  label="ID"
                  variant="resizeable-locked"
                  side="left"
                  locked={idLocked}
                  resizable
                  onLockToggle={() => setIdLocked(!idLocked)}
                  onResize={setIdWidth}
                  width={idWidth}
                  sortable
                  sortDirection={sortColumn === 'id' ? sortDirection : 'none'}
                  onSort={() => handleSort('id')}
                />
                <TableHeader
                  label="User"
                  variant="resizeable"
                  resizable
                  onResize={setNameWidth}
                  width={nameWidth}
                  sortable
                  sortDirection={sortColumn === 'name' ? sortDirection : 'none'}
                  onSort={() => handleSort('name')}
                />
                <TableHeader
                  label="Email"
                  variant="search"
                  searchValue={emailSearch}
                  searchPlaceholder="Search emails..."
                  onSearchChange={setEmailSearch}
                />
                <TableHeader
                  label="Amount"
                  variant="resizeable"
                  resizable
                  onResize={setAmountWidth}
                  width={amountWidth}
                  align="right"
                  sortable
                  sortDirection={sortColumn === 'amount' ? sortDirection : 'none'}
                  onSort={() => handleSort('amount')}
                />
                <TableHeader
                  label="Date"
                  sortable
                  sortDirection={sortColumn === 'date' ? sortDirection : 'none'}
                  onSort={() => handleSort('date')}
                />
                <TableHeader
                  label="Department"
                  variant="resizeable"
                  resizable
                  onResize={setDepartmentWidth}
                  width={departmentWidth}
                  sortable
                  sortDirection={sortColumn === 'department' ? sortDirection : 'none'}
                  onSort={() => handleSort('department')}
                />
                <TableHeader
                  label="Location"
                  variant="resizeable"
                  resizable
                  onResize={setLocationWidth}
                  width={locationWidth}
                />
                <TableHeader
                  label="Phone"
                  variant="resizeable"
                  resizable
                  onResize={setPhoneWidth}
                  width={phoneWidth}
                />
                <TableHeader
                  label="Status"
                  variant="resizeable-locked"
                  locked={statusLocked}
                  resizable
                  onLockToggle={() => setStatusLocked(!statusLocked)}
                  onResize={setStatusWidth}
                  width={statusWidth}
                />
                <TableHeader label="Actions" side="right" />
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {filteredData.map((row, index) => (
                <StyledTr key={row.id}>
                  <TableCell
                    showCheckbox
                    checked={selectedRows.includes(index)}
                    onCheckChange={(checked) => handleRowSelect(index, checked)}
                  />
                  <TableCell showNumber number={row.id} />
                  <TableCell
                    showAvatar
                    avatarSrc={row.avatar}
                    showUserInfo
                    userName={row.name}
                    userRole={row.role}
                  />
                  <TableCell showText text={row.email} />
                  <TableCell showAmount amount={row.amount} align="right" />
                  <TableCell showDate date={row.date} />
                  <TableCell showText text={row.department} />
                  <TableCell showText text={row.location} />
                  <TableCell showText text={row.phone} />
                  <TableCell
                    showBadge
                    badgeLabel={row.status}
                    badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'}
                  />
                  <TableCell showEditAction showDeleteAction />
                </StyledTr>
              ))}
            </StyledTbody>
          </StyledTable>
          </div>
          {filteredData.length === 0 && (
            <div style={{ padding: '24px', textAlign: 'center', color: '#6C6C6C' }}>
              No results found for "{emailSearch}"
            </div>
          )}
        </div>
      );
    };

    return <AllFeaturesTable />;
  },
  parameters: {
    docs: {
      description: {
        story: `
### Complete Table with All Header Features

This example demonstrates all TableHeader variants and features:

**Header Variants:**
- **Default** - Standard header with checkbox and sort
- **Locked** - Column freeze/pin functionality
- **Resizeable** - Drag to adjust column width
- **Resizeable + Locked** - Both features combined
- **Search** - Inline search/filter input

**Interactive Features:**
- Checkbox selection (header + rows)
- Lock/unlock columns (ID, Status)
- Resize columns (drag handles)
- Search filtering (Email column)
- Sortable columns (click headers)
- Border radius on edge columns

**Try it:**
1. Click lock icons to freeze/unfreeze columns
2. Drag resize handles to adjust widths
3. Type in the Email search field to filter
4. Click sortable headers to change sort order
5. Select rows with checkboxes
        `,
      },
    },
  },
};
