# 🤖 AI Assistant Reading Flow - START HERE

**⚠️ CRITICAL: All AI assistants MUST read these files in order before writing any code.**

---

## 📖 Reading Order (MANDATORY)

AI assistants must read these files **IN THIS EXACT ORDER** before generating any code:

### **Step 1: Read This File First** ✅
You are here! Continue to Step 2.

### **Step 2: Read `.cursorrules` or `.windsurfrules`** 🚨 CRITICAL
- **Location:** Project root
- **Purpose:** IDE-specific rules (auto-loaded by Cursor/Windsurf)
- **Contains:** Core library usage rules, forbidden imports, component list
- **Action:** Read completely before proceeding

### **Step 3: Read `AI_GUIDELINES.md`** 🚨 CRITICAL
- **Location:** Project root
- **Purpose:** Universal guidelines for all AI assistants
- **Contains:** Complete rules, examples, decision trees, styling guidelines
- **Action:** Read completely, understand all sections

### **Step 4: Read `AI_SETUP_COMPLETE.md`** 📋 RECOMMENDED
- **Location:** Project root
- **Purpose:** Overview of the AI guidelines system
- **Contains:** Quick reference, testing instructions, benefits
- **Action:** Skim for context

### **Step 5: Read `packages/components/README.md`** 📦 REQUIRED
- **Location:** `packages/components/README.md`
- **Purpose:** Package usage, installation, available components
- **Contains:** Installation steps, component list, quick start
- **Action:** Read to understand what's available

---

## 🚨 CRITICAL RULES (Must Follow)

After reading all files above, you MUST follow these rules:

### **Rule #1: ONLY Use Lean IDS Components**
```tsx
// ✅ CORRECT
import { Button, Input, Card } from '@lean-ids/components';
import { theme } from '@lean-ids/tokens';

// ❌ FORBIDDEN - NEVER DO THIS
import { Button } from '@mui/material';
import { Input } from 'antd';
import { Card } from '@chakra-ui/react';
```

### **Rule #2: Read Before Writing**
- ✅ Read all guidelines FIRST
- ✅ Understand component availability
- ✅ Check examples and patterns
- ❌ Don't start coding immediately
- ❌ Don't guess component APIs
- ❌ Don't use external UI libraries

### **Rule #3: Ask When Unsure**
If a component doesn't exist in Lean IDS:
1. Check the component list in guidelines
2. Search in `packages/components/src/`
3. Ask user before using external library
4. Suggest Lean IDS alternative if possible

---

## 📋 Quick Checklist

Before writing ANY code, verify:

- [ ] I have read `.cursorrules` or `.windsurfrules`
- [ ] I have read `AI_GUIDELINES.md` completely
- [ ] I understand the forbidden imports list
- [ ] I know which components are available
- [ ] I understand the PageLayout templates
- [ ] I know the sidebar behavior rules
- [ ] I understand Modal/Drawer enforcement
- [ ] I know to use theme tokens (no hardcoded values)
- [ ] I understand the "no gradients" rule
- [ ] I will ask if component doesn't exist

---

## 🎯 What You Should Know After Reading

### **Available Components:**
Button, Input, Checkbox, Radio, Select, TextArea, Toggle, Avatar, Badge, Brand, Card, Chip, Divider, Icon, Link, MenuItem, Tooltip, PageLayout, TopHeader, SideNavigation, Footer, PageHeader, Breadcrumb, Modal, Drawer

### **Forbidden Libraries:**
Material-UI, Ant Design, Chakra UI, Bootstrap, Tailwind UI, Shadcn/ui, Radix UI, Mantine, and ALL other external UI libraries

### **Required Imports:**
```tsx
import { ComponentName } from '@lean-ids/components';
import { theme } from '@lean-ids/tokens';
```

### **Styling Rules:**
- Use theme tokens only (NEVER hardcode colors, spacing, typography)
- **NO GRADIENTS** - Never use gradients unless user explicitly requests
- No gradients for backgrounds, cards, or any elements
- Always use Modal/Drawer components (never create custom)

### **Component Creation Rules:**
- **ONLY use existing Lean IDS components** to build new features
- **NEVER create custom components** when Lean IDS has them
- **ALWAYS use tokens** from `@lean-ids/tokens` (no hardcoded values)
- Need a form? Use Input, Button from Lean IDS (don't create custom)
- Need chips? Use Chip from Lean IDS (don't create custom)
- Building complex components? Compose from existing Lean IDS components

### **Icon Rules:**
- **Icons:** Import ONLY from `@mui/icons-material`
- **CRITICAL:** Import ONLY icons from Material library, nothing else from MUI
- **FORBIDDEN:** Do NOT import Button, Input, or any other MUI components
- **Example:** `import { Home, Settings } from '@mui/icons-material';` ✅
- **WRONG:** `import { Button } from '@mui/material';` ❌

---

## 🚀 Ready to Code?

After reading all files above, you can start coding. Remember:

1. **Use ONLY Lean IDS components**
2. **Follow the templates and patterns**
3. **Use theme tokens for styling**
4. **Ask when unsure**

---

## 📞 Need Help?

If you're an AI assistant and need clarification:
1. Re-read the relevant section in `AI_GUIDELINES.md`
2. Check component examples in `packages/components/src/`
3. Ask the user for guidance
4. Don't guess or use external libraries

---

## ✅ Verification

**AI Assistant Self-Check:**
```
Before generating code, ask yourself:
1. Have I read all required files?
2. Am I using Lean IDS components?
3. Am I following the templates?
4. Am I using theme tokens?
5. Have I checked if the component exists?

If all YES → Proceed with code generation
If any NO → Go back and read guidelines
```

---

**🎯 Remember: Read First, Code Second. Quality over Speed.**
