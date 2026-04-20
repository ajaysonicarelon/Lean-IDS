import React, { useState, useEffect } from 'react';
import { TableSettingsProps, ColumnConfig } from './TableSettings.types';
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ColumnList,
  ColumnItem,
  DragHandle,
  ColumnLabel,
  IconButton,
  ModalFooter,
  Button,
} from './TableSettings.styles';
import { Icon } from '../Icon';
import { Checkbox } from '../Checkbox';
import { InlineMessage } from '../InlineMessage';

export const TableSettings: React.FC<TableSettingsProps> = ({
  isOpen,
  onClose,
  columns,
  onColumnsChange,
  lockWarning,
  className,
}) => {
  const [localColumns, setLocalColumns] = useState<ColumnConfig[]>(columns);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);

  // Sync localColumns when columns prop changes (e.g., from lock reordering)
  useEffect(() => {
    setLocalColumns(columns);
  }, [columns]);

  // Show warning from parent or local state
  useEffect(() => {
    if (lockWarning) {
      setShowWarning(true);
      const timer = setTimeout(() => setShowWarning(false), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [lockWarning]);

  const handleVisibilityToggle = (id: string) => {
    setLocalColumns(
      localColumns.map((col) =>
        col.id === id ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const handleLockToggle = (id: string) => {
    const column = localColumns.find(col => col.id === id);
    if (!column) return;
    
    // If trying to lock and already have 3 locked (excluding checkbox), prevent it
    const currentLockedCount = localColumns.filter(col => col.locked && col.id !== 'checkbox').length;
    
    if (!column.locked && currentLockedCount >= 3) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return; // Don't allow locking
    }
    
    setLocalColumns(
      localColumns.map((col) =>
        col.id === id ? { ...col, locked: !col.locked } : col
      )
    );
  };

  const handleDragStart = (index: number) => {
    // Prevent dragging locked columns
    if (localColumns[index].locked) return;
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    // Prevent dropping on or moving locked columns
    if (localColumns[index].locked || localColumns[draggedIndex].locked) return;

    const newColumns = [...localColumns];
    const draggedItem = newColumns[draggedIndex];
    newColumns.splice(draggedIndex, 1);
    newColumns.splice(index, 0, draggedItem);

    // Update order property
    const reorderedColumns = newColumns.map((col, idx) => ({
      ...col,
      order: idx,
    }));

    setLocalColumns(reorderedColumns);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleSave = () => {
    onColumnsChange(localColumns);
    onClose();
  };

  const handleCancel = () => {
    setLocalColumns(columns);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  return (
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <Modal className={className}>
        <ModalHeader>
          <ModalTitle>Table Settings</ModalTitle>
          <CloseButton onClick={handleCancel} aria-label="Close">
            <Icon name="Close" size="small" />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {showWarning && (
            <div style={{ marginBottom: '16px' }}>
              <InlineMessage
                type="warning"
                style="accentBorder"
                text="Maximum columns reached"
                descriptionText="You can only freeze any 3 columns at a time."
                showLeadingIcon={true}
                showTrailingIcon={false}
                action={false}
                link={false}
              />
            </div>
          )}
          <ColumnList>
            {localColumns.map((column, index) => (
              <ColumnItem
                key={column.id}
                draggable={!column.locked}
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                $isDragging={draggedIndex === index}
                $isLocked={column.locked}
              >
                <DragHandle $isLocked={column.locked}>
                  <Icon name="DragIndicator" size="small" />
                </DragHandle>

                <Checkbox
                  checked={column.visible}
                  onChange={() => handleVisibilityToggle(column.id)}
                />

                <ColumnLabel>{column.label}</ColumnLabel>

                <IconButton
                  onClick={() => handleLockToggle(column.id)}
                  title={column.locked ? 'Unlock column' : 'Lock column'}
                  style={{
                    opacity: !column.locked && localColumns.filter(col => col.locked && col.id !== 'checkbox').length >= 3 ? 0.4 : 1,
                    cursor: !column.locked && localColumns.filter(col => col.locked && col.id !== 'checkbox').length >= 3 ? 'not-allowed' : 'pointer',
                    pointerEvents: 'auto'
                  }}
                >
                  <Icon
                    name={column.locked ? 'Lock' : 'LockOpen'}
                    size="small"
                  />
                </IconButton>
              </ColumnItem>
            ))}
          </ColumnList>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button $variant="primary" onClick={handleSave}>
            Apply Changes
          </Button>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
};
