/**
 * Tabs Component
 * 
 * Enterprise-grade tab navigation component with support for:
 * - Parent/child hierarchy
 * - Horizontal and vertical orientations
 * - All 8 component states (default, hover, focus, active, disabled, loading, empty, error)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Design token integration
 * - forwardRef support
 * - Polymorphic 'as' prop
 * 
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

import React, { forwardRef, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { TabsProps, TabItem, TabOrientation } from './Tabs.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const TabsContainer = styled.div<{ 
  $orientation: TabOrientation;
  $disabled?: boolean;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) => 
    $orientation === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ $orientation }) => 
    $orientation === 'horizontal' ? 'center' : 'stretch'};
  gap: 0;
  width: ${({ $orientation }) => 
    $orientation === 'horizontal' ? '100%' : 'auto'};
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  pointer-events: ${({ $disabled }) => $disabled ? 'none' : 'auto'};
  position: relative;
`;

const TabButton = styled.button<{
  $isActive: boolean;
  $type: 'parent' | 'child';
  $disabled: boolean;
  $orientation: TabOrientation;
  $contentAlign: 'left' | 'center' | 'right';
}>`
  display: flex;
  align-items: stretch; /* Changed from center to allow children to fill height */
  justify-content: ${({ $contentAlign }) => {
    if ($contentAlign === 'left') return 'flex-start';
    if ($contentAlign === 'right') return 'flex-end';
    return 'center';
  }};
  border: none;
  background: ${({ $isActive, $type, theme }) => {
    if ($type === 'child' && $isActive) return theme.colors.palette.primary[100];
    return 'transparent';
  }};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  position: relative;
  
  /* Parent tab styles */
  ${({ $type, $orientation, theme }) =>
    $type === 'parent' &&
    `
    padding: ${theme.spacing[3]} ${theme.spacing[5]};
    height: ${theme.spacing[13]}; /* 40px - fixed height for consistency */
    ${$orientation === 'horizontal' 
      ? `border-bottom: ${theme.borderWidth[2]} solid transparent;`
      : $orientation === 'vertical-left'
      ? `border-left: ${theme.borderWidth[2]} solid transparent;`
      : `border-right: ${theme.borderWidth[2]} solid transparent;`
    }
  `}
  
  /* Child tab styles */
  ${({ $type, theme }) =>
    $type === 'child' &&
    `
    padding: ${theme.spacing[4]} ${theme.spacing[5]};
    height: ${theme.spacing[14]}; /* 32px - fixed height for consistency */
    border-radius: ${theme.borderRadius.sm};
  `}
  
  /* Active parent tab */
  ${({ $isActive, $type, $orientation, theme }) =>
    $isActive &&
    $type === 'parent' &&
    `
    ${$orientation === 'horizontal' 
      ? `border-bottom-color: ${theme.colors.palette.primary[400]};`
      : $orientation === 'vertical-left'
      ? `border-left-color: ${theme.colors.palette.primary[400]};`
      : `border-right-color: ${theme.colors.palette.primary[400]};`
    }
  `}
  
  /* Inactive parent tab */
  ${({ $isActive, $type, $orientation, theme }) =>
    !$isActive &&
    $type === 'parent' &&
    `
    ${$orientation === 'horizontal' 
      ? `border-bottom-color: ${theme.colors.palette.neutral[400]};`
      : $orientation === 'vertical-left'
      ? `border-left-color: ${theme.colors.palette.neutral[400]};`
      : `border-right-color: ${theme.colors.palette.neutral[400]};`
    }
  `}
  
  /* Hover state */
  &:hover:not(:disabled) {
    ${({ $type, $isActive, theme }) => {
      if ($type === 'child' && !$isActive) {
        return `background: ${theme.colors.palette.neutral[200]};`;
      }
      if ($type === 'parent' && !$isActive) {
        return `background: ${theme.colors.palette.neutral[100]};`;
      }
      return '';
    }}
  }
  
  /* Focus-visible state */
  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: ${({ theme }) => theme.spacing[1]};
    z-index: 1;
  }
  
  /* Active (pressed) state */
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

