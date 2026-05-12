import styled from 'styled-components';
import { PaginationVariant } from './Pagination.types';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const Summary = styled.p`
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  line-height: ${({ theme }) => theme.typography.body.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  white-space: nowrap;
`;

export const Divider = styled.div`
  width: 0;
  height: 21px;
  border-left: 1px solid ${({ theme }) => theme.colors.palette.neutral[500]};
`;

export const RowSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  line-height: ${({ theme }) => theme.typography.body.medium.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body.medium.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  white-space: nowrap;
`;

export const Dropdown = styled.select`
  height: 32px;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[9]} ${theme.spacing[3]} ${theme.spacing[5]}`};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[500]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.94 5.72667L8 8.78L11.06 5.72667L12 6.66667L8 10.6667L4 6.66667L4.94 5.72667Z' fill='%23000000'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.palette.neutral[800]};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  option {
    padding: ${({ theme }) => theme.spacing[3]};
    background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
    color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  }
`;

export const PaginatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-family: ${({ theme }) => theme.typography.body.medium.fontFamily};
  font-weight: ${({ theme }) => theme.typography.body.medium.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.medium.fontSize};
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const GoToPageInput = styled.input`
  width: 47px;
  height: 32px;
  padding: ${({ theme }) => theme.spacing[3]};
  font-family: ${({ theme }) => theme.typography.paragraph.regular.fontFamily};
  font-weight: ${({ theme }) => theme.typography.paragraph.regular.fontWeight};
  font-size: ${({ theme }) => theme.typography.paragraph.regular.fontSize};
  line-height: ${({ theme }) => theme.typography.paragraph.regular.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.paragraph.regular.letterSpacing};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[500]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.neutral[500]};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.semantic.focus.input};
  }
`;
