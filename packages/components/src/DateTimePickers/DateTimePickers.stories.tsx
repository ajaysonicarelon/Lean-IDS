/**
 * DateTimePickers Storybook Stories
 * Showcases TimePicker, DateTimePicker, and DateTimeRangePicker components
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { DateTimePicker } from './DateTimePicker';
import { DateTimeRangePicker } from './DateTimeRangePicker';
import { DateRange } from './DateTimeRangePicker/DateTimeRangePicker.types';

// =============================================================================
// META
// =============================================================================

const meta: Meta = {
  title: 'Components/DateTimePickers',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive date and time selection components for Lean IDS.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// =============================================================================
// TIMEPICKER STORIES
// =============================================================================

export const TimePickerDefault: StoryObj<typeof TimePicker> = {
  name: 'TimePicker - Default',
  render: () => {
    const [time, setTime] = useState('12:45 PM');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>TimePicker - 12 Hour Format</h3>
        <TimePicker
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
            console.log('Time selected:', newTime);
          }}
          use24Hour={false}
        />
        <p style={{ marginTop: '20px' }}>Selected Time: {time}</p>
      </div>
    );
  },
};

export const TimePicker24Hour: StoryObj<typeof TimePicker> = {
  name: 'TimePicker - 24 Hour Format',
  render: () => {
    const [time, setTime] = useState('14:30');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>TimePicker - 24 Hour Format</h3>
        <TimePicker
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
            console.log('Time selected:', newTime);
          }}
          use24Hour={true}
        />
        <p style={{ marginTop: '20px' }}>Selected Time: {time}</p>
      </div>
    );
  },
};

export const TimePickerDisabled: StoryObj<typeof TimePicker> = {
  name: 'TimePicker - Disabled',
  render: () => {
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>TimePicker - Disabled State</h3>
        <TimePicker
          value="12:00 PM"
          disabled={true}
        />
      </div>
    );
  },
};

// =============================================================================
// DATETIMEPICKER STORIES
// =============================================================================

export const DateTimePickerDefault: StoryObj<typeof DateTimePicker> = {
  name: 'DateTimePicker - Default',
  render: () => {
    const [date, setDate] = useState(new Date());
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimePicker - With Time</h3>
        <DateTimePicker
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
            console.log('Date selected:', newDate);
          }}
          showTime={true}
          use24Hour={false}
        />
        <p style={{ marginTop: '20px' }}>
          Selected: {date.toLocaleString()}
        </p>
      </div>
    );
  },
};

export const DateTimePickerDateOnly: StoryObj<typeof DateTimePicker> = {
  name: 'DateTimePicker - Date Only',
  render: () => {
    const [date, setDate] = useState(new Date());
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimePicker - Date Only</h3>
        <DateTimePicker
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
            console.log('Date selected:', newDate);
          }}
          showTime={false}
        />
        <p style={{ marginTop: '20px' }}>
          Selected: {date.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const DateTimePicker24Hour: StoryObj<typeof DateTimePicker> = {
  name: 'DateTimePicker - 24 Hour Format',
  render: () => {
    const [date, setDate] = useState(new Date());
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimePicker - 24 Hour Format</h3>
        <DateTimePicker
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
            console.log('Date selected:', newDate);
          }}
          showTime={true}
          use24Hour={true}
        />
        <p style={{ marginTop: '20px' }}>
          Selected: {date.toLocaleString('en-US', { hour12: false })}
        </p>
      </div>
    );
  },
};

export const DateTimePickerWithConstraints: StoryObj<typeof DateTimePicker> = {
  name: 'DateTimePicker - With Min/Max Dates',
  render: () => {
    const [date, setDate] = useState(new Date());
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimePicker - Current Month Only</h3>
        <DateTimePicker
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
            console.log('Date selected:', newDate);
          }}
          minDate={minDate}
          maxDate={maxDate}
          showTime={true}
        />
        <p style={{ marginTop: '20px' }}>
          Selected: {date.toLocaleString()}
        </p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Min: {minDate.toLocaleDateString()} | Max: {maxDate.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const DateTimePickerDisabled: StoryObj<typeof DateTimePicker> = {
  name: 'DateTimePicker - Disabled',
  render: () => {
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimePicker - Disabled State</h3>
        <DateTimePicker
          value={new Date()}
          disabled={true}
          showTime={true}
        />
      </div>
    );
  },
};

// =============================================================================
// DATETIMERANGEPICKER STORIES
// =============================================================================

export const DateTimeRangePickerDefault: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - Default',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - With Quick Select</h3>
        <DateTimeRangePicker
          value={range}
          onChange={(newRange) => {
            setRange(newRange);
            console.log('Range selected:', newRange);
          }}
          showTime={true}
          showQuickSelect={true}
          use24Hour={false}
        />
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start:</strong> {range.start?.toLocaleString() || 'Not selected'}</p>
          <p><strong>End:</strong> {range.end?.toLocaleString() || 'Not selected'}</p>
        </div>
      </div>
    );
  },
};

export const DateTimeRangePickerNoQuickSelect: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - Without Quick Select',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: null,
      end: null,
    });
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - No Quick Select</h3>
        <DateTimeRangePicker
          value={range}
          onChange={(newRange) => {
            setRange(newRange);
            console.log('Range selected:', newRange);
          }}
          showTime={true}
          showQuickSelect={false}
          use24Hour={false}
        />
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start:</strong> {range.start?.toLocaleString() || 'Not selected'}</p>
          <p><strong>End:</strong> {range.end?.toLocaleString() || 'Not selected'}</p>
        </div>
      </div>
    );
  },
};

export const DateTimeRangePickerDateOnly: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - Date Only',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - Date Only</h3>
        <DateTimeRangePicker
          value={range}
          onChange={(newRange) => {
            setRange(newRange);
            console.log('Range selected:', newRange);
          }}
          showTime={false}
          showQuickSelect={true}
        />
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start:</strong> {range.start?.toLocaleDateString() || 'Not selected'}</p>
          <p><strong>End:</strong> {range.end?.toLocaleDateString() || 'Not selected'}</p>
        </div>
      </div>
    );
  },
};

export const DateTimeRangePicker24Hour: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - 24 Hour Format',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - 24 Hour Format</h3>
        <DateTimeRangePicker
          value={range}
          onChange={(newRange) => {
            setRange(newRange);
            console.log('Range selected:', newRange);
          }}
          showTime={true}
          showQuickSelect={true}
          use24Hour={true}
        />
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start:</strong> {range.start?.toLocaleString('en-US', { hour12: false }) || 'Not selected'}</p>
          <p><strong>End:</strong> {range.end?.toLocaleString('en-US', { hour12: false }) || 'Not selected'}</p>
        </div>
      </div>
    );
  },
};

export const DateTimeRangePickerCustomQuickSelect: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - Custom Quick Select',
  render: () => {
    const [range, setRange] = useState<DateRange>({
      start: null,
      end: null,
    });
    
    const customQuickSelect = [
      {
        label: 'This Week',
        getValue: () => {
          const now = new Date();
          const dayOfWeek = now.getDay();
          const start = new Date(now);
          start.setDate(now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
          start.setHours(0, 0, 0, 0);
          
          const end = new Date(start);
          end.setDate(start.getDate() + 6);
          end.setHours(23, 59, 59, 999);
          
          return { start, end };
        },
      },
      {
        label: 'This Month',
        getValue: () => {
          const now = new Date();
          const start = new Date(now.getFullYear(), now.getMonth(), 1);
          const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
          return { start, end };
        },
      },
      {
        label: 'Last 90 Days',
        getValue: () => {
          const end = new Date();
          end.setHours(23, 59, 59, 999);
          const start = new Date(end);
          start.setDate(end.getDate() - 89);
          start.setHours(0, 0, 0, 0);
          return { start, end };
        },
      },
    ];
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - Custom Quick Select</h3>
        <DateTimeRangePicker
          value={range}
          onChange={(newRange) => {
            setRange(newRange);
            console.log('Range selected:', newRange);
          }}
          showTime={true}
          showQuickSelect={true}
          quickSelectOptions={customQuickSelect}
        />
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start:</strong> {range.start?.toLocaleString() || 'Not selected'}</p>
          <p><strong>End:</strong> {range.end?.toLocaleString() || 'Not selected'}</p>
        </div>
      </div>
    );
  },
};

export const DateTimeRangePickerDisabled: StoryObj<typeof DateTimeRangePicker> = {
  name: 'DateTimeRangePicker - Disabled',
  render: () => {
    const range: DateRange = {
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    
    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>DateTimeRangePicker - Disabled State</h3>
        <DateTimeRangePicker
          value={range}
          disabled={true}
          showTime={true}
          showQuickSelect={true}
        />
      </div>
    );
  },
};

// =============================================================================
// COMPARISON STORY
// =============================================================================

export const AllPickersComparison: StoryObj = {
  name: 'All Pickers - Comparison',
  render: () => {
    const [time, setTime] = useState('12:45 PM');
    const [date, setDate] = useState(new Date());
    const [range, setRange] = useState<DateRange>({
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    return (
      <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <div>
          <h2 style={{ marginBottom: '20px' }}>1. TimePicker</h2>
          <TimePicker value={time} onChange={setTime} />
          <p style={{ marginTop: '10px', fontSize: '14px' }}>Selected: {time}</p>
        </div>
        
        <div>
          <h2 style={{ marginBottom: '20px' }}>2. DateTimePicker</h2>
          <DateTimePicker value={date} onChange={setDate} showTime />
          <p style={{ marginTop: '10px', fontSize: '14px' }}>Selected: {date.toLocaleString()}</p>
        </div>
        
        <div>
          <h2 style={{ marginBottom: '20px' }}>3. DateTimeRangePicker</h2>
          <DateTimeRangePicker value={range} onChange={setRange} showTime showQuickSelect />
          <div style={{ marginTop: '10px', fontSize: '14px' }}>
            <p>Start: {range.start?.toLocaleString() || 'Not selected'}</p>
            <p>End: {range.end?.toLocaleString() || 'Not selected'}</p>
          </div>
        </div>
      </div>
    );
  },
};
