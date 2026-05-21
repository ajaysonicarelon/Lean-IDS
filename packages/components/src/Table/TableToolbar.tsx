/**
 * TableToolbar Component
 * 
 * Header section for tables with:
 * - Table title and description
 * - Global search
 * - Filter dropdown
 * - Download button
 * - Settings button
 */

import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { InputField } from '../InputField';
import { Button } from '../Button';

// ============================================================================
// TYPES
// ============================================================================

export interface FilterOption {
  id: string;
  label: string;
  value: any;
}

export interface TableToolbarProps {
  /** Table title */
  title?: string;
  /** Table description */
  description?: string;
  /** Show global search */
  showSearch?: boolean;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Show filter dropdown */
  showFilter?: boolean;
  /** Filter options */
  filterOptions?: FilterOption[];
  /** Selected filter */
  selectedFilter?: string;
  /** Filter change handler */
  onFilterChange?: (filterId: string) => void;
  /** Show download button */
  showDownload?: boolean;
  /** Download handler */
  onDownload?: () => void;
  /** Download formats */
  downloadFormats?: Array<{ label: string; format: string }>;
  /** Show settings button */
  showSettings?: boolean;
  /** Settings click handler */
  onSettingsClick?: () => void;
  /** Custom actions */
  customActions?: React.ReactNode;
  /** Selected rows count */
  selectedCount?: number;
  /** Bulk actions when rows are selected */
  bulkActions?: React.ReactNode;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[300] || '#E5E7EB'};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
`;

const ToolbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.semantic?.text?.primary || '#111827'};
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.semantic?.text?.secondary || '#6B7280'};
`;

const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToolbarControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
`;

const FilterButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors?.palette?.primary?.[50] || '#EEF2FF' : '#ffffff'};
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[300] || '#E5E7EB'};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors?.palette?.primary?.[700] || '#4338CA' : '#374151'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors?.palette?.neutral?.[50] || '#F9FAFB'};
    border-color: ${({ theme }) => theme.colors?.palette?.neutral?.[400] || '#D1D5DB'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[300] || '#E5E7EB'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors?.palette?.neutral?.[50] || '#F9FAFB'};
    border-color: ${({ theme }) => theme.colors?.palette?.neutral?.[400] || '#D1D5DB'};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BulkActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors?.palette?.primary?.[50] || '#EEF2FF'};
  border: 1px solid ${({ theme }) => theme.colors?.palette?.primary?.[200] || '#C7D2FE'};
  border-radius: 6px;
`;

const SelectedCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.palette?.primary?.[700] || '#4338CA'};
`;

const DownloadMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const DownloadDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.palette?.neutral?.[300] || '#E5E7EB'};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 150px;
`;

const DownloadOption = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors?.palette?.neutral?.[50] || '#F9FAFB'};
  }

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const TableToolbar: React.FC<TableToolbarProps> = ({
  title,
  description,
  showSearch = true,
  searchPlaceholder = 'Search...',
  searchValue = '',
  onSearchChange,
  showFilter = false,
  filterOptions = [],
  selectedFilter,
  onFilterChange,
  showDownload = true,
  onDownload,
  downloadFormats = [
    { label: 'Download as CSV', format: 'csv' },
    { label: 'Download as Excel', format: 'xlsx' },
    { label: 'Download as PDF', format: 'pdf' },
  ],
  showSettings = true,
  onSettingsClick,
  customActions,
  selectedCount = 0,
  bulkActions,
}) => {
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);

  const handleDownload = (format: string) => {
    setDownloadMenuOpen(false);
    if (onDownload) {
      onDownload();
    }
    console.log('Download as:', format);
  };

  return (
    <ToolbarContainer>
      {/* Header with title and actions */}
      <ToolbarHeader>
        {(title || description) && (
          <TitleSection>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </TitleSection>
        )}

        <ActionsSection>
          {customActions}
          
          {showDownload && (
            <DownloadMenu>
              <IconButton
                onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
                title="Download"
              >
                <Icon name="Download" size="small" />
              </IconButton>
              
              {downloadMenuOpen && (
                <DownloadDropdown>
                  {downloadFormats.map((format) => (
                    <DownloadOption
                      key={format.format}
                      onClick={() => handleDownload(format.format)}
                    >
                      <Icon name="Download" size="small" />
                      {format.label}
                    </DownloadOption>
                  ))}
                </DownloadDropdown>
              )}
            </DownloadMenu>
          )}

          {showSettings && (
            <IconButton onClick={onSettingsClick} title="Settings">
              <Icon name="Settings" size="small" />
            </IconButton>
          )}
        </ActionsSection>
      </ToolbarHeader>

      {/* Bulk actions bar (shown when rows are selected) */}
      {selectedCount > 0 && bulkActions && (
        <BulkActionsBar>
          <SelectedCount>{selectedCount} selected</SelectedCount>
          {bulkActions}
        </BulkActionsBar>
      )}

      {/* Search and filter controls */}
      {(showSearch || showFilter) && (
        <ToolbarControls>
          {showSearch && (
            <SearchContainer>
              <InputField
                type="text"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                size="medium"
              />
            </SearchContainer>
          )}

          {showFilter && filterOptions.length > 0 && (
            <FilterButton
              $isActive={!!selectedFilter}
              onClick={() => {
                // Toggle filter menu - you can implement a dropdown here
                console.log('Filter clicked');
              }}
            >
              <Icon name="FilterAlt" size="small" />
              Filter
              {selectedFilter && ` (${filterOptions.find(f => f.id === selectedFilter)?.label})`}
            </FilterButton>
          )}
        </ToolbarControls>
      )}
    </ToolbarContainer>
  );
};
