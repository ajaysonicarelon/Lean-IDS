/**
 * DateTimePickerInput component types
 */

export interface DateTimePickerInputProps {
  /** Field label */
  label: string;
  /** Selected date and time value */
  value?: Date;
  /** Change handler */
  onChange?: (date: Date | undefined) => void;
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
  /** Date format for display */
  dateFormat?: string;
}
