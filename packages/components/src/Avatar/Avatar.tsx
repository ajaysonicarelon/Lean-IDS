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
