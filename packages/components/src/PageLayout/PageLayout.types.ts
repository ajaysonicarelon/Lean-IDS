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
  };
  
  /**
   * Side navigation props (for sidebar-only and topbar-sidebar variants)
   */
  sideNav?: {
    groups: NavigationGroup[];
    user?: UserProfile;
    isPinned?: boolean; // Whether sidebar is pinned
    onPinChange?: (isPinned: boolean) => void; // Callback when pin state changes
  };
  
  /**
   * Footer props (optional)
   */
  footer?: {
    lastUpdated?: string;
    version?: string;
    feedbackText?: string;
    feedbackUrl?: string;
  };
  
  /**
   * Optional className for custom styling
   */
  className?: string;
}
