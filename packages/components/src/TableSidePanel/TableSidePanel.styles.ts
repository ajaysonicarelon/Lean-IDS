import styled from 'styled-components';

// Collapsed Side Panel (30px wide vertical buttons)
export const CollapsedPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  flex-shrink: 0;
`;

export const VerticalButton = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[7]} 0;
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  position: relative;
`;

export const VerticalText = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
`;

// Expanded Overlay Panel
export const ExpandedOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;

export const ExpandedPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.palette.neutral[200]};
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  
  /* Slide-in animation */
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const PanelHeader = styled.div<{ $shake?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[7]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  background-color: ${({ theme }) => theme.colors.palette.neutral[200]};

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
    20%, 40%, 60%, 80% { transform: translateX(4px); }
  }

  ${({ $shake }) => $shake && `
    animation: shake 0.5s ease-in-out;
  `}
`;

export const HeaderButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  
  ${({ $variant, theme }) => {
    if ($variant === 'primary') {
      return `
        background-color: ${theme.colors.palette.primary[600]};
        color: white;
        border-color: ${theme.colors.palette.primary[600]};
        &:hover {
          background-color: ${theme.colors.palette.primary[700]};
        }
      `;
    }
    if ($variant === 'danger') {
      return `
        background-color: transparent;
        color: ${theme.colors.palette.error[600]};
        border-color: ${theme.colors.palette.error[600]};
        &:hover {
          background-color: ${theme.colors.palette.error[50]};
        }
      `;
    }
    return `
      background-color: transparent;
      color: ${theme.colors.palette.neutral[700]};
      &:hover {
        background-color: ${theme.colors.palette.neutral[100]};
      }
    `;
  }}
`;

export const PanelContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[7]};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.palette.neutral[200]};
`;

// Column List
export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ColumnItem = styled.div<{ $isDragging?: boolean; $isLocked?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  cursor: ${({ $isLocked }) => ($isLocked ? 'not-allowed' : 'grab')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
  }
`;

export const SubColumnItem = styled(ColumnItem)`
  margin-left: ${({ theme }) => theme.spacing[7]};
  background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
`;

export const ExpandIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[700]};
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const DragHandle = styled.div<{ $isLocked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ $isLocked, theme }) =>
    $isLocked ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[600]};
  cursor: ${({ $isLocked }) => ($isLocked ? 'not-allowed' : 'grab')};
  flex-shrink: 0;
`;

export const LockButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.neutral[900]};
  }
`;

export const ColumnLabel = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
