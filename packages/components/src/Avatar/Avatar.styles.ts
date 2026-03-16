import styled from 'styled-components';
import { AvatarSize, AvatarColor } from './Avatar.types';

const sizeMap = {
  large: '72px',
  medium: '48px',
  small: '32px',
};

const fontSizeMap = {
  large: '32px',
  medium: '20px',
  small: '14px',
};

const lineHeightMap = {
  large: '40px',
  medium: '24px',
  small: '16px',
};

const getBackgroundColor = (color: AvatarColor, disabled: boolean, theme: any) => {
  if (disabled) {
    return theme.colors.palette.neutral[300];
  }

  const colorMap = {
    default: theme.colors.palette.primary[500],
    purple: '#8B5CF6',
    amber: '#F59E0B',
    cyan: '#06B6D4',
    lime: '#84CC16',
    yellow: '#EAB308',
    grey: theme.colors.palette.neutral[300],
  };

  return colorMap[color];
};

const getTextColor = (disabled: boolean, theme: any) => {
  if (disabled) {
    return theme.colors.palette.neutral[500];
  }
  return theme.colors.palette.neutral[50];
};

interface StyledAvatarContainerProps {
  $size: AvatarSize;
  $color: AvatarColor;
  $disabled: boolean;
}

export const StyledAvatarContainer = styled.div<StyledAvatarContainerProps>`
  position: relative;
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ $color, $disabled, theme }) => getBackgroundColor($color, $disabled, theme)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

interface AvatarInitialsProps {
  $size: AvatarSize;
  $disabled: boolean;
}

export const AvatarInitials = styled.span<AvatarInitialsProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ $size }) => fontSizeMap[$size]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ $size }) => lineHeightMap[$size]};
  letter-spacing: -0.1px;
  color: ${({ $disabled, theme }) => getTextColor($disabled, theme)};
  text-align: center;
  user-select: none;
  white-space: nowrap;
`;
