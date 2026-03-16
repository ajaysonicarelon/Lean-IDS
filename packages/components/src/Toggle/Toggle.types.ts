/**
 * Toggle component types
 */

import { InputHTMLAttributes } from 'react';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Toggle label text
   */
  label?: string;
  
  /**
   * Whether the toggle is checked (on)
   */
  checked?: boolean;
  
  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean;
  
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
