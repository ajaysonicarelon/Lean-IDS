import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';
import { Typography } from '../Typography';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Select Component

A dropdown select component with search functionality and support for single or multiple selection.

## Enhanced with Component Maturity Checklist

✅ **Multi-select chips display** - NEW! Inline & below modes  
✅ **Smart overflow calculation** - NEW! Auto "+N More" chip  
✅ **Performance optimized** - NEW! Memoization, debouncing, virtual scrolling  
✅ **forwardRef support** - NEW!  
✅ **Polymorphic 'as' prop** - NEW!  
✅ **Loading & Empty states** - NEW!  
✅ **Enhanced keyboard navigation** - Arrow keys, Enter, Escape  
✅ **Multiple className overrides** - 4 override points  
✅ **Comprehensive event callbacks** - 7 new events  
✅ **100% design tokens** - Zero hardcoded values  

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Select } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <Select
      label="Country"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a country"
    />
  );
}
\`\`\`

## New Features

### Multi-Select Chips Display
\`\`\`tsx
// Inline chips with smart overflow
<Select
  multiple={true}
  showChips={true}
  chipsPosition="inline"  // Chips inside field
  options={options}
  value={selected}
  onChange={setSelected}
  onMoreChipsClick={() => showModal()}
/>

// Below chips - all visible
<Select
  multiple={true}
  showChips={true}
  chipsPosition="below"  // Chips below field
  options={options}
  value={selected}
  onChange={setSelected}
/>
\`\`\`

### Performance Optimization
\`\`\`tsx
// Debounced search (300ms default)
<Select
  searchable={true}
  searchDebounceDelay={300}
  onSearchChange={(query) => fetchResults(query)}
/>

// Virtual scrolling for large datasets
<Select
  options={largeDataset}  // 1000+ items
  enableVirtualization={true}
  itemHeight={40}
/>
\`\`\`

### Loading State
\`\`\`tsx
<Select
  label="Countries"
  options={[]}
  isLoading={true}
/>
\`\`\`

### Empty State
\`\`\`tsx
<Select
  label="Results"
  options={[]}
  isEmpty={true}
  emptyMessage="No results found"
/>
\`\`\`

### Event Callbacks
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  onOpen={() => {}}
  onAfterOpen={() => {}}
  onClose={() => {}}
  onSearchChange={(query) => {}}
  onEnter={() => {}}
  onEscape={() => {}}
/>
\`\`\`

### className Overrides
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  className="custom-container"
  labelClassName="custom-label"
  dropdownClassName="custom-dropdown"
  optionClassName="custom-option"
  helperTextClassName="custom-helper"
/>
\`\`\`

## Keyboard Navigation

- **Tab** - Focus select
- **Enter/Space** - Open dropdown
- **Arrow Up/Down** - Navigate options (NEW!)
- **Enter** - Select focused option
- **Escape** - Close dropdown
- **Type** - Search/filter options

## Accessibility

- ✅ ARIA roles and labels
- ✅ Enhanced keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Disabled state announcements
- ✅ Required field indicators
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Sample options
const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'br', label: 'Brazil' },
];

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

// Wrapper component to handle state
const SelectWrapper = (args: any) => {
  const [value, setValue] = useState(args.value);

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Select {...args} value={value} onChange={setValue} />
    </div>
  );
};

/**
 * Default select with single selection
 */
export const Default: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    helperText="Choose your country"
  />,
};

/**
 * NEW: Loading State
 */
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Shows loading indicator while fetching options.</Typography>
      
      <div style={{ width: '400px' }}>
        <Select
          label="Countries"
          options={[]}
          isLoading={true}
          placeholder="Loading..."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `isLoading` prop to show a loading state with hourglass icon.',
      },
    },
  },
};

/**
 * NEW: Empty State
 */
export const EmptyState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Typography variant="body">Shows empty state when no options available.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <Select
          label="Search Results"
          options={[]}
          isEmpty={true}
          emptyMessage="No results found"
        />
        <Select
          label="Recent Items"
          options={[]}
          isEmpty={true}
          emptyMessage="No recent items"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `isEmpty` prop with custom `emptyMessage`.',
      },
    },
  },
};

/**
 * NEW: Event Callbacks
 */
export const EventCallbacks: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev.slice(-5), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">All available event callbacks demonstrated.</Typography>
        
        <Select
          label="Country"
          options={countries}
          value={value}
          onChange={(val) => {
            setValue(val as string);
            addLog(`onChange: ${val}`);
          }}
          onOpen={() => addLog('onOpen fired')}
          onAfterOpen={() => addLog('onAfterOpen fired (200ms delay)')}
          onClose={() => addLog('onClose fired')}
          onAfterClose={() => addLog('onAfterClose fired (200ms delay)')}
          onSearchChange={(query) => addLog(`onSearchChange: ${query}`)}
          onEnter={() => addLog('onEnter fired')}
          onEscape={() => addLog('onEscape fired')}
          searchable={true}
          style={{ width: '400px' }}
        />
        
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          background: '#f5f5f5', 
          borderRadius: '4px',
          maxHeight: '150px',
          overflow: 'auto'
        }}>
          <Typography variant="caption" weight="semibold" style={{ marginBottom: '8px', display: 'block' }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? (
            <Typography variant="caption" style={{ color: '#666' }}>No events yet...</Typography>
          ) : (
            logs.map((log, i) => (
              <Typography key={i} variant="caption" style={{ display: 'block', marginBottom: '4px' }}>
                {log}
              </Typography>
            ))
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
New event callbacks:
- **onOpen**: Dropdown opens
- **onClose**: Dropdown closes
- **onAfterOpen**: After open animation (200ms)
- **onAfterClose**: After close animation (200ms)
- **onSearchChange**: Search query changes
- **onEnter**: Enter key pressed
- **onEscape**: Escape key pressed
        `,
      },
    },
  },
};

