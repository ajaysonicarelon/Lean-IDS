/**
 * Button component types
 */

import { ButtonHTMLAttributes, ReactNode, ElementType, CSSProperties, MouseEvent, FocusEvent } from 'react';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonType = 'default' | 'safe' | 'warning' | 'alert';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Button label text
   */
  children: ReactNode;
  
  /**
   * Polymorphic prop - render as different element
   * @default 'button'
   */
  as?: ElementType;
  
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
   * Loading state - shows spinner and disables interaction
   */
  isLoading?: boolean;
  
  /**
   * Invalid/error state - shows error styling
   */
  isInvalid?: boolean;
  
  /**
   * Empty state message (for specialized use cases)
   */
  isEmpty?: boolean;
  
  /**
   * Leading icon element
   */
  leadingIcon?: ReactNode;
  
  /**
   * Trailing icon element
   */
  trailingIcon?: ReactNode;
  
  /**
   * Custom loading indicator (replaces default spinner)
   */
  loadingIndicator?: ReactNode;
  
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
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Mouse enter handler
   */
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Mouse leave handler
   */
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  
  /**
   * Custom class name for root element
   */
  className?: string;
  
  /**
   * Custom inline styles for root element
   */
  style?: CSSProperties;
  
  /**
   * Custom class name for icon wrapper
   */
  iconClassName?: string;
  
  /**
   * Custom class name for label wrapper
   */
  labelClassName?: string;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * ARIA label for accessibility (required for icon-only buttons)
   */
  'aria-label'?: string;
  
  /**
   * ARIA labelledby for accessibility
   */
  'aria-labelledby'?: string;
  
  /**
   * ARIA describedby for accessibility
   */
  'aria-describedby'?: string;
}
