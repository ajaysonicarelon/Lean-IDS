import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { InputField } from '../InputField';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Drawer

A side panel drawer component with header, body, and footer sections for displaying additional content or forms.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Drawer } from '@ajaysoni7832/lean-ids-components';

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
        <p>Drawer content goes here</p>
      </Drawer>
    </>
  );
}
\`\`\`

## Features

✅ **Overlay Backdrop** - Dims background content
✅ **Header with Title** - Optional close button
✅ **Scrollable Body** - For long content
✅ **Footer Section** - For actions/buttons
✅ **Escape Key** - Close on Esc key
✅ **Click Outside** - Close on backdrop click
✅ **Animations** - Smooth slide-in/out

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Control drawer visibility |
| onClose | () => void | required | Close handler |
| title | string | - | Drawer title |
| children | ReactNode | - | Drawer body content |
| footer | ReactNode | - | Footer content (buttons) |
| width | string | '400px' | Drawer width |
| showCloseButton | boolean | true | Show close button in header |
| closeOnBackdropClick | boolean | true | Close on backdrop click |
| closeOnEscape | boolean | true | Close on Escape key |
| className | string | - | Custom CSS class |

## Examples

### Basic Drawer
\`\`\`tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
>
  <p>Settings content</p>
</Drawer>
\`\`\`

### With Footer Actions
\`\`\`tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  footer={
    <>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSave}>
        Save
      </Button>
    </>
  }
>
  <InputField label="Name" />
  <InputField label="Email" />
</Drawer>
\`\`\`

### Custom Width
\`\`\`tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Wide Drawer"
  width="600px"
>
  <p>Wide content</p>
</Drawer>
\`\`\`

### No Close Button
\`\`\`tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  showCloseButton={false}
  closeOnBackdropClick={false}
  closeOnEscape={false}
>
  <p>Are you sure?</p>
</Drawer>
\`\`\`

## Best Practices

1. **Use for secondary content** - Details, forms, filters
2. **Keep width reasonable** - 300-600px typically
3. **Provide clear actions** - Save/Cancel buttons in footer
4. **Allow easy dismissal** - Backdrop click, Escape key
5. **Limit nesting** - Avoid drawer within drawer

## Keyboard Navigation

- **Escape** - Close drawer
- **Tab** - Navigate through drawer content
- **Shift+Tab** - Navigate backwards

## Accessibility

- ✅ Focus trap within drawer
- ✅ ARIA role="dialog"
- ✅ ARIA labels
- ✅ Keyboard navigation
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
 * Default drawer from the right side
 */
export const Default: Story = {
  render: () => <DrawerWrapper 
    title="Side panel Heading"
    description="Put short description here"
    onSubmit={() => console.log('Submit clicked')}
    onReset={() => console.log('Reset clicked')}
  >
    <div style={{ padding: '20px' }}>
      <h3>Drawer Body Content</h3>
      <p>This is the body content of the drawer. You can put any content here.</p>
      <p>The drawer includes:</p>
      <ul>
        <li>Header with title and description</li>
        <li>Close button</li>
        <li>Scrollable body</li>
        <li>Footer with Reset, Cancel, and Submit buttons</li>
      </ul>
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
    onSubmit={() => console.log('Submit clicked')}
  >
    <div style={{ padding: '20px' }}>
      <h3>Left Drawer</h3>
      <p>This drawer slides in from the left side of the screen.</p>
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
    onSubmit={() => console.log('User created')}
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
 * Drawer without reset button
 */
export const NoReset: Story = {
  render: () => <DrawerWrapper 
    title="View Details"
    description="User information"
    showReset={false}
    showSubmit={false}
    cancelLabel="Close"
  >
    <div style={{ padding: '20px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john.doe@example.com</p>
      <p><strong>Role:</strong> Administrator</p>
      <p><strong>Status:</strong> Active</p>
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
    <div style={{ padding: '20px' }}>
      <h3>Recent Activities</h3>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            padding: '12px',
            marginBottom: '8px',
            border: '1px solid #E5E5E5',
            borderRadius: '4px',
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Activity {i + 1}</p>
          <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      ))}
    </div>
  </DrawerWrapper>,
};

/**
 * Narrow drawer
 */
export const NarrowDrawer: Story = {
  render: () => <DrawerWrapper 
    title="Quick Actions"
    width={400}
    showReset={false}
    showCancel={false}
    submitLabel="Done"
  >
    <div style={{ padding: '20px' }}>
      <h3>Actions</h3>
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
 * Wide drawer
 */
export const WideDrawer: Story = {
  render: () => <DrawerWrapper 
    title="Data Table"
    description="View and manage data"
    width={800}
  >
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #D5D5D5' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px' }}>{i + 1}</td>
              <td style={{ padding: '12px' }}>User {i + 1}</td>
              <td style={{ padding: '12px' }}>user{i + 1}@example.com</td>
              <td style={{ padding: '12px' }}>Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </DrawerWrapper>,
};
