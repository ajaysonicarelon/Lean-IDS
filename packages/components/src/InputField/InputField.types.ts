/**
 * InputField component types
 * Based on Figma design system specifications
 */

import { InputHTMLAttributes, ElementType, CSSProperties } from 'react';
import { HelpingTextState } from '../HelpingText/HelpingText.types';

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

export type InputSize = 'xsmall' | 'small' | 'default' | 'large';

export type InputState = 'active' | 'focused' | 'error' | 'disabled' | 'filled' | 'non-editable';

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Polymorphic prop - render as different element
   * @default 'input'
   */
  as?: ElementType;
  /**
   * Input field label
   */
  label?: string;
  
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  
  /**
   * State of the helper text (controls icon and color)
   * @default 'default'
   * Options: 'default' | 'info' | 'warning' | 'error'
   */
  helperTextState?: HelpingTextState;
  
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
   * Whether the field is read-only (non-editable)
   */
  readOnly?: boolean;
  
  /**
   * Whether the field has an error
   */
  error?: boolean;
  
  /**
   * Loading state - shows loading indicator
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Empty state - shows empty state message
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Empty state message
   * @default 'No data available'
   */
  emptyMessage?: string;
  
  /**
   * Invalid state (alias for error)
   * @default false
   */
  isInvalid?: boolean;
  
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
   * Custom class name for root container
   */
  className?: string;
  
  /**
   * Custom inline styles for root container
   */
  style?: CSSProperties;
  
  /**
   * Custom class name for label
   */
  labelClassName?: string;
  
  /**
   * Custom class name for input wrapper
   */
  wrapperClassName?: string;
  
  /**
   * Custom class name for input element
   */
  inputClassName?: string;
  
  /**
   * Custom class name for helper text
   */
  helperTextClassName?: string;
  
  /**
   * Callback fired after focus animation completes
   */
  onAfterFocus?: () => void;
  
  /**
   * Callback fired after blur animation completes
   */
  onAfterBlur?: () => void;
  
  /**
   * Callback fired when input value is cleared
   */
  onClear?: () => void;
  
  /**
   * Callback fired on Enter key press
   */
  onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /**
   * Callback fired on Escape key press
   */
  onEscape?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
