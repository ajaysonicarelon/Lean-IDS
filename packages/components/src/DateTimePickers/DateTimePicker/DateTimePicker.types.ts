/**
 * DateTimePicker Component Types
 */

export interface DateTimePickerProps {
  /** Selected date-time value as Date object or ISO string */
  value?: Date | string;
  /** Change handler - receives Date object */
  onChange?: (date: Date) => void;
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
  /** Show time selector */
  showTime?: boolean;
  /** Required field */
  required?: boolean;
  /** Label for the picker */
  label?: string;
}
