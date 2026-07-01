# DonutChart Component

**A donut chart visualization component for displaying 2-6 metrics with optional center KPI.**

---

## 📋 Overview

The DonutChart component is a flexible data visualization component designed for displaying proportional data in a donut chart format. It supports 2-6 metrics, optional center KPI value, and both vertical and horizontal layouts.

### **Key Features:**
- ✅ **2-6 Metrics Support** - Flexible number of data segments
- ✅ **Center KPI** - Optional center value display
- ✅ **Two Layouts** - Vertical (chart on top) or Horizontal (chart on left)
- ✅ **Interactive Legends** - Click to toggle metrics on/off
- ✅ **Hover Tooltips** - Show metric name and value on hover
- ✅ **SVG-Based** - Crisp rendering at any size
- ✅ **Customizable Colors** - Per-metric color control
- ✅ **Accessible** - ARIA labels and keyboard support

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { DataVisualizationCard, DonutChart } from '@ajaysoni7832/lean-ids-components';

<DataVisualizationCard title="Revenue Distribution">
  <DonutChart
    data={[
      { label: 'Product A', value: 45, color: '#6222BC' },
      { label: 'Product B', value: 30, color: '#E3725F' },
      { label: 'Product C', value: 25, color: '#1AC2C1' },
    ]}
    centerValue="$3m"
    showCenterValue={true}
    layout="vertical"
  />
</DataVisualizationCard>
```

---

## 📖 Complete API

### **DonutChartProps:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Chart title |
| `showInfoIcon` | `boolean` | `false` | Show info icon next to title |
| `onInfoClick` | `() => void` | - | Info icon click handler |
| `data` | `DonutChartData[]` | **Required** | Array of data points |
| `centerValue` | `string` | - | Center KPI value to display |
| `showCenterValue` | `boolean` | `true` | Show center value |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation |
| `size` | `number` | `196` | Chart diameter in pixels |
| `onLegendClick` | `(index: number) => void` | - | Custom legend click handler |
| `className` | `string` | - | Custom CSS class |

### **DonutChartData Type:**

```tsx
interface DonutChartData {
  label: string;    // Metric label
  value: number;    // Metric value
  color: string;    // Segment color (hex)
}
```

---

## 💡 Common Use Cases

### **1. Revenue Distribution (3 Metrics):**

```tsx
<DataVisualizationCard title="Revenue by Product">
  <DonutChart
    data={[
      { label: 'Product A', value: 45, color: '#6222BC' },
      { label: 'Product B', value: 30, color: '#E3725F' },
      { label: 'Product C', value: 25, color: '#1AC2C1' },
    ]}
    centerValue="$3m"
    showCenterValue={true}
    layout="vertical"
  />
</DataVisualizationCard>
```

### **2. Market Share (4 Metrics):**

```tsx
<DataVisualizationCard title="Market Share Analysis">
  <DonutChart
    data={[
      { label: 'Company A', value: 40, color: '#6222BC' },
      { label: 'Company B', value: 25, color: '#E3725F' },
      { label: 'Company C', value: 20, color: '#1AC2C1' },
      { label: 'Others', value: 15, color: '#F5C563' },
    ]}
    centerValue="100%"
    showCenterValue={true}
    layout="vertical"
  />
</DataVisualizationCard>
```

### **3. Regional Sales (5 Metrics):**

```tsx
<DataVisualizationCard title="Sales by Region">
  <DonutChart
    data={[
      { label: 'North America', value: 30, color: '#6222BC' },
      { label: 'Europe', value: 25, color: '#E3725F' },
      { label: 'Asia Pacific', value: 20, color: '#1AC2C1' },
      { label: 'Latin America', value: 15, color: '#F5C563' },
      { label: 'Middle East', value: 10, color: '#3E71C2' },
    ]}
    centerValue="$8.5m"
    showCenterValue={true}
    layout="vertical"
  />
</DataVisualizationCard>
```

### **4. Horizontal Layout:**

```tsx
<DataVisualizationCard title="Category Breakdown">
  <DonutChart
    data={[
      { label: 'Electronics', value: 40, color: '#6222BC' },
      { label: 'Clothing', value: 30, color: '#E3725F' },
      { label: 'Food', value: 20, color: '#1AC2C1' },
      { label: 'Other', value: 10, color: '#F5C563' },
    ]}
    centerValue="$2.1m"
    showCenterValue={true}
    layout="horizontal"
  />
</DataVisualizationCard>
```

### **5. Without Center Value:**

```tsx
<DataVisualizationCard title="Distribution Only">
  <DonutChart
    data={[
      { label: 'Segment A', value: 60, color: '#6222BC' },
      { label: 'Segment B', value: 40, color: '#E3725F' },
    ]}
    showCenterValue={false}
    layout="vertical"
  />
</DataVisualizationCard>
```

### **6. With Title and Info Icon:**

```tsx
<DataVisualizationCard title="Performance Metrics">
  <DonutChart
    title="Chart Heading"
    showInfoIcon={true}
    onInfoClick={() => console.log('Info clicked')}
    data={[
      { label: 'Metric A', value: 45, color: '#6222BC' },
      { label: 'Metric B', value: 30, color: '#E3725F' },
      { label: 'Metric C', value: 25, color: '#1AC2C1' },
    ]}
    centerValue="$3m"
    showCenterValue={true}
    layout="vertical"
  />
