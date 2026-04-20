import React from 'react';
import * as MuiIcons from '@mui/icons-material';
import { IconProps } from './Icon.types';
import styled from 'styled-components';

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
  // Dynamically get the icon component from MUI Icons
  const IconComponent = (MuiIcons as any)[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in @mui/icons-material`);
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

// Export commonly used icons as named exports for convenience
export const ArrowBackIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ArrowBack" {...props} />;
export const ArrowForwardIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ArrowForward" {...props} />;
export const ArrowDropDownIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ArrowDropDown" {...props} />;
export const ArrowDropUpIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ArrowDropUp" {...props} />;
export const ChevronLeftIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ChevronLeft" {...props} />;
export const ChevronRightIcon = (props: Omit<IconProps, 'name'>) => <Icon name="ChevronRight" {...props} />;
export const FirstPageIcon = (props: Omit<IconProps, 'name'>) => <Icon name="FirstPage" {...props} />;
export const LastPageIcon = (props: Omit<IconProps, 'name'>) => <Icon name="LastPage" {...props} />;
export const AddIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Add" {...props} />;
export const RemoveIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Remove" {...props} />;
export const EditIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Edit" {...props} />;
export const DeleteIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Delete" {...props} />;
export const SearchIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Search" {...props} />;
export const FilterAltIcon = (props: Omit<IconProps, 'name'>) => <Icon name="FilterAlt" {...props} />;
export const DownloadIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Download" {...props} />;
export const SettingsIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Settings" {...props} />;
export const CloseIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Close" {...props} />;
export const CheckIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Check" {...props} />;
export const LockIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Lock" {...props} />;
export const LockOpenIcon = (props: Omit<IconProps, 'name'>) => <Icon name="LockOpen" {...props} />;
export const VisibilityIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Visibility" {...props} />;
export const VisibilityOffIcon = (props: Omit<IconProps, 'name'>) => <Icon name="VisibilityOff" {...props} />;
export const InfoIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Info" {...props} />;
export const WarningIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Warning" {...props} />;
export const ErrorIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Error" {...props} />;
export const CheckCircleIcon = (props: Omit<IconProps, 'name'>) => <Icon name="CheckCircle" {...props} />;
export const SortIcon = (props: Omit<IconProps, 'name'>) => <Icon name="Sort" {...props} />;
export const DragIndicatorIcon = (props: Omit<IconProps, 'name'>) => <Icon name="DragIndicator" {...props} />;
export const MoreVertIcon = (props: Omit<IconProps, 'name'>) => <Icon name="MoreVert" {...props} />;
export const MoreHorizIcon = (props: Omit<IconProps, 'name'>) => <Icon name="MoreHoriz" {...props} />;
