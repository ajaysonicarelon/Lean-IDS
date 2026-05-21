/**
 * Select component types
 */

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Field label */
  label: string;
  /** Placeholder text */
  placeholder?: string;
  /** Array of options */
  options: SelectOption[];
  /** Selected value(s) */
  value?: string | string[];
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  /** Enable multiple selection */
  multiple?: boolean;
  /** Enable search/filter */
  searchable?: boolean;
  /** Show leading search icon */
  showLeadingIcon?: boolean;
  /** Show trailing dropdown icon */
  showTrailingIcon?: boolean;
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
}
