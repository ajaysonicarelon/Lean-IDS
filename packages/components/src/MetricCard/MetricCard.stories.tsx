/**
 * MetricCard Storybook Stories
 * 
 * Component Maturity Checklist Requirements:
 * - ✅ Typography component in ALL stories (no HTML tags)
 * - ✅ Stories for all 8 states
 * - ✅ Stories for all 3 variants (basic, filled, set)
 * - ✅ Stories for customization (slots, render props)
 * - ✅ Story for forwardRef usage
 * - ✅ Story for polymorphic 'as' prop
 * - ✅ Comprehensive component description
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { fn } from '@storybook/test';
import { MetricCard } from './MetricCard';
import { Typography } from '../Typography';

const meta: Meta<typeof MetricCard> = {
  title: 'Data Visualization/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Enterprise-grade metric card component with full accessibility and customization support.

## Features
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography component** - All text uses Typography (no hardcoded styles)
- ✅ **Design tokens only** - No hardcoded pixels, colors, or spacing
- ✅ **Full accessibility** - ARIA attributes, keyboard navigation
- ✅ **Customization slots** - Custom render functions for all parts
- ✅ **Event callbacks** - onLoad, onError, onCardClick, onMetricClick

## Variants
- **Basic** - Simple metric display with white background
- **Filled** - Highlighted metric with purple background
- **Set** - Multiple metrics in a responsive grid

## Usage
\`\`\`tsx
import { MetricCard } from '@lean-ids/components';

<MetricCard
  variant="basic"
  metricName="Total Revenue"
  value="$8,888"
  showChange
  changeValue="+56"
  changeType="positive"
  comparisonText="vs last week"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    // Default explicit spies for all event callbacks
    onLoad: fn(),
    onError: fn(),
    onCardClick: fn(),
    onMetricClick: fn(),
    onActionClick: fn(),
    onInfoClick: fn(),
    onDropdownChange: fn(),
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['basic', 'filled', 'set'],
      description: 'Card variant',
    },
    changeType: {
      control: 'radio',
      options: ['positive', 'negative', 'neutral'],
      description: 'Change badge type',
    },
    actionType: {
      control: 'radio',
      options: ['warning', 'error', 'info', 'success'],
      description: 'Action chip type',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    isEmpty: {
      control: 'boolean',
      description: 'Empty state (no data)',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

// ============================================================================
// STATE STORIES
// ============================================================================

/**
 * **Default State** - Basic metric card
 */
export const Default: Story = {
  args: {
    variant: 'basic',
    metricName: 'Total Revenue',
    value: '$8,888',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default metric card with metric name and value.',
      },
    },
  },
};

/**
 * **Hover State** - Hover over the card to see interaction
 */
export const Hover: Story = {
  args: {
    variant: 'basic',
    metricName: 'Active Users',
    value: '1,234',
    showChange: true,
    changeValue: '+12%',
    changeType: 'positive',
    comparisonText: 'vs last month',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the card to see the hover state.',
      },
    },
  },
};

/**
 * **Focus State** - Tab to focus the card
 */
export const Focus: Story = {
  args: {
    variant: 'basic',
    metricName: 'Conversion Rate',
    value: '3.2%',
    onCardClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab to the card to see the focus state. Card is clickable when onCardClick is provided.',
      },
    },
  },
};

/**
 * **Active State** - Click the card to trigger callback
 */
export const Active: Story = {
  args: {
    variant: 'filled',
    metricName: 'Total Sales',
    value: '$45,678',
    showChange: true,
    changeValue: '+23%',
    changeType: 'positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the card to see the active state and trigger the callback. Check the Actions panel.',
      },
    },
  },
};

/**
 * **Disabled State** - Card is disabled (no interactions)
 */
export const Disabled: Story = {
  args: {
    variant: 'basic',
    metricName: 'Pending Orders',
    value: '156',
    disabled: true,
    showActionChip: true,
    actionText: 'Action Disabled',
    actionType: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled card with no interactions.',
      },
    },
  },
};

/**
 * **Loading State** - Card is loading data
 */
export const Loading: Story = {
  args: {
    variant: 'basic',
    isLoading: true,
    loadingMessage: 'Loading metrics...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner and message.',
      },
    },
  },
};

