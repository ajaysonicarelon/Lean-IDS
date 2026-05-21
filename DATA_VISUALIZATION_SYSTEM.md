# Data Visualization System - Implementation Plan

## 📊 Overview

This document outlines the complete data visualization system for Lean IDS based on Figma designs. The system consists of reusable, composable components that developers can easily integrate with their APIs.

---

## 🎯 Components to Implement

### **1. ChartLegend Component**
**Figma:** `node-id=5493-15856`

**Purpose:** Metric label with color indicator (acts as toggle for charts)

**Features:**
- Color dot indicator (12px)
- Metric name label
- Can be clicked to toggle metric visibility
- Reusable across all chart types

**Props:**
```typescript
interface ChartLegendProps {
  color: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
```

---

### **2. DonutChart Component**
**Figma:** `node-id=5544-4418` (donut sets), `node-id=5544-4848` (layouts)

**Purpose:** Display 2-6 metrics in a donut chart with optional center KPI

**Variants:**
- 2 Metrics
- 3 Metrics
- 4 Metrics
- 5 Metrics
- 6 Metrics

**Layouts:**
- Vertical (chart on top, legends below)
- Horizontal (chart on left, legends on right)

**Features:**
- Center KPI value (optional)
- Chart heading with info icon
- Responsive legend layout
- Customizable colors per metric
- SVG-based rendering

**Props:**
```typescript
interface DonutChartData {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  title?: string;
  showInfoIcon?: boolean;
  onInfoClick?: () => void;
  data: DonutChartData[];
  centerValue?: string;
  showCenterValue?: boolean;
  layout?: 'vertical' | 'horizontal';
  size?: number; // default 196px
}
```

---

### **3. BarChart Component**
**Figma:** `node-id=5545-5544` (bars), `node-id=5545-5681` (graphs)

**Purpose:** Display bar charts with various configurations

**Types:**
- **Vertical Single Bar** - One metric per bar
- **Vertical Stacked Bar** - 2-3+ metrics stacked
- **Horizontal Single Bar** - Horizontal orientation
- **Horizontal Stacked Bar** - Horizontal stacked
- **Gradient Bar** - Single metric with gradient fill

**Sizes:**
- **Medium** - 453px width, 340px height
- **Large** - 950px width, 453px height

**Features:**
- X-axis and Y-axis labels
- Grid lines
- Multiple metrics support (unlimited, show 3 in examples)
- Stacked or grouped bars
- Gradient fill option
- Responsive sizing
- Legend with toggleable metrics

**Props:**
```typescript
interface BarChartDataPoint {
  label: string; // X-axis label
  values: { [metricName: string]: number };
}

interface BarChartProps {
  data: BarChartDataPoint[];
  metrics: { name: string; color: string }[];
  orientation?: 'vertical' | 'horizontal';
  stacked?: boolean;
  gradient?: boolean;
  size?: 'medium' | 'large';
  showGrid?: boolean;
  showLegend?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
}
```

---

### **4. LineChart Component**
**Figma:** `node-id=5547-950` (lines), `node-id=5545-5681` (graphs)

**Purpose:** Display line charts with 1-3+ lines

**Types:**
- **Single Line** - One metric
- **Multi Line** - 2-3+ metrics

**Sizes:**
- **Medium** - 453px width, 340px height (6 data points)
- **Large** - 950px width, 453px height (12 data points)

**Features:**
- Multiple lines support (unlimited, show 3 in examples)
- Data point markers
- Smooth curves
- Grid lines
- X-axis and Y-axis labels
- Legend with toggleable lines
- Responsive sizing

**Props:**
```typescript
interface LineChartDataPoint {
  label: string; // X-axis label
  values: { [metricName: string]: number };
}

interface LineChartProps {
  data: LineChartDataPoint[];
  metrics: { name: string; color: string }[];
  size?: 'medium' | 'large';
  showGrid?: boolean;
  showLegend?: boolean;
  showDataPoints?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  smooth?: boolean; // curve vs straight lines
}
```

---

## 🎨 Design Tokens

