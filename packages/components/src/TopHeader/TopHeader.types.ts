export type TopHeaderMode = 'dark' | 'light';

export interface TopHeaderMenuItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Icon component (16px for top header) */
  icon?: React.ReactNode;
  /** Whether this item is active */
  active?: boolean;
  /** Whether to show notification indicator */
  showIndicator?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export interface TopHeaderProps {
  /** Color mode */
  mode?: TopHeaderMode;
  /** Application name */
  appName?: string;
  /** Whether to show logo */
  showLogo?: boolean;
  /** Whether to show app name */
  showAppName?: boolean;
  /** Whether to show divider between logo and app name */
  showDivider?: boolean;
  /** Whether to show menu items */
  showMenuItems?: boolean;
  /** Whether to show avatar */
  showAvatar?: boolean;
  /** Menu items */
  menuItems?: TopHeaderMenuItem[];
  /** User initials for avatar */
  userInitials?: string;
  /** User avatar image URL */
  userAvatarUrl?: string;
  /** Additional CSS class */
  className?: string;
  /** Custom content (overrides default menu items) */
  children?: React.ReactNode;
  /** Left offset in pixels (used when sidebar is present) */
  leftOffset?: number;
  /** Click handler for user avatar */
  onAvatarClick?: () => void;
  /** Custom logo URL */
  customLogoUrl?: string;
}
