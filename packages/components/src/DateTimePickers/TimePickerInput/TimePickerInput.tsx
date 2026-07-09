/**
 * TimePickerInput Component
 * An input field that opens TimePicker in a popover overlay
 */

import React, { useState } from 'react';
import { TimePickerInputProps } from './TimePickerInput.types';
import { InputField } from '../../InputField';
import { Icon } from '../../Icon';
import { Popover } from '../../Popover';
import { TimePicker } from '../TimePicker/TimePicker';

export const TimePickerInput: React.FC<TimePickerInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Select time',
  required = false,
  disabled = false,
  error = false,
  helperText,
  size = 'default',
  className,
  use24Hour = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeChange = (newTime: string) => {
    onChange?.(newTime);
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
            value={value || ''}
            onChange={() => {}}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            error={error}
            helperText={helperText}
            size={size}
            fullWidth={true}
            trailingIcon={<Icon name="Schedule" size="small" />}
            readOnly
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          />
        </div>
      }
      className={className}
    >
      <TimePicker
        value={value}
        onChange={handleTimeChange}
        use24Hour={use24Hour}
      />
    </Popover>
  );
};
