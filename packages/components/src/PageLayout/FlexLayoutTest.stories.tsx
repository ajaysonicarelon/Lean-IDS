import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';

const meta: Meta<typeof PageLayout> = {
  title: 'Templates/PageLayout/Flex Layout Tests',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Flex Layout Testing Stories

These stories demonstrate the **flex-based layout** (no fixed positioning) and how you can:
- Adjust page height and width dynamically
- Scroll content independently
- Resize the browser window to see responsive behavior

**What Changed:**
- ❌ OLD: \`position: fixed\` on TopHeader, SideNavigation, Footer
- ✅ NEW: Flexbox layout - everything flows naturally

**How to Test:**
1. Resize your browser window - everything adjusts
2. Add lots of content - footer stays at bottom
3. Scroll - header/sidebar stay in place naturally
4. Change viewport height - layout adapts
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

const IconPlaceholder = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <rect width="20" height="20" rx="4" />
  </svg>
);

/**
 * **SCROLLABLE CONTENT TEST** - Lots of content to test scrolling behavior
 */
export const ScrollableContent: Story = {
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Scrollable Content',
    pageDescription: 'Test how the layout handles lots of content with flex positioning',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Flex Tests', href: '/flex', isActive: false },
      { label: 'Scrollable', isActive: true },
    ],
    topHeader: {
      appName: 'Flex Layout Test',
      menuItems: [
        { id: '1', label: 'Help', icon: <IconPlaceholder />, active: false },
      ],
      userInitials: 'AS',
    },
    sideNav: {
      groups: [
        {
          title: 'NAVIGATION',
          items: [
            { id: '1', label: 'Dashboard', icon: <IconPlaceholder />, active: true },
            { id: '2', label: 'Analytics', icon: <IconPlaceholder />, active: false },
            { id: '3', label: 'Reports', icon: <IconPlaceholder />, active: false },
            { id: '4', label: 'Settings', icon: <IconPlaceholder />, active: false },
          ],
        },
      ],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID',
      },
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send Feedback',
      feedbackUrl: '#',
    },
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h2>🧪 Flex Layout Test: Scrollable Content</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Scroll down - header and sidebar stay in place</li>
            <li>✅ Footer appears at the bottom after all content</li>
            <li>✅ Resize browser window - layout adjusts dynamically</li>
            <li>✅ No fixed positioning - everything uses flexbox</li>
          </ul>
        </div>

        {/* Generate lots of content cards */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '24px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
            }}
          >
            <h3>Content Card {i + 1}</h3>
            <p>
              This is card number {i + 1}. The layout uses flexbox instead of fixed positioning,
              so you can scroll naturally. The header and sidebar stay in place because they're
              part of the flex container structure, not because of position: fixed.
            </p>
            <p>
              <strong>Height:</strong> {100 + i * 10}px of content
            </p>
          </div>
        ))}

        <div style={{ padding: '24px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
          <h3>🎉 You reached the end!</h3>
          <p>The footer should appear right below this content.</p>
        </div>
      </div>
    ),
  },
};

/**
 * **MINIMAL CONTENT TEST** - Test with very little content
 */
export const MinimalContent: Story = {
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Minimal Content',
    pageDescription: 'Test how footer behaves with minimal content',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Minimal', isActive: true },
    ],
    topHeader: {
      appName: 'Flex Layout Test',
      userInitials: 'AS',
    },
    sideNav: {
      groups: [
        {
          items: [
            { id: '1', label: 'Dashboard', icon: <IconPlaceholder />, active: true },
          ],
        },
      ],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID',
      },
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
    },
    children: (
      <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>🧪 Minimal Content Test</h2>
        <p><strong>What to test:</strong></p>
        <ul>
          <li>✅ Footer should be at the bottom of the viewport (not floating)</li>
          <li>✅ Content area fills available space</li>
          <li>✅ Resize window - footer stays at bottom</li>
        </ul>
        <p>This page has very little content. With flex layout, the footer should still appear at the bottom of the viewport.</p>
      </div>
    ),
  },
};

/**
 * **TOPBAR ONLY TEST** - Test topbar-only variant with flex layout
 */
export const TopbarOnlyFlexTest: Story = {
  args: {
    variant: 'topbar-only',
    pageTitle: 'Flex Layout: Topbar Only',
    pageDescription: 'Test topbar-only variant with flex positioning',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Topbar Only', isActive: true },
    ],
    topHeader: {
      appName: 'My Application',
      menuItems: [
        { id: '1', label: 'Help', icon: <IconPlaceholder />, active: false },
        { id: '2', label: 'Settings', icon: <IconPlaceholder />, active: false },
      ],
      userInitials: 'AS',
      showLogo: true,
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send Feedback',
    },
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h2>🧪 Topbar Only - Flex Layout</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ No sidebar - full width content</li>
            <li>✅ Header at top (not fixed)</li>
            <li>✅ Footer at bottom after content</li>
            <li>✅ Resize window - everything adjusts</li>
          </ul>
        </div>

        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '24px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
            }}
          >
            <h3>Section {i + 1}</h3>
            <p>Content section {i + 1} - scroll to see more</p>
          </div>
        ))}
      </div>
    ),
  },
};

/**
 * **SIDEBAR ONLY TEST** - Test sidebar-only variant with flex layout
 */
export const SidebarOnlyFlexTest: Story = {
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Flex Layout: Sidebar Only',
    pageDescription: 'Test sidebar-only variant with flex positioning',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Sidebar Only', isActive: true },
    ],
    sideNav: {
      groups: [
        {
          title: 'MAIN MENU',
          items: [
            { id: '1', label: 'Dashboard', icon: <IconPlaceholder />, active: true },
            { id: '2', label: 'Analytics', icon: <IconPlaceholder />, active: false },
            { id: '3', label: 'Reports', icon: <IconPlaceholder />, active: false },
          ],
        },
      ],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID',
      },
      expandMode: 'both',
      toggleButtonSize: 'large',
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
    },
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h2>🧪 Sidebar Only - Flex Layout</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Sidebar on left (not fixed)</li>
            <li>✅ Content area adjusts when sidebar expands/collapses</li>
            <li>✅ Footer at bottom after content</li>
            <li>✅ Try expanding sidebar - content area shrinks</li>
          </ul>
        </div>

        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '24px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
            }}
          >
            <h3>Content Block {i + 1}</h3>
            <p>This content adjusts width when sidebar expands/collapses</p>
          </div>
        ))}
      </div>
    ),
  },
};

/**
 * **DYNAMIC HEIGHT TEST** - Test with content that changes height
 */
export const DynamicHeightTest: Story = {
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Dynamic Height',
    pageDescription: 'Test how layout handles dynamic content height changes',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Dynamic Height', isActive: true },
    ],
    topHeader: {
      appName: 'Flex Layout Test',
      userInitials: 'AS',
    },
    sideNav: {
      groups: [
        {
          items: [
            { id: '1', label: 'Dashboard', icon: <IconPlaceholder />, active: true },
          ],
        },
      ],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID',
      },
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
    },
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h2>🧪 Dynamic Height Test</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Resize your browser window vertically</li>
            <li>✅ Layout adjusts automatically</li>
            <li>✅ Footer always appears after content</li>
            <li>✅ No overlapping or fixed positioning issues</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Make your browser window very tall - footer should be at bottom</li>
            <li>Make your browser window very short - you should be able to scroll</li>
            <li>Try different aspect ratios - everything should work</li>
          </ol>
        </div>

        <div style={{ padding: '24px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
          <h3>⚠️ Old Fixed Positioning Issues (Now Fixed!)</h3>
          <p><strong>Problems with old fixed positioning:</strong></p>
          <ul>
            <li>❌ Header/Footer overlapped content</li>
            <li>❌ Couldn't adjust page height dynamically</li>
            <li>❌ Content had to account for fixed header/footer heights</li>
            <li>❌ Sidebar didn't work well with page scrolling</li>
          </ul>
        </div>

        <div style={{ padding: '24px', backgroundColor: '#d1f2eb', borderRadius: '8px' }}>
          <h3>✅ New Flex Layout Benefits</h3>
          <p><strong>Advantages of flex positioning:</strong></p>
          <ul>
            <li>✅ Natural document flow - no overlapping</li>
            <li>✅ Fully responsive - adjusts to any viewport size</li>
            <li>✅ Content area automatically sized</li>
            <li>✅ Sidebar and content work together seamlessly</li>
            <li>✅ Footer always at the right place</li>
            <li>✅ Easier to maintain and extend</li>
          </ul>
        </div>

        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: '24px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
            }}
          >
            <h3>Flexible Content {i + 1}</h3>
            <p>This content flows naturally in the flex container.</p>
          </div>
        ))}
      </div>
    ),
  },
};
