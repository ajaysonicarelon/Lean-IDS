import type { Meta, StoryObj } from '@storybook/react';
import { DataVisualizationCard } from './DataVisualizationCard';

const meta: Meta<typeof DataVisualizationCard> = {
  title: 'Data Visualization/DataVisualizationCard',
  component: DataVisualizationCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Universal container for ALL data visualizations. Use this for bar graphs, line graphs, pie charts, donuts, maps, and any other chart type. Based on Figma design.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataVisualizationCard>;

// Mock visualization components for examples
const MockBarChart = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px' }}>
    {[65, 45, 80, 55, 70, 60, 75].map((height, i) => (
      <div
        key={i}
        style={{
          flex: 1,
          height: `${height}%`,
          background: '#6222BC',
          borderRadius: '4px 4px 0 0',
        }}
      />
    ))}
  </div>
);

const MockLineChart = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ padding: '20px' }}>
    <polyline
      points="0,150 50,120 100,140 150,80 200,100 250,60 300,90 350,50 400,70"
      fill="none"
      stroke="#6222BC"
      strokeWidth="3"
    />
    {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => (
      <circle key={i} cx={x} cy={[150, 120, 140, 80, 100, 60, 90, 50, 70][i]} r="4" fill="#6222BC" />
    ))}
  </svg>
);

const MockPieChart = () => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="#6222BC" />
    <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="#9B6DD6" />
    <path d="M 100 100 L 180 100 A 80 80 0 0 1 140 173.2 Z" fill="#CBB5E9" />
  </svg>
);

const MockDonutChart = () => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="none" stroke="#6222BC" strokeWidth="40" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="#9B6DD6" strokeWidth="40" strokeDasharray="150 350" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="#CBB5E9" strokeWidth="40" strokeDasharray="100 400" strokeDashoffset="-150" />
  </svg>
);

const MockAreaChart = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ padding: '20px' }}>
    <defs>
      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6222BC" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#6222BC" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <polygon
      points="0,200 0,150 50,120 100,140 150,80 200,100 250,60 300,90 350,50 400,70 400,200"
      fill="url(#areaGradient)"
    />
    <polyline
      points="0,150 50,120 100,140 150,80 200,100 250,60 300,90 350,50 400,70"
      fill="none"
      stroke="#6222BC"
      strokeWidth="2"
    />
  </svg>
);

const PlaceholderChart = ({ text }: { text: string }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F8F7FB',
      borderRadius: '4px',
      color: '#909090',
      fontSize: '14px',
      fontFamily: 'Elevance Sans, sans-serif',
    }}
  >
    {text}
  </div>
);

/**
 * Default example with bar chart
 */
export const Default: Story = {
  args: {
    title: 'Sales Performance',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <MockBarChart />,
  },
};

/**
 * Bar chart visualization
 */
export const BarChart: Story = {
  args: {
    title: 'Monthly Revenue',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <MockBarChart />,
  },
};

/**
 * Line chart visualization
 */
export const LineChart: Story = {
  args: {
    title: 'User Growth Trend',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    children: <MockLineChart />,
  },
};

/**
 * Pie chart visualization
 */
export const PieChart: Story = {
  args: {
    title: 'Market Share Distribution',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 90 days',
    children: <MockPieChart />,
  },
};

/**
 * Donut chart visualization
 */
export const DonutChart: Story = {
  args: {
    title: 'Category Breakdown',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last year',
    children: <MockDonutChart />,
  },
};

/**
 * Area chart visualization
 */
export const AreaChart: Story = {
  args: {
    title: 'Traffic Overview',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    children: <MockAreaChart />,
  },
};

/**
 * Without info icon
 */
export const WithoutInfoIcon: Story = {
  args: {
    title: 'Sales Data',
    showInfoIcon: false,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <MockBarChart />,
  },
};

/**
 * Without dropdown
 */
export const WithoutDropdown: Story = {
  args: {
    title: 'Performance Metrics',
    showInfoIcon: true,
    showDropdown: false,
    children: <MockLineChart />,
  },
};

/**
 * Minimal (no info, no dropdown)
 */
export const Minimal: Story = {
  args: {
    title: 'Simple Chart',
    showInfoIcon: false,
    showDropdown: false,
    children: <MockBarChart />,
  },
};

/**
 * Custom height (tall)
 */
export const CustomHeightTall: Story = {
  args: {
    title: 'Detailed Analysis',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    height: 400,
    children: <MockLineChart />,
  },
};

/**
 * Custom height (short)
 */
export const CustomHeightShort: Story = {
  args: {
    title: 'Quick View',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    height: 150,
    children: <MockBarChart />,
  },
};

/**
 * With placeholder content
 */
export const WithPlaceholder: Story = {
  args: {
    title: 'Coming Soon',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <PlaceholderChart text="Chart will be displayed here" />,
  },
};

/**
 * Empty state
 */
export const EmptyState: Story = {
  args: {
    title: 'No Data Available',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <PlaceholderChart text="No data to display" />,
  },
};

/**
 * Loading state
 */
export const LoadingState: Story = {
  args: {
    title: 'Loading Data',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    children: <PlaceholderChart text="Loading..." />,
  },
};

/**
 * Dashboard with multiple visualizations
 */
export const DashboardExample: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '1200px' }}>
      <DataVisualizationCard
        title="Sales Performance"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 7 days"
      >
        <MockBarChart />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="User Growth"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 30 days"
      >
        <MockLineChart />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="Market Share"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last 90 days"
      >
        <MockPieChart />
      </DataVisualizationCard>
      
      <DataVisualizationCard
        title="Category Breakdown"
        showInfoIcon={true}
        showDropdown={true}
        dropdownValue="Last year"
      >
        <MockDonutChart />
      </DataVisualizationCard>
    </div>
  ),
};

/**
 * With custom dropdown options
 */
export const CustomDropdownOptions: Story = {
  args: {
    title: 'Custom Time Periods',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Q1 2024',
    dropdownOptions: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Full Year 2024'],
    children: <MockBarChart />,
  },
};

/**
 * With event handlers
 */
export const WithEventHandlers: Story = {
  args: {
    title: 'Interactive Chart',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    onInfoClick: () => alert('Info icon clicked!'),
    onDropdownChange: (value) => alert(`Dropdown changed to: ${value}`),
    children: <MockLineChart />,
  },
};
