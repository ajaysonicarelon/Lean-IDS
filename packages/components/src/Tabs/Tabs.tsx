/**
 * Tabs Component
 * 
 * A tab navigation component with support for parent/child hierarchy.
 * Based on Figma design: node-id=5563-2573
 * 
 * Usage Guidelines:
 * 1. Tabs should never interfere with global navigation
 * 2. Use hierarchy: Parent (Primary) > Child (Secondary)
 * 3. Parent tabs above child tabs in visual hierarchy
 * 4. Child tabs subdivide parent tab content
 * 5. Child tabs should not be more than one level deep
 * 6. Use max 5-6 tabs horizontally
 */

import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { TabsProps, TabItem } from './Tabs.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
`;

const TabButton = styled.button<{
  $isActive: boolean;
  $type: 'parent' | 'child';
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: ${({ $isActive, $type }) => {
    if ($type === 'child' && $isActive) return '#EFE6F8'; // primary-100
    return 'transparent';
  }};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  
  /* Parent tab styles */
  ${({ $type }) =>
    $type === 'parent' &&
    `
    padding: 8px 16px 8px 16px;
    border-bottom: 2px solid transparent;
  `}
  
  /* Child tab styles */
  ${({ $type }) =>
    $type === 'child' &&
    `
    padding: 4px 8px;
    border-radius: 4px;
  `}
  
  /* Active parent tab */
  ${({ $isActive, $type }) =>
    $isActive &&
    $type === 'parent' &&
    `
    border-bottom-color: #6222BC; // primary-400
  `}
  
  /* Inactive parent tab */
  ${({ $isActive, $type }) =>
    !$isActive &&
    $type === 'parent' &&
    `
    border-bottom-color: #D5D5D5; // gray-400
  `}
  
  &:hover:not(:disabled) {
    ${({ $type, $isActive }) => {
      if ($type === 'child' && !$isActive) {
        return 'background: #F8F8F8;'; // gray-200
      }
      return '';
    }}
  }
`;

const TabLabel = styled.span<{
  $isActive: boolean;
  $type: 'parent' | 'child';
}>`
  font-family: 'Elevance Sans', sans-serif;
  white-space: nowrap;
  
  /* Parent tab label */
  ${({ $type, $isActive }) =>
    $type === 'parent' &&
    `
    font-size: 16px;
    line-height: 19px;
    font-weight: ${$isActive ? 600 : 500};
    color: ${$isActive ? '#6222BC' : '#909090'}; // primary-400 : gray-600
  `}
  
  /* Child tab label */
  ${({ $type, $isActive }) =>
    $type === 'child' &&
    `
    font-size: 14px;
    line-height: 16px;
    font-weight: ${$isActive ? 600 : 500};
    color: ${$isActive ? '#6222BC' : '#909090'}; // primary-400 : gray-600
  `}
`;

const TabBadge = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 999px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  
  ${({ $isActive }) =>
    $isActive
      ? `
    background: #6222BC; // primary-400
    color: #FFFFFF;
  `
      : `
    background: #F8F8F8; // gray-200
    border: 1px solid #464646; // gray-800
    color: #464646; // gray-800
  `}
`;

const IconWrapper = styled.span<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isActive }) => ($isActive ? '#6222BC' : '#909090')};
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  type = 'parent',
  showLeadingIcon = true,
  showTrailingIcon = false,
  showBadge = true,
  className,
}) => {
  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (!disabled) {
      onChange(tabId);
    }
  };

  return (
    <TabsContainer className={className}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <TabButton
            key={tab.id}
            $isActive={isActive}
            $type={type}
            $disabled={!!tab.disabled}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            disabled={tab.disabled}
            role="tab"
            aria-selected={isActive}
            aria-disabled={tab.disabled}
          >
            {/* Leading Icon */}
            {showLeadingIcon && tab.leadingIcon && (
              <IconWrapper $isActive={isActive}>
                <Icon name={tab.leadingIcon} size="small" />
              </IconWrapper>
            )}

            {/* Label */}
            <TabLabel $isActive={isActive} $type={type}>
              {tab.label}
            </TabLabel>

            {/* Badge Count */}
            {showBadge && tab.count !== undefined && (
              <TabBadge $isActive={isActive}>{tab.count}</TabBadge>
            )}

            {/* Trailing Icon */}
            {showTrailingIcon && tab.trailingIcon && (
              <IconWrapper $isActive={isActive}>
                <Icon name={tab.trailingIcon} size="small" />
              </IconWrapper>
            )}
          </TabButton>
        );
      })}
    </TabsContainer>
  );
};
