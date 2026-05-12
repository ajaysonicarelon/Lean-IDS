import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]}; // 8px
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 33px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]}; // gray-900
  margin: 0;
`;

export const PageDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  margin: 0;
`;