/**
 * Select with required field indicator
 */
export const Required: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    required={true}
    helperText="This field is required"
  />,
};

/**
 * Select with searchable dropdown
 */
export const Searchable: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Search countries..."
    options={countries}
    searchable={true}
    helperText="Type to search"
  />,
};

/**
 * Multiple selection with checkboxes
 */
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    
    return (
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Select
          label="Favorite Fruits"
          placeholder="Select fruits"
          options={fruits}
          value={value}
          onChange={(val) => setValue(val as string[])}
          multiple={true}
          helperText="Select multiple options"
        />
      </div>
    );
  },
};

/**
 * Select with error state
 */
export const Error: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    error={true}
    helperText="Please select a valid country"
    required={true}
  />,
};

/**
 * Disabled select
 */
export const Disabled: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    disabled={true}
    helperText="This field is disabled"
  />,
};

/**
 * NEW: Multi-Select with Below Chips (All Visible)
 */
export const BelowChips: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca', 'au', 'de']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Below Chips - All Visible</Typography>
        <Typography variant="body">
          All selected chips displayed below the input field with wrapping.
        </Typography>
        
        <div style={{ width: '400px' }}>
          <Select
            label="Select Countries"
            placeholder="Select countries..."
            options={countries}
            value={value}
            onChange={(val) => setValue(val as string[])}
            multiple={true}
            showChips={true}
            chipsPosition="below"
            helperText="All chips visible below field"
            onChipRemove={(removedValue) => {}}
          />
        </div>
        
        <Typography variant="caption" style={{ color: '#666' }}>
          All chips are visible with wrapping. Maximum 3 rows, then scrollable.
        </Typography>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Below Chips Mode:**
- All chips displayed below the input field
- Chips wrap naturally to multiple rows
- Maximum 3 rows (~120px), then scrollable
- Full width matching select field
- Click X on chip to remove selection
        `,
      },
    },
  },
};

/**
 * NEW: Inline Chips with Manual Limit
 */
export const InlineChipsManualLimit: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', background: '#f0f0f0' }}>
        <Typography variant="headingM" weight="semibold">Inline Chips - Manual Limit</Typography>
        <Typography variant="body">
          Use maxInlineChips prop to limit how many chips show inline. Remaining shown as "+N More".
        </Typography>
        
        <div style={{ width: '600px' }}>
          <Select
            label="Select Fruits"
            placeholder="Select fruits..."
            options={fruits}
            value={value}
            onChange={(val) => setValue(val as string[])}
            multiple={true}
            showChips={true}
            chipsPosition="inline"
            maxInlineChips={3}
            helperText="Maximum 3 chips shown inline"
            onMoreChipsClick={() => {
              alert(`All ${value.length} selections:\n${value.join(', ')}`);
            }}
          />
        </div>
        
        <Typography variant="caption" style={{ color: '#666' }}>
          Only 3 chips shown due to maxInlineChips=3. Click "+N More" to see all.
        </Typography>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Use \`maxInlineChips\` prop to manually limit visible chips:
\`\`\`tsx
<Select
  showChips={true}
  chipsPosition="inline"
  maxInlineChips={3}  // Show max 3 chips
/>
\`\`\`
        `,
      },
    },
  },
};

/**
 * NEW: Chips Responsive Behavior
 */
