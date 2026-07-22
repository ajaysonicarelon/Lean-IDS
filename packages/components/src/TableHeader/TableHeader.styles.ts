import styled from 'styled-components';
import { TableHeaderVariant, TableHeaderSide } from './TableHeader.types';

interface StyledTableHeaderProps {
  $align?: 'left' | 'center' | 'right';
  $sortable?: boolean;
  $variant?: TableHeaderVariant;
  $side?: TableHeaderSide;
  $resizable?: boolean;
  $locked?: boolean;
  $leftOffset?: number;
  $sortDirection?: 'asc' | 'desc' | 'none';
  $showCheckbox?: boolean;
  $hasLabel?: boolean;
}

export const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  background-color: ${({ theme, $sortDirection }) => 
    $sortDirection && $sortDirection !== 'none' 
      ? theme.colors.palette.primary[100] 
      : theme.colors.palette.primary[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[7]}`};
  height: 56px;
  text-align: ${({ $align }) => $align || 'left'};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  white-space: nowrap;
  cursor: ${({ $sortable }) => ($sortable ? 'pointer' : 'default')};
  user-select: none;
  vertical-align: middle;
  position: relative;
  
  /* Fixed width for checkbox-only columns */
  ${({ $showCheckbox, $hasLabel, $sortable }) =>
    $showCheckbox && !$hasLabel && !$sortable
      ? `
    width: 56px;
    min-width: 56px;
    max-width: 56px;
  `
      : ''}
  
  ${({ $side }) => {
    if ($side === 'left') {
      return 'border-top-left-radius: 8px;';
    }
    if ($side === 'right') {
      return 'border-top-right-radius: 8px;';
    }
    return '';
  }}

  ${({ $locked, $leftOffset, theme }) =>
    $locked
      ? `
    position: sticky;
    left: ${$leftOffset || 0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${theme.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `
      : ''}

  &:hover {
    background-color: ${({ theme, $sortable }) =>
      $sortable ? theme.colors.palette.primary[100] : theme.colors.palette.primary[50]};
  }
`;

export const HeaderContent = styled.div<{ $variant?: TableHeaderVariant }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  ${({ $variant }) => 
    $variant === 'search' ? 'justify-content: space-between;' : ''}
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
  min-width: 0;
`;

export const HeaderLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;

export const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`;

export const SortIcon = styled.span<{ $direction: 'asc' | 'desc' | 'none' }>`
  display: ${({ $direction }) => ($direction === 'none' ? 'none' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResizeHandle = styled.div`
  display: none; /* Hidden - using ResizeBorder instead */
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  cursor: col-resize;
  flex-shrink: 0;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.primary[500]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const ResizeBorder = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 50%;
  cursor: col-resize;
  user-select: none;
  z-index: 2;
  
  /* Visual border - half height, centered vertically */
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.palette.neutral[400]};
    transition: background-color 0.2s ease;
  }
  
  /* Hover state */
  &:hover::before {
    background-color: ${({ theme }) => theme.colors.palette.primary[500]};
  }
  
  /* Active/dragging state */
  &:active::before {
    background-color: ${({ theme }) => theme.colors.palette.primary[600]};
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[500]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[500]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.semantic.focus.input};
  }
`;

export const SearchActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`;
