import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const StyledThead = styled.thead``;
const StyledTbody = styled.tbody``;
const StyledTr = styled.tr``;

const meta: Meta = {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Usage

\`\`\`tsx
import { TableHeader, TableCell } from '@lean-ids/components';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell 
            showAvatar 
            showUserInfo 
            userName="John Doe" 
            userRole="Developer" 
          />
          <TableCell showText text="john@example.com" />
          <TableCell showBadge badgeLabel="Active" badgeType="success" />
        </tr>
      </tbody>
    </table>
  );
}
\`\`\`

The Table components provide a flexible system for building data tables with sortable headers and customizable cells.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const CompleteExample: Story = {
  render: () => (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="" showCheckbox checked={false} />
          <TableHeader label="User" sortable sortDirection="asc" />
          <TableHeader label="ID Number" />
          <TableHeader label="Amount" align="right" />
          <TableHeader label="Date" />
          <TableHeader label="Status" />
          <TableHeader label="Actions" />
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <TableCell showCheckbox checked={false} />
          <TableCell
            showAvatar
            showUserInfo
            userName="Associate Name"
            userRole="Role"
          />
          <TableCell showNumber number="1234567890" />
          <TableCell showAmount amount="$123,654,000" align="right" />
          <TableCell showDate date="March 12, 2025" />
          <TableCell showBadge badgeLabel="Active" badgeType="success" />
          <TableCell showEditAction showDeleteAction />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell
            showAvatar
            avatarSrc="https://i.pravatar.cc/32?img=2"
            showUserInfo
            userName="Jane Smith"
            userRole="Manager"
          />
          <TableCell showNumber number="9876543210" />
          <TableCell showAmount amount="$987,321,000" align="right" />
          <TableCell showDate date="March 15, 2025" />
          <TableCell showChip chipLabel="Premium" chipType="primary" />
          <TableCell showButton buttonLabel="View" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const SortableHeaders: Story = {
  render: () => (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" sortable sortDirection="none" />
          <TableHeader label="Date" sortable sortDirection="desc" />
          <TableHeader label="Status" />
        </StyledTr>
      </StyledThead>
    </StyledTable>
  ),
};

export const CellWithUserInfo: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell
            showAvatar
            showUserInfo
            userName="John Doe"
            userRole="Senior Developer"
          />
        </StyledTr>
        <StyledTr>
          <TableCell
            showAvatar
            avatarSrc="https://i.pravatar.cc/32?img=5"
            showUserInfo
            userName="Jane Smith"
            userRole="Product Manager"
          />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithDataFields: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showNumber number="1234567890" />
          <TableCell showAmount amount="$123,654,000" />
          <TableCell showDate date="March 12, 2025" />
          <TableCell showText text="Regular text content" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithStatusIndicators: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showBadge badgeLabel="Active" badgeType="success" badgeStyle="default" />
          <TableCell showBadge badgeLabel="Pending" badgeType="warning" badgeStyle="subdued" />
          <TableCell showBadge badgeLabel="Error" badgeType="error" badgeStyle="outlined" />
        </StyledTr>
        <StyledTr>
          <TableCell showChip chipLabel="Premium" chipType="primary" />
          <TableCell showChip chipLabel="Trial" chipType="secondary" />
          <TableCell showChip chipLabel="Free" chipType="neutral" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const CellWithActions: Story = {
  render: () => (
    <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showEditAction showDeleteAction />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="View Details" />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="Download" showEditAction />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};

export const SelectableRows: Story = {
  render: () => (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="" showCheckbox checked={false} indeterminate={true} />
          <TableHeader label="Name" />
          <TableHeader label="Email" />
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="John Doe" />
          <TableCell showText text="john@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="Jane Smith" />
          <TableCell showText text="jane@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={false} />
          <TableCell showText text="Bob Johnson" />
          <TableCell showText text="bob@example.com" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  ),
};
