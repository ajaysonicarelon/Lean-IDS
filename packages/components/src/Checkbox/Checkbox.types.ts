/**
 * Checkbox component types
 */

import { InputHTMLAttributes } from 'react';

export type CheckboxSize = 'default' | 'large';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Checkbox label text
   */
  label?: string;
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: CheckboxSize;
  
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether to show trailing icon (info icon)
   * @default false
   */
  showTrailingIcon?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input value attribute
   */
  value?: string;
}
