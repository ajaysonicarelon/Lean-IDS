import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentController } from './SegmentController';
import { SegmentControllerGroup } from './SegmentControllerGroup';
import { Typography } from '../Typography';
import { Home, Architecture, Search, AcUnit, School } from '@mui/icons-material';

const meta: Meta<typeof SegmentController> = {
  title: 'Components/SegmentController',
  component: SegmentController,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The SegmentController component provides a tab-like interface for switching between different views or options. It supports multiple sizes, states, and full keyboard navigation.

## Features
- **Sizes**: Small, Medium, Large
- **States**: Default, Hover, Focus, Active, Selected, Disabled
- **Accessibility**: Full ARIA support, keyboard navigation (Arrow keys, Home, End)
- **Customization**: Lead/trail icon slots, polymorphic \`as\` prop
- **Composition**: Works standalone or within SegmentControllerGroup

## Accessibility
- Uses \`role="tab"\` for proper ARIA semantics
- Keyboard navigation with Arrow keys, Home, and End
- Focus management with \`tabIndex\`
- Screen reader support with \`aria-selected\` and \`aria-label\`

## Usage
Use SegmentController for navigation between views, filtering options, or toggling between different content sections.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the segment controller',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the segment is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the segment is disabled',
    },
    showLeadIcon: {
      control: 'boolean',
      description: 'Show or hide the lead icon slot',
    },
    showTrailIcon: {
      control: 'boolean',
      description: 'Show or hide the trail icon slot',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentController>;

export const Default: Story = {
  args: {
    children: 'Label',
    size: 'large',
    selected: false,
    disabled: false,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Large</Typography>
        <div style={{ display: 'flex', gap: '8px' }}>
          <SegmentController size="large" leadIcon={<Home />}>
            College
          </SegmentController>
          <SegmentController size="large" selected leadIcon={<Architecture />}>
            Basic
          </SegmentController>
          <SegmentController size="large" leadIcon={<AcUnit />}>
            School
          </SegmentController>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Medium</Typography>
        <div style={{ display: 'flex', gap: '8px' }}>
          <SegmentController size="medium" leadIcon={<Home />}>
            College
          </SegmentController>
          <SegmentController size="medium" selected leadIcon={<Architecture />}>
            Basic
          </SegmentController>
          <SegmentController size="medium" leadIcon={<AcUnit />}>
            School
          </SegmentController>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Small</Typography>
        <div style={{ display: 'flex', gap: '8px' }}>
          <SegmentController size="small" leadIcon={<Home fontSize="small" />}>
            College
          </SegmentController>
          <SegmentController size="small" selected leadIcon={<Architecture fontSize="small" />}>
            Basic
          </SegmentController>
          <SegmentController size="small" leadIcon={<AcUnit fontSize="small" />}>
            School
          </SegmentController>
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Default State</Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Selected State</Typography>
        <SegmentController size="large" selected leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Disabled State</Typography>
        <SegmentController size="large" disabled leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Hover State</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Hover over the segment to see the hover state
        </Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Focus State</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Tab to focus the segment to see the focus ring
        </Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Lead Icon Only</Typography>
        <SegmentController size="large" leadIcon={<Home />} showTrailIcon={false}>
          Home
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Trail Icon Only</Typography>
        <SegmentController size="large" trailIcon={<Search />} showLeadIcon={false}>
          Search
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Both Icons</Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Architecture
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">No Icons</Typography>
        <SegmentController size="large" showLeadIcon={false} showTrailIcon={false}>
          Label Only
        </SegmentController>
      </div>
    </div>
  ),
};

export const SegmentGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('college');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Large</Typography>
          <SegmentControllerGroup
            size="large"
            value={value}
            onChange={setValue}
            aria-label="Education level selector"
          >
            <SegmentController value="college" leadIcon={<Home />}>
              College
            </SegmentController>
            <SegmentController value="basic" leadIcon={<Architecture />}>
              Basic
            </SegmentController>
            <SegmentController value="school" leadIcon={<AcUnit />}>
              School
            </SegmentController>
          </SegmentControllerGroup>
          <Typography variant="caption" color="palette.neutral.600">
            Selected: {value}
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Medium</Typography>
          <SegmentControllerGroup size="medium" defaultValue="option2">
            <SegmentController value="option1" leadIcon={<Home />}>
              Option 1
            </SegmentController>
            <SegmentController value="option2" leadIcon={<Architecture />}>
              Option 2
            </SegmentController>
            <SegmentController value="option3" leadIcon={<School />}>
              Option 3
            </SegmentController>
          </SegmentControllerGroup>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Small</Typography>
          <SegmentControllerGroup size="small" defaultValue="tab1">
            <SegmentController value="tab1" leadIcon={<Home fontSize="small" />}>
              Tab 1
            </SegmentController>
            <SegmentController value="tab2" leadIcon={<Architecture fontSize="small" />}>
              Tab 2
            </SegmentController>
            <SegmentController value="tab3" leadIcon={<AcUnit fontSize="small" />}>
              Tab 3
            </SegmentController>
          </SegmentControllerGroup>
        </div>
      </div>
    );
  },
};

export const KeyboardNavigation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Keyboard Navigation Demo</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Click on the group to focus, then use keyboard:
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>
            <Typography variant="body">Arrow Left/Right: Navigate between segments</Typography>
          </li>
          <li>
            <Typography variant="body">Home: Jump to first segment</Typography>
          </li>
          <li>
            <Typography variant="body">End: Jump to last segment</Typography>
          </li>
          <li>
            <Typography variant="body">Enter/Space: Select segment</Typography>
          </li>
        </ul>
      </div>

      <SegmentControllerGroup size="large" defaultValue="item2" aria-label="Keyboard navigation example">
        <SegmentController value="item1" leadIcon={<Home />}>
          First
        </SegmentController>
        <SegmentController value="item2" leadIcon={<Architecture />}>
          Second
        </SegmentController>
        <SegmentController value="item3" leadIcon={<School />}>
          Third
        </SegmentController>
        <SegmentController value="item4" leadIcon={<AcUnit />}>
          Fourth
        </SegmentController>
      </SegmentControllerGroup>
    </div>
  ),
};

export const DisabledGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Disabled Group</Typography>
        <SegmentControllerGroup size="large" disabled defaultValue="option1">
          <SegmentController value="option1" leadIcon={<Home />}>
            Option 1
          </SegmentController>
          <SegmentController value="option2" leadIcon={<Architecture />}>
            Option 2
          </SegmentController>
          <SegmentController value="option3" leadIcon={<School />}>
            Option 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Individual Disabled Segments</Typography>
        <SegmentControllerGroup size="large" defaultValue="option1">
          <SegmentController value="option1" leadIcon={<Home />}>
            Enabled
          </SegmentController>
          <SegmentController value="option2" disabled leadIcon={<Architecture />}>
            Disabled
          </SegmentController>
          <SegmentController value="option3" leadIcon={<School />}>
            Enabled
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
  ),
};

export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Rendered as Link</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Using the polymorphic \`as\` prop to render as an anchor tag
        </Typography>
        <SegmentController
          as="a"
          href="#section1"
          size="large"
          leadIcon={<Home />}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            alert('Link clicked!');
          }}
        >
          Navigate to Section
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Rendered as Div (for custom behavior)</Typography>
        <SegmentController as="div" size="large" leadIcon={<Architecture />}>
          Custom Element
        </SegmentController>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Custom className</Typography>
        <SegmentController
          size="large"
          className="custom-segment"
          leadIcon={<Home />}
          style={{ border: '2px dashed #5009b5' }}
        >
          Custom Styled
        </SegmentController>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Custom Group Styling</Typography>
        <SegmentControllerGroup
          size="large"
          defaultValue="opt1"
          style={{ background: '#f0f0f0', padding: '16px' }}
        >
          <SegmentController value="opt1" leadIcon={<Home />}>
            Option 1
          </SegmentController>
          <SegmentController value="opt2" leadIcon={<Architecture />}>
            Option 2
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
  ),
};

export const WidthControl: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Default (Hug Content)</Typography>
        <Typography variant="body" color="#666">
          Width automatically fits content
        </Typography>
        <SegmentControllerGroup size="large" defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Fixed Width (400px)</Typography>
        <Typography variant="body" color="#666">
          Container has fixed width
        </Typography>
        <SegmentControllerGroup size="large" width={400} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Full Width (100%)</Typography>
        <Typography variant="body" color="#666">
          Stretches to fill parent container
        </Typography>
        <SegmentControllerGroup size="large" width="100%" defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Min/Max Width</Typography>
        <Typography variant="body" color="#666">
          minWidth: 300px, maxWidth: 600px
        </Typography>
        <SegmentControllerGroup size="large" minWidth={300} maxWidth={600} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Horizontal Scroll (maxWidth: 400px)</Typography>
        <Typography variant="body" color="#666">
          Container width is smaller than content - scroll horizontally to see all tabs
        </Typography>
        <SegmentControllerGroup size="large" maxWidth={400} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Dashboard
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Architecture
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Education
          </SegmentController>
          <SegmentController value="tab4" leadIcon={<AcUnit />}>
            Settings
          </SegmentController>
          <SegmentController value="tab5" leadIcon={<Search />}>
            Search
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Horizontal Scroll (width: 300px)</Typography>
        <Typography variant="body" color="#666">
          Fixed narrow width with many tabs - horizontal scrolling enabled
        </Typography>
        <SegmentControllerGroup size="medium" width={300} defaultValue="item1">
          <SegmentController value="item1">Overview</SegmentController>
          <SegmentController value="item2">Analytics</SegmentController>
          <SegmentController value="item3">Reports</SegmentController>
          <SegmentController value="item4">Settings</SegmentController>
          <SegmentController value="item5">Profile</SegmentController>
          <SegmentController value="item6">Help</SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="headingM" weight="semibold">Small Size with Scroll</Typography>
        <Typography variant="body" color="#666">
          Small segments with horizontal scroll (width: 250px)
        </Typography>
        <SegmentControllerGroup size="small" width={250} defaultValue="a">
          <SegmentController value="a">Option A</SegmentController>
          <SegmentController value="b">Option B</SegmentController>
          <SegmentController value="c">Option C</SegmentController>
          <SegmentController value="d">Option D</SegmentController>
          <SegmentController value="e">Option E</SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
  ),
};
