import React, { useState, useEffect } from 'react';
import { TableSidePanelProps } from './TableSidePanel.types';
import { ColumnConfig } from '../TableSettings';
import {
  CollapsedPanel,
  VerticalButton,
  ButtonIcon,
  VerticalText,
  ExpandedOverlay,
  ExpandedPanel,
  PanelHeader,
  HeaderButton,
  PanelContent,
  ColumnList,
  ColumnItem,
  ExpandIcon,
  CheckboxWrapper,
  DragHandle,
  ColumnLabel,
  LockButton,
  SubColumnItem,
} from './TableSidePanel.styles';
import { Checkbox } from '../Checkbox';
import { InlineMessage } from '../InlineMessage';
import { Select } from '../Select';
import type { SelectOption } from '../Select';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const TableSidePanel: React.FC<TableSidePanelProps> = ({
  columns,
  onColumnsChange,
  onFilterToggle,
  showFilters = false,
  lockWarning = false,
  className,
}) => {
  const [activePanel, setActivePanel] = useState<'columns' | 'filters' | null>(null);
  const [localColumns, setLocalColumns] = useState<ColumnConfig[]>(columns);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [expandedParents, setExpandedParents] = useState<Set<string>>(new Set());
  const [hoveredColumnId, setHoveredColumnId] = useState<string | null>(null);

  useEffect(() => {
    setLocalColumns(columns);
  }, [columns]);

  useEffect(() => {
    if (lockWarning) {
      setShowWarning(true);
      const timer = setTimeout(() => setShowWarning(false), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [lockWarning]);

  const handleColumnsClick = () => {
    setActivePanel(activePanel === 'columns' ? null : 'columns');
  };

  const handleFiltersClick = () => {
    setActivePanel(activePanel === 'filters' ? null : 'filters');
    if (onFilterToggle) {
      onFilterToggle();
    }
  };

  const handleReset = () => {
    // Reset to initial state: all visible, all unlocked, default order
    const resetColumns = columns.map((col, index) => {
      if (col.subColumns) {
        return {
          ...col,
          visible: true,
          locked: false,
          order: index,
          subColumns: col.subColumns.map((subCol, subIndex) => ({
            ...subCol,
            visible: true,
            locked: false,
          })),
        };
      }
      return {
        ...col,
        visible: true,
        locked: false,
        order: index,
      };
    });
    setLocalColumns(resetColumns);
    setExpandedParents(new Set());
  };

  const handleApply = () => {
    onColumnsChange(localColumns);
    setActivePanel(null);
  };

  const handleCancel = () => {
    setLocalColumns(columns);
    setActivePanel(null);
  };

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
    
    // Sort columns: checkbox first, then locked columns, then unlocked columns
    const sortedColumns = updatedColumns.sort((a, b) => {
      if (a.id === 'checkbox') return -1;
      if (b.id === 'checkbox') return 1;
      if (a.locked && !b.locked) return -1;
      if (!a.locked && b.locked) return 1;
      return a.order - b.order;
    });
    
    // Update order property
    const reorderedColumns = sortedColumns.map((col, index) => ({
      ...col,
      order: index,
    }));
    
    setLocalColumns(reorderedColumns);
  };

  const handleDragStart = (index: number, parentId?: string) => {
    // Prevent dragging locked columns or checkbox
    const col = localColumns.filter(c => c.id !== 'checkbox')[index];
    if (col && col.locked) return;
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number, parentId?: string) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const nonCheckboxCols = localColumns.filter(c => c.id !== 'checkbox');
    
    // Prevent dropping on or moving locked columns
    if (nonCheckboxCols[index]?.locked || nonCheckboxCols[draggedIndex]?.locked) return;

    const checkboxCol = localColumns.find(c => c.id === 'checkbox');
    const newColumns = [...nonCheckboxCols];
    const draggedItem = newColumns[draggedIndex];
    newColumns.splice(draggedIndex, 1);
    newColumns.splice(index, 0, draggedItem);

    // Update order property
    const reorderedColumns = newColumns.map((col, idx) => ({
      ...col,
      order: checkboxCol ? idx + 1 : idx,
    }));

    // Add checkbox back at the beginning if it exists
    const finalColumns = checkboxCol 
      ? [{ ...checkboxCol, order: 0 }, ...reorderedColumns]
      : reorderedColumns;

    setLocalColumns(finalColumns);
    setDraggedIndex(index);
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

  const handleDragEnd = () => {
    setDraggedIndex(null);
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
          onMouseEnter={() => setHoveredColumnId(column.id)}
          onMouseLeave={() => setHoveredColumnId(null)}
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
            <DragIndicatorIcon style={{ fontSize: '16px' }} />
          </DragHandle>

          {/* Lock icon only for parent columns or columns without children */}
          {!isNested && (
            <LockButton onClick={() => handleLockToggle(column.id)}>
              {column.locked ? <LockIcon style={{ fontSize: '16px' }} /> : <LockOpenIcon style={{ fontSize: '16px' }} />}
            </LockButton>
          )}

          <ColumnLabel>{column.label}</ColumnLabel>
        </ItemComponent>

        {hasSubColumns && isExpanded && column.subColumns!.map((subCol, subIndex) => (
          renderColumnItem(subCol, subIndex, column.id)
        ))}
      </React.Fragment>
    );
  };

  return (
    <>
      {/* Collapsed Side Panel */}
      <CollapsedPanel className={className}>
        <VerticalButton onClick={handleColumnsClick} $active={activePanel === 'columns'}>
          <ButtonIcon>
            {activePanel === 'columns' ? <CloseIcon style={{ fontSize: '16px' }} /> : <DragIndicatorIcon style={{ fontSize: '16px' }} />}
          </ButtonIcon>
          <VerticalText>Columns</VerticalText>
        </VerticalButton>

        <VerticalButton onClick={handleFiltersClick} $active={activePanel === 'filters'}>
          <ButtonIcon>
            <FilterListIcon style={{ fontSize: '16px' }} />
          </ButtonIcon>
          <VerticalText>Filters</VerticalText>
        </VerticalButton>
      </CollapsedPanel>

      {/* Expanded Overlay Panel */}
      {activePanel && (
        <ExpandedOverlay>
          <ExpandedPanel>
            <PanelHeader>
              <HeaderButton onClick={handleReset} $variant="danger">
                Reset
              </HeaderButton>
              <HeaderButton onClick={handleCancel} $variant="secondary">
                Cancel
              </HeaderButton>
              <HeaderButton onClick={handleApply} $variant="primary">
                Apply
              </HeaderButton>
            </PanelHeader>

            <PanelContent>
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

              {activePanel === 'columns' && (
                <ColumnList>
                  {localColumns
                    .filter((col) => col.id !== 'checkbox')
                    .map((column, index) => renderColumnItem(column, index))}
                </ColumnList>
              )}

              {activePanel === 'filters' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: '#666',
                    fontStyle: 'italic' 
                  }}>
                    Note: Filter options will be populated with actual table data values
                  </p>
                  {(() => {
                    // Flatten columns to get only leaf columns (actual data columns)
                    const flatColumns: ColumnConfig[] = [];
                    localColumns.forEach(col => {
                      if (col.subColumns && col.subColumns.length > 0) {
                        // If has sub-columns, add the sub-columns (leaf columns)
                        flatColumns.push(...col.subColumns);
                      } else {
                        // If no sub-columns, add the column itself (leaf column)
                        flatColumns.push(col);
                      }
                    });
                    
                    // Filter out checkbox and hidden columns
                    return flatColumns
                      .filter((col) => col.id !== 'checkbox' && col.visible !== false)
                      .map((column) => {
                        // Generate dynamic options from column data (placeholder for now)
                        const filterOptions: SelectOption[] = [
                          { value: '', label: 'All' },
                          { value: 'value1', label: 'Value 1' },
                          { value: 'value2', label: 'Value 2' },
                          { value: 'value3', label: 'Value 3' },
                        ];
                        
                        return (
                          <Select
                            key={column.id}
                            label={column.label}
                            placeholder={`Filter by ${column.label}`}
                            options={filterOptions}
                            size="small"
                            searchable={true}
                            showSelectionIndicator={false}
                          />
                        );
                      });
                  })()}
                </div>
              )}
            </PanelContent>
          </ExpandedPanel>
        </ExpandedOverlay>
      )}
    </>
  );
};
