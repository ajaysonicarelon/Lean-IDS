/**
 * InputField component types
 * Based on Figma design system specifications
 */

import { InputHTMLAttributes } from 'react';

export type InputType = 
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'time';

export type InputSize = 'small' | 'default' | 'large';

export type InputState = 'default' | 'active' | 'error' | 'disabled';

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input field label
   */
  label?: string;
  
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  
  /**
   * Error message (overrides helperText when present)
   */
  errorMessage?: string;
  
  /**
   * Success message
   */
  successMessage?: string;
  
  /**
   * Input type
   * @default 'text'
   */
  type?: InputType;
  
  /**
   * Input size
   * @default 'default'
   */
  size?: InputSize;
  
  /**
   * Whether the field is required
   */
  required?: boolean;
  
  /**
   * Whether the field is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the field has an error
   */
  error?: boolean;
  
  /**
   * Whether to show the label
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * Whether to show field importance (Required indicator)
   * @default false
   */
  showFieldImportance?: boolean;
  
  /**
   * Field importance variant
   * @default 'mandatory'
   */
  fieldImportanceVariant?: 'mandatory' | 'optional' | 'asterisk';
  
  /**
   * Whether to show inline helping text
   * @default true
   */
  showInlineText?: boolean;
  
  /**
   * Icon to display at the start of the input
   */
  leadingIcon?: React.ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Input value (for controlled component)
   */
  value?: string;
  
  /**
   * Default value (for uncontrolled component)
   */
  defaultValue?: string;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Full width input
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input id attribute
   */
  id?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA described by for accessibility
   */
  'aria-describedby'?: string;
  
  /**
   * Custom class name
   */
  className?: string;
}
