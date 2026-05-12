# Icon Component Reference

## Usage

```tsx
import { Icon } from '@lean-ids/components';

// Basic usage
<Icon name="Home" size="medium" />

// With color
<Icon name="Settings" size="large" color="#0064ef" />

// Clickable icon
<Icon name="Close" size="small" onClick={() => console.log('clicked')} />
```

## Icon Sizes

- `small` - 16px
- `medium` - 24px (default)
- `large` - 32px
- `xlarge` - 40px

## Available Icons

All icons use **Material-UI Icons** and must be in **PascalCase**.

### Navigation Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `Home` | Home page | `<Icon name="Home" />` |
| `Dashboard` | Dashboard | `<Icon name="Dashboard" />` |
| `Menu` | Menu toggle | `<Icon name="Menu" />` |
| `Close` | Close/dismiss | `<Icon name="Close" />` |
| `ArrowBack` | Back navigation | `<Icon name="ArrowBack" />` |
| `ArrowForward` | Forward navigation | `<Icon name="ArrowForward" />` |
| `ArrowDropDown` | Dropdown indicator | `<Icon name="ArrowDropDown" />` |
| `ArrowDropUp` | Dropup indicator | `<Icon name="ArrowDropUp" />` |
| `ChevronLeft` | Previous | `<Icon name="ChevronLeft" />` |
| `ChevronRight` | Next | `<Icon name="ChevronRight" />` |
| `FirstPage` | First page | `<Icon name="FirstPage" />` |
| `LastPage` | Last page | `<Icon name="LastPage" />` |

### Action Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `Add` | Add/create | `<Icon name="Add" />` |
| `Remove` | Remove/delete | `<Icon name="Remove" />` |
| `Edit` | Edit | `<Icon name="Edit" />` |
| `Delete` | Delete | `<Icon name="Delete" />` |
| `Save` | Save | `<Icon name="Save" />` |
| `Cancel` | Cancel | `<Icon name="Cancel" />` |
| `Check` | Confirm/check | `<Icon name="Check" />` |
| `Clear` | Clear | `<Icon name="Clear" />` |
| `Search` | Search | `<Icon name="Search" />` |
| `FilterAlt` | Filter | `<Icon name="FilterAlt" />` |
| `Download` | Download | `<Icon name="Download" />` |
| `Upload` | Upload | `<Icon name="Upload" />` |
| `Settings` | Settings | `<Icon name="Settings" />` |
| `MoreVert` | More options (vertical) | `<Icon name="MoreVert" />` |
| `MoreHoriz` | More options (horizontal) | `<Icon name="MoreHoriz" />` |

### Content Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `ContentCopy` | Copy | `<Icon name="ContentCopy" />` |
| `ContentPaste` | Paste | `<Icon name="ContentPaste" />` |
| `ContentCut` | Cut | `<Icon name="ContentCut" />` |
| `Visibility` | Show/visible | `<Icon name="Visibility" />` |
| `VisibilityOff` | Hide/invisible | `<Icon name="VisibilityOff" />` |
| `Lock` | Locked | `<Icon name="Lock" />` |
| `LockOpen` | Unlocked | `<Icon name="LockOpen" />` |

### Status Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `Info` | Information | `<Icon name="Info" />` |
| `Warning` | Warning | `<Icon name="Warning" />` |
| `Error` | Error | `<Icon name="Error" />` |
| `CheckCircle` | Success | `<Icon name="CheckCircle" />` |

### UI Element Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `DragIndicator` | Drag handle | `<Icon name="DragIndicator" />` |
| `UnfoldMore` | Expand | `<Icon name="UnfoldMore" />` |
| `Refresh` | Refresh | `<Icon name="Refresh" />` |
| `Sync` | Sync | `<Icon name="Sync" />` |

