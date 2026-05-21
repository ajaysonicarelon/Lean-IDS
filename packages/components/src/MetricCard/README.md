# MetricCard Component

**The official data visualization component for displaying KPIs and metrics in Lean IDS dashboards.**

---

## 📋 Overview

The MetricCard component is a flexible data visualization component designed for displaying single or multiple KPIs and metrics in dashboards. It supports three variants to accommodate different use cases.

### **Key Features:**
- ✅ **Three Variants** - Basic, Filled (highlighted), and Set of Metrics
- ✅ **Change Indicators** - Show positive/negative/neutral changes with badges
- ✅ **Progress Bars** - Visual progress indicators
- ✅ **Action Chips** - Warning, error, or info action buttons
- ✅ **Metric Groups** - Display multiple related metrics together
- ✅ **Fully Customizable** - Show/hide any element

---

## 🎯 Variants

### **1. Basic (Default)**
White card for standard metrics display.
- Metric name and value
- Change badge with comparison text
- Optional progress bar
- Optional action chip

### **2. Filled (Highlighted)**
Purple background card to highlight important metrics.
- Same features as Basic
- Purple background (#6222BC)
- White text for contrast

### **3. Set of Metrics (Grouped)**
Large card for displaying multiple related metrics.
- Section heading with info icon
- Dropdown for time period selection
- Grid of metrics (2 columns)
- Highlighted metrics support

---

## 🚀 Quick Start

### **Basic Metric Card:**

```tsx
import { MetricCard } from '@lean-ids/components';

<MetricCard
  variant="basic"
  metricName="Total Users"
  value="8,888"
  showChange={true}
  changeValue="+56"
  changeType="positive"
  comparisonText="vs last week"
/>
```

### **Filled Metric Card:**

```tsx
<MetricCard
  variant="filled"
  metricName="Revenue"
  value="$125,450"
  showChange={true}
  changeValue="+12.5%"
  changeType="positive"
  comparisonText="vs last month"
/>
```

### **Set of Metrics:**

```tsx
<MetricCard
  variant="set"
  sectionHeading="Financial Overview"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 7 days"
  metrics={[
    { label: 'Metric A', value: '48' },
    { label: 'Metric B', value: '$12,573,324.89' },
    { label: 'Metric C', value: '12' },
    { label: 'Metric D', value: '$677.83', highlighted: true },
  ]}
/>
```

---

## 📖 Complete API

### **MetricCardProps:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'basic' \| 'filled' \| 'set'` | `'basic'` | Card variant |
| `metricName` | `string` | `'Metric Name'` | Metric label |
| `value` | `string \| number` | `'8,888'` | Metric value |
| `showChange` | `boolean` | `true` | Show change badge |
| `changeValue` | `string` | `'+56'` | Change value |
| `changeType` | `'positive' \| 'negative' \| 'neutral'` | `'positive'` | Badge color |
| `comparisonText` | `string` | `'vs last week'` | Comparison text |
| `showProgressBar` | `boolean` | `false` | Show progress bar |
| `progressValue` | `number` | `60` | Progress (0-100) |
| `showActionChip` | `boolean` | `false` | Show action chip |
| `actionText` | `string` | `'Need Action'` | Chip text |
| `actionType` | `'warning' \| 'error' \| 'info'` | `'warning'` | Chip type |
| `onActionClick` | `() => void` | - | Chip click handler |
| `sectionHeading` | `string` | `'Section Heading'` | Heading (set variant) |
| `showInfoIcon` | `boolean` | `true` | Show info icon |
| `onInfoClick` | `() => void` | - | Info click handler |
| `showDropdown` | `boolean` | `true` | Show dropdown |
| `dropdownValue` | `string` | `'Last 7 days'` | Dropdown value |
| `onDropdownChange` | `() => void` | - | Dropdown handler |
| `metrics` | `MetricData[]` | `[]` | Metrics array |
| `className` | `string` | - | Custom CSS class |

### **MetricData Type:**

```tsx
interface MetricData {
  label: string;
  value: string | number;
  highlighted?: boolean;
}
```

---

## 💡 Common Use Cases

### **1. Dashboard KPI Cards:**

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
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
    metricName="Conversion Rate"
    value="3.45%"
    showChange={true}
    changeValue="+0.23%"
    changeType="positive"
    comparisonText="vs average"
  />
</div>
```

### **2. With Progress Bar:**

```tsx
<MetricCard
  variant="basic"
  metricName="Goal Completion"
  value="75%"
  showChange={true}
  changeValue="+15"
  changeType="positive"
  comparisonText="vs target"
  showProgressBar={true}
  progressValue={75}
/>
```

### **3. With Action Chip:**

```tsx
<MetricCard
  variant="basic"
  metricName="Pending Tasks"
  value="23"
  showChange={true}
  changeValue="+5"
  changeType="positive"
  comparisonText="vs yesterday"
  showActionChip={true}
  actionText="Need Action"
  actionType="warning"
  onActionClick={() => console.log('Action clicked')}
/>
```

### **4. Negative Change:**

```tsx
<MetricCard
  variant="basic"
  metricName="Bounce Rate"
  value="42%"
  showChange={true}
  changeValue="-8"
  changeType="negative"
  comparisonText="vs last week"
/>
```

### **5. Grouped Metrics:**

```tsx
<MetricCard
  variant="set"
  sectionHeading="Financial Overview"
  showInfoIcon={true}
  showDropdown={true}
  dropdownValue="Last 7 days"
  onInfoClick={() => console.log('Info clicked')}
  onDropdownChange={() => console.log('Dropdown clicked')}
  metrics={[
    { label: 'Revenue', value: '$12,573,324.89' },
    { label: 'Expenses', value: '$8,234,567.12' },
    { label: 'Profit', value: '$4,338,757.77', highlighted: true },
    { label: 'Growth', value: '+23.5%' },
  ]}
/>
```

---

## 🎨 Design Specifications

### **Basic Variant:**
- Background: #FFFFFF (white)
- Border: 1px solid #D5D5D5 (gray-400)
- Border Radius: 8px
- Padding: 16px
- Gap: 8px

**Metric Label:**
- Font: Elevance Sans Medium, 14px
- Color: #909090 (gray-600)
- Line Height: 24px

**Metric Value:**
- Font: Elevance Sans Semibold, 32px
- Color: #222222 (gray-900)
- Line Height: 38px
- Letter Spacing: 1px

### **Filled Variant:**
- Background: #6222BC (primary-400)
- Border: 1px solid #180336 (primary-900)
- Border Radius: 8px
- Padding: 16px
- Gap: 8px

**Metric Label:**
- Font: Elevance Sans Medium, 14px
- Color: #CBB5E9 (primary-200)
- Line Height: 24px

**Metric Value:**
- Font: Elevance Sans Semibold, 32px
- Color: #FFFFFF (white)
- Line Height: 38px
- Letter Spacing: 1px

### **Change Badge (Positive):**
- Background: #E7F3E6 (green-100)
- Color: #108808 (green-500)
- Padding: 2px 4px
- Border Radius: 2px
- Font: Elevance Sans Medium, 12px

### **Change Badge (Negative):**
- Background: #FBE7EC (red-100)
- Color: #D2093C (red-500)

### **Progress Bar:**
- Container: #EFE6F8 (primary-100), 4px height
- Fill: #6222BC (primary-400)
- Border Radius: 24px

### **Action Chip (Warning):**
- Background: #FFEBB8 (yellow-200)
- Border: 1px solid #99710A (yellow-700)
- Color: #99710A
- Padding: 2px 6px
- Border Radius: 999px

### **Set of Metrics:**
- Background: #FFFFFF (white)
- Border: 1px solid #D5D5D5
- Border Radius: 8px
- Padding: 16px
- Gap: 24px

**Section Heading:**
- Font: Elevance Sans Semibold, 18px
- Color: #222222 (gray-900)
- Line Height: 22px

**Metric Item:**
- Padding: 8px
- Border Radius: 6px
- Background: transparent (or #F8F7FB if highlighted)

---

## ♿ Accessibility

The MetricCard component follows accessibility best practices:

- ✅ **Semantic HTML** - Proper heading and button elements
- ✅ **Color Contrast** - WCAG AA compliant
- ✅ **Interactive Elements** - Keyboard accessible
- ✅ **Screen Readers** - Descriptive labels

---

## 🔒 Best Practices

### **DO:**
✅ Use Basic variant for standard metrics  
✅ Use Filled variant to highlight important metrics  
✅ Use Set variant for grouped related metrics  
✅ Show change indicators when relevant  
✅ Use appropriate change types (positive/negative)  
✅ Format large numbers consistently  
✅ Add action chips for actionable metrics  

### **DON'T:**
❌ Mix too many filled cards (loses emphasis)  
❌ Show change without comparison text  
❌ Use progress bars for non-percentage metrics  
❌ Overuse action chips  
❌ Display too many metrics in one set (max 6-8)  
❌ Use vague metric names  

---

## 📊 Examples in Storybook

View live examples in Storybook:
- Basic
- Basic (Positive Change)
- Basic (Negative Change)
- Basic (Neutral Change)
- Basic with Progress
- Basic with Warning Chip
- Basic with Error Chip
- Basic with Info Chip
- Basic Minimal
- Filled
- Filled with All Features
- Set of Metrics
- Set without Dropdown
- Set without Info
- Set Minimal
- Dashboard Example
- Large Numbers

**Navigate to:** Data Visualization → MetricCard

---

## 🆘 Troubleshooting

### **Progress bar not showing?**
- Set `showProgressBar={true}`
- Provide `progressValue` (0-100)
- Only use for percentage-based metrics

### **Action chip not clickable?**
- Provide `onActionClick` handler
- Ensure `showActionChip={true}`
- Check button is not disabled

### **Metrics not displaying in set?**
- Provide `metrics` array
- Ensure each metric has `label` and `value`
- Check array is not empty

### **Styling issues?**
- Verify `variant` prop is correct
- Check for CSS conflicts
- Ensure theme is properly configured

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The MetricCard component provides flexible KPI/metric visualization for dashboards.**

- Import from `@lean-ids/components`
- Three variants: Basic, Filled, Set
- Support for change indicators, progress bars, and action chips
- Fully customizable and accessible
- Perfect for data visualization

**Consistent metrics = Better insights!** 🎉
