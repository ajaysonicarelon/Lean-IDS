/**
 * TimePicker Component
 * 
 * A time selection component with hours, minutes, and AM/PM dropdowns.
 * Uses the existing Select component from Lean IDS.
 * Based on Figma design: node-id=6463-2010
 */

import React, { useState, useMemo } from 'react';
import { parse, isValid } from 'date-fns';
import { Select } from '../../Select';
import { Button } from '../../Button';
import { TimePickerProps, TimeValue } from './TimePicker.types';
import {
  TimePickerContainer,
  TimeDisplay,
  TimeLabel,
  SelectedTime,
  TimeContent,
  TimeFieldsRow,
  TimeFieldWrapper,
  FieldLabel,
  ActionsRow,
} from './TimePicker.styles';

const generateHours = (use24Hour: boolean) => {
  const hours = use24Hour ? 24 : 12;
  return Array.from({ length: hours }, (_, i) => {
    const value = use24Hour ? i : i + 1;
    return {
      value: value.toString(),
      label: value.toString().padStart(2, '0'),
    };
  });
};

const generateMinutes = () => {
  return Array.from({ length: 60 }, (_, i) => ({
    value: i.toString(),
    label: i.toString().padStart(2, '0'),
  }));
};

const periodOptions = [
  { value: 'AM', label: 'AM' },
  { value: 'PM', label: 'PM' },
];

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  use24Hour = false,
  disabled = false,
  className,
}) => {
  const [timeValue, setTimeValue] = useState<TimeValue>(() => {
    if (value) {
      try {
        const parsedDate = parse(value, use24Hour ? 'HH:mm' : 'hh:mm a', new Date());
        if (isValid(parsedDate)) {
          const hours = parsedDate.getHours();
          const minutes = parsedDate.getMinutes();
          
          if (use24Hour) {
            return { hours, minutes };
          } else {
            const period = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;
            return { hours: displayHours, minutes, period };
          }
        }
      } catch (e) {
        console.warn('Invalid time value:', value);
      }
    }
    
    return use24Hour
      ? { hours: 12, minutes: 0 }
      : { hours: 12, minutes: 0, period: 'PM' };
  });

  const hourOptions = useMemo(() => generateHours(use24Hour), [use24Hour]);
  const minuteOptions = useMemo(() => generateMinutes(), []);

  const formattedTime = useMemo(() => {
    if (use24Hour) {
      return `${timeValue.hours.toString().padStart(2, '0')}:${timeValue.minutes.toString().padStart(2, '0')}`;
    } else {
      return `${timeValue.hours.toString().padStart(2, '0')}:${timeValue.minutes.toString().padStart(2, '0')} ${timeValue.period}`;
    }
  }, [timeValue, use24Hour]);

  const handleHourChange = (value: string | string[]) => {
    const hours = parseInt(value as string, 10);
    setTimeValue(prev => ({ ...prev, hours }));
  };

  const handleMinuteChange = (value: string | string[]) => {
    const minutes = parseInt(value as string, 10);
    setTimeValue(prev => ({ ...prev, minutes }));
  };

  const handlePeriodChange = (value: string | string[]) => {
    const period = value as 'AM' | 'PM';
    setTimeValue(prev => ({ ...prev, period }));
  };

  const handleApply = () => {
    if (onChange) {
      onChange(formattedTime);
    }
  };

  const handleReset = () => {
    const defaultValue = use24Hour
      ? { hours: 12, minutes: 0 }
      : { hours: 12, minutes: 0, period: 'PM' as const };
    setTimeValue(defaultValue);
  };

  return (
    <TimePickerContainer className={className}>
      <TimeDisplay>
        <TimeLabel>Selected:</TimeLabel>
        <SelectedTime>{formattedTime}</SelectedTime>
      </TimeDisplay>

      <TimeContent>
        <TimeFieldsRow>
          <TimeFieldWrapper>
            <FieldLabel>Hours</FieldLabel>
            <Select
              label=""
              options={hourOptions}
              value={timeValue.hours.toString()}
              onChange={handleHourChange}
              disabled={disabled}
              size="default"
              showLeadingIcon={false}
              showTrailingIcon
            />
          </TimeFieldWrapper>

          <TimeFieldWrapper>
            <FieldLabel>Minutes</FieldLabel>
            <Select
              label=""
              options={minuteOptions}
              value={timeValue.minutes.toString()}
              onChange={handleMinuteChange}
              disabled={disabled}
              size="default"
              showLeadingIcon={false}
              showTrailingIcon
            />
          </TimeFieldWrapper>

          {!use24Hour && (
            <TimeFieldWrapper>
              <FieldLabel>AM/PM</FieldLabel>
              <Select
                label=""
                options={periodOptions}
                value={timeValue.period || 'AM'}
                onChange={handlePeriodChange}
                disabled={disabled}
                size="default"
                showLeadingIcon={false}
                showTrailingIcon
              />
            </TimeFieldWrapper>
          )}
        </TimeFieldsRow>

        <ActionsRow>
          <Button
            variant="tertiary"
            size="medium"
            onClick={handleReset}
            disabled={disabled}
          >
            Reset
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={handleApply}
            disabled={disabled}
          >
            Apply
          </Button>
        </ActionsRow>
      </TimeContent>
    </TimePickerContainer>
  );
};

TimePicker.displayName = 'TimePicker';
