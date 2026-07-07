/**
 * DateTimeRangePicker Component
 * 
 * A date and time range selection component with dual calendars and time dropdowns.
 * Supports range selection with quick select options.
 * Based on Figma design: node-id=6463-2009
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
  isWithinInterval,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
  startOfDay,
  endOfDay,
  subDays,
  startOfQuarter,
  endOfQuarter,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Select } from '../../Select';
import { Button } from '../../Button';
import { CalendarDay } from '../shared';
import { DayOfWeek, DayRange } from '../shared/CalendarDay.types';
import { DateTimeRangePickerProps, DateRange, QuickSelectOption } from './DateTimeRangePicker.types';
import {
  RangePickerContainer,
  RangePickerContent,
  CalendarsSection,
  RangeDisplayRow,
  RangeColumn,
  RangeLabel,
  RangeValue,
  CalendarsRow,
  CalendarColumn,
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
  QuickSelectPanel,
  QuickSelectList,
  QuickSelectItem,
  ActionsRow,
} from './DateTimeRangePicker.styles';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const DEFAULT_QUICK_SELECT: QuickSelectOption[] = [
  {
    label: 'Today',
    getValue: () => ({
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
    }),
  },
  {
    label: 'Yesterday',
    getValue: () => ({
      start: startOfDay(subDays(new Date(), 1)),
      end: endOfDay(subDays(new Date(), 1)),
    }),
  },
  {
    label: 'Last 7 Days',
    getValue: () => ({
      start: startOfDay(subDays(new Date(), 6)),
      end: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 30 Days',
    getValue: () => ({
      start: startOfDay(subDays(new Date(), 29)),
      end: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last quarter',
    getValue: () => ({
      start: startOfQuarter(subDays(new Date(), 90)),
      end: endOfQuarter(subDays(new Date(), 90)),
    }),
  },
];

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

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  use24Hour = false,
  disabled = false,
  className,
  showTime = true,
  quickSelectOptions = DEFAULT_QUICK_SELECT,
  showQuickSelect = true,
}) => {
  const [selectedRange, setSelectedRange] = useState<DateRange>(() => {
    if (value?.start && value?.end) {
      return {
        start: value.start instanceof Date ? value.start : new Date(value.start),
        end: value.end instanceof Date ? value.end : new Date(value.end),
      };
    }
    return { start: null, end: null };
  });

  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [leftMonth, setLeftMonth] = useState<Date>(() => selectedRange.start || new Date());
  const [rightMonth, setRightMonth] = useState<Date>(() => addMonths(leftMonth, 1));

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

  const formatDateTime = (date: Date | null) => {
    if (!date) return '--';
    if (showTime) {
      return format(date, use24Hour ? 'MMM dd, yyyy HH:mm' : 'MMM dd, yyyy hh:mm a');
    }
    return format(date, 'MMM dd, yyyy');
  };

  const generateCalendarDays = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const leftCalendarDays = useMemo(() => generateCalendarDays(leftMonth), [leftMonth]);
  const rightCalendarDays = useMemo(() => generateCalendarDays(rightMonth), [rightMonth]);

  const getDayType = (day: Date, month: Date): DayOfWeek => {
    if (isToday(day)) return 'Today';
    if (!isSameMonth(day, month)) return 'OtherMonth';
    if (isWeekend(day)) return 'Weekend';
    return 'Weekday';
  };

  const getDayRange = (day: Date): DayRange => {
    if (!selectedRange.start) return 'none';
    
    if (isSameDay(day, selectedRange.start)) return 'Start';
    
    if (selectedRange.end) {
      if (isSameDay(day, selectedRange.end)) return 'End';
      
      if (isWithinInterval(day, { start: selectedRange.start, end: selectedRange.end })) {
        return 'Middle';
      }
    }
    
    return 'none';
  };

  const isDateDisabled = (day: Date): boolean => {
    if (minDate && isBefore(day, minDate)) return true;
    if (maxDate && isAfter(day, maxDate)) return true;
    return false;
  };

  const handleDateClick = (day: Date) => {
    if (isDateDisabled(day)) return;

    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      // Start new selection
      setSelectedRange({ start: day, end: null });
    } else {
      // Complete the range
      if (isBefore(day, selectedRange.start)) {
        setSelectedRange({ start: day, end: selectedRange.start });
      } else {
        setSelectedRange({ start: selectedRange.start, end: day });
      }
    }
  };

  const handleDateHover = (day: Date) => {
    setHoverDate(day);
  };

  const handleDateLeave = () => {
    setHoverDate(null);
  };

  const handleLeftPrevMonth = () => {
    setLeftMonth(subMonths(leftMonth, 1));
    setRightMonth(subMonths(rightMonth, 1));
  };

  const handleLeftNextMonth = () => {
    setLeftMonth(addMonths(leftMonth, 1));
    setRightMonth(addMonths(rightMonth, 1));
  };

  const handleLeftMonthChange = (value: string | string[]) => {
    const monthIndex = parseInt(value as string, 10);
    const newDate = new Date(leftMonth.getFullYear(), monthIndex, 1);
    setLeftMonth(newDate);
    setRightMonth(addMonths(newDate, 1));
  };

  const handleLeftYearChange = (value: string | string[]) => {
    const year = parseInt(value as string, 10);
    const newDate = new Date(year, leftMonth.getMonth(), 1);
    setLeftMonth(newDate);
    setRightMonth(addMonths(newDate, 1));
  };

  const handleRightMonthChange = (value: string | string[]) => {
    const monthIndex = parseInt(value as string, 10);
    const newDate = new Date(rightMonth.getFullYear(), monthIndex, 1);
    setRightMonth(newDate);
    setLeftMonth(subMonths(newDate, 1));
  };

  const handleRightYearChange = (value: string | string[]) => {
    const year = parseInt(value as string, 10);
    const newDate = new Date(year, rightMonth.getMonth(), 1);
    setRightMonth(newDate);
    setLeftMonth(subMonths(newDate, 1));
  };

  const handleTimeChange = (type: 'start' | 'end', field: 'hours' | 'minutes' | 'period', value: string) => {
    const targetDate = type === 'start' ? selectedRange.start : selectedRange.end;
    if (!targetDate) return;

    let newDate = targetDate;

    if (field === 'hours') {
      let newHours = parseInt(value, 10);
      if (!use24Hour) {
        const currentHours = getHours(targetDate);
        const period = currentHours >= 12 ? 'PM' : 'AM';
        if (period === 'PM' && newHours !== 12) {
          newHours += 12;
        } else if (period === 'AM' && newHours === 12) {
          newHours = 0;
        }
      }
      newDate = setHours(targetDate, newHours);
    } else if (field === 'minutes') {
      newDate = setMinutes(targetDate, parseInt(value, 10));
    } else if (field === 'period') {
      const currentHours = getHours(targetDate);
      let newHours = currentHours;
      if (value === 'PM' && currentHours < 12) {
        newHours = currentHours + 12;
      } else if (value === 'AM' && currentHours >= 12) {
        newHours = currentHours - 12;
      }
      newDate = setHours(targetDate, newHours);
    }

    setSelectedRange(prev => ({
      ...prev,
      [type]: newDate,
    }));
  };

  const handleQuickSelect = (option: QuickSelectOption) => {
    const range = option.getValue();
    setSelectedRange(range);
    if (range.start) {
      setLeftMonth(range.start);
      setRightMonth(addMonths(range.start, 1));
    }
  };

  const handleApply = () => {
    if (onChange && selectedRange.start && selectedRange.end) {
      onChange(selectedRange);
    }
  };

  const handleReset = () => {
    setSelectedRange({ start: null, end: null });
    const now = new Date();
    setLeftMonth(now);
    setRightMonth(addMonths(now, 1));
  };

  const getTimeValues = (date: Date | null) => {
    if (!date) return { hours: 12, minutes: 0, period: 'AM' };
    const hours = getHours(date);
    const minutes = getMinutes(date);
    const displayHours = use24Hour ? hours : (hours % 12 || 12);
    const period = hours >= 12 ? 'PM' : 'AM';
    return { hours: displayHours, minutes, period };
  };

  const startTime = getTimeValues(selectedRange.start);
  const endTime = getTimeValues(selectedRange.end);

  return (
    <RangePickerContainer className={className} $showQuickSelect={showQuickSelect}>
      <RangePickerContent>
        <CalendarsSection>
          <RangeDisplayRow>
            <RangeColumn>
              <RangeLabel>From</RangeLabel>
              <RangeValue>{formatDateTime(selectedRange.start)}</RangeValue>
            </RangeColumn>
            <RangeColumn>
              <RangeLabel>To</RangeLabel>
              <RangeValue>{formatDateTime(selectedRange.end)}</RangeValue>
            </RangeColumn>
          </RangeDisplayRow>

          <CalendarsRow>
            {/* Left Calendar */}
            <CalendarColumn>
              {showTime && (
                <TimeFieldsSection>
                  <TimeFieldWrapper>
                    <FieldLabel>Hours</FieldLabel>
                    <Select
                      label=""
                      options={hourOptions}
                      value={startTime.hours.toString()}
                      onChange={(v) => handleTimeChange('start', 'hours', v as string)}
                      disabled={disabled || !selectedRange.start}
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
                      value={startTime.minutes.toString()}
                      onChange={(v) => handleTimeChange('start', 'minutes', v as string)}
                      disabled={disabled || !selectedRange.start}
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
                        value={startTime.period}
                        onChange={(v) => handleTimeChange('start', 'period', v as string)}
                        disabled={disabled || !selectedRange.start}
                        size="default"
                        showLeadingIcon={false}
                        showTrailingIcon
                      />
                    </TimeFieldWrapper>
                  )}
                </TimeFieldsSection>
              )}

              <CalendarHeader>
                <NavButton onClick={handleLeftPrevMonth} disabled={disabled} aria-label="Previous month">
                  <ChevronLeft />
                </NavButton>
                <MonthYearSelector>
                  <Select
                    label=""
                    options={monthOptions}
                    value={leftMonth.getMonth().toString()}
                    onChange={handleLeftMonthChange}
                    disabled={disabled}
                    size="default"
                    showLeadingIcon={false}
                    showTrailingIcon
                  />
                  <Select
                    label=""
                    options={yearOptions}
                    value={leftMonth.getFullYear().toString()}
                    onChange={handleLeftYearChange}
                    disabled={disabled}
                    size="default"
                    showLeadingIcon={false}
                    showTrailingIcon
                  />
                </MonthYearSelector>
                <NavButton onClick={handleLeftNextMonth} disabled={disabled} aria-label="Next month">
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
                  {leftCalendarDays.map((day, index) => (
                    <CalendarDay
                      key={index}
                      date={day.getDate()}
                      fullDate={day}
                      dayOfWeek={getDayType(day, leftMonth)}
                      range={getDayRange(day)}
                      state={
                        selectedRange.start && isSameDay(day, selectedRange.start)
                          ? 'Selected'
                          : selectedRange.end && isSameDay(day, selectedRange.end)
                          ? 'Selected'
                          : getDayRange(day) === 'Middle'
                          ? 'Selected'
                          : 'Default'
                      }
                      onClick={handleDateClick}
                      onMouseEnter={handleDateHover}
                      onMouseLeave={handleDateLeave}
                      disabled={isDateDisabled(day) || disabled}
                    />
                  ))}
                </DaysGrid>
              </CalendarGrid>
            </CalendarColumn>

            {/* Right Calendar */}
            <CalendarColumn>
              {showTime && (
                <TimeFieldsSection>
                  <TimeFieldWrapper>
                    <FieldLabel>Hours</FieldLabel>
                    <Select
                      label=""
                      options={hourOptions}
                      value={endTime.hours.toString()}
                      onChange={(v) => handleTimeChange('end', 'hours', v as string)}
                      disabled={disabled || !selectedRange.end}
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
                      value={endTime.minutes.toString()}
                      onChange={(v) => handleTimeChange('end', 'minutes', v as string)}
                      disabled={disabled || !selectedRange.end}
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
                        value={endTime.period}
                        onChange={(v) => handleTimeChange('end', 'period', v as string)}
                        disabled={disabled || !selectedRange.end}
                        size="default"
                        showLeadingIcon={false}
                        showTrailingIcon
                      />
                    </TimeFieldWrapper>
                  )}
                </TimeFieldsSection>
              )}

              <CalendarHeader>
                <NavButton onClick={handleLeftPrevMonth} disabled={disabled} aria-label="Previous month">
                  <ChevronLeft />
                </NavButton>
                <MonthYearSelector>
                  <Select
                    label=""
                    options={monthOptions}
                    value={rightMonth.getMonth().toString()}
                    onChange={handleRightMonthChange}
                    disabled={disabled}
                    size="default"
                    showLeadingIcon={false}
                    showTrailingIcon
                  />
                  <Select
                    label=""
                    options={yearOptions}
                    value={rightMonth.getFullYear().toString()}
                    onChange={handleRightYearChange}
                    disabled={disabled}
                    size="default"
                    showLeadingIcon={false}
                    showTrailingIcon
                  />
                </MonthYearSelector>
                <NavButton onClick={handleLeftNextMonth} disabled={disabled} aria-label="Next month">
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
                  {rightCalendarDays.map((day, index) => (
                    <CalendarDay
                      key={index}
                      date={day.getDate()}
                      fullDate={day}
                      dayOfWeek={getDayType(day, rightMonth)}
                      range={getDayRange(day)}
                      state={
                        selectedRange.start && isSameDay(day, selectedRange.start)
                          ? 'Selected'
                          : selectedRange.end && isSameDay(day, selectedRange.end)
                          ? 'Selected'
                          : getDayRange(day) === 'Middle'
                          ? 'Selected'
                          : 'Default'
                      }
                      onClick={handleDateClick}
                      onMouseEnter={handleDateHover}
                      onMouseLeave={handleDateLeave}
                      disabled={isDateDisabled(day) || disabled}
                    />
                  ))}
                </DaysGrid>
              </CalendarGrid>
            </CalendarColumn>
          </CalendarsRow>
          
          {!showQuickSelect && (
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
                disabled={disabled || !selectedRange.start || !selectedRange.end}
              >
                Apply
              </Button>
            </ActionsRow>
          )}
        </CalendarsSection>

        {showQuickSelect && (
          <QuickSelectPanel>
            <QuickSelectList>
              {quickSelectOptions.map((option, index) => (
                <QuickSelectItem
                  key={index}
                  onClick={() => handleQuickSelect(option)}
                  disabled={disabled}
                >
                  {option.label}
                </QuickSelectItem>
              ))}
            </QuickSelectList>

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
                disabled={disabled || !selectedRange.start || !selectedRange.end}
              >
                Apply
              </Button>
            </ActionsRow>
          </QuickSelectPanel>
        )}
      </RangePickerContent>
    </RangePickerContainer>
  );
};

DateTimeRangePicker.displayName = 'DateTimeRangePicker';
