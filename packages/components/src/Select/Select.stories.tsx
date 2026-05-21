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
        component: 'A dropdown select component with search and single/multiple selection support. Based on Figma design.',
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
    <div style={{ width: '300px' }}>
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
      <div style={{ width: '300px' }}>
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
      <div style={{ width: '300px' }}>
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
      <div style={{ width: '300px' }}>
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
