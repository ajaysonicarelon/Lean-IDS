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
        component: `A vertical navigation sidebar with flexible expand/collapse behavior.

**Dimensions:**
- **Collapsed:** 60px width - shows only icons
- **Expanded:** 236px width - shows icons, labels, and group titles
- **Height:** 100vh (fixed viewport height)

**Positioning:**
- Uses \`position: sticky\` with \`top: 0\`
- Stays at viewport height while content scrolls
- Consistent height across all content lengths

**Expand Modes:**
- **hover** (default): Expands on mouse hover
- **button**: Expands only via toggle button click
- **both**: Expands on hover OR button click

**Features:**
- Multiple navigation groups with titles (visible when expanded)
- Active state indicators & notification badges
- **Pin Button:** Locks sidebar in expanded state (visible on hover, right of logo)
- **Toggle Button:** Circular button on right edge for manual expand/collapse
  - Sizes: small (24px) or large (32px, default)
  - Positions: top or bottom with adjustable offset
  - Custom icon support
  - Half inside/half outside sidebar
- User profile section with avatar & click handler
- Mouse enter/leave events on menu items
- Smooth transitions
- Scrollable content area within fixed viewport height

## Usage

### Basic Example

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
          onClick: () => console.log('Home clicked')
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          onClick: () => console.log('About clicked')
        }
      ]
    }
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID'
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}
\`\`\`

### With Pin State Control

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
    />
  );
}
\`\`\`

### With Notification Indicators

\`\`\`tsx
const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
        onClick: () => console.log('Messages clicked')
      }
    ]
  }
];
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    groups: {
      description: 'Array of navigation groups with menu items',
      control: false, // Disabled - contains React components (icons) that can't be edited
    },
    user: {
      description: 'User profile information (initials, name, subtitle, avatarUrl)',
      control: false, // Disabled - contains onClick handlers that can't be edited
    },
    isPinned: {
      control: 'boolean',
      description: 'Whether sidebar is pinned (locked in expanded state)',
    },
    onPinChange: {
      description: 'Callback when pin state changes',
      action: 'pinChanged',
    },
    expandMode: {
      control: 'select',
      options: ['hover', 'button', 'both'],
      description: 'How the sidebar expands: hover (default), button only, or both',
    },
    toggleButtonPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Position of the toggle button',
    },
    toggleButtonOffset: {
      control: 'number',
      description: 'Offset from the position (in pixels)',
    },
    toggleButtonSize: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Size of the toggle button: small (24px) or large (32px)',
    },
    toggleButtonIcon: {
      description: 'Custom icon component for toggle button',
      control: false,
    },
    customLogoUrl: {
      control: 'text',
      description: 'URL for custom logo image',
    },
    customSymbolUrl: {
      control: 'text',
      description: 'Custom symbol image URL for collapsed state (icon only)',
    },
    logoAlignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Alignment of the logo',
    },
    logoPadding: {
      control: 'text',
      description: 'Custom padding for the logo (CSS padding value)',
    },
    showLabelsWhenCollapsed: {
      control: 'boolean',
      description: 'Whether to show menu item labels when sidebar is collapsed',
    },
    className: {
      description: 'Additional CSS class',
      control: 'text',
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

export const Default: Story = {
  args: {
    groups: sampleGroups,
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default collapsed sidebar. Hover to expand temporarily, or click the pin button to lock it in expanded state.',
      },
      story: {
        inline: true,
        iframeHeight: 700,
      },
      source: {
        transform: (_code: string, storyContext: any) => {
          const { args } = storyContext;
          const props = [];
          
          if (args.isPinned) props.push('isPinned={true}');
          if (args.expandMode && args.expandMode !== 'hover') props.push(`expandMode="${args.expandMode}"`);
          if (args.toggleButtonPosition) props.push(`toggleButtonPosition="${args.toggleButtonPosition}"`);
          if (args.toggleButtonOffset) props.push(`toggleButtonOffset={${args.toggleButtonOffset}}`);
          if (args.toggleButtonSize && args.toggleButtonSize !== 'large') props.push(`toggleButtonSize="${args.toggleButtonSize}"`);
          if (args.customLogoUrl) props.push(`customLogoUrl="${args.customLogoUrl}"`);
          if (args.logoAlignment && args.logoAlignment !== 'left') props.push(`logoAlignment="${args.logoAlignment}"`);
          if (args.logoPadding) props.push(`logoPadding="${args.logoPadding}"`);
          
          const propsString = props.length > 0 ? '\n  ' + props.join('\n  ') + '\n' : '';
          
          return `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
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
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation 
  groups={navigationGroups} 
  user={userProfile}${propsString}
