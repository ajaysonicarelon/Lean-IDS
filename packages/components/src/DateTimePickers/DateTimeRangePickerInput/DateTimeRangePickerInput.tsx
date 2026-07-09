/**
 * DateTimeRangePickerInput Component
 * An input field that opens DateTimeRangePicker in a popover overlay
 */

import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateTimeRangePickerInputProps } from './DateTimeRangePickerInput.types';
import { InputField } from '../../InputField';
import { Icon } from '../../Icon';
import { Popover } from '../../Popover';
import { DateTimeRangePicker } from '../DateTimeRangePicker/DateTimeRangePicker';

export const DateTimeRangePickerInput: React.FC<DateTimeRangePickerInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Select date range',
  required = false,
  disabled = false,
  error = false,
  helperText,
  size = 'default',
  className,
  dateFormat = 'MMM dd, yyyy hh:mm a',
  showQuickSelect = false,
  quickSelectOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayValue = value?.start && value?.end
    ? `${format(value.start, dateFormat)} - ${format(value.end, dateFormat)}`
    : '';

  const handleRangeChange = (newRange: { start: Date | null; end: Date | null }) => {
    onChange?.(newRange);
    if (newRange.start && newRange.end) {
      setIsOpen(false);
    }
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <div onClick={handleInputClick}>
          <InputField
            label={label}
            value={displayValue}
            onChange={() => {}}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            error={error}
            helperText={helperText}
            size={size}
            fullWidth={true}
            trailingIcon={<Icon name="DateRange" size="small" />}
            readOnly
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          />
        </div>
      }
      className={className}
    >
      <DateTimeRangePicker
        value={value}
        onChange={handleRangeChange}
        showQuickSelect={showQuickSelect}
        quickSelectOptions={quickSelectOptions}
      />
    </Popover>
  );
};
