/**
 * SideNavigation Component
 * 
 * A vertical navigation sidebar that starts collapsed (60px) and expands on hover (236px).
 * 
 * Behavior:
 * - Default: Collapsed (60px width) - shows vertical menu items with icons and truncated labels
 * - On Hover: Temporarily expands to 236px - shows horizontal menu items with full labels and group titles
 * - Pin Button: Appears on right of brand logo when expanded (visible on hover)
 * - Pinned: Locks sidebar at 236px width, content adjusts accordingly
 * 
 * Features:
 * - Multiple navigation groups with titles (visible in expanded state)
 * - Vertical menu items in collapsed state with icons and labels
 * - Active state indicators
 * - Notification badges
 * - Group dividers
 * - User profile section with 48px avatar
 * - Smooth transitions
 */

import React from 'react';
import { SideNavigationProps, SideNavigationState, NavigationItem } from './SideNavigation.types';
import {
  StyledSideNavigation,
  NavigationContent,
  BrandContainer,
  NavigationGroups,
  GroupTitle,
  MenuItemsContainer,
  UserProfileContainer,
  UserInfo,
  UserName,
  UserSubtitle,
  Divider,
  PinButton,
} from './SideNavigation.styles';
import { Brand } from '../Brand';
import { MenuItem } from '../MenuItem';
import { Avatar } from '../Avatar';
import { NestedMenuOverlay } from '../NestedMenuOverlay';
import type { NestedMenuItem } from '../NestedMenuOverlay';

