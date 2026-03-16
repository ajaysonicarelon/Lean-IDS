import styled from 'styled-components';

interface StyledTableHeaderProps {
  $align?: 'left' | 'center' | 'right';
  $sortable?: boolean;
}

export const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
  height: 56px;
  text-align: ${({ $align }) => $align || 'left'};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
  cursor: ${({ $sortable }) => ($sortable ? 'pointer' : 'default')};
  user-select: none;

  &:hover {
    background-color: ${({ theme, $sortable }) =>
      $sortable ? theme.colors.palette.neutral[75] : theme.colors.palette.neutral[50]};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
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
