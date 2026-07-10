#!/bin/bash

# Deployment Script for Lean IDS v1.7.3
# This script handles the complete deployment process

set -e  # Exit on error

echo "🚀 Starting Lean IDS v1.7.3 Deployment"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Step 1: Verify builds
echo -e "${BLUE}Step 1: Verifying builds...${NC}"
if [ ! -d "packages/tokens/dist" ]; then
    echo -e "${RED}❌ Tokens not built. Run: cd packages/tokens && npm run build${NC}"
    exit 1
fi
if [ ! -d "packages/components/dist" ]; then
    echo -e "${RED}❌ Components not built. Run: cd packages/components && npm run build${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Builds verified${NC}"
echo ""

# Step 2: Git status check
echo -e "${BLUE}Step 2: Checking git status...${NC}"
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes:${NC}"
    git status -s
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Release v1.7.3: Fix EMFILE build error and cleanup dependencies"
        echo -e "${GREEN}✅ Changes committed${NC}"
    else
        echo -e "${YELLOW}⚠️  Continuing with uncommitted changes${NC}"
    fi
else
    echo -e "${GREEN}✅ Git status clean${NC}"
fi
echo ""

# Step 3: Create git tag
echo -e "${BLUE}Step 3: Creating git tag...${NC}"
if git rev-parse v1.7.3 >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Tag v1.7.3 already exists${NC}"
else
    git tag -a v1.7.3 -m "v1.7.3: Critical build fix and dependency cleanup"
    echo -e "${GREEN}✅ Tag created${NC}"
fi
echo ""

# Step 4: Publish to npm
echo -e "${BLUE}Step 4: Publishing to npm...${NC}"
echo ""

echo -e "${YELLOW}Publishing tokens...${NC}"
cd packages/tokens
npm publish || echo -e "${RED}❌ Tokens publish failed (may already exist)${NC}"
cd ../..
echo ""

echo -e "${YELLOW}Publishing components...${NC}"
cd packages/components
npm publish || echo -e "${RED}❌ Components publish failed (may already exist)${NC}"
cd ../..
echo ""

# Step 5: Push to GitHub
echo -e "${BLUE}Step 5: Pushing to GitHub...${NC}"
read -p "Push to GitHub? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push origin main
    git push origin v1.7.3
    echo -e "${GREEN}✅ Pushed to GitHub${NC}"
else
    echo -e "${YELLOW}⚠️  Skipped GitHub push${NC}"
fi
echo ""

# Step 6: Push to Bitbucket
echo -e "${BLUE}Step 6: Pushing to Bitbucket...${NC}"
read -p "Push to Bitbucket? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if git remote | grep -q "bitbucket"; then
        git push bitbucket main
        git push bitbucket v1.7.3
        echo -e "${GREEN}✅ Pushed to Bitbucket${NC}"
    else
        echo -e "${YELLOW}⚠️  Bitbucket remote not configured${NC}"
        echo "Add with: git remote add bitbucket https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git"
    fi
else
    echo -e "${YELLOW}⚠️  Skipped Bitbucket push${NC}"
fi
echo ""

# Step 7: Storybook deployment
echo -e "${BLUE}Step 7: Storybook deployment...${NC}"
echo "Storybook is already built in: storybook-static/"
echo ""
echo "To deploy to Netlify/Storybook repo:"
echo "1. Navigate to your storybook repo"
echo "2. Copy storybook-static/* to that repo"
echo "3. Commit and push"
echo ""
read -p "Open storybook-static folder? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open storybook-static/ 2>/dev/null || xdg-open storybook-static/ 2>/dev/null || echo "Please manually open: storybook-static/"
fi
echo ""

# Summary
echo ""
echo -e "${GREEN}========================================"
echo "✅ Deployment Complete!"
echo "========================================${NC}"
echo ""
echo "📦 Published Packages:"
echo "  - @ajaysoni7832/lean-ids-tokens@1.7.3"
echo "  - @ajaysoni7832/lean-ids-components@1.7.3"
echo ""
echo "🔗 Next Steps:"
echo "  1. Verify packages on npm:"
echo "     https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components"
echo "  2. Deploy Storybook to Netlify"
echo "  3. Notify dev team to update to v1.7.3"
echo ""
echo "📝 Message for dev team:"
echo "  npm install @ajaysoni7832/lean-ids-components@1.7.3"
echo ""
