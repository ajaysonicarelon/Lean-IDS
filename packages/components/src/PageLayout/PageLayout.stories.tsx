import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';
import React from 'react';

// Simple icon placeholder for stories
const IconPlaceholder = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
  </svg>
);

const meta: Meta<typeof PageLayout> = {
  title: 'Templates/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Page Layout Templates

Three vanilla page templates for building consistent layouts in Lean IDS applications.

## Variants

### 1. Top Bar Only
- Dark top header with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Simple applications, dashboards, content-focused pages

### 2. Side Bar Only  
- Expanded side navigation (236px) with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Navigation-heavy apps, admin panels, multi-section applications

### 3. Top Bar + Side Bar
- Light top bar (NO logo, only product name)
- Collapsed sidebar (60px, icons only) with brand symbol
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Complex applications needing both navigations, enterprise apps

## Important Rules

When using **both navigations** (topbar-sidebar):
- ✅ Top bar is LIGHT mode (no dark background)
- ✅ Top bar has NO brand logo (logo is in sidebar)
- ✅ Sidebar is COLLAPSED (60px wide, icons only)
- ✅ Product name stays in top bar

## Grid & Spacing
- **Padding:** 24px horizontal, 16px vertical
- **Gaps:** 16px between sections
- **Top Bar:** 78px (dark), 64px (light)
- **Side Nav:** 236px (expanded), 60px (collapsed)
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

// Sample content for all stories
const SampleContent = () => (
  <div style={{ 
    padding: '24px', 
    backgroundColor: 'white', 
    borderRadius: '8px',
    minHeight: '400px'
  }}>
    <h2 style={{ marginTop: 0 }}>Main Content Area</h2>
    <p>This is where your page content goes. You can add any components here:</p>
    <ul>
      <li>Cards and panels</li>
      <li>Forms and inputs</li>
      <li>Tables and data grids</li>
      <li>Charts and visualizations</li>
      <li>Any custom components</li>
    </ul>
    <p>The content area automatically fills the remaining space between the header/navigation and footer.</p>
  </div>
);

/**
 * Template with **dark top header only**. Includes brand logo, product name, menu items, and avatar.
 * 
 * **Use this template for:**
 * - Simple applications without side navigation
 * - Dashboard-style layouts
 * - Content-focused pages
 * 
 * **Structure:**
 * - Top Header: 78px height, dark mode, with logo
 * - Content Area: Breadcrumbs + Page Header + Your Content
 * - Footer: 40px height
 */
export const TopBarOnly: Story = {
  args: {
    variant: 'topbar-only',
    pageTitle: 'Dashboard',
    pageDescription: 'Overview of your application metrics and data',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Dashboard', isActive: true },
    ],
    topHeader: {
      appName: 'Product Name',
      showLogo: true,
      menuItems: [
        { id: '1', label: 'Home', icon: <IconPlaceholder />, active: true },
        { id: '2', label: 'Reports', icon: <IconPlaceholder />, active: false },
        { id: '3', label: 'Settings', icon: <IconPlaceholder />, showIndicator: true },
      ],
      userInitials: 'AS',
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback',
    },
    children: <SampleContent />,
  },
};

/**
 * Template with **expanded side navigation only**. Shows brand logo in sidebar with navigation groups.
 * 
 * **Use this template for:**
 * - Navigation-heavy applications
 * - Multi-section applications
 * - Admin panels
 * 
 * **Structure:**
 * - Side Navigation: 236px width, expanded, with logo
 * - Content Area: Breadcrumbs + Page Header + Your Content
 * - Footer: 40px height
 */
export const SideBarOnly: Story = {
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Services',
    pageDescription: 'Manage and configure your services',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Services', isActive: true },
    ],
    sideNav: {
      expanded: true,
      groups: [
        {
          title: 'MAIN MENU',
          items: [
            { id: '1', label: 'Home', icon: <IconPlaceholder />, active: false },
            { id: '2', label: 'Services', icon: <IconPlaceholder />, active: true },
            { id: '3', label: 'About Us', icon: <IconPlaceholder />, showIndicator: true },
            { id: '4', label: 'Portfolio', icon: <IconPlaceholder />, active: false },
          ],
        },
        {
          title: 'SETTINGS',
          items: [
            { id: '5', label: 'Profile', icon: <IconPlaceholder />, active: false },
            { id: '6', label: 'Preferences', icon: <IconPlaceholder />, active: false },
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
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback',
    },
    children: <SampleContent />,
  },
};

/**
 * Template with **both top bar and side navigation**.
 * 
 * **IMPORTANT RULES:**
 * - ✅ Top bar is **LIGHT mode** (no dark background)
 * - ✅ Top bar has **NO brand logo** (logo is in sidebar)
 * - ✅ Sidebar is **COLLAPSED** (60px wide, icons only)
 * - ✅ Product name stays in top bar
 * 
 * **Use this template for:**
 * - Complex applications needing both navigations
 * - Enterprise applications
 * - Multi-level navigation requirements
 * 
 * **Structure:**
 * - Top Header: 64px height, light mode, NO logo, only product name
 * - Side Navigation: 60px width, collapsed, icons only
 * - Content Area: Breadcrumbs + Page Header + Your Content
 * - Footer: 40px height
 */
export const TopBarAndSideBar: Story = {
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Settings',
    pageDescription: 'Configure your application preferences and options',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Settings', isActive: true },
    ],
    topHeader: {
      appName: 'Product Name',
      // NO logo in this variant!
      menuItems: [
        { id: '1', label: 'Help', icon: <IconPlaceholder />, active: false },
        { id: '2', label: 'Notifications', icon: <IconPlaceholder />, showIndicator: true },
      ],
      userInitials: 'AS',
    },
    sideNav: {
      // Automatically collapsed in this variant
      groups: [
        {
          items: [
            { id: '1', label: 'Home', icon: <IconPlaceholder />, active: false },
            { id: '2', label: 'Dashboard', icon: <IconPlaceholder />, active: false },
            { id: '3', label: 'Settings', icon: <IconPlaceholder />, active: true },
            { id: '4', label: 'Reports', icon: <IconPlaceholder />, active: false },
            { id: '5', label: 'Profile', icon: <IconPlaceholder />, active: false },
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
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback',
    },
    children: <SampleContent />,
  },
};

/**
 * Minimal example with just the required props and default footer.
 */
export const Minimal: Story = {
  args: {
    variant: 'topbar-only',
    pageTitle: 'Simple Page',
    breadcrumbs: [
      { label: 'Home', isActive: false },
      { label: 'Simple Page', isActive: true },
    ],
    topHeader: {
      appName: 'My App',
      userInitials: 'JD',
    },
    children: (
      <div style={{ padding: '24px' }}>
        <p>Minimal page layout with default footer.</p>
      </div>
    ),
  },
};

/**
 * Example with custom content layout using grid.
 */
export const CustomContentLayout: Story = {
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Dashboard Grid',
    pageDescription: 'Custom grid layout example',
    breadcrumbs: [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Dashboard', isActive: true },
    ],
    sideNav: {
      groups: [
        {
          items: [
            { id: '1', label: 'Dashboard', icon: <IconPlaceholder />, active: true },
            { id: '2', label: 'Analytics', icon: <IconPlaceholder />, active: false },
          ],
        },
      ],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID',
      },
    },
    children: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Card 1</h3>
          <p>Content for card 1</p>
        </div>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Card 2</h3>
          <p>Content for card 2</p>
        </div>
        <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Card 3</h3>
          <p>Content for card 3</p>
        </div>
      </div>
    ),
  },
};
