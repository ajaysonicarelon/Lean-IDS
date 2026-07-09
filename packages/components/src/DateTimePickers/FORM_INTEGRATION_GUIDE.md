# DateTimePicker Form Integration Guide

## Overview

The DateTimePicker components can be used in two ways:
1. **Inline** - Render directly in your layout (existing components)
2. **Form Input** - Input field that opens picker in overlay (new wrapper components)

---

## Form Input Components (Recommended for Forms)

### 1. TimePickerInput

Input field that opens TimePicker in a popover overlay.

```tsx
import { TimePickerInput } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [time, setTime] = useState<string>('');

  return (
    <TimePickerInput
      label="Select Time"
      value={time}
      onChange={setTime}
      placeholder="hh:mm AM/PM"
      required
    />
  );
}
```

**Props:**
- `label` - Field label (required)
- `value` - Selected time in "HH:mm A" format
- `onChange` - Handler receives time string
- `placeholder` - Placeholder text
- `required` - Mark as required field
- `disabled` - Disable the input
- `error` - Show error state
- `helperText` - Helper/error message
- `size` - Input size: 'xsmall' | 'small' | 'default' | 'large'
- `use24Hour` - Use 24-hour format

---

### 2. DateTimePickerInput

Input field that opens DateTimePicker in a popover overlay.

```tsx
import { DateTimePickerInput } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [dateTime, setDateTime] = useState<Date>();

  return (
    <DateTimePickerInput
      label="Select Date & Time"
      value={dateTime}
      onChange={setDateTime}
      placeholder="MMM dd, yyyy hh:mm AM/PM"
      required
    />
  );
}
```

**Props:**
- `label` - Field label (required)
- `value` - Selected Date object
- `onChange` - Handler receives Date object
- `placeholder` - Placeholder text
- `required` - Mark as required field
- `disabled` - Disable the input
- `error` - Show error state
- `helperText` - Helper/error message
- `size` - Input size
- `dateFormat` - Display format (default: 'MMM dd, yyyy hh:mm a')

---

### 3. DateTimeRangePickerInput

Input field that opens DateTimeRangePicker in a popover overlay.

```tsx
import { DateTimeRangePickerInput } from '@ajaysoni7832/lean-ids-components';
import type { DateRange } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [range, setRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  return (
    <DateTimeRangePickerInput
      label="Select Date Range"
      value={range}
      onChange={setRange}
      placeholder="Select start and end dates"
      showQuickSelect
      required
    />
  );
}
```

**Props:**
- `label` - Field label (required)
- `value` - DateRange object `{ start: Date | null, end: Date | null }`
- `onChange` - Handler receives DateRange object
- `placeholder` - Placeholder text
- `required` - Mark as required field
- `disabled` - Disable the input
- `error` - Show error state
- `helperText` - Helper/error message
- `size` - Input size
- `dateFormat` - Display format
- `showQuickSelect` - Show quick select panel
- `quickSelectOptions` - Custom quick select options

---

## Inline Components (For Direct Rendering)

Use these when you want the picker to be always visible in your layout:

```tsx
import { TimePicker, DateTimePicker, DateTimeRangePicker } from '@ajaysoni7832/lean-ids-components';

// Always visible in layout
<TimePicker value={time} onChange={setTime} />
<DateTimePicker value={date} onChange={setDate} />
<DateTimeRangePicker value={range} onChange={setRange} />
```

---

## Form Integration Examples

### Basic Form with Validation

```tsx
import { DateTimePickerInput, Button } from '@ajaysoni7832/lean-ids-components';

function AppointmentForm() {
  const [appointmentDate, setAppointmentDate] = useState<Date>();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!appointmentDate) {
      setError('Please select an appointment date');
      return;
    }
    // Submit form
  };

  return (
    <form>
      <DateTimePickerInput
        label="Appointment Date & Time"
        value={appointmentDate}
        onChange={(date) => {
          setAppointmentDate(date);
          setError('');
        }}
        required
        error={!!error}
        helperText={error}
      />
      
      <Button onClick={handleSubmit}>
        Book Appointment
      </Button>
    </form>
  );
}
```

### Date Range Filter

```tsx
import { DateTimeRangePickerInput } from '@ajaysoni7832/lean-ids-components';
import type { DateRange } from '@ajaysoni7832/lean-ids-components';

function DataFilter() {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  const handleFilter = () => {
    if (dateRange.start && dateRange.end) {
      // Apply filter
      console.log('Filter from:', dateRange.start, 'to:', dateRange.end);
    }
  };

  return (
    <div>
      <DateTimeRangePickerInput
        label="Filter by Date Range"
        value={dateRange}
        onChange={setDateRange}
        showQuickSelect
        quickSelectOptions={[
          {
            label: 'Last 7 Days',
            getValue: () => ({
              start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              end: new Date(),
            }),
          },
          {
            label: 'Last 30 Days',
            getValue: () => ({
              start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
              end: new Date(),
            }),
          },
        ]}
      />
      
      <Button onClick={handleFilter}>Apply Filter</Button>
    </div>
  );
}
```

---

## Styling & Customization

All input components accept a `className` prop for custom styling:

```tsx
<DateTimePickerInput
  label="Custom Styled"
  value={date}
  onChange={setDate}
  className="my-custom-class"
/>
```

---

## Accessibility

All input components include:
- ✅ Proper label association
- ✅ Keyboard navigation (Tab, Escape)
- ✅ Click outside to close
- ✅ Required field indicators
- ✅ Error state announcements
- ✅ Helper text for screen readers

---

## Best Practices

1. **Use Input Components for Forms** - They provide better UX with overlay behavior
2. **Use Inline Components for Dashboards** - When picker should always be visible
3. **Always Provide Labels** - Required for accessibility
4. **Handle Validation** - Use `error` and `helperText` props
5. **Consider Time Zones** - Date objects use local time zone
6. **Format Display Values** - Use `dateFormat` prop to customize display

---

## Migration from Inline to Input Components

If you're using inline components in forms, migrate to input components:

**Before:**
```tsx
<div>
  <label>Select Date</label>
  <DateTimePicker value={date} onChange={setDate} />
</div>
```

**After:**
```tsx
<DateTimePickerInput
  label="Select Date"
  value={date}
  onChange={setDate}
/>
```

Benefits:
- ✅ Cleaner form layout
- ✅ Consistent with other form inputs
- ✅ Better mobile experience
- ✅ Automatic overlay positioning
