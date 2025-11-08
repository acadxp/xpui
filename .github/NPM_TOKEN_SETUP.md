# NPM Token Setup

To enable automated publishing to NPM, you need to add your NPM token as a GitHub secret.

## Steps:

### 1. Generate NPM Token

1. Go to [npmjs.com](https://www.npmjs.com) and login
2. Click your profile picture → **Access Tokens**
3. Click **Generate New Token** → Select **Automation**
4. Give it a name (e.g., "GitHub Actions xpui")
5. Click **Generate Token**
6. **Copy the token immediately** (you won't see it again!)

### 2. Add Token to GitHub

1. Go to your repository: `https://github.com/acadxp/xpui`
2. Click **Settings** (top right)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Fill in:
   - **Name**: `NPM_TOKEN`
   - **Secret**: Paste the token you copied
6. Click **Add secret**

### 3. Verify Setup

Once the token is added, you can test it by creating a release:

1. Go to **Releases** → **Create a new release**
2. Create a tag like `v0.1.0-beta.1`
3. Fill in release notes
4. Click **Publish release**
5. Check the **Actions** tab to see the workflow run

## ✅ You're Done!

The workflow will now automatically:

- Run tests
- Build the package
- Publish to NPM

whenever you create a new release on GitHub.

## 🔒 Security Note

The `NPM_TOKEN` is encrypted and only accessible to GitHub Actions. It's safe to use for automated publishing.
