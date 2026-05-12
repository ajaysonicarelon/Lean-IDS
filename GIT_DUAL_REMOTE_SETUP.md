# Git Dual Remote Setup - Complete ✅

## 🎉 Setup Complete!

Your repository is now configured to push to **both GitHub and Bitbucket** simultaneously!

---

## 📊 Current Configuration

```
origin  https://github.com/ajaysonicarelon/Lean-IDS.git (fetch)
origin  https://AM07832@bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git (push)
origin  https://github.com/ajaysonicarelon/Lean-IDS.git (push)
```

### What This Means:
- **Fetch (pull):** From GitHub only
- **Push:** To **BOTH** Bitbucket (Elevance Health) and GitHub

---

## 🚀 How to Use

### **Push to Both Repositories:**
```bash
git push origin main
```
This single command will push your code to:
1. ✅ Bitbucket (Elevance Health)
2. ✅ GitHub

### **Pull Updates:**
```bash
git pull origin main
```
Pulls from GitHub (your fetch source)

### **Check Status:**
```bash
git remote -v
```
Shows all configured remotes

---

## 📝 Daily Workflow

### 1. Make Changes
```bash
# Edit your files
# ...

# Stage changes
git add .

# Commit
git commit -m "Your commit message"
```

### 2. Push to Both Repos
```bash
git push origin main
```
✅ Automatically pushes to both Bitbucket and GitHub!

### 3. Pull Latest Changes
```bash
git pull origin main
```

---

## 🔐 Authentication

### **First Push:**
When you first push, you'll be prompted for credentials:

#### For Bitbucket (Elevance Health):
- **Username:** AM07832
- **Password:** Your Bitbucket password or App Password

#### For GitHub:
- **Username:** ajaysonicarelon
- **Password:** Your GitHub Personal Access Token

### **Save Credentials (Optional):**
```bash
# Cache credentials for 1 hour
git config --global credential.helper cache

# Or store permanently (macOS)
git config --global credential.helper osxkeychain
```

---

## 🔧 Useful Commands

### View Remote Configuration
```bash
git remote -v
```

### Test Connection to Bitbucket
```bash
git ls-remote https://AM07832@bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git
```

### Test Connection to GitHub
```bash
git ls-remote https://github.com/ajaysonicarelon/Lean-IDS.git
```

### Push to Specific Branch
```bash
git push origin your-branch-name
```

### Force Push (Use Carefully!)
```bash
git push origin main --force
```

---

## 🎯 First Push to Bitbucket

If this is your first push to Bitbucket, use:
```bash
git push -u origin main
```

This will:
1. Push all your code to Bitbucket
2. Push all your code to GitHub
3. Set up tracking for the main branch

---

## ⚠️ Important Notes

### 1. **Branch Names**
- Make sure both repos use the same branch name
- Current branch: `main`
- Check with: `git branch`

### 2. **Conflicts**
- If repos get out of sync, pull before pushing
- GitHub is your primary source (fetch origin)

### 3. **Large Files**
- Both repos will receive the same files
- Consider `.gitignore` for large files

### 4. **CI/CD**
- GitHub Actions will run on GitHub pushes
- Bitbucket Pipelines will run on Bitbucket pushes

---

## 🔄 Reverting Configuration

If you need to remove Bitbucket and go back to GitHub only:

```bash
# Remove all push URLs
git remote set-url --delete --push origin https://AM07832@bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git

# Set GitHub as only push URL
git remote set-url origin https://github.com/ajaysonicarelon/Lean-IDS.git
```

---

## 📋 Troubleshooting

### Issue: Authentication Failed
**Solution:** Use App Password for Bitbucket
1. Go to Bitbucket → Personal Settings → App passwords
2. Create new app password
3. Use it instead of your regular password

### Issue: Push to One Repo Fails
**Solution:** Check individual repos
```bash
# Test Bitbucket
git push https://AM07832@bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git main

# Test GitHub
git push https://github.com/ajaysonicarelon/Lean-IDS.git main
```

### Issue: Different Branch Names
**Solution:** Rename branch
```bash
# Rename local branch
git branch -m old-name main

# Update remote
git push origin main
```

---

## ✅ Verification Checklist

- [x] Dual remote configured
- [x] Bitbucket URL added
- [x] GitHub URL added
- [ ] Test push to both repos
- [ ] Verify code appears in both repos
- [ ] Set up authentication

---

## 🎉 Next Steps

1. **Test the setup:**
   ```bash
   git push origin main
   ```

2. **Verify in both repos:**
   - Check Bitbucket: https://bitbucket.elevancehealth.com/projects/~AM07832/repos/lean-ids
   - Check GitHub: https://github.com/ajaysonicarelon/Lean-IDS

3. **Set up authentication** (if prompted)

---

## 📞 Quick Reference

| Action | Command |
|--------|---------|
| Push to both | `git push origin main` |
| Pull updates | `git pull origin main` |
| Check remotes | `git remote -v` |
| View branches | `git branch -a` |
| Check status | `git status` |

---

**You're all set!** 🚀

Your code will now automatically sync to both Bitbucket (Elevance Health) and GitHub with every push!
