import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigation } from './SideNavigation';
import { Icon } from '../Icon';

const meta: Meta<typeof SideNavigation> = {
  title: 'Components/SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A vertical navigation sidebar that can be expanded or collapsed. Contains brand logo, navigation groups, and user profile.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['expanded', 'collapsed'],
      description: 'Sidebar state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

const sampleGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true,
      },
      {
        id: 'services',
        label: 'Services',
        icon: <Icon name="Settings" size="medium" />,
      },
      {
        id: 'blog',
        label: 'Blog',
        icon: <Icon name="Edit" size="medium" />,
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        icon: <Icon name="Visibility" size="medium" />,
      },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      {
        id: 'profile',
        label: 'Profile',
        icon: <Icon name="AccountCircle" size="medium" />,
      },
      {
        id: 'preferences',
        label: 'Preferences',
        icon: <Icon name="Tune" size="medium" />,
      },
    ],
  },
];

const sampleUser = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

export const Expanded: Story = {
  args: {
    state: 'expanded',
    groups: sampleGroups,
    user: sampleUser,
  },
};

export const Collapsed: Story = {
  args: {
    state: 'collapsed',
    groups: sampleGroups,
    user: sampleUser,
  },
};

export const WithoutUser: Story = {
  args: {
    state: 'expanded',
    groups: sampleGroups,
  },
};

export const SingleGroup: Story = {
  args: {
    state: 'expanded',
    groups: [sampleGroups[0]],
    user: sampleUser,
  },
};

export const WithNotifications: Story = {
  args: {
    state: 'expanded',
    groups: [
      {
        title: 'NOTIFICATIONS',
        items: [
          {
            id: 'messages',
            label: 'Messages',
            icon: <Icon name="Info" size="medium" />,
            showIndicator: true,
          },
          {
            id: 'alerts',
            label: 'Alerts',
            icon: <Icon name="Warning" size="medium" />,
            showIndicator: true,
          },
          {
            id: 'updates',
            label: 'Updates',
            icon: <Icon name="CheckCircle" size="medium" />,
          },
        ],
      },
    ],
    user: sampleUser,
  },
};
