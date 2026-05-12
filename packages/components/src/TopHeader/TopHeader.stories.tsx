import type { Meta, StoryObj } from '@storybook/react';
import { TopHeader } from './TopHeader';
import { Icon } from '../Icon';

const meta: Meta<typeof TopHeader> = {
  title: 'Components/TopHeader',
  component: TopHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A horizontal navigation header with branding, app name, menu items, and user avatar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color mode',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

const sampleMenuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Icon name="Home" size="small" />,
    active: true,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true,
  },
];

export const DarkMode: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
};

export const LightMode: Story = {
  args: {
    mode: 'light',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
};

export const WithoutLogo: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: false,
    showAppName: true,
    showDivider: false,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
};

export const WithoutMenuItems: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: true,
    userInitials: 'AS',
  },
};

export const MinimalHeader: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: false,
  },
};
