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

export interface SideNavigationProps {
  /** Navigation groups */
  groups?: NavigationGroup[];
  /** User profile information */
  user?: UserProfile;
  /** Additional CSS class */
  className?: string;
  /** Custom content (overrides default groups) */
  children?: React.ReactNode;
  /** Callback when pin state changes */
  onPinChange?: (isPinned: boolean) => void;
  /** Whether sidebar is pinned (locked in expanded state) */
  isPinned?: boolean;
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
  /** Custom logo URL */
  customLogoUrl?: string;
  /** Logo alignment - 'left', 'center', or 'right' */
  logoAlignment?: 'left' | 'center' | 'right';
  /** Custom padding for logo (CSS padding value) */
  logoPadding?: string;
  /** Whether to show menu item labels when sidebar is collapsed */
  showLabelsWhenCollapsed?: boolean;
}
