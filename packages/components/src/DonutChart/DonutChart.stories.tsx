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
        component: 'Donut chart visualization component for displaying 2-6 metrics with optional center KPI. Can be used standalone or wrapped in a card container. Based on Figma design.',
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
