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
    warning: theme.colors.palette.warning[600], // Darker for better contrast with white text (WCAG AA)
    error: theme.colors.palette.error[500],
    neutral: theme.colors.palette.neutral[400], // Darker for better contrast with white text (WCAG AA)
  };

  if (style === 'subdued') {
    const subduedMap = {
      info: theme.colors.palette.info[50],
      success: theme.colors.palette.success[50],
      warning: theme.colors.palette.warning[100],
      error: theme.colors.palette.error[50],
      neutral: theme.colors.palette.neutral[50],
    };
    return subduedMap[type];
  }

  return colorMap[type];
};

const getTextColor = (type: BadgeType, style: BadgeStyle, theme: any) => {
  if (style === 'default') {
    // Neutral uses dark text on light background for better contrast
    if (type === 'neutral') {
      return theme.colors.palette.neutral[800];
    }
    return '#FFFFFF';
  }

  const colorMap = {
    info: theme.colors.palette.info[600],
    success: theme.colors.palette.success[600],
    warning: theme.colors.palette.warning[800], // Darker for better contrast on light backgrounds (WCAG AA)
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
    // Neutral uses dark icon on light background for better contrast
    if (type === 'neutral') {
      return theme.colors.palette.neutral[700];
    }
    return '#FFFFFF';
  }

  const colorMap = {
    info: theme.colors.palette.info[600],
    success: theme.colors.palette.success[600],
    warning: theme.colors.palette.warning[800], // Match text color for consistency (WCAG AA)
    error: theme.colors.palette.error[600],
    neutral: theme.colors.palette.neutral[700],
  };

  return colorMap[type];
};

interface ExtendedStyledBadgeProps extends StyledBadgeProps {
  $disabled?: boolean;
  $isLoading?: boolean;
  $interactive?: boolean;
}

export const StyledBadge = styled.span<ExtendedStyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ $type, $style, theme }) => getBackgroundColor($type, $style, theme)};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ $type, $style, theme }) => getBorderColor($type, $style, theme)};
  font-family: ${({ theme }) => theme.typography.caption.semibold.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.semibold.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.semibold.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.semibold.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.caption.semibold.letterSpacing};
  color: ${({ $type, $style, theme }) => getTextColor($type, $style, theme)};
  white-space: nowrap;
  user-select: none;
  position: relative;
  transition: opacity 0.2s ease, transform 0.1s ease;

  ${({ $disabled, $isLoading }) => 
    ($disabled || $isLoading) && `
      opacity: 0.5;
      pointer-events: ${$disabled ? 'none' : 'auto'};
      cursor: ${$disabled ? 'not-allowed' : 'default'};
    `
  }

  ${({ $interactive, $disabled, $isLoading }) => 
    $interactive && !$disabled && !$isLoading && `
      cursor: pointer;
      
      &:hover {
        opacity: 0.85;
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }

      &:active {
        transform: translateY(0);
        opacity: 0.7;
      }
    `
  }
`;

interface ExtendedIconWrapperProps extends StyledBadgeProps {
  $clickable?: boolean;
}

export const IconWrapper = styled.span<ExtendedIconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]}; /* 16px minimum for icons */
  height: ${({ theme }) => theme.spacing[7]}; /* 16px minimum for icons */
  flex-shrink: 0;
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};
  transition: opacity 0.2s ease;

  ${({ $clickable }) => $clickable && `
    &:hover {
      opacity: 0.7;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 1px;
      border-radius: 2px;
    }

    &:active {
      opacity: 0.5;
    }
  `}

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ $type, $style, theme }) => getIconColor($type, $style, theme)};
  }
`;

export const LabelText = styled.span`
  flex-shrink: 0;
`;

export const LoadingSpinner = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[3]};
  height: ${({ theme }) => theme.spacing[3]};
  
  svg {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
