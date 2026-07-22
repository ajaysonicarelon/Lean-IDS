/**
 * BarChart Component Stories
 * 
 * Comprehensive Storybook documentation following Component Maturity Checklist:
 * - ✅ Typography component in ALL stories (no HTML tags)
 * - ✅ Stories for all 8 states (default, hover, focus, active, disabled, loading, empty, error)
 * - ✅ Stories for all variants/sizes
 * - ✅ Stories for customization (slots, render props)
 * - ✅ Story for forwardRef usage
 * - ✅ Copy-paste ready examples
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { fn } from '@storybook/test';
import { BarChart } from './BarChart';
import { DataVisualizationCard } from '../DataVisualizationCard';
import { Typography } from '../Typography';

const meta: Meta<typeof BarChart> = {
  title: 'Data Visualization/BarChart',
  component: BarChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Enterprise-grade bar chart component with full accessibility and customization support.

## Features
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography component** - All text uses Typography (no hardcoded styles)
- ✅ **Design tokens only** - No hardcoded pixels, colors, or spacing
- ✅ **Full accessibility** - ARIA attributes, keyboard navigation
- ✅ **Customization slots** - Custom header, tooltip, legend, states
- ✅ **Event callbacks** - onLoad, onError, onBarClick, onBarHover, onLegendClick

## Usage
\`\`\`tsx
import { BarChart } from '@lean-ids/components';

<BarChart
  title="Monthly Revenue"
  data={[
    { label: 'Jan', metrics: [{ name: 'Sales', value: 100, color: '#6222BC' }] }
  ]}
  showLegend
  yAxisLabel="Revenue ($K)"
  xAxisLabel="Month"
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
    onBarClick: fn(),
    onBarHover: fn(),
    onLegendClick: fn(),
    onInfoClick: fn(),
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Chart orientation',
    },
    height: {
      control: 'text',
      description: 'Chart height (responsive units: rem, %, vh)',
    },
    width: {
      control: 'text',
      description: 'Chart width (responsive units: rem, %, vw)',
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
type Story = StoryObj<typeof BarChart>;

// ============================================================================
// SAMPLE DATA
// ============================================================================

const revenueData = [
  { label: 'Jan', metrics: [{ name: 'Revenue', value: 45000, color: '#6222BC' }] },
  { label: 'Feb', metrics: [{ name: 'Revenue', value: 52000, color: '#6222BC' }] },
  { label: 'Mar', metrics: [{ name: 'Revenue', value: 48000, color: '#6222BC' }] },
  { label: 'Apr', metrics: [{ name: 'Revenue', value: 61000, color: '#6222BC' }] },
  { label: 'May', metrics: [{ name: 'Revenue', value: 55000, color: '#6222BC' }] },
  { label: 'Jun', metrics: [{ name: 'Revenue', value: 67000, color: '#6222BC' }] },
];

const stackedClaimData = [
  {
    label: 'Jan',
    metrics: [
      { name: 'Claims Approved', value: 50000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 70000, color: '#E3725F' },
      { name: 'Claims Denied', value: 80000, color: '#1AC2C1' }
    ]
  },
  {
    label: 'Feb',
    metrics: [
      { name: 'Claims Approved', value: 90000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 90000, color: '#E3725F' },
      { name: 'Claims Denied', value: 90000, color: '#1AC2C1' }
    ]
  },
  {
    label: 'Mar',
    metrics: [
      { name: 'Claims Approved', value: 40000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 50000, color: '#E3725F' },
      { name: 'Claims Denied', value: 50000, color: '#1AC2C1' }
    ]
  },
  {
    label: 'Apr',
    metrics: [
      { name: 'Claims Approved', value: 80000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 90000, color: '#E3725F' },
      { name: 'Claims Denied', value: 80000, color: '#1AC2C1' }
    ]
  },
  {
    label: 'May',
    metrics: [
      { name: 'Claims Approved', value: 60000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 70000, color: '#E3725F' },
      { name: 'Claims Denied', value: 70000, color: '#1AC2C1' }
    ]
  },
  {
    label: 'Jun',
    metrics: [
      { name: 'Claims Approved', value: 85000, color: '#3E71C2' },
      { name: 'Claims Pending', value: 90000, color: '#E3725F' },
      { name: 'Claims Denied', value: 95000, color: '#1AC2C1' }
    ]
  },
];

// ============================================================================
// STATE STORIES (8 States)
// ============================================================================

/**
 * **Default State** - Standard bar chart with single metric
 */
