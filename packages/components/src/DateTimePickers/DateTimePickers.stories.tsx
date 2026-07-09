/**
 * DateTimePickers Storybook Stories
 * Showcases form input wrappers for date and time selection
 */

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePickerInput } from './TimePickerInput';
import { DateTimePickerInput } from './DateTimePickerInput';
import { DateTimeRangePickerInput } from './DateTimeRangePickerInput';
import { DateRange } from './DateTimeRangePicker/DateTimeRangePicker.types';
import { Button } from '../Button';

// =============================================================================
// META
// =============================================================================

const meta: Meta = {
  title: 'Components/DateTimePickers',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# DateTimePickers

Form input components for date and time selection. Click the input field to open the picker in an overlay.

## Overview

The DateTimePickers package provides three input wrapper components for form integration:
- **TimePickerInput** - Time selection only
- **DateTimePickerInput** - Date and time selection
- **DateTimeRangePickerInput** - Date range selection with optional quick select

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

### TimePickerInput

\`\`\`tsx
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
\`\`\`

### DateTimePickerInput

\`\`\`tsx
import { DateTimePickerInput } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [dateTime, setDateTime] = useState<Date>();

  return (
    <DateTimePickerInput
      label="Appointment Date & Time"
      value={dateTime}
      onChange={setDateTime}
      required
    />
  );
}
\`\`\`

### DateTimeRangePickerInput

\`\`\`tsx
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
      showQuickSelect
      required
    />
  );
}
\`\`\`

## Features

✅ **Form Integration** - Designed specifically for forms with proper validation support
✅ **Overlay Behavior** - Pickers open in a popover overlay on click
✅ **Accessibility** - Full keyboard navigation and screen reader support
✅ **Validation** - Built-in error states and helper text
✅ **Flexible Sizing** - Multiple size options (xsmall, small, default, large)
✅ **Quick Select** - Pre-defined date ranges for DateTimeRangePicker
✅ **Time Formats** - Support for both 12-hour and 24-hour formats

## Props

### Common Props (All Pickers)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Field label |
| value | varies | - | Selected value |
| onChange | function | - | Change handler |
| placeholder | string | - | Placeholder text |
| required | boolean | false | Mark as required field |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Show error state |
| helperText | string | - | Helper/error message |
| size | 'xsmall' \\| 'small' \\| 'default' \\| 'large' | 'default' | Input size |
| className | string | - | Custom CSS class |

### TimePickerInput Specific

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Time in "HH:mm A" format |
| use24Hour | boolean | false | Use 24-hour format |

### DateTimePickerInput Specific

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | Date | - | Selected Date object |
| dateFormat | string | 'MMM dd, yyyy hh:mm a' | Display format |

### DateTimeRangePickerInput Specific

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | DateRange | - | { start: Date \\| null, end: Date \\| null } |
| showQuickSelect | boolean | false | Show quick select panel |
| quickSelectOptions | QuickSelectOption[] | - | Custom quick select options |

## Advanced Examples

### With Validation

\`\`\`tsx
function FormWithValidation() {
  const [time, setTime] = useState<string>('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!time) {
      setError('Time is required');
      return;
    }
    // Submit form
  };

  return (
    <TimePickerInput
      label="Meeting Time"
      value={time}
      onChange={(newTime) => {
        setTime(newTime);
        setError('');
      }}
      required
      error={!!error}
      helperText={error || 'Required field'}
    />
  );
}
\`\`\`

### With Custom Quick Select Options

\`\`\`tsx
<DateTimeRangePickerInput
  label="Report Period"
  value={range}
  onChange={setRange}
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
\`\`\`

## Best Practices

1. **Always provide labels** - Required for accessibility
2. **Use appropriate sizes** - Match your form's design system
3. **Handle validation** - Use error and helperText props
4. **Consider time zones** - Date objects use local time zone
5. **Format display values** - Use dateFormat prop to customize

## Keyboard Navigation

- **Tab** - Navigate between fields
- **Escape** - Close the picker overlay
- **Enter** - Select current value (in picker)
- **Arrow Keys** - Navigate within picker

## Accessibility

All components include:
- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader announcements
- ✅ Focus management
- ✅ Required field indicators
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// =============================================================================
// FORM DEMO - ALL PICKERS
// =============================================================================

export const FormExample: StoryObj = {
  name: 'Complete Form Example',
  parameters: {
    docs: {
      description: {
        story: `
A complete form example showing all three picker types working together. This demonstrates:
- How to manage state for each picker type
- Form submission with all values
- Reset functionality
- Proper spacing and layout

**Code:**
\`\`\`tsx
const [time, setTime] = useState<string>('');
const [dateTime, setDateTime] = useState<Date | undefined>();
const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null });

<TimePickerInput label="Preferred Time" value={time} onChange={setTime} required />
<DateTimePickerInput label="Appointment Date & Time" value={dateTime} onChange={setDateTime} required />
<DateTimeRangePickerInput label="Availability Window" value={dateRange} onChange={setDateRange} showQuickSelect />
\`\`\`
        `,
      },
    },
  },
  render: () => {
    const [time, setTime] = useState<string>('');
    const [dateTime, setDateTime] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRange>({
      start: null,
      end: null,
    });

    const handleSubmit = () => {
      console.log('Form submitted:', {
        time,
        dateTime,
        dateRange,
      });
      alert('Check console for submitted values');
    };

    const handleReset = () => {
      setTime('');
      setDateTime(undefined);
      setDateRange({ start: null, end: null });
    };

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 600 }}>
          Appointment Booking Form
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Time Only */}
          <TimePickerInput
            label="Preferred Time"
            value={time}
            onChange={setTime}
            placeholder="Select time"
            helperText="Select your preferred appointment time"
            required
          />

          {/* Date & Time */}
          <DateTimePickerInput
            label="Appointment Date & Time"
            value={dateTime}
            onChange={setDateTime}
            placeholder="Select date and time"
            helperText="Choose the date and time for your appointment"
            required
          />

          {/* Date Range */}
          <DateTimeRangePickerInput
            label="Availability Window"
            value={dateRange}
            onChange={setDateRange}
            placeholder="Select date range"
            helperText="Select your available date range"
            showQuickSelect
            quickSelectOptions={[
              {
                label: 'Next 7 Days',
                getValue: () => ({
                  start: new Date(),
                  end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                }),
              },
              {
                label: 'Next 30 Days',
                getValue: () => ({
                  start: new Date(),
                  end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                }),
              },
            ]}
          />

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>

        {/* Display Values */}
        <div style={{ 
          marginTop: '32px', 
          padding: '16px', 
          background: '#f5f5f5', 
          borderRadius: '8px',
          fontSize: '14px',
        }}>
          <strong>Current Values:</strong>
          <pre style={{ marginTop: '8px', fontSize: '12px' }}>
            {JSON.stringify({ time, dateTime, dateRange }, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

// =============================================================================
// TIME PICKER INPUT
// =============================================================================

export const TimeInput: StoryObj<typeof TimePickerInput> = {
  name: 'Time Picker Input',
  render: () => {
    const [time, setTime] = useState<string>('');

    return (
      <div style={{ maxWidth: '400px' }}>
        <TimePickerInput
          label="Select Time"
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
            console.log('Time selected:', newTime);
          }}
          placeholder="hh:mm AM/PM"
          helperText="Click to open time picker"
        />
        
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: <strong>{time || 'None'}</strong>
        </div>
      </div>
    );
  },
};

