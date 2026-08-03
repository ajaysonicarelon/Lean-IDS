/**
 * Tabs component types
 */

import { ElementType, HTMLAttributes, CSSProperties, ReactNode } from 'react';

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Optional badge count */
  count?: number;
  /** Leading icon name */
  leadingIcon?: string;
  /** Trailing icon name */
  trailingIcon?: string;
  /** Disabled state */
  disabled?: boolean;
}

export type TabOrientation = 'horizontal' | 'vertical-left' | 'vertical-right';

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  // ============================================================================
  // REQUIRED PROPS
  // ============================================================================
  
  /** Array of tab items */
  tabs: TabItem[];
  /** Active tab ID */
  activeTab: string;
  /** Tab change handler */
  onChange: (tabId: string) => void;
  
  // ============================================================================
  // LAYOUT & ORIENTATION
  // ============================================================================
  
  /** 
   * Tab orientation
   * - 'horizontal': Tabs arranged horizontally with bottom border indicator
   * - 'vertical-left': Tabs arranged vertically with left border indicator
   * - 'vertical-right': Tabs arranged vertically with right border indicator
   * @default 'horizontal'
   */
  orientation?: TabOrientation;
  
  /** Tab type (visual hierarchy) */
  type?: 'parent' | 'child';
  
  // ============================================================================
  // POLYMORPHISM
  // ============================================================================
  
  /** Render as a different HTML element or custom component */
  as?: ElementType;
  
  // ============================================================================
  // VISUAL OPTIONS
  // ============================================================================
  
  /** 
   * Content alignment within tabs
   * - Auto-determined by orientation if not specified:
   *   - 'horizontal' → 'center'
   *   - 'vertical-left' → 'left'
   *   - 'vertical-right' → 'right'
   * - Can be overridden manually
   * @default Auto-determined by orientation
   */
  contentAlign?: 'left' | 'center' | 'right';
  
  /** Show leading icons */
  showLeadingIcon?: boolean;
  /** Show trailing icons */
  showTrailingIcon?: boolean;
  /** Show badge counts */
  showBadge?: boolean;
  
  // ============================================================================
  // STATES
  // ============================================================================
  
  /** Loading state - shows loading indicator */
  isLoading?: boolean;
  /** Error state - shows error message */
  isInvalid?: boolean;
  /** Error message to display when isInvalid is true */
  errorMessage?: string;
  /** Empty state - shows when no tabs provided */
  isEmpty?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Disabled state for entire tab group */
  disabled?: boolean;
  
  // ============================================================================
  // CUSTOMIZATION SLOTS
  // ============================================================================
  
  /** Custom loading indicator */
  loadingIndicator?: ReactNode;
  /** Custom empty state content */
  emptyState?: ReactNode | ((props: { message?: string }) => ReactNode);
  /** Custom error state content */
  errorState?: ReactNode | ((props: { message?: string }) => ReactNode);
  
  // ============================================================================
  // STYLING OVERRIDES
  // ============================================================================
  
  /** Custom className for root container */
  className?: string;
  /** Custom inline styles for root container */
  style?: CSSProperties;
  /** Custom className for individual tab buttons */
  tabClassName?: string;
  /** Custom className for tab labels */
  labelClassName?: string;
  /** Custom className for badges */
  badgeClassName?: string;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /** Called when a tab is clicked (before onChange) */
  onTabClick?: (tabId: string, event: React.MouseEvent) => void;
  /** Called when a tab receives focus */
  onTabFocus?: (tabId: string) => void;
  /** Called when a tab loses focus */
  onTabBlur?: (tabId: string) => void;
}
