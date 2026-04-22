#!/bin/bash

# Pre-Deployment Check Script for Lean IDS
# This script validates everything before pushing to GitHub and NPM

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0
WARNINGS=0

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   🚀 Lean IDS Pre-Deployment Validation Script       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Helper functions
pass() {
    echo -e "${GREEN}✅ PASS:${NC} $1"
    ((PASSED++))
}

fail() {
    echo -e "${RED}❌ FAIL:${NC} $1"
    ((FAILED++))
}

warn() {
    echo -e "${YELLOW}⚠️  WARN:${NC} $1"
    ((WARNINGS++))
}

info() {
    echo -e "${BLUE}ℹ️  INFO:${NC} $1"
}

section() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

# ============================================================================
# Phase 1: Version Management
# ============================================================================
section "Phase 1: Version Management"

# Get versions
TOKENS_VERSION=$(grep '"version"' packages/tokens/package.json | head -1 | sed 's/.*"version": "\(.*\)".*/\1/')
COMPONENTS_VERSION=$(grep '"version"' packages/components/package.json | head -1 | sed 's/.*"version": "\(.*\)".*/\1/')
TOKENS_DEP_VERSION=$(grep '@ajaysoni7832/lean-ids-tokens' packages/components/package.json | sed 's/.*"\^*\([0-9.]*\)".*/\1/')

info "Tokens version: $TOKENS_VERSION"
info "Components version: $COMPONENTS_VERSION"
info "Components depends on tokens: ^$TOKENS_DEP_VERSION"

# Check version consistency
if [ "$TOKENS_VERSION" == "$COMPONENTS_VERSION" ]; then
    pass "Package versions are consistent"
else
    fail "Version mismatch! Tokens: $TOKENS_VERSION, Components: $COMPONENTS_VERSION"
fi

# Check dependency version
if [ "$TOKENS_VERSION" == "$TOKENS_DEP_VERSION" ]; then
    pass "Components dependency version matches tokens version"
else
    warn "Components depends on tokens ^$TOKENS_DEP_VERSION but tokens is $TOKENS_VERSION"
fi

# ============================================================================
# Phase 2: Package Names & Scopes
# ============================================================================
section "Phase 2: Package Names & Scopes"

# Check package names
TOKENS_NAME=$(grep '"name"' packages/tokens/package.json | head -1 | sed 's/.*"name": "\(.*\)".*/\1/')
COMPONENTS_NAME=$(grep '"name"' packages/components/package.json | head -1 | sed 's/.*"name": "\(.*\)".*/\1/')

if [ "$TOKENS_NAME" == "@ajaysoni7832/lean-ids-tokens" ]; then
    pass "Tokens package name is correct"
else
    fail "Tokens package name is wrong: $TOKENS_NAME"
fi

if [ "$COMPONENTS_NAME" == "@ajaysoni7832/lean-ids-components" ]; then
    pass "Components package name is correct"
else
    fail "Components package name is wrong: $COMPONENTS_NAME"
fi

# Check for old package names in code
if grep -r "@lean-ids" packages/ --exclude-dir=node_modules --exclude-dir=dist -q 2>/dev/null; then
    fail "Found old '@lean-ids' package references in code"
    grep -r "@lean-ids" packages/ --exclude-dir=node_modules --exclude-dir=dist | head -5
else
    pass "No old package name references found"
fi

# ============================================================================
# Phase 3: Build Verification
# ============================================================================
section "Phase 3: Build Verification"

# Check if dist folders exist
if [ -d "packages/tokens/dist" ]; then
    pass "Tokens dist folder exists"
else
    warn "Tokens dist folder not found - needs build"
fi

if [ -d "packages/components/dist" ]; then
    pass "Components dist folder exists"
else
    warn "Components dist folder not found - needs build"
fi

# Check fonts.css in dist
if [ -f "packages/tokens/dist/fonts.css" ]; then
    pass "fonts.css exists in tokens dist"
else
    fail "fonts.css missing from tokens dist - run build"
fi

# ============================================================================
# Phase 4: Storybook Organization
# ============================================================================
section "Phase 4: Storybook Organization"

# Check for numbered prefixes in story titles
if grep -r "title: '[0-9]" packages/components/src --include="*.stories.tsx" -q 2>/dev/null; then
    fail "Found numbered prefixes in story titles"
    grep -r "title: '[0-9]" packages/components/src --include="*.stories.tsx"
else
    pass "No numbered prefixes in story titles"
fi

