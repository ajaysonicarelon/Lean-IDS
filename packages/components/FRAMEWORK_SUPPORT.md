# Framework Support

Lean IDS components work seamlessly with modern React frameworks and build tools.

## Supported Frameworks

- ✅ **Next.js** (App Router & Pages Router)
- ✅ **Vite**
- ✅ **Create React App**
- ✅ **Remix**
- ✅ **TypeScript** & **JavaScript**

---

## Next.js

### Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### Configuration

Add styled-components support to `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

### Usage (App Router)

For components using React hooks, add `'use client'` directive:

```tsx
'use client';

import { Button, Input, Modal } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello">
        <p>Modal content</p>
      </Modal>
    </div>
  );
}
```

### Usage (Pages Router)

No special configuration needed:

```tsx
import { Button, Card } from '@ajaysoni7832/lean-ids-components';

export default function Home() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

### Server Components

Static components can be used in Server Components without `'use client'`:

```tsx
import { Card, Badge, Chip } from '@ajaysoni7832/lean-ids-components';

export default function Page() {
  return (
    <Card>
      <Badge type="success">Active</Badge>
      <Chip label="Tag" />
    </Card>
  );
}
```

---

## Vite

### Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### Configuration

No special configuration needed! Vite works out of the box.

### Usage

```tsx
import { Button, Input, Select } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <Button variant="primary">Submit</Button>
    </div>
  );
}

export default App;
```

---

## Create React App (CRA)

### Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### Usage

```tsx
import { Button, Checkbox, RadioButton } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Click me</Button>
      <Checkbox label="Accept terms" />
      <RadioButton label="Option 1" name="option" />
    </div>
  );
}

export default App;
```

---

## Remix

### Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### Usage

```tsx
import { Button, Card } from '@ajaysoni7832/lean-ids-components';

export default function Index() {
  return (
    <Card>
      <h1>Welcome to Remix</h1>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

---

## TypeScript Support

Lean IDS is built with TypeScript and includes full type definitions.

```tsx
import { Button, type ButtonProps } from '@ajaysoni7832/lean-ids-components';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## Tree Shaking

Lean IDS supports tree shaking for optimal bundle sizes:

```tsx
// ✅ Only imports Button code
import { Button } from '@ajaysoni7832/lean-ids-components';

// ✅ Also works - named imports
import { Button, Input, Select } from '@ajaysoni7832/lean-ids-components';
```

---

## SSR (Server-Side Rendering)

All Lean IDS components are SSR-compatible:

- ✅ No `window` or `document` usage during import
- ✅ Safe for Next.js, Remix, and other SSR frameworks
- ✅ Proper hydration support

---

## Common Issues

### Issue: styled-components not working in Next.js

**Solution:** Add compiler config to `next.config.js`:

```js
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};
```

### Issue: "use client" errors in Next.js App Router

**Solution:** Add `'use client'` directive to components using hooks:

```tsx
'use client';

import { Button } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';
```

### Issue: Module resolution errors

**Solution:** Ensure you have both packages installed:

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

---

## Need Help?

- 📖 [Component Documentation](./README.md)
- 🐛 [Report Issues](https://bitbucket.elevancehealth.com/projects/~AM07832/repos/lean-ids/browse)
- 💬 Contact: ajay@carelon.com
