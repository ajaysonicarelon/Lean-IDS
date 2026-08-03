#!/bin/bash

# Markdown Cleanup Script
# Safely removes temporary progress and fix documentation files
# Created: August 3, 2026

echo "🧹 Starting Markdown Cleanup..."
echo ""

# Counter for deleted files
DELETED_COUNT=0

# Root directory cleanup
echo "📁 Cleaning root directory..."

# Navigation refactor files
rm -f NAVIGATION_REFACTOR_PROGRESS.md && echo "  ✅ Deleted NAVIGATION_REFACTOR_PROGRESS.md" && ((DELETED_COUNT++))
rm -f NAVIGATION_REFACTOR_SUMMARY.md && echo "  ✅ Deleted NAVIGATION_REFACTOR_SUMMARY.md" && ((DELETED_COUNT++))
rm -f SIDENAV_REFACTOR_PROGRESS_UPDATE.md && echo "  ✅ Deleted SIDENAV_REFACTOR_PROGRESS_UPDATE.md" && ((DELETED_COUNT++))
rm -f SIDENAV_REFACTOR_COMPLETE.md && echo "  ✅ Deleted SIDENAV_REFACTOR_COMPLETE.md" && ((DELETED_COUNT++))
rm -f SIDENAV_HOTFIX_APPLIED.md && echo "  ✅ Deleted SIDENAV_HOTFIX_APPLIED.md" && ((DELETED_COUNT++))
rm -f SIDENAV_ICONS_FIXED.md && echo "  ✅ Deleted SIDENAV_ICONS_FIXED.md" && ((DELETED_COUNT++))

# Completion status files
rm -f ARIA_UPDATES_COMPLETE.md && echo "  ✅ Deleted ARIA_UPDATES_COMPLETE.md" && ((DELETED_COUNT++))
rm -f CLEANUP_COMPLETE.md && echo "  ✅ Deleted CLEANUP_COMPLETE.md" && ((DELETED_COUNT++))
rm -f STORYBOOK_UPDATES_COMPLETE.md && echo "  ✅ Deleted STORYBOOK_UPDATES_COMPLETE.md" && ((DELETED_COUNT++))
rm -f NPM_DOCS_UPDATED.md && echo "  ✅ Deleted NPM_DOCS_UPDATED.md" && ((DELETED_COUNT++))
rm -f STORYBOOK_TEST_SETUP_COMPLETE.md && echo "  ✅ Deleted STORYBOOK_TEST_SETUP_COMPLETE.md" && ((DELETED_COUNT++))

# Progress bar files
rm -f PROGRESS_BAR_CHECKLIST_VERIFICATION.md && echo "  ✅ Deleted PROGRESS_BAR_CHECKLIST_VERIFICATION.md" && ((DELETED_COUNT++))
rm -f PROGRESS_BAR_FIGMA_SPECS.md && echo "  ✅ Deleted PROGRESS_BAR_FIGMA_SPECS.md" && ((DELETED_COUNT++))

# Old release summary
rm -f RELEASE_v1.7.6_SUMMARY.md && echo "  ✅ Deleted RELEASE_v1.7.6_SUMMARY.md" && ((DELETED_COUNT++))

echo ""
echo "📦 Cleaning component fix files..."

# Modal component
rm -f packages/components/src/Modal/STORYBOOK_TYPOGRAPHY_CLEANUP.md && echo "  ✅ Deleted Modal/STORYBOOK_TYPOGRAPHY_CLEANUP.md" && ((DELETED_COUNT++))
rm -f packages/components/src/Modal/STORYBOOK_TYPOGRAPHY_UPDATE.md && echo "  ✅ Deleted Modal/STORYBOOK_TYPOGRAPHY_UPDATE.md" && ((DELETED_COUNT++))

# SegmentController
rm -f packages/components/src/SegmentController/FOCUS_INDICATOR_FIX.md && echo "  ✅ Deleted SegmentController/FOCUS_INDICATOR_FIX.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SegmentController/ICONS_VERIFICATION.md && echo "  ✅ Deleted SegmentController/ICONS_VERIFICATION.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SegmentController/ICON_COLOR_FIX.md && echo "  ✅ Deleted SegmentController/ICON_COLOR_FIX.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SegmentController/IMPORT_FIX.md && echo "  ✅ Deleted SegmentController/IMPORT_FIX.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SegmentController/LABEL_COLOR_FIX.md && echo "  ✅ Deleted SegmentController/LABEL_COLOR_FIX.md" && ((DELETED_COUNT++))

# Select
rm -f packages/components/src/Select/ICON_IMPORT_FIX.md && echo "  ✅ Deleted Select/ICON_IMPORT_FIX.md" && ((DELETED_COUNT++))
rm -f packages/components/src/Select/ICON_IMPORT_UPDATE.md && echo "  ✅ Deleted Select/ICON_IMPORT_UPDATE.md" && ((DELETED_COUNT++))

# Slider
rm -f packages/components/src/Slider/ICON_IMPORT_FIX.md && echo "  ✅ Deleted Slider/ICON_IMPORT_FIX.md" && ((DELETED_COUNT++))

# SideNav
rm -f packages/components/src/SideNav/ICON_IMPORT_FIX.md && echo "  ✅ Deleted SideNav/ICON_IMPORT_FIX.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SideNav/ICON_IMPORT_UPDATE.md && echo "  ✅ Deleted SideNav/ICON_IMPORT_UPDATE.md" && ((DELETED_COUNT++))
rm -f packages/components/src/SideNav/ICON_VERIFICATION.md && echo "  ✅ Deleted SideNav/ICON_VERIFICATION.md" && ((DELETED_COUNT++))

# Switch
rm -f packages/components/src/Switch/ICON_IMPORT_FIX.md && echo "  ✅ Deleted Switch/ICON_IMPORT_FIX.md" && ((DELETED_COUNT++))

# Table
rm -f packages/components/src/Table/WIDTH_PROPERTIES_DOCUMENTATION.md && echo "  ✅ Deleted Table/WIDTH_PROPERTIES_DOCUMENTATION.md" && ((DELETED_COUNT++))

echo ""
echo "🗂️  Cleaning archive folder..."
if [ -d "archive" ]; then
  ARCHIVE_COUNT=$(find archive -type f | wc -l | tr -d ' ')
  rm -rf archive && echo "  ✅ Deleted archive/ folder ($ARCHIVE_COUNT files)" && ((DELETED_COUNT+=ARCHIVE_COUNT))
else
  echo "  ℹ️  Archive folder not found (already deleted)"
fi

echo ""
echo "✨ Cleanup complete!"
echo "📊 Total files deleted: $DELETED_COUNT"
echo ""
echo "📋 Kept essential files:"
echo "  ✅ README.md, CONTRIBUTING.md, SECURITY.md"
echo "  ✅ STORYBOOK_TESTING_GUIDE.md"
echo "  ✅ ACCESSIBILITY_TEST_REPORT.md"
echo "  ✅ Security implementation docs"
echo "  ✅ Component Maturity Checklist"
echo "  ✅ All component README.md files"
echo "  ✅ Figma workflow files (review if needed)"
echo ""