/>`;
        },
      },
    },
  },
};

export const WithNotifications: Story = {
  args: {
    groups: [
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
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with notification indicators on menu items.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
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
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`,
      },
    },
  },
};

export const WithoutUser: Story = {
  args: {
    groups: sampleGroups,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar without user profile section.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
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
      },
    ],
  },
];

// No user prop provided
<SideNavigation groups={navigationGroups} />`,
      },
    },
  },
};

export const WithClickHandlers: Story = {
  args: {
    groups: [
      {
        title: 'NAVIGATION',
        items: [
          {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <Icon name="Home" size="medium" />,
            active: true,
            onClick: () => alert('Dashboard clicked!'),
          },
          {
            id: 'analytics',
            label: 'Analytics',
            icon: <Icon name="Visibility" size="medium" />,
            onClick: () => alert('Analytics clicked!'),
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: <Icon name="Settings" size="medium" />,
            onClick: () => alert('Settings clicked!'),
          },
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with click handlers on menu items. Click any item to see the handler in action.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'NAVIGATION',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => navigate('/dashboard'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => navigate('/analytics'),
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`,
      },
    },
  },
};

export const MultipleGroups: Story = {
  args: {
    groups: [
      {
        title: 'MAIN',
        items: [
          {
            id: 'home',
            label: 'Home',
            icon: <Icon name="Home" size="medium" />,
            active: true,
          },
          {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <Icon name="Visibility" size="medium" />,
          },
        ],
      },
      {
        title: 'MANAGEMENT',
        items: [
          {
            id: 'users',
            label: 'Users',
            icon: <Icon name="AccountCircle" size="medium" />,
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: <Icon name="Settings" size="medium" />,
          },
        ],
      },
      {
        title: 'SUPPORT',
        items: [
          {
            id: 'help',
            label: 'Help Center',
            icon: <Icon name="Info" size="medium" />,
          },
          {
            id: 'feedback',
            label: 'Feedback',
            icon: <Icon name="Edit" size="medium" />,
          },
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with multiple navigation groups separated by dividers.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN',
    items: [
      { id: 'home', label: 'Home', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="Visibility" size="medium" /> },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { id: 'users', label: 'Users', icon: <Icon name="AccountCircle" size="medium" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="Settings" size="medium" /> },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`,
      },
    },
  },
};

export const WithActiveState: Story = {
  args: {
    groups: [
      {
        title: 'PAGES',
        items: [
          {
            id: 'home',
            label: 'Home',
            icon: <Icon name="Home" size="medium" />,
            active: false,
          },
          {
            id: 'about',
            label: 'About',
            icon: <Icon name="Info" size="medium" />,
            active: true,
          },
          {
            id: 'contact',
            label: 'Contact',
            icon: <Icon name="Edit" size="medium" />,
            active: false,
          },
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar showing active state on the "About" menu item. Active items have a blue left border and background.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function Navigation() {
  const [activeId, setActiveId] = useState('about');

  const navigationGroups = [
    {
      title: 'PAGES',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'home',
          onClick: () => setActiveId('home'),
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          active: activeId === 'about',
          onClick: () => setActiveId('about'),
        },
      ],
    },
  ];

  return <SideNavigation groups={navigationGroups} user={userProfile} />;
}`,
      },
    },
  },
};

export const PinnedState: Story = {
  args: {
    groups: sampleGroups,
    user: sampleUser,
    isPinned: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar in pinned state (locked at 236px width). The pin button is filled when pinned.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => {
        setIsPinned(pinned);
        console.log('Sidebar pinned:', pinned);
      }}
    />
  );
}`,
      },
    },
  },
};

export const WithAvatarImage: Story = {
  args: {
    groups: sampleGroups,
    user: {
      initials: 'JD',
      name: 'John Doe',
      subtitle: 'Admin User',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with user profile including an avatar image.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation } from '@lean-ids/components';

const userProfile = {
  initials: 'JD',
  name: 'John Doe',
  subtitle: 'Admin User',
  avatarUrl: 'https://example.com/avatar.jpg', // Optional
};

<SideNavigation groups={navigationGroups} user={userProfile} />`,
      },
    },
  },
};

