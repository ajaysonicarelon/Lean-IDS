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
 * Vertical bar chart (default)
 */
export const Vertical: Story = {
  args: {
    title: 'Monthly Revenue',
    data: revenueData,
    orientation: 'vertical',
    showValues: true,
    showGrid: true,
    height: 300,
  },
};

/**
 * Horizontal bar chart
 */
export const Horizontal: Story = {
  args: {
    title: 'Product Sales',
    data: productData,
    orientation: 'horizontal',
    showValues: true,
    showGrid: true,
    height: 250,
  },
};

/**
 * Without value labels
 */
export const WithoutValues: Story = {
  args: {
    title: 'Category Performance',
    data: categoryData,
    orientation: 'vertical',
    showValues: false,
    showGrid: true,
    height: 300,
  },
};

/**
 * Without grid lines
 */
export const WithoutGrid: Story = {
  args: {
    title: 'Monthly Revenue',
    data: revenueData,
    orientation: 'vertical',
    showValues: true,
    showGrid: false,
    height: 300,
  },
};

/**
 * With info icon and tooltip
 */
export const WithInfoIcon: Story = {
  args: {
    title: 'Revenue Analysis',
    data: revenueData,
    orientation: 'vertical',
    showValues: true,
    showGrid: true,
    height: 300,
    showInfoIcon: true,
    infoTooltipContent: 'This chart shows monthly revenue trends for the current fiscal year',
    onInfoClick: () => console.log('Info icon clicked'),
  },
};

/**
 * Inside DataVisualizationCard (recommended)
 */
export const InCard: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <DataVisualizationCard
        title="Revenue by Category"
        showInfoIcon={true}
        infoTooltipContent="Revenue breakdown across different product categories"
        showDropdown={true}
        dropdownValue="Last 7 days"
      >
        <BarChart
          data={categoryData}
          orientation="vertical"
          showValues={true}
          showGrid={true}
          height={300}
        />
      </DataVisualizationCard>
    </div>
  ),
};

/**
 * Horizontal in card
 */
export const HorizontalInCard: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <DataVisualizationCard
        title="Top Products"
        showInfoIcon={true}
        infoTooltipContent="Best performing products by revenue"
        showDropdown={true}
        dropdownValue="Last 30 days"
      >
        <BarChart
          data={productData}
          orientation="horizontal"
          showValues={true}
          showGrid={true}
          height={250}
        />
      </DataVisualizationCard>
    </div>
  ),
};

/**
 * Small dataset
 */
export const SmallDataset: Story = {
  args: {
    title: 'Quarterly Sales',
    data: [
      { label: 'Q1', value: 125000, color: '#6222BC' },
      { label: 'Q2', value: 145000, color: '#6222BC' },
      { label: 'Q3', value: 132000, color: '#6222BC' },
    ],
    orientation: 'vertical',
    showValues: true,
    showGrid: true,
    height: 300,
  },
};

/**
 * Large dataset
 */
export const LargeDataset: Story = {
  args: {
    title: 'Daily Sales',
    data: [
      { label: 'Mon', value: 12000, color: '#6222BC' },
      { label: 'Tue', value: 15000, color: '#6222BC' },
      { label: 'Wed', value: 13500, color: '#6222BC' },
      { label: 'Thu', value: 16000, color: '#6222BC' },
      { label: 'Fri', value: 18000, color: '#6222BC' },
      { label: 'Sat', value: 14000, color: '#6222BC' },
      { label: 'Sun', value: 11000, color: '#6222BC' },
    ],
    orientation: 'vertical',
    showValues: true,
    showGrid: true,
    height: 300,
  },
};

/**
 * Multi-color bars
 */
export const MultiColor: Story = {
  args: {
    title: 'Department Revenue',
    data: [
      { label: 'Sales', value: 234000, color: '#6222BC' },
      { label: 'Marketing', value: 156000, color: '#E3725F' },
      { label: 'Operations', value: 189000, color: '#1AC2C1' },
      { label: 'Support', value: 123000, color: '#F7B500' },
      { label: 'R&D', value: 145000, color: '#8B5CF6' },
    ],
    orientation: 'vertical',
    showValues: true,
    showGrid: true,
    height: 300,
  },
};