const TabLabel = styled.span<{
  $isActive: boolean;
  $type: 'parent' | 'child';
}>`
  font-family: ${({ theme }) => theme.fonts.primary};
  white-space: nowrap;
  
  /* Parent tab label */
  ${({ $type, $isActive, theme }) =>
    $type === 'parent' &&
    `
    font-size: ${theme.fontSizes[16]};
    line-height: ${theme.lineHeights[19]};
    font-weight: ${$isActive ? theme.fontWeights.semibold : theme.fontWeights.medium};
    color: ${$isActive ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[600]};
  `}
  
  /* Child tab label */
  ${({ $type, $isActive, theme }) =>
    $type === 'child' &&
    `
    font-size: ${theme.fontSizes[14]};
    line-height: ${theme.lineHeights[16]};
    font-weight: ${$isActive ? theme.fontWeights.semibold : theme.fontWeights.medium};
    color: ${$isActive ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[600]};
  `}
`;

const TabBadge = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  min-width: ${({ theme }) => theme.spacing[10]}; /* 20px - maintains circular shape for single digits */
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  
  ${({ $isActive, theme }) =>
    $isActive
      ? `
    background: ${theme.colors.palette.primary[400]};
    color: ${theme.colors.palette.neutral[50]};
  `
      : `
    background: ${theme.colors.palette.neutral[200]};
    border: ${theme.borderWidth[1]} solid ${theme.colors.palette.neutral[800]};
    color: ${theme.colors.palette.neutral[800]};
  `}
`;

const IconWrapper = styled.span<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]}; /* 16px minimum for accessibility */
  height: ${({ theme }) => theme.spacing[7]};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.palette.primary[400] : theme.colors.palette.neutral[600]};
`;

// Content wrapper - only applies gap when there are multiple children
const TabContent = styled.span`
  display: flex;
  align-items: center;
  flex: 1; /* Fills available space in parent */
  min-height: 0; /* Prevents flex item from overflowing */
  gap: ${({ theme }) => theme.spacing[3]}; /* 8px - only between actual children */
`;