export const WithManyItems: Story = {
  args: {
    groups: [
      {
        title: 'DASHBOARD',
        items: [
          { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
          { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
          { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
        ],
      },
      {
        title: 'CONTENT',
        items: [
          { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
          { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
          { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
          { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
        ],
      },
      {
        title: 'USERS',
        items: [
          { id: 'all-users', label: 'All Users', icon: <Icon name="AccountCircle" size="medium" /> },
          { id: 'add-user', label: 'Add New', icon: <Icon name="Add" size="medium" /> },
          { id: 'roles', label: 'Roles', icon: <Icon name="Settings" size="medium" /> },
        ],
      },
      {
        title: 'SETTINGS',
        items: [
          { id: 'general', label: 'General', icon: <Icon name="Settings" size="medium" /> },
          { id: 'security', label: 'Security', icon: <Icon name="Lock" size="medium" /> },
          { id: 'notifications', label: 'Notifications', icon: <Icon name="Info" size="medium" /> },
          { id: 'integrations', label: 'Integrations', icon: <Icon name="Settings" size="medium" /> },
        ],
      },
      {
        title: 'TOOLS',
        items: [
          { id: 'import', label: 'Import', icon: <Icon name="Upload" size="medium" /> },
          { id: 'export', label: 'Export', icon: <Icon name="Download" size="medium" /> },
          { id: 'backup', label: 'Backup', icon: <Icon name="Save" size="medium" /> },
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with many menu items demonstrating automatic scrolling when content overflows. The navigation area becomes scrollable while the user profile remains fixed at the bottom.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
      { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
      { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
    ],
  },
  // ... more groups
];

<SideNavigation groups={navigationGroups} user={userProfile} />`,
      },
    },
  },
};

export const CompleteExample: Story = {
  args: {
    groups: [
      {
        title: 'DASHBOARD',
        items: [
          {
            id: 'overview',
            label: 'Overview',
            icon: <Icon name="Home" size="medium" />,
            active: true,
          },
          {
            id: 'analytics',
            label: 'Analytics',
            icon: <Icon name="Visibility" size="medium" />,
          },
        ],
      },
      {
        title: 'CONTENT',
        items: [
          {
            id: 'posts',
            label: 'Posts',
            icon: <Icon name="Edit" size="medium" />,
            showIndicator: true,
          },
          {
            id: 'media',
            label: 'Media',
            icon: <Icon name="Visibility" size="medium" />,
          },
          {
            id: 'comments',
            label: 'Comments',
            icon: <Icon name="Info" size="medium" />,
            showIndicator: true,
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
            icon: <Icon name="Settings" size="medium" />,
          },
        ],
      },
    ],
    user: {
      ...sampleUser,
      onClick: () => console.log('User profile clicked'),
    },
    expandMode: 'both',
    toggleButtonPosition: 'top',
    toggleButtonSize: 'large',
    customLogoUrl: undefined,
    logoAlignment: 'center',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete example showing ALL features: multiple groups, active states, notification indicators, user profile with click handler, expand modes (hover + button), toggle button, custom logo support, and mouse events.',
      },
      story: {
        inline: true,
        iframeHeight: 700,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('overview');
  const [isPinned, setIsPinned] = useState(false);

  const navigationGroups = [
    {
      title: 'DASHBOARD',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'overview',
          onClick: () => setActiveId('overview'),
          onMouseEnter: () => console.log('Hovered: Overview'),
          onMouseLeave: () => console.log('Left: Overview'),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'analytics',
          onClick: () => setActiveId('analytics'),
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <Icon name="Edit" size="medium" />,
          showIndicator: true, // Shows notification dot
          active: activeId === 'posts',
          onClick: () => setActiveId('posts'),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'media',
          onClick: () => setActiveId('media'),
        },
        {
          id: 'comments',
          label: 'Comments',
          icon: <Icon name="Info" size="medium" />,
          showIndicator: true,
          active: activeId === 'comments',
          onClick: () => setActiveId('comments'),
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
          active: activeId === 'profile',
          onClick: () => setActiveId('profile'),
        },
        {
          id: 'preferences',
          label: 'Preferences',
          icon: <Icon name="Settings" size="medium" />,
          active: activeId === 'preferences',
          onClick: () => setActiveId('preferences'),
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
    avatarUrl: 'https://example.com/avatar.jpg', // Optional
    onClick: () => console.log('User profile clicked!'),
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
      
      // Expand mode: 'hover', 'button', or 'both'
      expandMode="both"
      
      // Toggle button configuration
      toggleButtonPosition="top"
      toggleButtonSize="large"
      toggleButtonOffset={24}
      
      // Custom logo (optional)
      customLogoUrl="/path/to/your/logo.png"
      logoAlignment="center"
      logoPadding="16px"
    />
  );
}`,
      },
    },
  },
};

export const WithNestedMenus: Story = {
  args: {
    groups: [
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
            id: 'products',
            label: 'Products',
            icon: <Icon name="ShoppingCart" size="medium" />,
            children: [
              {
                id: 'products-all',
                label: 'All Products',
              },
              {
                id: 'products-categories',
                label: 'Categories',
                children: [
                  {
                    id: 'cat-electronics',
                    label: 'Electronics',
                  },
                  {
                    id: 'cat-clothing',
                    label: 'Clothing',
                  },
                  {
                    id: 'cat-food',
                    label: 'Food & Beverages',
                  },
                ],
              },
              {
                id: 'products-featured',
                label: 'Featured Items',
              },
            ],
          },
          {
            id: 'orders',
            label: 'Orders',
            icon: <Icon name="Receipt" size="medium" />,
            showIndicator: true,
            children: [
              {
                id: 'orders-pending',
                label: 'Pending Orders',
              },
              {
                id: 'orders-completed',
                label: 'Completed Orders',
              },
              {
                id: 'orders-cancelled',
                label: 'Cancelled Orders',
              },
            ],
          },
        ],
      },
      {
        title: 'REPORTS',
        items: [
          {
            id: 'analytics',
            label: 'Analytics',
            icon: <Icon name="Visibility" size="medium" />,
            children: [
              {
                id: 'analytics-sales',
                label: 'Sales Report',
              },
              {
                id: 'analytics-traffic',
                label: 'Traffic Report',
                children: [
                  {
                    id: 'traffic-daily',
                    label: 'Daily Traffic',
                  },
                  {
                    id: 'traffic-monthly',
                    label: 'Monthly Traffic',
                  },
                ],
              },
              {
                id: 'analytics-customers',
                label: 'Customer Report',
              },
            ],
          },
        ],
      },
      {
        title: 'SETTINGS',
        items: [
          {
            id: 'settings',
            label: 'Settings',
            icon: <Icon name="Settings" size="medium" />,
            children: [
              {
                id: 'settings-general',
                label: 'General',
              },
              {
                id: 'settings-security',
                label: 'Security',
              },
              {
                id: 'settings-notifications',
                label: 'Notifications',
              },
            ],
          },
        ],
      },
    ],
    user: sampleUser,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example showing nested menu functionality. Hover over menu items with arrows to see nested submenus appear on the right. Supports multiple levels of nesting.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
      source: {
        code: `import { SideNavigation, Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
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
          id: 'products',
          label: 'Products',
          icon: <Icon name="ShoppingCart" size="medium" />,
          children: [
            {
              id: 'products-all',
              label: 'All Products',
            },
            {
              id: 'products-categories',
              label: 'Categories',
              children: [
                {
                  id: 'cat-electronics',
                  label: 'Electronics',
                },
                {
                  id: 'cat-clothing',
                  label: 'Clothing',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}`,
      },
    },
  },
};

export const CustomLogo: Story = {
  args: {
    groups: sampleGroups,
    user: sampleUser,
    customLogoUrl: 'https://via.placeholder.com/150x40/0066CC/FFFFFF?text=My+Logo',
    logoAlignment: 'center',
    logoPadding: '16px',
    expandMode: 'both',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `**Custom Logo Demo** - Shows how to use your own logo instead of the default Carelon/Elevance branding.

**Important Notes:**
- The same logo is used in **both collapsed and expanded states**
- The same logo is used in **both dark and light modes**
- If you need different logos for collapsed/expanded, provide a square icon that works in both states
- Recommended logo size: 120-150px wide for expanded, works as icon when collapsed

**Try it:** Use the controls below to change the \`customLogoUrl\` to your own logo URL!`,
      },
      story: {
        inline: true,
        iframeHeight: 700,
      },
      source: {
        code: `import { SideNavigation } from '@lean-ids/components';

const navigationGroups = [
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
        label: 'About',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation
  groups={navigationGroups}
  user={userProfile}
  
  // Custom logo configuration
  customLogoUrl="https://your-domain.com/logo.png"
  logoAlignment="center"
  logoPadding="16px"
  
  // Works in all states
  expandMode="both"  // Try collapsing - same logo appears!
/>`,
      },
    },
  },
};

export const TextTruncation: Story = {
  args: {
    groups: [
      {
        title: 'TRUNCATION TEST',
        items: [
          {
            id: '1',
            label: 'Short',
            icon: <Icon name="Home" size="medium" />,
            active: false,
          },
          {
            id: '2',
            label: 'This is a very long menu item name that should truncate',
            icon: <Icon name="Dashboard" size="medium" />,
            active: true,
          },
          {
            id: '3',
            label: 'Another extremely long menu item label to test truncation behavior',
            icon: <Icon name="Settings" size="medium" />,
            active: false,
          },
          {
            id: '4',
            label: 'SuperLongMenuItemNameWithoutSpacesThatShouldAlsoTruncateProperly',
            icon: <Icon name="Info" size="medium" />,
            active: false,
          },
        ],
      },
    ],
    user: sampleUser,
    expandMode: 'both',
    showLabelsWhenCollapsed: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `**Text Truncation Test** - Tests that long menu item labels truncate properly with ellipsis (...) in both expanded and collapsed states.

**What to Test:**
1. **Expanded State (236px):** Long labels should truncate with "..." at the end
2. **Collapsed State (60px):** Labels should truncate even more aggressively
3. **Hover to Expand:** Watch labels expand/truncate smoothly
4. **Toggle Button:** Click to pin/unpin and see truncation adjust

**Expected Behavior:**
- ✅ Text never overflows the container
- ✅ Ellipsis (...) appears when text is cut off
- ✅ No horizontal scrolling
- ✅ Works with spaces and without spaces`,
      },
      story: {
        inline: true,
        iframeHeight: 700,
      },
    },
  },
};