# Check HelpingText story exists
if [ -f "packages/components/src/HelpingText/HelpingText.stories.tsx" ]; then
    pass "HelpingText story file exists"
else
    fail "HelpingText story file missing"
fi

# Check Pagination story exists
if [ -f "packages/components/src/Pagination/Pagination.stories.tsx" ]; then
    pass "Pagination story file exists"
else
    fail "Pagination story file missing"
fi

# ============================================================================
# Phase 5: Documentation Sync
# ============================================================================
section "Phase 5: Documentation Sync"

# Check font documentation
if [ -f "packages/tokens/FONTS_README.md" ]; then
    pass "FONTS_README.md exists"
else
    fail "FONTS_README.md missing"
fi

if [ -f "packages/tokens/src/fonts.css" ]; then
    pass "fonts.css source file exists"
else
    fail "fonts.css source file missing"
fi

# Check storybook guidelines
if [ -f "STORYBOOK_GUIDELINES.md" ]; then
    pass "STORYBOOK_GUIDELINES.md exists"
else
    warn "STORYBOOK_GUIDELINES.md missing"
fi

# ============================================================================
# Phase 6: Git Status
# ============================================================================
section "Phase 6: Git Status"

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" == "main" ]; then
    pass "On main branch"
else
    warn "Not on main branch (current: $CURRENT_BRANCH)"
fi

# Check for uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
    pass "No uncommitted changes"
else
    warn "There are uncommitted changes"
    git status --short
fi

# ============================================================================
# Phase 7: NPM Registry Check
# ============================================================================
section "Phase 7: NPM Registry Check"

# Check NPM login
NPM_USER=$(npm whoami 2>/dev/null || echo "not-logged-in")
if [ "$NPM_USER" == "ajaysoni7832" ]; then
    pass "Logged in to NPM as $NPM_USER"
else
    fail "Not logged in to NPM or wrong user (current: $NPM_USER)"
fi

# Check published versions
PUBLISHED_TOKENS=$(npm view @ajaysoni7832/lean-ids-tokens version 2>/dev/null || echo "not-published")
PUBLISHED_COMPONENTS=$(npm view @ajaysoni7832/lean-ids-components version 2>/dev/null || echo "not-published")

info "Published tokens version: $PUBLISHED_TOKENS"
info "Published components version: $PUBLISHED_COMPONENTS"

if [ "$TOKENS_VERSION" == "$PUBLISHED_TOKENS" ]; then
    fail "Tokens version $TOKENS_VERSION already published - bump version!"
else
    pass "Tokens version $TOKENS_VERSION is new"
fi

if [ "$COMPONENTS_VERSION" == "$PUBLISHED_COMPONENTS" ]; then
    fail "Components version $COMPONENTS_VERSION already published - bump version!"
else
    pass "Components version $COMPONENTS_VERSION is new"
fi

# ============================================================================
# Phase 8: GitHub Pages Setup
# ============================================================================
section "Phase 8: GitHub Workflows"

# Check workflow files exist
if [ -f ".github/workflows/deploy.yml" ]; then
    pass "deploy.yml workflow exists"
else
    fail "deploy.yml workflow missing"
fi

if [ -f ".github/workflows/ci.yml" ]; then
    pass "ci.yml workflow exists"
else
    warn "ci.yml workflow missing"
fi

# ============================================================================
# Summary
# ============================================================================
echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    📊 Summary                          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}✅ Passed:  $PASSED${NC}"
echo -e "${YELLOW}⚠️  Warnings: $WARNINGS${NC}"
echo -e "${RED}❌ Failed:  $FAILED${NC}"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}╔════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ❌ DEPLOYMENT BLOCKED - Fix errors above             ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════════════════════╝${NC}"
    exit 1
elif [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}╔════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║  ⚠️  WARNINGS FOUND - Review before deploying         ║${NC}"
    echo -e "${YELLOW}╚════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}Continue with deployment? (y/n)${NC}"
    read -r response
    if [[ "$response" != "y" ]]; then
        echo "Deployment cancelled"
        exit 1
    fi
else
    echo -e "${GREEN}╔════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  ✅ ALL CHECKS PASSED - Ready to deploy!              ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo -e "  1. ${GREEN}git add -A && git commit -m 'chore: release v$TOKENS_VERSION'${NC}"
    echo -e "  2. ${GREEN}git push origin main${NC}"
    echo -e "  3. ${GREEN}cd packages/tokens && npm publish --access public${NC}"
    echo -e "  4. ${GREEN}cd ../components && npm publish --access public${NC}"
fi

echo ""