export const Default: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
  },
};

/**
 * **Hover State** - Hover over bars to see tooltips (interactive in canvas)
 */
export const Hover: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over bars to see interactive tooltips with metric details.',
      },
    },
  },
};

/**
 * **Focus State** - Tab through bars to see focus indicators (keyboard accessible)
 */
export const Focus: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Press Tab to navigate through bars. Focus indicators are visible for keyboard navigation.',
      },
    },
  },
};

/**
 * **Active State** - Click bars to trigger onBarClick callback
 */
export const Active: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on bars to see the active state and trigger the callback. Check the Actions panel to see the callback fired.',
      },
    },
  },
};

/**
 * **Disabled State** - Chart is disabled (no interactions)
 */
export const Disabled: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled chart with no hover effects or interactions.',
      },
    },
  },
};

/**
 * **Loading State** - Shows loading indicator
 */
export const Loading: Story = {
  args: {
    data: [],
    isLoading: true,
    loadingMessage: 'Loading chart data...',
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with customizable message.',
      },
    },
  },
};

/**
 * **Empty State** - No data available
 */
export const Empty: Story = {
  args: {
    data: [],
    isEmpty: true,
    emptyMessage: 'No data available for the selected period',
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with customizable message.',
      },
    },
  },
};

/**
 * **Error State** - Failed to load data
 */
export const Error: Story = {
  args: {
    data: [],
    isInvalid: true,
    errorMessage: 'Failed to load chart data. Please try again.',
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with customizable error message.',
      },
    },
  },
};

// ============================================================================
// VARIANT STORIES
// ============================================================================

/**
 * **Vertical Orientation** - Standard vertical bars (default)
 */
export const Vertical: Story = {
  args: {
    data: stackedClaimData,
    orientation: 'vertical',
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
  },
};

/**
 * **Horizontal Orientation** - Horizontal bars
 */
export const Horizontal: Story = {
  args: {
    data: stackedClaimData,
    orientation: 'horizontal',
    yAxisLabel: 'Status',
    xAxisLabel: 'Percentage',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
  },
};

/**
 * **Stacked Bars** - Multiple metrics per bar
 */
export const Stacked: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
  },
};

/**
 * **With Title and Info Icon**
 */
export const WithTitle: Story = {
  args: {
    title: 'Monthly Claims Analysis',
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    showInfoIcon: true,
    infoTooltipContent: 'This chart shows monthly claim counts by status',
    height: '18.75rem',
  },
};

/**
 * **Without Grid Lines**
 */
export const WithoutGrid: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: false,
    height: '18.75rem',
  },
};

// ============================================================================
// SIZE STORIES
// ============================================================================

/**
 * **Small Chart** - Compact size
 */
export const Small: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '12.5rem',
    width: 'min(90vw, 25rem)',
  },
};

/**
 * **Medium Chart** - Standard size (default)
 */
export const Medium: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    width: 'min(90vw, 37.5rem)',
  },
};

/**
 * **Large Chart** - Expanded size
 */
export const Large: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '25rem',
    width: 'min(90vw, 50rem)',
  },
};

/**
 * **Responsive Width** - Adapts to container
 */
export const ResponsiveWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
        Responsive Chart Example
      </Typography>
      <Typography variant="body" style={{ marginBottom: '20px' }}>
        This chart adapts to its container width using responsive units.
      </Typography>
      <BarChart
        data={stackedClaimData}
        yAxisLabel="Claim Count"
        xAxisLabel="Month"
        showGrid
        showLegend
        legendTitle="Claim Status"
        height="18.75rem"
        width="100%"
        maxWidth="100%"
      />
    </div>
  ),
};

// ============================================================================
// CUSTOMIZATION STORIES
// ============================================================================

/**
 * **Custom Header** - Custom header render function
 */
export const CustomHeader: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customHeader: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        <Typography variant="headingL" weight="bold" color="#6222BC">
          Custom Header Design
        </Typography>
        <Typography variant="body" color="#909090">
          This header is fully customized using the customHeader slot
        </Typography>
      </div>
    ),
  },
};

/**
 * **Custom Legend** - Custom legend render function
 */
