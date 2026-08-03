/**
 * ProgressBar Storybook Stories
 * Comprehensive documentation with Typography component in ALL examples
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { Typography } from '../Typography';
import { useState, useEffect } from 'react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ProgressBar Component

A versatile progress indicator component for tracking completion status from 0% to 100%.

## Features
- **5 Size Variants:** xsmall (2px), small (6px), medium (8px), large (12px), xlarge (16px)
- **4 Type Variants:** default (purple), success (green), warning (yellow), alert (red)
- **Optional Label:** Display descriptive text and percentage
- **Loading State:** Indeterminate animation for unknown progress
- **Error State:** Visual error indication with message
- **Accessibility:** Full ARIA support and keyboard navigation
- **Customization:** Multiple override points (className, style, slots)
- **Polymorphic:** Render as different elements via 'as' prop

## When to Use
- Tracking file uploads, downloads, or installations
- Showing completion of multi-step processes
- Displaying user journey progress in onboarding flows
- Visualizing KPIs and metrics with different color accents

## Design Tokens
All styling uses design tokens - no hardcoded values. Colors, spacing, typography, and radii are theme-aware.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Size variant',
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'warning', 'alert'],
      description: 'Type variant for semantic meaning',
    },
    label: {
      control: 'text',
      description: 'Optional label text',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage value',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading/indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/**
 * Default story - Medium size, 50% progress
 */
export const Default: Story = {
  args: {
    value: 50,
    size: 'medium',
    type: 'default',
    label: 'Progress Label',
  },
  render: (args) => (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Typography variant="headingM" weight="semibold" style={{ marginBottom: '16px' }}>
        Default Progress Bar
      </Typography>
      <ProgressBar {...args} />
      <Typography variant="caption" style={{ marginTop: '12px', display: 'block' }}>
        A standard progress bar showing 50% completion with label and percentage display.
      </Typography>
    </div>
  ),
};

/**
 * All Size Variants
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '24px' }}>
          Size Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Five size options from xsmall (2px) to xlarge (16px) for different use cases.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            XSmall (2px)
          </Typography>
          <ProgressBar value={75} size="xsmall" label="Compact Progress" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Best for inline indicators and minimal UI footprint
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Small (6px)
          </Typography>
          <ProgressBar value={50} size="small" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Compact spaces without label display
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Medium (8px) - Default
          </Typography>
          <ProgressBar value={60} size="medium" label="Standard Progress" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Standard use cases with balanced visibility
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Large (12px)
          </Typography>
          <ProgressBar value={80} size="large" label="Prominent Progress" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Prominent displays and dashboard metrics
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            XLarge (16px)
          </Typography>
          <ProgressBar value={90} size="xlarge" label="Key Metric" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Key performance indicators and hero sections
          </Typography>
        </div>
      </div>
    </div>
  ),
};

/**
 * All Type Variants
 */
export const AllTypes: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '24px' }}>
          Type Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Four semantic types for different contexts and meanings.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Default (Purple)
          </Typography>
          <ProgressBar value={65} type="default" label="Standard Progress" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Standard progress tracking for general operations
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Success (Green)
          </Typography>
          <ProgressBar value={100} type="success" label="Upload Complete" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Completed or successful operations
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Warning (Yellow)
          </Typography>
          <ProgressBar value={45} type="warning" label="Storage Usage" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Operations requiring attention or caution
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
            Alert (Red)
          </Typography>
          <ProgressBar value={85} type="alert" label="Critical Threshold" />
          <Typography variant="caption" style={{ marginTop: '4px', display: 'block' }}>
            Critical operations or errors needing immediate attention
          </Typography>
        </div>
      </div>
    </div>
  ),
};

/**
 * Different Progress Values
 */
export const ProgressValues: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
        Progress Values
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={0} label="Not Started" />
        <ProgressBar value={25} label="Getting Started" />
        <ProgressBar value={50} label="Halfway There" />
        <ProgressBar value={75} label="Almost Done" />
        <ProgressBar value={100} type="success" label="Complete" />
      </div>
    </div>
  ),
};

/**
 * Loading/Indeterminate State
 */
export const LoadingState: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Loading State
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Use when progress is unknown or indeterminate. Shows animated indicator.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={0} isLoading label="Processing..." />
        <ProgressBar value={0} isLoading size="large" label="Analyzing Data..." />
        <ProgressBar value={0} isLoading type="success" label="Syncing..." />
      </div>
    </div>
  ),
};

/**
 * Error State
 */
export const ErrorState: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Error State
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Display error messages when operations fail or encounter issues.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar
          value={35}
          isInvalid
          errorMessage="Upload failed. Please try again."
          label="File Upload"
        />
        <ProgressBar
          value={60}
          isInvalid
          errorMessage="Connection timeout. Retrying..."
          label="Sync Progress"
          size="large"
        />
      </div>
    </div>
  ),
};

/**
 * Disabled State
 */
export const DisabledState: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Disabled State
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Reduced opacity and no interaction when disabled.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={50} disabled label="Disabled Progress" />
        <ProgressBar value={75} disabled type="success" label="Completed (Disabled)" size="large" />
      </div>
    </div>
  ),
};

/**
 * Without Label
 */
export const WithoutLabel: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Progress Bars Without Labels
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Compact display without label or percentage text.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar value={30} showPercentage={false} />
        <ProgressBar value={60} type="success" showPercentage={false} />
        <ProgressBar value={80} type="warning" size="large" showPercentage={false} />
      </div>
    </div>
  ),
};

