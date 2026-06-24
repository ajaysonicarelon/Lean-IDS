export type MenuItemBorder = 'bottom' | 'left';
export type MenuItemMode = 'dark' | 'light';
export type MenuItemState = 'active' | 'inactive';
export type MenuItemAligned = 'horizontal' | 'vertical';
export type MenuItemType = 'single' | 'nested';

export interface MenuItemProps {
  /** Alignment direction */
  aligned?: MenuItemAligned;
  /** Border position - bottom for horizontal nav, left for vertical nav */
  border?: MenuItemBorder;
  /** Icon for medium size (24px) - used in side navigation */
  iconM?: React.ReactNode;
  /** Icon for small size (16px) - used in top header */
  iconS?: React.ReactNode;
  /** Color mode */
  mode?: MenuItemMode;
  /** Whether this menu item has nested children */
  nestedMenu?: boolean;
  /** Whether to show icon */
  showIcon?: boolean;
  /** Whether to show notification indicator */
  showIndicator?: boolean;
  /** Whether to show label text */
  showLabel?: boolean;
  /** Active/inactive state */
  state?: MenuItemState;
  /** Menu item type - single or nested */
  type?: MenuItemType;
  /** Label text */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Mouse leave handler */
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Additional CSS class */
  className?: string;
}
