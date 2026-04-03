# GitHub Pages Deployment Setup

## What Was Added

A GitHub Actions workflow has been created that automatically builds and deploys your Next.js portfolio to GitHub Pages.

### Workflow File
- **Location**: `.github/workflows/deploy.yml`
- **Trigger**: Every push to `main` branch
- **Action**: Builds Next.js and deploys to `gh-pages` branch

## Setup Steps

### 1. Commit and Push the Workflow
```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Pages deployment workflow"
git push origin main
```

### 2. Configure GitHub Pages Settings

1. Go to your repository: https://github.com/vipbhardwaj/vipbhardwaj.github.io
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (will appear after first workflow run)
   - **Folder**: Select `/ (root)`
5. Click **Save**

### 3. Monitor First Deployment

1. Push any change to `main` or trigger manually:
   - Go to **Actions** tab
   - Click **Build and Deploy to GitHub Pages**
   - Click **Run workflow**

2. Wait for the workflow to complete (usually 1-2 minutes)

3. Once done, your site will be live at: **https://vipbhardwaj.github.io**

## How It Works

1. **On Push**: GitHub Actions automatically detects changes to `main` branch
2. **Build**: Runs `npm install` and `npm run build`
3. **Deploy**: Copies contents of `out/` folder to `gh-pages` branch
4. **Serve**: GitHub Pages serves the `gh-pages` branch as your live site

## Local Development

- Continue developing locally as normal
- Run `npm run dev` to test changes
- Push to `main` when ready
- GitHub Actions handles the build and deployment automatically

## Testing Locally Before Pushing

To test the production build locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to see your built site.

## Troubleshooting

**Workflow fails?**
- Check the Actions tab for error messages
- Ensure `next.config.js` has `output: 'export'` (it does ✓)

**Site not updating after push?**
- GitHub Pages may cache. Wait a few minutes and refresh
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Custom domain not working?**
- The workflow includes `cname: vipbhardwaj.github.io`
- Ensure DNS is configured (usually automatic for user sites)

## Current Status

✅ `.gtihub/workflows/deploy.yml` created
✅ `.gitignore` already configured to ignore `out/`
⏳ **Next**: Push these changes and configure GitHub Pages settings

