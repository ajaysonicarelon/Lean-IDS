import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 24px;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.palette.neutral[400]};
  overflow: hidden;
  white-space: nowrap;
`;

export const LastUpdated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  flex-shrink: 0;
`;

export const Version = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
  flex-shrink: 0;
`;

export const FeedbackSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #6c6c6c;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const FeedbackLink = styled.a`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #0064ef;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
  
  &:hover {
    color: #0052cc;
  }
  
  &:active {
    color: #003d99;
  }
`;
