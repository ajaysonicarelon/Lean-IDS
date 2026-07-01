# 🚀 Quick Start: AI Setup for Teams

## For Teams Using Lean IDS

### **Step 1: Install Package**
```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### **Step 2: Verify AI Guidelines Copied**
The postinstall script should automatically copy these files to your project root:
- ✅ `AI_READING_FLOW.md`
- ✅ `.cursorrules`
- ✅ `.windsurfrules`
- ✅ `AI_GUIDELINES.md`
- ✅ `AI_GUIDELINES_README.md`
- ✅ `AI_SETUP_COMPLETE.md`

Check if they exist:
```bash
ls -la | grep -E "(cursorrules|windsurfrules|AI_)"
```

### **Step 3: Restart Your IDE**
- **Cursor:** Restart Cursor to load `.cursorrules`
- **Windsurf:** Restart Windsurf to load `.windsurfrules`
- **Other IDEs:** May need to manually point to `AI_GUIDELINES.md`

### **Step 4: Test It**
Ask your AI assistant:
```
"Create a button component"
```

**✅ Expected Response:**
```tsx
import { Button } from '@ajaysoni7832/lean-ids-components';

function MyButton() {
  return <Button variant="primary">Click Me</Button>;
}
```

**❌ Wrong Response (setup failed):**
```tsx
import { Button } from '@mui/material'; // ❌ External library
```

---

## If Postinstall Didn't Work

### **Manual Setup:**
```bash
# Copy files from node_modules
cp node_modules/@ajaysoni7832/lean-ids-components/.cursorrules .
cp node_modules/@ajaysoni7832/lean-ids-components/.windsurfrules .
cp node_modules/@ajaysoni7832/lean-ids-components/AI_*.md .
```

### **Or Download from GitHub:**
Download these files and place in project root:
- [AI_READING_FLOW.md](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/AI_READING_FLOW.md)
- [.cursorrules](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/.cursorrules)
- [.windsurfrules](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/.windsurfrules)
- [AI_GUIDELINES.md](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/AI_GUIDELINES.md)

---

## Quick Prompt (If Files Not Available)

Tell your AI assistant:

> "Use ONLY components from @ajaysoni7832/lean-ids-components. Do NOT use Material-UI, Ant Design, Chakra UI, Bootstrap, or any other external UI library. Import all components from @ajaysoni7832/lean-ids-components and use theme tokens from @ajaysoni7832/lean-ids-tokens. Never create custom modal or drawer components - always use Modal and Drawer from Lean IDS. Follow the PageLayout templates for layouts."

---

## What AI Will Do

### **✅ Will:**
- Use Lean IDS components only
- Import from `@ajaysoni7832/lean-ids-components`
- Use theme tokens for styling
- Follow PageLayout templates
- Use Modal/Drawer components (never create custom)

### **❌ Won't:**
- Suggest Material-UI, Ant Design, etc.
- Install external UI libraries
- Create custom components when Lean IDS has them
- Use hardcoded colors/spacing
- Use gradients for large backgrounds

---

## Troubleshooting

### **AI Still Suggesting External Libraries?**
1. Check if guideline files exist in project root
2. Restart your IDE
3. Try the quick prompt above
4. Check if files have correct content (not empty)

### **Postinstall Script Didn't Run?**
- Check if you're using npm (not yarn/pnpm)
- Try manual copy method above
- Check npm logs for errors

### **Need Help?**
- Read `AI_READING_FLOW.md` in your project root
- Read `AI_GUIDELINES.md` for complete rules
- Contact Lean IDS team

---

## For Lean IDS Maintainers

### **Publishing New Version:**
```bash
cd packages/components
npm version patch  # or minor/major
npm publish
```

All AI guideline files are automatically included in the npm package.

### **Testing Postinstall:**
```bash
# In a test project
npm install @ajaysoni7832/lean-ids-components
ls -la | grep AI_
```

---

**🎯 Goal: Every team using Lean IDS has AI assistants configured correctly from day one!**
