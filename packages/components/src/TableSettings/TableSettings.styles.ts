import styled from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.palette.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[7]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
`;

export const ModalTitle = styled.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  margin: 0;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
    color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[7]};
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ColumnItem = styled.div<{ $isDragging?: boolean; $isLocked?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme, $isDragging, $isLocked }) =>
    $isLocked ? theme.colors.palette.primary[50] : $isDragging ? theme.colors.palette.neutral[100] : theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme, $isLocked }) => 
    $isLocked ? theme.colors.palette.primary[200] : theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ $isLocked }) => $isLocked ? 'not-allowed' : 'move'};
  transition: all 0.2s;
  opacity: ${({ $isLocked }) => $isLocked ? 0.7 : 1};
  
  &:hover {
    background-color: ${({ theme, $isLocked }) => 
      $isLocked ? theme.colors.palette.primary[50] : theme.colors.palette.neutral[100]};
    border-color: ${({ theme, $isLocked }) => 
      $isLocked ? theme.colors.palette.primary[200] : theme.colors.palette.neutral[400]};
  }
`;

export const DragHandle = styled.div<{ $isLocked?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme, $isLocked }) => 
    $isLocked ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[600]};
  cursor: ${({ $isLocked }) => $isLocked ? 'not-allowed' : 'grab'};
  opacity: ${({ $isLocked }) => $isLocked ? 0.5 : 1};
  
  &:active {
    cursor: ${({ $isLocked }) => $isLocked ? 'not-allowed' : 'grabbing'};
  }
`;

export const ColumnLabel = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.typography.paragraph.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.paragraph.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.medium.lineHeight};
  color: ${({ theme }) => theme.colors.palette.neutral[1000]};
`;

export const SubColumnItem = styled(ColumnItem)`
  margin-left: ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme, $isDragging, $isLocked }) =>
    $isLocked ? theme.colors.palette.primary[50] : $isDragging ? theme.colors.palette.neutral[100] : theme.colors.palette.neutral[100]};
`;

export const ExpandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LockButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.neutral[100]};
    color: ${({ theme }) => theme.colors.palette.neutral[1000]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[7]};
  border-top: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};
`;