// State overlays
const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  opacity: 0.9;
  z-index: 10;
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      activeTab,
      onChange,
      orientation = 'horizontal',
      type = 'parent',
      as,
      contentAlign,
      showLeadingIcon = true,
      showTrailingIcon = false,
      showBadge = true,
      isLoading = false,
      isInvalid = false,
      errorMessage,
      isEmpty = false,
      emptyMessage = 'No tabs available',
      disabled = false,
      loadingIndicator,
      emptyState,
      errorState,
      className,
      style,
      tabClassName,
      labelClassName,
      badgeClassName,
      onTabClick,
      onTabFocus,
      onTabBlur,
      ...restProps
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const Container = as || 'div';

    // Auto-determine content alignment based on orientation if not specified
    const effectiveContentAlign = contentAlign || (
      orientation === 'horizontal' ? 'center' :
      orientation === 'vertical-left' ? 'left' :
      'right' // vertical-right
    );

    // Auto-detect empty state
    const isEmptyState = isEmpty || tabs.length === 0;

    // Keyboard navigation
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
        let nextIndex = currentIndex;

        if (orientation === 'horizontal') {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextIndex = (currentIndex + 1) % tabs.length;
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          }
        } else {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            nextIndex = (currentIndex + 1) % tabs.length;
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          }
        }

        if (nextIndex !== currentIndex && !tabs[nextIndex].disabled) {
          onChange(tabs[nextIndex].id);
        }
      };

      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }, [tabs, activeTab, onChange, orientation]);

    const handleTabClick = (tab: TabItem, event: React.MouseEvent) => {
      if (disabled || tab.disabled) return;
      
      onTabClick?.(tab.id, event);
      onChange(tab.id);
    };

    const handleTabFocus = (tabId: string) => {
      onTabFocus?.(tabId);
    };

    const handleTabBlur = (tabId: string) => {
      onTabBlur?.(tabId);
    };

    // Loading state
    if (isLoading) {
      return (
        <Container
          ref={ref}
          className={className}
          style={style}
          {...restProps}
        >
          <LoadingOverlay>
            {loadingIndicator || (
              <StateContainer>
                <Icon name="HourglassEmpty" size="medium" />
                <Typography variant="body">Loading tabs...</Typography>
              </StateContainer>
            )}
          </LoadingOverlay>
        </Container>
      );
    }

    // Error state
    if (isInvalid) {
      const errorContent = typeof errorState === 'function' 
        ? errorState({ message: errorMessage })
        : errorState || (
          <StateContainer>
            <Icon name="Error" size="medium" color="error" />
            <Typography variant="body" color="error">
              {errorMessage || 'Failed to load tabs'}
            </Typography>
          </StateContainer>
        );

      return (
        <Container
          ref={ref}
          className={className}
          style={style}
          {...restProps}
        >
          {errorContent}
        </Container>
      );
    }

    // Empty state
    if (isEmptyState) {
      const emptyContent = typeof emptyState === 'function'
        ? emptyState({ message: emptyMessage })
        : emptyState || (
          <StateContainer>
            <Icon name="TabUnselected" size="medium" />
            <Typography variant="body">{emptyMessage}</Typography>
          </StateContainer>
        );

      return (
        <Container
          ref={ref}
          className={className}
          style={style}
          {...restProps}
        >
          {emptyContent}
        </Container>
      );
    }

    return (
      <TabsContainer
        as={Container}
        ref={(node: HTMLDivElement | null) => {
          // Handle both refs
          if (ref) {
            if (typeof ref === 'function') {
              ref(node);
            } else {
              ref.current = node;
            }
          }
          (containerRef as any).current = node;
        }}
        $orientation={orientation}
        $disabled={disabled}
        className={className}
        style={style}
        role="tablist"
        aria-orientation={orientation === 'horizontal' ? 'horizontal' : 'vertical'}
        {...restProps}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <TabButton
              key={tab.id}
              $isActive={isActive}
              $type={type}
              $disabled={!!tab.disabled}
              $orientation={orientation}
              $contentAlign={effectiveContentAlign}
              onClick={(e) => handleTabClick(tab, e)}
              onFocus={() => handleTabFocus(tab.id)}
              onBlur={() => handleTabBlur(tab.id)}
              disabled={tab.disabled || disabled}
              role="tab"
              aria-selected={isActive}
              aria-disabled={tab.disabled || disabled}
              aria-label={tab.label}
              tabIndex={isActive ? 0 : -1}
              className={tabClassName}
            >
              <TabContent>
                {/* Leading Icon */}
                {showLeadingIcon && tab.leadingIcon && (
                  <IconWrapper $isActive={isActive}>
                    <Icon name={tab.leadingIcon} size="small" />
                  </IconWrapper>
                )}

                {/* Label */}
                <TabLabel 
                  $isActive={isActive} 
                  $type={type}
                  className={labelClassName}
                >
                  {tab.label}
                </TabLabel>

                {/* Badge Count */}
                {showBadge && tab.count !== undefined && (
                  <TabBadge 
                    $isActive={isActive}
                    className={badgeClassName}
                  >
                    {tab.count}
                  </TabBadge>
                )}

                {/* Trailing Icon */}
                {showTrailingIcon && tab.trailingIcon && (
                  <IconWrapper $isActive={isActive}>
                    <Icon name={tab.trailingIcon} size="small" />
                  </IconWrapper>
                )}
              </TabContent>
            </TabButton>
          );
        })}
      </TabsContainer>
    );
  }
);

Tabs.displayName = 'Tabs';
