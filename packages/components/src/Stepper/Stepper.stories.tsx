/**
 * Stepper Storybook Stories
 * Comprehensive documentation — Typography component used in ALL examples.
 * No raw <h1>, <p> or other HTML tags outside of Typography.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Stepper } from './Stepper';
import { StepIndicator } from './StepIndicator';
import { StepConnector } from './StepConnector';
import { Typography } from '../Typography';
import type { StepItem } from './Stepper.types';

// ─────────────────────────────────────────────────────────────────────────────
// META
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Stepper guides users through a sequence of steps in a multi-step flow such as a form, checkout, or onboarding wizard.

**Orientations:** Horizontal · Vertical

**Sizes:** Small (16px) · Medium (24px) · Large (32px)

**Types:** Default · Safe · Warning · Alert

**Step states:** Completed · Active · Incomplete · Error · Disabled

**Sub-components:** \`StepIndicator\` and \`StepConnector\` are also exported for fully custom layouts.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: { type: 'number', min: 0, max: 5 },
      description: 'Zero-based index of the active step',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['default', 'safe', 'warning', 'alert'],
    },
    content: {
      control: 'radio',
      options: ['icon', 'number'],
    },
    clickable: {
      control: 'boolean',
    },
    showLabel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// ─────────────────────────────────────────────────────────────────────────────
// SAMPLE DATA
// ─────────────────────────────────────────────────────────────────────────────

const basicSteps: StepItem[] = [
  { label: 'Personal Info', description: 'Your basic details' },
  { label: 'Review',        description: 'Check your info' },
  { label: 'Confirm',       description: 'Submit form' },
];

const fullSteps: StepItem[] = [
  { label: 'Account',    description: 'Create credentials' },
  { label: 'Profile',    description: 'Personal details',  optional: true },
  { label: 'Payment',    description: 'Billing info' },
  { label: 'Review',     description: 'Check everything' },
  { label: 'Done',       description: 'All complete' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 1. DEFAULT — Horizontal, Large, activeStep=1
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Default horizontal stepper with 3 steps.
 * Step 0 is completed, Step 1 is active (current), Step 2 is incomplete.
 */
export const Default: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    orientation: 'horizontal',
    size: 'large',
    type: 'default',
    content: 'icon',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. ALL SIZES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Side-by-side comparison of all three bubble sizes.
 */
