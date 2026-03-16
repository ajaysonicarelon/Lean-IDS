/**
 * RadioButton component types
 */

import { InputHTMLAttributes } from 'react';

export type RadioButtonSize = 'default' | 'large';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Radio button label text
   */
  label?: string;
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: RadioButtonSize;
  
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether to show trailing icon (expand_more icon)
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
   * Input name attribute (required for radio groups)
   */
  name?: string;
  
  /**
   * Input value attribute
   */
  value?: string;
}
