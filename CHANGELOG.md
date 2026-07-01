# Changelog

All notable changes to the Lean IDS Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.4] - 2026-07-01

### 🐛 Bug Fixes
- **TableToolbar**: Fixed critical bug - added missing `useState` import from React
- **Button**: Added runtime prop validation warnings for deprecated `label` and `icon` props
- **MetricCard**: Added runtime prop validation warning for deprecated `label` prop (use `metricName` instead)

### ✨ Enhancements
- **SideNavigation**: Improved pin/unpin button icons - now uses filled icon when pinned and outlined icon when unpinned for better visual distinction
- **Footer**: Added proper spacing (4px gap) between "Facing any issues?" text and feedback link

### 📚 Documentation
- **AI_GUIDELINES.md**: Added comprehensive component API reference with correct usage examples for all 19 components
- **COMPONENT_API_AUDIT.md**: Created complete technical audit documentation for all components
- **DEV_REPORTED_BUGS.md**: Documented all reported bugs and their resolutions
- Updated component examples to show actual APIs (Button uses `children` + `leadingIcon`/`trailingIcon`, MetricCard uses `metricName`, etc.)

### 🔍 Component Audit
Audited and documented 19 components:
- **Core UI (9)**: Button, InputField, Chip, Select, Checkbox, RadioButton, Toggle, Avatar, Badge, Textarea
- **Layout (6)**: PageLayout, TopHeader, SideNavigation, PageHeader, Breadcrumbs, Footer
- **Data Display (7)**: MetricCard, Table, Pagination, Modal, Drawer, Toast, AlertBanner, Tooltip, TableToolbar

### ⚠️ Breaking Changes
None - all changes are backward compatible

### 📝 Notes
- The `customSymbolUrl` prop already exists in SideNavigation component for custom sidebar symbols
- All prop validation warnings only appear in development mode (process.env.NODE_ENV !== 'production')

---

## [1.6.3] - Previous Release

(Previous changelog entries...)
