import React from 'react';
import { PageLayoutProps } from './PageLayout.types';
import {
  PageLayoutWithTopBar,
  PageLayoutWithSideBar,
  PageLayoutWithSideBarPinned,
  PageLayoutWithBoth,
  PageLayoutWithBothPinned,
  MainContentWrapper,
  PageContent,
  BreadcrumbsContainer,
  BreadcrumbSeparator,
} from './PageLayout.styles';
import { TopHeader } from '../TopHeader';
import { SideNavigation } from '../SideNavigation';
import { Breadcrumb } from '../Breadcrumb';
import { PageHeader } from '../PageHeader';
import { Footer } from '../Footer';

export const PageLayout: React.FC<PageLayoutProps> = ({
  variant,
  pageTitle,
  pageDescription,
  breadcrumbs,
  children,
  topHeader,
  sideNav,
  footer,
  className,
}) => {
  const [sidebarPinned, setSidebarPinned] = React.useState(sideNav?.isPinned || false);
  
  // Handle pin state change
  const handlePinChange = (isPinned: boolean) => {
    setSidebarPinned(isPinned);
    sideNav?.onPinChange?.(isPinned);
  };
  
  // Determine which container to use based on variant and pin state
  const getContainer = () => {
    if (variant === 'topbar-only') return PageLayoutWithTopBar;
    
    if (variant === 'sidebar-only') {
      return sidebarPinned ? PageLayoutWithSideBarPinned : PageLayoutWithSideBar;
    }
    
    if (variant === 'topbar-sidebar') {
      return sidebarPinned ? PageLayoutWithBothPinned : PageLayoutWithBoth;
    }
    
    return PageLayoutWithTopBar;
  };
  
  const Container = getContainer();

  // Render breadcrumbs
  const renderBreadcrumbs = () => (
    <BreadcrumbsContainer aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <Breadcrumb {...breadcrumb} />
          {index < breadcrumbs.length - 1 && (
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbsContainer>
  );

  // Render footer
  const renderFooter = () => {
    // Use Footer component if footer props provided
    return (
      <Footer
        lastUpdated={footer?.lastUpdated || 'Sept 23, 2024'}
        version={footer?.version || '1.0'}
        feedbackText={footer?.feedbackText || 'Send us a Feedback here'}
        feedbackUrl={footer?.feedbackUrl || '#'}
        onFeedbackClick={footer?.onFeedbackClick}
      />
    );
  };

  const hasSidebar = variant === 'sidebar-only' || variant === 'topbar-sidebar';

  return (
    <Container className={className}>
      {/* Side Navigation - for sidebar-only and topbar-sidebar */}
      {hasSidebar && sideNav && (
        <SideNavigation
          groups={sideNav.groups}
          user={sideNav.user}
          isPinned={sidebarPinned}
          onPinChange={handlePinChange}
          expandMode={sideNav.expandMode}
          toggleButtonPosition={sideNav.toggleButtonPosition}
          toggleButtonOffset={sideNav.toggleButtonOffset}
          toggleButtonSize={sideNav.toggleButtonSize}
          toggleButtonIcon={sideNav.toggleButtonIcon}
          customLogoUrl={sideNav.customLogoUrl}
          logoAlignment={sideNav.logoAlignment}
          logoPadding={sideNav.logoPadding}
          showLabelsWhenCollapsed={sideNav.showLabelsWhenCollapsed}
        />
      )}

      {/* Main Content Wrapper - wraps header, content, and footer when sidebar is present */}
      {hasSidebar ? (
        <MainContentWrapper>
          {/* Top Header - for topbar-sidebar */}
          {variant === 'topbar-sidebar' && topHeader && (
            <TopHeader
              mode="light"
              appName={topHeader.appName}
              menuItems={topHeader.menuItems}
              userInitials={topHeader.userInitials}
              userAvatarUrl={topHeader.userAvatarUrl}
              showLogo={false}
              showAppName={!!topHeader.appName}
              showMenuItems={!!topHeader.menuItems && topHeader.menuItems.length > 0}
              showAvatar={!!topHeader.userInitials}
              onAvatarClick={topHeader.onAvatarClick}
              customLogoUrl={topHeader.customLogoUrl}
            />
          )}

          {/* Main Content */}
          <PageContent>
            {renderBreadcrumbs()}
            <PageHeader title={pageTitle} description={pageDescription} />
            {children}
          </PageContent>

          {/* Footer */}
          {renderFooter()}
        </MainContentWrapper>
      ) : (
        <>
          {/* Top Header - for topbar-only */}
          {variant === 'topbar-only' && topHeader && (
            <TopHeader
              mode="dark"
              appName={topHeader.appName}
              menuItems={topHeader.menuItems}
              userInitials={topHeader.userInitials}
              userAvatarUrl={topHeader.userAvatarUrl}
              showLogo={topHeader.showLogo !== false}
              showAppName={!!topHeader.appName}
              showMenuItems={!!topHeader.menuItems && topHeader.menuItems.length > 0}
              showAvatar={!!topHeader.userInitials}
              onAvatarClick={topHeader.onAvatarClick}
              customLogoUrl={topHeader.customLogoUrl}
            />
          )}

          {/* Main Content */}
          <PageContent>
            {renderBreadcrumbs()}
            <PageHeader title={pageTitle} description={pageDescription} />
            {children}
          </PageContent>

          {/* Footer */}
          {renderFooter()}
        </>
      )}
    </Container>
  );
};