/**
 * Custom Label Rendering
 */
export const CustomLabel: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Custom Label Rendering
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Use customLabel prop for complete control over label content.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar
          value={45}
          customLabel={({ value }) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body" weight="semibold">
                Downloading: report.pdf
              </Typography>
              <Typography variant="caption">
                {value}% • 2.5 MB / 5.5 MB
              </Typography>
            </div>
          )}
        />

        <ProgressBar
          value={75}
          type="success"
          size="large"
          customLabel={() => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Typography variant="headingS" weight="semibold">
                Installation Progress
              </Typography>
              <Typography variant="caption">
                Step 3 of 4 • Configuring dependencies...
              </Typography>
            </div>
          )}
        />
      </div>
    </div>
  ),
};

/**
 * Animated Progress Demo
 */
export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, []);

    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
            Animated Progress
          </Typography>
          <Typography variant="body" style={{ marginBottom: '24px' }}>
            Smooth transitions when progress value changes.
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ProgressBar value={progress} label="Auto-incrementing" />
          <ProgressBar
            value={progress}
            type={progress < 30 ? 'alert' : progress < 70 ? 'warning' : 'success'}
            size="large"
            label="Dynamic Type"
          />
        </div>
      </div>
    );
  },
};

/**
 * ForwardRef Usage
 */
export const ForwardRefUsage: Story = {
  render: () => {
    const progressRef = useState<HTMLDivElement | null>(null)[1];

    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
            ForwardRef Support
          </Typography>
          <Typography variant="body" style={{ marginBottom: '24px' }}>
            Access the underlying DOM element via ref for imperative operations.
          </Typography>
        </div>

        <ProgressBar
          ref={progressRef}
          value={70}
          label="Referenced Progress Bar"
          size="large"
        />

        <Typography variant="caption">
          The ref provides access to the container div element for DOM manipulation.
        </Typography>
      </div>
    );
  },
};

/**
 * Polymorphic 'as' Prop
 */
export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Polymorphic Rendering
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Render as different HTML elements using the 'as' prop.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar as="div" value={50} label="Rendered as div (default)" />
        <ProgressBar as="section" value={75} label="Rendered as section" />
        <ProgressBar as="article" value={90} type="success" label="Rendered as article" />
      </div>

      <Typography variant="caption">
        Inspect the DOM to see different HTML elements being used.
      </Typography>
    </div>
  ),
};

/**
 * Customization via ClassName
 */
export const CustomStyling: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Custom Styling
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Override styles using className, style, and slot-specific classNames.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar
          value={60}
          label="Custom Container"
          className="custom-progress"
          style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}
        />

        <ProgressBar
          value={80}
          type="success"
          label="Custom Track & Fill"
          trackClassName="custom-track"
          fillClassName="custom-fill"
        />
      </div>
    </div>
  ),
};

/**
 * Accessibility Features
 */
export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Full ARIA support with proper roles, labels, and state attributes.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ProgressBar
          value={50}
          label="File Upload"
          aria-label="File upload progress"
          aria-describedby="upload-description"
        />
        <Typography variant="caption">
          <span id="upload-description">Uploading document.pdf to cloud storage</span>
        </Typography>

        <ProgressBar
          value={0}
          isLoading
          label="Processing"
          aria-label="Processing your request"
        />

        <ProgressBar
          value={75}
          isInvalid
          errorMessage="Network error occurred"
          label="Sync Status"
          aria-label="Synchronization progress"
        />
      </div>

      <div style={{ marginTop: '16px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '8px' }}>
          ARIA Attributes
        </Typography>
        <div style={{ paddingLeft: '20px' }}>
          <Typography variant="caption" as="div">
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>role="progressbar" on track element</li>
              <li>aria-valuenow for current value</li>
              <li>aria-valuemin and aria-valuemax for range</li>
              <li>aria-label for accessible name</li>
              <li>aria-busy for loading state</li>
              <li>aria-invalid for error state</li>
              <li>role="alert" for error messages</li>
            </ul>
          </Typography>
        </div>
      </div>
    </div>
  ),
};

/**
 * Real-World Examples
 */
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Typography variant="headingL" weight="semibold" style={{ marginBottom: '16px' }}>
        Real-World Use Cases
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
            File Upload Dashboard
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={100} type="success" label="report-2024.pdf" size="small" />
            <ProgressBar value={65} label="presentation.pptx" size="small" />
            <ProgressBar value={30} type="warning" label="large-video.mp4" size="small" />
          </div>
        </div>

        <div>
          <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
            Storage Usage Monitor
          </Typography>
          <ProgressBar
            value={85}
            type="alert"
            label="Storage Capacity"
            size="large"
            customLabel={({ value }) => (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body" weight="semibold">
                  Storage Usage
                </Typography>
                <Typography variant="caption">
                  {value}% • 8.5 GB / 10 GB
                </Typography>
              </div>
            )}
          />
        </div>

        <div>
          <Typography variant="headingM" weight="semibold" style={{ marginBottom: '12px' }}>
            Multi-Step Onboarding
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={100} type="success" label="Step 1: Account Setup" showPercentage={false} />
            <ProgressBar value={100} type="success" label="Step 2: Profile Information" showPercentage={false} />
            <ProgressBar value={50} label="Step 3: Preferences" showPercentage={false} />
            <ProgressBar value={0} label="Step 4: Verification" showPercentage={false} />
          </div>
        </div>
      </div>
    </div>
  ),
};
