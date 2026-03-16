/**
 * InlineMessage component types
 */

import { ReactNode } from 'react';

export type InlineMessageType = 'warning' | 'success' | 'error' | 'info';

export type InlineMessageStyle = 'subdued' | 'accentBorder';

export interface InlineMessageProps {
  /**
   * Message type (determines color scheme)
   * @default 'warning'
   */
  type?: InlineMessageType;
  
  /**
   * Visual style variant
   * @default 'subdued'
   */
  style?: InlineMessageStyle;
  
  /**
   * Title text
   */
  text: string;
  
  /**
   * Description text
   */
  descriptionText: string;
  
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
   * Whether to show the link
   * @default true
   */
  link?: boolean;
  
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
   * Link text
   * @default 'Link'
   */
  linkText?: string;
  
  /**
   * Callback when action button is clicked
   */
  onActionClick?: () => void;
  
  /**
   * Callback when link is clicked
   */
  onLinkClick?: () => void;
  
  /**
   * Callback when close icon is clicked
   */
  onClose?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}
