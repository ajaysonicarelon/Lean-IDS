import styled from 'styled-components';

interface StyledTableCellProps {
  $align?: 'left' | 'center' | 'right';
  $selected?: boolean;
  $isFirst?: boolean;
  $locked?: boolean;
  $leftOffset?: number;
}

export const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${({ theme, $selected, $locked }) => 
    $locked ? theme.colors.palette.primary[50] : $selected ? theme.colors.palette.primary[50] : theme.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-left: ${({ theme, $selected, $isFirst }) => 
    $selected && $isFirst ? `2px solid ${theme.colors.palette.primary[500]}` : 'none'};
  padding: ${({ theme, $selected, $isFirst }) => 
    $selected && $isFirst 
      ? `${theme.spacing[3]} ${theme.spacing[7]} ${theme.spacing[3]} calc(${theme.spacing[7]} - 2px)` 
      : `${theme.spacing[3]} ${theme.spacing[7]}`};
  height: 72px;
  text-align: ${({ $align }) => $align || 'left'};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
  ${({ $locked, $leftOffset, theme }) =>
    $locked
      ? `
    position: sticky;
    left: ${$leftOffset || 0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${theme.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `
      : ''}
`;

export const CellContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[7]};
  flex-wrap: nowrap;
`;

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

export const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarPlaceholder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.palette.neutral[700]};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex-shrink: 0;
`;

export const UserName = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

export const UserRole = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  white-space: nowrap;
`;

export const NumberText = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const AmountText = styled(NumberText)`
  text-align: right;
`;

export const DateText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const RegularText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.primary[500]};
  }

  &:active {
    color: ${({ theme }) => theme.colors.palette.primary[600]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
