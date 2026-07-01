# AI Guidelines - README

## � IMPORTANT: Reading Flow for AI Assistants

**⚠️ All AI assistants MUST read files in this order before writing code:**

1. **AI_READING_FLOW.md** ← START HERE (master reading flow)
2. **.cursorrules** or **.windsurfrules** (IDE-specific rules)
3. **AI_GUIDELINES.md** (complete universal guidelines)
4. **This file (AI_GUIDELINES_README.md)** (system overview)
5. **packages/components/README.md** (package documentation)

**DO NOT skip this reading order. It ensures consistent code generation.**

---

## �📋 Overview

This directory contains AI assistant guidelines that ensure consistent code generation across all AI-powered IDEs and coding assistants.

---

## 📁 Files Created

### 1. `.cursorrules`
- **For:** Cursor AI IDE
- **Purpose:** Provides rules for Cursor's AI assistant
- **Format:** Plain text with markdown formatting

### 2. `.windsurfrules`
- **For:** Windsurf AI IDE
- **Purpose:** Provides rules for Windsurf's AI assistant (Cascade)
- **Format:** Plain text with markdown formatting

### 3. `AI_GUIDELINES.md`
- **For:** All AI assistants (universal)
- **Purpose:** Comprehensive guidelines that any AI tool can read
- **Format:** Markdown
- **Includes:** Examples, decision trees, templates, and best practices

---

## 🎯 Purpose

These files ensure that **ANY** AI coding assistant (Cursor, Windsurf, Cline, GitHub Copilot, etc.) will:

1. ✅ **Use ONLY Lean IDS components** - No external UI libraries
2. ✅ **Follow design system** - Consistent styling and patterns
3. ✅ **Use correct templates** - PageLayout variants and patterns
4. ✅ **Maintain quality** - TypeScript, accessibility, responsiveness

---

## 🚨 Critical Rules

### **Rule #1: Library Usage**
```
✅ ALLOWED:
- @lean-ids/components
- @lean-ids/tokens
- @lean-ids/icons

❌ FORBIDDEN:
- Material-UI (MUI)
- Ant Design
- Chakra UI
- Bootstrap
- Any other UI library
```

### **Rule #2: Override Existing Libraries**
If user says "use only Lean IDS":
- Replace ALL external UI components
- Remove unused dependencies
- Use Lean IDS equivalents

### **Rule #3: Fresh Projects**
For new projects:
- Use ONLY Lean IDS from the start
- No external UI libraries allowed
- Follow PageLayout templates

---

## 🔧 How It Works

### **For Cursor Users:**
1. Cursor automatically reads `.cursorrules`
2. AI assistant follows the guidelines
3. Code suggestions use Lean IDS components

### **For Windsurf Users:**
1. Windsurf automatically reads `.windsurfrules`
2. Cascade AI follows the guidelines
3. Code suggestions use Lean IDS components

### **For Other AI Tools:**
1. Tool reads `AI_GUIDELINES.md`
2. AI assistant follows the guidelines
3. Code suggestions use Lean IDS components

---

## 📚 What's Included

### **Component Guidelines:**
- Available Lean IDS components
- Usage examples
- Import patterns
- TypeScript types

### **Layout Templates:**
- PageLayout variants (topbar-only, sidebar-only, topbar-sidebar)
- Sidebar behavior and pin functionality
- Header and footer configuration

### **Styling Guidelines:**
- Theme token usage
- Styled-components patterns
- No hardcoded values
- Responsive design

### **Decision Trees:**
- When to use Lean IDS
- When to ask user
- When to create custom components

---

## ✅ Benefits

### **For Developers:**
- Consistent code across team
- No need to remember all rules
- AI suggests correct patterns
- Faster development

### **For Design System:**
- Enforces Lean IDS usage
- Maintains consistency
- Prevents external library creep
- Easier maintenance

### **For AI Assistants:**
- Clear guidelines to follow
- Examples and templates
- Decision-making logic
- Quality checklist

---

## 🎓 Usage Examples

### **Example 1: Creating a Form**
```tsx
// AI will suggest:
import { Button, Input } from '@lean-ids/components';

function LoginForm() {
  return (
    <>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button variant="primary">Login</Button>
    </>
  );
}
```

### **Example 2: Creating a Page**
```tsx
// AI will suggest:
import { PageLayout } from '@lean-ids/components';

function Dashboard() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Dashboard"
      topHeader={{ appName: "My App" }}
      sideNav={{ groups: [...] }}
    >
      {/* Content */}
    </PageLayout>
  );
}
```

---

## 🔄 Updating Guidelines

### **When to Update:**
- New Lean IDS components added
- Component APIs change
- New templates created
- Best practices evolve

### **How to Update:**
1. Edit `.cursorrules` for Cursor
2. Edit `.windsurfrules` for Windsurf
3. Edit `AI_GUIDELINES.md` for universal
4. Keep all files in sync
5. Commit and push changes

---

## 📊 File Comparison

| File | AI Tool | Format | Size | Auto-Read |
|------|---------|--------|------|-----------|
| `.cursorrules` | Cursor | Text | Medium | ✅ Yes |
| `.windsurfrules` | Windsurf | Text | Short | ✅ Yes |
| `AI_GUIDELINES.md` | All | Markdown | Large | ⚠️ Manual |

---

## 🚀 Getting Started

### **For New Team Members:**
1. Clone repository
2. AI tools automatically read rules files
3. Start coding - AI will guide you
4. Follow AI suggestions

### **For Existing Projects:**
1. AI reads guidelines
2. Continues using existing libraries (if present)
3. New code uses Lean IDS
4. Gradual migration possible

### **For Fresh Projects:**
1. AI enforces Lean IDS only
2. No external UI libraries
3. Consistent from day one

---

## 📞 Support

### **Questions?**
- Read `AI_GUIDELINES.md` for complete details
- Check component examples in `/packages/components/src/`
- Refer to template documentation
- Ask your team lead

### **Issues?**
- AI not following rules? Check file exists and is readable
- Wrong suggestions? Update guidelines
- Missing component? Check Lean IDS first, then ask

---

## 🎯 Summary

These AI guideline files ensure that:
- ✅ All AI assistants use Lean IDS components
- ✅ Code is consistent across the team
- ✅ Design system is maintained
- ✅ Quality standards are met
- ✅ Development is faster

**Keep these files updated and in sync!**

---

## 📝 Version History

- **v1.0.0** (May 12, 2026) - Initial creation
  - Created `.cursorrules` for Cursor
  - Created `.windsurfrules` for Windsurf
  - Created `AI_GUIDELINES.md` for universal use
  - Documented all Lean IDS components
  - Added PageLayout templates
  - Included sidebar behavior guidelines
  - Added styling and quality guidelines

---

**These guidelines are critical for maintaining the Lean IDS design system. All AI assistants MUST follow them.**