### Table Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `Sort` | Sort | `<Icon name="Sort" />` |
| `SortByAlpha` | Sort alphabetically | `<Icon name="SortByAlpha" />` |
| `ViewColumn` | Column view | `<Icon name="ViewColumn" />` |
| `TableRows` | Table rows | `<Icon name="TableRows" />` |

### Additional Common Icons

| Icon Name | Usage | Example |
|-----------|-------|---------|
| `AccountCircle` | User profile | `<Icon name="AccountCircle" />` |
| `Tune` | Preferences/tune | `<Icon name="Tune" />` |
| `Notifications` | Notifications | `<Icon name="Notifications" />` |
| `NotificationsActive` | Active notifications | `<Icon name="NotificationsActive" />` |
| `Email` | Email | `<Icon name="Email" />` |
| `Phone` | Phone | `<Icon name="Phone" />` |
| `CalendarToday` | Calendar | `<Icon name="CalendarToday" />` |
| `Schedule` | Schedule/time | `<Icon name="Schedule" />` |
| `Help` | Help | `<Icon name="Help" />` |
| `HelpOutline` | Help outline | `<Icon name="HelpOutline" />` |
| `Favorite` | Favorite | `<Icon name="Favorite" />` |
| `Star` | Star | `<Icon name="Star" />` |
| `Share` | Share | `<Icon name="Share" />` |
| `Print` | Print | `<Icon name="Print" />` |
| `AttachFile` | Attach file | `<Icon name="AttachFile" />` |
| `CloudUpload` | Cloud upload | `<Icon name="CloudUpload" />` |
| `CloudDownload` | Cloud download | `<Icon name="CloudDownload" />` |

## Using Named Exports

For commonly used icons, you can use named exports:

```tsx
import { 
  HomeIcon, 
  SettingsIcon, 
  InfoIcon,
  WarningIcon 
} from '@lean-ids/components';

<HomeIcon size="medium" />
<SettingsIcon size="large" color="#0064ef" />
<InfoIcon size="small" />
```

## Finding More Icons

The Icon component uses **@mui/icons-material**. You can find all available icons at:
https://mui.com/material-ui/material-icons/

**Important:** Always use **PascalCase** for icon names (e.g., `Home`, not `home`).

## Common Mistakes

❌ **Wrong:**
```tsx
<Icon name="home" size={24} />        // lowercase name, number size
<Icon name="settings" />              // lowercase name
<Icon name="info-circle" />           // kebab-case
```

✅ **Correct:**
```tsx
<Icon name="Home" size="medium" />    // PascalCase name, string size
<Icon name="Settings" />              // PascalCase
<Icon name="Info" />                  // PascalCase
```

## Icon Colors

You can use theme colors or any CSS color:

```tsx
// Theme colors
<Icon name="Home" color={theme.colors.palette.primary[500]} />

// CSS colors
<Icon name="Settings" color="#0064ef" />
<Icon name="Warning" color="red" />
<Icon name="Success" color="rgb(0, 200, 0)" />
```

## Clickable Icons

Add an `onClick` handler to make icons interactive:

```tsx
<Icon 
  name="Close" 
  size="small" 
  onClick={() => handleClose()}
  style={{ cursor: 'pointer' }}
/>
```

## Icon in Navigation

### SideNavigation (24px icons)
```tsx
<Icon name="Home" size="medium" />
<Icon name="Settings" size="medium" />
```

### TopHeader (16px icons)
```tsx
<Icon name="Home" size="small" />
<Icon name="Info" size="small" />
```

## Troubleshooting

### Icon not showing?
1. Check the icon name is in **PascalCase** (e.g., `Home` not `home`)
2. Verify the icon exists in Material-UI icons library
3. Check browser console for warnings like: `Icon "home" not found`

### Wrong size?
Use string values: `"small"`, `"medium"`, `"large"`, `"xlarge"` (not numbers)

### Need a different icon?
Search the Material-UI icons library: https://mui.com/material-ui/material-icons/
