import React, { useState, useEffect } from 'react';
import { TableSettingsProps, ColumnConfig } from './TableSettings.types';
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ColumnList,
  ColumnItem,
  DragHandle,
  ColumnLabel,
  ModalFooter,
  SubColumnItem,
  ExpandIcon,
  CheckboxWrapper,
  LockButton,
} from './TableSettings.styles';
import { Icon } from '../Icon';
import { Checkbox } from '../Checkbox';
import { InlineMessage } from '../InlineMessage';
import { Button } from '../Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
  const [expandedParents, setExpandedParents] = useState<Set<string>>(new Set());

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

  const toggleExpand = (columnId: string) => {
    setExpandedParents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(columnId)) {
        newSet.delete(columnId);
      } else {
        newSet.add(columnId);
      }
      return newSet;
    });
  };

  const handleVisibilityToggle = (id: string) => {
    setLocalColumns((prev) =>
      prev.map((col) => {
        if (col.id === id) {
          // If parent is toggled, apply to all children
          if (col.subColumns) {
            return {
              ...col,
              visible: !col.visible,
              subColumns: col.subColumns.map((sub) => ({
                ...sub,
                visible: !col.visible,
              })),
            };
          }
          return { ...col, visible: !col.visible };
        }
        if (col.subColumns) {
          return {
            ...col,
            subColumns: col.subColumns.map((sub) =>
              sub.id === id ? { ...sub, visible: !sub.visible } : sub
            ),
          };
        }
        return col;
      })
    );
  };

  const handleLockToggle = (id: string) => {
    const column = localColumns.find(col => col.id === id);
    if (!column) return;
    
    // Check current locked count (excluding checkbox)
    const currentLockedCount = localColumns.filter(col => col.locked && col.id !== 'checkbox').length;
    
    // If trying to lock and already have 3 locked, prevent it
    if (!column.locked && currentLockedCount >= 3) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    
    // Toggle lock status - if parent is toggled, apply to all children
    const updatedColumns = localColumns.map(col => {
      if (col.id === id) {
        if (col.subColumns) {
          return {
            ...col,
            locked: !col.locked,
            subColumns: col.subColumns.map((sub) => ({
              ...sub,
              locked: !col.locked,
            })),
          };
        }
        return { ...col, locked: !col.locked };
      }
      return col;
    });
    
    // Reorder columns: checkbox first, then locked columns, then unlocked columns
    const checkboxCol = updatedColumns.find(col => col.id === 'checkbox');
    const nonCheckboxCols = updatedColumns.filter(col => col.id !== 'checkbox');
    
    const sortedCols = nonCheckboxCols.sort((a, b) => {
      if (a.locked && !b.locked) return -1;
      if (!a.locked && b.locked) return 1;
      return a.order - b.order;
    });
    
    const finalColumns = checkboxCol 
      ? [{ ...checkboxCol, order: 0 }, ...sortedCols.map((col, idx) => ({ ...col, order: idx + 1 }))]
      : sortedCols.map((col, idx) => ({ ...col, order: idx }));
    
    setLocalColumns(finalColumns);
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

  const handleSubColumnDragStart = (parentId: string, subIndex: number) => {
    setDraggedIndex(subIndex);
  };

  const handleSubColumnDragOver = (e: React.DragEvent, parentId: string, subIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === subIndex) return;

    setLocalColumns((prev) =>
      prev.map((col) => {
        if (col.id === parentId && col.subColumns) {
          const newSubColumns = [...col.subColumns];
          const draggedItem = newSubColumns[draggedIndex];
          newSubColumns.splice(draggedIndex, 1);
          newSubColumns.splice(subIndex, 0, draggedItem);
          return { ...col, subColumns: newSubColumns };
        }
        return col;
      })
    );
    setDraggedIndex(subIndex);
  };

  const renderColumnItem = (column: ColumnConfig, index: number, parentId?: string) => {
    const hasSubColumns = column.subColumns && column.subColumns.length > 0;
    const isExpanded = expandedParents.has(column.id);
    const isNested = !!parentId;

    const ItemComponent = isNested ? SubColumnItem : ColumnItem;

    return (
      <React.Fragment key={column.id}>
        <ItemComponent
          draggable={!column.locked && !hasSubColumns}
          onDragStart={() => {
            if (isNested && parentId) {
              handleSubColumnDragStart(parentId, index);
            } else if (!hasSubColumns) {
              handleDragStart(index);
            }
          }}
          onDragOver={(e: React.DragEvent) => {
            if (isNested && parentId) {
              handleSubColumnDragOver(e, parentId, index);
            } else if (!hasSubColumns) {
              handleDragOver(e, index);
            }
          }}
          onDragEnd={handleDragEnd}
          $isDragging={draggedIndex === index}
          $isLocked={column.locked}
        >
          {hasSubColumns ? (
            <ExpandIcon onClick={() => toggleExpand(column.id)}>
              {isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </ExpandIcon>
          ) : (
            <ExpandIcon style={{ visibility: 'hidden' }} />
          )}

          <CheckboxWrapper>
            <Checkbox
              checked={column.visible !== false}
              onChange={() => handleVisibilityToggle(column.id)}
            />
          </CheckboxWrapper>

          <DragHandle $isLocked={column.locked || hasSubColumns}>
            <Icon name="DragIndicator" size="small" />
          </DragHandle>

          <ColumnLabel>{column.label}</ColumnLabel>

          {/* Lock icon only for parent columns or columns without children */}
          {!isNested && (
            <LockButton onClick={() => handleLockToggle(column.id)}>
              <Icon
                name={column.locked ? 'Lock' : 'LockOpen'}
                size="small"
              />
            </LockButton>
          )}
        </ItemComponent>

        {hasSubColumns && isExpanded && column.subColumns!.map((subCol, subIndex) => (
          renderColumnItem(subCol, subIndex, column.id)
        ))}
      </React.Fragment>
    );
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
          <Button 
            onClick={handleCancel} 
            variant="secondary" 
            size="small"
            showLabel={false}
            leadingIcon={<Icon name="Close" size="small" />}
          >
            Close
          </Button>
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
            {localColumns
              .filter((col) => col.id !== 'checkbox')
              .map((column, index) => renderColumnItem(column, index))}
          </ColumnList>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleCancel} variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            Apply Changes
          </Button>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
};
