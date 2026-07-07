# DateTimePickers

Comprehensive date and time selection components for Lean IDS, built with full token integration and accessibility support.

## Components

### TimePicker

A time-only selection component with hours, minutes, and AM/PM dropdowns.

**Usage:**
```tsx
import { TimePicker } from '@lean-ids/components';

function MyComponent() {
  const [time, setTime] = useState('12:00 PM');

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      use24Hour={false}
    />
  );
}
```

**Props:**
- `value?: string` - Selected time in "HH:mm A" format
- `onChange?: (time: string) => void` - Change handler
- `use24Hour?: boolean` - Use 24-hour format (default: false)
- `disabled?: boolean` - Disabled state
- `className?: string` - Custom className

---

### DateTimePicker

A single date and time selection component with calendar and time dropdowns.

**Usage:**
```tsx
import { DateTimePicker } from '@lean-ids/components';

function MyComponent() {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <DateTimePicker
      value={dateTime}
      onChange={setDateTime}
      showTime={true}
      use24Hour={false}
    />
  );
}
```

**Props:**
- `value?: Date | string` - Selected date-time
- `onChange?: (date: Date) => void` - Change handler
- `minDate?: Date` - Minimum selectable date
- `maxDate?: Date` - Maximum selectable date
- `use24Hour?: boolean` - Use 24-hour format (default: false)
- `showTime?: boolean` - Show time selector (default: true)
- `disabled?: boolean` - Disabled state
- `className?: string` - Custom className

---

### DateTimeRangePicker

A date and time range selection component with dual calendars and quick select options.

**Usage:**
```tsx
import { DateTimeRangePicker, DateRange } from '@lean-ids/components';

function MyComponent() {
  const [range, setRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  return (
    <DateTimeRangePicker
      value={range}
      onChange={setRange}
      showTime={true}
      showQuickSelect={true}
    />
  );
}
```

**Props:**
- `value?: DateRange` - Selected date range
- `onChange?: (range: DateRange) => void` - Change handler
- `minDate?: Date` - Minimum selectable date
- `maxDate?: Date` - Maximum selectable date
- `use24Hour?: boolean` - Use 24-hour format (default: false)
- `showTime?: boolean` - Show time selectors (default: true)
- `showQuickSelect?: boolean` - Show quick select panel (default: true)
- `quickSelectOptions?: QuickSelectOption[]` - Custom quick select options
- `disabled?: boolean` - Disabled state
- `className?: string` - Custom className

**Custom Quick Select Options:**
```tsx
const customQuickSelect: QuickSelectOption[] = [
  {
    label: 'This Week',
    getValue: () => ({
      start: startOfWeek(new Date()),
      end: endOfWeek(new Date()),
    }),
  },
  {
    label: 'This Month',
    getValue: () => ({
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
    }),
  },
];

<DateTimeRangePicker
  quickSelectOptions={customQuickSelect}
  showQuickSelect={true}
/>
```

---

## Features

### ✅ Token-Based Styling
All components use Lean IDS design tokens for colors, spacing, typography, and borders. No hardcoded values.

### ✅ Accessibility
- Full keyboard navigation support
- ARIA labels and roles
- Screen reader friendly
- Focus management

### ✅ Date Utilities
Built with `date-fns` for reliable date manipulation and formatting.

### ✅ Existing Component Integration
- Uses `Select` component for dropdowns
- Uses `Button` component for actions
- Uses Material Icons for navigation

### ✅ Responsive Design
Components adapt to different screen sizes and contexts.

### ✅ State Management
- Supports controlled and uncontrolled modes
- Proper state handling for complex interactions
- Range selection with visual feedback

---

## Design Tokens Used

### Colors
- `primary[50]` - Header background
- `primary[100]` - Range selection background
- `primary[400]` - Selected dates, labels
- `primary[500]` - Active states
- `neutral[50]` - White backgrounds
- `neutral[400]` - Borders
- `neutral[900]` - Text
- `secondary.turquoise[400]` - Focus indicators

### Spacing
- `spacing[1]` through `spacing[10]` - Padding and gaps

### Typography
- `body.medium` - Labels and text
- `body.semibold` - Selected values
- `caption.medium` - Field labels

### Border Radius
- `borderRadius.sm` - Small elements (4px)
- `borderRadius.md` - Containers (8px)

---

## Calendar Day States

The internal `CalendarDay` component supports multiple states:

- **Default** - Normal day
- **Hover** - Mouse over
- **Active** - Mouse down
- **Focus** - Keyboard focus
- **Selected** - Selected date

And day types:

- **Weekday** - Regular weekday
- **Weekend** - Saturday/Sunday
- **Today** - Current date
- **OtherMonth** - Days from adjacent months

And range positions:

- **none** - Not in range
- **Start** - Range start
- **Middle** - Within range
- **End** - Range end

---

## Replacing Existing Pickers

These components are designed to replace any existing date/time pickers in your application:

```tsx
// Old approach (if using external libraries)
import DatePicker from 'some-library';

// New approach - Lean IDS
import { DateTimePicker } from '@lean-ids/components';

// Works in forms, tables, and all contexts
<DateTimePicker
  value={formData.date}
  onChange={(date) => setFormData({ ...formData, date })}
/>
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Dependencies

- `date-fns` - Date manipulation
- `@mui/icons-material` - Icons only
- Existing Lean IDS components (Select, Button)

---

## Notes

- All components follow Lean IDS design guidelines
- No gradients used (solid colors only)
- Fully typed with TypeScript
- Tested with React 18+
- Compatible with styled-components 6+
