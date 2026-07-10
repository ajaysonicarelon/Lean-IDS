import React from 'react';
import { IconProps, COMMON_ICONS } from './Icon.types';
import styled from 'styled-components';

// Import all commonly used icons statically
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SortIcon from '@mui/icons-material/Sort';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Icon map for quick lookup
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Search: SearchIcon,
  ExpandMore: ExpandMoreIcon,
  ExpandLess: ExpandLessIcon,
  ArrowDropDown: ArrowDropDownIcon,
  ArrowDropUp: ArrowDropUpIcon,
  Close: CloseIcon,
  Check: CheckIcon,
  Settings: SettingsIcon,
  FilterAlt: FilterAltIcon,
  Download: DownloadIcon,
  Edit: EditIcon,
  Delete: DeleteIcon,
  DragIndicator: DragIndicatorIcon,
  Lock: LockIcon,
  LockOpenOutlined: LockOpenIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  Info: InfoIcon,
  Warning: WarningIcon,
  Error: ErrorIcon,
  Add: AddIcon,
  Remove: RemoveIcon,
  Sort: SortIcon,
  ArrowBack: ArrowBackIcon,
  ArrowForward: ArrowForwardIcon,
  FirstPage: FirstPageIcon,
  LastPage: LastPageIcon,
  Menu: MenuIcon,
  MoreVert: MoreVertIcon,
  MoreHoriz: MoreHorizIcon,
  Visibility: VisibilityIcon,
  VisibilityOff: VisibilityOffIcon,
  CheckCircle: CheckCircleIcon,
};

const sizeMap = {
  small: '16px',
  medium: '24px',
  large: '32px',
  xlarge: '40px',
};

const StyledIconWrapper = styled.span<{ $size: string; $color?: string; $clickable?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  color: ${({ $color }) => $color || 'currentColor'};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'inherit')};
  border-radius: 4px;
  
  &:focus-visible {
    ${({ $clickable, theme }) => $clickable && `
      outline: 2px solid ${theme.colors.semantic.focus.indicator};
      outline-offset: 2px;
    `}
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color,
  className,
  onClick,
  ...rest
}) => {
  // Map icon name using COMMON_ICONS (handles special cases like LockOpen -> LockOpenOutlined)
  const iconName = (COMMON_ICONS as any)[name] || name;
  
  // Get icon component from static map
  const IconComponent = ICON_MAP[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" (mapped to "${iconName}") not found in icon map`);
    return null;
  }

  const iconSize = sizeMap[size];

  return (
    <StyledIconWrapper
      $size={iconSize}
      $color={color}
      $clickable={!!onClick}
      className={className}
      onClick={onClick}
    >
      <IconComponent {...rest} />
    </StyledIconWrapper>
  );
};

// Export commonly used icons with direct imports for better tree-shaking
export { default as ArrowBackIcon } from '@mui/icons-material/ArrowBack';
export { default as ArrowForwardIcon } from '@mui/icons-material/ArrowForward';
export { default as ArrowDropDownIcon } from '@mui/icons-material/ArrowDropDown';
export { default as ArrowDropUpIcon } from '@mui/icons-material/ArrowDropUp';
export { default as ChevronLeftIcon } from '@mui/icons-material/ChevronLeft';
export { default as ChevronRightIcon } from '@mui/icons-material/ChevronRight';
export { default as FirstPageIcon } from '@mui/icons-material/FirstPage';
export { default as LastPageIcon } from '@mui/icons-material/LastPage';
export { default as AddIcon } from '@mui/icons-material/Add';
export { default as RemoveIcon } from '@mui/icons-material/Remove';
export { default as EditIcon } from '@mui/icons-material/Edit';
export { default as DeleteIcon } from '@mui/icons-material/Delete';
export { default as SearchIcon } from '@mui/icons-material/Search';
export { default as FilterAltIcon } from '@mui/icons-material/FilterAlt';
export { default as DownloadIcon } from '@mui/icons-material/Download';
export { default as SettingsIcon } from '@mui/icons-material/Settings';
export { default as CloseIcon } from '@mui/icons-material/Close';
export { default as CheckIcon } from '@mui/icons-material/Check';
export { default as LockIcon } from '@mui/icons-material/Lock';
export { default as LockOpenIcon } from '@mui/icons-material/LockOpenOutlined';
export { default as VisibilityIcon } from '@mui/icons-material/Visibility';
export { default as VisibilityOffIcon } from '@mui/icons-material/VisibilityOff';
export { default as InfoIcon } from '@mui/icons-material/Info';
export { default as WarningIcon } from '@mui/icons-material/Warning';
export { default as ErrorIcon } from '@mui/icons-material/Error';
export { default as CheckCircleIcon } from '@mui/icons-material/CheckCircle';
export { default as SortIcon } from '@mui/icons-material/Sort';
export { default as DragIndicatorIcon } from '@mui/icons-material/DragIndicator';
export { default as MoreVertIcon } from '@mui/icons-material/MoreVert';
export { default as MoreHorizIcon } from '@mui/icons-material/MoreHoriz';
