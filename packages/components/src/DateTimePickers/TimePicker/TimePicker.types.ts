/**
 * TimePicker Component Types
 */

export interface TimePickerProps {
  /** Selected time value in format "HH:mm" (24-hour) or "hh:mm A" (12-hour) */
  value?: string;
  /** Change handler - receives time in "HH:mm A" format */
  onChange?: (time: string) => void;
  /** Use 24-hour format instead of 12-hour */
  use24Hour?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Helper text */
  helperText?: string;
  /** Custom className */
  className?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Required field */
  required?: boolean;
  /** Label for the time picker */
  label?: string;
}

export interface TimeValue {
  hours: number;
  minutes: number;
  period?: 'AM' | 'PM';
}
