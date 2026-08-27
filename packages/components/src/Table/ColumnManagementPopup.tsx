/**
 * Column Management Popup
 * 
 * Modal popup for managing table columns:
 * - Toggle column visibility
 * - Pin columns (left/right/none)
 * - Reorder columns (drag & drop)
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';
import { ColumnConfig } from '../TableSettings';
import LockIcon from '@mui/icons-material/Lock';
import PushPinIcon from '@mui/icons-material/PushPin';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface ColumnManagementPopupProps {
  isOpen: boolean;
  onClose: () => void;
  columns: ColumnConfig[];
  onColumnsChange: (columns: ColumnConfig[]) => void;
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  max-height: 60vh;
  overflow-y: auto;
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ColumnItem = styled.div<{ $isDragging?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: grab;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  
  &:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[100]};
  }
  
  &:active {
    cursor: grabbing;
  }
`;

const DragHandle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.palette.neutral[400]};
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const ColumnInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const PinButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const PinButton = styled.button<{ $active?: boolean; $variant?: 'left' | 'right' | 'none' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.palette.primary[100] : 'transparent'};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.palette.primary[500] : theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.palette.primary[700] : theme.colors.palette.neutral[600]};
  transition: all 0.2s;
  
  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.palette.primary[200] : theme.colors.palette.neutral[100]};
    border-color: ${({ theme }) => theme.colors.palette.primary[500]};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.palette.neutral[200]};
`;

export const ColumnManagementPopup: React.FC<ColumnManagementPopupProps> = ({
  isOpen,
  onClose,
  columns,
  onColumnsChange,
}) => {
  const [localColumns, setLocalColumns] = useState<ColumnConfig[]>(columns);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Filter out checkbox column from management
  const manageableColumns = localColumns.filter(col => col.id !== 'checkbox');

  const handleVisibilityToggle = (columnId: string) => {
    setLocalColumns(prev => prev.map(col => 
      col.id === columnId ? { ...col, visible: !col.visible } : col
    ));
  };

  const handlePinToggle = (columnId: string, pinType: 'left' | 'right' | 'none') => {
    setLocalColumns(prev => {
      const updated = prev.map(col => {
        if (col.id === columnId) {
          const newPinned = col.pinned === pinType ? 'none' : pinType;
          return { ...col, pinned: newPinned, locked: false };
        }
        return col;
      });

      // Reorder: checkbox first, then left-pinned, then unpinned, then right-pinned
      const checkboxCol = updated.find(col => col.id === 'checkbox');
      const nonCheckboxCols = updated.filter(col => col.id !== 'checkbox');
      
      const sortedCols = nonCheckboxCols.sort((a, b) => {
        const aPinned = a.pinned || (a.locked ? 'left' : 'none');
        const bPinned = b.pinned || (b.locked ? 'left' : 'none');
        
        if (aPinned === 'left' && bPinned !== 'left') return -1;
        if (aPinned !== 'left' && bPinned === 'left') return 1;
        if (aPinned === 'right' && bPinned !== 'right') return 1;
        if (aPinned !== 'right' && bPinned === 'right') return -1;
        
        return a.order - b.order;
      });
      
      return checkboxCol 
        ? [{ ...checkboxCol, order: 0 }, ...sortedCols.map((col, idx) => ({ ...col, order: idx + 1 }))]
        : sortedCols.map((col, idx) => ({ ...col, order: idx }));
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newColumns = [...manageableColumns];
    const draggedItem = newColumns[draggedIndex];
    newColumns.splice(draggedIndex, 1);
    newColumns.splice(index, 0, draggedItem);

    // Update with checkbox column
    const checkboxCol = localColumns.find(col => col.id === 'checkbox');
    const reordered = checkboxCol 
      ? [checkboxCol, ...newColumns]
      : newColumns;

    setLocalColumns(reordered.map((col, idx) => ({ ...col, order: idx })));
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleApply = () => {
    onColumnsChange(localColumns);
    onClose();
  };

  const handleCancel = () => {
    setLocalColumns(columns);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Column Management"
      size="medium"
    >
      <ModalContent>
        <Typography variant="body" as="p">
          Manage column visibility, pinning, and order. Drag to reorder columns.
        </Typography>

        <ColumnList>
          {manageableColumns.map((col, index) => {
            const pinnedState = col.pinned || (col.locked ? 'left' : 'none');
            
            return (
              <ColumnItem
                key={col.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                $isDragging={draggedIndex === index}
              >
                <DragHandle>
                  <DragIndicatorIcon fontSize="small" />
                </DragHandle>

                <ColumnInfo>
                  <Checkbox
                    checked={col.visible}
                    onChange={() => handleVisibilityToggle(col.id)}
                  />
                  <Typography variant="body" as="span">
                    {col.label}
                  </Typography>
                </ColumnInfo>

                <PinButtons>
                  <PinButton
                    $active={pinnedState === 'left'}
                    $variant="left"
                    onClick={() => handlePinToggle(col.id, 'left')}
                    title="Pin left"
                  >
                    <LockIcon fontSize="small" />
                  </PinButton>
                  <PinButton
                    $active={pinnedState === 'right'}
                    $variant="right"
                    onClick={() => handlePinToggle(col.id, 'right')}
                    title="Pin right"
                  >
                    <PushPinIcon fontSize="small" />
                  </PinButton>
                  <PinButton
                    $active={pinnedState === 'none'}
                    $variant="none"
                    onClick={() => handlePinToggle(col.id, 'none')}
                    title="Unpin"
                  >
                    {col.visible ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                  </PinButton>
                </PinButtons>
              </ColumnItem>
            );
          })}
        </ColumnList>
      </ModalContent>

      <ModalFooter>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};
