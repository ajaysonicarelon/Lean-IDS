# DataVisualizationCard Component

**The UNIVERSAL container for ALL data visualizations in Lean IDS.**

---

## 🚨 CRITICAL GUIDELINE

### **⚠️ ALWAYS USE THIS CONTAINER FOR DATA VISUALIZATIONS**

**When implementing ANY data visualization (charts, graphs, maps, etc.), you MUST use this container.**

✅ **DO USE for:**
- Bar graphs
- Line graphs
- Pie charts
- Donut charts
- Area charts
- Scatter plots
- Heat maps
- World maps
- Any other visualization

❌ **DO NOT:**
- Create custom containers for visualizations
- Build your own card/wrapper components
- Use generic divs or containers

**This ensures consistency across ALL data visualizations in the design system.**

---

## 📋 Overview

The DataVisualizationCard is a standardized container component that provides:
- Consistent header with title and info icon
- Dropdown for time period/filter selection
- Flexible content area for any visualization
- Responsive sizing and spacing
- Design system compliance

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { DataVisualizationCard } from '@lean-ids/components';
import { YourChartComponent } from './your-chart-library';

<DataVisualizationCard
  title="Sales Performance"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 7 days"
>
  <YourChartComponent data={salesData} />
</DataVisualizationCard>
```

### **With Any Chart Library:**

```tsx
// With Chart.js
<DataVisualizationCard title="Revenue Trend">
  <Bar data={chartData} options={chartOptions} />
</DataVisualizationCard>

// With Recharts
<DataVisualizationCard title="User Growth">
  <LineChart data={userData}>
    <Line type="monotone" dataKey="users" stroke="#6222BC" />
  </LineChart>
</DataVisualizationCard>

// With D3.js
<DataVisualizationCard title="Market Share">
  <D3PieChart data={marketData} />
</DataVisualizationCard>

// With any custom SVG
<DataVisualizationCard title="Custom Visualization">
  <svg width="100%" height="100%">
    {/* Your custom SVG visualization */}
  </svg>
</DataVisualizationCard>
```

---

## 📖 Complete API

### **DataVisualizationCardProps:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Graph Name'` | Title of the visualization |
| `showInfoIcon` | `boolean` | `true` | Show info icon next to title |
| `onInfoClick` | `() => void` | - | Info icon click handler |
| `showDropdown` | `boolean` | `true` | Show dropdown for filters |
| `dropdownValue` | `string` | `'Last 7 days'` | Current dropdown value |
| `dropdownOptions` | `string[]` | `['Last 7 days', ...]` | Dropdown options |
| `onDropdownChange` | `(value: string) => void` | - | Dropdown change handler |
| `children` | `React.ReactNode` | **Required** | Visualization content |
| `height` | `string \| number` | `246` | Custom height (px or string) |
| `className` | `string` | - | Custom CSS class |

---

## 💡 Common Use Cases

### **1. Bar Chart:**

```tsx
<DataVisualizationCard
  title="Monthly Revenue"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 7 days"
  onInfoClick={() => showInfoModal()}
  onDropdownChange={(value) => updateData(value)}
>
  <BarChart data={revenueData} />
</DataVisualizationCard>
```

### **2. Line Chart:**

```tsx
<DataVisualizationCard
  title="User Growth Trend"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 30 days"
>
  <LineChart data={userGrowthData} />
</DataVisualizationCard>
```

### **3. Pie Chart:**

```tsx
<DataVisualizationCard
  title="Market Share Distribution"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 90 days"
>
  <PieChart data={marketShareData} />
</DataVisualizationCard>
```

### **4. Donut Chart:**

```tsx
<DataVisualizationCard
  title="Category Breakdown"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last year"
>
  <DonutChart data={categoryData} />
</DataVisualizationCard>
```

### **5. Custom Height:**

```tsx
<DataVisualizationCard
  title="Detailed Analysis"
  height={400}
>
  <ComplexVisualization data={detailedData} />
</DataVisualizationCard>
```

### **6. Without Info Icon:**

```tsx
<DataVisualizationCard
  title="Simple Chart"
  showInfoIcon={false}
  showDropdown={true}
  dropdownValue="Last 7 days"
>
  <SimpleChart data={data} />
</DataVisualizationCard>
```

### **7. Without Dropdown:**

```tsx
<DataVisualizationCard
  title="Static View"
  showInfoIcon={true}
  showDropdown={false}
>
  <StaticChart data={staticData} />
</DataVisualizationCard>
```

### **8. Minimal (No Extras):**

```tsx
<DataVisualizationCard
  title="Basic Chart"
  showInfoIcon={false}
  showDropdown={false}
>
  <BasicChart data={data} />
</DataVisualizationCard>
```

### **9. Custom Dropdown Options:**

```tsx
<DataVisualizationCard
  title="Quarterly Report"
  showDropdown={true}
  dropdownValue="Q1 2024"
  dropdownOptions={['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024']}
  onDropdownChange={(value) => loadQuarterData(value)}
>
  <QuarterlyChart data={quarterData} />
</DataVisualizationCard>
```

### **10. Dashboard with Multiple Visualizations:**

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
  <DataVisualizationCard title="Sales" showInfoIcon showDropdown dropdownValue="Last 7 days">
    <BarChart data={salesData} />
  </DataVisualizationCard>
  
  <DataVisualizationCard title="Users" showInfoIcon showDropdown dropdownValue="Last 30 days">
    <LineChart data={userData} />
  </DataVisualizationCard>
  
  <DataVisualizationCard title="Revenue" showInfoIcon showDropdown dropdownValue="Last 90 days">
    <AreaChart data={revenueData} />
  </DataVisualizationCard>
  
  <DataVisualizationCard title="Categories" showInfoIcon showDropdown dropdownValue="Last year">
    <PieChart data={categoryData} />
  </DataVisualizationCard>
