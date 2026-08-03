import React, { useState, useRef } from 'react';
import { TableHeaderProps } from './TableHeader.types';
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


const LockClosedIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z" fill="currentColor"/>
  </svg>
);

const ResizeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7.5" y="4" width="1" height="8" rx="0.5" fill="currentColor"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
  </svg>
);

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  variant = 'default',
  side = 'middle',
  sortable = false,
  sortDirection = 'none',
  onSort,
  showCheckbox = false,
  checked = false,
  indeterminate = false,
  onCheckChange,
  locked = false,
  onLockToggle,
  leftOffset = 0,
  isChildColumn = false,
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

  const handleLockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLockToggle) {
      onLockToggle();
    }
  };

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
      $leftOffset={leftOffset}
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
                <ResizeIcon />
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
            {locked && !isChildColumn && !showCheckbox && (
              onLockToggle ? (
                <button
                  onClick={handleLockClick}
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
                  title="Unlock column"
                >
                  <LockClosedIcon />
                </button>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    margin: '0 0 0 8px',
                    color: '#A5B4FC',
                  }}
                  title="Column is locked"
                >
                  <LockClosedIcon />
                </div>
              )
            )}
          </HeaderLeftContent>
          {showResizeHandle && (
            <HeaderRightContent>
              <ResizeHandle 
                onMouseDown={handleResizeStart}
                onDoubleClick={handleResizeDoubleClick}
                title="Double-click to reset width"
              >
                <ResizeIcon />
              </ResizeHandle>
            </HeaderRightContent>
          )}
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
    </StyledTableHeader>
  );
};
