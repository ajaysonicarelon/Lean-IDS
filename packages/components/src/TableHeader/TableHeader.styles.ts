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
}

export const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  background-color: ${({ theme }) => theme.colors.palette.primary[50]};
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

export const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`;

export const SortIcon = styled.span<{ $direction: 'asc' | 'desc' | 'none' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  transform: ${({ $direction }) => ($direction === 'desc' ? 'rotate(180deg)' : 'none')};
  opacity: ${({ $direction }) => ($direction === 'none' ? 0.3 : 1)};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const LockIcon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.primary[500]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const ResizeHandle = styled.div`
  display: inline-flex;
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
    border-color: ${({ theme }) => theme.colors.palette.primary[500]};
  }
`;

export const SearchActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`;
