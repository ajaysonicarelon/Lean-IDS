import { BadgeType, BadgeStyle } from '../Badge/Badge.types';
import { ChipType, ChipVariant } from '../Chip/Chip.types';

export interface TableCellProps {
  // Selection
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;

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

  // Styling
  align?: 'left' | 'center' | 'right';
  className?: string;
  
  // Row state
  selected?: boolean;
  isFirstColumn?: boolean;
  
  // Locked column feature
  locked?: boolean;
  leftOffset?: number;
}
