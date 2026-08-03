export type SideNavigationState = 'expanded' | 'collapsed';

export interface NavigationGroup {
  /** Group title */
  title?: string;
  /** Menu items in this group */
  items: NavigationItem[];
}

export interface NavigationItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Icon component (24px for side nav) */
  icon?: React.ReactNode;
  /** Whether this item is active */
  active?: boolean;
  /** Whether to show notification indicator */
  showIndicator?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Nested menu items (submenu) */
  children?: NavigationItem[];
}

export interface UserProfile {
  /** User's initials */
  initials: string;
  /** User's full name */
  name: string;
  /** Employee ID or subtitle */
  subtitle: string;
  /** Avatar image URL (optional) */
  avatarUrl?: string;
  /** Click handler for user profile */
  onClick?: () => void;
}

export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  // ========== POLYMORPHISM ==========
  /** Render as different HTML element (default: 'nav') */
  as?: React.ElementType;
  
  // ========== CONTENT ==========
  /** Navigation groups */
  groups?: NavigationGroup[];
  /** User profile information */
  user?: UserProfile;
  /** Custom content (overrides default groups) */
  children?: React.ReactNode;
  
  // ========== STATES (Component Maturity Checklist) ==========
  /** Whether sidebar is pinned (locked in expanded state) */
  isPinned?: boolean;
  /** Loading state - shows spinner */
  isLoading?: boolean;
  /** Empty state - shows empty message */
  isEmpty?: boolean;
  /** Error state - shows error message */
  isInvalid?: boolean;
  /** Error message to display when isInvalid is true */
  errorMessage?: string;
  /** Empty message to display when isEmpty is true */
  emptyMessage?: string;
  /** Disabled state - prevents all interactions */
  disabled?: boolean;
  
  // ========== BEHAVIOR ==========
  /** Expand/collapse mode - 'hover', 'button', or 'both' */
  expandMode?: 'hover' | 'button' | 'both';
  /** Position of toggle button - 'top' or 'bottom' */
  toggleButtonPosition?: 'top' | 'bottom';
  /** Vertical offset for toggle button (in pixels) */
  toggleButtonOffset?: number;
  /** Size of toggle button - 'small' or 'large' */
  toggleButtonSize?: 'small' | 'large';
  /** Custom icon for toggle button (collapsed state) */
  toggleButtonIcon?: React.ReactNode;
  /** Whether to show menu item labels when sidebar is collapsed */
  showLabelsWhenCollapsed?: boolean;
  
  // ========== BRANDING ==========
  /** Custom logo URL for expanded state (full logo) */
  customLogoUrl?: string;
  /** Custom symbol URL for collapsed state (icon only) */
  customSymbolUrl?: string;
  /** Logo alignment - 'left', 'center', or 'right' */
  logoAlignment?: 'left' | 'center' | 'right';
  /** Custom padding for logo (CSS padding value) */
  logoPadding?: string;
  
  // ========== STYLE OVERRIDES (Component Maturity Checklist) ==========
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** CSS class for brand container */
  brandClassName?: string;
  /** CSS class for navigation groups */
  groupsClassName?: string;
  /** CSS class for user profile section */
  userClassName?: string;
  /** CSS class for toggle button */
  toggleButtonClassName?: string;
  /** CSS class for pin button */
  pinButtonClassName?: string;
  
  // ========== EVENT CALLBACKS (Component Maturity Checklist) ==========
  /** Callback when pin state changes */
  onPinChange?: (isPinned: boolean) => void;
  /** Callback when sidebar expands */
  onExpand?: () => void;
  /** Callback when sidebar collapses */
  onCollapse?: () => void;
  /** Callback after expand animation completes */
  onAfterExpand?: () => void;
  /** Callback after collapse animation completes */
  onAfterCollapse?: () => void;
  /** Callback when menu item is clicked */
  onMenuItemClick?: (item: NavigationItem) => void;
  /** Callback when menu item is hovered */
  onMenuItemHover?: (item: NavigationItem) => void;
}
