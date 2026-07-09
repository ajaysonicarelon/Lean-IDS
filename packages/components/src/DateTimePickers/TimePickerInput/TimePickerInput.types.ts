/**
 * TimePickerInput component types
 */

export interface TimePickerInputProps {
  /** Field label */
  label: string;
  /** Selected time value in format "HH:mm A" */
  value?: string;
  /** Change handler - receives time in "HH:mm A" format */
  onChange?: (time: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Required field */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Helper text */
  helperText?: string;
  /** Size */
  size?: 'xsmall' | 'small' | 'default' | 'large';
  /** Custom className */
  className?: string;
  /** Use 24-hour format */
  use24Hour?: boolean;
}
