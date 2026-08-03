import { ReactNode, HTMLAttributes, CSSProperties, ElementType, MouseEvent, KeyboardEvent } from 'react';

export type BadgeType = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export type BadgeStyle = 'default' | 'subdued' | 'outlined';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  /**
   * Badge label text
   */
  label?: ReactNode;
  
  /**
   * Badge semantic type (determines color scheme)
   * @default 'info'
   */
  type?: BadgeType;
  
  /**
   * Visual style variant
   * @default 'default'
   */
  styleVariant?: BadgeStyle;
  
  /**
   * Polymorphic element type - render as different HTML element
   * @default 'span'
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
  
  /**
   * Interactive/clickable badge
   * @default false
   */
  interactive?: boolean;
  
  // ===== ICONS =====
  
  /**
   * Custom leading icon (overrides default)
   */
  leadingIcon?: ReactNode;
  
  /**
   * Custom trailing icon (overrides default)
   */
  trailingIcon?: ReactNode;
  
  /**
   * Whether to show the leading icon
   * @default false
   */
  showLeadingIcon?: boolean;
  
  /**
   * Whether to show the trailing icon
   * @default false
   */
  showTrailingIcon?: boolean;
  
  // ===== SLOTS / RENDER PROPS =====
  
  /**
   * Custom content to render instead of label
   */
  customContent?: ReactNode | ((props: { type: BadgeType }) => ReactNode);
  
  /**
   * Custom leading content (before icon and label)
   */
  customLeading?: ReactNode;
  
  /**
   * Custom trailing content (after label, before trailing icon)
   */
  customTrailing?: ReactNode;
  
  // ===== EVENT CALLBACKS =====
  
  /**
   * Callback when badge is clicked (only if interactive)
   */
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  
  /**
   * Callback when trailing icon is clicked (for removable badges)
   */
  onRemove?: (e: MouseEvent<HTMLSpanElement>) => void;
  
  /**
   * Callback when badge is mounted
   */
  onMount?: () => void;
  
  /**
   * Callback when badge is unmounted
   */
  onUnmount?: () => void;
  
  /**
   * Callback when badge receives focus
   */
  onFocus?: (e: React.FocusEvent<HTMLSpanElement>) => void;
  
  /**
   * Callback when badge loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLSpanElement>) => void;
  
  /**
   * Callback when key is pressed (for interactive badges)
   */
  onKeyDown?: (e: KeyboardEvent<HTMLSpanElement>) => void;
  
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
   * CSS class for icon wrapper
   */
  iconClassName?: string;
  
  /**
   * CSS class for label text
   */
  labelClassName?: string;
  
  // ===== ACCESSIBILITY =====
  
  /**
   * ARIA label for the badge
   */
  'aria-label'?: string;
  
  /**
   * ARIA labelledby for the badge
   */
  'aria-labelledby'?: string;
  
  /**
   * ARIA describedby for the badge
   */
  'aria-describedby'?: string;
  
  /**
   * ARIA role (defaults to 'status' for non-interactive, 'button' for interactive)
   */
  role?: string;
  
  // ===== LAYOUT =====
  
  /**
   * Loading message text
   * @default 'Loading...'
   */
  loadingMessage?: string;
  
  /**
   * Empty state message
   * @default 'No content'
   */
  emptyMessage?: string;
  
  /**
   * Error message (when isInvalid is true)
   */
  errorMessage?: string;
}
