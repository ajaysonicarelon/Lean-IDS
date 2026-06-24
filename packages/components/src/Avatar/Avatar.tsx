import React from 'react';
import { AvatarProps } from './Avatar.types';
import { StyledAvatarContainer, AvatarImage, AvatarInitials } from './Avatar.styles';

export const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  color = 'default',
  src,
  alt = 'Avatar',
  initials = 'AA',
  disabled = false,
  onClick,
  className,
}) => {
  const displayInitials = initials.slice(0, 2).toUpperCase();

  return (
    <StyledAvatarContainer
      $size={size}
      $color={color}
      $disabled={disabled}
      className={className}
      role="img"
      aria-label={alt}
      onClick={onClick && !disabled ? onClick : undefined}
      style={{ cursor: onClick && !disabled ? 'pointer' : 'default' }}
    >
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <AvatarInitials $size={size} $disabled={disabled}>
          {displayInitials}
        </AvatarInitials>
      )}
    </StyledAvatarContainer>
  );
};
