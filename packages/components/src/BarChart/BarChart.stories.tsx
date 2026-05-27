/**
 * BarChart Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { DataVisualizationCard } from '../DataVisualizationCard';

const meta: Meta<typeof BarChart> = {
  title: 'Data Visualization/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

// Sample data - Single metric (regular bars)
const revenueData = [
  { label: 'Jan', metrics: [{ name: 'Revenue', value: 45000, color: '#6222BC' }] },
  { label: 'Feb', metrics: [{ name: 'Revenue', value: 52000, color: '#6222BC' }] },
  { label: 'Mar', metrics: [{ name: 'Revenue', value: 48000, color: '#6222BC' }] },
  { label: 'Apr', metrics: [{ name: 'Revenue', value: 61000, color: '#6222BC' }] },
  { label: 'May', metrics: [{ name: 'Revenue', value: 55000, color: '#6222BC' }] },
  { label: 'Jun', metrics: [{ name: 'Revenue', value: 67000, color: '#6222BC' }] },
];

// Stacked data - Multiple metrics per bar (matching Figma design)
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

/**
 * Simple bar chart with single metric
 */
export const Simple: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: 300,
  },
};

/**
 * Stacked bar chart (matching Figma design)
 */
export const Stacked: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: 300,
  },
};

/**
 * With title and info icon
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
    height: 300,
  },
};

/**
 * Without grid lines
 */
export const WithoutGrid: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: false,
    height: 300,
  },
};

/**
 * Bar Chart in Card Container (Example)
 * Shows how to wrap the chart in DataVisualizationCard with Select component and date ranges
 */
export const InCard: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <DataVisualizationCard
        title="Claims by Status"
        showInfoIcon={true}
        infoTooltipContent="Monthly breakdown of claims by approval status"
        showTimeRange={true}
        timeRangeValue="Last 6 months"
      >
        <BarChart
          data={stackedClaimData}
          yAxisLabel="Claim Count"
          xAxisLabel="Month"
          showGrid={true}
          showLegend={true}
          legendTitle="Claim Status"
          height={300}
        />
      </DataVisualizationCard>
    </div>
  ),
};

/**
 * Tall chart
 */
export const TallChart: Story = {
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: 400,
  },
};

/**
 * Short chart
 */
export const ShortChart: Story = {
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: 200,
  },
};

/**
 * Horizontal stacked bar chart
 */
export const HorizontalStacked: Story = {
  args: {
    data: stackedClaimData,
    orientation: 'horizontal',
    showLegend: true,
    legendTitle: 'Claim Status',
    height: 300,
  },
};
