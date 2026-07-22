/**
 * Tooltip Component Stories
 * 
 * Enterprise-grade tooltip component following Component Maturity Checklist.
 * 
 * Features:
 * - ✅ Two variants: 'default' (rectangular) and 'pointer' (with triangle)
 * - ✅ All 8 states (default, hover, focus, active, disabled, loading, empty, error)
 * - ✅ Design tokens (NO hardcoded values)
 * - ✅ Typography component (NO HTML tags in component)
 * - ✅ Full accessibility (ARIA, keyboard navigation)
 * 
 * Note: Demo styled components in this file still use some hardcoded values for simplicity.
 * The actual Tooltip component is fully compliant.
 */

import React, { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tooltip } from './Tooltip';
import { Typography } from '../Typography';
import styled from 'styled-components';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tooltip

Universal tooltip component for contextual information with default and pointer variants.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Tooltip } from '@ajaysoni7832/lean-ids-components';

<Tooltip content="Helpful information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

## Features
✅ **Two Variants** - Default (rectangular) and pointer (with arrow)
✅ **Four Positions** - Top, bottom, left, right
✅ **Portal Rendering** - No clipping issues
✅ **Accessible** - ARIA attributes

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | ReactNode | required | Tooltip content |
| children | ReactNode | required | Trigger element |
| variant | 'default' \\| 'pointer' | 'default' | Tooltip style |
| pointerPosition | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | Arrow position |
| show | boolean | - | Controlled visibility |

## Examples
### Info Icon Tooltip
\`\`\`tsx
<Tooltip content="More information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

### Chart Hover
\`\`\`tsx
<Tooltip content="Value: 42" variant="default">
  <ChartBar />
</Tooltip>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    // Explicit action spies for all callback props (Storybook best practice)
    onOpen: fn(),
    onClose: fn(),
    onAfterOpen: fn(),
    onAfterClose: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onEscape: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pointer'],
      description: 'Tooltip variant',
    },
    pointerPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the pointer triangle (only for pointer variant)',
    },
    onOpen: { action: 'opened' },
    onClose: { action: 'closed' },
    onAfterOpen: { action: 'after-opened' },
    onAfterClose: { action: 'after-closed' },
    onMouseEnter: { action: 'mouse-enter' },
    onMouseLeave: { action: 'mouse-leave' },
    onEscape: { action: 'escape-pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ============================================================================
// STYLED COMPONENTS FOR DEMO
// ============================================================================

const DemoContainer = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`;

const DemoButton = styled.button`
  padding: 12px 24px;
  background: #6222BC;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;

const InfoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;

const ChartSegment = styled.div`
  width: 120px;
  height: 120px;
  background: #E3725F;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`;

// ============================================================================
// STORIES - DEFAULT VARIANT (Rectangular)
// ============================================================================

/**
 * Default rectangular tooltip - perfect for chart hovers
 */
export const DefaultVariant: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <ChartSegment
          onMouseMove={(e) => {
            setTooltip({
              visible: true,
              x: e.clientX + 15,
              y: e.clientY - 40,
            });
          }}
          onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
        >
          Hover Me
        </ChartSegment>
        <Tooltip
          visible={tooltip.visible}
          heading="Product A"
          description="Value: $45,000 (35%)"
          x={tooltip.x}
          y={tooltip.y}
          variant="default"
        />
      </DemoContainer>
    );
  },
};

// ============================================================================
// STORIES - POINTER VARIANT (With Triangle)
// ============================================================================

/**
 * Pointer tooltip with triangle on top - for info icons
 */
export const PointerTop: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left,
              y: rect.bottom + 10,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="This chart shows revenue distribution by product category for the selected time period"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="top"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on bottom
 */
export const PointerBottom: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left + rect.width / 2 - 126.5,
              y: rect.top - 90,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Click the info icon to toggle this tooltip"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="bottom"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on left
 */
export const PointerLeft: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.right + 10,
              y: rect.top + rect.height / 2 - 40,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Tooltip with pointer on the left side"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="left"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on right
 */
export const PointerRight: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left - 263,
              y: rect.top + rect.height / 2 - 40,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Tooltip with pointer on the right side"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="right"
        />
      </DemoContainer>
    );
  },
};

// ============================================================================
// COMPARISON STORIES
// ============================================================================

/**
 * Side-by-side comparison of both variants
 */
export const VariantComparison: Story = {
  render: () => {
    const [defaultTooltip, setDefaultTooltip] = useState({ visible: false, x: 0, y: 0 });
    const [pointerTooltip, setPointerTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <div style={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px', fontFamily: 'Elevance Sans', fontSize: '14px', color: '#222' }}>
              Default (Hover)
            </p>
            <ChartSegment
              style={{ width: '100px', height: '100px' }}
              onMouseMove={(e) => {
                setDefaultTooltip({
                  visible: true,
                  x: e.clientX + 15,
                  y: e.clientY - 40,
                });
              }}
              onMouseLeave={() => setDefaultTooltip({ visible: false, x: 0, y: 0 })}
            >
              Chart
            </ChartSegment>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px', fontFamily: 'Elevance Sans', fontSize: '14px', color: '#222' }}>
              Pointer (Click)
            </p>
            <InfoIcon
              onClick={(e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect();
                setPointerTooltip((prev) => ({
                  visible: !prev.visible,
                  x: rect.left,
                  y: rect.bottom + 10,
                }));
              }}
            >
              i
            </InfoIcon>
          </div>
        </div>

        <Tooltip
          visible={defaultTooltip.visible}
          heading="Chart Data"
          description="Value: $125,000"
          x={defaultTooltip.x}
          y={defaultTooltip.y}
          variant="default"
        />

        <Tooltip
          visible={pointerTooltip.visible}
          heading="This is an info tooltip with a pointer triangle"
          x={pointerTooltip.x}
          y={pointerTooltip.y}
          variant="pointer"
          pointerPosition="top"
        />
      </DemoContainer>
    );
  },
};

/**
 * Always visible example for testing positioning
 */
export const AlwaysVisible: Story = {
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450 (42%)',
    x: 300,
    y: 200,
    variant: 'default',
  },
};

