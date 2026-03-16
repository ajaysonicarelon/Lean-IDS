import React from 'react';
import { TableHeaderProps } from './TableHeader.types';
import { StyledTableHeader, HeaderContent, SortIcon, CheckboxWrapper } from './TableHeader.styles';
import { Checkbox } from '../Checkbox';

const ArrowDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11L4 7H12L8 11Z" fill="currentColor"/>
  </svg>
);

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  sortable = false,
  sortDirection = 'none',
  onSort,
  showCheckbox = false,
  checked = false,
  indeterminate = false,
  onCheckChange,
  align = 'left',
  width,
  className,
}) => {
  const handleClick = () => {
    if (sortable && onSort) {
      onSort();
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckChange) {
      onCheckChange(e.target.checked);
    }
  };

  return (
    <StyledTableHeader
      $align={align}
      $sortable={sortable}
      onClick={handleClick}
      style={{ width }}
      className={className}
    >
      <HeaderContent>
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
        <span>{label}</span>
        {sortable && (
          <SortIcon $direction={sortDirection}>
            <ArrowDownIcon />
          </SortIcon>
        )}
      </HeaderContent>
    </StyledTableHeader>
  );
};
