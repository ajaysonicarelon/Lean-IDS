import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { InputField } from '../InputField';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog component with header, body, and footer sections. Based on Figma design.

## Usage

\`\`\`tsx
import { Modal, Button } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Your Title"
        description="Optional description"
        onSubmit={() => console.log('Submit')}
        onReset={() => console.log('Reset')}
      >
        {/* Your modal content */}
      </Modal>
    </>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * Default modal with all standard features.
 * Shows how to manage modal state with useState and handle open/close actions.
 */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Popup Example"
          description="This is a modal popup with header, body, and footer sections."
          onSubmit={() => console.log('Submit clicked')}
          onReset={() => console.log('Reset clicked')}
        >
          <div style={{ padding: '20px' }}>
            <h3>Modal Body Content</h3>
            <p>This is the body content of the modal. You can put any content here.</p>
            <p>The modal includes:</p>
            <ul>
              <li>Header with title and description</li>
              <li>Close button</li>
              <li>Scrollable body</li>
              <li>Footer with Reset, Cancel, and Submit buttons</li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal with form content.
 * Demonstrates using InputField components inside a modal for form submissions.
 */
export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Edit Profile"
          description="Update your profile information"
          submitLabel="Save Changes"
          onSubmit={() => console.log('Form submitted')}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <InputField
              label="Name"
              placeholder="Enter your name"
              type="text"
              size="default"
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              size="default"
            />
            <InputField
              label="Bio"
              placeholder="Tell us about yourself"
              type="text"
              size="default"
            />
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal without reset button.
 * Use showReset={false} to hide the reset button for confirmation dialogs.
 */
export const NoReset: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Confirm Action</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          description="Are you sure you want to proceed?"
          showReset={false}
          cancelLabel="No, Cancel"
          submitLabel="Yes, Proceed"
          onSubmit={() => console.log('Confirmed')}
        >
          <div style={{ padding: '20px' }}>
            <p>This action cannot be undone. Please confirm that you want to continue.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal with warning submit button.
 * Use submitType="alert" for destructive actions like deletes.
 */
export const WarningAction: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} buttonType="alert">Delete Item</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Delete Item"
          description="This action is permanent"
          showReset={false}
          submitLabel="Delete"
          submitType="alert"
          onSubmit={() => console.log('Deleted')}
        >
          <div style={{ padding: '20px' }}>
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal with custom footer.
 * Use customFooter prop to replace default buttons with custom actions.
 */
export const CustomFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Custom Footer Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Custom Footer"
          description="Modal with custom footer content"
          customFooter={
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: '12px' }}>
              <Button variant="tertiary" size="medium">
                Skip
              </Button>
              <Button variant="secondary" size="medium">
                Back
              </Button>
              <Button variant="primary" size="medium">
                Next
              </Button>
            </div>
          }
        >
          <div style={{ padding: '20px' }}>
            <p>This modal has a custom footer with different buttons.</p>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Large modal with scrollable content.
 * Use height prop to control modal height for long content.
 */
export const ScrollableContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>View Terms</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
          description="Please read and accept our terms"
          submitLabel="Accept"
          height={600}
        >
          <div style={{ padding: '20px' }}>
            <h3>Terms of Service</h3>
            {[...Array(20)].map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            ))}
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Small modal.
 * Use width and height props to customize modal size for quick messages.
 */
export const SmallModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Show Note</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Quick Note"
          width={400}
          height={200}
          showReset={false}
          submitLabel="Got it"
        >
          <div style={{ padding: '20px' }}>
            <p>This is a smaller modal for quick messages.</p>
          </div>
        </Modal>
      </div>
    );
  },
};
