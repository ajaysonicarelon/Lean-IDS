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
        component: 'A tab navigation component with parent/child hierarchy support. Based on Figma design.',
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
