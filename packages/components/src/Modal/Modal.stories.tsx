import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Typography } from '../Typography';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A fully customizable, accessible modal dialog component that meets enterprise Component Maturity standards.

## ✨ Features

- **🎯 Fully Accessible** - ARIA attributes, keyboard navigation, focus trap, auto-focus
- **📐 Responsive** - NO hardcoded pixels, uses design tokens and relative units
- **🎨 Highly Customizable** - 50+ props, size presets, render props, multiple override points
- **⚡ State Management** - Loading, error, empty, disabled states built-in
- **🔧 forwardRef Support** - Access DOM node via ref
- **♿ Focus Management** - Focus trap, auto-focus, return focus
- **🎭 Polymorphic** - Render as different elements via \`as\` prop
- **📝 Typography Component** - Uses Lean IDS Typography for consistent text styling

## 📦 Basic Usage

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
      >
        {/* Your modal content */}
      </Modal>
    </>
  );
}
\`\`\`

> **Note:** Modal uses the Lean IDS Typography component internally for title and description, ensuring consistent text styling across the design system.

## 🎯 Size Presets

Use size presets for common modal sizes:

\`\`\`tsx
<Modal size="small">Quick message</Modal>
<Modal size="medium">Default size</Modal>
<Modal size="large">Complex form</Modal>
<Modal size="fullscreen">Full screen view</Modal>
\`\`\`

## 🔄 States

\`\`\`tsx
// Loading state
<Modal isLoading={true}>Processing...</Modal>

// Error state
<Modal isInvalid={true} errorMessage="Please fix errors">
  <Form />
</Modal>

// Empty state
<Modal isEmpty={true} emptyMessage="No data available" />
\`\`\`

## 🎨 Customization

\`\`\`tsx
// Custom footer with render prop
<Modal
  customFooter={({ onClose, onSubmit }) => (
    <Button onClick={onSubmit}>Custom Action</Button>
  )}
/>

// Custom header
<Modal
  customHeader={({ onClose }) => <CustomHeader />}
/>

// Multiple className overrides
<Modal
  className="custom-modal"
  overlayClassName="custom-overlay"
  headerClassName="custom-header"
  bodyClassName="custom-body"
  footerClassName="custom-footer"
/>
\`\`\`

## ♿ Accessibility

- Automatic ARIA attributes (\`role\`, \`aria-modal\`, \`aria-labelledby\`)
- Keyboard navigation (Escape to close, Tab for focus trap)
- Focus management (auto-focus, return focus)
- Screen reader support

## 📐 Responsive Sizing

\`\`\`tsx
// Use CSS units (NOT pixels)
<Modal width="50rem" maxWidth="90vw" height="auto" maxHeight="85vh" />

// Or use size presets
<Modal size="large" />
\`\`\`

## 🔧 Advanced Features

- **forwardRef**: Access DOM node via ref
- **Polymorphism**: Render as different element via \`as\` prop
- **Event Lifecycle**: \`onOpen\`, \`onAfterOpen\`, \`onAfterClose\`
- **Behavior Control**: \`preventBodyScroll\`, \`enableFocusTrap\`, \`autoFocus\`
- **Animation Control**: \`animationDuration\`, \`disableAnimation\`
- **Typography Integration**: Uses Lean IDS Typography component for consistent text styling

## 📝 Typography Usage

Modal uses Typography component internally for title and description. You can also use it in your content:

\`\`\`tsx
import { Typography } from '@ajaysoni7832/lean-ids-components';

<Modal title="My Modal">
  <Typography variant="headingM" weight="semibold">Section Title</Typography>
  <Typography variant="body">Body text with consistent styling</Typography>
  <Typography variant="caption">Small caption text</Typography>
</Modal>
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
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Modal Body Content</Typography>
            <Typography variant="body">This is the body content of the modal. You can put any content here.</Typography>
            <Typography variant="body" weight="medium">The modal includes:</Typography>
            <div style={{ paddingLeft: '20px' }}>
              <Typography variant="body">• Header with title and description</Typography>
              <Typography variant="body">• Close button</Typography>
              <Typography variant="body">• Scrollable body</Typography>
              <Typography variant="body">• Footer with Reset, Cancel, and Submit buttons</Typography>
            </div>
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
            <Typography variant="body">This action cannot be undone. Please confirm that you want to continue.</Typography>
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
            <Typography variant="body">Are you sure you want to delete this item? This action cannot be undone.</Typography>
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
            <Typography variant="body">This modal has a custom footer with different buttons.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Large modal with scrollable content.
 * Use size="large" for modals with extensive content.
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
          size="large"
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Terms of Service</Typography>
            {[...Array(20)].map((_, i) => (
              <Typography key={i} variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            ))}
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Small modal using size preset.
 * Use size="small" for quick messages and notifications.
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
          size="small"
          showReset={false}
          submitLabel="Got it"
        >
          <div style={{ padding: '20px' }}>
            <Typography variant="body">This is a smaller modal for quick messages.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Loading state modal.
 * Shows loading overlay with spinner and disables all buttons.
 */
export const LoadingState: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsOpen(false);
      }, 3000);
    };

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Process Data</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Processing Request"
          description="Please wait while we process your data"
          isLoading={isLoading}
          onSubmit={handleSubmit}
          submitLabel="Start Processing"
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="body">Click "Start Processing" to see the loading state.</Typography>
            <Typography variant="body">All buttons will be disabled during processing.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Error state modal.
 * Shows error border and error message when validation fails.
 */
export const ErrorState: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = () => {
      setHasError(true);
    };

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Submit Form</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setHasError(false);
          }}
          title="User Registration"
          description="Please fill out all required fields"
          isInvalid={hasError}
          errorMessage="Please correct the errors below before submitting"
          onSubmit={handleSubmit}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              error={hasError}
              helperText={hasError ? "Valid email is required" : ""}
            />
            <InputField
              label="Password"
              placeholder="Enter password"
              type="password"
              error={hasError}
              helperText={hasError ? "Password must be at least 8 characters" : ""}
            />
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Empty state modal.
 * Shows empty state message when no content is available.
 */
export const EmptyState: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>View Notifications</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Notifications"
          description="Your notification center"
          isEmpty={true}
          emptyMessage="No notifications at this time"
          showSubmit={false}
          showReset={false}
        >
          <div />
        </Modal>
      </div>
    );
  },
};

/**
 * Fullscreen modal.
 * Use size="fullscreen" for immersive experiences.
 */
export const FullscreenModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Fullscreen Experience"
          description="This modal takes up the entire viewport"
          size="fullscreen"
          showReset={false}
        >
          <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="headingM" weight="semibold">Fullscreen Content</Typography>
            <Typography variant="body">This modal uses size="fullscreen" to take up the entire viewport.</Typography>
            <Typography variant="body">Perfect for immersive experiences, image galleries, or detailed views.</Typography>
            <div style={{ flex: 1, background: '#f5f5f5', borderRadius: '8px', padding: '20px' }}>
              <Typography variant="body">Content area that fills available space</Typography>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Custom dimensions with CSS units.
 * Use width, maxWidth, height, maxHeight with CSS units for precise control.
 */
export const CustomDimensions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Custom Size</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Custom Dimensions"
          description="Modal with custom width and height"
          width="50rem"
          maxWidth="90vw"
          height="auto"
          maxHeight="80vh"
          showReset={false}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="body">This modal uses custom dimensions:</Typography>
            <div style={{ paddingLeft: '20px' }}>
              <Typography variant="body">• width: 50rem</Typography>
              <Typography variant="body">• maxWidth: 90vw</Typography>
              <Typography variant="body">• height: auto</Typography>
              <Typography variant="body">• maxHeight: 80vh</Typography>
            </div>
            <Typography variant="body">All values use CSS units for responsive behavior.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Render props for custom footer.
 * Use customFooter as a function to access modal callbacks.
 */
export const RenderPropsFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Start Wizard</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setStep(1);
          }}
          title={`Step ${step} of 3`}
          description="Multi-step wizard with custom footer"
          customFooter={({ onClose }) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button
                variant="tertiary"
                size="medium"
                onClick={onClose}
              >
                Cancel
              </Button>
              <div style={{ display: 'flex', gap: '12px' }}>
                {step > 1 && (
                  <Button
                    variant="secondary"
                    size="medium"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={() => setStep(step + 1)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={() => {
                      console.log('Wizard completed');
                      onClose();
                      setStep(1);
                    }}
                  >
                    Finish
                  </Button>
                )}
              </div>
            </div>
          )}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="headingM" weight="semibold">Step {step}</Typography>
            <Typography variant="body">This is the content for step {step}.</Typography>
            <Typography variant="body">The footer uses a render prop to access onClose and implement custom navigation.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal with ref access.
 * Use forwardRef to access the modal DOM node.
 */
export const WithRef: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = React.useRef<HTMLDivElement>(null);

    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {
        if (modalRef.current) {
          console.log('Modal DOM node:', modalRef.current);
          console.log('Modal dimensions:', {
            width: modalRef.current.offsetWidth,
            height: modalRef.current.offsetHeight,
          });
        }
      }, 100);
    };

    return (
      <div>
        <Button onClick={handleOpen}>Open with Ref</Button>
        <Modal
          ref={modalRef}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Ref"
          description="Check console for DOM node access"
          showReset={false}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="body">This modal uses forwardRef to expose the DOM node.</Typography>
            <Typography variant="body">Open the console to see the logged modal element and dimensions.</Typography>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * Modal with Typography component usage.
 * Shows how to use Typography component for rich text formatting within modal content.
 */
export const WithTypography: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>View Article</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Typography in Modal"
          description="Modal content using Lean IDS Typography component"
          size="medium"
          showReset={false}
          showSubmit={false}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="headingM" weight="semibold">
              Using Typography Component
            </Typography>
            
            <Typography variant="body">
              The Modal component uses the Lean IDS Typography component internally for the title and description.
              You can also use Typography within your modal content for consistent text styling.
            </Typography>

            <Typography variant="headingS" weight="medium">
              Benefits
            </Typography>

            <Typography variant="body">
              • Consistent typography across all components
            </Typography>
            <Typography variant="body">
              • Automatic design token synchronization
            </Typography>
            <Typography variant="body">
              • No custom styled text components needed
            </Typography>
            <Typography variant="body">
              • Semantic HTML with proper heading hierarchy
            </Typography>

            <Typography variant="caption" style={{ marginTop: '8px' }}>
              Note: Typography component supports variants like displayL, headingXL, headingL, headingM, 
              headingS, body, paragraph, caption, and code.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  },
};
