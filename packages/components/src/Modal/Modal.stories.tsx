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
        component: 'A modal dialog component with header, body, and footer sections. Based on Figma design.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper component to handle state
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

/**
 * Default modal with all standard features
 */
export const Default: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Modal with form content
 */
export const WithForm: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Modal without reset button
 */
export const NoReset: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Modal with warning submit button
 */
export const WarningAction: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Modal with custom footer
 */
export const CustomFooter: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Large modal with scrollable content
 */
export const ScrollableContent: Story = {
  render: () => <ModalWrapper 
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
  </ModalWrapper>,
};

/**
 * Small modal
 */
export const SmallModal: Story = {
  render: () => <ModalWrapper 
    title="Quick Note"
    width={400}
    height={200}
    showReset={false}
    submitLabel="Got it"
  >
    <div style={{ padding: '20px' }}>
      <p>This is a smaller modal for quick messages.</p>
    </div>
  </ModalWrapper>,
};
