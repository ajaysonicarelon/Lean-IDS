# NPM Repository Update - Bitbucket

## ✅ **COMPLETED**

All package.json files have been updated to use Bitbucket instead of GitHub for npm repository links.

---

## 📦 **Packages Updated:**

### 1. **@ajaysoni7832/lean-ids-components**
- ✅ Repository URL updated to Bitbucket
- ✅ Homepage updated to Bitbucket
- **File:** `/packages/components/package.json`

### 2. **@ajaysoni7832/lean-ids-tokens**
- ✅ Repository URL updated to Bitbucket
- ✅ Homepage updated to Bitbucket
- **File:** `/packages/tokens/package.json`

### 3. **@lean-ids/icons**
- ✅ Repository URL added (Bitbucket)
- ✅ Homepage added (Bitbucket)
- **File:** `/packages/icons/package.json`

### 4. **@lean-ids/utils**
- ✅ Repository URL added (Bitbucket)
- ✅ Homepage added (Bitbucket)
- **File:** `/packages/utils/package.json`

---

## 🔄 **Changes Made:**

### **Before:**
```json
"repository": {
  "type": "git",
  "url": "https://github.com/ajaysonicarelon/Lean-IDS.git",
  "directory": "packages/components"
},
"homepage": "https://github.com/ajaysonicarelon/Lean-IDS#readme"
```

### **After:**
```json
"repository": {
  "type": "git",
  "url": "https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git",
  "directory": "packages/components"
},
"homepage": "https://bitbucket.elevancehealth.com/projects/~AM07832/repos/lean-ids/browse"
```

---

## 🎯 **Impact:**

### **NPM Package Page:**
When published to npm, your packages will now show:
- ✅ **Repository:** Links to Bitbucket
- ✅ **Homepage:** Links to Bitbucket
- ✅ **Issues:** Links to Bitbucket (if configured)

### **npm install:**
Users installing your packages will see Bitbucket links in:
- Package details
- npm website
- npm CLI output

---

## 📋 **Bitbucket URLs:**

### **Repository:**
```
https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git
```

### **Homepage:**
```
https://bitbucket.elevancehealth.com/projects/~AM07832/repos/lean-ids/browse
```

### **Package Directories:**
- `/packages/components`
- `/packages/tokens`
- `/packages/icons`
- `/packages/utils`

---

## 🚀 **Publishing to NPM:**

When you publish your packages, they will reference Bitbucket:

```bash
# Build packages
npm run build

# Publish components
cd packages/components
npm publish --access public

# Publish tokens
cd ../tokens
npm publish --access public
```

---

## 📊 **Package Information:**

| Package | Version | Repository | Homepage |
|---------|---------|------------|----------|
| **@ajaysoni7832/lean-ids-components** | 1.2.0 | Bitbucket | Bitbucket |
| **@ajaysoni7832/lean-ids-tokens** | 1.2.0 | Bitbucket | Bitbucket |
| **@lean-ids/icons** | 1.0.0 | Bitbucket | Bitbucket |
| **@lean-ids/utils** | 1.0.0 | Bitbucket | Bitbucket |

---

## ✅ **Verification:**

### **Check package.json:**
```bash
# Components
cat packages/components/package.json | grep -A 3 "repository"

# Tokens
cat packages/tokens/package.json | grep -A 3 "repository"

# Icons
cat packages/icons/package.json | grep -A 3 "repository"

# Utils
cat packages/utils/package.json | grep -A 3 "repository"
```

### **Expected Output:**
```json
"repository": {
  "type": "git",
  "url": "https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git",
  "directory": "packages/[package-name]"
}
```

---

## 🎉 **Benefits:**

### **For Your Organization:**
- ✅ All npm packages point to internal Bitbucket
- ✅ Consistent with company infrastructure
- ✅ Easier access control
- ✅ Better security

### **For Developers:**
- ✅ Clear source of truth (Bitbucket)
- ✅ Easy to find repository
- ✅ Consistent links across packages

### **For NPM:**
- ✅ Proper metadata
- ✅ Working repository links
- ✅ Professional package presentation

---

## 📝 **Next Steps:**

1. ✅ **Commit changes:**
   ```bash
   git add packages/*/package.json
   git commit -m "Update npm repository URLs to Bitbucket"
   ```

2. ✅ **Push to Bitbucket:**
   ```bash
   git push origin main
   ```

3. ⏳ **Publish to npm** (when ready):
   ```bash
   npm run build
   cd packages/components && npm publish
   cd ../tokens && npm publish
   ```

---

## 🔍 **What Changed:**

### **Files Modified:**
- ✅ `/packages/components/package.json`
- ✅ `/packages/tokens/package.json`
- ✅ `/packages/icons/package.json`
- ✅ `/packages/utils/package.json`

### **Fields Updated:**
- ✅ `repository.url` → Bitbucket URL
- ✅ `homepage` → Bitbucket browse URL
- ✅ `repository.directory` → Package subdirectory

---

## 📞 **Support:**

### **Bitbucket Repository:**
https://bitbucket.elevancehealth.com/projects/~AM07832/repos/lean-ids

### **NPM Packages:**
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens

---

## ✨ **Summary:**

All npm packages now reference Bitbucket as their source repository:
- ✅ **4 packages updated**
- ✅ **Repository URLs** → Bitbucket
- ✅ **Homepage URLs** → Bitbucket
- ✅ **Ready to commit and push**

Your npm packages will now properly link to your Bitbucket repository! 🎉
