import styled from 'styled-components';
import { TopHeaderMode } from './TopHeader.types';

interface StyledTopHeaderProps {
  $mode: TopHeaderMode;
  $leftOffset?: number;
}

export const StyledTopHeader = styled.header<StyledTopHeaderProps>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 100;
  
  ${({ $mode, theme }) => {
    if ($mode === 'light') {
      return `
        background-color: ${theme.colors.palette.neutral[50]};
        border-bottom: 1px solid ${theme.colors.palette.neutral[400]};
      `;
    }
    return `
      background-color: ${theme.colors.palette.primary[800]};
    `;
  }}
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
`;

export const Divider = styled.div<{ $mode: TopHeaderMode }>`
  width: 2px;
  height: 32px;
  flex-shrink: 0;
  background-color: ${({ $mode }) => $mode === 'light' ? '#464646' : '#eee'};
`;

export const AppName = styled.div<{ $mode: TopHeaderMode }>`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  flex-shrink: 0;
  color: ${({ $mode, theme }) => 
    $mode === 'light' 
      ? theme.colors.palette.neutral[800]
      : theme.colors.palette.neutral[50]
  };
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  flex-shrink: 0;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;
