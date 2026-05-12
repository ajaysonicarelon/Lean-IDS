# Bitbucket + GitHub Dual Remote Setup

## 🎯 Goal
Push code to both GitHub and Bitbucket simultaneously while keeping both repositories in sync.

---

## 📋 Current Setup
- **GitHub:** https://github.com/ajaysonicarelon/Lean-IDS.git (origin)
- **Bitbucket:** To be added

---

## 🔧 Setup Instructions

### **Option 1: Push to Both with Single Command (Recommended)**

This setup allows you to push to both remotes with a single `git push` command.

#### Step 1: Add Bitbucket as additional push URL to origin
```bash
# Replace with your actual Bitbucket repository URL
git remote set-url --add --push origin https://bitbucket.org/YOUR_USERNAME/lean-ids.git

# Keep GitHub as push URL too
git remote set-url --add --push origin https://github.com/ajaysonicarelon/Lean-IDS.git
```

#### Step 2: Verify configuration
```bash
git remote -v
```

**Expected output:**
```
origin  https://github.com/ajaysonicarelon/Lean-IDS.git (fetch)
origin  https://github.com/ajaysonicarelon/Lean-IDS.git (push)
origin  https://bitbucket.org/YOUR_USERNAME/lean-ids.git (push)
```

#### Step 3: Push to both
```bash
git push origin main
# This will push to BOTH GitHub and Bitbucket!
```

---

### **Option 2: Separate Remotes (More Control)**

This setup gives you separate commands for each remote.

#### Step 1: Add Bitbucket as a separate remote
```bash
# Add Bitbucket remote
git remote add bitbucket https://bitbucket.org/YOUR_USERNAME/lean-ids.git
```

#### Step 2: Verify configuration
```bash
git remote -v
```

**Expected output:**
```
origin      https://github.com/ajaysonicarelon/Lean-IDS.git (fetch)
origin      https://github.com/ajaysonicarelon/Lean-IDS.git (push)
bitbucket   https://bitbucket.org/YOUR_USERNAME/lean-ids.git (fetch)
bitbucket   https://bitbucket.org/YOUR_USERNAME/lean-ids.git (push)
```

#### Step 3: Push to specific remotes
```bash
# Push to GitHub
git push origin main

# Push to Bitbucket
git push bitbucket main

# Push to both
git push origin main && git push bitbucket main
```

---

### **Option 3: Create an "all" Remote (Push to Both)**

Create a special remote that pushes to both.

#### Step 1: Create "all" remote
```bash
git remote add all https://github.com/ajaysonicarelon/Lean-IDS.git
git remote set-url --add --push all https://github.com/ajaysonicarelon/Lean-IDS.git
git remote set-url --add --push all https://bitbucket.org/YOUR_USERNAME/lean-ids.git
```

#### Step 2: Push to both
```bash
git push all main
# Pushes to both GitHub and Bitbucket!
```

---

## 🔐 Authentication

### **GitHub (Already configured)**
- Uses your existing credentials

### **Bitbucket Setup**

#### Option A: HTTPS with App Password (Recommended)
1. Go to Bitbucket → Personal Settings → App passwords
2. Create new app password with repository write permissions
3. Use your Bitbucket username and app password when prompted

#### Option B: SSH Keys
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "Ajay@carelon.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to Bitbucket: Settings → SSH keys → Add key
```

Then use SSH URL:
```bash
git remote add bitbucket git@bitbucket.org:YOUR_USERNAME/lean-ids.git
```

---

## 📝 Quick Commands Reference

### Check remotes
```bash
git remote -v
```

### Remove a remote
```bash
git remote remove bitbucket
```

### Change remote URL
```bash
git remote set-url bitbucket https://new-url.git
```

### Push to specific remote
```bash
git push origin main      # GitHub only
git push bitbucket main   # Bitbucket only
git push --all            # All remotes
```

### Pull from specific remote
```bash
git pull origin main      # From GitHub
git pull bitbucket main   # From Bitbucket
```

---

## 🎯 Recommended Workflow

1. **Daily work:** Commit as usual
   ```bash
   git add .
   git commit -m "Your message"
   ```

2. **Push to both:** Single command
   ```bash
   git push origin main
   # (if using Option 1 - pushes to both)
   ```

3. **Pull updates:** Usually from GitHub
   ```bash
   git pull origin main
   ```

---

## ⚠️ Important Notes

1. **First Push to Bitbucket:**
   ```bash
   # If Bitbucket repo is empty, push with -u flag first time
   git push -u bitbucket main
   ```

2. **Branch Names:**
   - Make sure both repos use the same branch name (main/master)
   - Check with: `git branch`

3. **Conflicts:**
   - If repos get out of sync, pull from one before pushing
   - Keep one as "source of truth" (usually GitHub)

4. **CI/CD:**
   - Update your CI/CD pipelines for both platforms
   - GitHub Actions for GitHub
   - Bitbucket Pipelines for Bitbucket

---

## 🚀 Quick Setup Script

Save this as `setup-bitbucket.sh`:

```bash
#!/bin/bash

# Replace with your Bitbucket URL
BITBUCKET_URL="https://bitbucket.org/YOUR_USERNAME/lean-ids.git"

echo "Setting up dual remote (GitHub + Bitbucket)..."

# Option 1: Add Bitbucket to origin push URLs
git remote set-url --add --push origin $BITBUCKET_URL
git remote set-url --add --push origin https://github.com/ajaysonicarelon/Lean-IDS.git

echo "✅ Setup complete!"
echo ""
echo "Verify with: git remote -v"
echo "Push to both with: git push origin main"
```

Run with:
```bash
chmod +x setup-bitbucket.sh
./setup-bitbucket.sh
```

---

## 📊 Comparison

| Method | Command | Pushes To | Complexity |
|--------|---------|-----------|------------|
| **Option 1** | `git push origin main` | Both | ⭐ Simple |
| **Option 2** | `git push origin main && git push bitbucket main` | Both | ⭐⭐ Medium |
| **Option 3** | `git push all main` | Both | ⭐ Simple |

**Recommendation:** Use **Option 1** for simplicity!

---

## ✅ Next Steps

1. Create Bitbucket repository (if not exists)
2. Get your Bitbucket repository URL
3. Choose setup option (recommend Option 1)
4. Run the commands
5. Test with a push: `git push origin main`

---

Let me know your Bitbucket repository URL and I'll help you set it up! 🚀
