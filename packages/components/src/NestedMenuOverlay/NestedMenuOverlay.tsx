import React, { useState, useEffect, useRef } from 'react';
import { NestedMenuOverlayProps, NestedMenuItem } from './NestedMenuOverlay.types';
import {
  OverlayContainer,
  NestedMenuItemContainer,
  MenuItemLabel,
  ArrowIcon,
} from './NestedMenuOverlay.styles';

export const NestedMenuOverlay: React.FC<NestedMenuOverlayProps> = ({
  items,
  position,
  onClose,
  className,
}) => {
  const [nestedOverlayPosition, setNestedOverlayPosition] = useState<{ top: number; left: number } | null>(null);
  const [nestedItems, setNestedItems] = useState<NestedMenuItem[] | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleItemHover = (item: NestedMenuItem, event: React.MouseEvent<HTMLDivElement>) => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Close any existing nested overlay immediately when switching to a different item
    setNestedOverlayPosition(null);
    setNestedItems(null);

    if (item.children && item.children.length > 0) {
      // Capture rect BEFORE timeout (event.currentTarget becomes null after timeout)
      const rect = event.currentTarget.getBoundingClientRect();
      const childrenItems = item.children;
      
      // Add 100ms delay before showing nested menu (reduced for better responsiveness)
      hoverTimeoutRef.current = setTimeout(() => {
        setNestedOverlayPosition({
          top: rect.top,
          left: rect.right, // No gap - directly adjacent to parent overlay
        });
        setNestedItems(childrenItems);
      }, 100);
    }
  };

  const handleItemLeave = () => {
    // Clear hover timeout if mouse leaves before delay completes
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // Don't close nested overlay immediately - handled by overlay leave
  };

  const handleOverlayEnter = () => {
    // Cancel close timeout when mouse re-enters overlay
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleOverlayLeave = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    
    // Only close if there's no nested overlay open
    // If nested overlay is open, don't close - let the nested overlay handle it
    closeTimeoutRef.current = setTimeout(() => {
      // Check if nested overlay is still open
      if (!nestedItems || nestedItems.length === 0) {
        onClose?.();
      }
    }, 200); // Delay to allow moving to nested overlay
  };

  const handleItemClick = (item: NestedMenuItem) => {
    // Only handle click for leaf items (no children)
    if (!item.children || item.children.length === 0) {
      item.onClick?.();
      onClose?.();
    }
  };

  return (
    <>
      <OverlayContainer
        ref={overlayRef}
        className={className}
        style={{ top: position.top, left: position.left }}
        onMouseEnter={handleOverlayEnter}
        onMouseLeave={handleOverlayLeave}
      >
        {items.map((item) => (
          <NestedMenuItemContainer
            key={item.id}
            $isActive={item.active || false}
            $hasChildren={!!item.children && item.children.length > 0}
            onMouseEnter={(e) => handleItemHover(item, e)}
            onMouseLeave={handleItemLeave}
            onClick={() => handleItemClick(item)}
          >
            <MenuItemLabel $isActive={item.active || false}>
              {item.label}
            </MenuItemLabel>
            
            {item.children && item.children.length > 0 && (
              <ArrowIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
                    fill="currentColor"
                  />
                </svg>
              </ArrowIcon>
            )}
          </NestedMenuItemContainer>
        ))}
      </OverlayContainer>

      {/* Recursive nested overlay */}
      {nestedOverlayPosition && nestedItems && (
        <NestedMenuOverlay
          items={nestedItems}
          position={nestedOverlayPosition}
          onClose={onClose}
        />
      )}
    </>
  );
};
