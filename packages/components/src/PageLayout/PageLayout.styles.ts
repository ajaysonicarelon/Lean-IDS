import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Fixed viewport height - no page scrolling */
  overflow: hidden; /* Prevent page-level scrolling */
  background-color: ${({ theme }) => theme.colors.semantic.background.primary};
  position: relative;
`;

// Flex-based layout - no fixed positioning
export const PageLayoutWithTopBar = styled(PageLayoutContainer)``;

export const PageLayoutWithSideBar = styled(PageLayoutContainer)`
  flex-direction: row;
`;

export const PageLayoutWithSideBarPinned = styled(PageLayoutContainer)`
  flex-direction: row;
`;

export const PageLayoutWithBoth = styled(PageLayoutContainer)`
  flex-direction: row;
`;

export const PageLayoutWithBothPinned = styled(PageLayoutContainer)`
  flex-direction: row;
`;

// Wrapper for main content when sidebar is present
export const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Prevents flex item from overflowing
  overflow: hidden; // Prevent wrapper from scrolling
`;

export const PageContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[10]}; // 16px 24px
  gap: ${({ theme }) => theme.spacing[7]}; // 16px
  overflow-y: auto; // Content area scrolls independently
  overflow-x: hidden; // Prevent horizontal scroll
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
