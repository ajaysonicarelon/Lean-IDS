import styled from 'styled-components';
import { BadgeType, BadgeStyle } from './Badge.types';

interface StyledBadgeProps {
  $type: BadgeType;
  $style: BadgeStyle;
}

const getBackgroundColor = (type: BadgeType, style: BadgeStyle, theme: any) => {
  if (style === 'outlined') {
    return 'transparent';
  }

  const colorMap = {
    info: theme.colors.palette.info[500],
    success: theme.colors.palette.success[500],
    warning: theme.colors.palette.warning[500],
    error: theme.colors.palette.error[500],
    neutral: theme.colors.palette.neutral[500],
  };

  if (style === 'subdued') {
    const subduedMap = {
      info: theme.colors.palette.info[50],
      success: theme.colors.palette.success[50],
      warning: theme.colors.palette.warning[150],
      error: theme.colors.palette.error[50],
      neutral: theme.colors.palette.neutral[50],
    };
    return subduedMap[type];
  }

  return colorMap[type];
};

const getTextColor = (type: BadgeType, style: BadgeStyle, theme: any) => {
  if (style === 'default') {
    return '#FFFFFF';
  }

  const colorMap = {
    info: theme.colors.palette.info[600],
    success: theme.colors.palette.success[600],
    warning: theme.colors.palette.warning[700],
    error: theme.colors.palette.error[600],
    neutral: theme.colors.palette.neutral[700],
  };

  return colorMap[type];
};

const getBorderColor = (type: BadgeType, style: BadgeStyle, theme: any) => {
  if (style !== 'outlined') {
    return 'transparent';
  }

  const colorMap = {
    info: theme.colors.palette.info[500],
    success: theme.colors.palette.success[500],
    warning: theme.colors.palette.warning[500],
    error: theme.colors.palette.error[500],
    neutral: theme.colors.palette.neutral[500],
  };

  return colorMap[type];
};

const getIconColor = (type: BadgeType, style: BadgeStyle, theme: any) => {
  if (style === 'default') {
    return '#FFFFFF';
  }

  const colorMap = {
    info: theme.colors.palette.info[600],
    success: theme.colors.palette.success[600],
    warning: theme.colors.palette.warning[700],
    error: theme.colors.palette.error[600],
    neutral: theme.colors.palette.neutral[700],
  };

  return colorMap[type];
};

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[0.5]} ${theme.spacing[1]}`};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ $type, $style, theme }) => getBackgroundColor($type, $style, theme)};
  border: 1px solid ${({ $type, $style, theme }) => getBorderColor($type, $style, theme)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({ $type, $style, theme }) => getTextColor($type, $style, theme)};
  white-space: nowrap;
  user-select: none;
`;

export const IconWrapper = styled.span<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ $type, $style, theme }) => getIconColor($type, $style, theme)};
  }
`;

export const LabelText = styled.span`
  flex-shrink: 0;
`;