</div>
```

---

## 🎨 Design Specifications

### **Container:**
- Background: #FFFFFF (white)
- Border: 1px solid #D5D5D5 (gray-400)
- Border Radius: 6px
- Padding: 16px
- Gap: 16px

### **Title:**
- Font: Elevance Sans Semibold, 20px
- Color: #222222 (gray-900)
- Line Height: 24px

### **Info Icon:**
- Size: 24px
- Color: #909090 (gray-600)
- Hover: #222222 (gray-900)

### **Dropdown:**
- Height: 32px
- Min Width: 118px
- Padding: 8px
- Border: 1px solid #222222 (gray-900)
- Border Radius: 4px
- Font: Elevance Sans Medium, 14px
- Line Height: 16px

### **Visualization Area:**
- Default Height: 246px
- Width: 100%
- Flexible height via `height` prop

---

## 🔒 Best Practices

### **DO:**
✅ **ALWAYS use this container** for data visualizations  
✅ Use descriptive titles  
✅ Show info icon for complex visualizations  
✅ Provide dropdown for time period selection  
✅ Handle dropdown changes to update data  
✅ Use appropriate height for your visualization  
✅ Ensure visualizations are responsive  
✅ Test with different data sets  

### **DON'T:**
❌ Create custom containers for charts  
❌ Skip this container for "simple" visualizations  
❌ Use vague titles like "Chart" or "Graph"  
❌ Forget to handle dropdown changes  
❌ Make visualizations too tall or too short  
❌ Hardcode data in visualizations  
❌ Ignore responsive design  

---

## 🎯 Integration with Chart Libraries

### **Chart.js:**

```tsx
import { Bar } from 'react-chartjs-2';

<DataVisualizationCard title="Sales Data">
  <Bar
    data={{
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#6222BC',
      }]
    }}
    options={{ maintainAspectRatio: false }}
  />
</DataVisualizationCard>
```

### **Recharts:**

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

<DataVisualizationCard title="User Growth">
  <LineChart width={400} height={246} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="users" stroke="#6222BC" />
  </LineChart>
</DataVisualizationCard>
```

### **D3.js:**

```tsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const ref = useRef();
  
  useEffect(() => {
    // D3 visualization code
    const svg = d3.select(ref.current);
    // ... your D3 code
  }, [data]);
  
  return <svg ref={ref} width="100%" height="100%" />;
};

<DataVisualizationCard title="D3 Visualization">
  <D3Chart data={myData} />
</DataVisualizationCard>
```

### **Victory:**

```tsx
import { VictoryBar, VictoryChart } from 'victory';

<DataVisualizationCard title="Victory Chart">
  <VictoryChart>
    <VictoryBar data={data} />
  </VictoryChart>
</DataVisualizationCard>
```

---

## 📊 Examples in Storybook

View live examples in Storybook:
- Default
- Bar Chart
- Line Chart
- Pie Chart
- Donut Chart
- Area Chart
- Without Info Icon
- Without Dropdown
- Minimal
- Custom Height (Tall)
- Custom Height (Short)
- With Placeholder
- Empty State
- Loading State
- Dashboard Example
- Custom Dropdown Options
- With Event Handlers

**Navigate to:** Data Visualization → DataVisualizationCard

---

## 🆘 Troubleshooting

### **Visualization not showing?**
- Ensure `children` prop is provided
- Check visualization component is rendering
- Verify data is passed correctly
- Check console for errors

### **Height issues?**
- Use `height` prop to customize
- Default is 246px
- Can use number (px) or string ('300px', '50vh')
- Ensure visualization respects container height

### **Dropdown not working?**
- Provide `onDropdownChange` handler
- Update state when dropdown changes
- Ensure `dropdownValue` is controlled
- Check `dropdownOptions` array

### **Styling conflicts?**
- Use `className` prop for custom styles
- Avoid overriding core container styles
- Ensure chart library styles don't conflict
- Check z-index for overlapping elements

---

## ♿ Accessibility

The DataVisualizationCard component follows accessibility best practices:

- ✅ **Semantic HTML** - Proper heading and button elements
- ✅ **ARIA Labels** - Info and dropdown buttons have labels
- ✅ **Keyboard Navigation** - All interactive elements accessible
- ✅ **Focus Indicators** - Clear focus states
- ✅ **Screen Readers** - Descriptive labels and titles

**Additional Recommendations:**
- Provide alt text for chart images
- Include data tables for screen readers
- Use sufficient color contrast
- Add ARIA labels to chart elements

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The DataVisualizationCard is the UNIVERSAL container for ALL data visualizations.**

### **Key Points:**
- ✅ **ALWAYS use this container** for charts/graphs/maps
- ✅ Import from `@lean-ids/components`
- ✅ Supports any chart library or custom visualization
- ✅ Provides consistent header, title, info icon, and dropdown
- ✅ Fully customizable and accessible
- ✅ Maintains design system consistency

### **Remember:**
**DO NOT create custom containers for visualizations. This component is the standard for ALL data viz in Lean IDS.**

**Consistent containers = Better user experience!** 🎉📊
