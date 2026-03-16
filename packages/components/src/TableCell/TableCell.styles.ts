import styled from 'styled-components';

interface StyledTableCellProps {
  $align?: 'left' | 'center' | 'right';
}

export const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
  height: 72px;
  text-align: ${({ $align }) => $align || 'left'};
  vertical-align: middle;
`;

export const CellContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
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
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
  white-space: nowrap;
`;

export const UserRole = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.palette.neutral[500]};
  white-space: nowrap;
`;

export const NumberText = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.21px;
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
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
  color: ${({ theme }) => theme.colors.palette.neutral[700]};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const RegularText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[700]};
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
