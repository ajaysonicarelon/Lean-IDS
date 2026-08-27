import React, { useState, useRef } from 'react';
import { TableHeaderProps } from './TableHeader.types';
import { ColumnMenu } from './ColumnMenu';
import {
  StyledTableHeader,
  HeaderContent,
  HeaderLeftContent,
  HeaderRightContent,
  HeaderLabel,
  SortIcon,
  CheckboxWrapper,
  ResizeHandle,
  ResizeBorder,
  SearchInputWrapper,
  SearchInput,
  SearchActions,
} from './TableHeader.styles';
import { Checkbox } from '../Checkbox';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Lock from '@mui/icons-material/Lock';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import DragIndicator from '@mui/icons-material/DragIndicator';

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  variant = 'default',
  side = 'middle',
  sortable = false,
  sortDirection = 'none',
  onSort,
  onSortNone,
  showCheckbox = false,
  checked = false,
  indeterminate = false,
  onCheckChange,
  locked = false,
  pinned = 'none',
  onPinChange,
  onAutosizeColumn,
  onAutosizeAll,
  onResetColumn,
  showColumnMenu = true,
  enableUserPinning = true,
  leftOffset = 0,
  rightOffset = 0,
  isChildColumn = false,
  hasSubColumns = false,
  showPinBorder = false,
  resizable = false,
  onResize,
  initialWidth,
  searchValue = '',
  searchPlaceholder = 'Search',
  onSearchChange,
  align = 'left',
  width,
  minWidth,
  maxWidth,
  className,
  subHeader,
  subHeaderSpan = 1,
  isFirstInGroup = false,
  isLastInGroup = false,
  colSpan,
  rowSpan,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const headerRef = useRef<HTMLTableCellElement>(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);
  const lastResizedWidthRef = useRef(0);

  const handleSortClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (sortable && onSort && variant !== 'search') {
      onSort();
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckChange) {
      onCheckChange(e.target.checked);
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMenuAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMenuAnchorEl(null);
  };

  const handleSortAscending = () => {
    if (onSort) {
      // Call onSort twice if currently desc to get to asc
      // This assumes onSort cycles through: none -> asc -> desc -> none
      onSort();
    }
  };

  const handleSortDescending = () => {
    if (onSort) {
      onSort();
    }
  };

  const handleSortNone = () => {
    if (onSortNone) {
      onSortNone();
    }
  };

  const handlePinChange = (pinState: 'none' | 'left' | 'right') => {
    if (onPinChange) {
      onPinChange(pinState);
    }
  };

  const handleAutosizeColumn = () => {
    if (onAutosizeColumn) {
      onAutosizeColumn();
    }
  };

  const handleAutosizeAll = () => {
    if (onAutosizeAll) {
      onAutosizeAll();
    }
  };

  const handleResetColumn = () => {
    if (onResetColumn) {
      onResetColumn();
    }
  };

  // Removed handleLockClick and handlePinClick - using menu actions instead

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  const handleResizeDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Reset to initial width on double-click
    if (initialWidth && onResize) {
      onResize(initialWidth);
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    startXRef.current = e.clientX;
    
    // Use the width prop as the source of truth (controlled by <col> element)
    // Only fall back to DOM offsetWidth if no width prop is provided
    if (width !== undefined) {
      startWidthRef.current = typeof width === 'number' ? width : parseInt(width, 10);
    } else if (headerRef.current) {
      startWidthRef.current = headerRef.current.offsetWidth;
    }
    
    // Initialize last resized width to current width
    lastResizedWidthRef.current = startWidthRef.current;
  };

  React.useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current || !onResize) return;
      
      const diff = e.clientX - startXRef.current;
      const newWidth = startWidthRef.current + diff;
      
      // Parse minWidth and maxWidth props
      const minWidthValue = minWidth 
        ? (typeof minWidth === 'number' ? minWidth : parseInt(minWidth, 10))
        : 80; // Default minimum
      
      const maxWidthValue = maxWidth
        ? (typeof maxWidth === 'number' ? maxWidth : parseInt(maxWidth, 10))
        : Infinity; // No maximum by default
      
      // Clamp width between min and max
      const clampedWidth = Math.max(minWidthValue, Math.min(maxWidthValue, newWidth));
      
      // Change cursor style when hitting limits
      if (clampedWidth === minWidthValue && newWidth < minWidthValue) {
        document.body.style.cursor = 'w-resize'; // Hit min, can only go right
      } else if (clampedWidth === maxWidthValue && newWidth > maxWidthValue) {
        document.body.style.cursor = 'e-resize'; // Hit max, can only go left
      } else {
        document.body.style.cursor = 'col-resize'; // Normal resize
      }
      
      // Only call onResize if width actually changed from last resized value
      // This prevents unnecessary re-renders when dragging beyond limits
      if (clampedWidth !== lastResizedWidthRef.current) {
        lastResizedWidthRef.current = clampedWidth;
        onResize(clampedWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = ''; // Reset cursor
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, onResize, minWidth, maxWidth]);

  const showResizeHandle = (variant === 'resizeable' || variant === 'resizeable-locked') && resizable;
  const isSearchVariant = variant === 'search';

  return (
    <StyledTableHeader
      ref={headerRef}
      $align={align}
      $sortable={sortable && !isSearchVariant}
      $variant={variant}
      $side={side}
      $resizable={resizable}
      $locked={locked}
      $pinned={pinned}
      $leftOffset={leftOffset}
      $rightOffset={rightOffset}
      $showPinBorder={showPinBorder}
      $sortDirection={sortDirection}
      $showCheckbox={showCheckbox}
      $hasLabel={!!label}
      className={className}
      data-locked={locked ? 'true' : undefined}
      colSpan={colSpan}
      rowSpan={rowSpan}
      style={width !== undefined ? {
        width: typeof width === 'number' ? `${width}px` : width,
        minWidth: typeof width === 'number' ? `${width}px` : width,
        maxWidth: typeof width === 'number' ? `${width}px` : width,
      } : undefined}
    >
      {isSearchVariant ? (
        <HeaderContent $variant={variant}>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              value={searchValue}
              placeholder={searchPlaceholder}
              onChange={handleSearchChange}
              onClick={(e) => e.stopPropagation()}
            />
          </SearchInputWrapper>
          <HeaderRightContent>
            <SearchActions>
              {sortable && (
                <SortIcon $direction={sortDirection}>
                  {sortDirection === 'asc' ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
                </SortIcon>
              )}
            </SearchActions>
            {showResizeHandle && (
              <ResizeHandle onMouseDown={handleResizeStart}>
                <DragIndicator sx={{ fontSize: 16 }} />
              </ResizeHandle>
            )}
          </HeaderRightContent>
        </HeaderContent>
      ) : (
        <HeaderContent $variant={variant}>
          <HeaderLeftContent>
            {showCheckbox && (
              <CheckboxWrapper>
                <Checkbox
                  checked={checked}
                  indeterminate={indeterminate}
                  onChange={handleCheckboxChange}
                  onClick={(e) => e.stopPropagation()}
                />
              </CheckboxWrapper>
            )}
            {sortable ? (
              // Sortable: Wrap label and icon in larger clickable area
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  padding: '8px 4px',
                  margin: '-8px -4px',
                  flex: 1,
                  minWidth: 0,
                }}
                onClick={handleSortClick}
              >
                {label && (
                  subHeader ? (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative', minWidth: 0 }}>
                      {/* Parent header spanning across columns */}
                      {isFirstInGroup && (
                        <div style={{
                          position: 'absolute',
                          top: '-12px',
                          left: isFirstInGroup ? '0' : undefined,
                          right: isLastInGroup ? '0' : undefined,
                          width: isFirstInGroup ? `calc(${subHeaderSpan * 100}% + ${(subHeaderSpan - 1) * 1}px)` : undefined,
                          fontSize: '12px',
                          fontWeight: 500,
                          textAlign: 'center',
                          paddingBottom: '4px',
                          borderBottom: '1px solid',
                          borderColor: 'inherit',
                        }}>
                          {subHeader}
                        </div>
                      )}
                      <HeaderLabel style={{ marginTop: isFirstInGroup ? '16px' : '0' }}>{label}</HeaderLabel>
                    </div>
                  ) : (
                    <HeaderLabel>{label}</HeaderLabel>
                  )
                )}
                <SortIcon $direction={sortDirection}>
                  {sortDirection === 'asc' ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
                </SortIcon>
              </div>
            ) : (
              // Non-sortable: Just display label
              <>
                {label && (
                  subHeader ? (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative', minWidth: 0 }}>
                      {/* Parent header spanning across columns */}
                      {isFirstInGroup && (
                        <div style={{
                          position: 'absolute',
                          top: '-12px',
                          left: isFirstInGroup ? '0' : undefined,
                          right: isLastInGroup ? '0' : undefined,
                          width: isFirstInGroup ? `calc(${subHeaderSpan * 100}% + ${(subHeaderSpan - 1) * 1}px)` : undefined,
                          fontSize: '12px',
                          fontWeight: 500,
                          textAlign: 'center',
                          paddingBottom: '4px',
                          borderBottom: '1px solid',
                          borderColor: 'inherit',
                        }}>
                          {subHeader}
                        </div>
                      )}
                      <HeaderLabel style={{ marginTop: isFirstInGroup ? '16px' : '0' }}>{label}</HeaderLabel>
                    </div>
                  ) : (
                    <HeaderLabel>{label}</HeaderLabel>
                  )
                )}
              </>
            )}
            {/* Show lock indicator (clickable to unpin) when column is pinned or locked */}
            {!isChildColumn && !showCheckbox && (() => {
              const currentPinned = pinned || (locked ? 'left' : 'none');
              
              // Only show indicator if actually pinned or locked
              if (currentPinned === 'none') return null;
              
              const PinIcon = Lock; // Use Lock icon for all pinned columns
              const tooltipText = currentPinned === 'left' ? 'Locked to left (click to unlock)' : 'Locked to right (click to unlock)';
              
              const handleUnpin = (e: React.MouseEvent) => {
                e.stopPropagation();
                if (onPinChange) {
                  onPinChange('none');
                }
              };
              
              return (
                <button
                  onClick={handleUnpin}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: '0 0 0 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    color: '#A5B4FC',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A5B4FC'}
                  title={tooltipText}
                >
                  <PinIcon sx={{ fontSize: 16 }} />
                </button>
              );
            })()}
          </HeaderLeftContent>
          <HeaderRightContent>
            {/* Three-dot menu button - hide for checkbox columns and when showColumnMenu is false */}
            {!showCheckbox && showColumnMenu && (
              <button
                onClick={handleMenuClick}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: '0 8px 0 0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '16px',
                  height: '16px',
                  color: '#94A3B8',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64748B'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                title="Column options"
              >
                <MoreHoriz sx={{ fontSize: 16 }} />
              </button>
            )}
            {showResizeHandle && (
              <ResizeHandle 
                onMouseDown={handleResizeStart}
                onDoubleClick={handleResizeDoubleClick}
                title="Double-click to reset width"
              >
                <DragIndicator sx={{ fontSize: 16 }} />
              </ResizeHandle>
            )}
          </HeaderRightContent>
        </HeaderContent>
      )}
      {/* Resize border - half-height border on right side for resizing */}
      {resizable && (
        <ResizeBorder 
          onMouseDown={handleResizeStart}
          onDoubleClick={handleResizeDoubleClick}
          title="Double-click to reset width"
        />
      )}

      {/* Column Menu */}
      <ColumnMenu
        anchorEl={menuAnchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        onSortAscending={handleSortAscending}
        onSortDescending={handleSortDescending}
        onSortNone={handleSortNone}
        onPinChange={handlePinChange}
        onAutosizeColumn={handleAutosizeColumn}
        onAutosizeAll={handleAutosizeAll}
        onResetColumn={handleResetColumn}
        currentPinState={pinned || (locked ? 'left' : 'none')}
        currentSortDirection={sortDirection}
        isParentWithSubColumns={hasSubColumns}
        isChildColumn={isChildColumn}
        enableUserPinning={enableUserPinning}
      />
    </StyledTableHeader>
  );
};
