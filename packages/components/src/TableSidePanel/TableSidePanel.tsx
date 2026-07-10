import React, { useState, useEffect } from 'react';
import { TableSidePanelProps, ColumnFilter } from './TableSidePanel.types';
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
import { Chip } from '../Chip';
import { Button } from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const TableSidePanel: React.FC<TableSidePanelProps> = ({
  columns,
  onColumnsChange,
  onFilterToggle,
  showFilters = false,
  lockWarning = false,
  className,
  tableData = [],
  columnFilters = [],
  onFiltersChange,
  customTabs = [],
  onClose,
}) => {
  const [activePanel, setActivePanel] = useState<'columns' | 'filters' | string | null>(null);
  const [localColumns, setLocalColumns] = useState<ColumnConfig[]>(columns);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [expandedParents, setExpandedParents] = useState<Set<string>>(new Set());
  const [hoveredColumnId, setHoveredColumnId] = useState<string | null>(null);
  const [pendingFilters, setPendingFilters] = useState<{ [key: string]: string }>({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

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

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && activePanel) {
        // Check if there are unsaved filter changes
        if (activePanel === 'filters' && hasUnsavedChanges) {
          // Prevent closing and show warning
          setShowUnsavedWarning(true);
          setTimeout(() => setShowUnsavedWarning(false), 3000);
        } else {
          // Close the panel
          setActivePanel(null);
          if (onClose) {
            onClose();
          }
        }
      }
    };

    if (activePanel) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    return undefined;
  }, [activePanel, hasUnsavedChanges, onClose]);

  // Track pending filter changes
  useEffect(() => {
    if (activePanel === 'filters') {
      // Check if there are any pending filter selections that haven't been applied
      const hasPending = Object.keys(pendingFilters).length > 0;
      setHasUnsavedChanges(hasPending);
    } else {
      setHasUnsavedChanges(false);
    }
  }, [pendingFilters, activePanel]);

  const handleColumnsClick = () => {
    setActivePanel(activePanel === 'columns' ? null : 'columns');
  };

  const handleFiltersClick = () => {
    const newPanel = activePanel === 'filters' ? null : 'filters';
    setActivePanel(newPanel);
    // Don't call onFilterToggle - it's no longer needed for toggling search headers
  };
  
  const handleClearAllFilters = () => {
    if (onFiltersChange) {
      onFiltersChange([]);
    }
    setPendingFilters({});
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
    
    // Clear all filters
    if (onFiltersChange) {
      onFiltersChange([]);
    }
  };

  const handleApply = () => {
    onColumnsChange(localColumns);
    
    // Apply pending filters - merge with existing filters instead of replacing
    if (onFiltersChange && Object.keys(pendingFilters).length > 0) {
      // Start with existing filters
      const existingFiltersMap = new Map(columnFilters.map(f => [f.columnId, f.value]));
      
      // Merge pending filters
      Object.entries(pendingFilters).forEach(([columnId, value]) => {
        if (value) {
          existingFiltersMap.set(columnId, value);
        } else {
          existingFiltersMap.delete(columnId);
        }
      });
      
      // Convert back to array
      const mergedFilters: ColumnFilter[] = Array.from(existingFiltersMap.entries()).map(([columnId, value]) => ({
        columnId,
        value
      }));
      
      onFiltersChange(mergedFilters);
    }
    
    // Clear pending filters after applying
    setPendingFilters({});
    setActivePanel(null);
  };

  const handleCancel = () => {
    setLocalColumns(columns);
    // Clear pending filters without applying
    setPendingFilters({});
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
            {activePanel === 'filters' ? <CloseIcon style={{ fontSize: '16px' }} /> : <FilterListIcon style={{ fontSize: '16px' }} />}
            {columnFilters.length > 0 && activePanel !== 'filters' && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#5e35b1',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 600
              }}>
                {columnFilters.length}
              </span>
            )}
          </ButtonIcon>
          <VerticalText>Filters</VerticalText>
        </VerticalButton>
        
        {/* Clear All Filters Button - only show when there are active filters */}
        {columnFilters.length > 0 && (
          <VerticalButton 
            onClick={handleClearAllFilters}
            style={{ 
              marginTop: '8px',
              opacity: 0.8,
              fontSize: '12px'
            }}
          >
            <ButtonIcon>
              <CloseIcon style={{ fontSize: '14px' }} />
            </ButtonIcon>
            <VerticalText style={{ fontSize: '11px' }}>Clear All</VerticalText>
          </VerticalButton>
        )}

        {/* Custom Tabs */}
        {customTabs.map((tab) => (
          <VerticalButton
            key={tab.id}
            onClick={() => {
              if (tab.onClick) {
                tab.onClick();
              } else if (tab.content) {
                setActivePanel(activePanel === tab.id ? null : tab.id);
              }
            }}
            $active={activePanel === tab.id}
          >
            <ButtonIcon>{tab.icon}</ButtonIcon>
            <VerticalText>{tab.label}</VerticalText>
          </VerticalButton>
        ))}
      </CollapsedPanel>

      {/* Expanded Overlay Panel */}
      {activePanel && (
        <ExpandedOverlay>
          <ExpandedPanel ref={panelRef}>
            <PanelHeader $shake={showUnsavedWarning}>
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

              {showUnsavedWarning && activePanel === 'filters' && (
                <div style={{ marginBottom: '16px' }}>
                  <InlineMessage
                    type="warning"
                    style="accentBorder"
                    text="Unsaved filter changes"
                    descriptionText="Please apply, cancel, or reset filters before closing."
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
                  {tableData.length === 0 ? (
                    <p style={{ 
                      margin: 0, 
                      fontSize: '14px', 
                      color: '#666',
                      fontStyle: 'italic' 
                    }}>
                      No data available for filtering
                    </p>
                  ) : (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center' 
                        }}>
                          <p style={{ 
                            margin: 0, 
                            fontSize: '14px', 
                            color: '#666',
                            fontStyle: 'italic' 
                          }}>
                            Select values to filter table rows
                          </p>
                          
                          {columnFilters.length > 0 && onFiltersChange && (
                            <Button
                              variant="tertiary"
                              size="small"
                              onClick={handleClearAllFilters}
                            >
                              Clear All
                            </Button>
                          )}
                        </div>
                        
                        {columnFilters.length > 0 && onFiltersChange && (
                          <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '8px',
                            padding: '12px',
                            background: '#f9fafb',
                            borderRadius: '4px',
                            border: '1px solid #e5e7eb'
                          }}>
                            {columnFilters.map((filter) => {
                              const column = localColumns.find(col => {
                                if (col.id === filter.columnId) return true;
                                if (col.subColumns) {
                                  return col.subColumns.some(sub => sub.id === filter.columnId);
                                }
                                return false;
                              });
                              
                              let columnLabel = filter.columnId;
                              if (column) {
                                if (column.id === filter.columnId) {
                                  columnLabel = column.label;
                                } else if (column.subColumns) {
                                  const subCol = column.subColumns.find(sub => sub.id === filter.columnId);
                                  if (subCol) columnLabel = subCol.label;
                                }
                              }
                              
                              return (
                                <Chip
                                  key={filter.columnId}
                                  label={`${columnLabel}: ${filter.value}`}
                                  size="small"
                                  variant="filled"
                                  type="default"
                                  trailingIcon={<CloseIcon style={{ fontSize: '14px' }} />}
                                  onTrailingIconClick={() => {
                                    const newFilters = columnFilters.filter(f => f.columnId !== filter.columnId);
                                    onFiltersChange(newFilters);
                                  }}
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                      {(() => {
                        // Flatten columns to get only leaf columns (actual data columns)
                        const flatColumns: ColumnConfig[] = [];
                        localColumns.forEach(col => {
                          if (col.subColumns && col.subColumns.length > 0) {
                            flatColumns.push(...col.subColumns);
                          } else {
                            flatColumns.push(col);
                          }
                        });
                        
                        // Filter out checkbox and hidden columns
                        return flatColumns
                          .filter((col) => col.id !== 'checkbox' && col.visible !== false)
                          .map((column) => {
                            // Extract unique values from table data for this column
                            const uniqueValues = new Set<string>();
                            tableData.forEach((row) => {
                              const value = row[column.id];
                              if (value !== null && value !== undefined && value !== '') {
                                uniqueValues.add(String(value));
                              }
                            });
                            
                            // Generate filter options from unique values
                            const filterOptions: SelectOption[] = [
                              { value: '', label: 'All' },
                              ...Array.from(uniqueValues)
                                .sort()
                                .map((val) => ({ value: val, label: val })),
                            ];
                            
                            // Get current filter value for this column (from pending or applied)
                            const pendingValue = pendingFilters[column.id];
                            const currentFilter = columnFilters.find(f => f.columnId === column.id);
                            const currentValue = pendingValue !== undefined ? pendingValue : (currentFilter?.value || '');
                            
                            return (
                              <Select
                                key={column.id}
                                label={column.label}
                                placeholder={`Filter by ${column.label}`}
                                options={filterOptions}
                                value={currentValue}
                                onChange={(value) => {
                                  // Handle both string and string[] from Select
                                  const filterValue = Array.isArray(value) ? value[0] : value;
                                  // Store in pending filters (not applied yet)
                                  setPendingFilters(prev => {
                                    const newPending = { ...prev };
                                    if (filterValue) {
                                      newPending[column.id] = filterValue;
                                    } else {
                                      delete newPending[column.id];
                                    }
                                    return newPending;
                                  });
                                }}
                                size="small"
                                searchable={true}
                                showSelectionIndicator={false}
                              />
                            );
                          });
                      })()}
                    </>
                  )}
                </div>
              )}

              {/* Custom Tab Content */}
              {customTabs.map((tab) => 
                activePanel === tab.id && tab.content ? (
                  <div key={tab.id}>{tab.content}</div>
                ) : null
              )}
            </PanelContent>
          </ExpandedPanel>
        </ExpandedOverlay>
      )}
    </>
  );
};
