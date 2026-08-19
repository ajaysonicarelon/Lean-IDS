/**
 * Table Group Types
 * 
 * Defines the structure for grouping table rows
 */

export interface TableGroup<T = any> {
  /** Unique identifier for the group */
  id: string;
  /** Group name/title */
  groupName: string;
  /** Optional short description */
  groupDescription?: string;
  /** Rows belonging to this group */
  rows: T[];
  /** Whether the group is expanded by default */
  defaultExpanded?: boolean;
  /** Custom content to render in the group header */
  customContent?: React.ReactNode;
  /** Custom class name for the group header */
  className?: string;
  /** Custom style for the group header */
  style?: React.CSSProperties;
}

export interface TableGroupConfig {
  /** Position of expand/collapse button */
  expandPosition?: 'left' | 'right';
  /** Callback when a group is expanded/collapsed */
  onGroupToggle?: (groupId: string, isExpanded: boolean) => void;
  /** Render custom content for group header */
  renderGroupContent?: (group: TableGroup) => React.ReactNode;
  /** Whether selecting a group header selects all rows in that group */
  groupSelectsAll?: boolean;
}
