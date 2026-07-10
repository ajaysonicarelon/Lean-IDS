import React, { useState, useEffect } from 'react';
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
  const [IconComponent, setIconComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    // Dynamically import the icon on-demand
    import(`@mui/icons-material/${name}`)
      .then((module) => {
        setIconComponent(() => module.default);
      })
      .catch((error) => {
        console.warn(`Icon "${name}" not found in @mui/icons-material`, error);
      });
  }, [name]);

  if (!IconComponent) {
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
export { default as LockOpenIcon } from '@mui/icons-material/LockOpen';
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
