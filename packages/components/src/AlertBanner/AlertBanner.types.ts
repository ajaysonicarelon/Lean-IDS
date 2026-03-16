/**
 * AlertBanner component types
 */

import { ReactNode } from 'react';

export type AlertBannerType = 'warning' | 'success' | 'error' | 'info';

export type AlertBannerStyle = 'default' | 'subdued' | 'accentBorder';

export interface AlertBannerProps {
  /**
   * Alert type (determines color scheme)
   * @default 'warning'
   */
  type?: AlertBannerType;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  style?: AlertBannerStyle;
  
  /**
   * Message text to display
   */
  text: string;
  
  /**
   * Whether to show the leading icon
   * @default true
   */
  showLeadingIcon?: boolean;
  
  /**
   * Whether to show the trailing (close) icon
   * @default true
   */
  showTrailingIcon?: boolean;
  
  /**
   * Whether to show the action button
   * @default true
   */
  action?: boolean;
  
  /**
   * Custom leading icon (overrides default)
   */
  leadingIcon?: ReactNode;
  
  /**
   * Custom trailing icon (overrides default)
   */
  trailingIcon?: ReactNode;
  
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
