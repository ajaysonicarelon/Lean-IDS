import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { Typography } from '../Typography';
import { Checkbox } from '../Checkbox';

const GroupHeaderContainer = styled.tr<{ $isExpanded: boolean }>`
  background: ${({ theme }) => theme.colors.palette.secondary.cyan[100]};
  border-bottom: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[300]};
  
  &:hover {
    background: ${({ theme }) => theme.colors.palette.secondary.cyan[200]};
  }
`;

const GroupHeaderCell = styled.td`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[7]};
  height: 48px;
`;

const GroupHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[7]};
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  flex-shrink: 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.palette.primary[400]};
  }
  
  &:focus-visible {
    outline: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.colors.palette.primary[400]};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex-shrink: 0;
`;

const CustomSlot = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[7]};
  flex: 1;
`;

export interface TableGroupHeaderProps {
  /** Group name/title */
  groupName: string;
  /** Optional short description */
  groupDescription?: string;
  /** Whether the group is expanded */
  isExpanded: boolean;
  /** Callback when expand/collapse is clicked */
  onToggle: () => void;
  /** Number of columns to span */
  colSpan: number;
  /** Position of expand/collapse button */
  expandPosition?: 'left' | 'right';
  /** Custom content to render in the header (chips, buttons, etc.) */
  customContent?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom style */
  style?: React.CSSProperties;
  /** Show checkbox for group selection */
  showCheckbox?: boolean;
  /** Whether all rows in group are selected */
  isSelected?: boolean;
  /** Whether some (but not all) rows in group are selected */
  isIndeterminate?: boolean;
  /** Callback when checkbox is clicked */
  onCheckboxChange?: (checked: boolean) => void;
}

export const TableGroupHeader: React.FC<TableGroupHeaderProps> = ({
  groupName,
  groupDescription,
  isExpanded,
  onToggle,
  colSpan,
  expandPosition = 'left',
  customContent,
  className,
  style,
  showCheckbox = false,
  isSelected = false,
  isIndeterminate = false,
  onCheckboxChange,
}) => {
  const ExpandIcon = isExpanded ? KeyboardArrowDown : KeyboardArrowRight;

  return (
    <GroupHeaderContainer 
      $isExpanded={isExpanded}
      className={className}
      style={style}
    >
      <GroupHeaderCell colSpan={colSpan}>
        <GroupHeaderContent>
          {expandPosition === 'left' && (
            <ExpandButton
              onClick={onToggle}
              aria-label={isExpanded ? 'Collapse group' : 'Expand group'}
              aria-expanded={isExpanded}
            >
              <ExpandIcon sx={{ fontSize: 24 }} />
            </ExpandButton>
          )}
          
          {showCheckbox && onCheckboxChange && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onCheckboxChange(!isSelected);
              }}
              style={{ cursor: 'pointer', display: 'inline-flex', marginRight: '8px' }}
            >
              <Checkbox
                checked={isSelected}
                onChange={() => {}} // Controlled by wrapper click
                aria-label={`Select all rows in ${groupName}`}
              />
            </div>
          )}
          
          <SectionInfo>
            <Typography 
              variant="paragraph" 
              weight="semibold"
              color="primary"
            >
              {groupName}
            </Typography>
            {groupDescription && (
              <Typography 
                variant="caption" 
                weight="medium"
                color="secondary"
                style={{ letterSpacing: '1px' }}
              >
                {groupDescription}
              </Typography>
            )}
          </SectionInfo>

          {customContent && (
            <CustomSlot>
              {customContent}
            </CustomSlot>
          )}

          {expandPosition === 'right' && (
            <ExpandButton
              onClick={onToggle}
              aria-label={isExpanded ? 'Collapse group' : 'Expand group'}
              aria-expanded={isExpanded}
              style={{ marginLeft: 'auto' }}
            >
              <ExpandIcon sx={{ fontSize: 24 }} />
            </ExpandButton>
          )}
        </GroupHeaderContent>
      </GroupHeaderCell>
    </GroupHeaderContainer>
  );
};

TableGroupHeader.displayName = 'TableGroupHeader';
