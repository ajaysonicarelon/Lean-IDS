import React from 'react';
import { BadgeProps } from './Badge.types';
import { StyledBadge, IconWrapper, LabelText } from './Badge.styles';

const InfoIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6.6 9H5.4V5.4H6.6V9ZM6.6 4.2H5.4V3H6.6V4.2Z" />
  </svg>
);

const SuccessIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM9.42857 4.28571L5.57143 8.14286C5.48571 8.22857 5.37143 8.28571 5.25 8.28571C5.12857 8.28571 5.01429 8.22857 4.92857 8.14286L2.57143 5.78571C2.4 5.61429 2.4 5.32857 2.57143 5.15714C2.74286 4.98571 3.02857 4.98571 3.2 5.15714L5.25 7.20714L8.8 3.65714C8.97143 3.48571 9.25714 3.48571 9.42857 3.65714C9.6 3.82857 9.6 4.11429 9.42857 4.28571Z" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6.6 8.4H5.4V7.2H6.6V8.4ZM6.6 6H5.4V3H6.6V6Z" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.4 7.54286L7.54286 8.4L6 6.85714L4.45714 8.4L3.6 7.54286L5.14286 6L3.6 4.45714L4.45714 3.6L6 5.14286L7.54286 3.6L8.4 4.45714L6.85714 6L8.4 7.54286Z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.42857 3.42857L8.57143 2.57143L6 5.14286L3.42857 2.57143L2.57143 3.42857L5.14286 6L2.57143 8.57143L3.42857 9.42857L6 6.85714L8.57143 9.42857L9.42857 8.57143L6.85714 6L9.42857 3.42857Z" />
  </svg>
);

const defaultIcons = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  neutral: <InfoIcon />,
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  type = 'info',
  style = 'default',
  leadingIcon,
  trailingIcon,
  showLeadingIcon = false,
  showTrailingIcon = false,
  className,
}) => {
  const defaultLeadingIcon = defaultIcons[type];
  const defaultTrailingIcon = <CloseIcon />;

  return (
    <StyledBadge $type={type} $style={style} className={className}>
      {showLeadingIcon && (
        <IconWrapper $type={type} $style={style}>
          {leadingIcon || defaultLeadingIcon}
        </IconWrapper>
      )}
      <LabelText>{label}</LabelText>
      {showTrailingIcon && (
        <IconWrapper $type={type} $style={style}>
          {trailingIcon || defaultTrailingIcon}
        </IconWrapper>
      )}
    </StyledBadge>
  );
};