/**
 * **Empty State** - No data available
 */
export const Empty: Story = {
  args: {
    variant: 'basic',
    isEmpty: true,
    emptyMessage: 'No metrics available',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is available.',
      },
    },
  },
};

/**
 * **Error State** - Error occurred
 */
export const Error: Story = {
  args: {
    variant: 'basic',
    isInvalid: true,
    errorMessage: 'Failed to load metrics',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state when data loading fails.',
      },
    },
  },
};

// ============================================================================
// VARIANT STORIES
// ============================================================================

/**
 * **Basic Variant** - White background
 */
export const BasicVariant: Story = {
  args: {
    variant: 'basic',
    metricName: 'Total Users',
    value: '12,345',
    showChange: true,
    changeValue: '+8%',
    changeType: 'positive',
    comparisonText: 'vs last week',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic variant with white background.',
      },
    },
  },
};

/**
 * **Filled Variant** - Purple background (highlighted)
 */
export const FilledVariant: Story = {
  args: {
    variant: 'filled',
    metricName: 'Revenue',
    value: '$98,765',
    showChange: true,
    changeValue: '+15%',
    changeType: 'positive',
    comparisonText: 'vs last month',
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled variant with purple background for highlighting important metrics.',
      },
    },
  },
};

/**
 * **Set Variant** - Multiple metrics in a grid
 */
export const SetVariant: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Key Performance Indicators',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    metrics: [
      { label: 'Total Revenue', value: '$45,678', highlighted: true },
      { label: 'Active Users', value: '1,234', highlighted: false },
      { label: 'Conversion Rate', value: '3.2%', highlighted: false },
      { label: 'Avg Order Value', value: '$87', highlighted: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Set variant displaying multiple metrics in a responsive grid with optional header and dropdown.',
      },
    },
  },
};

// ============================================================================
// FEATURE STORIES
// ============================================================================

/**
 * **With Change Badge** - Positive, negative, and neutral changes
 */
export const WithChangeBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <MetricCard
        variant="basic"
        metricName="Positive Change"
        value="$12,345"
        showChange
        changeValue="+23%"
        changeType="positive"
        comparisonText="vs last week"
      />
      <MetricCard
        variant="basic"
        metricName="Negative Change"
        value="$8,765"
        showChange
        changeValue="-12%"
        changeType="negative"
        comparisonText="vs last week"
      />
      <MetricCard
        variant="basic"
        metricName="Neutral Change"
        value="$10,000"
        showChange
        changeValue="0%"
        changeType="neutral"
        comparisonText="vs last week"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Metric cards with positive, negative, and neutral change badges.',
      },
    },
  },
};

/**
 * **With Progress Bar** - Shows progress indicator
 */
export const WithProgressBar: Story = {
  args: {
    variant: 'basic',
    metricName: 'Goal Progress',
    value: '75%',
    showProgressBar: true,
    progressValue: 75,
  },
  parameters: {
    docs: {
      description: {
        story: 'Metric card with progress bar showing completion percentage.',
      },
    },
  },
};

/**
 * **With Action Chip** - Warning, error, info, and success chips
 */
export const WithActionChip: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <MetricCard
        variant="basic"
        metricName="Pending Tasks"
        value="23"
        showActionChip
        actionText="Need Action"
        actionType="warning"
        onActionClick={fn()}
      />
      <MetricCard
        variant="basic"
        metricName="Failed Jobs"
        value="5"
        showActionChip
        actionText="Critical"
        actionType="error"
        onActionClick={fn()}
      />
      <MetricCard
        variant="basic"
        metricName="Completed"
        value="156"
        showActionChip
        actionText="Success"
        actionType="success"
        onActionClick={fn()}
      />
      <MetricCard
        variant="basic"
        metricName="In Progress"
        value="12"
        showActionChip
        actionText="View Details"
        actionType="info"
        onActionClick={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Metric cards with action chips in different types: warning, error, success, and info.',
      },
    },
  },
};

/**
 * **Complete Example** - All features combined
 */
