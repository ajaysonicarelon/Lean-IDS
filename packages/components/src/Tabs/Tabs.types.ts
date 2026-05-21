/**
 * Tabs component types
 */

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Optional badge count */
  count?: number;
  /** Leading icon name */
  leadingIcon?: string;
  /** Trailing icon name */
  trailingIcon?: string;
  /** Disabled state */
  disabled?: boolean;
}

export interface TabsProps {
  /** Array of tab items */
  tabs: TabItem[];
  /** Active tab ID */
  activeTab: string;
  /** Tab change handler */
  onChange: (tabId: string) => void;
  /** Tab type */
  type?: 'parent' | 'child';
  /** Show leading icons */
  showLeadingIcon?: boolean;
  /** Show trailing icons */
  showTrailingIcon?: boolean;
  /** Show badge counts */
  showBadge?: boolean;
  /** Custom className */
  className?: string;
}
