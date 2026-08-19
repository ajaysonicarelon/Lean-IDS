import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';
import { DataVisualizationCard } from '../DataVisualizationCard';
import { Typography } from '../Typography';
import React from 'react';

const meta: Meta<typeof DonutChart> = {
  title: 'Data Visualization/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Enterprise-grade donut chart visualization component for displaying 2-6 metrics with optional center KPI.

**Features:**
- ✅ forwardRef support for DOM access
- ✅ Polymorphic 'as' prop
- ✅ All 8 states (default, hover, focus, active, disabled, loading, empty, error)
- ✅ Typography component (no hardcoded text styles)
- ✅ Design tokens (no hardcoded values)
- ✅ Width/maxWidth/minWidth props for responsive design
- ✅ Multiple customization slots (header, center content, legends)
- ✅ Full accessibility (ARIA, keyboard navigation)
- ✅ Comprehensive event callbacks
- ✅ **Auto-calculate center value** - Automatically updates when legends are toggled

**Auto-Calculate Center Value:**
Enable \`autoCalculateCenterValue={true}\` to automatically sum active segments and display in the center.
Use \`centerValueFormatter\` to customize the display format (e.g., currency, percentage, decimals).

**Usage:**
Always wrap in DataVisualizationCard for consistent styling in production.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

// Sample data sets
const twoMetricsData = [
  { label: 'Product A', value: 60, color: '#6222BC' }, // primary-400
  { label: 'Product B', value: 40, color: '#E3725F' }, // terracotta-500
];

const threeMetricsData = [
  { label: 'Product A', value: 45, color: '#6222BC' }, // primary-400
  { label: 'Product B', value: 30, color: '#E3725F' }, // terracotta-500
  { label: 'Product C', value: 25, color: '#1AC2C1' }, // turquoise-400
];

const fourMetricsData = [
  { label: 'Product A', value: 40, color: '#6222BC' }, // primary-400
  { label: 'Product B', value: 25, color: '#E3725F' }, // terracotta-500
  { label: 'Product C', value: 20, color: '#1AC2C1' }, // turquoise-400
  { label: 'Product D', value: 15, color: '#F5C563' }, // yellow
];

const fiveMetricsData = [
  { label: 'Product A', value: 30, color: '#6222BC' }, // primary-400
  { label: 'Product B', value: 25, color: '#E3725F' }, // terracotta-500
  { label: 'Product C', value: 20, color: '#1AC2C1' }, // turquoise-400
  { label: 'Product D', value: 15, color: '#F5C563' }, // yellow
  { label: 'Product E', value: 10, color: '#3E71C2' }, // pantone-400
];

const sixMetricsData = [
  { label: 'Product A', value: 25, color: '#6222BC' }, // primary-400
  { label: 'Product B', value: 20, color: '#E3725F' }, // terracotta-500
  { label: 'Product C', value: 18, color: '#1AC2C1' }, // turquoise-400
  { label: 'Product D', value: 15, color: '#F5C563' }, // yellow
  { label: 'Product E', value: 12, color: '#3E71C2' }, // pantone-400
  { label: 'Product F', value: 10, color: '#7AC943' }, // green
];

/**
 * 2 Metrics - Vertical layout with center KPI
 */
export const TwoMetrics: Story = {
  args: {
    title: 'Revenue Distribution',
    showInfoIcon: true,
    data: twoMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * 3 Metrics - Vertical layout with center KPI
 */
export const ThreeMetrics: Story = {
  args: {
    title: 'Market Share',
    showInfoIcon: true,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * 4 Metrics - Vertical layout with center KPI
 */
export const FourMetrics: Story = {
  args: {
    title: 'Sales by Category',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * 5 Metrics - Vertical layout with center KPI
 */
export const FiveMetrics: Story = {
  args: {
    title: 'Product Performance',
    showInfoIcon: true,
    data: fiveMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * 6 Metrics - Vertical layout with center KPI
 */
export const SixMetrics: Story = {
  args: {
    title: 'Regional Sales',
    showInfoIcon: true,
    data: sixMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * Horizontal layout - Chart on left, legends on right
 */
export const HorizontalLayout: Story = {
  args: {
    title: 'Revenue Breakdown',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'horizontal',
  },
};

/**
 * Without center value
 */
export const WithoutCenterValue: Story = {
  args: {
    title: 'Distribution Analysis',
    showInfoIcon: true,
    data: threeMetricsData,
    showCenterValue: false,
    layout: 'vertical',
  },
};

/**
 * Without title
 */
export const WithoutTitle: Story = {
  args: {
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * Without info icon
 */
export const WithoutInfoIcon: Story = {
  args: {
    title: 'Simple Chart',
    showInfoIcon: false,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * Custom size - Larger donut
 */
export const CustomSize: Story = {
  args: {
    title: 'Large Donut Chart',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$5.2m',
    showCenterValue: true,
    layout: 'vertical',
    size: 250,
  },
};

/**
 * Interactive - Click legends to toggle metrics
 * This story demonstrates the smooth circular animation when toggling segments
 */
export const Interactive: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <DonutChart
        title="Interactive Chart (Click Legends)"
        showInfoIcon={true}
        data={fiveMetricsData}
        centerValue="$3m"
        showCenterValue={true}
        layout="vertical"
      />
    </div>
  ),
};

/**
 * Auto-Calculate Center Value
 * Center value automatically updates when legends are toggled
 */
export const AutoCalculateCenterValue: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <Typography variant="body" color="secondary" style={{ marginBottom: '12px' }}>
          Click legends to toggle segments. The center value will update automatically.
        </Typography>
      </div>
      
      <DonutChart
        title="Revenue Distribution (Auto-Calculate)"
        data={fiveMetricsData}
        autoCalculateCenterValue={true}
        centerValueFormatter={(total) => `$${total}m`}
        showCenterValue={true}
        layout="vertical"
      />
    </div>
  ),
};

/**
 * Auto-Calculate with Custom Formatter
 * Demonstrates different formatting options for auto-calculated values
 */
export const AutoCalculateWithFormatters: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Currency Format ($XXm)
        </Typography>
        <DonutChart
          title="Revenue"
          data={fourMetricsData}
          autoCalculateCenterValue={true}
          centerValueFormatter={(total) => `$${total}m`}
          layout="vertical"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Percentage Format
        </Typography>
        <DonutChart
          title="Market Share"
          data={[
            { label: 'Product A', value: 35, color: '#6222BC' },
            { label: 'Product B', value: 25, color: '#E3725F' },
            { label: 'Product C', value: 20, color: '#1AC2C1' },
            { label: 'Product D', value: 20, color: '#F5C563' },
          ]}
          autoCalculateCenterValue={true}
          centerValueFormatter={(total) => `${total}%`}
          layout="vertical"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Formatted Number (1,234)
        </Typography>
        <DonutChart
          title="Total Users"
          data={[
            { label: 'Active', value: 1250, color: '#6222BC' },
            { label: 'Inactive', value: 850, color: '#E3725F' },
            { label: 'Pending', value: 400, color: '#1AC2C1' },
          ]}
          autoCalculateCenterValue={true}
          centerValueFormatter={(total) => total.toLocaleString()}
          layout="vertical"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Decimal Format (XX.X)
        </Typography>
        <DonutChart
          title="Performance Score"
          data={[
            { label: 'Excellent', value: 8.5, color: '#6222BC' },
            { label: 'Good', value: 6.2, color: '#E3725F' },
            { label: 'Average', value: 4.3, color: '#1AC2C1' },
          ]}
          autoCalculateCenterValue={true}
          centerValueFormatter={(total) => total.toFixed(1)}
          layout="vertical"
        />
      </div>
    </div>
  ),
};

/**
 * Donut Chart in Card Container (Example)
 * Shows how to wrap the chart in DataVisualizationCard with Select component and date ranges
 */
export const InCard: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <DataVisualizationCard
        title="Revenue Distribution"
        showInfoIcon={true}
        infoTooltipContent="Revenue breakdown by product category"
        showTimeRange={true}
        timeRangeValue="Last 7 days"
      >
        <DonutChart
          data={fourMetricsData}
          centerValue="$3m"
          showCenterValue={true}
          layout="vertical"
        />
      </DataVisualizationCard>
    </div>
  ),
};

// ============================================================================
// STATE STORIES
// ============================================================================

/**
 * Loading State
 * Shows loading indicator while data is being fetched
 */
export const LoadingState: Story = {
  args: {
    title: 'Revenue Distribution',
    data: fourMetricsData,
    isLoading: true,
  },
};

/**
 * Error State
 * Shows error message when data fails to load
 */
export const ErrorState: Story = {
  args: {
    title: 'Revenue Distribution',
    data: fourMetricsData,
    isInvalid: true,
    errorMessage: 'Failed to load chart data. Please try again.',
  },
};

/**
 * Empty State
 * Shows message when no data is available
 */
export const EmptyState: Story = {
  args: {
    title: 'Revenue Distribution',
    data: [],
    isEmpty: true,
    emptyMessage: 'No revenue data available for the selected period',
  },
};

/**
 * Disabled State
 * Chart is visible but interaction is disabled
 */
export const DisabledState: Story = {
  args: {
    title: 'Revenue Distribution (Disabled)',
    data: fourMetricsData,
    centerValue: '$3m',
    disabled: true,
  },
};

// ============================================================================
// LAYOUT & RESPONSIVENESS STORIES
// ============================================================================

/**
 * Responsive Width
 * Demonstrates width, maxWidth, and minWidth props for responsive design
 */
export const ResponsiveWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Full Width (100%)
        </Typography>
        <DonutChart
          title="Revenue Distribution"
          data={threeMetricsData}
          centerValue="$3m"
          width="100%"
          layout="horizontal"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Fluid with Max Width (min(90vw, 37.5rem))
        </Typography>
        <DonutChart
          title="Market Share"
          data={threeMetricsData}
          centerValue="$2.5m"
          width="min(90vw, 37.5rem)"
          layout="vertical"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Fixed Width (25rem)
        </Typography>
        <DonutChart
          title="Sales by Category"
          data={fourMetricsData}
          centerValue="$4.2m"
          width="25rem"
          layout="vertical"
        />
      </div>
    </div>
  ),
};

// ============================================================================
// CUSTOMIZATION STORIES
// ============================================================================

/**
 * Custom Header Slot
 * Replace default header with custom content
 */
export const CustomHeader: Story = {
  render: () => (
    <DonutChart
      data={fourMetricsData}
      centerValue="$3m"
      customHeader={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="headingM" weight="semibold">
            Custom Header Title
          </Typography>
          <Typography variant="caption" color="secondary">
            This is a custom header with subtitle
          </Typography>
        </div>
      }
    />
  ),
};

/**
 * Custom Center Content Slot
 * Replace default center value with custom content
 */
export const CustomCenterContent: Story = {
  render: () => (
    <DonutChart
      title="Revenue Distribution"
      data={fourMetricsData}
      customCenterContent={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <Typography variant="headingL" weight="semibold">
            $3.2M
          </Typography>
          <Typography variant="caption" color="secondary">
            Total
          </Typography>
        </div>
      }
    />
  ),
};

/**
 * Custom Legend Slot
 * Replace default legends with custom rendering
 */
export const CustomLegend: Story = {
  render: () => (
    <DonutChart
      title="Revenue Distribution"
      data={fourMetricsData}
      centerValue="$3m"
      customLegend={({ data, activeMetrics, onToggle }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <Typography variant="body" weight="semibold" style={{ marginBottom: '4px' }}>
            Product Categories
          </Typography>
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => onToggle(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                opacity: activeMetrics.has(index) ? 1 : 0.5,
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: item.color,
                }}
              />
              <Typography variant="body">
                {item.label}: {item.value}
              </Typography>
            </div>
          ))}
        </div>
      )}
    />
  ),
};

/**
 * Custom Empty State
 * Custom content for empty state
 */
export const CustomEmptyState: Story = {
  render: () => (
    <DonutChart
      title="Revenue Distribution"
      data={[]}
      isEmpty={true}
      emptyContent={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '40px' }}>
          <Typography variant="headingM" weight="semibold">
            No Data Available
          </Typography>
          <Typography variant="body" color="secondary" style={{ textAlign: 'center' }}>
            There is no revenue data for the selected time period. Try selecting a different date range.
          </Typography>
        </div>
      }
    />
  ),
};

/**
 * Custom Error State
 * Custom content for error state
 */
export const CustomErrorState: Story = {
  render: () => (
    <DonutChart
      title="Revenue Distribution"
      data={fourMetricsData}
      isInvalid={true}
      errorContent={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '40px' }}>
          <Typography variant="headingM" weight="semibold" color="error">
            Connection Error
          </Typography>
          <Typography variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Unable to connect to the server. Please check your internet connection and try again.
          </Typography>
        </div>
      }
    />
  ),
};

// ============================================================================
// ACCESSIBILITY & INTERACTION STORIES
// ============================================================================

/**
 * With Event Callbacks
 * Demonstrates all available event callbacks
 */
export const WithEventCallbacks: Story = {
  render: () => {
    const [lastEvent, setLastEvent] = React.useState<string>('No events yet');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <DonutChart
          title="Interactive Chart"
          data={fourMetricsData}
          centerValue="$3m"
          onLegendClick={(index) => setLastEvent(`Legend clicked: ${fourMetricsData[index].label}`)}
          onSegmentHover={(segment, index) => setLastEvent(`Segment hovered: ${segment.label}`)}
          onSegmentClick={(segment, index) => setLastEvent(`Segment clicked: ${segment.label}`)}
        />
        
        <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <Typography variant="caption" weight="semibold">
            Last Event:
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '8px' }}>
            {lastEvent}
          </Typography>
        </div>
      </div>
    );
  },
};

/**
 * ForwardRef Usage
 * Demonstrates ref forwarding to access DOM element
 */
export const ForwardRefUsage: Story = {
  render: () => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    
    const scrollToChart = () => {
      chartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <Typography variant="body" style={{ marginBottom: '12px' }}>
            Click the button to scroll to the chart (demonstrates ref access)
          </Typography>
          <button onClick={scrollToChart} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Scroll to Chart
          </button>
        </div>
        
        <div style={{ height: '100vh' }} />
        
        <DonutChart
          ref={chartRef}
          title="Chart with Ref"
          data={fourMetricsData}
          centerValue="$3m"
        />
        
        <div style={{ height: '100vh' }} />
      </div>
    );
  },
};

/**
 * Polymorphic 'as' Prop
 * Render as different HTML element
 */
export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Rendered as &lt;section&gt;
        </Typography>
        <DonutChart
          as="section"
          title="Revenue Distribution"
          data={threeMetricsData}
          centerValue="$3m"
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Rendered as &lt;article&gt;
        </Typography>
        <DonutChart
          as="article"
          title="Market Share"
          data={threeMetricsData}
          centerValue="$2.5m"
        />
      </div>
    </div>
  ),
};

/**
 * Style Overrides
 * Demonstrates className and style prop overrides
 */
export const StyleOverrides: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Custom Background & Border
        </Typography>
        <DonutChart
          title="Revenue Distribution"
          data={fourMetricsData}
          centerValue="$3m"
          style={{
            backgroundColor: '#f9fafb',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
          }}
        />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>
          Custom Header & Chart Styling
        </Typography>
        <DonutChart
          title="Market Share"
          data={threeMetricsData}
          centerValue="$2.5m"
          headerClassName="custom-header"
          chartClassName="custom-chart"
          legendsClassName="custom-legends"
          style={{
            backgroundColor: '#fef3c7',
            padding: '16px',
            borderRadius: '12px',
          }}
        />
      </div>
    </div>
  ),
};
