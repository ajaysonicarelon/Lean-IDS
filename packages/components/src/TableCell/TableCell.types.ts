import { BadgeType, BadgeStyle } from '../Badge/Badge.types';
import { ChipType, ChipVariant } from '../Chip/Chip.types';

export interface TableCellProps {
  // Selection
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckChange?: (checked: boolean, shiftKey?: boolean) => void;

  // Avatar
  showAvatar?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;

  // User info
  showUserInfo?: boolean;
  userName?: string;
  userRole?: string;

  // Data fields
  showNumber?: boolean;
  number?: string;

  showAmount?: boolean;
  amount?: string;

  showDate?: boolean;
  date?: string;

  showText?: boolean;
  text?: string;

  // Status indicators
  showBadge?: boolean;
  badgeLabel?: string;
  badgeType?: BadgeType;
  badgeStyle?: BadgeStyle;

  showChip?: boolean;
  chipLabel?: string;
  chipType?: ChipType;
  chipVariant?: ChipVariant;
  onChipRemove?: () => void;

  // Actions
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;

  showEditAction?: boolean;
  onEdit?: () => void;

  showDeleteAction?: boolean;
  onDelete?: () => void;

  // Cell click handler
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;

  // Styling
  align?: 'left' | 'center' | 'right';
  className?: string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  
  // Row state
  selected?: boolean;
  isFirstColumn?: boolean;
  
  // Locked column feature (deprecated - use 'pinned' instead)
  locked?: boolean;
  leftOffset?: number;
  rightOffset?: number; // Offset from right edge for right-pinned columns
  pinned?: 'left' | 'right' | 'none'; // Column pinning direction
  showPinBorder?: boolean; // Show border on last left-pinned or first right-pinned column
  
  // Custom content
  children?: React.ReactNode;
}
