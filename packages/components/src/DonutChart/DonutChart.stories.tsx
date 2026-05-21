import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';
import { DataVisualizationCard } from '../DataVisualizationCard';

const meta: Meta<typeof DonutChart> = {
  title: 'Data Visualization/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Donut chart visualization component for displaying 2-6 metrics with optional center KPI. Always use within DataVisualizationCard container. Based on Figma design.',
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
 */
export const Interactive: Story = {
  args: {
    title: 'Interactive Chart (Click Legends)',
    showInfoIcon: true,
    data: fiveMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical',
  },
};

/**
 * In DataVisualizationCard - Recommended usage
 */
export const InDataVisualizationCard: Story = {
  render: () => (
    <DataVisualizationCard
      title="Revenue Distribution"
      showInfoIcon={true}
      showDropdown={true}
      dropdownValue="Last 7 days"
    >
      <DonutChart
        data={fourMetricsData}
        centerValue="$3m"
        showCenterValue={true}
        layout="vertical"
      />
    </DataVisualizationCard>
  ),
};

/**
 * Dashboard example with multiple donut charts
 */
export const DashboardExample: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '1200px' }}>
      <DataVisualizationCard
        title="Revenue by Product"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 7 days"
      >
        <DonutChart
          data={fourMetricsData}
          centerValue="$3m"
          showCenterValue={true}
          layout="vertical"
        />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="Market Share"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 30 days"
      >
        <DonutChart
          data={threeMetricsData}
          centerValue="45%"
          showCenterValue={true}
          layout="vertical"
        />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="Regional Distribution"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 90 days"
      >
        <DonutChart
          data={fiveMetricsData}
          centerValue="$8.5m"
          showCenterValue={true}
          layout="vertical"
        />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="Category Breakdown"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last year"
      >
        <DonutChart
          data={sixMetricsData}
          centerValue="100%"
          showCenterValue={true}
          layout="vertical"
        />
      </DataVisualizationCard>
    </div>
  ),
};

/**
 * Real-world example - Sales data
 */
export const RealWorldSalesData: Story = {
  render: () => (
    <DataVisualizationCard
      title="Sales by Region"
      showInfoIcon={true}
      showDropdown={true}
      dropdownValue="Q1 2024"
    >
      <DonutChart
        data={[
          { label: 'North America', value: 12500000, color: '#6222BC' },
          { label: 'Europe', value: 8300000, color: '#E3725F' },
          { label: 'Asia Pacific', value: 6700000, color: '#1AC2C1' },
          { label: 'Latin America', value: 3200000, color: '#F5C563' },
          { label: 'Middle East', value: 2100000, color: '#3E71C2' },
        ]}
        centerValue="$32.8M"
        showCenterValue={true}
        layout="vertical"
      />
    </DataVisualizationCard>
  ),
};

/**
 * Vertical vs Horizontal comparison
 */
export const LayoutComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Vertical Layout</h3>
        <DataVisualizationCard title="Revenue Distribution">
          <DonutChart
            data={fourMetricsData}
            centerValue="$3m"
            showCenterValue={true}
            layout="vertical"
          />
        </DataVisualizationCard>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px' }}>Horizontal Layout</h3>
        <DataVisualizationCard title="Revenue Distribution">
          <DonutChart
            data={fourMetricsData}
            centerValue="$3m"
            showCenterValue={true}
            layout="horizontal"
          />
        </DataVisualizationCard>
      </div>
    </div>
  ),
};
