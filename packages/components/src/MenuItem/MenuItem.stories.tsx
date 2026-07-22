/**
 * MenuItem Component Stories
 * 
 * Enterprise-grade navigation menu item following Component Maturity Checklist.
 * 
 * Features:
 * - ✅ forwardRef + polymorphic 'as' prop
 * - ✅ All 8 states (default, hover, focus, active, disabled, loading, empty, error)
 * - ✅ Typography component (NO HTML tags)
 * - ✅ Design tokens (NO hardcoded values)
 * - ✅ Full accessibility (ARIA, keyboard navigation)
 * 
 * Note: Demo styled components in this file use some hardcoded values for simplicity.
 * The actual MenuItem component is fully compliant.
 */

import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MenuItem } from './MenuItem';
import { Typography } from '../Typography';
import { NestedMenuOverlay } from '../NestedMenuOverlay';
import type { NestedMenuItem } from '../NestedMenuOverlay/NestedMenuOverlay.types';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      description: {
        component: `
# MenuItem

Enterprise-grade navigation menu item for both horizontal (top header) and vertical (side navigation) layouts.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { MenuItem } from '@ajaysoni7832/lean-ids-components';
import DashboardIcon from '@mui/icons-material/Dashboard';

<MenuItem
  label="Dashboard"
  iconS={<DashboardIcon />}
  state="active"
  onClick={handleClick}
/>
\`\`\`

## Features
✅ **Two Layouts** - Horizontal (top header) and vertical (side nav)
✅ **Two Modes** - Dark and light color schemes
✅ **All 8 States** - Active, inactive, disabled, loading, empty, error, hover, focus
✅ **Keyboard Navigation** - Enter and Space key support
✅ **Accessible** - Full ARIA attributes and semantic HTML

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | 'Menu Item' | Label text |
| state | 'active' \\| 'inactive' | 'inactive' | Active/inactive state |
| mode | 'dark' \\| 'light' | 'dark' | Color mode |
| aligned | 'horizontal' \\| 'vertical' | 'horizontal' | Layout direction |
| border | 'bottom' \\| 'left' | 'bottom' | Border position |
| iconS | ReactNode | - | Small icon (16px) for horizontal |
| iconM | ReactNode | - | Medium icon (24px) for vertical |
| disabled | boolean | false | Disabled state |
| isLoading | boolean | false | Loading state |
| isEmpty | boolean | false | Empty state |
| isInvalid | boolean | false | Error state |

## Examples
### Top Header Navigation
\`\`\`tsx
<MenuItem
  label="Home"
  iconS={<HomeIcon />}
  border="bottom"
  aligned="horizontal"
  state="active"
/>
\`\`\`

### Side Navigation
\`\`\`tsx
<MenuItem
  label="Dashboard"
  iconM={<DashboardIcon />}
  border="left"
  aligned="horizontal"
  state="active"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    // Explicit action spies for all callback props (Storybook best practice)
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onKeyDown: fn(),
    onActivate: fn(),
    onDeactivate: fn(),
  },
  argTypes: {
    aligned: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
    },
    border: {
      control: 'select',
      options: ['bottom', 'left'],
      description: 'Border position',
    },
    mode: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Color mode',
    },
    state: {
      control: 'select',
      options: ['active', 'inactive'],
      description: 'Active/inactive state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    isEmpty: {
      control: 'boolean',
      description: 'Empty state',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Error state',
    },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse-enter' },
    onMouseLeave: { action: 'mouse-leave' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    onKeyDown: { action: 'key-pressed' },
    onActivate: { action: 'activated' },
    onDeactivate: { action: 'deactivated' },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// ============================================================================
// STYLED COMPONENTS FOR DEMO
// ============================================================================

const HorizontalNav = styled.div`
  display: flex;
  gap: 8px;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
`;

const VerticalNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
  width: 200px;
`;

// ============================================================================
// STORIES
// ============================================================================

/**
 * Default MenuItem - Interactive playground
 */
export const Playground: Story = {
  args: {
    label: 'Dashboard',
    iconS: <DashboardIcon />,
    state: 'inactive',
    mode: 'dark',
    aligned: 'horizontal',
    border: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all MenuItem props. Change background to "light" in toolbar to test light mode.',
      },
    },
  },
};

