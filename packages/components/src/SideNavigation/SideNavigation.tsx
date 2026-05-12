/**
 * SideNavigation Component
 * 
 * A vertical navigation sidebar that can be expanded or collapsed.
 * Contains brand logo, navigation groups, and user profile.
 * 
 * Features:
 * - Expandable/collapsible states
 * - Multiple navigation groups with titles
 * - Active state indicators
 * - Notification badges
 * - User profile section with avatar
 * - Smooth transitions
 */

import React from 'react';
import { SideNavigationProps, SideNavigationState } from './SideNavigation.types';
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

export const SideNavigation: React.FC<SideNavigationProps> = ({
  state = 'expanded',
  groups = [],
  user,
  className,
  children,
  onPinChange,
  isPinned: externalIsPinned,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [internalIsPinned, setInternalIsPinned] = React.useState(false);
  
  // Use external isPinned if provided, otherwise use internal state
  const isPinned = externalIsPinned !== undefined ? externalIsPinned : internalIsPinned;
  
  // Determine effective state based on hover and pin
  const getEffectiveState = (): SideNavigationState => {
    if (isPinned) {
      return 'expanded'; // Always expanded when pinned
    }
    
    // Toggle on hover: collapsed becomes expanded, expanded becomes collapsed
    if (isHovered) {
      return state === 'collapsed' ? 'expanded' : 'collapsed';
    }
    
    return state;
  };
  
  const effectiveState = getEffectiveState();
  
  const handlePinToggle = () => {
    const newPinnedState = !isPinned;
    setInternalIsPinned(newPinnedState);
    onPinChange?.(newPinnedState);
  };

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
                    <MenuItem
                      key={item.id}
                      border="left"
                      mode="dark"
                      state={item.active ? 'active' : 'inactive'}
                      label={item.label}
                      iconM={item.icon}
                      showIcon={true}
                      showLabel={true}
                      showIndicator={item.showIndicator}
                      onClick={item.onClick}
                    />
                  ))}
                </MenuItemsContainer>

                {groupIndex < groups.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </NavigationGroups>
        )}

        {/* Collapsed state - show only icons */}
        {effectiveState === 'collapsed' && (
          <NavigationGroups>
            {groups.flatMap(group => group.items).map((item) => (
              <MenuItem
                key={item.id}
                border="left"
                mode="dark"
                state={item.active ? 'active' : 'inactive'}
                iconM={item.icon}
                showIcon={true}
                showLabel={false}
                showIndicator={item.showIndicator}
                onClick={item.onClick}
              />
            ))}
          </NavigationGroups>
        )}
      </NavigationContent>

      {/* User Profile */}
      {user && (
        <UserProfileContainer $state={effectiveState}>
          <Avatar
            size={effectiveState === 'collapsed' ? 'small' : 'medium'}
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