/**
 * Pointer variant always visible
 */
export const PointerAlwaysVisible: Story = {
  args: {
    visible: true,
    heading: 'This chart displays revenue breakdown across different product categories',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top',
  },
};

// ============================================================================
// NEW STATES - Component Maturity Checklist
// ============================================================================

/**
 * Loading state - shows spinner while content is being fetched
 */
export const LoadingState: Story = {
  args: {
    visible: true,
    isLoading: true,
    x: 300,
    y: 200,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in loading state displays a spinner animation. Use this when fetching tooltip content asynchronously.',
      },
    },
  },
};

/**
 * Empty state - shows when no content is available
 */
export const EmptyState: Story = {
  args: {
    visible: true,
    isEmpty: true,
    emptyMessage: 'No data available for this period',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in empty state displays a custom message when no content is available.',
      },
    },
  },
};

/**
 * Error state - shows error message with red border
 */
export const ErrorState: Story = {
  args: {
    visible: true,
    isInvalid: true,
    errorMessage: 'Failed to load tooltip data. Please try again.',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in error state displays an error message with a red border to indicate a problem.',
      },
    },
  },
};

/**
 * Disabled state - tooltip is visible but with reduced opacity
 */
export const DisabledState: Story = {
  args: {
    visible: true,
    disabled: true,
    heading: 'Disabled Tooltip',
    description: 'This tooltip is disabled and has reduced opacity',
    x: 300,
    y: 200,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in disabled state has reduced opacity (0.5) and no pointer events.',
      },
    },
  },
};

/**
 * Custom max width - override the default width
 */
export const CustomMaxWidth: Story = {
  args: {
    visible: true,
    heading: 'Custom Width Tooltip',
    description: 'This tooltip has a custom maximum width of 30rem, allowing for much longer content that would normally wrap or be constrained.',
    x: 300,
    y: 200,
    maxWidth: '30rem',
    variant: 'pointer',
    pointerPosition: 'top',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with custom maxWidth prop to accommodate longer content.',
      },
    },
  },
};

/**
 * With event callbacks - demonstrates lifecycle events
 */
export const WithEventCallbacks: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
    const [events, setEvents] = useState<string[]>([]);

    const addEvent = useCallback((event: string) => {
      setEvents(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${event}`]);
    }, []);

    const handleOpen = useCallback(() => addEvent('onOpen'), [addEvent]);
    const handleClose = useCallback(() => addEvent('onClose'), [addEvent]);
    const handleAfterOpen = useCallback(() => addEvent('onAfterOpen (150ms delay)'), [addEvent]);
    const handleAfterClose = useCallback(() => addEvent('onAfterClose (150ms delay)'), [addEvent]);
    const handleMouseEnter = useCallback(() => addEvent('onMouseEnter'), [addEvent]);
    const handleMouseLeave = useCallback(() => addEvent('onMouseLeave'), [addEvent]);
    const handleEscape = useCallback(() => {
      addEvent('onEscape (Escape key pressed)');
      setTooltip({ visible: false, x: 0, y: 0 });
    }, [addEvent]);

    return (
      <DemoContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <DemoButton
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setTooltip(prev => ({
                visible: !prev.visible,
                x: rect.left + rect.width / 2 - 126.5,
                y: rect.bottom + 10,
              }));
            }}
          >
            Toggle Tooltip
          </DemoButton>
          
          <div style={{ 
            padding: '12px', 
            background: '#f5f5f5', 
            borderRadius: '4px',
            minWidth: '300px',
            maxHeight: '150px',
            overflow: 'auto'
          }}>
            <Typography variant="caption" weight="semibold" style={{ marginBottom: '8px', display: 'block' }}>
              Event Log:
            </Typography>
            {events.length === 0 ? (
              <Typography variant="caption">No events yet. Click the button to trigger events.</Typography>
            ) : (
              events.map((event, i) => (
                <Typography key={i} variant="caption" style={{ display: 'block', marginBottom: '4px' }}>
                  {event}
                </Typography>
              ))
            )}
          </div>
        </div>

        <Tooltip
          visible={tooltip.visible}
          heading="Event Callbacks Demo"
          description="This tooltip fires events on open, close, and keyboard interactions"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="top"
          onOpen={handleOpen}
          onClose={handleClose}
          onAfterOpen={handleAfterOpen}
          onAfterClose={handleAfterClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onEscape={handleEscape}
        />
      </DemoContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all event callbacks: onOpen, onClose, onAfterOpen, onAfterClose, onMouseEnter, onMouseLeave, and onEscape. Press Escape key when tooltip is visible to trigger onEscape.',
      },
    },
  },
};
