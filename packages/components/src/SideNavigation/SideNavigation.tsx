/**
 * SideNavigation Component
 * 
 * A vertical navigation sidebar with flexible expand/collapse behavior.
 * 
 * **Dimensions:**
 * - Collapsed: 60px width
 * - Expanded: 236px width
 * - Height: 100vh (fixed viewport height)
 * 
 * **Positioning:**
 * - Uses `position: sticky` with `top: 0`
 * - Stays fixed at viewport height while content scrolls
 * - Consistent height across all content lengths
 * 
 * **Expand Modes:**
 * - `hover`: Expands on mouse hover (default)
 * - `button`: Expands only via toggle button click
 * - `both`: Expands on hover OR button click
 * 
 * **Features:**
 * - Multiple navigation groups with titles (visible when expanded)
 * - Active state indicators & notification badges
 * - Pin button: Locks sidebar in expanded state (visible on hover)
 * - Toggle button: Circular button on right edge for manual expand/collapse
 *   - Sizes: small (24px) or large (32px)
 *   - Positions: top or bottom with adjustable offset
 *   - Custom icon support
 *   - Half inside/half outside sidebar for easy access
 * - User profile section with avatar
 * - Click handlers for user profile
 * - Mouse enter/leave events on menu items
 * - Smooth transitions
 * - Scrollable content area within fixed viewport height
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
  ToggleButton,
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
  expandMode = 'hover',
  toggleButtonPosition = 'top',
  toggleButtonOffset = 24, // Default: align with brand logo center
  toggleButtonSize = 'large',
  toggleButtonIcon,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [internalIsPinned, setInternalIsPinned] = React.useState(false);
  const [nestedMenuState, setNestedMenuState] = React.useState<{
    items: NestedMenuItem[];
    position: { top: number; left: number };
  } | null>(null);
  
  // Use external isPinned if provided, otherwise use internal state
  const isPinned = externalIsPinned !== undefined ? externalIsPinned : internalIsPinned;
  
  // Determine effective state based on expand mode, hover, button, and pin
  const getEffectiveState = (): SideNavigationState => {
    if (isPinned) return 'expanded';
    
    if (expandMode === 'hover') {
      return isHovered ? 'expanded' : 'collapsed';
    } else if (expandMode === 'button') {
      return isExpanded ? 'expanded' : 'collapsed';
    } else { // 'both'
      return (isHovered || isExpanded) ? 'expanded' : 'collapsed';
    }
  };
  
  const effectiveState = getEffectiveState();
  
  const handlePinToggle = () => {
    const newPinnedState = !isPinned;
    setInternalIsPinned(newPinnedState);
    onPinChange?.(newPinnedState);
  };

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
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

  const shouldEnableHover = expandMode === 'hover' || expandMode === 'both';

  return (
    <StyledSideNavigation
      $state={effectiveState}
      className={className}
      aria-label="Side navigation"
      onMouseEnter={() => !isPinned && shouldEnableHover && setIsHovered(true)}
      onMouseLeave={() => !isPinned && shouldEnableHover && setIsHovered(false)}
    >
      {/* Toggle Button - Positioned absolutely relative to sidebar, outside scrollable content */}
      {(expandMode === 'button' || expandMode === 'both') && !isPinned && (
        <ToggleButton
          $position={toggleButtonPosition}
          $offset={toggleButtonOffset}
          $size={toggleButtonSize}
          onClick={handleToggleClick}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {toggleButtonIcon ? (
            toggleButtonIcon
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isExpanded ? (
                // Chevron left (collapse)
                <path d="M15 18l-6-6 6-6" />
              ) : (
                // Chevron right (expand)
                <path d="M9 18l6-6-6-6" />
              )}
            </svg>
          )}
        </ToggleButton>
      )}

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
        <UserProfileContainer 
          $state={effectiveState}
          onClick={user.onClick}
          style={{ cursor: user.onClick ? 'pointer' : 'default' }}
        >
          <Avatar
            size="medium"
            initials={user.initials}
            src={user.avatarUrl}
            alt={user.name}
            onClick={user.onClick}
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
