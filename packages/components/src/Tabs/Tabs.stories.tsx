import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import { Tabs } from './Tabs';
import { Typography } from '../Typography';
import type { TabItem } from './Tabs.types';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Tabs Component

Enterprise-grade tab navigation with horizontal and vertical orientations, parent/child hierarchy, and full accessibility.

## Features

✅ **Three Orientations** - Horizontal, Vertical Left, Vertical Right
✅ **Two Tab Types** - Parent (primary) and Child (secondary)
✅ **All 8 States** - Default, hover, focus, active, disabled, loading, empty, error
✅ **Full Accessibility** - ARIA, keyboard navigation, focus management
✅ **Design Tokens** - No hardcoded values
✅ **forwardRef Support** - Access DOM node
✅ **Polymorphic** - Render as different elements

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Tabs } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('1');
  
  const tabs = [
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      orientation="horizontal"
      type="parent"
    />
  );
}
\`\`\`

## Orientation Examples

### Horizontal (Default)
\`\`\`tsx
<Tabs orientation="horizontal" ... />
\`\`\`

### Vertical Left (Sidebar)
\`\`\`tsx
<Tabs orientation="vertical-left" ... />
\`\`\`

### Vertical Right
\`\`\`tsx
<Tabs orientation="vertical-right" ... />
\`\`\`
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
  { id: '3', label: 'Reports', leadingIcon: 'Assessment', count: 7 },
  { id: '4', label: 'Settings', leadingIcon: 'Settings' },
];

const childTabs: TabItem[] = [
  { id: '1', label: 'Overview', leadingIcon: 'Home', count: 3 },
  { id: '2', label: 'Details', leadingIcon: 'Info', count: 8 },
  { id: '3', label: 'History', leadingIcon: 'History', count: 15 },
  { id: '4', label: 'Notes', leadingIcon: 'Note' },
];

// ============================================================================
// ORIENTATION STORIES
// ============================================================================

/**
 * Horizontal tabs (default) - Standard top navigation
 */
export const HorizontalParent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Horizontal Parent Tabs</Typography>
        <Tabs
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          orientation="horizontal"
          type="parent"
          showLeadingIcon
          showBadge
        />
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>
    );
  },
};

/**
 * Vertical left tabs - Perfect for sidebar navigation
 */
export const VerticalLeftParent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Sidebar Navigation</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="vertical-left"
            type="parent"
            showLeadingIcon
            showBadge
          />
        </div>
        <div style={{ flex: 1, padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="headingS" weight="semibold">Content Area</Typography>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>
    );
  },
};

/**
 * Vertical right tabs - Alternative sidebar position
 */
export const VerticalRightParent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="headingS" weight="semibold">Content Area</Typography>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Right Sidebar</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="vertical-right"
            type="parent"
            showLeadingIcon
            showBadge
          />
        </div>
      </div>
    );
  },
};

// ============================================================================
// CHILD TABS WITH ORIENTATION
// ============================================================================

/**
 * Horizontal child tabs
 */
export const HorizontalChild: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Horizontal Child Tabs</Typography>
        <Tabs
          tabs={childTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          orientation="horizontal"
          type="child"
          showLeadingIcon
          showBadge
        />
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>
    );
  },
};

/**
 * Vertical left child tabs
 */
export const VerticalLeftChild: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Tabs
          tabs={childTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          orientation="vertical-left"
          type="child"
          showLeadingIcon
          showBadge
        />
        <div style={{ flex: 1, padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>
    );
  },
};

// ============================================================================
// STATE STORIES
// ============================================================================

/**
 * Loading state
 */
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Tabs
        tabs={parentTabs}
        activeTab="1"
        onChange={() => {}}
        isLoading
      />
    </div>
  ),
};

/**
 * Error state
 */
export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingM" weight="semibold">Error State</Typography>
      <Tabs
        tabs={parentTabs}
        activeTab="1"
        onChange={() => {}}
        isInvalid
        errorMessage="Failed to load tabs"
      />
    </div>
  ),
};

/**
 * Empty state
 */
export const EmptyState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Tabs
        tabs={[]}
        activeTab="1"
        onChange={() => {}}
        emptyMessage="No tabs available"
      />
    </div>
  ),
};

/**
 * Disabled state
 */
export const DisabledState: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Disabled Tabs</Typography>
        <Tabs
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          disabled
        />
      </div>
    );
  },
};

/**
 * Individual disabled tabs
 */
export const IndividualDisabled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Individual Disabled Tabs</Typography>
        <Tabs
          tabs={[
            { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
            { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12, disabled: true },
            { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
            { id: '4', label: 'Settings', leadingIcon: 'Settings', disabled: true },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon
          showBadge
        />
      </div>
    );
  },
};

// ============================================================================
// CUSTOMIZATION STORIES
// ============================================================================

/**
 * forwardRef usage - Access DOM node
 */
export const ForwardRefUsage: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const tabsRef = useRef<HTMLDivElement>(null);

    const handleScrollToTabs = () => {
      tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">forwardRef Example</Typography>
        <button onClick={handleScrollToTabs} style={{ padding: '8px 16px', width: 'fit-content' }}>
          Scroll to Tabs
        </button>
        <div style={{ height: '100px' }} />
        <Tabs
          ref={tabsRef}
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon
          showBadge
        />
      </div>
    );
  },
};

/**
 * Polymorphic 'as' prop - Render as different element
 */
export const PolymorphicAs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Rendered as &lt;nav&gt; element</Typography>
        <Tabs
          as="nav"
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon
          showBadge
        />
      </div>
    );
  },
};

/**
 * Custom className and style overrides
 */
export const CustomStyling: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Custom Styling</Typography>
        <Tabs
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon
          showBadge
          className="custom-tabs"
          style={{ border: '2px dashed #ccc', padding: '8px' }}
          tabClassName="custom-tab"
        />
      </div>
    );
  },
};

/**
 * Event callbacks
 */
export const EventCallbacks: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const [events, setEvents] = useState<string[]>([]);

    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), event]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Tabs
          tabs={parentTabs}
          activeTab={activeTab}
          onChange={(id) => {
            setActiveTab(id);
            addEvent(`onChange: ${id}`);
          }}
          onTabClick={(id, e) => addEvent(`onTabClick: ${id}`)}
          onTabFocus={(id) => addEvent(`onTabFocus: ${id}`)}
          onTabBlur={(id) => addEvent(`onTabBlur: ${id}`)}
          showLeadingIcon
          showBadge
        />
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="headingS" weight="semibold">Event Log</Typography>
          {events.map((event, i) => (
            <Typography key={i} variant="caption">{event}</Typography>
          ))}
        </div>
      </div>
    );
  },
};

// ============================================================================
// HIERARCHY EXAMPLE
// ============================================================================

/**
 * Parent + Child hierarchy
 */
export const HierarchyExample: Story = {
  render: () => {
    const [activeParent, setActiveParent] = useState('1');
    const [activeChild, setActiveChild] = useState('1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Tab Hierarchy</Typography>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingS" weight="semibold">Parent Tabs</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeParent}
            onChange={setActiveParent}
            type="parent"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingS" weight="semibold">Child Tabs</Typography>
          <Tabs
            tabs={childTabs}
            activeTab={activeChild}
            onChange={setActiveChild}
            type="child"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="body">Parent: {activeParent}, Child: {activeChild}</Typography>
        </div>
      </div>
    );
  },
};

// ============================================================================
// VISUAL VARIANTS
// ============================================================================

/**
 * Minimal tabs (no icons, no badges)
 */
export const Minimal: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Minimal Tabs</Typography>
        <Tabs
          tabs={[
            { id: '1', label: 'Dashboard' },
            { id: '2', label: 'Analytics' },
            { id: '3', label: 'Reports' },
            { id: '4', label: 'Settings' },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon={false}
          showBadge={false}
        />
      </div>
    );
  },
};

/**
 * With trailing icons
 */
export const WithTrailingIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Trailing Icons</Typography>
        <Tabs
          tabs={[
            { id: '1', label: 'Dashboard', leadingIcon: 'Home', trailingIcon: 'ChevronRight' },
            { id: '2', label: 'Analytics', leadingIcon: 'BarChart', trailingIcon: 'ChevronRight' },
            { id: '3', label: 'Reports', leadingIcon: 'Description', trailingIcon: 'ChevronRight' },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
          showLeadingIcon
          showTrailingIcon
        />
      </div>
    );
  },
};

// ============================================================================
// CONTENT ALIGNMENT EXAMPLES
// ============================================================================

/**
 * Content alignment - Auto-determined by orientation
 */
export const ContentAlignmentAuto: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal (Auto: Center)</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="horizontal"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Left (Auto: Left)</Typography>
            <Tabs
              tabs={parentTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-left"
              showLeadingIcon
              showBadge
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Right (Auto: Right)</Typography>
            <Tabs
              tabs={parentTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-right"
              showLeadingIcon
              showBadge
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Content alignment - Manual override
 */
export const ContentAlignmentManual: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Left Aligned (Override)</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="horizontal"
            contentAlign="left"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Right Aligned (Override)</Typography>
          <Tabs
            tabs={parentTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="horizontal"
            contentAlign="right"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Left - Center (Override)</Typography>
            <Tabs
              tabs={parentTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-left"
              contentAlign="center"
              showLeadingIcon
              showBadge
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Right - Center (Override)</Typography>
            <Tabs
              tabs={parentTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-right"
              contentAlign="center"
              showLeadingIcon
              showBadge
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Mixed icons - Some tabs with icons, some without (no empty space)
 */
export const MixedIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const mixedIconTabs: TabItem[] = [
      { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
      { id: '2', label: 'Analytics', count: 12 }, // No icon
      { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
      { id: '4', label: 'Settings' }, // No icon, no badge
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Mixed Icons</Typography>
          <Typography variant="body">Notice: No empty space for tabs without icons</Typography>
          <Tabs
            tabs={mixedIconTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            orientation="horizontal"
            showLeadingIcon
            showBadge
          />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Left - Mixed Icons</Typography>
            <Typography variant="body">No empty space on left</Typography>
            <Tabs
              tabs={mixedIconTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-left"
              showLeadingIcon
              showBadge
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Vertical Right - Mixed Icons</Typography>
            <Typography variant="body">No empty space on right</Typography>
            <Tabs
              tabs={mixedIconTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              orientation="vertical-right"
              showLeadingIcon
              showBadge
            />
          </div>
        </div>
      </div>
    );
  },
};
