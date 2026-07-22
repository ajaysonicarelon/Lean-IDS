/**
 * MenuItem Component Types
 * 
 * Enterprise-grade menu item following Component Maturity Checklist.
 * Supports both horizontal (top header) and vertical (side navigation) layouts.
 */

export type MenuItemBorder = 'bottom' | 'left';
export type MenuItemMode = 'dark' | 'light';
export type MenuItemState = 'active' | 'inactive';
export type MenuItemAligned = 'horizontal' | 'vertical';
export type MenuItemType = 'single' | 'nested';

/**
 * MenuItem Props
 * 
 * @example
 * ```tsx
 * <MenuItem
 *   label="Dashboard"
 *   icon={<DashboardIcon />}
 *   state="active"
 *   onClick={handleClick}
 * />
 * ```
 */
export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /**
   * Polymorphic prop - change the root element type
   * @default 'div'
   * @example <MenuItem as="button" />
   */
  as?: React.ElementType;
  
  // ============================================================================
  // CORE PROPS
  // ============================================================================
  
  /**
   * Alignment direction
   * @default 'horizontal'
   */
  aligned?: MenuItemAligned;
  
  /**
   * Border position - bottom for horizontal nav, left for vertical nav
   * @default 'bottom'
   */
  border?: MenuItemBorder;
  
  /**
   * Color mode
   * @default 'dark'
   */
  mode?: MenuItemMode;
  
  /**
   * Active/inactive state
   * @default 'inactive'
   */
  state?: MenuItemState;
  
  /**
   * Menu item type - single or nested
   * @default 'single'
   */
  type?: MenuItemType;
  
  /**
   * Label text
   * @default 'Menu Item'
   */
  label?: string;
  
  /**
   * Icon for medium size (24px) - used in side navigation
   */
  iconM?: React.ReactNode;
  
  /**
   * Icon for small size (16px) - used in top header
   */
  iconS?: React.ReactNode;
  
  /**
   * Whether this menu item has nested children
   * @default false
   */
  nestedMenu?: boolean;
  
  /**
   * Whether to show icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Whether to show notification indicator
   * @default false
   */
  showIndicator?: boolean;
  
  /**
   * Whether to show label text
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * Indicates if this menu item has children/nested items
   * When true, shows an arrow indicator (chevron right)
   * @default false
   */
  hasChildren?: boolean;
  
  // ============================================================================
  // STATES (8 States Required)
  // ============================================================================
  
  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Loading state - shows spinner
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Empty state - shows empty message
   * @default false
   */
  isEmpty?: boolean;
  
  /**
   * Invalid/error state - shows error styling
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Error message to display in error state
   */
  errorMessage?: string;
  
  /**
   * Empty message to display in empty state
   */
  emptyMessage?: string;
  
  // ============================================================================
  // CUSTOMIZATION & OVERRIDES
  // ============================================================================
  
  /**
   * Custom render function or ReactNode for label
   * Overrides default label rendering
   */
  customLabel?: React.ReactNode | ((props: { label?: string }) => React.ReactNode);
  
  /**
   * Custom render function or ReactNode for icon
   * Overrides default icon rendering
   */
  customIcon?: React.ReactNode | ((props: { iconM?: React.ReactNode; iconS?: React.ReactNode }) => React.ReactNode);
  
  /**
   * Additional CSS class for root container
   */
  className?: string;
  
  /**
   * Additional CSS class for label
   */
  labelClassName?: string;
  
  /**
   * Additional CSS class for icon wrapper
   */
  iconClassName?: string;
  
  /**
   * Additional CSS class for notification indicator
   */
  indicatorClassName?: string;
  
  /**
   * Inline styles for root container
   */
  style?: React.CSSProperties;
  
  /**
   * Maximum width for menu item
   */
  maxWidth?: string;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Mouse enter handler
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Mouse leave handler
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  
  /**
   * Keyboard handler - for Enter/Space key support
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  
  /**
   * Called when menu item becomes active
   */
  onActivate?: () => void;
  
  /**
   * Called when menu item becomes inactive
   */
  onDeactivate?: () => void;
}