### **Colors (from Figma):**
```typescript
const chartColors = {
  primary: '#6222BC',      // primary-400 (purple)
  terracotta: '#E3725F',   // terracotta-500 (coral)
  pantone: '#3E71C2',      // pantone-400 (blue)
  turquoise: '#1AC2C1',    // turquoise-400 (teal)
  yellow: '#F5C563',       // (yellow)
  green: '#7AC943',        // (green)
  // Add more as needed
};
```

### **Sizes:**
```typescript
const chartSizes = {
  donut: {
    default: 196, // diameter in px
  },
  medium: {
    width: 453,
    height: 340,
  },
  large: {
    width: 950,
    height: 453,
  },
};
```

---

## 🔧 Implementation Strategy

### **Phase 1: Core Components**
1. ✅ ChartLegend - Simple, reusable legend item
2. ✅ DonutChart - SVG-based donut with legends
3. ✅ BarChart - Vertical/horizontal bars with stacking
4. ✅ LineChart - Multi-line charts with smooth curves

### **Phase 2: Integration**
1. All charts use DataVisualizationCard container
2. All charts use ChartLegend for metrics
3. Consistent prop patterns across all charts
4. Easy API integration

### **Phase 3: Examples**
1. Storybook stories for each variant
2. Dashboard examples combining multiple charts
3. API integration examples
4. Customization examples

---

## 📦 Component Structure

```
/DataVisualization
  /ChartLegend
    - ChartLegend.tsx
    - ChartLegend.types.ts
    - index.ts
  /DonutChart
    - DonutChart.tsx
    - DonutChart.types.ts
    - DonutChart.stories.tsx
    - index.ts
  /BarChart
    - BarChart.tsx
    - BarChart.types.ts
    - BarChart.stories.tsx
    - index.ts
  /LineChart
    - LineChart.tsx
    - LineChart.types.ts
    - LineChart.stories.tsx
    - index.ts
  /shared
    - chartColors.ts
    - chartUtils.ts
    - types.ts
```

---

## 🚀 Usage Examples

### **Donut Chart:**
```tsx
import { DataVisualizationCard, DonutChart } from '@lean-ids/components';

<DataVisualizationCard title="Revenue Breakdown">
  <DonutChart
    data={[
      { label: 'Product A', value: 45, color: '#6222BC' },
      { label: 'Product B', value: 30, color: '#E3725F' },
      { label: 'Product C', value: 25, color: '#1AC2C1' },
    ]}
    centerValue="$3m"
    showCenterValue
    layout="vertical"
  />
</DataVisualizationCard>
```

### **Bar Chart:**
```tsx
<DataVisualizationCard title="Monthly Sales">
  <BarChart
    data={[
      { label: 'Jan', values: { 'Product A': 120, 'Product B': 80 } },
      { label: 'Feb', values: { 'Product A': 150, 'Product B': 90 } },
      // ... more data
    ]}
    metrics={[
      { name: 'Product A', color: '#6222BC' },
      { name: 'Product B', color: '#E3725F' },
    ]}
    stacked
    size="large"
  />
</DataVisualizationCard>
```

### **Line Chart:**
```tsx
<DataVisualizationCard title="User Growth">
  <LineChart
    data={[
      { label: 'Jan', values: { 'New Users': 100, 'Active Users': 450 } },
      { label: 'Feb', values: { 'New Users': 120, 'Active Users': 480 } },
      // ... more data
    ]}
    metrics={[
      { name: 'New Users', color: '#6222BC' },
      { name: 'Active Users', color: '#1AC2C1' },
    ]}
    size="large"
    smooth
  />
</DataVisualizationCard>
```

---

## ✅ Key Principles

1. **Reusability** - All components are highly reusable
2. **Composability** - Components work together seamlessly
3. **API-Ready** - Easy to integrate with backend APIs
4. **Customizable** - Flexible props for different use cases
5. **Consistent** - Same patterns across all chart types
6. **Accessible** - ARIA labels and keyboard support
7. **Responsive** - Works on all screen sizes
8. **Type-Safe** - Full TypeScript support

---

## 📝 Next Steps

1. Implement ChartLegend component
2. Implement DonutChart component
3. Implement BarChart component
4. Implement LineChart component
5. Create comprehensive Storybook examples
6. Write documentation and usage guidelines
7. Test with real API data
8. Optimize performance for large datasets

---

**This is a comprehensive data visualization system that will serve as the foundation for all charts and graphs in Lean IDS!** 📊🎉
