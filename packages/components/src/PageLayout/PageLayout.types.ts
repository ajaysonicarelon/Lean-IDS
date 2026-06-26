import { ReactNode } from 'react';
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb.types';
import { NavigationGroup } from '../SideNavigation/SideNavigation.types';
import { TopHeaderMenuItem } from '../TopHeader/TopHeader.types';
import { UserProfile } from '../SideNavigation/SideNavigation.types';

export type PageLayoutVariant = 'topbar-only' | 'sidebar-only' | 'topbar-sidebar';

export interface PageLayoutProps {
  /**
   * Layout variant - determines which navigation components to show
   * - 'topbar-only': Only top header (dark mode with logo)
   * - 'sidebar-only': Only side navigation (expanded with logo)
   * - 'topbar-sidebar': Both (light top bar without logo, collapsed sidebar with symbol)
   */
  variant: PageLayoutVariant;
  
  /**
   * Page title
   */
  pageTitle: string;
  
  /**
   * Page description (optional)
   */
  pageDescription?: string;
  
  /**
   * Breadcrumb items
   */
  breadcrumbs: BreadcrumbProps[];
  
  /**
   * Main page content
   */
  children: ReactNode;
  
  /**
   * Top header props (for topbar-only and topbar-sidebar variants)
   */
  topHeader?: {
    appName?: string;
    menuItems?: TopHeaderMenuItem[];
    userInitials?: string;
    userAvatarUrl?: string;
    showLogo?: boolean; // Only for topbar-only variant
    onAvatarClick?: () => void; // Click handler for user avatar
    customLogoUrl?: string; // Custom logo URL
  };
  
  /**
   * Side navigation props (for sidebar-only and topbar-sidebar variants)
   */
  sideNav?: {
    groups: NavigationGroup[];
    user?: UserProfile;
    isPinned?: boolean; // Whether sidebar is pinned
    onPinChange?: (isPinned: boolean) => void; // Callback when pin state changes
    expandMode?: 'hover' | 'button' | 'both'; // Expand/collapse mode
    toggleButtonPosition?: 'top' | 'bottom'; // Position of toggle button
    toggleButtonOffset?: number; // Vertical offset for toggle button (in pixels)
    toggleButtonSize?: 'small' | 'large'; // Size of toggle button
    toggleButtonIcon?: ReactNode; // Custom icon for toggle button
    customLogoUrl?: string; // Custom logo URL
    logoAlignment?: 'left' | 'center' | 'right'; // Logo alignment
    logoPadding?: string; // Custom padding for logo (CSS padding value)
    showLabelsWhenCollapsed?: boolean; // Whether to show menu item labels when sidebar is collapsed
  };
  
  /**
   * Footer props (optional)
   */
  footer?: {
    lastUpdated?: string;
    version?: string;
    feedbackText?: string;
    feedbackUrl?: string;
    onFeedbackClick?: () => void; // Click handler for feedback link
  };
  
  /**
   * Optional className for custom styling
   */
  className?: string;
}
