import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Pagination

Pagination component for navigating through pages of content with page numbers and navigation controls.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Pagination } from '@ajaysoni7832/lean-ids-components';

function MyTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}
\`\`\`

## Features

✅ **Page Numbers** - Shows current and nearby pages
✅ **Navigation Arrows** - Previous/Next buttons
✅ **First/Last** - Jump to first or last page
✅ **Ellipsis** - Shows ... for skipped pages
✅ **Items Info** - Display total items and range
✅ **Keyboard Navigation** - Full keyboard support
✅ **Responsive** - Adapts to screen size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| currentPage | number | required | Current active page (1-indexed) |
| totalPages | number | required | Total number of pages |
| onPageChange | (page: number) => void | required | Page change handler |
| totalItems | number | - | Total number of items |
| itemsPerPage | number | - | Items per page |
| showFirstLast | boolean | true | Show first/last buttons |
| maxPageNumbers | number | 7 | Max page numbers to show |
| className | string | - | Custom CSS class |

## Examples

### Basic Pagination
\`\`\`tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
\`\`\`

### With Items Info
\`\`\`tsx
<Pagination
  currentPage={2}
  totalPages={20}
  totalItems={200}
  itemsPerPage={10}
  onPageChange={setPage}
/>
// Shows: "Showing 11-20 of 200 items"
\`\`\`

### Without First/Last Buttons
\`\`\`tsx
<Pagination
  currentPage={5}
  totalPages={15}
  onPageChange={setPage}
  showFirstLast={false}
/>
\`\`\`

### Custom Max Page Numbers
\`\`\`tsx
<Pagination
  currentPage={10}
  totalPages={50}
  onPageChange={setPage}
  maxPageNumbers={5}
/>
// Shows fewer page numbers for compact display
\`\`\`

### Complete Example with Table
\`\`\`tsx
function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 156;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <>
      <Table data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
\`\`\`

## Best Practices

1. **Always 1-indexed** - Pages start at 1, not 0
2. **Calculate totalPages** - Math.ceil(totalItems / itemsPerPage)
3. **Reset on filter** - Set currentPage to 1 when filters change
4. **Show items info** - Help users understand data range
5. **Limit page numbers** - Use maxPageNumbers for many pages
6. **Disable when loading** - Prevent clicks during data fetch

## Page Number Display Logic

- **Few pages (≤7)**: Show all pages
- **Start**: 1 2 3 4 5 ... 20
- **Middle**: 1 ... 8 9 10 ... 20
- **End**: 1 ... 16 17 18 19 20

## Keyboard Navigation

- **Tab** - Navigate between buttons
- **Enter/Space** - Activate button
- **Arrow Left** - Previous page
- **Arrow Right** - Next page
- **Home** - First page
- **End** - Last page

## Accessibility

- ✅ ARIA labels for all buttons
- ✅ Current page announced
- ✅ Disabled state for first/last
- ✅ Keyboard navigation
- ✅ Focus indicators
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    totalItems: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items',
    },
    itemsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page',
    },
    onPageChange: {
      action: 'page-changed',
      description: 'Callback when page changes',
    },
    onItemsPerPageChange: {
      action: 'items-per-page-changed',
      description: 'Callback when items per page changes',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
    variant: 'default',
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    totalItems: 30,
    itemsPerPage: 10,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
    totalItems: 500,
    itemsPerPage: 10,
  },
};

export const WithCustomItemsPerPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    totalItems: 120,
    itemsPerPage: 25,
    itemsPerPageOptions: [10, 25, 50, 100],
  },
};
