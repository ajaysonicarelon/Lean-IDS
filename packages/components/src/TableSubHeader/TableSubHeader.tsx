import React from 'react';
import { TableSubHeaderProps } from './TableSubHeader.types';
import {
  StyledTableSubHeader,
  SearchInputWrapper,
  SearchInput,
  FilterIcon,
} from './TableSubHeader.styles';

const FilterIconSvg = () => (
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
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
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
        <FilterIcon type="button" onClick={(e) => e.stopPropagation()}>
          <FilterIconSvg />
        </FilterIcon>
      </SearchInputWrapper>
    </StyledTableSubHeader>
  );
};