/**
 * All states demonstration
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <MenuItem
        label="Inactive"
        iconS={<HomeIcon />}
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Active"
        iconS={<DashboardIcon />}
        state="active"
        mode="dark"
      />
      <MenuItem
        label="Hover Me"
        iconS={<SettingsIcon />}
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Focus Me (Tab)"
        iconS={<PersonIcon />}
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Disabled"
        iconS={<SettingsIcon />}
        state="inactive"
        mode="dark"
        disabled
      />
      <MenuItem
        label="Loading"
        iconS={<DashboardIcon />}
        state="inactive"
        mode="dark"
        isLoading
      />
      <MenuItem
        label="Empty"
        state="inactive"
        mode="dark"
        isEmpty
        emptyMessage="No items available"
      />
      <MenuItem
        label="Error"
        state="inactive"
        mode="dark"
        isInvalid
        errorMessage="Failed to load menu item"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: inactive, active, hover, focus, disabled, loading, empty, and error. Copy any MenuItem you need.',
      },
    },
  },
};

/**
 * Horizontal top header navigation
 */
export const HorizontalTopHeader: Story = {
  render: () => (
    <HorizontalNav>
      <MenuItem
        label="Home"
        iconS={<HomeIcon />}
        border="bottom"
        aligned="horizontal"
        state="active"
        mode="dark"
      />
      <MenuItem
        label="Dashboard"
        iconS={<DashboardIcon />}
        border="bottom"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Settings"
        iconS={<SettingsIcon />}
        border="bottom"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Profile"
        iconS={<PersonIcon />}
        border="bottom"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
    </HorizontalNav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal navigation for top headers with bottom border. Copy the HorizontalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Vertical side navigation (expanded)
 */
export const VerticalSideNav: Story = {
  render: () => (
    <VerticalNav>
      <MenuItem
        label="Home"
        iconM={<HomeIcon />}
        border="left"
        aligned="horizontal"
        state="active"
        mode="dark"
      />
      <MenuItem
        label="Dashboard"
        iconM={<DashboardIcon />}
        border="left"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Settings"
        iconM={<SettingsIcon />}
        border="left"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Profile"
        iconM={<PersonIcon />}
        border="left"
        aligned="horizontal"
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Notifications"
        iconM={<NotificationsIcon />}
        border="left"
        aligned="horizontal"
        state="inactive"
        mode="dark"
        showIndicator
      />
    </VerticalNav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical side navigation with left border. Uses medium-sized icons (iconM). Copy the VerticalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Vertical collapsed navigation (icon only)
 */
export const VerticalCollapsed: Story = {
  render: () => (
    <VerticalNav style={{ width: '60px' }}>
      <MenuItem
        label="Home"
        iconM={<HomeIcon />}
        border="left"
        aligned="vertical"
        state="active"
        mode="dark"
        showLabel={false}
      />
      <MenuItem
        label="Dashboard"
        iconM={<DashboardIcon />}
        border="left"
        aligned="vertical"
        state="inactive"
        mode="dark"
        showLabel={false}
      />
      <MenuItem
        label="Settings"
        iconM={<SettingsIcon />}
        border="left"
        aligned="vertical"
        state="inactive"
        mode="dark"
        showLabel={false}
      />
      <MenuItem
        label="Profile"
        iconM={<PersonIcon />}
        border="left"
        aligned="vertical"
        state="inactive"
        mode="dark"
        showLabel={false}
      />
      <MenuItem
        label="Notifications"
        iconM={<NotificationsIcon />}
        border="left"
        aligned="vertical"
        state="inactive"
        mode="dark"
        showLabel={false}
        showIndicator
      />
    </VerticalNav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only collapsed navigation. Use showLabel={false} to hide labels. Copy the VerticalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Light mode example (use Storybook background switcher)
 */
export const LightMode: Story = {
  args: {
    label: 'Dashboard',
    iconS: <DashboardIcon />,
    state: 'active',
    mode: 'light',
    aligned: 'horizontal',
    border: 'bottom',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        story: 'Light mode example. The background is automatically set to light. Use mode="light" prop for light mode.',
      },
    },
  },
};

/**
 * With notification indicator
 */
export const WithNotificationIndicator: Story = {
  render: () => (
    <HorizontalNav>
      <MenuItem
        label="Home"
        iconS={<HomeIcon />}
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Notifications"
        iconS={<NotificationsIcon />}
        state="inactive"
        mode="dark"
        showIndicator
      />
      <MenuItem
        label="Messages"
        iconS={<PersonIcon />}
        state="inactive"
        mode="dark"
        showIndicator
      />
    </HorizontalNav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use showIndicator prop to display a red dot for unread notifications. Copy the HorizontalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Keyboard navigation demonstration
 */
export const KeyboardNavigation: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleClick = useCallback((item: string) => {
      setActiveItem(item);
    }, []);

    return (
      <HorizontalNav>
        <MenuItem
          label="Home"
          iconS={<HomeIcon />}
          state={activeItem === 'home' ? 'active' : 'inactive'}
          mode="dark"
          onClick={() => handleClick('home')}
        />
        <MenuItem
          label="Dashboard"
          iconS={<DashboardIcon />}
          state={activeItem === 'dashboard' ? 'active' : 'inactive'}
          mode="dark"
          onClick={() => handleClick('dashboard')}
        />
        <MenuItem
          label="Settings"
          iconS={<SettingsIcon />}
          state={activeItem === 'settings' ? 'active' : 'inactive'}
          mode="dark"
          onClick={() => handleClick('settings')}
        />
        <MenuItem
          label="Profile"
          iconS={<PersonIcon />}
          state={activeItem === 'profile' ? 'active' : 'inactive'}
          mode="dark"
          onClick={() => handleClick('profile')}
        />
      </HorizontalNav>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use Tab to navigate, Enter or Space to activate. Copy the HorizontalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Custom styling with className overrides
 */
export const CustomStyling: Story = {
  render: () => (
    <HorizontalNav>
      <MenuItem
        label="Custom"
        iconS={<HomeIcon />}
        state="active"
        mode="dark"
        style={{ background: 'rgba(98, 34, 188, 0.2)' }}
        labelClassName="custom-label"
      />
      <MenuItem
        label="Max Width"
        iconS={<DashboardIcon />}
        state="inactive"
        mode="dark"
        maxWidth="100px"
      />
    </HorizontalNav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use className, style, and maxWidth props for customization. Copy the HorizontalNav wrapper and MenuItem components.',
      },
    },
  },
};

/**
 * Event callbacks demonstration
 */
export const WithEventCallbacks: Story = {
  render: () => {
    const [events, setEvents] = useState<string[]>([]);

    const addEvent = useCallback((event: string) => {
      setEvents(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${event}`]);
    }, []);

    const handleClick = useCallback(() => addEvent('onClick'), [addEvent]);
    const handleMouseEnter = useCallback(() => addEvent('onMouseEnter'), [addEvent]);
    const handleMouseLeave = useCallback(() => addEvent('onMouseLeave'), [addEvent]);
    const handleFocus = useCallback(() => addEvent('onFocus'), [addEvent]);
    const handleBlur = useCallback(() => addEvent('onBlur'), [addEvent]);
    const handleActivate = useCallback(() => addEvent('onActivate'), [addEvent]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <MenuItem
          label="Interactive Item"
          iconS={<DashboardIcon />}
          state="inactive"
          mode="dark"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onActivate={handleActivate}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {events.length === 0 ? (
            <Typography variant="caption">Interact with the menu item to see events</Typography>
          ) : (
            events.map((event, i) => (
              <Typography key={i} variant="caption" style={{ display: 'block' }}>
                {event}
              </Typography>
            ))
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks: onClick, onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate. Check Actions panel.',
      },
    },
  },
};

/**
 * Polymorphic 'as' prop demonstration
 */
export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <MenuItem
        as="button"
        label="Button Element"
        iconS={<HomeIcon />}
        state="inactive"
        mode="dark"
      />
      <MenuItem
        label="Div Element (default)"
        iconS={<DashboardIcon />}
        state="inactive"
        mode="dark"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use as="button" to change root element type. Default is div.',
      },
    },
  },
};

/**
 * Nested menu with 2-level hierarchy (hover trigger)
 */
export const NestedMenu: Story = {
  args: {
    border: "left"
  },

  render: () => {
    const [overlayPosition, setOverlayPosition] = useState<{ top: number; left: number } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const buttonRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const rect = node.getBoundingClientRect();
        setOverlayPosition({
          top: rect.bottom + 4,
          left: rect.left,
        });
      }
    }, []);

    const menuItems: NestedMenuItem[] = [
      {
        id: '1',
        label: 'Home',
        icon: <HomeIcon />,
        onClick: () => console.log('Home clicked'),
      },
      {
        id: '2',
        label: 'Projects',
        icon: <FolderIcon />,
        children: [
          {
            id: '2-1',
            label: 'Web Development',
            onClick: () => console.log('Web Development clicked'),
          },
          {
            id: '2-2',
            label: 'Mobile Apps',
            children: [
              {
                id: '2-2-1',
                label: 'iOS Apps',
                onClick: () => console.log('iOS Apps clicked'),
              },
              {
                id: '2-2-2',
                label: 'Android Apps',
                onClick: () => console.log('Android Apps clicked'),
              },
              {
                id: '2-2-3',
                label: 'React Native',
                onClick: () => console.log('React Native clicked'),
              },
            ],
          },
          {
            id: '2-3',
            label: 'Design Systems',
            onClick: () => console.log('Design Systems clicked'),
          },
        ],
      },
      {
        id: '3',
        label: 'Documents',
        icon: <DescriptionIcon />,
        children: [
          {
            id: '3-1',
            label: 'Reports',
            onClick: () => console.log('Reports clicked'),
          },
          {
            id: '3-2',
            label: 'Presentations',
            children: [
              {
                id: '3-2-1',
                label: 'Q1 Review',
                onClick: () => console.log('Q1 Review clicked'),
              },
              {
                id: '3-2-2',
                label: 'Q2 Planning',
                onClick: () => console.log('Q2 Planning clicked'),
              },
            ],
          },
          {
            id: '3-3',
            label: 'Spreadsheets',
            onClick: () => console.log('Spreadsheets clicked'),
          },
        ],
      },
      {
        id: '4',
        label: 'Media',
        icon: <ImageIcon />,
        children: [
          {
            id: '4-1',
            label: 'Images',
            onClick: () => console.log('Images clicked'),
          },
          {
            id: '4-2',
            label: 'Videos',
            onClick: () => console.log('Videos clicked'),
          },
        ],
      },
      {
        id: '5',
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings clicked'),
      },
    ];

    return (
      <div>
        <div ref={buttonRef}>
          <MenuItem
            label="Open Menu"
            iconS={<DashboardIcon />}
            state="inactive"
            mode="dark"
            hasChildren={true}
            onClick={() => setShowOverlay(!showOverlay)}
          />
        </div>

        {showOverlay && overlayPosition && (
          <NestedMenuOverlay
            items={menuItems}
            position={overlayPosition}
            mode="dark"
            onClose={() => setShowOverlay(false)}
            onItemClick={(item) => {
              console.log('Item clicked:', item.label);
              setShowOverlay(false);
            }}
          />
        )}
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story: '2-level nested menu with hover trigger (default). Click to open, hover over arrows to expand sub-menus. Copy MenuItem and NestedMenuOverlay components.',
      },
    },
  }
};

/**
 * Nested menu with click trigger (better for touch devices)
 */
export const NestedMenuClick: Story = {
  render: () => {
    const [overlayPosition, setOverlayPosition] = useState<{ top: number; left: number } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const buttonRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const rect = node.getBoundingClientRect();
        setOverlayPosition({
          top: rect.bottom + 4,
          left: rect.left,
        });
      }
    }, []);

    const menuItems: NestedMenuItem[] = [
      {
        id: '1',
        label: 'Home',
        icon: <HomeIcon />,
        onClick: () => console.log('Home clicked'),
      },
      {
        id: '2',
        label: 'Projects',
        icon: <FolderIcon />,
        children: [
          {
            id: '2-1',
            label: 'Web Development',
            onClick: () => console.log('Web Development clicked'),
          },
          {
            id: '2-2',
            label: 'Mobile Apps',
            children: [
              {
                id: '2-2-1',
                label: 'iOS Apps',
                onClick: () => console.log('iOS Apps clicked'),
              },
              {
                id: '2-2-2',
                label: 'Android Apps',
                onClick: () => console.log('Android Apps clicked'),
              },
            ],
          },
        ],
      },
      {
        id: '3',
        label: 'Documents',
        icon: <DescriptionIcon />,
        children: [
          {
            id: '3-1',
            label: 'Reports',
            onClick: () => console.log('Reports clicked'),
          },
          {
            id: '3-2',
            label: 'Presentations',
            onClick: () => console.log('Presentations clicked'),
          },
        ],
      },
    ];

    return (
      <div>
        <div ref={buttonRef}>
          <MenuItem
            label="Open Menu (Click Mode)"
            iconS={<DashboardIcon />}
            state="inactive"
            mode="dark"
            hasChildren={true}
            onClick={() => setShowOverlay(!showOverlay)}
          />
        </div>

        {showOverlay && overlayPosition && (
          <NestedMenuOverlay
            items={menuItems}
            position={overlayPosition}
            mode="dark"
            triggerMode="click"
            onClose={() => setShowOverlay(false)}
            onItemClick={(item) => {
              console.log('Item clicked:', item.label);
              setShowOverlay(false);
            }}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Nested menu with click trigger mode (triggerMode="click"). Better for touch devices. Click items with arrows to expand sub-menus.',
      },
    },
  },
};
