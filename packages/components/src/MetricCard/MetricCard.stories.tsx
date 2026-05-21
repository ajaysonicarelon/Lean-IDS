import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';
import type { MetricData } from './MetricCard.types';

const meta: Meta<typeof MetricCard> = {
  title: 'Data Visualization/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A data visualization component for displaying KPIs and metrics in dashboards. Based on Figma design.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

// Sample metrics data
const sampleMetrics: MetricData[] = [
  { label: 'Metric A', value: '48' },
  { label: 'Metric B', value: '$12,573,324.89' },
  { label: 'Metric C', value: '12' },
  { label: 'Metric D', value: '$677.83', highlighted: true },
  { label: 'Metric E', value: '36' },
  { label: 'Metric F', value: '$12,500.00' },
];

/**
 * Basic metric card with all features
 */
export const Basic: Story = {
  args: {
    variant: 'basic',
    metricName: 'Total Users',
    value: '8,888',
    showChange: true,
    changeValue: '+56',
    changeType: 'positive',
    comparisonText: 'vs last week',
    showProgressBar: true,
    progressValue: 60,
    showActionChip: true,
    actionText: 'Need Action',
    actionType: 'warning',
  },
};

/**
 * Basic card with positive change
 */
export const BasicPositiveChange: Story = {
  args: {
    variant: 'basic',
    metricName: 'Revenue',
    value: '$125,450',
    showChange: true,
    changeValue: '+12.5%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Basic card with negative change
 */
export const BasicNegativeChange: Story = {
  args: {
    variant: 'basic',
    metricName: 'Bounce Rate',
    value: '42%',
    showChange: true,
    changeValue: '-8',
    changeType: 'negative',
    comparisonText: 'vs last week',
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Basic card with neutral change
 */
export const BasicNeutralChange: Story = {
  args: {
    variant: 'basic',
    metricName: 'Active Sessions',
    value: '1,234',
    showChange: true,
    changeValue: '0',
    changeType: 'neutral',
    comparisonText: 'vs yesterday',
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Basic card with progress bar
 */
export const BasicWithProgress: Story = {
  args: {
    variant: 'basic',
    metricName: 'Goal Completion',
    value: '75%',
    showChange: true,
    changeValue: '+15',
    changeType: 'positive',
    comparisonText: 'vs target',
    showProgressBar: true,
    progressValue: 75,
    showActionChip: false,
  },
};

/**
 * Basic card with warning action chip
 */
export const BasicWithWarningChip: Story = {
  args: {
    variant: 'basic',
    metricName: 'Pending Tasks',
    value: '23',
    showChange: true,
    changeValue: '+5',
    changeType: 'positive',
    comparisonText: 'vs yesterday',
    showProgressBar: false,
    showActionChip: true,
    actionText: 'Need Action',
    actionType: 'warning',
  },
};

/**
 * Basic card with error action chip
 */
export const BasicWithErrorChip: Story = {
  args: {
    variant: 'basic',
    metricName: 'Failed Requests',
    value: '12',
    showChange: true,
    changeValue: '+3',
    changeType: 'negative',
    comparisonText: 'vs last hour',
    showProgressBar: false,
    showActionChip: true,
    actionText: 'Critical',
    actionType: 'error',
  },
};

/**
 * Basic card with info action chip
 */
export const BasicWithInfoChip: Story = {
  args: {
    variant: 'basic',
    metricName: 'New Updates',
    value: '5',
    showChange: false,
    showProgressBar: false,
    showActionChip: true,
    actionText: 'View Details',
    actionType: 'info',
  },
};

/**
 * Basic card minimal (no extras)
 */
export const BasicMinimal: Story = {
  args: {
    variant: 'basic',
    metricName: 'Total Orders',
    value: '1,456',
    showChange: false,
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Filled variant (highlighted card)
 */
export const Filled: Story = {
  args: {
    variant: 'filled',
    metricName: 'Total Revenue',
    value: '$8,888',
    showChange: true,
    changeValue: '+56',
    changeType: 'positive',
    comparisonText: 'vs last week',
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Filled variant with all features
 */
export const FilledWithAllFeatures: Story = {
  args: {
    variant: 'filled',
    metricName: 'Priority Metric',
    value: '12,345',
    showChange: true,
    changeValue: '+25%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: false,
    showActionChip: false,
  },
};

/**
 * Set of metrics variant
 */
export const SetOfMetrics: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Financial Overview',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    metrics: sampleMetrics,
  },
};

/**
 * Set of metrics without dropdown
 */
export const SetOfMetricsNoDropdown: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Performance Metrics',
    showInfoIcon: true,
    showDropdown: false,
    metrics: sampleMetrics,
  },
};

/**
 * Set of metrics without info icon
 */
export const SetOfMetricsNoInfo: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Sales Dashboard',
    showInfoIcon: false,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    metrics: sampleMetrics,
  },
};

/**
 * Set of metrics minimal
 */
export const SetOfMetricsMinimal: Story = {
  args: {
    variant: 'set',
    sectionHeading: 'Quick Stats',
    showInfoIcon: false,
    showDropdown: false,
    metrics: [
      { label: 'Users', value: '1,234' },
      { label: 'Revenue', value: '$45,678' },
      { label: 'Orders', value: '567' },
      { label: 'Conversion', value: '3.2%' },
    ],
  },
};

/**
 * Dashboard example with multiple cards
 */
export const DashboardExample: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px' }}>
      <MetricCard
        variant="basic"
        metricName="Total Users"
        value="8,888"
        showChange={true}
        changeValue="+56"
        changeType="positive"
        comparisonText="vs last week"
      />
      <MetricCard
        variant="filled"
        metricName="Revenue"
        value="$125,450"
        showChange={true}
        changeValue="+12.5%"
        changeType="positive"
        comparisonText="vs last month"
      />
      <MetricCard
        variant="basic"
        metricName="Active Sessions"
        value="1,234"
        showChange={true}
        changeValue="+8"
        changeType="positive"
        comparisonText="vs yesterday"
        showProgressBar={true}
        progressValue={65}
      />
      <div style={{ gridColumn: '1 / -1' }}>
        <MetricCard
          variant="set"
          sectionHeading="Financial Overview"
          showInfoIcon={true}
          showDropdown={true}
          dropdownValue="Last 7 days"
          metrics={sampleMetrics}
        />
      </div>
    </div>
  ),
};

/**
 * Large numbers formatting
 */
export const LargeNumbers: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <MetricCard
        variant="basic"
        metricName="Total Revenue"
        value="$12,573,324.89"
        showChange={true}
        changeValue="+2.3M"
        changeType="positive"
        comparisonText="vs last quarter"
      />
      <MetricCard
        variant="basic"
        metricName="Page Views"
        value="1.2M"
        showChange={true}
        changeValue="+156K"
        changeType="positive"
        comparisonText="vs last month"
      />
      <MetricCard
        variant="basic"
        metricName="Conversion Rate"
        value="3.45%"
        showChange={true}
        changeValue="+0.23%"
        changeType="positive"
        comparisonText="vs average"
      />
    </div>
  ),
};
