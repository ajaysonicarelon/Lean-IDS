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

import React, { forwardRef, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { SideNavigationProps, SideNavigationState, NavigationItem } from './SideNavigation.types';
import {
  StyledSideNavigation,
  NavigationContent,
  ScrollableMenuArea,
  BrandContainer,
  NavigationGroups,
  MenuItemsContainer,
  MenuItemWrapper,
  UserProfileContainer,
  UserInfo,
  Divider,
  PinButton,
  ToggleButton,
} from './SideNavigation.styles';
import { Brand } from '../Brand';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';
import { Avatar } from '../Avatar';
import { NestedMenuOverlay } from '../NestedMenuOverlay';
import type { NestedMenuItem } from '../NestedMenuOverlay';

export const SideNavigation = forwardRef<HTMLElement, SideNavigationProps>((
  {
    as,
    groups = [],
    user,
    className,
    style,
    brandClassName,
    groupsClassName,
    userClassName,
    toggleButtonClassName,
    pinButtonClassName,
    children,
    isLoading = false,
    isEmpty = false,
    isInvalid = false,
    disabled = false,
    errorMessage,
    emptyMessage = 'No navigation items available',
    onPinChange,
    isPinned: externalIsPinned,
    expandMode = 'hover',
    toggleButtonPosition = 'top',
    toggleButtonOffset = 24,
    toggleButtonSize = 'large',
    toggleButtonIcon,
    customLogoUrl,
    customSymbolUrl,
    logoAlignment = 'left',
    logoPadding,
    showLabelsWhenCollapsed = true,
    onExpand,
    onCollapse,
    onAfterExpand,
    onAfterCollapse,
    onMenuItemClick,
    onMenuItemHover,
    ...restProps
  },
  ref
) => {
  const theme = useTheme();
  const Container = as || 'nav';
  const [isHovered, setIsHovered] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [internalIsPinned, setInternalIsPinned] = React.useState(false);
  const prevStateRef = useRef<SideNavigationState>('collapsed');
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
  
  // Track state changes and trigger callbacks
  useEffect(() => {
    const prevState = prevStateRef.current;
    const currentState = effectiveState;
    
    if (prevState !== currentState) {
      if (prevState === 'collapsed' && currentState === 'expanded') {
        onExpand?.();
        
        // Trigger after-expand callback after animation completes
        const timer = setTimeout(() => {
          onAfterExpand?.();
        }, 300); // Match transition duration from styles
        
        return () => clearTimeout(timer);
      } else if (prevState === 'expanded' && currentState === 'collapsed') {
        onCollapse?.();
        
        // Trigger after-collapse callback after animation completes
        const timer = setTimeout(() => {
          onAfterCollapse?.();
        }, 300);
        
        return () => clearTimeout(timer);
      }
    }
    
    prevStateRef.current = currentState;
  }, [effectiveState, onExpand, onCollapse, onAfterExpand, onAfterCollapse]);
  
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
    // Trigger callback
    onMenuItemHover?.(item);
    
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

  // Handle menu item click
  const handleMenuItemClick = (item: NavigationItem) => {
    // Trigger item's own onClick first
    item.onClick?.();
    // Then trigger the component's callback
    onMenuItemClick?.(item);
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

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (disabled) return;
    
    // Escape key - collapse sidebar
    if (e.key === 'Escape' && effectiveState === 'expanded') {
      e.preventDefault();
      
      if (isPinned) {
        // If pinned, unpin to collapse
        handlePinToggle();
      } else if (expandMode === 'button' || expandMode === 'both') {
        // If using button mode, collapse via button state
        setIsExpanded(false);
      }
      // Note: hover mode will collapse naturally when mouse leaves
    }
    
    // Pass through to parent
    restProps.onKeyDown?.(e);
  };

  // Loading State
  if (isLoading) {
    return (
      <StyledSideNavigation
        as={Container}
        ref={ref}
        $state="collapsed"
        className={className}
        style={style}
        aria-busy="true"
        aria-label="Loading navigation"
        {...restProps}
      >
        <NavigationContent>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            gap: theme.spacing[4]
          }}>
            {/* Loading Spinner */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="16" 
                cy="16" 
                r="12" 
                stroke={theme.colors.palette.neutral[50]}
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeDasharray="18.84 18.84"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 16 16"
                  to="360 16 16"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <Typography 
              variant="body" 
              style={{ color: theme.colors.palette.neutral[50] }}
            >
              Loading...
            </Typography>
          </div>
        </NavigationContent>
      </StyledSideNavigation>
    );
  }

  // Empty State
  if (isEmpty || (groups.length === 0 && !children)) {
    return (
      <StyledSideNavigation
        as={Container}
        ref={ref}
        $state="collapsed"
        className={className}
        style={style}
        aria-label={emptyMessage}
        {...restProps}
      >
        <NavigationContent>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing[4],
            textAlign: 'center'
          }}>
            <Typography 
              variant="body" 
              style={{ color: theme.colors.palette.neutral[300] }}
            >
              {emptyMessage}
            </Typography>
          </div>
        </NavigationContent>
      </StyledSideNavigation>
    );
  }

  // Error State
  if (isInvalid && errorMessage) {
    return (
      <StyledSideNavigation
        as={Container}
        ref={ref}
        $state="collapsed"
        className={className}
        style={style}
        aria-invalid="true"
        aria-label={errorMessage}
        {...restProps}
      >
        <NavigationContent>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing[4],
            textAlign: 'center',
            gap: theme.spacing[2]
          }}>
            <Typography 
              variant="body" 
              weight="semibold"
              style={{ color: theme.colors.semantic.text.error }}
            >
              Error
            </Typography>
            <Typography 
              variant="caption" 
              style={{ color: theme.colors.palette.neutral[300] }}
            >
              {errorMessage}
            </Typography>
          </div>
        </NavigationContent>
      </StyledSideNavigation>
    );
  }

  // Default State
  return (
    <StyledSideNavigation
      as={Container}
      ref={ref}
      $state={effectiveState}
      className={className}
      style={{
        ...style,
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto'
      }}
      aria-label="Side navigation"
      aria-busy={isLoading}
      aria-disabled={disabled}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => !isPinned && shouldEnableHover && !disabled && setIsHovered(true)}
      onMouseLeave={() => !isPinned && shouldEnableHover && setIsHovered(false)}
      {...restProps}
    >
      {/* Toggle Button - Positioned absolutely relative to sidebar, outside scrollable content */}
      {(expandMode === 'button' || expandMode === 'both') && !isPinned && (
        <ToggleButton
          $position={toggleButtonPosition}
          $offset={toggleButtonOffset}
          $size={toggleButtonSize}
          className={toggleButtonClassName}
          onClick={handleToggleClick}
          aria-label={isExpanded ? 'Collapse sidebar (Escape)' : 'Expand sidebar'}
          aria-keyshortcuts="Escape"
          title={isExpanded ? 'Collapse sidebar (Press Escape)' : 'Expand sidebar'}
          disabled={disabled}
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
        <BrandContainer $state={effectiveState} className={brandClassName}>
          {/* Brand Logo - Left side */}
          <Brand 
            variant={effectiveState === 'collapsed' ? 'symbol' : 'logo'}
            mode="dark"
            customLogoUrl={customLogoUrl}
            customSymbolUrl={customSymbolUrl}
            logoAlignment={logoAlignment}
            logoPadding={logoPadding}
          />
          
          {/* Pin Button - Right side, visible only on hover when expanded */}
          {effectiveState === 'expanded' && (
            <PinButton 
              $isPinned={isPinned} 
              $state={effectiveState}
              className={pinButtonClassName}
              onClick={handlePinToggle}
              aria-label={isPinned ? 'Unpin sidebar (Escape to close)' : 'Pin sidebar'}
              aria-keyshortcuts="Escape"
              title={isPinned ? 'Unpin sidebar (Press Escape to close)' : 'Pin sidebar'}
              disabled={disabled}
            >
              <svg viewBox="0 0 24 24" fill={isPinned ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isPinned ? "0" : "2"}>
                {isPinned ? (
                  // Pinned icon (filled push pin)
                  <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z" />
                ) : (
                  // Unpinned icon (outlined push pin)
                  <path d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z" />
                )}
              </svg>
            </PinButton>
          )}
        </BrandContainer>

        {/* Scrollable Menu Area - only menu items scroll, logo stays fixed */}
        <ScrollableMenuArea>
          {/* Navigation Groups */}
          {effectiveState === 'expanded' && (
            <NavigationGroups className={groupsClassName}>
              {children || groups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.title && (
                    <Typography 
                      variant="caption" 
                      weight="medium" 
                      style={{ 
                        letterSpacing: '1px', 
                        textTransform: 'uppercase',
                        color: theme.colors.palette.neutral[300],
                        padding: `0 ${theme.spacing[4]}`
                      }}
                    >
                      {group.title}
                    </Typography>
                  )}
                  
                  <MenuItemsContainer>
                    {group.items.map((item) => (
                      <MenuItemWrapper
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
                          onClick={() => handleMenuItemClick(item)}
                        />
                      </MenuItemWrapper>
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
                      <MenuItemWrapper
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
                          showLabel={showLabelsWhenCollapsed}
                          showIndicator={item.showIndicator}
                          nestedMenu={!!item.children && item.children.length > 0}
                          onClick={() => handleMenuItemClick(item)}
                        />
                      </MenuItemWrapper>
                    ))}
                  </MenuItemsContainer>

                  {groupIndex < groups.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </NavigationGroups>
          )}
        </ScrollableMenuArea>
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
          className={userClassName}
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
              <Typography 
                variant="body" 
                weight="semibold"
                style={{ color: theme.colors.palette.neutral[50] }}
              >
                {user.name}
              </Typography>
              <Typography 
                variant="caption"
                style={{ 
                  fontFamily: 'Roboto Mono, monospace',
                  letterSpacing: '1.5px',
                  color: theme.colors.palette.primary[50]
                }}
              >
                {user.subtitle}
              </Typography>
            </UserInfo>
          )}
        </UserProfileContainer>
      )}
    </StyledSideNavigation>
  );
});

SideNavigation.displayName = 'SideNavigation';
