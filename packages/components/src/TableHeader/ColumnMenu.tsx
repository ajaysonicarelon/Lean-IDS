import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Clear from '@mui/icons-material/Clear';
import Lock from '@mui/icons-material/Lock';
import ChevronRight from '@mui/icons-material/ChevronRight';
import FitScreen from '@mui/icons-material/FitScreen';
import RestartAlt from '@mui/icons-material/RestartAlt';

interface ColumnMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onSortAscending: () => void;
  onSortDescending: () => void;
  onSortNone: () => void;
  onPinChange: (pinState: 'none' | 'left' | 'right') => void;
  onAutosizeColumn: () => void;
  onAutosizeAll: () => void;
  onResetColumn: () => void;
  currentPinState: 'none' | 'left' | 'right';
  currentSortDirection?: 'asc' | 'desc' | 'none';
  isParentWithSubColumns?: boolean;
  isChildColumn?: boolean;
  enableUserPinning?: boolean;
}

const MenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

const MenuContainer = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing[1]} 0;
  overflow: visible;
  z-index: 10000;
`;

const MenuItem = styled.button<{ $hasSubmenu?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.primary[50]};
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.palette.primary[100]};
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
  }

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.palette.neutral[600]};
  }
`;

const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.palette.neutral[200]};
  margin: ${({ theme }) => `${theme.spacing[1]} 0`};
`;

const SubMenuContainer = styled.div<{ $top: number; $left: number }>`
  position: fixed;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-width: 160px;
  z-index: 10001;
  overflow: hidden;
`;

const PinMenuItem = styled(MenuItem)<{ $active?: boolean }>`
  ${({ $active, theme }) =>
    $active &&
    `
    background: ${theme.colors.palette.primary[50]};
    color: ${theme.colors.palette.primary[700]};
    font-weight: 600;
    
    &:hover {
      background: ${theme.colors.palette.primary[100]};
    }
  `}
`;

export const ColumnMenu: React.FC<ColumnMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onSortAscending,
  onSortDescending,
  onSortNone,
  onPinChange,
  onAutosizeColumn,
  onAutosizeAll,
  onResetColumn,
  currentPinState,
  currentSortDirection = 'none',
  isParentWithSubColumns = false,
  isChildColumn = false,
  enableUserPinning = true,
}) => {
  const [showPinSubmenu, setShowPinSubmenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const pinMenuItemRef = useRef<HTMLButtonElement>(null);
  const submenuTimerRef = useRef<number | null>(null);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (submenuTimerRef.current) {
        clearTimeout(submenuTimerRef.current);
      }
    };
  }, []);

  const handleShowSubmenu = () => {
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current);
    }
    setShowPinSubmenu(true);
  };

  const handleHideSubmenu = () => {
    // Add 300ms delay before hiding submenu
    submenuTimerRef.current = window.setTimeout(() => {
      setShowPinSubmenu(false);
    }, 300);
  };

  useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      const menuWidth = 200;
      const menuHeight = 300; // Approximate

      let top = rect.bottom + 4;
      let left = rect.left;

      // Adjust if menu goes off right edge
      if (left + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth - 8;
      }

      // Adjust if menu goes off bottom edge
      if (top + menuHeight > window.innerHeight) {
        top = rect.top - menuHeight - 4;
      }

      setMenuPosition({ top, left });
    }
  }, [open, anchorEl]);

  useEffect(() => {
    if (showPinSubmenu && pinMenuItemRef.current && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = pinMenuItemRef.current.getBoundingClientRect();
      const submenuWidth = 160;

      // Position relative to viewport (fixed positioning)
      let top = itemRect.top;
      let left = menuRect.right + 2;

      // If submenu goes off right edge, show on left side
      if (left + submenuWidth > window.innerWidth) {
        left = menuRect.left - submenuWidth - 2;
      }

      // If submenu goes off bottom edge, adjust upward
      const submenuHeight = 120; // Approximate height for 3 items
      if (top + submenuHeight > window.innerHeight) {
        top = window.innerHeight - submenuHeight - 8;
      }

      setSubmenuPosition({ top, left });
    }
  }, [showPinSubmenu]);

  const handleMenuItemClick = (action: () => void) => {
    action();
    onClose();
  };

  const handlePinChange = (pinState: 'none' | 'left' | 'right') => {
    onPinChange(pinState);
    setShowPinSubmenu(false);
    onClose();
  };

  if (!open) return null;

  return (
    <MenuOverlay $open={open} onClick={onClose}>
      <MenuContainer
        ref={menuRef}
        $top={menuPosition.top}
        $left={menuPosition.left}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Show sorting options only for non-parent columns or columns without sub-columns */}
        {!isParentWithSubColumns && (
          <>
            <MenuItem onClick={() => handleMenuItemClick(onSortAscending)}>
              <MenuItemContent>
                <ArrowUpward sx={{ fontSize: 16 }} />
                Sort Ascending
              </MenuItemContent>
            </MenuItem>

            <MenuItem onClick={() => handleMenuItemClick(onSortDescending)}>
              <MenuItemContent>
                <ArrowDownward sx={{ fontSize: 16 }} />
                Sort Descending
              </MenuItemContent>
            </MenuItem>

            {/* Only show Clear Sort when sorting is active */}
            {currentSortDirection !== 'none' && (
              <MenuItem onClick={() => handleMenuItemClick(onSortNone)}>
                <MenuItemContent>
                  <Clear sx={{ fontSize: 16 }} />
                  Clear Sort
                </MenuItemContent>
              </MenuItem>
            )}

            <Divider />
          </>
        )}

        {/* Pin Column option - for parent columns and regular columns, NOT for sub-columns */}
        {!isChildColumn && enableUserPinning && (
          <>
            <MenuItem
              ref={pinMenuItemRef}
              $hasSubmenu
              onMouseEnter={handleShowSubmenu}
              onMouseLeave={handleHideSubmenu}
            >
              <MenuItemContent>
                <Lock sx={{ fontSize: 16 }} />
                Lock Column
              </MenuItemContent>
              <ChevronRight sx={{ fontSize: 16 }} />
            </MenuItem>

            <Divider />
          </>
        )}

        {showPinSubmenu && (
          <SubMenuContainer
            $top={submenuPosition.top}
            $left={submenuPosition.left}
            onMouseEnter={handleShowSubmenu}
            onMouseLeave={handleHideSubmenu}
          >
            <PinMenuItem
              $active={currentPinState === 'none'}
              onClick={() => handlePinChange('none')}
            >
              No Lock
            </PinMenuItem>
            <PinMenuItem
              $active={currentPinState === 'left'}
              onClick={() => handlePinChange('left')}
            >
              Lock to Left
            </PinMenuItem>
            <PinMenuItem
              $active={currentPinState === 'right'}
              onClick={() => handlePinChange('right')}
            >
              Lock to Right
            </PinMenuItem>
          </SubMenuContainer>
        )}

        <Divider />

        <MenuItem onClick={() => handleMenuItemClick(onAutosizeColumn)}>
          <MenuItemContent>
            <FitScreen sx={{ fontSize: 16 }} />
            Autosize This Column
          </MenuItemContent>
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick(onAutosizeAll)}>
          <MenuItemContent>
            <FitScreen sx={{ fontSize: 16 }} />
            Autosize All Columns
          </MenuItemContent>
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => handleMenuItemClick(onResetColumn)}>
          <MenuItemContent>
            <RestartAlt sx={{ fontSize: 16 }} />
            Reset Column
          </MenuItemContent>
        </MenuItem>
      </MenuContainer>
    </MenuOverlay>
  );
};
