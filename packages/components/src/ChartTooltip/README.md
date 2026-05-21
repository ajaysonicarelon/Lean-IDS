# ChartTooltip Component

A reusable tooltip component for displaying contextual information on charts and data visualizations.

---

## 📋 Overview

The ChartTooltip component is a flexible, portal-based tooltip designed specifically for data visualizations. It renders on top of all content, ensuring it's never clipped by parent containers.

### **Key Features:**
- ✅ **Portal Rendering** - Renders at document body level (no clipping)
- ✅ **Fixed Positioning** - Always visible on top (z-index: 9999)
- ✅ **Clean Design** - Matches Figma specifications
- ✅ **Flexible Content** - Supports heading and description
- ✅ **Fully Accessible** - ARIA attributes included
- ✅ **Reusable** - Works with any chart or visualization

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { ChartTooltip } from '@lean-ids/components';
import { useState } from 'react';

function MyChart() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  return (
    <>
      <div
        onMouseMove={(e) => {
          setTooltip({
            visible: true,
            x: e.clientX + 15,
            y: e.clientY - 40,
          });
        }}
        onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
      >
        Hover me
      </div>
      
      <ChartTooltip
        visible={tooltip.visible}
        heading="Product A"
        description="Value: $45,000"
        x={tooltip.x}
        y={tooltip.y}
      />
    </>
  );
}
```

---

## 📖 API Reference

### **Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | Whether the tooltip is visible |
| `heading` | `string` | `undefined` | Tooltip heading (metric name) |
| `description` | `string` | `undefined` | Tooltip description (metric value) |
| `x` | `number` | `0` | X position in pixels (screen coordinates) |
| `y` | `number` | `0` | Y position in pixels (screen coordinates) |
| `className` | `string` | `undefined` | Custom className for styling |

---

## 💡 Usage Examples

### **1. Chart Segment Hover**

```tsx
<svg>
  <path
    onMouseMove={(e) => {
      setTooltip({
        visible: true,
        heading: 'Revenue',
        description: 'Value: $125,000',
        x: e.clientX + 15,
        y: e.clientY - 40,
      });
    }}
    onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
  />
</svg>

<ChartTooltip
  visible={tooltip.visible}
  heading={tooltip.heading}
  description={tooltip.description}
  x={tooltip.x}
  y={tooltip.y}
/>
```

### **2. Info Icon Tooltip (Click)**

```tsx
const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

<button
  onClick={(e) => {
    e.stopPropagation();
    setTooltip((prev) => ({
      visible: !prev.visible,
      x: e.clientX + 10,
      y: e.clientY - 20,
    }));
  }}
>
  <Icon name="Info" />
</button>

<ChartTooltip
  visible={tooltip.visible}
  heading="This chart shows revenue distribution by product category"
  x={tooltip.x}
  y={tooltip.y}
/>
```

### **3. Data Point Hover**

```tsx
<div
  onMouseMove={(e) => {
    setTooltip({
      visible: true,
      heading: 'Q3 2024',
      description: 'Sales: $2.5M (+15%)',
      x: e.clientX + 15,
      y: e.clientY - 40,
    });
  }}
  onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
>
  Data Point
</div>
```

---

## 🎨 Styling

The ChartTooltip uses a clean, minimal design based on Figma specifications:

- **Background:** White (#FFFFFF)
- **Border:** 1.358px solid #E6E6E6
- **Border Radius:** 12px
- **Box Shadow:** 0px 2.716px 0.679px rgba(0, 0, 0, 0.08)
- **Width:** 253px (fixed)
- **Heading:** Black (#000000), 14px, Medium
- **Description:** Gray (#6C6C6C), 14px, Medium

---

## ♿ Accessibility

The ChartTooltip includes proper accessibility features:

- `role="tooltip"` for screen readers
- `aria-hidden` attribute based on visibility
- No pointer events (doesn't interfere with mouse)

---

## 🔧 Technical Details

### **Portal Rendering:**

The tooltip uses React Portal to render at the document body level:

```tsx
return typeof document !== 'undefined' 
  ? createPortal(tooltipContent, document.body)
  : tooltipContent;
```

This ensures:
- ✅ No clipping by parent containers
- ✅ Always on top (z-index: 9999)
- ✅ Works with overflow: hidden parents

### **Positioning:**

The tooltip uses **fixed positioning** with screen coordinates:

```tsx
// Use clientX/clientY directly (not relative to container)
x: event.clientX + 15,  // 15px offset from cursor
y: event.clientY - 40,  // 40px above cursor
```

---

## 📊 Use Cases

1. **Chart Segment Hover** - Show metric name and value
2. **Info Icon Tooltips** - Display contextual help
3. **Data Point Details** - Show detailed information
4. **Legend Tooltips** - Explain chart metrics
5. **Interactive Elements** - Provide additional context

---

## 🎯 Best Practices

1. **Positioning:**
   - Add small offset from cursor (+10-15px X, -20-40px Y)
   - Ensure tooltip doesn't cover the element being hovered

2. **Content:**
   - Keep heading short and descriptive
   - Use description for additional details
   - Don't overload with too much text

3. **Interaction:**
   - Use `onMouseMove` for hover tooltips
   - Use `onClick` for info icon tooltips
   - Always hide on `onMouseLeave`

4. **Performance:**
   - Use `stopPropagation()` for click tooltips
   - Clean up event listeners in useEffect

---

## 🔗 Related Components

- **DonutChart** - Uses ChartTooltip for segment hover
- **DataVisualizationCard** - Uses ChartTooltip for info icon
- **ChartLegend** - Can be enhanced with tooltips

---

## 📚 Storybook

View interactive examples in Storybook:

```bash
npm run storybook
```

Navigate to: **Data Visualization > ChartTooltip**

---

## 🐛 Troubleshooting

**Tooltip not visible?**
- Check `visible` prop is true
- Verify x/y coordinates are within viewport
- Ensure Portal is rendering (check document.body)

**Tooltip getting clipped?**
- ChartTooltip uses Portal, so it should never clip
- If clipping occurs, check z-index conflicts

**Tooltip not following cursor?**
- Use `onMouseMove` instead of `onMouseEnter`
- Update x/y on every mouse move event

---

For more examples, see the Storybook documentation or the DonutChart component implementation.
