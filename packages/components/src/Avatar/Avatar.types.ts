export type AvatarSize = 'large' | 'medium' | 'small';
export type AvatarColor = 'default' | 'purple' | 'amber' | 'cyan' | 'lime' | 'yellow' | 'grey';

export interface AvatarProps {
  size?: AvatarSize;
  color?: AvatarColor;
  src?: string;
  alt?: string;
  initials?: string;
  disabled?: boolean;
  className?: string;
}
