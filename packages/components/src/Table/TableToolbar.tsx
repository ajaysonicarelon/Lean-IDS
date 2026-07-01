/**
 * TableToolbar Component
 * 
 * Clean header section for tables with:
 * - Table title
 * - Dropdown selector
 * - Download button
 * - Filter button
 * - Settings button
 */

import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Button } from '../Button';

// ============================================================================
// TYPES
// ============================================================================

export interface DropdownOption {
  label: string;
  value: string;
}

export interface TableToolbarProps {
  /** Table title */
  title?: string;
  /** Show dropdown selector */
  showDropdown?: boolean;
  /** Dropdown options */
  dropdownOptions?: DropdownOption[];
  /** Selected dropdown value */
  dropdownValue?: string;
  /** Dropdown change handler */
  onDropdownChange?: (value: string) => void;
  /** Dropdown placeholder/label */
  dropdownLabel?: string;
  /** Show global search */
  showGlobalSearch?: boolean;
  /** Global search value */
  globalSearchValue?: string;
  /** Global search change handler */
  onGlobalSearchChange?: (value: string) => void;
  /** Global search placeholder */
  globalSearchPlaceholder?: string;
  /** Show download button */
  showDownload?: boolean;
  /** Download handler */
  onDownload?: () => void;
  /** Show filter button */
  showFilter?: boolean;
  /** Filter handler */
  onFilter?: () => void;
  /** Show settings button */
  showSettings?: boolean;
  /** Settings click handler */
  onSettingsClick?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.semantic?.text?.primary || '#111827'};
  margin: 0;
`;

const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Dropdown = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[400] || '#b1b1b1'};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({ theme }) => theme.colors?.semantic?.text?.primary || '#111827'};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors?.palette?.primary?.[500] || '#3b82f6'};
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[300] || '#d1d5db'};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({ theme }) => theme.colors?.semantic?.text?.primary || '#111827'};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors?.palette?.neutral?.[500] || '#6b7280'};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors?.palette?.primary?.[500] || '#3b82f6'};
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors?.palette?.neutral?.[500] || '#6b7280'};
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const TableToolbar: React.FC<TableToolbarProps> = ({
  title,
  showDropdown = false,
  dropdownOptions = [],
  dropdownValue,
  onDropdownChange,
  dropdownLabel = 'Select',
  showGlobalSearch = false,
  globalSearchValue = '',
  onGlobalSearchChange,
  globalSearchPlaceholder = 'Search...',
  showDownload = true,
  onDownload,
  showFilter = true,
  onFilter,
  showSettings = true,
  onSettingsClick,
}) => {
  return (
    <ToolbarContainer>
      {title && <Title>{title}</Title>}

      <ActionsSection>
        {showGlobalSearch && (
          <SearchInputWrapper>
            <SearchIconWrapper>
              <Icon name="Search" size="small" />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              value={globalSearchValue}
              onChange={(e) => onGlobalSearchChange?.(e.target.value)}
              placeholder={globalSearchPlaceholder}
            />
          </SearchInputWrapper>
        )}

        {showDropdown && dropdownOptions.length > 0 && (
          <Dropdown
            value={dropdownValue}
            onChange={(e) => onDropdownChange?.(e.target.value)}
          >
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Dropdown>
        )}

        {showDownload && (
          <Button
            variant="secondary"
            size="medium"
            showLabel={false}
            leadingIcon={<Icon name="Download" size="medium" />}
            onClick={onDownload}
            aria-label="Download"
          >
            Download
          </Button>
        )}

        {showFilter && (
          <Button
            variant="secondary"
            size="medium"
            showLabel={false}
            leadingIcon={<Icon name="FilterAlt" size="medium" />}
            onClick={onFilter}
            aria-label="Filter"
          >
            Filter
          </Button>
        )}

        {showSettings && (
          <Button
            variant="secondary"
            size="medium"
            showLabel={false}
            leadingIcon={<Icon name="Settings" size="medium" />}
            onClick={onSettingsClick}
            aria-label="Settings"
          >
            Settings
          </Button>
        )}
      </ActionsSection>
    </ToolbarContainer>
  );
};