export const SideNavigation: React.FC<SideNavigationProps> = ({
  groups = [],
  user,
  className,
  children,
  onPinChange,
  isPinned: externalIsPinned,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [internalIsPinned, setInternalIsPinned] = React.useState(false);
  const [nestedMenuState, setNestedMenuState] = React.useState<{
    items: NestedMenuItem[];
    position: { top: number; left: number };
  } | null>(null);
  
  // Use external isPinned if provided, otherwise use internal state
  const isPinned = externalIsPinned !== undefined ? externalIsPinned : internalIsPinned;
  
  // Determine effective state based on hover and pin
  // Always starts collapsed, expands on hover or when pinned
  const getEffectiveState = (): SideNavigationState => {
    if (isPinned || isHovered) {
      return 'expanded';
    }
    return 'collapsed';
  };
  
  const effectiveState = getEffectiveState();
  
  const handlePinToggle = () => {
    const newPinnedState = !isPinned;
    setInternalIsPinned(newPinnedState);
    onPinChange?.(newPinnedState);
  };

  // Convert NavigationItem to NestedMenuItem format
  const convertToNestedMenuItem = (item: NavigationItem): NestedMenuItem => ({
    id: item.id,
    label: item.label,
    active: item.active,
    onClick: item.onClick,
    children: item.children?.map(convertToNestedMenuItem),
  });

  // Track if sidebar is currently animating
  const [isAnimating, setIsAnimating] = React.useState(false);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const prevHoveredRef = React.useRef(isHovered);

  // Handle sidebar hover state changes
  React.useEffect(() => {
    // Only animate if hover state actually changed and not pinned
    if (!isPinned && prevHoveredRef.current !== isHovered) {
      setIsAnimating(true);
      
      // Close nested menu when sidebar starts collapsing
      if (!isHovered) {
        setNestedMenuState(null);
      }
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match transition duration from styles (0.3s)
      
      prevHoveredRef.current = isHovered;
      return () => clearTimeout(timer);
    }
    
    prevHoveredRef.current = isHovered;
    return undefined;
  }, [isHovered, isPinned]);

  // Handle menu item hover to show nested menu
  const handleMenuItemHover = (item: NavigationItem, event: React.MouseEvent<HTMLDivElement>) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Allow nested menus during expansion (isHovered=true), only block during collapse (isHovered=false)
    const shouldBlock = isAnimating && !isHovered;

    if (item.children && item.children.length > 0 && !shouldBlock) {
      // Capture rect BEFORE timeout (event.currentTarget becomes null after timeout)
      const rect = event.currentTarget.getBoundingClientRect();
      const childrenItems = item.children;
      
      // Calculate position based on expanded sidebar width (236px) to prevent overlap
      const expandedSidebarWidth = 236;
      
      // Add 100ms delay before showing nested menu (reduced for better responsiveness)
      hoverTimeoutRef.current = setTimeout(() => {
        setNestedMenuState({
          items: childrenItems.map(convertToNestedMenuItem),
          position: {
            top: rect.top,
            left: expandedSidebarWidth, // No gap - directly adjacent to sidebar
          },
        });
      }, 100);
    }
  };

  const handleMenuItemLeave = () => {
    // Clear hover timeout if mouse leaves before delay completes
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // Don't close immediately - let the overlay handle its own mouse leave
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <StyledSideNavigation
      $state={effectiveState}
      className={className}
      aria-label="Side navigation"
      onMouseEnter={() => !isPinned && setIsHovered(true)}
      onMouseLeave={() => !isPinned && setIsHovered(false)}
    >
      <NavigationContent>
        {/* Brand Logo and Pin Button */}
        <BrandContainer $state={effectiveState}>
          {/* Brand Logo - Left side */}
          <Brand 
            variant={effectiveState === 'collapsed' ? 'symbol' : 'logo'}
            mode="dark"
          />
          
          {/* Pin Button - Right side, visible only on hover when expanded */}
          {effectiveState === 'expanded' && (
            <PinButton 
              $isPinned={isPinned} 
              $state={effectiveState}
              onClick={handlePinToggle}
              aria-label={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
              title={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isPinned ? (
                  // Pinned icon (filled pin)
                  <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z" />
                ) : (
                  // Unpinned icon (outline pin)
                  <path d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z" />
                )}
              </svg>
            </PinButton>
          )}
        </BrandContainer>

        {/* Navigation Groups */}
        {effectiveState === 'expanded' && (
          <NavigationGroups>
            {children || groups.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {group.title && <GroupTitle>{group.title}</GroupTitle>}
                
                <MenuItemsContainer>
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={(e) => handleMenuItemHover(item, e)}
                      onMouseLeave={handleMenuItemLeave}
                    >
                      <MenuItem
                        border="left"
                        mode="dark"
                        state={item.active ? 'active' : 'inactive'}
                        label={item.label}
                        iconM={item.icon}
                        showIcon={true}
                        showLabel={true}
                        showIndicator={item.showIndicator}
                        nestedMenu={!!item.children && item.children.length > 0}
                        onClick={item.onClick}
                      />
                    </div>
                  ))}
                </MenuItemsContainer>

                {groupIndex < groups.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </NavigationGroups>
        )}

        {/* Collapsed state - show vertical menu items with icons and labels */}
        {effectiveState === 'collapsed' && (
          <NavigationGroups>
            {groups.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <MenuItemsContainer>
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={(e) => handleMenuItemHover(item, e)}
                      onMouseLeave={handleMenuItemLeave}
                    >
                      <MenuItem
                        aligned="vertical"
                        border="left"
                        mode="dark"
                        state={item.active ? 'active' : 'inactive'}
                        label={item.label}
                        iconM={item.icon}
                        showIcon={true}
                        showLabel={true}
                        showIndicator={item.showIndicator}
                        nestedMenu={!!item.children && item.children.length > 0}
                        onClick={item.onClick}
                      />
                    </div>
                  ))}
                </MenuItemsContainer>

                {groupIndex < groups.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </NavigationGroups>
        )}
      </NavigationContent>

      {/* Nested Menu Overlay */}
      {nestedMenuState && (
        <NestedMenuOverlay
          items={nestedMenuState.items}
          position={nestedMenuState.position}
          onClose={() => setNestedMenuState(null)}
        />
      )}

      {/* User Profile */}
      {user && (
        <UserProfileContainer $state={effectiveState}>
          <Avatar
            size="medium"
            initials={user.initials}
            src={user.avatarUrl}
            alt={user.name}
          />
          
          {effectiveState === 'expanded' && (
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserSubtitle>{user.subtitle}</UserSubtitle>
            </UserInfo>
          )}
        </UserProfileContainer>
      )}
    </StyledSideNavigation>
  );
};
