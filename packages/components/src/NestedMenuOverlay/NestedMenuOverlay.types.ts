/**
 * NestedMenuOverlay Component Types
 * 
 * Enterprise-grade nested menu overlay following Component Maturity Checklist.
 */

export interface NestedMenuItem {
  id: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: NestedMenuItem[];
  icon?: React.ReactNode;
}

/**
 * NestedMenuOverlay Props
 * 
 * @example
 * ```tsx
 * <NestedMenuOverlay
 *   items={menuItems}
 *   position={{ top: 100, left: 200 }}
 *   onClose={handleClose}
 * />
 * ```
 */
export interface NestedMenuOverlayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  // ============================================================================
  // POLYMORPHISM & COMPOSITION
  // ============================================================================
  
  /**
   * Polymorphic prop - change the root element type
   * @default 'div'
   */
  as?: React.ElementType;
  
  // ============================================================================
  // CORE PROPS
  // ============================================================================
  
  /**
   * Array of menu items to display
   */
  items: NestedMenuItem[];
  
  /**
   * Position of the overlay (top-left corner)
   */
  position: { top: number; left: number };
  
  /**
   * Color mode
   * @default 'dark'
   */
  mode?: 'dark' | 'light';
  
  /**
   * Trigger mode for opening nested menus
   * - 'hover': Open on mouse hover (default, better for desktop)
   * - 'click': Open on click (better for touch devices)
   * @default 'hover'
   */
  triggerMode?: 'hover' | 'click';
  
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
   * Additional CSS class for root container
   */
  className?: string;
  
  /**
   * Additional CSS class for menu items
   */
  itemClassName?: string;
  
  /**
   * Inline styles for root container
   */
  style?: React.CSSProperties;
  
  /**
   * Maximum width for overlay
   */
  maxWidth?: string;
  
  /**
   * Maximum height for overlay
   */
  maxHeight?: string;
  
  // ============================================================================
  // EVENT CALLBACKS
  // ============================================================================
  
  /**
   * Called when overlay should close
   */
  onClose?: () => void;
  
  /**
   * Called when a menu item is clicked
   */
  onItemClick?: (item: NestedMenuItem) => void;
  
  /**
   * Called when a menu item is hovered
   */
  onItemHover?: (item: NestedMenuItem) => void;
  
  /**
   * Called when overlay is opened
   */
  onOpen?: () => void;
  
  /**
   * Called after overlay is fully opened
   */
  onAfterOpen?: () => void;
  
  /**
   * Called after overlay is fully closed
   */
  onAfterClose?: () => void;
}
