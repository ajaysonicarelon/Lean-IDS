import React, { useState, useRef } from 'react';
import { TableHeaderProps } from './TableHeader.types';
import {
  StyledTableHeader,
  HeaderContent,
  HeaderLeftContent,
  HeaderRightContent,
  SortIcon,
  CheckboxWrapper,
  LockIcon,
  ResizeHandle,
  SearchInputWrapper,
  SearchInput,
  SearchActions,
} from './TableHeader.styles';
import { Checkbox } from '../Checkbox';

const ArrowDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11L4 7H12L8 11Z" fill="currentColor"/>
  </svg>
);

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
  resizable = false,
  onResize,
  searchValue = '',
  searchPlaceholder = 'Search',
  onSearchChange,
  align = 'left',
  width,
  className,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const headerRef = useRef<HTMLTableCellElement>(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const handleClick = () => {
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

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    startXRef.current = e.clientX;
    if (headerRef.current) {
      startWidthRef.current = headerRef.current.offsetWidth;
    }
  };

  React.useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current || !onResize) return;
      const diff = e.clientX - startXRef.current;
      const newWidth = startWidthRef.current + diff;
      onResize(Math.max(50, newWidth));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, onResize]);

  const showLockIcon = (variant === 'locked' || variant === 'resizeable-locked') && onLockToggle;
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
      onClick={handleClick}
      style={{ width }}
      className={className}
      data-locked={locked ? 'true' : undefined}
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
                  <ArrowDownIcon />
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
            <span>{label}</span>
            {sortable && (
              <SortIcon $direction={sortDirection}>
                <ArrowDownIcon />
              </SortIcon>
            )}
            {showLockIcon && (
              <LockIcon onClick={handleLockClick} aria-label="Toggle column lock">
                <LockClosedIcon />
              </LockIcon>
            )}
          </HeaderLeftContent>
          {showResizeHandle && (
            <HeaderRightContent>
              <ResizeHandle onMouseDown={handleResizeStart}>
                <ResizeIcon />
              </ResizeHandle>
            </HeaderRightContent>
          )}
        </HeaderContent>
      )}
    </StyledTableHeader>
  );
};
