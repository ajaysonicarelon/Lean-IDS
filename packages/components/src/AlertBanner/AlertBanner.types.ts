/**
 * AlertBanner component types
 */

import { ReactNode, HTMLAttributes, CSSProperties, ElementType, MouseEvent, KeyboardEvent } from 'react';

export type AlertBannerType = 'warning' | 'success' | 'error' | 'info';

export type AlertBannerStyle = 'default' | 'subdued' | 'accentBorder';

export interface AlertBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * Alert type (determines color scheme)
   * @default 'warning'
   */
  type?: AlertBannerType;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  styleVariant?: AlertBannerStyle;
  
  /**
   * Message text or content to display
   */
  text?: ReactNode;
  
  /**
   * Polymorphic element type - render as different HTML element
   * @default 'div'
   */
  as?: ElementType;
  
  // ===== STATES =====
  
  /**
   * Loading state - shows loading indicator
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Disabled state - reduces opacity and prevents interaction
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Error state - shows error styling
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Empty state - shows when no content
   * @default false
   */
  isEmpty?: boolean;
  
  // ===== ICONS =====
  
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
   * Custom leading icon (overrides default)
   */
  leadingIcon?: ReactNode;
  
  /**
   * Custom trailing icon (overrides default)
   */
  trailingIcon?: ReactNode;
  
  // ===== ACTION BUTTON =====
  
  /**
   * Whether to show the action button
   * @default true
   */
  action?: boolean;
  
  /**
   * Action button text
   * @default 'Button'
   */
  buttonText?: string;
  
  // ===== SLOTS / RENDER PROPS =====
  
  /**
   * Custom content to render instead of text
   */
  customContent?: ReactNode | ((props: { type: AlertBannerType }) => ReactNode);
  
  /**
   * Custom action area (replaces button and close icon)
   */
  customActions?: ReactNode | ((props: { type: AlertBannerType; onClose?: () => void }) => ReactNode);
  
  /**
   * Custom leading content (before icon and text)
   */
  customLeading?: ReactNode;
  
  /**
   * Custom trailing content (after text, before actions)
   */
  customTrailing?: ReactNode;
  
  // ===== EVENT CALLBACKS =====
  
  /**
   * Callback when action button is clicked
   */
  onActionClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Callback when close icon is clicked
   */
  onClose?: (e?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
  
  /**
   * Callback when alert is mounted
   */
  onMount?: () => void;
  
  /**
   * Callback when alert is unmounted
   */
  onUnmount?: () => void;
  
  /**
   * Callback when alert is clicked
   */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Callback when alert receives focus
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  
  /**
   * Callback when alert loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  
  // ===== STYLING OVERRIDES =====
  
  /**
   * Additional CSS class for root element
   */
  className?: string;
  
  /**
   * Inline styles for root element
   */
  style?: CSSProperties;
  
  /**
   * CSS class for message container
   */
  messageClassName?: string;
  
  /**
   * CSS class for actions container
   */
  actionsClassName?: string;
  
  /**
   * CSS class for icon wrapper
   */
  iconClassName?: string;
  
  /**
   * CSS class for button
   */
  buttonClassName?: string;
  
  // ===== ACCESSIBILITY =====
  
  /**
   * ARIA label for the alert
   */
  'aria-label'?: string;
  
  /**
   * ARIA labelledby for the alert
   */
  'aria-labelledby'?: string;
  
  /**
   * ARIA describedby for the alert
   */
  'aria-describedby'?: string;
  
  /**
   * ARIA live region politeness level
   * @default 'polite'
   */
  'aria-live'?: 'polite' | 'assertive' | 'off';
  
  // ===== LAYOUT =====
  
  /**
   * Width of the alert (use tokens or CSS values)
   * @default '100%'
   */
  width?: string;
  
  /**
   * Max width of the alert (use tokens or CSS values)
   */
  maxWidth?: string;
  
  /**
   * Loading message text
   * @default 'Loading...'
   */
  loadingMessage?: string;
  
  /**
   * Empty state message
   * @default 'No content to display'
   */
  emptyMessage?: string;
  
  /**
   * Error message (when isInvalid is true)
   */
  errorMessage?: string;
}
