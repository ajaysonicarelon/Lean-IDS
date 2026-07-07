import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';
import { CheckCircleOutlined, Info, QueryBuilder, Close, Done } from '@mui/icons-material';
import { Badge } from '../Badge';
import { Chip } from '../Chip';
import { Button } from '../Button';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A collapsible content container with customizable header, content, and footer.

## Features
- Collapsed and expanded states with smooth transitions
- Customizable lead icon (24px Material Icons)
- Flexible labels and metadata area (badges, chips, counters, custom content)
- Optional description text
- Expandable content area
- Optional footer with text and action buttons
- **Supports nested accordions** - accordions can be placed inside other accordions
- Controlled or uncontrolled mode

## Usage

\`\`\`tsx
import { Accordion } from '@ajaysoni7832/lean-ids-components';
import { CheckCircleOutlined } from '@mui/icons-material';

<Accordion
  heading="Accordion Heading"
  description="Put a short description related to the accordion heading"
  leadIcon={<CheckCircleOutlined />}
  labelsAndMetadata={
    <>
      <Badge variant="info">Label</Badge>
      <Chip label="Label" />
    </>
  }
  showFooter
  footerText="Footer one liner"
  footerActions={<Button variant="primary">Button</Button>}
>
  {/* Your content here */}
</Accordion>
\`\`\`

## Nested Accordions

Accordions can be nested inside other accordions:

\`\`\`tsx
<Accordion heading="Parent Accordion">
  <Accordion heading="Child Accordion 1">
    Content for child 1
  </Accordion>
  <Accordion heading="Child Accordion 2">
    Content for child 2
  </Accordion>
</Accordion>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Accordion heading text',
    },
    description: {
      control: 'text',
      description: 'Description text below heading',
    },
    leadIcon: {
      control: false,
      description: 'Lead icon (24px) - shown before heading',
    },
    showLeadIcon: {
      control: 'boolean',
      description: 'Show/hide lead icon',
    },
    labelsAndMetadata: {
      control: false,
      description: 'Custom content for labels and metadata area (badges, chips, counters, etc.)',
    },
    children: {
      control: false,
      description: 'Content to display when expanded',
    },
    footerText: {
      control: 'text',
      description: 'Footer text',
    },
    footerActions: {
      control: false,
      description: 'Footer action buttons',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show/hide footer',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Initially expanded state (uncontrolled)',
    },
    expanded: {
      control: 'boolean',
      description: 'Controlled expanded state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the accordion',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default story - Collapsed
export const Default: Story = {
  args: {
    heading: 'Accordion Heading',
    description: 'Put a short description related to the accordion heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: (
      <>
        <Badge variant="info" label="Label" />
        <Chip label="Label" />
      </>
    ),
    children: (
      <div style={{ padding: '20px' }}>
        <p>This is the accordion content area. You can put any content here.</p>
      </div>
    ),
    showFooter: false,
    defaultExpanded: false,
  },
};

// Expanded state
export const Expanded: Story = {
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: (
      <Button variant="primary" size="small">
        <Done style={{ width: 16, height: 16 }} />
        Button
        <Close style={{ width: 16, height: 16 }} />
      </Button>
    ),
  },
};

// Without Lead Icon
export const WithoutLeadIcon: Story = {
  args: {
    ...Default.args,
    showLeadIcon: false,
  },
};

// Without Description
export const WithoutDescription: Story = {
  args: {
    heading: 'Accordion Heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: (
      <div style={{ padding: '20px' }}>
        <p>Content without description</p>
      </div>
    ),
  },
};

// Without Labels and Metadata
export const WithoutLabelsAndMetadata: Story = {
  args: {
    heading: 'Simple Accordion',
    description: 'A simple accordion without badges or chips',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: (
      <div style={{ padding: '20px' }}>
        <p>Simple content</p>
      </div>
    ),
  },
};

// With Footer
export const WithFooter: Story = {
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: (
      <>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          <Done style={{ width: 16, height: 16 }} />
          Confirm
        </Button>
      </>
    ),
  },
};

// Nested Accordions
export const NestedAccordions: Story = {
  args: {
    heading: 'Parent Accordion',
    description: 'This accordion contains nested child accordions',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
        <Accordion
          heading="Child Accordion 1"
          description="First nested accordion"
          leadIcon={<CheckCircleOutlined />}
          showLeadIcon={true}
        >
          <div style={{ padding: '20px' }}>
            <p>Content of child accordion 1</p>
          </div>
        </Accordion>
        
        <Accordion
          heading="Child Accordion 2"
          description="Second nested accordion"
          leadIcon={<CheckCircleOutlined />}
          showLeadIcon={true}
          showFooter={true}
          footerText="Child footer"
          footerActions={<Button variant="primary" size="small">Action</Button>}
        >
          <div style={{ padding: '20px' }}>
            <p>Content of child accordion 2</p>
          </div>
        </Accordion>
      </div>
    ),
  },
};

// Deeply Nested Accordions (3 levels)
export const DeeplyNestedAccordions: Story = {
  args: {
    heading: 'Level 1 Accordion',
    description: 'Top level accordion',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
        <Accordion
          heading="Level 2 Accordion"
          description="Second level nested accordion"
          leadIcon={<CheckCircleOutlined />}
          showLeadIcon={true}
          defaultExpanded={true}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
            <Accordion
              heading="Level 3 Accordion"
              description="Third level nested accordion"
              leadIcon={<CheckCircleOutlined />}
              showLeadIcon={true}
            >
              <div style={{ padding: '20px' }}>
                <p>Deepest level content</p>
              </div>
            </Accordion>
          </div>
        </Accordion>
      </div>
    ),
  },
};

// Custom Labels and Metadata
export const CustomLabelsAndMetadata: Story = {
  args: {
    heading: 'Custom Metadata Example',
    description: 'Accordion with custom labels, counters, and badges',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: (
      <>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">2 Pending</Badge>
        <Chip label="High Priority" variant="filled" />
        <span style={{ fontSize: '14px', color: '#909090' }}>Updated 2 hours ago</span>
      </>
    ),
    children: (
      <div style={{ padding: '20px' }}>
        <p>Content with custom metadata</p>
      </div>
    ),
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

// Controlled Mode
export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Expand'} Accordion
        </Button>
        
        <Accordion
          heading="Controlled Accordion"
          description="This accordion is controlled by external state"
          leadIcon={<CheckCircleOutlined />}
          showLeadIcon={true}
          expanded={expanded}
          onExpandChange={setExpanded}
        >
          <div style={{ padding: '20px' }}>
            <p>Controlled content</p>
          </div>
        </Accordion>
      </div>
    );
  },
};

// Multiple Accordions
export const MultipleAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Accordion
        heading="First Accordion"
        description="Description for first accordion"
        leadIcon={<CheckCircleOutlined />}
        showLeadIcon={true}
        labelsAndMetadata={<Badge variant="info">New</Badge>}
      >
        <div style={{ padding: '20px' }}>
          <p>Content for first accordion</p>
        </div>
      </Accordion>
      
      <Accordion
        heading="Second Accordion"
        description="Description for second accordion"
        leadIcon={<CheckCircleOutlined />}
        showLeadIcon={true}
        labelsAndMetadata={<Badge variant="success">Completed</Badge>}
      >
        <div style={{ padding: '20px' }}>
          <p>Content for second accordion</p>
        </div>
      </Accordion>
      
      <Accordion
        heading="Third Accordion"
        description="Description for third accordion"
        leadIcon={<CheckCircleOutlined />}
        showLeadIcon={true}
        labelsAndMetadata={<Badge variant="warning">In Progress</Badge>}
        showFooter={true}
        footerText="Last updated: Today"
        footerActions={<Button variant="primary" size="small">View Details</Button>}
      >
        <div style={{ padding: '20px' }}>
          <p>Content for third accordion</p>
        </div>
      </Accordion>
    </div>
  ),
};
