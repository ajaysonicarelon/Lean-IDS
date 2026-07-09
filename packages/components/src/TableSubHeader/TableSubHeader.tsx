import React from 'react';
import { TableSubHeaderProps } from './TableSubHeader.types';
import {
  StyledTableSubHeader,
  SearchInputWrapper,
  SearchInput,
  FilterIcon,
} from './TableSubHeader.styles';

// Clear filter icon (X)
const ClearIconSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4l8 8M12 4l-8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Advanced filter icon (funnel with settings)
const AdvancedFilterIconSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4h12M4 8h8M6 12h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TableSubHeader: React.FC<TableSubHeaderProps> = ({
  searchValue = '',
  searchPlaceholder = 'Search',
  onSearchChange,
  locked = false,
  leftOffset = 0,
  width,
  className,
  showClearFilter = true,
  onClearFilter,
  showAdvancedFilter = false,
  onAdvancedFilter,
  customActions = [],
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  const handleClearFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClearFilter) {
      onClearFilter();
    } else if (onSearchChange) {
      // Default behavior: clear the search value
      onSearchChange('');
    }
  };

  const handleAdvancedFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAdvancedFilter) {
      onAdvancedFilter();
    }
  };

  return (
    <StyledTableSubHeader
      $locked={locked}
      $leftOffset={leftOffset}
      style={{ width }}
      className={className}
      data-locked={locked ? 'true' : undefined}
    >
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={handleSearchChange}
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Clear Filter Button (default) */}
        {showClearFilter && (
          <FilterIcon 
            type="button" 
            onClick={handleClearFilter}
            title="Clear filter"
          >
            <ClearIconSvg />
          </FilterIcon>
        )}
        
        {/* Advanced Filter Button */}
        {showAdvancedFilter && (
          <FilterIcon 
            type="button" 
            onClick={handleAdvancedFilter}
            title="Advanced filter"
          >
            <AdvancedFilterIconSvg />
          </FilterIcon>
        )}
        
        {/* Custom Action Buttons */}
        {customActions.map((action, index) => (
          <FilterIcon
            key={index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              action.onClick();
            }}
            title={action.title}
          >
            {action.icon}
          </FilterIcon>
        ))}
      </SearchInputWrapper>
    </StyledTableSubHeader>
  );
};
