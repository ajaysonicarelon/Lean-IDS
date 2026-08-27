# GPG Signed Commits Setup Guide

This guide helps you set up GPG commit signing to verify the authenticity of your commits.

## Why Sign Commits?

Signed commits provide:
- **Authenticity**: Prove commits are from you
- **Integrity**: Detect tampering with commit history
- **Trust**: Show verified badge on GitHub
- **Compliance**: Meet enterprise security requirements

## Prerequisites

- Git 2.0 or later
- GPG (GNU Privacy Guard)

## Installation

### macOS
```bash
brew install gnupg
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get install gnupg
```

### Windows
Download from: https://www.gnupg.org/download/

## Step 1: Generate GPG Key

### Generate a new key
```bash
gpg --full-generate-key
```

**Select these options:**
1. Key type: `(1) RSA and RSA`
2. Key size: `4096` bits
3. Expiration: `0` (never expires) or `2y` (2 years)
4. Real name: `Your Name` (same as Git config)
5. Email: `your.email@carelon.com` (same as Git config)
6. Comment: `Lean DS Development` (optional)
7. Passphrase: Choose a strong passphrase

### Verify key creation
```bash
gpg --list-secret-keys --keyid-format=long
```

Output example:
```
/Users/you/.gnupg/secring.gpg
-----------------------------
sec   4096R/3AA5C34371567BD2 2024-01-01 [expires: 2026-01-01]
uid                          Your Name <your.email@carelon.com>
ssb   4096R/4BB6D45482678BE3 2024-01-01
```

**Your key ID is**: `3AA5C34371567BD2` (the part after `4096R/`)

## Step 2: Configure Git

### Set your GPG key
```bash
# Replace with your key ID
git config --global user.signingkey 3AA5C34371567BD2

# Enable commit signing by default
git config --global commit.gpgsign true

# Enable tag signing
git config --global tag.gpgsign true
```

### Configure GPG program (if needed)
```bash
# macOS
git config --global gpg.program $(which gpg)

# Linux
git config --global gpg.program gpg
```

### Verify configuration
```bash
git config --global --list | grep gpg
```

Expected output:
```
user.signingkey=3AA5C34371567BD2
commit.gpgsign=true
tag.gpgsign=true
gpg.program=/usr/local/bin/gpg
```

## Step 3: Add GPG Key to GitHub

### Export your public key
```bash
# Replace with your key ID
gpg --armor --export 3AA5C34371567BD2
```

This outputs something like:
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXXXXX...
...
-----END PGP PUBLIC KEY BLOCK-----
```

### Add to GitHub
1. Copy the entire output (including BEGIN/END lines)
2. Go to GitHub → Settings → SSH and GPG keys
3. Click **New GPG key**
4. Paste your public key
5. Click **Add GPG key**

### Add to Bitbucket (Elevance Internal)
1. Go to Bitbucket → Personal Settings → GPG keys
2. Click **Add key**
3. Paste your public key
4. Click **Add key**

## Step 4: Test Signed Commits

### Make a test commit
```bash
# Create a test file
echo "test" > test.txt
git add test.txt
git commit -m "test: GPG signed commit"

# Verify signature
git log --show-signature -1
```

Expected output:
```
commit abc123...
gpg: Signature made Mon Jan 1 12:00:00 2024
gpg: Good signature from "Your Name <your.email@carelon.com>"
Author: Your Name <your.email@carelon.com>
Date:   Mon Jan 1 12:00:00 2024

    test: GPG signed commit
```

### Push to GitHub
```bash
git push origin main
```

On GitHub, you should see a **Verified** badge next to your commit.

## Step 5: Configure for Team

### Add to repository
Create `.gitattributes` in repo root:
```
* text=auto
*.sh text eol=lf
```

### Document in CONTRIBUTING.md
```markdown
## Commit Signing

All commits to main and develop branches must be signed.

1. Set up GPG: See `.github/GPG_SIGNED_COMMITS_SETUP.md`
2. Configure Git: `git config --global commit.gpgsign true`
3. Verify: Commits show "Verified" badge on GitHub
```

## Troubleshooting

### "gpg failed to sign the data"

**Solution 1**: Set GPG_TTY
```bash
export GPG_TTY=$(tty)

