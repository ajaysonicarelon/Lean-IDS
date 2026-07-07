/**
 * DateTimePicker Component
 * 
 * A date and time selection component with calendar and time dropdowns.
 * Supports single date-time selection.
 * Based on Figma design: node-id=6463-2011
 */

import React, { useState, useMemo } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
  isWeekend,
  isBefore,
  isAfter,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Select } from '../../Select';
import { Button } from '../../Button';
import { CalendarDay } from '../shared';
import { DayOfWeek } from '../shared/CalendarDay.types';
import { DateTimePickerProps } from './DateTimePicker.types';
import {
  DateTimePickerContainer,
  DateTimeContent,
  DateTimeDisplay,
  DisplayLabel,
  SelectedDateTime,
  CalendarSection,
  TimeFieldsSection,
  TimeFieldWrapper,
  FieldLabel,
  CalendarHeader,
  MonthYearSelector,
  NavButton,
  CalendarGrid,
  WeekdayHeader,
  WeekdayLabel,
  DaysGrid,
  ActionsRow,
} from './DateTimePicker.styles';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

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

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  use24Hour = false,
  disabled = false,
  className,
  showTime = true,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    if (value) {
      return value instanceof Date ? value : new Date(value);
    }
    return new Date();
  });

  const [currentMonth, setCurrentMonth] = useState<Date>(selectedDate);

  const hourOptions = useMemo(() => generateHours(use24Hour), [use24Hour]);
  const minuteOptions = useMemo(() => generateMinutes(), []);

  // Generate month options
  const monthOptions = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i.toString(),
      label: format(new Date(2000, i, 1), 'MMM'),
    }));
  }, []);

  // Generate year options (current year ± 10 years)
  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;
    return Array.from({ length: endYear - startYear + 1 }, (_, i) => ({
      value: (startYear + i).toString(),
      label: (startYear + i).toString(),
    }));
  }, []);

  const hours = getHours(selectedDate);
  const minutes = getMinutes(selectedDate);
  const displayHours = use24Hour ? hours : (hours % 12 || 12);
  const period = hours >= 12 ? 'PM' : 'AM';

  const formattedDateTime = useMemo(() => {
    if (showTime) {
      return format(selectedDate, use24Hour ? 'MMMM dd, yyyy HH:mm' : 'MMMM dd, yyyy hh:mm a');
    }
    return format(selectedDate, 'MMMM dd, yyyy');
  }, [selectedDate, showTime, use24Hour]);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  }, [currentMonth]);

  const getDayType = (day: Date): DayOfWeek => {
    if (isToday(day)) return 'Today';
    if (!isSameMonth(day, currentMonth)) return 'OtherMonth';
    if (isWeekend(day)) return 'Weekend';
    return 'Weekday';
  };

  const isDateDisabled = (day: Date): boolean => {
    if (minDate && isBefore(day, minDate)) return true;
    if (maxDate && isAfter(day, maxDate)) return true;
    return false;
  };

  const handleDateClick = (day: Date) => {
    if (!isDateDisabled(day)) {
      const newDate = setHours(setMinutes(day, minutes), hours);
      setSelectedDate(newDate);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleMonthChange = (value: string | string[]) => {
    const monthIndex = parseInt(value as string, 10);
    const newDate = new Date(currentMonth.getFullYear(), monthIndex, 1);
    setCurrentMonth(newDate);
  };

  const handleYearChange = (value: string | string[]) => {
    const year = parseInt(value as string, 10);
    const newDate = new Date(year, currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
  };

  const handleHourChange = (value: string | string[]) => {
    let newHours = parseInt(value as string, 10);
    if (!use24Hour && period === 'PM' && newHours !== 12) {
      newHours += 12;
    } else if (!use24Hour && period === 'AM' && newHours === 12) {
      newHours = 0;
    }
    setSelectedDate(setHours(selectedDate, newHours));
  };

  const handleMinuteChange = (value: string | string[]) => {
    const newMinutes = parseInt(value as string, 10);
    setSelectedDate(setMinutes(selectedDate, newMinutes));
  };

  const handlePeriodChange = (value: string | string[]) => {
    const newPeriod = value as 'AM' | 'PM';
    let newHours = hours;
    
    if (newPeriod === 'PM' && hours < 12) {
      newHours = hours + 12;
    } else if (newPeriod === 'AM' && hours >= 12) {
      newHours = hours - 12;
    }
    
    setSelectedDate(setHours(selectedDate, newHours));
  };

  const handleApply = () => {
    if (onChange) {
      onChange(selectedDate);
    }
  };

  const handleReset = () => {
    const now = new Date();
    setSelectedDate(now);
    setCurrentMonth(now);
  };

  return (
    <DateTimePickerContainer className={className}>
      <DateTimeContent>
        <DateTimeDisplay>
          <DisplayLabel>Selected:</DisplayLabel>
          <SelectedDateTime>{formattedDateTime}</SelectedDateTime>
        </DateTimeDisplay>

        <CalendarSection>
          {showTime && (
            <TimeFieldsSection>
              <TimeFieldWrapper>
                <FieldLabel>Hours</FieldLabel>
                <Select
                  label=""
                  options={hourOptions}
                  value={displayHours.toString()}
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
                  value={minutes.toString()}
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
                    value={period}
                    onChange={handlePeriodChange}
                    disabled={disabled}
                    size="default"
                    showLeadingIcon={false}
                    showTrailingIcon
                  />
                </TimeFieldWrapper>
              )}
            </TimeFieldsSection>
          )}

          <CalendarHeader>
            <NavButton onClick={handlePrevMonth} disabled={disabled} aria-label="Previous month">
              <ChevronLeft />
            </NavButton>

            <MonthYearSelector>
              <Select
                label=""
                options={monthOptions}
                value={currentMonth.getMonth().toString()}
                onChange={handleMonthChange}
                disabled={disabled}
                size="default"
                showLeadingIcon={false}
                showTrailingIcon
              />
              <Select
                label=""
                options={yearOptions}
                value={currentMonth.getFullYear().toString()}
                onChange={handleYearChange}
                disabled={disabled}
                size="default"
                showLeadingIcon={false}
                showTrailingIcon
              />
            </MonthYearSelector>

            <NavButton onClick={handleNextMonth} disabled={disabled} aria-label="Next month">
              <ChevronRight />
            </NavButton>
          </CalendarHeader>

          <CalendarGrid>
            <WeekdayHeader>
              {WEEKDAYS.map((day) => (
                <WeekdayLabel key={day}>{day}</WeekdayLabel>
              ))}
            </WeekdayHeader>

            <DaysGrid>
              {calendarDays.map((day, index) => (
                <CalendarDay
                  key={index}
                  date={day.getDate()}
                  fullDate={day}
                  dayOfWeek={getDayType(day)}
                  state={isSameDay(day, selectedDate) ? 'Selected' : 'Default'}
                  onClick={handleDateClick}
                  disabled={isDateDisabled(day) || disabled}
                />
              ))}
            </DaysGrid>
          </CalendarGrid>

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
        </CalendarSection>
      </DateTimeContent>
    </DateTimePickerContainer>
  );
};

DateTimePicker.displayName = 'DateTimePicker';