// =============================================================================
// DATETIME PICKER INPUT
// =============================================================================

export const DateTimeInput: StoryObj<typeof DateTimePickerInput> = {
  name: 'DateTime Picker Input',
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>();

    return (
      <div style={{ maxWidth: '400px' }}>
        <DateTimePickerInput
          label="Select Date & Time"
          value={dateTime}
          onChange={(newDate) => {
            setDateTime(newDate);
            console.log('DateTime selected:', newDate);
          }}
          placeholder="MMM dd, yyyy hh:mm AM/PM"
          helperText="Click to open date and time picker"
        />
        
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: <strong>{dateTime ? dateTime.toLocaleString() : 'None'}</strong>
        </div>
      </div>
    );
  },
};

// =============================================================================
// DATETIME RANGE PICKER INPUT
// =============================================================================

export const DateTimeRangeInputWithQuickSelect: StoryObj<typeof DateTimeRangePickerInput> = {
  name: 'DateTime Range Picker Input',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: null,
      end: null,
    });

    return (
      <div style={{ maxWidth: '600px' }}>
        <DateTimeRangePickerInput
          label="Select Date Range"
          value={range}
          onChange={setRange}
          placeholder="Select start and end dates"
          helperText="Includes quick select options"
          showQuickSelect
          quickSelectOptions={[
            {
              label: 'Today',
              getValue: () => {
                const now = new Date();
                const endOfDay = new Date(now);
                endOfDay.setHours(23, 59, 59, 999);
                return { start: now, end: endOfDay };
              },
            },
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
            {
              label: 'This Month',
              getValue: () => {
                const now = new Date();
                const start = new Date(now.getFullYear(), now.getMonth(), 1);
                const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                return { start, end };
              },
            },
          ]}
        />
        
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          <div>Start: <strong>{range.start ? range.start.toLocaleString() : 'None'}</strong></div>
          <div>End: <strong>{range.end ? range.end.toLocaleString() : 'None'}</strong></div>
        </div>
      </div>
    );
  },
};

