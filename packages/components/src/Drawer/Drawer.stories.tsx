import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Typography } from '../Typography';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Drawer

Enterprise-grade side panel drawer with comprehensive accessibility, customization, and state management.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Drawer, Typography } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Drawer Title"
      >
        <Typography variant="body">Drawer content goes here</Typography>
      </Drawer>
    </>
  );
}
\`\`\`

## Features

✅ **forwardRef Support** - Access drawer DOM node
✅ **Polymorphic 'as' Prop** - Render as different element
✅ **All 8 States** - Default, hover, focus, active, disabled, loading, empty, error
✅ **Full Accessibility** - ARIA, keyboard navigation, focus trap
✅ **Customization Slots** - Custom header, footer, loading, empty, error states
✅ **Multiple Override Points** - className and style for all sections
✅ **Event Callbacks** - onOpen, onAfterOpen, onAfterClose, etc.
✅ **Focus Management** - Auto-focus, return focus, focus trap
✅ **Performance Optimized** - Memoization with useMemo and useCallback
✅ **Design Tokens** - Zero hardcoded values

## Keyboard Navigation

- **Escape** - Close drawer
- **Tab** - Navigate forward through focusable elements
- **Shift+Tab** - Navigate backward
- **Focus Trap** - Focus stays within drawer when open

## Accessibility

- ✅ role="dialog" with aria-modal="true"
- ✅ aria-labelledby and aria-describedby
- ✅ Focus trap within drawer
- ✅ Return focus to trigger on close
- ✅ Keyboard navigation support
- ✅ Screen reader announcements
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Wrapper component to handle state
const DrawerWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

/**
 * Default drawer from the right side with all features
 */
export const Default: Story = {
  render: () => <DrawerWrapper 
    title="Side panel Heading"
    description="Put short description here"
    onSubmit={() => {}}
    onReset={() => {}}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="headingS" weight="semibold">Drawer Body Content</Typography>
      <Typography variant="body">This is the body content of the drawer. You can put any content here.</Typography>
      <Typography variant="body" weight="medium">The drawer includes:</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px' }}>
        <Typography variant="body">• Header with title and description</Typography>
        <Typography variant="body">• Close button</Typography>
        <Typography variant="body">• Scrollable body</Typography>
        <Typography variant="body">• Footer with Reset, Cancel, and Submit buttons</Typography>
      </div>
    </div>
  </DrawerWrapper>,
};

/**
 * Drawer from the left side
 */
export const LeftPosition: Story = {
  render: () => <DrawerWrapper 
    title="Left Side Panel"
    description="This drawer opens from the left"
    position="left"
    onSubmit={() => {}}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">Left Drawer</Typography>
      <Typography variant="body">This drawer slides in from the left side of the screen.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * Drawer with form content
 */
export const WithForm: Story = {
  render: () => <DrawerWrapper 
    title="Add New User"
    description="Fill in the user details"
    submitLabel="Create User"
    onSubmit={() => {}}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputField
        label="First Name"
        placeholder="Enter first name"
        type="text"
        size="default"
      />
      <InputField
        label="Last Name"
        placeholder="Enter last name"
        type="text"
        size="default"
      />
      <InputField
        label="Email"
        placeholder="Enter email"
        type="email"
        size="default"
      />
      <InputField
        label="Phone"
        placeholder="Enter phone number"
        type="tel"
        size="default"
      />
    </div>
  </DrawerWrapper>,
};

/**
 * Drawer without reset button - view only mode
 */
export const ViewOnly: Story = {
  render: () => <DrawerWrapper 
    title="View Details"
    description="User information"
    showReset={false}
    showSubmit={false}
    cancelLabel="Close"
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">User Profile</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Name:</Typography> John Doe</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Email:</Typography> john.doe@example.com</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Role:</Typography> Administrator</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Status:</Typography> Active</Typography>
      </div>
    </div>
  </DrawerWrapper>,
};

/**
 * Drawer with scrollable content
 */
export const ScrollableContent: Story = {
  render: () => <DrawerWrapper 
    title="Activity Log"
    description="Recent system activities"
    showReset={false}
    showSubmit={false}
    cancelLabel="Close"
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">Recent Activities</Typography>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            padding: '12px',
            border: '1px solid #E5E5E5',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <Typography variant="body" weight="semibold">Activity {i + 1}</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      ))}
    </div>
  </DrawerWrapper>,
};

/**
 * Narrow drawer for quick actions
 */
export const NarrowDrawer: Story = {
  render: () => <DrawerWrapper 
    title="Quick Actions"
    width="400px"
    showReset={false}
    showCancel={false}
    submitLabel="Done"
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">Actions</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Button variant="secondary" size="medium" fullWidth>
          Export Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Import Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Settings
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Help
        </Button>
      </div>
    </div>
  </DrawerWrapper>,
};

/**
 * Wide drawer for data tables
 */
export const WideDrawer: Story = {
  render: () => <DrawerWrapper 
    title="Data Table"
    description="View and manage data"
    width="800px"
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">User List</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 1fr 100px',
              gap: '12px',
              padding: '12px',
              border: '1px solid #E5E5E5',
              borderRadius: '4px',
            }}
          >
            <Typography variant="body">{i + 1}</Typography>
            <Typography variant="body">User {i + 1}</Typography>
            <Typography variant="body">user{i + 1}@example.com</Typography>
            <Typography variant="body">Active</Typography>
          </div>
        ))}
      </div>
    </div>
  </DrawerWrapper>,
};

/**
 * Loading state - shows loading overlay
 */
export const LoadingState: Story = {
  render: () => <DrawerWrapper 
    title="Processing"
    description="Please wait while we process your request"
    isLoading={true}
    showReset={false}
  >
    <div style={{ padding: '20px' }}>
      <Typography variant="body">This content is hidden behind the loading overlay.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * Error state - shows error message
 */
export const ErrorState: Story = {
  render: () => <DrawerWrapper 
    title="Form Submission"
    description="There was an error with your submission"
    isInvalid={true}
    errorMessage="Failed to save changes. Please check your input and try again."
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputField
        label="Name"
        placeholder="Enter name"
        type="text"
        size="default"
      />
      <InputField
        label="Email"
        placeholder="Enter email"
        type="email"
        size="default"
      />
    </div>
  </DrawerWrapper>,
};

/**
 * Empty state - shows empty message
 */
export const EmptyState: Story = {
  render: () => <DrawerWrapper 
    title="Notifications"
    description="Your notification center"
    isEmpty={true}
    emptyMessage="No notifications at this time"
    showReset={false}
    showSubmit={false}
    cancelLabel="Close"
  >
    <div style={{ padding: '20px' }}>
      <Typography variant="body">This content is replaced by the empty state.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * Disabled state - all interactions disabled
 */
export const DisabledState: Story = {
  render: () => <DrawerWrapper 
    title="Disabled Drawer"
    description="All interactions are disabled"
    disabled={true}
  >
    <div style={{ padding: '20px' }}>
      <Typography variant="body">This drawer is disabled. You cannot interact with any elements.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * Custom header slot
 */
export const CustomHeader: Story = {
  render: () => <DrawerWrapper 
    title="This title is ignored"
    customHeader={({ onClose }: { onClose: () => void }) => (
      <div style={{ padding: '20px', background: '#F5F5F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="headingL" weight="bold">Custom Header</Typography>
        <Button variant="tertiary" size="small" onClick={onClose}>
          Close
        </Button>
      </div>
    )}
  >
    <div style={{ padding: '20px' }}>
      <Typography variant="body">This drawer uses a custom header slot.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * Custom footer slot
 */
export const CustomFooter: Story = {
  render: () => <DrawerWrapper 
    title="Custom Footer"
    description="With custom footer actions"
    customFooter={({ onClose }: { onClose: () => void }) => (
      <div style={{ padding: '20px', background: '#F5F5F5', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <Button variant="tertiary" size="medium" onClick={onClose}>
          Maybe Later
        </Button>
        <Button variant="secondary" size="medium" onClick={() => {}}>
          Save Draft
        </Button>
        <Button variant="primary" size="medium" onClick={() => {}}>
          Publish
        </Button>
      </div>
    )}
  >
    <div style={{ padding: '20px' }}>
      <Typography variant="body">This drawer uses a custom footer slot with three action buttons.</Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * With forwardRef - access drawer DOM node
 */
export const WithRef: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = React.useRef<HTMLDivElement>(null);

    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {

      }, 100);
    };

    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={handleOpen}>Open Drawer (Check Console)</Button>
        <Drawer
          ref={drawerRef}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Drawer with Ref"
          description="Check console for DOM node access"
        >
          <div style={{ padding: '20px' }}>
            <Typography variant="body">
              This drawer uses forwardRef. Check the console to see the DOM node access.
            </Typography>
          </div>
        </Drawer>
      </div>
    );
  },
};

/**
 * No header - body only with footer
 */
export const NoHeader: Story = {
  render: () => <DrawerWrapper 
    title="This title is hidden"
    description="This description is hidden"
    showHeader={false}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingM" weight="semibold">Content Without Header</Typography>
      <Typography variant="body">
        The header section is completely hidden. Only the body and footer are visible.
      </Typography>
      <Typography variant="body">
        This is useful for full-screen content or when you want maximum space for the body.
      </Typography>
    </div>
  </DrawerWrapper>,
};

/**
 * No footer - header and body only
 */
export const NoFooter: Story = {
  render: () => <DrawerWrapper 
    title="Content Viewer"
    description="View-only mode without footer actions"
    showFooter={false}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingS" weight="semibold">Article Content</Typography>
      <Typography variant="body">
        The footer section is completely hidden. Only the header and body are visible.
      </Typography>
      <Typography variant="body">
        This is useful for read-only content where no actions are needed, or when you want
        to provide custom actions within the body content itself.
      </Typography>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Button variant="secondary" size="small">
          Share
        </Button>
        <Button variant="secondary" size="small">
          Print
        </Button>
      </div>
    </div>
  </DrawerWrapper>,
};

/**
 * No header and no footer - body only
 */
export const BodyOnly: Story = {
  render: () => <DrawerWrapper 
    title="This title is hidden"
    showHeader={false}
    showFooter={false}
  >
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="headingL" weight="bold">Custom Full-Screen Content</Typography>
        <Button variant="tertiary" size="small" onClick={() => {}}>
          Close
        </Button>
      </div>
      <Typography variant="body">
        Both header and footer are completely hidden. You have full control over the entire drawer content.
      </Typography>
      <Typography variant="body">
        This is useful for:
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px' }}>
        <Typography variant="body">• Custom layouts that need maximum space</Typography>
        <Typography variant="body">• Image galleries or media viewers</Typography>
        <Typography variant="body">• Custom navigation or wizard flows</Typography>
        <Typography variant="body">• Embedded applications or iframes</Typography>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid #E5E5E5' }}>
        <Button variant="secondary" size="medium">
          Cancel
        </Button>
        <Button variant="primary" size="medium">
          Save
        </Button>
      </div>
    </div>
  </DrawerWrapper>,
};