</DataVisualizationCard>
```

### **7. Custom Size:**

```tsx
<DataVisualizationCard title="Large Donut Chart">
  <DonutChart
    data={[
      { label: 'Product A', value: 45, color: '#6222BC' },
      { label: 'Product B', value: 30, color: '#E3725F' },
      { label: 'Product C', value: 25, color: '#1AC2C1' },
    ]}
    centerValue="$5.2m"
    showCenterValue={true}
    layout="vertical"
    size={250}
  />
</DataVisualizationCard>
```

### **8. With API Data:**

```tsx
const SalesDonutChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [totalSales, setTotalSales] = useState('');

  useEffect(() => {
    fetch('/api/sales-by-product')
      .then(res => res.json())
      .then(data => {
        setSalesData(data.products.map(p => ({
          label: p.name,
          value: p.sales,
          color: p.color,
        })));
        setTotalSales(data.total);
      });
  }, []);

  return (
    <DataVisualizationCard title="Sales by Product">
      <DonutChart
        data={salesData}
        centerValue={totalSales}
        showCenterValue={true}
        layout="vertical"
      />
    </DataVisualizationCard>
  );
};
```

---

## 🎨 Design Specifications

### **Chart Dimensions:**
- Default Size: 196px diameter
- Inner Radius: 60% of outer radius (donut hole)
- Stroke Width: 40% of radius

### **Colors (Recommended):**
```typescript
const chartColors = {
  primary: '#6222BC',      // primary-400 (purple)
  terracotta: '#E3725F',   // terracotta-500 (coral)
  turquoise: '#1AC2C1',    // turquoise-400 (teal)
  yellow: '#F5C563',       // (yellow)
  pantone: '#3E71C2',      // pantone-400 (blue)
  green: '#7AC943',        // (green)
};
```

### **Typography:**
- **Title:** Elevance Sans Semibold, 14px, #222222
- **Center Value:** Elevance Sans Semibold, 24px, #222222, 1px letter-spacing
- **Legend Labels:** Elevance Sans Medium, 14px, #222222

### **Layout:**
- **Vertical:** Chart on top, legends below (centered)
- **Horizontal:** Chart on left, legends on right (left-aligned)
- Gap: 20px between chart and legends
- Legend Gap: 14px vertical, 12px horizontal

---

## ♿ Accessibility

The DonutChart component follows accessibility best practices:

- ✅ **ARIA Labels** - Proper labels for interactive elements
- ✅ **Keyboard Support** - Legend items are keyboard accessible
- ✅ **Screen Readers** - Descriptive labels for all segments
- ✅ **Color Contrast** - WCAG AA compliant colors
- ✅ **Interactive States** - Clear focus and hover states

---

## 🔒 Best Practices

### **DO:**
✅ Use 2-6 metrics for optimal readability  
✅ Always wrap in DataVisualizationCard  
✅ Use distinct colors for each segment  
✅ Show center KPI when relevant  
✅ Use vertical layout for most cases  
✅ Provide meaningful metric labels  
✅ Use consistent color scheme across charts  

### **DON'T:**
❌ Use more than 6 metrics (hard to read)  
❌ Use similar colors for adjacent segments  
❌ Skip the DataVisualizationCard container  
❌ Use vague labels like "Other" for large segments  
❌ Make the chart too small (< 150px)  
❌ Use gradients for segment colors  
❌ Forget to handle empty data states  

---

## 📊 Examples in Storybook

View live examples in Storybook:
- 2 Metrics
- 3 Metrics
- 4 Metrics
- 5 Metrics
- 6 Metrics
- Horizontal Layout
- Without Center Value
- Without Title
- Without Info Icon
- Custom Size
- Interactive (Click Legends)
- In DataVisualizationCard
- Dashboard Example
- Real-world Sales Data
- Layout Comparison

**Navigate to:** Data Visualization → DonutChart

---

## 🆘 Troubleshooting

### **Chart not rendering?**
- Ensure `data` prop has at least 2 items
- Check all values are positive numbers
- Verify colors are valid hex codes
- Check console for errors

### **Center value not showing?**
- Set `showCenterValue={true}`
- Provide `centerValue` prop
- Ensure chart size is adequate (>= 150px)

### **Legends not clickable?**
- Default behavior: legends are clickable
- To disable: provide custom `onLegendClick` handler
- Check browser console for errors

### **Layout issues?**
- Verify `layout` prop is 'vertical' or 'horizontal'
- Ensure parent container has adequate width
- Check DataVisualizationCard height prop

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The DonutChart component provides flexible donut chart visualization for 2-6 metrics.**

- Import from `@ajaysoni7832/lean-ids-components`
- Always use with DataVisualizationCard
- Supports vertical and horizontal layouts
- Interactive legends with toggle functionality
- SVG-based for crisp rendering
- Fully accessible and customizable

**Consistent visualizations = Better insights!** 🎉📊
