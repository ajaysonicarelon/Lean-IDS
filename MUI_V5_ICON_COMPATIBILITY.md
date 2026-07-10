# Material UI v5 Icon Compatibility Issues

## 🔍 Problem

Some icon names used in Lean IDS don't exist in Material UI v5.0-v5.10.

## ❌ Icons That Don't Exist in Material UI v5

| Icon Name | Status | Alternative |
|-----------|--------|-------------|
| `LockOpen` | ❌ Not in v5.0-v5.10 | `LockOpenOutlined` ✅ |
| `DragIndicator` | ✅ EXISTS in v5 | No change needed |
| `ExpandMore` | ✅ EXISTS in v5 | No change needed |
| `ChevronLeft` | ✅ EXISTS in v5 | No change needed |
| `ChevronRight` | ✅ EXISTS in v5 | No change needed |

## 🔍 Check All Icons

Let me verify which icons are actually causing issues...

The error says `DragIndicator` is not found, but it DOES exist in Material UI v5.

## 💡 Real Issue

The problem might be:
1. **Module resolution** - Can't find Material UI at all
2. **Version too old** - They have Material UI < v5.0
3. **Installation issue** - Material UI not properly installed

## ✅ Solution

Ask dev team to:
1. Check their Material UI version:
   ```bash
   npm list @mui/icons-material @mui/material
   ```

2. If version is < 5.0, upgrade:
   ```bash
   npm install @mui/icons-material@latest @mui/material@latest
   ```

3. If version is >= 5.0 but icons still fail:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
