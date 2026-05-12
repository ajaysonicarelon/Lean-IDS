import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.semantic.background.primary};
  position: relative;
`;

export const PageLayoutWithTopBar = styled(PageLayoutContainer)`
  padding-top: 64px; // Top header height
`;

export const PageLayoutWithSideBar = styled(PageLayoutContainer)`
  margin-left: 60px; // Side nav width (collapsed) - use margin for fixed sidebar
`;

export const PageLayoutWithSideBarPinned = styled(PageLayoutContainer)`
  margin-left: 236px; // Side nav width (pinned/expanded) - use margin for fixed sidebar
`;

export const PageLayoutWithBoth = styled(PageLayoutContainer)`
  padding-top: 64px; // Light top header height
  margin-left: 60px; // Side nav width (collapsed) - use margin for fixed sidebar
`;

export const PageLayoutWithBothPinned = styled(PageLayoutContainer)`
  padding-top: 64px; // Light top header height
  margin-left: 236px; // Side nav width (pinned/expanded) - use margin for fixed sidebar
`;

export const PageContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[10]}; // 16px 24px
  gap: ${({ theme }) => theme.spacing[7]}; // 16px
`;

export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0;
`;

export const BreadcrumbSeparator = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.palette.neutral[500]};
  padding: 0 4px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px ${({ theme }) => theme.spacing[10]}; // 9px 24px
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.palette.neutral[400]};
  min-height: 40px;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 16px;
  margin: 0;
`;

export const FooterLastUpdated = styled(FooterText)`
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
`;

export const FooterVersion = styled(FooterText)`
  color: ${({ theme }) => theme.colors.palette.neutral[800]};
`;

export const FooterFeedback = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  color: #6c6c6c;
  
  a {
    color: #0064ef;
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    
    &:hover {
      text-decoration: none;
    }
  }
`;
