import React, { useState } from 'react';
import { PaginationProps } from './Pagination.types';
import {
  PaginationContainer,
  LeftSection,
  Summary,
  Divider,
  RowSelector,
  Label,
  Dropdown,
  PaginatorContainer,
  PageButton,
  NavButton,
  Ellipsis,
  RightSection,
  GoToPageInput,
} from './Pagination.styles';

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.06 12L6 8L10.06 4L11 4.94L7.88667 8L11 11.06L10.06 12Z" fill="currentColor"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.94 4L10 8L5.94 12L5 11.06L8.11333 8L5 4.94L5.94 4Z" fill="currentColor"/>
  </svg>
);

const FirstPageIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.11333 8L10 11.8867L9.06 12.8267L4.23333 8L9.06 3.17333L10 4.11333L6.11333 8Z" fill="currentColor"/>
    <path d="M3 3H4.33333V13H3V3Z" fill="currentColor"/>
  </svg>
);

const LastPageIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.88667 8L6 4.11333L6.94 3.17333L11.7667 8L6.94 12.8267L6 11.8867L9.88667 8Z" fill="currentColor"/>
    <path d="M13 13H11.6667V3H13V13Z" fill="currentColor"/>
  </svg>
);

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  variant = 'default',
  itemsPerPageOptions = [10, 25, 50, 100],
  className,
}) => {
  const [goToPage, setGoToPage] = useState('');

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handleGoToPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const pageNum = parseInt(goToPage, 10);
      if (pageNum >= 1 && pageNum <= totalPages) {
        onPageChange(pageNum);
        setGoToPage('');
      }
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
      } else if (currentPage >= totalPages - 2) {
        pages.push('...');
        for (let i = totalPages - 3; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <PaginationContainer className={className}>
      <LeftSection>
        <Summary>
          {startItem}-{endItem} of {totalItems}
        </Summary>
        <Divider />
        <RowSelector>
          <Label>Rows per page</Label>
          <Dropdown
            as="select"
            value={itemsPerPage}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const newValue = parseInt(e.target.value, 10);
              if (onItemsPerPageChange) {
                onItemsPerPageChange(newValue);
              }
            }}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Dropdown>
        </RowSelector>
      </LeftSection>

      <PaginatorContainer>
        <NavButton
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <FirstPageIcon />
        </NavButton>
        <NavButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </NavButton>

        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <PageButton
              key={`page-${page}`}
              $active={page === currentPage}
              $variant={variant}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          ) : (
            <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
          )
        )}

        <NavButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRightIcon />
        </NavButton>
        <NavButton
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <LastPageIcon />
        </NavButton>
      </PaginatorContainer>

      <RightSection>
        <Label>Go to Page</Label>
        <GoToPageInput
          type="number"
          min="1"
          max={totalPages}
          value={goToPage}
          onChange={(e) => setGoToPage(e.target.value)}
          onKeyDown={handleGoToPage}
          placeholder={currentPage.toString()}
        />
      </RightSection>
    </PaginationContainer>
  );
};
