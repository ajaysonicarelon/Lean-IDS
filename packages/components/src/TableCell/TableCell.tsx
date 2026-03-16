import React from 'react';
import { TableCellProps } from './TableCell.types';
import {
  StyledTableCell,
  CellContent,
  CheckboxWrapper,
  AvatarWrapper,
  Avatar,
  AvatarPlaceholder,
  UserInfo,
  UserName,
  UserRole,
  NumberText,
  AmountText,
  DateText,
  RegularText,
  ActionsWrapper,
  IconButton,
} from './TableCell.styles';
import { Checkbox } from '../Checkbox';
import { Badge } from '../Badge';
import { Chip } from '../Chip';
import { Button } from '../Button';

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
  </svg>
);

const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
  </svg>
);

export const TableCell: React.FC<TableCellProps> = ({
  showCheckbox = false,
  checked = false,
  onCheckChange,
  showAvatar = false,
  avatarSrc,
  avatarAlt = 'Avatar',
  showUserInfo = false,
  userName,
  userRole,
  showNumber = false,
  number,
  showAmount = false,
  amount,
  showDate = false,
  date,
  showText = false,
  text,
  showBadge = false,
  badgeLabel,
  badgeType = 'info',
  badgeStyle = 'default',
  showChip = false,
  chipLabel,
  chipType = 'primary',
  chipVariant = 'filled',
  onChipRemove,
  showButton = false,
  buttonLabel = 'Button',
  onButtonClick,
  showEditAction = false,
  onEdit,
  showDeleteAction = false,
  onDelete,
  align = 'left',
  className,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckChange) {
      onCheckChange(e.target.checked);
    }
  };

  const getInitials = (name?: string) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <StyledTableCell $align={align} className={className}>
      <CellContent>
        {showCheckbox && (
          <CheckboxWrapper>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
          </CheckboxWrapper>
        )}

        {showAvatar && (
          <AvatarWrapper>
            {avatarSrc ? (
              <Avatar src={avatarSrc} alt={avatarAlt} />
            ) : (
              <AvatarPlaceholder>{getInitials(userName)}</AvatarPlaceholder>
            )}
          </AvatarWrapper>
        )}

        {showUserInfo && (
          <UserInfo>
            {userName && <UserName>{userName}</UserName>}
            {userRole && <UserRole>{userRole}</UserRole>}
          </UserInfo>
        )}

        {showNumber && number && <NumberText>{number}</NumberText>}

        {showAmount && amount && <AmountText>{amount}</AmountText>}

        {showDate && date && <DateText>{date}</DateText>}

        {showText && text && <RegularText>{text}</RegularText>}

        {showBadge && badgeLabel && (
          <Badge label={badgeLabel} type={badgeType} style={badgeStyle} />
        )}

        {showChip && chipLabel && (
          <Chip
            label={chipLabel}
            type={chipType}
            variant={chipVariant}
            onRemove={onChipRemove}
          />
        )}

        {showButton && (
          <Button
            variant="outlined"
            size="small"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        )}

        {(showEditAction || showDeleteAction) && (
          <ActionsWrapper>
            {showEditAction && (
              <IconButton onClick={onEdit} aria-label="Edit">
                <EditIcon />
              </IconButton>
            )}
            {showDeleteAction && (
              <IconButton onClick={onDelete} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            )}
          </ActionsWrapper>
        )}
      </CellContent>
    </StyledTableCell>
  );
};