export const CompleteExample: Story = {
  args: {
    variant: 'basic',
    metricName: 'Monthly Revenue',
    value: '$125,678',
    showChange: true,
    changeValue: '+18%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: true,
    progressValue: 85,
    showActionChip: true,
    actionText: 'View Report',
    actionType: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete example with all features: change badge, progress bar, and action chip.',
      },
    },
  },
};

// ============================================================================
// CUSTOMIZATION STORIES
// ============================================================================

/**
 * **Custom Header** - Custom header render function
 */
export const CustomHeader: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Custom Header',
    metrics: [
      { label: 'Metric 1', value: '100' },
      { label: 'Metric 2', value: '200' },
    ],
    customHeader: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="headingL" weight="bold" color="#6222BC">
          Custom Header Design
        </Typography>
        <Typography variant="body" color="#909090">
          This header is fully customized using the customHeader slot
        </Typography>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom header using the customHeader render prop.',
      },
    },
  },
};

/**
 * **Custom Value** - Custom value render function
 */
export const CustomValue: Story = {
  args: {
    variant: 'basic',
    metricName: 'Custom Value',
    value: '12345',
    customValue: (value) => (
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <Typography variant="displayL" weight="bold" color="#6222BC">
          {value}
        </Typography>
        <Typography variant="body" color="#909090">
          units
        </Typography>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom value rendering using the customValue render prop.',
      },
    },
  },
};

/**
 * **Custom Empty State** - Custom empty state render function
 */
export const CustomEmptyState: Story = {
  args: {
    isEmpty: true,
    customEmptyState: () => (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '12px',
        padding: '32px'
      }}>
        <Typography variant="headingM" weight="semibold" color="#6222BC">
          No Data Yet
        </Typography>
        <Typography variant="body" align="center" color="#909090">
          Start tracking your metrics to see them here
        </Typography>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom empty state using the customEmptyState render prop.',
      },
    },
  },
};

// ============================================================================
// ADVANCED STORIES
// ============================================================================

/**
 * **ForwardRef Usage** - Accessing the DOM node
 */
export const ForwardRefUsage: Story = {
  render: () => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <MetricCard
          ref={cardRef}
          variant="basic"
          metricName="Revenue"
          value="$45,678"
          onLoad={() => cardRef.current?.focus()}
        />
        <Typography variant="body" color="#909090">
          The card is focused on load using forwardRef
        </Typography>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates forwardRef usage to access and manipulate the DOM node.',
      },
    },
  },
};

/**
 * **Polymorphic Rendering** - Render as different elements
 */
export const PolymorphicRendering: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MetricCard
        as="article"
        variant="basic"
        metricName="Rendered as Article"
        value="$12,345"
      />
      <MetricCard
        as="section"
        variant="filled"
        metricName="Rendered as Section"
        value="$67,890"
      />
      <Typography variant="caption" color="#909090">
        Check the DOM - first card is an article element, second is a section element
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates polymorphic rendering using the "as" prop to render as different HTML elements.',
      },
    },
  },
};

/**
 * **Event Callbacks** - All event callbacks demonstrated
 */
export const EventCallbacks: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Interactive Metrics',
    showInfoIcon: true,
    showDropdown: true,
    metrics: [
      { label: 'Metric 1', value: '100' },
      { label: 'Metric 2', value: '200' },
      { label: 'Metric 3', value: '300' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the card.',
      },
    },
  },
};

/**
 * **Responsive Grid** - Multiple cards in a responsive layout
 */
export const ResponsiveGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px'
    }}>
      <MetricCard
        variant="basic"
        metricName="Total Revenue"
        value="$125,678"
        showChange
        changeValue="+18%"
        changeType="positive"
        comparisonText="vs last month"
      />
      <MetricCard
        variant="filled"
        metricName="Active Users"
        value="12,345"
        showChange
        changeValue="+12%"
        changeType="positive"
        comparisonText="vs last week"
      />
      <MetricCard
        variant="basic"
        metricName="Conversion Rate"
        value="3.2%"
        showChange
        changeValue="-0.5%"
        changeType="negative"
        comparisonText="vs last month"
      />
      <MetricCard
        variant="basic"
        metricName="Avg Order Value"
        value="$87"
        showProgressBar
        progressValue={65}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple metric cards in a responsive grid layout.',
      },
    },
  },
};
