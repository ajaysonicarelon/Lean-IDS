/**
 * TopHeader Component
 * 
 * A horizontal navigation header that displays branding, app name,
 * menu items, and user avatar.
 * 
 * Features:
 * - Two color modes (dark, light)
 * - Brand logo with optional app name
 * - Horizontal menu items with active states
 * - User avatar
 * - Notification indicators
 * - Responsive layout
 */

import React from 'react';
import { TopHeaderProps } from './TopHeader.types';
import {
  StyledTopHeader,
  LogoSection,
  Divider,
  AppName,
  ActionSection,
  MenuItemsContainer,
} from './TopHeader.styles';
import { Brand } from '../Brand';
import { MenuItem } from '../MenuItem';
import { Avatar } from '../Avatar';

export const TopHeader: React.FC<TopHeaderProps> = ({
  mode = 'dark',
  appName = 'Product Name',
  showLogo = true,
  showAppName = true,
  showDivider = true,
  showMenuItems = true,
  showAvatar = true,
  menuItems = [],
  userInitials = 'AS',
  userAvatarUrl,
  leftOffset,
  onAvatarClick,
  className,
  children,
}) => {
  return (
    <StyledTopHeader
      $mode={mode}
      $leftOffset={leftOffset}
      className={className}
      role="banner"
    >
      {/* Logo and App Name Section */}
      <LogoSection>
        {showLogo && (
          <Brand 
            variant="logo"
            mode={mode}
          />
        )}
        {showDivider && <Divider $mode={mode} />}
        {showAppName && <AppName $mode={mode}>{appName}</AppName>}
      </LogoSection>

      {/* Action Items and Avatar Section */}
      <ActionSection>
        {showMenuItems && (
          <MenuItemsContainer>
            {children || menuItems.map((item) => (
              <MenuItem
                key={item.id}
                border="bottom"
                mode={mode}
                state={item.active ? 'active' : 'inactive'}
                label={item.label}
                iconS={item.icon}
                showIcon={true}
                showLabel={true}
                showIndicator={item.showIndicator}
                onClick={item.onClick}
              />
            ))}
          </MenuItemsContainer>
        )}
        
        {showAvatar && (
          <Avatar
            size="small"
            initials={userInitials}
            src={userAvatarUrl}
            alt="User avatar"
            onClick={onAvatarClick}
          />
        )}
      </ActionSection>
    </StyledTopHeader>
  );
};
