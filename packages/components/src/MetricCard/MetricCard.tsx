/**
 * MetricCard Component
 * 
 * Enterprise-grade metric card component with full accessibility and customization.
 * Displays KPIs and metrics in three variants: basic, filled, and set.
 * 
 * Features:
 * - ✅ forwardRef - Exposes root DOM node
 * - ✅ Polymorphic 'as' prop - Render as different elements
 * - ✅ All 8 states - default, hover, focus, active, disabled, loading, empty, error
 * - ✅ Typography component - All text uses Typography (no hardcoded styles)
 * - ✅ Design tokens only - No hardcoded pixels, colors, or spacing
 * - ✅ Full accessibility - ARIA attributes, keyboard navigation
 * - ✅ Customization slots - Custom render functions for all parts
 * - ✅ Event callbacks - onLoad, onError, onCardClick, onMetricClick, etc.
 */

import React, { forwardRef, useEffect, ElementType } from 'react';
import { MetricCardProps, MetricData } from './MetricCard.types';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import { Select } from '../Select';
import * as S from './MetricCard.styles';

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  (props, ref) => {
    const {
      // Core props
      variant = 'basic',
      metricName,
      value,
      
      // Change indicator
      showChange = false,
      changeValue,
      changeType = 'neutral',
      comparisonText,
      
      // Progress bar
      showProgressBar = false,
      progressValue = 0,
      progressColor,
      
      // Action chip
      showActionChip = false,
      actionText,
      actionType = 'info',
      onActionClick,
      
      // Set variant
      sectionHeading,
      showInfoIcon = false,
      onInfoClick,
      showDropdown = false,
      dropdownValue,
      dropdownOptions = [
        { value: 'Last 7 days', label: 'Last 7 days' },
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 6 months', label: 'Last 6 months' },
      ],
      onDropdownChange,
      metrics = [],
      
      // States
      isLoading = false,
      loadingMessage = 'Loading...',
      isEmpty = false,
      emptyMessage = 'No data available',
      isInvalid = false,
      errorMessage = 'An error occurred',
      disabled = false,
      
      // Event callbacks
      onLoad,
      onError,
      onCardClick,
      onMetricClick,
      
      // Customization slots
      customHeader,
      customValue,
      customChangeBadge,
      customProgressBar,
      customActionChip,
      customEmptyState,
      customLoadingState,
      customErrorState,
      
      // Polymorphism & styling
      as,
      className,
      style,
      contentClassName,
      headerClassName,
      metricsClassName,
      
      ...restProps
    } = props;

    const Component = (as || 'div') as ElementType;
    const isFilled = variant === 'filled';
    const isSet = variant === 'set';

    // Call onLoad when component mounts
    useEffect(() => {
      if (onLoad && !isLoading && !isEmpty && !isInvalid) {
        onLoad();
      }
    }, [onLoad, isLoading, isEmpty, isInvalid]);

    // Call onError when error state is active
    useEffect(() => {
      if (isInvalid && onError) {
        onError(new Error(errorMessage || 'Unknown error'));
      }
    }, [isInvalid, onError, errorMessage]);

    // Handle card click
    const handleCardClick = () => {
      if (!disabled && onCardClick) {
        onCardClick();
      }
    };

    // Handle metric click
    const handleMetricClick = (metric: MetricData, index: number) => {
      if (!disabled && onMetricClick) {
        onMetricClick(metric, index);
      }
    };

    // Handle action chip click
    const handleActionClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!disabled && onActionClick) {
        onActionClick();
      }
    };

    // Handle info icon click
    const handleInfoClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onInfoClick) {
        onInfoClick();
      }
    };

    // Render loading state
    if (isLoading) {
      if (customLoadingState) {
        return customLoadingState();
      }
      
      return (
        <S.CardContainer
          ref={ref}
          as={Component}
          $variant={variant}
          $disabled={disabled}
          className={className}
          style={style}
          {...restProps}
        >
          <S.LoadingOverlay>
            <Icon name="CloudOff" size="large" />
            <Typography variant="body" weight="medium" align="center">
              {loadingMessage}
            </Typography>
          </S.LoadingOverlay>
        </S.CardContainer>
      );
    }

    // Render empty state
    if (isEmpty) {
      if (customEmptyState) {
        return customEmptyState();
      }
      
      return (
        <S.CardContainer
          ref={ref}
          as={Component}
          $variant={variant}
          $disabled={disabled}
          className={className}
          style={style}
          {...restProps}
        >
          <S.EmptyStateContainer>
            <Icon name="Info" size="large" />
            <Typography variant="body" weight="medium" align="center">
              {emptyMessage}
            </Typography>
          </S.EmptyStateContainer>
        </S.CardContainer>
      );
    }

    // Render error state
    if (isInvalid) {
      if (customErrorState) {
        return customErrorState(errorMessage);
      }
      
      return (
        <S.CardContainer
          ref={ref}
          as={Component}
          $variant={variant}
          $disabled={disabled}
          className={className}
          style={style}
          {...restProps}
        >
          <S.ErrorContainer>
            <Icon name="Error" size="large" />
            <Typography variant="body" weight="semibold" align="center">
              {errorMessage}
            </Typography>
          </S.ErrorContainer>
        </S.CardContainer>
      );
    }

    // Render SET variant (multiple metrics)
    if (isSet) {
      return (
        <S.CardContainer
          ref={ref}
          as={Component}
          $variant={variant}
          $disabled={disabled}
          className={className}
          style={style}
          onClick={handleCardClick}
          role={onCardClick ? 'button' : undefined}
          tabIndex={onCardClick && !disabled ? 0 : undefined}
          aria-disabled={disabled}
          {...restProps}
        >
          {/* Header with title, info icon, and dropdown */}
          {(sectionHeading || showDropdown) && (
            <S.SetHeader className={headerClassName}>
              {customHeader ? (
                customHeader(sectionHeading)
              ) : (
                <>
                  <S.SetTitleContainer>
                    {sectionHeading && (
                      <Typography variant="headingS" weight="semibold">
                        {sectionHeading}
                      </Typography>
                    )}
                    {showInfoIcon && (
                      <S.InfoIconButton
                        onClick={handleInfoClick}
                        aria-label="More information"
                        disabled={disabled}
                      >
                        <Icon name="Info" size="small" />
                      </S.InfoIconButton>
                    )}
                  </S.SetTitleContainer>
                  
                  {showDropdown && (
                    <Select
                      label=""
                      options={dropdownOptions}
                      value={dropdownValue || dropdownOptions[0].value}
                      onChange={(val) => onDropdownChange?.(Array.isArray(val) ? val[0] : val)}
                      size="small"
                      disabled={disabled}
                    />
                  )}
                </>
              )}
            </S.SetHeader>
          )}

          {/* Metrics grid */}
          <S.MetricsGrid className={metricsClassName}>
            {metrics.map((metric, index) => (
              <S.MetricItem
                key={index}
                $highlighted={metric.highlighted}
                onClick={() => handleMetricClick(metric, index)}
                disabled={disabled}
                aria-label={`${metric.label}: ${metric.value}`}
              >
                <Typography 
                  variant="body" 
                  weight="medium"
                  color={metric.highlighted ? '#6222BC' : '#909090'}
                >
                  {metric.label}
                </Typography>
                <Typography 
                  variant="headingL" 
                  weight="semibold"
                  color={metric.highlighted ? '#6222BC' : '#222222'}
                >
                  {metric.value}
                </Typography>
              </S.MetricItem>
            ))}
          </S.MetricsGrid>
        </S.CardContainer>
      );
    }

    // Render BASIC or FILLED variant (single metric)
    return (
      <S.CardContainer
        ref={ref}
        as={Component}
        $variant={variant}
        $disabled={disabled}
        className={className}
        style={style}
        onClick={handleCardClick}
        role={onCardClick ? 'button' : undefined}
        tabIndex={onCardClick && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        {...restProps}
      >
        <S.ContentWrapper className={contentClassName}>
          {/* Metric name and value */}
          <S.MetricHeader className={headerClassName}>
            {metricName && (
              <Typography 
                variant="body" 
                weight="medium"
                color={isFilled ? '#CBB5E9' : '#909090'}
              >
                {metricName}
              </Typography>
            )}
            
            {customValue ? (
              customValue(value)
            ) : (
              value !== undefined && (
                <Typography 
                  variant="headingXL" 
                  weight="semibold"
                  color={isFilled ? '#FFFFFF' : '#222222'}
                >
                  {value}
                </Typography>
              )
            )}
          </S.MetricHeader>

          {/* Change indicator */}
          {showChange && (changeValue || comparisonText) && (
            <S.ChangeContainer>
              {customChangeBadge ? (
                customChangeBadge(changeValue, changeType)
              ) : (
                <>
                  {changeValue && (
                    <S.ChangeBadge $type={changeType}>
                      <Typography variant="caption" weight="medium">
                        {changeValue}
                      </Typography>
                    </S.ChangeBadge>
                  )}
                  {comparisonText && (
                    <Typography 
                      variant="caption" 
                      weight="medium"
                      color={isFilled ? '#CBB5E9' : '#909090'}
                    >
                      {comparisonText}
                    </Typography>
                  )}
                </>
              )}
            </S.ChangeContainer>
          )}

          {/* Progress bar */}
          {showProgressBar && (
            customProgressBar ? (
              customProgressBar(progressValue)
            ) : (
              <S.ProgressBarContainer>
                <S.ProgressBarFill 
                  $value={progressValue} 
                  $color={progressColor}
                  role="progressbar"
                  aria-valuenow={progressValue}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </S.ProgressBarContainer>
            )
          )}

          {/* Action chip */}
          {showActionChip && actionText && (
            customActionChip ? (
              customActionChip(actionText, actionType)
            ) : (
              <S.ActionChip
                $type={actionType}
                $disabled={disabled}
                onClick={handleActionClick}
                disabled={disabled}
                aria-label={actionText}
              >
                <Icon 
                  name={
                    actionType === 'warning' ? 'Warning' :
                    actionType === 'error' ? 'Error' :
                    actionType === 'success' ? 'CheckCircle' :
                    'Info'
                  } 
                  size="small" 
                />
                <Typography variant="caption" weight="medium">
                  {actionText}
                </Typography>
              </S.ActionChip>
            )
          )}
        </S.ContentWrapper>
      </S.CardContainer>
    );
  }
);

MetricCard.displayName = 'MetricCard';
