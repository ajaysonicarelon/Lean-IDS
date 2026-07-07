/**
 * DateTimeRangePicker Component Types
 */

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface QuickSelectOption {
  label: string;
  getValue: () => DateRange;
}

export interface DateTimeRangePickerProps {
  /** Selected date range */
  value?: DateRange;
  /** Change handler - receives DateRange object */
  onChange?: (range: DateRange) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Use 24-hour format for time */
  use24Hour?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Helper text */
  helperText?: string;
  /** Custom className */
  className?: string;
  /** Show time selectors */
  showTime?: boolean;
  /** Required field */
  required?: boolean;
  /** Quick select options */
  quickSelectOptions?: QuickSelectOption[];
  /** Show quick select panel */
  showQuickSelect?: boolean;
}