# Add to ~/.zshrc or ~/.bashrc
echo 'export GPG_TTY=$(tty)' >> ~/.zshrc
```

**Solution 2**: Test GPG
```bash
echo "test" | gpg --clearsign
```

**Solution 3**: Restart gpg-agent
```bash
gpgconf --kill gpg-agent
gpgconf --launch gpg-agent
```

### "No secret key"

Your key might not be properly configured:
```bash
# List keys
gpg --list-secret-keys --keyid-format=long

# Set the correct key
git config --global user.signingkey YOUR_KEY_ID
```

### "Inappropriate ioctl for device"

Add to `~/.gnupg/gpg.conf`:
```
use-agent
pinentry-mode loopback
```

Add to `~/.gnupg/gpg-agent.conf`:
```
allow-loopback-pinentry
```

Then restart:
```bash
gpgconf --kill gpg-agent
```

### Passphrase prompt not showing

Install pinentry:
```bash
# macOS
brew install pinentry-mac
echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf

# Linux
sudo apt-get install pinentry-tty
echo "pinentry-program /usr/bin/pinentry-tty" >> ~/.gnupg/gpg-agent.conf
```

Restart agent:
```bash
gpgconf --kill gpg-agent
```

## Key Management

### Backup your key
```bash
# Export private key (KEEP SECURE!)
gpg --export-secret-keys --armor 3AA5C34371567BD2 > private-key-backup.asc

# Store in secure location (password manager, encrypted drive)
```

### Restore from backup
```bash
gpg --import private-key-backup.asc
```

### Revoke a key
```bash
# Generate revocation certificate
gpg --output revoke.asc --gen-revoke 3AA5C34371567BD2

# Import revocation (when needed)
gpg --import revoke.asc

# Upload to keyserver
gpg --send-keys 3AA5C34371567BD2
```

### Extend expiration
```bash
gpg --edit-key 3AA5C34371567BD2
gpg> expire
# Select new expiration
gpg> save
```

## CI/CD Integration

### GitHub Actions (for automated releases)

1. Export private key:
```bash
gpg --export-secret-keys --armor 3AA5C34371567BD2 | base64
```

2. Add to GitHub Secrets:
   - Name: `GPG_PRIVATE_KEY`
   - Value: (base64 output)

3. Add passphrase to secrets:
   - Name: `GPG_PASSPHRASE`
   - Value: (your passphrase)

4. Use in workflow:
```yaml
- name: Import GPG key
  run: |
    echo "${{ secrets.GPG_PRIVATE_KEY }}" | base64 --decode | gpg --import
    echo "${{ secrets.GPG_PASSPHRASE }}" | gpg --passphrase-fd 0 --batch --yes --sign test.txt
```

## Best Practices

1. ✅ **Use strong passphrase** - 20+ characters
2. ✅ **Backup private key** - Store securely offline
3. ✅ **Set expiration** - 1-2 years, then extend
4. ✅ **One key per device** - Or use subkeys
5. ✅ **Revoke compromised keys** - Immediately
6. ✅ **Upload to keyserver** - For verification
7. ⚠️ **Never share private key** - Only public key
8. ⚠️ **Don't commit private key** - Add to .gitignore

## Verification Commands

```bash
# Verify last commit
git verify-commit HEAD

# Verify specific commit
git verify-commit abc123

# Show signature in log
git log --show-signature

# Verify tag
git verify-tag v1.0.0
```

## Resources

- [GitHub: Signing Commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- [GPG Documentation](https://www.gnupg.org/documentation/)
- [Git Commit Signing](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)

## Quick Reference

```bash
# Generate key
gpg --full-generate-key

# List keys
gpg --list-secret-keys --keyid-format=long

# Export public key
gpg --armor --export KEY_ID

# Configure Git
git config --global user.signingkey KEY_ID
git config --global commit.gpgsign true

# Test
echo "test" | gpg --clearsign

# Verify commit
git verify-commit HEAD
```

---

**Last Updated**: July 28, 2026  
**Maintained By**: Ajay Soni (@ajaysonicarelon)