export const ChipsResponsive: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca', 'au', 'de', 'fr']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Inline Chips - Wrapping</Typography>
        <Typography variant="body">
          All chips wrap to multiple lines inside the field. Field height grows automatically.
        </Typography>
        
        <div style={{ width: '600px' }}>
          <Select
            label="Select Countries"
            options={countries}
            value={value}
            onChange={(val) => setValue(val as string[])}
            multiple={true}
            showChips={true}
            chipsPosition="inline"
            helperText="Chips wrap to multiple lines"
          />
        </div>
        
        <Typography variant="caption" style={{ color: '#666' }}>
          Select more countries to see chips wrap. Field height adjusts automatically.
        </Typography>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**Inline chips with wrapping:**
- All chips displayed inside the field
- Chips wrap to multiple lines automatically
- Field height grows to accommodate all chips
- No manual limit needed
- Perfect for showing all selections
        `,
      },
    },
  },
};

/**
 * NEW: Chips with Searchable
 */
export const ChipsWithSearch: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Chips + Searchable</Typography>
        <Typography variant="body">
          Combine chips display with search functionality.
        </Typography>
        
        <div style={{ width: '400px' }}>
          <Select
            label="Search Countries"
            placeholder="Search and select..."
            options={countries}
            value={value}
            onChange={(val) => setValue(val as string[])}
            multiple={true}
            searchable={true}
            showChips={true}
            chipsPosition="below"
            helperText="Search and see selected chips below"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips work seamlessly with searchable dropdown.',
      },
    },
  },
};

/**
 * NEW: Chips Comparison - Inline vs Below
 */
export const ChipsComparison: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange', 'grape']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
        <Typography variant="headingL" weight="semibold">Chips Display Modes Comparison</Typography>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
              Inline Mode
            </Typography>
            <Typography variant="body" style={{ marginBottom: '16px', color: '#666' }}>
              Compact, chips inside field, smart overflow with "+N More"
            </Typography>
            <div style={{ width: '400px' }}>
              <Select
                label="Inline Chips"
                options={fruits}
                value={value}
                onChange={(val) => setValue(val as string[])}
                multiple={true}
                showChips={true}
                chipsPosition="inline"
              />
            </div>
          </div>
          
          <div>
            <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
              Below Mode
            </Typography>
            <Typography variant="body" style={{ marginBottom: '16px', color: '#666' }}>
              All chips visible, wrapping below field
            </Typography>
            <div style={{ width: '400px' }}>
              <Select
                label="Below Chips"
                options={fruits}
                value={value}
                onChange={(val) => setValue(val as string[])}
                multiple={true}
                showChips={true}
                chipsPosition="below"
              />
            </div>
          </div>
          
          <div>
            <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
              No Chips (Default)
            </Typography>
            <Typography variant="body" style={{ marginBottom: '16px', color: '#666' }}>
              Traditional "N selected" text
            </Typography>
            <div style={{ width: '400px' }}>
              <Select
                label="No Chips"
                options={fruits}
                value={value}
                onChange={(val) => setValue(val as string[])}
                multiple={true}
                showChips={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**When to use each mode:**

**Inline Chips:**
- ✅ 2-5 selections typically
- ✅ Compact UI needed
- ✅ Limited vertical space

**Below Chips:**
- ✅ Many selections (10+)
- ✅ Need to see all selections
- ✅ Vertical space available

**No Chips (Default):**
- ✅ Very large datasets (100+)
- ✅ Minimal UI
- ✅ Just need count
        `,
      },
    },
  },
};

/**
 * Component Maturity Summary
 */
export const ComponentMaturity: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '800px' }}>
      <Typography variant="headingL" weight="semibold">Component Maturity Enhancements</Typography>
      <Typography variant="body">Select now meets enterprise-grade standards with the following enhancements:</Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '16px' }}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ API & Composition</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• forwardRef support (NEW!)</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• Polymorphic 'as' prop</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• ...restProps passthrough</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ Design Tokens</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• Zero hardcoded colors</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• Zero hardcoded spacing</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• 100% token usage</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ States & Behavior</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• isLoading state</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• isEmpty state</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• Enhanced keyboard nav</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ Event Callbacks</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• onOpen/Close</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• onAfterOpen/Close</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• onSearchChange</Typography>
        </div>
      </div>
      
      <div style={{ marginTop: '16px', padding: '16px', background: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
        <Typography variant="body" weight="semibold" style={{ marginBottom: '8px' }}>📊 Total Enhancements</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 10 new props</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 7 new event callbacks</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 4 className override points</Typography>
        <Typography variant="caption" style={{ display: 'block' }}>• Zero breaking changes</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Summary of all Component Maturity Checklist enhancements applied to Select.',
      },
    },
  },
};
