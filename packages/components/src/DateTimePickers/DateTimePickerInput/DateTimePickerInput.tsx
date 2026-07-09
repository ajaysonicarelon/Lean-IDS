/**
 * DateTimePickerInput Component
 * An input field that opens DateTimePicker in a popover overlay
 */

import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateTimePickerInputProps } from './DateTimePickerInput.types';
import { InputField } from '../../InputField';
import { Icon } from '../../Icon';
import { Popover } from '../../Popover';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';

export const DateTimePickerInput: React.FC<DateTimePickerInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Select date and time',
  required = false,
  disabled = false,
  error = false,
  helperText,
  size = 'default',
  className,
  dateFormat = 'MMM dd, yyyy hh:mm a',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayValue = value ? format(value, dateFormat) : '';

  const handleDateTimeChange = (newDate: Date | undefined) => {
    onChange?.(newDate);
    setIsOpen(false);
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
            trailingIcon={<Icon name="CalendarToday" size="small" />}
            readOnly
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          />
        </div>
      }
      className={className}
    >
      <DateTimePicker
        value={value}
        onChange={handleDateTimeChange}
      />
    </Popover>
  );
};
