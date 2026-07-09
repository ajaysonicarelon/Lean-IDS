import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Select

A dropdown select component with search functionality and support for single or multiple selection.

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

## Features

✅ **Single/Multiple Selection** - Choose one or many options
✅ **Search/Filter** - Type to filter options
✅ **Keyboard Navigation** - Full keyboard support
✅ **Disabled Options** - Disable specific options
✅ **Custom Rendering** - Custom option display
✅ **Error States** - Validation support
✅ **Sizes** - Multiple size variants
✅ **Accessible** - WCAG compliant

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | SelectOption[] | required | Array of options |
| value | string \\| string[] | - | Selected value(s) |
| onChange | (value) => void | required | Change handler |
| label | string | - | Field label |
| placeholder | string | 'Select...' | Placeholder text |
| multiple | boolean | false | Allow multiple selection |
| searchable | boolean | true | Enable search/filter |
| disabled | boolean | false | Disable the select |
| error | boolean | false | Show error state |
| helperText | string | - | Helper/error message |
| size | 'small' \\| 'default' \\| 'large' | 'default' | Select size |
| required | boolean | false | Mark as required |
| clearable | boolean | false | Show clear button |
| className | string | - | Custom CSS class |

## SelectOption Interface

\`\`\`tsx
interface SelectOption {
  value: string;        // Option value
  label: string;        // Display label
  disabled?: boolean;   // Disable option
  icon?: ReactNode;     // Leading icon
  description?: string; // Optional description
}
\`\`\`

## Examples

### Basic Select
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
/>
\`\`\`

### Multiple Selection
\`\`\`tsx
<Select
  label="Skills"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
  multiple
  placeholder="Select skills"
/>
\`\`\`

### With Search Disabled
\`\`\`tsx
<Select
  label="Status"
  options={statuses}
  value={status}
  onChange={setStatus}
  searchable={false}
/>
\`\`\`

### With Error
\`\`\`tsx
<Select
  label="Department"
  options={departments}
  value={department}
  onChange={setDepartment}
  error={!!error}
  helperText={error || 'Required field'}
  required
/>
\`\`\`

### With Disabled Options
\`\`\`tsx
const options = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending', disabled: true },
  { value: 'inactive', label: 'Inactive' },
];
\`\`\`

### Clearable
\`\`\`tsx
<Select
  label="Filter"
  options={filters}
  value={filter}
  onChange={setFilter}
  clearable
/>
\`\`\`

### Different Sizes
\`\`\`tsx
<Select label="Small" options={options} size="small" />
<Select label="Default" options={options} size="default" />
<Select label="Large" options={options} size="large" />
\`\`\`

## Best Practices

1. **Use labels** - Always provide clear labels
2. **Limit options** - Consider autocomplete for 20+ options
3. **Sort logically** - Alphabetical or by frequency
4. **Provide search** - For 10+ options
5. **Show selection** - Clear visual feedback
6. **Handle empty** - Show "No options" message

## Keyboard Navigation

- **Tab** - Focus select
- **Enter/Space** - Open dropdown
- **Arrow Up/Down** - Navigate options
- **Enter** - Select option
- **Escape** - Close dropdown
- **Type** - Search/filter options
- **Backspace** - Remove last selection (multiple)

## Accessibility

- ✅ ARIA roles and labels
- ✅ Keyboard navigation
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
 * Multiple selection with search
 */
export const MultipleSearchable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    
    return (
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Select
          label="Countries"
          placeholder="Search and select"
          options={countries}
          value={value}
          onChange={(val) => setValue(val as string[])}
          multiple={true}
          searchable={true}
          helperText="Search and select multiple"
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
 * Select with pre-selected value
 */
export const PreSelected: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    value="us"
    helperText="United States is pre-selected"
  />,
};

/**
 * Select without icons
 */
export const NoIcons: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={countries}
    showLeadingIcon={false}
    showTrailingIcon={false}
    helperText="No leading or trailing icons"
  />,
};

/**
 * Select with disabled options
 */
export const DisabledOptions: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={[
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom', disabled: true },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia', disabled: true },
      { value: 'de', label: 'Germany' },
    ]}
    helperText="Some options are disabled"
  />,
};

/**
 * Small size select
 */
export const SmallSize: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={fruits}
    size="small"
    helperText="Small size select"
  />,
};

/**
 * Large size select
 */
export const LargeSize: Story = {
  render: () => <SelectWrapper 
    label="Country"
    placeholder="Select a country"
    options={fruits}
    size="large"
    helperText="Large size select"
  />,
};

/**
 * Long list with search
 */
export const LongList: Story = {
  render: () => {
    const longList = Array.from({ length: 50 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }));
    
    return (
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Select
          label="Options"
          placeholder="Search options..."
          options={longList}
          searchable={true}
          helperText="50 options available"
        />
      </div>
    );
  },
};
