/**
 * DateTimeRangePickerInput component types
 */

import { DateRange, QuickSelectOption } from '../DateTimeRangePicker/DateTimeRangePicker.types';

export interface DateTimeRangePickerInputProps {
  /** Field label */
  label: string;
  /** Selected date range */
  value?: DateRange;
  /** Change handler */
  onChange?: (range: DateRange) => void;
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
  /** Show quick select panel */
  showQuickSelect?: boolean;
  /** Quick select options */
  quickSelectOptions?: QuickSelectOption[];
}
