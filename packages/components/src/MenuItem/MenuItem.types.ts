export type MenuItemBorder = 'bottom' | 'left';
export type MenuItemMode = 'dark' | 'light';
export type MenuItemState = 'active' | 'inactive';

export interface MenuItemProps {
  /** Border position - bottom for horizontal nav, left for vertical nav */
  border?: MenuItemBorder;
  /** Icon for medium size (24px) - used in side navigation */
  iconM?: React.ReactNode;
  /** Icon for small size (16px) - used in top header */
  iconS?: React.ReactNode;
  /** Color mode */
  mode?: MenuItemMode;
  /** Whether to show icon */
  showIcon?: boolean;
  /** Whether to show notification indicator */
  showIndicator?: boolean;
  /** Whether to show label text */
  showLabel?: boolean;
  /** Active/inactive state */
  state?: MenuItemState;
  /** Label text */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}