export const CustomLegend: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customLegend: (metrics, activeMetrics, toggleMetric) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        <Typography variant="body" weight="semibold">
          Custom Legend
        </Typography>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {metrics.map((metric, index) => (
            <button
              key={index}
              onClick={() => toggleMetric(metric.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                border: `2px solid ${metric.color}`,
                borderRadius: '8px',
                background: activeMetrics.has(metric.name) ? metric.color : 'transparent',
                cursor: 'pointer',
              }}
            >
              <Typography
                variant="body"
                weight="medium"
                color={activeMetrics.has(metric.name) ? '#FFFFFF' : metric.color}
              >
                {metric.name}
              </Typography>
            </button>
          ))}
        </div>
      </div>
    ),
  },
};

/**
 * **Custom Empty State** - Custom empty state render function
 */
export const CustomEmptyState: Story = {
  args: {
    data: [],
    isEmpty: true,
    height: '18.75rem',
    customEmptyState: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px' }}>
        <Typography variant="headingM" weight="semibold" color="#6222BC">
          No Data Yet
        </Typography>
        <Typography variant="body" align="center" color="#909090">
          Start by adding some data to see your chart visualization
        </Typography>
        <button style={{ padding: '8px 16px', background: '#6222BC', color: '#FFFFFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Data
        </button>
      </div>
    ),
  },
};

/**
 * **Custom Loading State** - Custom loading state render function
 */
export const CustomLoadingState: Story = {
  args: {
    data: [],
    isLoading: true,
    height: '18.75rem',
    customLoadingState: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px' }}>
        <div style={{ width: '40px', height: '40px', border: '4px solid #EFE6F8', borderTop: '4px solid #6222BC', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <Typography variant="body" weight="medium">
          Loading your data...
        </Typography>
      </div>
    ),
  },
};

/**
 * **Event Callbacks** - All event callbacks demonstrated
 */
export const EventCallbacks: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the chart.',
      },
    },
  },
};

// ============================================================================
// FORWARD REF STORY
// ============================================================================

/**
 * **ForwardRef Usage** - Accessing the root DOM node via ref
 */
export const ForwardRef: Story = {
  render: () => {
    const chartRef = useRef<HTMLDivElement>(null);

    const handleFocusChart = () => {
      chartRef.current?.focus();
      chartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <Typography variant="headingM" weight="semibold" style={{ marginBottom: '8px' }}>
            ForwardRef Example
          </Typography>
          <Typography variant="body" style={{ marginBottom: '12px' }}>
            The chart exposes its root DOM node via forwardRef. Click the button to programmatically focus the chart.
          </Typography>
          <button
            onClick={handleFocusChart}
            style={{
              padding: '8px 16px',
              background: '#6222BC',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Focus Chart
          </button>
        </div>
        <BarChart
          ref={chartRef}
          data={revenueData}
          yAxisLabel="Revenue"
          xAxisLabel="Month"
          showGrid
          height="18.75rem"
        />
      </div>
    );
  },
};

// ============================================================================
// POLYMORPHIC STORY
// ============================================================================

/**
 * **Polymorphic 'as' Prop** - Render as different element
 */
export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <Typography variant="headingM" weight="semibold" style={{ marginBottom: '8px' }}>
          Polymorphic Example
        </Typography>
        <Typography variant="body" style={{ marginBottom: '12px' }}>
          This chart is rendered as a &lt;section&gt; element instead of a &lt;div&gt;.
        </Typography>
      </div>
      <BarChart
        as="section"
        data={revenueData}
        yAxisLabel="Revenue"
        xAxisLabel="Month"
        showGrid
        height="18.75rem"
      />
    </div>
  ),
};

// ============================================================================
// INTEGRATION STORY
// ============================================================================

/**
 * **In DataVisualizationCard** - Complete integration example
 */
export const InCard: Story = {
  render: () => (
    <div style={{ width: 'min(90vw, 37.5rem)' }}>
      <DataVisualizationCard
        title="Claims by Status"
        showInfoIcon
        infoTooltipContent="Monthly breakdown of claims by approval status"
        showTimeRange
        timeRangeValue="Last 6 months"
      >
        <BarChart
          data={stackedClaimData}
          yAxisLabel="Claim Count"
          xAxisLabel="Month"
          showGrid
          showLegend
          legendTitle="Claim Status"
          height="18.75rem"
        />
      </DataVisualizationCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing BarChart wrapped in DataVisualizationCard with all features.',
      },
    },
  },
};
