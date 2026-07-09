import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs.types';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Tabs

A flexible tab navigation component with parent/child hierarchy support, icons, badges, and disabled states.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Tabs } from '@ajaysoni7832/lean-ids-components';
import type { TabItem } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('1');
  
  const tabs: TabItem[] = [
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
    { id: '3', label: 'Reports', leadingIcon: 'Description' },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      type="parent"
      showLeadingIcon
      showBadge
    />
  );
}
\`\`\`

## Features

✅ **Two Tab Types** - Parent (primary) and Child (secondary) tabs
✅ **Icons Support** - Leading and trailing icons
✅ **Badge Counts** - Show numerical badges on tabs
✅ **Disabled State** - Disable specific tabs
✅ **Hierarchy** - Combine parent and child tabs
✅ **Responsive** - Scrollable when many tabs
✅ **Keyboard Navigation** - Full keyboard support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tabs | TabItem[] | required | Array of tab items |
| activeTab | string | required | ID of active tab |
| onChange | (id: string) => void | required | Tab change handler |
| type | 'parent' \\| 'child' | 'parent' | Tab hierarchy type |
| showLeadingIcon | boolean | false | Show leading icons |
| showTrailingIcon | boolean | false | Show trailing icons |
| showBadge | boolean | false | Show badge counts |
| className | string | - | Custom CSS class |

## TabItem Interface

\`\`\`tsx
interface TabItem {
  id: string;              // Unique identifier
  label: string;           // Tab label text
  leadingIcon?: string;    // Material icon name
  trailingIcon?: string;   // Material icon name
  count?: number;          // Badge count
  disabled?: boolean;      // Disable the tab
}
\`\`\`

## Tab Types

### Parent Tabs (Primary)
- Larger size, bolder styling
- Use for main navigation sections
- Example: Dashboard, Analytics, Settings

### Child Tabs (Secondary)
- Smaller size, lighter styling
- Use for sub-navigation within a section
- Example: Overview, Details, History

## Examples

### Minimal Tabs
\`\`\`tsx
<Tabs
  tabs={[
    { id: '1', label: 'Tab 1' },
    { id: '2', label: 'Tab 2' },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
/>
\`\`\`

### With Icons and Badges
\`\`\`tsx
<Tabs
  tabs={[
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
  showLeadingIcon
  showBadge
/>
\`\`\`

### Hierarchy Example
\`\`\`tsx
// Parent tabs
<Tabs tabs={parentTabs} activeTab={parentTab} onChange={setParentTab} type="parent" />

// Child tabs (below parent)
<Tabs tabs={childTabs} activeTab={childTab} onChange={setChildTab} type="child" />
\`\`\`

### With Disabled Tab
\`\`\`tsx
const tabs = [
  { id: '1', label: 'Active Tab' },
  { id: '2', label: 'Disabled Tab', disabled: true },
];
\`\`\`

## Best Practices

1. **Use parent tabs for main navigation** - Top-level sections
2. **Use child tabs for sub-navigation** - Within a parent section
3. **Limit tab count** - 5-7 tabs for optimal UX
4. **Use icons sparingly** - Only when they add clarity
5. **Badge counts for notifications** - Show unread/pending items
6. **Disable, don't hide** - Show disabled tabs for context

## Keyboard Navigation

- **Tab** - Navigate between tabs
- **Enter/Space** - Activate focused tab
- **Arrow Left/Right** - Navigate between tabs
- **Home** - Go to first tab
- **End** - Go to last tab

## Accessibility

- ✅ ARIA roles and labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Disabled state announcements
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Sample tab data
const parentTabs: TabItem[] = [
  { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
  { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
  { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
  { id: '4', label: 'Settings', leadingIcon: 'Settings' },
];

const childTabs: TabItem[] = [
  { id: '1', label: 'Overview', leadingIcon: 'Home', count: 3 },
  { id: '2', label: 'Details', leadingIcon: 'Info', count: 8 },
  { id: '3', label: 'History', leadingIcon: 'History', count: 15 },
  { id: '4', label: 'Notes', leadingIcon: 'Note' },
];

// Wrapper component to handle state
const TabsWrapper = (args: any) => {
  const [activeTab, setActiveTab] = useState(args.activeTab || args.tabs[0].id);

  return (
    <div style={{ width: '100%' }}>
      <Tabs {...args} activeTab={activeTab} onChange={setActiveTab} />
      <div style={{ marginTop: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Active Tab:</strong> {activeTab}</p>
      </div>
    </div>
  );
};

/**
 * Parent (Primary) tabs with all features
 */
export const ParentTabs: Story = {
  render: () => <TabsWrapper 
    tabs={parentTabs}
    type="parent"
    showLeadingIcon={true}
    showBadge={true}
  />,
};

/**
 * Child (Secondary) tabs with all features
 */
export const ChildTabs: Story = {
  render: () => <TabsWrapper 
    tabs={childTabs}
    type="child"
    showLeadingIcon={true}
    showBadge={true}
  />,
};

/**
 * Parent tabs without icons
 */
export const ParentTabsNoIcons: Story = {
  render: () => <TabsWrapper 
    tabs={parentTabs}
    type="parent"
    showLeadingIcon={false}
    showBadge={true}
  />,
};

/**
 * Parent tabs without badges
 */
export const ParentTabsNoBadges: Story = {
  render: () => <TabsWrapper 
    tabs={parentTabs}
    type="parent"
    showLeadingIcon={true}
    showBadge={false}
  />,
};

/**
 * Parent tabs minimal (no icons, no badges)
 */
export const ParentTabsMinimal: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Dashboard' },
      { id: '2', label: 'Analytics' },
      { id: '3', label: 'Reports' },
      { id: '4', label: 'Settings' },
    ]}
    type="parent"
    showLeadingIcon={false}
    showBadge={false}
  />,
};

/**
 * Child tabs without icons
 */
export const ChildTabsNoIcons: Story = {
  render: () => <TabsWrapper 
    tabs={childTabs}
    type="child"
    showLeadingIcon={false}
    showBadge={true}
  />,
};

/**
 * Child tabs without badges
 */
export const ChildTabsNoBadges: Story = {
  render: () => <TabsWrapper 
    tabs={childTabs}
    type="child"
    showLeadingIcon={true}
    showBadge={false}
  />,
};

/**
 * Child tabs minimal (no icons, no badges)
 */
export const ChildTabsMinimal: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Overview' },
      { id: '2', label: 'Details' },
      { id: '3', label: 'History' },
      { id: '4', label: 'Notes' },
    ]}
    type="child"
    showLeadingIcon={false}
    showBadge={false}
  />,
};

/**
 * Parent tabs with disabled tab
 */
export const ParentTabsWithDisabled: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
      { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12, disabled: true },
      { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
      { id: '4', label: 'Settings', leadingIcon: 'Settings' },
    ]}
    type="parent"
    showLeadingIcon={true}
    showBadge={true}
  />,
};

/**
 * Child tabs with disabled tab
 */
export const ChildTabsWithDisabled: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Overview', leadingIcon: 'Home', count: 3 },
      { id: '2', label: 'Details', leadingIcon: 'Info', count: 8, disabled: true },
      { id: '3', label: 'History', leadingIcon: 'History', count: 15 },
      { id: '4', label: 'Notes', leadingIcon: 'Note' },
    ]}
    type="child"
    showLeadingIcon={true}
    showBadge={true}
  />,
};

/**
 * Parent and Child tabs hierarchy example
 */
export const HierarchyExample: Story = {
  render: () => {
    const [activeParentTab, setActiveParentTab] = useState('1');
    const [activeChildTab, setActiveChildTab] = useState('1');

    return (
      <div style={{ width: '100%' }}>
        <Tabs
          tabs={parentTabs}
          activeTab={activeParentTab}
          onChange={setActiveParentTab}
          type="parent"
          showLeadingIcon={true}
          showBadge={true}
        />
        <div style={{ marginTop: '16px' }}>
          <Tabs
            tabs={childTabs}
            activeTab={activeChildTab}
            onChange={setActiveChildTab}
            type="child"
            showLeadingIcon={true}
            showBadge={true}
          />
        </div>
        <div style={{ marginTop: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
          <p><strong>Active Parent Tab:</strong> {activeParentTab}</p>
          <p><strong>Active Child Tab:</strong> {activeChildTab}</p>
        </div>
      </div>
    );
  },
};

/**
 * Many tabs (scrollable)
 */
export const ManyTabs: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Tab 1', count: 1 },
      { id: '2', label: 'Tab 2', count: 2 },
      { id: '3', label: 'Tab 3', count: 3 },
      { id: '4', label: 'Tab 4', count: 4 },
      { id: '5', label: 'Tab 5', count: 5 },
      { id: '6', label: 'Tab 6', count: 6 },
      { id: '7', label: 'Tab 7', count: 7 },
      { id: '8', label: 'Tab 8', count: 8 },
    ]}
    type="parent"
    showLeadingIcon={false}
    showBadge={true}
  />,
};

/**
 * Long tab labels
 */
export const LongLabels: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Dashboard Overview', count: 4 },
      { id: '2', label: 'Analytics & Reports', count: 12 },
      { id: '3', label: 'User Management', count: 7 },
      { id: '4', label: 'System Settings', count: 2 },
    ]}
    type="parent"
    showLeadingIcon={false}
    showBadge={true}
  />,
};

/**
 * With trailing icons
 */
export const WithTrailingIcons: Story = {
  render: () => <TabsWrapper 
    tabs={[
      { id: '1', label: 'Dashboard', leadingIcon: 'Home', trailingIcon: 'ChevronRight', count: 4 },
      { id: '2', label: 'Analytics', leadingIcon: 'BarChart', trailingIcon: 'ChevronRight', count: 12 },
      { id: '3', label: 'Reports', leadingIcon: 'Description', trailingIcon: 'ChevronRight', count: 7 },
    ]}
    type="parent"
    showLeadingIcon={true}
    showTrailingIcon={true}
    showBadge={true}
  />,
};