export const AllSizes: Story = {
  args: {
    content: "number"
  },

  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="caption" weight="medium" as="span">Small (16px)</Typography>
        <div style={{ marginTop: '12px' }}>
          <Stepper steps={basicSteps} activeStep={1} size="small" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Medium (24px)</Typography>
        <div style={{ marginTop: '12px' }}>
          <Stepper steps={basicSteps} activeStep={1} size="medium" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Large (32px) — Default</Typography>
        <div style={{ marginTop: '12px' }}>
          <Stepper steps={basicSteps} activeStep={1} size="large" />
        </div>
      </div>
    </div>
  )
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. ALL TYPES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * All four semantic type variants — default (purple), safe (green),
 * warning (yellow), alert (red).
 */
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['default', 'safe', 'warning', 'alert'] as const).map((type) => (
        <div key={type}>
          <Typography variant="caption" weight="medium" as="span">
            Type: {type}
          </Typography>
          <div style={{ marginTop: '12px' }}>
            <Stepper steps={basicSteps} activeStep={1} type={type} />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. ICON vs NUMBER CONTENT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Icon content (default checkmark) vs number content inside the bubble.
 */
export const ContentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="caption" weight="medium" as="span">Content: Icon (default)</Typography>
        <div style={{ marginTop: '12px' }}>
          <Stepper steps={basicSteps} activeStep={1} content="icon" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Content: Number</Typography>
        <div style={{ marginTop: '12px' }}>
          <Stepper steps={basicSteps} activeStep={1} content="number" />
        </div>
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. VERTICAL ORIENTATION
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Vertical stepper — steps stacked top-to-bottom with a vertical connector.
 */
export const Vertical: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    orientation: 'vertical',
    size: 'large',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. ALL STEP STATUSES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Every possible step status displayed in a single stepper using explicit
 * per-step `status` overrides.
 */
export const AllStatuses: Story = {
  render: () => {
    const statusSteps: StepItem[] = [
      { label: 'Completed',  status: 'completed' },
      { label: 'Active',     status: 'active' },
      { label: 'Incomplete', status: 'incomplete' },
      { label: 'Error',      status: 'error',    errorMessage: 'Validation failed' },
      { label: 'Disabled',   status: 'disabled' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          All five statuses in one stepper
        </Typography>
        <Stepper steps={statusSteps} activeStep={1} />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. WITH DESCRIPTION + OPTIONAL STEPS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Steps with secondary description lines and optional step markers.
 */
export const WithDescriptionAndOptional: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="caption" weight="medium" as="span">
        Steps with description and optional flag
      </Typography>
      <Stepper steps={fullSteps} activeStep={2} />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. ERROR STATE (per-step)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Active step in error state — red bubble outline + inline error message.
 * This is the "Active Error" instance: an in-progress step that failed.
 */
export const ErrorState: Story = {
  render: () => {
    const errorSteps: StepItem[] = [
      { label: 'Account',  status: 'completed' },
      { label: 'Payment',  status: 'error', errorMessage: 'Card number is invalid' },
      { label: 'Confirm',  status: 'incomplete' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          Step 2 — active error (validation failed)
        </Typography>
        <Stepper steps={errorSteps} activeStep={1} />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. CUSTOM ICONS PER STEP
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Each step uses a custom Material icon instead of the default checkmark.
 * Pass the icon node on the step object — it overrides the bubble content
 * for that step only.
 */
export const CustomIcons: Story = {
  render: () => {
    const iconSteps: StepItem[] = [
      { label: 'Account', icon: <HomeIcon fontSize="inherit" />,    status: 'completed' },
      { label: 'Profile', icon: <PersonIcon fontSize="inherit" />,  status: 'active' },
      { label: 'Payment', icon: <PaymentIcon fontSize="inherit" />, status: 'incomplete' },
      { label: 'Done',    icon: <CheckCircleIcon fontSize="inherit" />, status: 'incomplete' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          Custom per-step icons from @mui/icons-material
        </Typography>
        <Stepper steps={iconSteps} activeStep={1} />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. CLICKABLE — Non-linear navigation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Clickable stepper — users can jump to any non-disabled step.
 * onStepClick fires with the step index and step data.
 * Try Tab + Enter / Space for keyboard navigation.
 */
export const Clickable: Story = {
  render: () => {
    const [active, setActive] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          Clickable stepper — active step: {active + 1}
        </Typography>
        <Stepper
          steps={fullSteps}
          activeStep={active}
          clickable
          onStepClick={(i) => setActive(i)}
        />
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            style={{ padding: '8px 16px', cursor: active === 0 ? 'not-allowed' : 'pointer' }}
          >
            Back
          </button>
          <button
            onClick={() => setActive(Math.min(fullSteps.length - 1, active + 1))}
            disabled={active === fullSteps.length - 1}
            style={{ padding: '8px 16px', cursor: active === fullSteps.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 11. DISABLED STEPS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Steps marked as disabled are greyed out and not clickable,
 * even when the stepper has clickable=true.
 */
export const DisabledSteps: Story = {
  render: () => {
    const disabledSteps: StepItem[] = [
      { label: 'Account',  status: 'completed' },
      { label: 'Profile',  status: 'active' },
      { label: 'Payment',  disabled: true },
      { label: 'Review',   disabled: true },
      { label: 'Done',     disabled: true },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          Steps 3–5 are disabled (locked)
        </Typography>
        <Stepper steps={disabledSteps} activeStep={1} clickable />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 12. WITHOUT LABELS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Compact stepper with labels hidden — useful in tight horizontal spaces
 * or when the step context is obvious.
 */
export const NoLabels: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    showLabel: false,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 13. COMPOSING WITH SUB-COMPONENTS (custom layout)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Advanced: using StepIndicator + StepConnector directly for a fully custom
 * layout (e.g. step label on the right in a vertical flow).
 */
export const CustomLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="caption" weight="medium" as="span">
        Custom layout using StepIndicator + StepConnector primitives
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <StepIndicator status="completed" size="large" label="Step 1" />
        <StepConnector orientation="horizontal" completed type="default" style={{ flex: 1 }} />
        <StepIndicator status="active" size="large" content="number" stepNumber={2} label="Step 2" />
        <StepConnector orientation="horizontal" completed={false} type="default" style={{ flex: 1 }} />
        <StepIndicator status="incomplete" size="large" content="number" stepNumber={3} label="Step 3" />
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 14. FORWARD REF USAGE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Demonstrates forwardRef — the ref is attached to the root DOM node
 * of the Stepper container.
 */
export const WithRef: Story = {
  render: () => {
    // In real usage: const ref = useRef<HTMLDivElement>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="caption" weight="medium" as="span">
          forwardRef — the ref attaches to the root stepper div
        </Typography>
        <Stepper
          steps={basicSteps}
          activeStep={1}
          ref={(el) => {
            if (el) el.dataset.refAttached = 'true';
          }}
        />
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 15. POLYMORPHIC 'as' PROP
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Stepper rendered as a <nav> element using the polymorphic 'as' prop.
 */
export const AsNav: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="caption" weight="medium" as="span">
        Stepper rendered as a {"<nav>"} element
      </Typography>
      <Stepper
        as="nav"
        steps={basicSteps}
        activeStep={1}
        aria-label="Checkout steps"
      />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// 16. VERTICAL + ALL TYPES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Vertical orientation with all semantic type variants.
 */
export const VerticalAllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', flexWrap: 'wrap' }}>
      {(['default', 'safe', 'warning', 'alert'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="caption" weight="medium" as="span">{type}</Typography>
          <Stepper steps={basicSteps} activeStep={1} orientation="vertical" type={type} />
        </div>
      ))}
    </div>
  ),
};
