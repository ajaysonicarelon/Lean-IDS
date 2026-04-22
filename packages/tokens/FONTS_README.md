# Fonts in Lean IDS

## Automatic Font Loading

The Lean IDS design system uses **Elevance Sans** as the primary font family. When you use the `GlobalStyles` component from `@ajaysoni7832/lean-ids-components`, the fonts are **automatically loaded** for you.

## How It Works

The `GlobalStyles` component automatically imports the fonts CSS file:

```tsx
import { ThemeProvider, GlobalStyles } from '@ajaysoni7832/lean-ids-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* This automatically loads Elevance Sans */}
      <YourApp />
    </ThemeProvider>
  );
}
```

## Manual Font Import (Optional)

If you're not using `GlobalStyles`, you can manually import the fonts:

### Option 1: Import in your main CSS/SCSS file

```css
@import '@ajaysoni7832/lean-ids-tokens/dist/fonts.css';
```

### Option 2: Import in your HTML

```html
<link rel="stylesheet" href="node_modules/@ajaysoni7832/lean-ids-tokens/dist/fonts.css">
```

### Option 3: Import in your JavaScript/TypeScript

```typescript
import '@ajaysoni7832/lean-ids-tokens/dist/fonts.css';
```

## Included Fonts

### Elevance Sans
- **Light** (300)
- **Regular** (400)
- **Medium** (500)
- **SemiBold** (600)
- **Bold** (700)

### Roboto Mono (for code)
- **Regular** (400)
- **Medium** (500)
- **SemiBold** (600)
- **Bold** (700)

## Font Stack

The design system uses a fallback font stack to ensure text displays correctly even if the custom fonts fail to load:

```css
font-family: "Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

## For Angular Projects

Since Angular doesn't use `GlobalStyles`, import the fonts in your `styles.css` or `styles.scss`:

```css
/* src/styles.css */
@import '@ajaysoni7832/lean-ids-tokens/dist/fonts.css';

body {
  font-family: "Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

## Troubleshooting

### Fonts not loading?

1. **Check if GlobalStyles is included:**
   ```tsx
   <GlobalStyles /> // Must be inside ThemeProvider
   ```

2. **Check browser console** for any 404 errors

3. **Verify package installation:**
   ```bash
   npm list @ajaysoni7832/lean-ids-tokens
   ```

4. **Clear cache and rebuild:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Font URLs

The fonts are loaded from CDN:
- **Elevance Sans:** https://fonts.cdnfonts.com/
- **Roboto Mono:** https://fonts.googleapis.com/

Make sure your application can access these CDN URLs (not blocked by firewall/CSP).

## Performance

The fonts use `font-display: swap` to ensure text is visible while fonts are loading, preventing FOIT (Flash of Invisible Text).
