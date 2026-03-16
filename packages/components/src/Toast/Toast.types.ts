/**
 * Toast component types
 */

import { ReactNode } from 'react';

export type ToastType = 'warning' | 'success' | 'error' | 'info';

export type ToastStyle = 'default' | 'subdued';

export interface ToastProps {
  /**
   * Toast type (determines color scheme)
   * @default 'warning'
   */
  type?: ToastType;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  style?: ToastStyle;
  
  /**
   * Message text to display
   */
  text: string;
  
  /**
   * Whether to show the leading icon
   * @default true
   */
  showLeadIcon?: boolean;
  
  /**
   * Whether to show the trailing (close) icon
   * @default true
   */
  showTrailIcon?: boolean;
  
  /**
   * Whether to show the action button
   * @default true
   */
  action?: boolean;
  
  /**
   * Custom leading icon (overrides default)
   */
  leadIcon?: ReactNode;
  
  /**
   * Custom trailing icon (overrides default)
   */
  trailIcon?: ReactNode;
  
  /**
   * Action button text
   * @default 'Button'
   */
  buttonText?: string;
  
  /**
   * Callback when action button is clicked
   */
  onActionClick?: () => void;
  
  /**
   * Callback when close icon is clicked
   */
  onClose?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}
