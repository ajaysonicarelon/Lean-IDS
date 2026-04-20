/**
 * Button component types
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'link';

export type ButtonType = 'default' | 'safe' | 'warning' | 'alert';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Button label text
   */
  children: ReactNode;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Visual variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Button type (semantic meaning)
   * @default 'default'
   */
  buttonType?: ButtonType;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Leading icon element
   */
  leadingIcon?: ReactNode;
  
  /**
   * Trailing icon element
   */
  trailingIcon?: ReactNode;
  
  /**
   * Whether to show label text
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
}
