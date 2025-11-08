# Release Workflow Guide

This repository uses GitHub Actions for automated publishing to NPM.

## 🔧 Setup Instructions

### 1. Get NPM Token

1. Go to [npmjs.com](https://www.npmjs.com)
2. Login to your account
3. Click your profile → **Access Tokens**
4. Click **Generate New Token** → **Automation**
5. Copy the token (you'll only see it once!)

### 2. Add Token to GitHub

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click **Add secret**

## 🚀 How to Publish

### Method 1: Create Release via GitHub UI (Recommended)

1. Go to your repository → **Releases** → **Create a new release**
2. Click **Choose a tag** → Type new version (e.g., `v0.1.0-beta.1`)
3. Click **Create new tag on publish**
4. Fill in:
   - **Release title**: `v0.1.0-beta.1`
   - **Description**: What's new in this release
5. Check **Set as a pre-release** (for beta versions)
6. Click **Publish release**
7. GitHub Actions will automatically:
   - Run tests
   - Build package
   - Publish to NPM

### Method 2: Command Line

```bash
# Make sure you're logged into NPM
npm login

# For beta releases
pnpm release:beta

# For stable releases
pnpm release:patch  # 0.1.0 → 0.1.1
pnpm release:minor  # 0.1.0 → 0.2.0
pnpm release:major  # 0.1.0 → 1.0.0
```

### Method 3: Manual Tag (Triggers Automation)

```bash
# Create and push a tag
git tag v0.1.0-beta.2
git push origin v0.1.0-beta.2

# Then create release from tag on GitHub
```

## 📋 Version Guidelines

### Beta Versions

- Format: `0.1.0-beta.1`, `0.1.0-beta.2`, etc.
- Use for testing and gathering feedback
- Install with: `npm install xpui@beta`

### Stable Versions

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features (backward compatible)
- **Major** (0.1.0 → 1.0.0): Breaking changes

## 🔄 Workflow Details

### CI Workflow (`.github/workflows/ci.yml`)

**Triggers:** Every push to `main` and all pull requests

**Steps:**

1. ✅ Checkout code
2. ✅ Install dependencies
3. ✅ Run linter
4. ✅ Run tests
5. ✅ Build package

### Publish Workflow (`.github/workflows/publish.yml`)

**Triggers:** When you publish a GitHub release

**Steps:**

1. ✅ Checkout code
2. ✅ Install dependencies
3. ✅ Run linter
4. ✅ Run tests
5. ✅ Build package
6. ✅ Publish to NPM
7. ✅ Create summary

## 📦 What Gets Published

Based on your `package.json`:

- `dist/` folder (built files)
- `README.md`
- `LICENSE`

## 🛡️ Protection

The workflow includes:

- ✅ Automated testing before publish
- ✅ Build verification
- ✅ NPM provenance (security)
- ✅ Only runs on official releases

## 🔍 Monitoring

After publishing:

1. Check workflow status: **Actions** tab
2. Verify on NPM: `https://www.npmjs.com/package/xpui`
3. Test installation: `npm info xpui`

## ❓ Troubleshooting

**Workflow fails with "npm ERR! need auth"**

- Check that `NPM_TOKEN` secret is set correctly

**Workflow fails at build step**

- Tests might be failing
- Check the Actions logs for details

**Version already exists**

- Bump version in `package.json` first
- Or use the release scripts

## 📝 Pre-Release Checklist

Before creating a release:

- [ ] All tests passing locally (`pnpm test:run`)
- [ ] Build succeeds (`pnpm build`)
- [ ] README is updated
- [ ] Version bumped (or use release scripts)
- [ ] Changes committed to `main`

## 🎯 Example Workflow

```bash
# 1. Make changes and test
pnpm test:run
pnpm build

# 2. Commit changes
git add .
git commit -m "Add new feature"
git push origin main

# 3. Create release on GitHub
# Go to GitHub → Releases → New Release
# Tag: v0.1.0-beta.2
# Title: v0.1.0-beta.2
# Description: Added Button component with tests
# ✅ Publish release

# 4. Wait for automation
# Check Actions tab to see progress

# 5. Verify
npm info xpui
```

## 🔗 Useful Links

- [NPM Package](https://www.npmjs.com/package/xpui)
- [GitHub Releases](https://github.com/acadxp/xpui/releases)
- [GitHub Actions](https://github.com/acadxp/xpui/actions)
