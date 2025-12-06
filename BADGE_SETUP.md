# Coverage Badge Setup Guide

## Step 1: Create a GitHub Gist
1. Go to https://gist.github.com
2. Create a new **public** gist
3. Filename: `portfolio-coverage.json`
4. Content (temporary - will be overwritten):
```json
{"schemaVersion": 1, "label": "coverage", "message": "0%", "color": "red"}
```
5. Click "Create public gist"
6. Copy the Gist ID from the URL (e.g., if URL is `https://gist.github.com/username/abc123def456`, the ID is `abc123def456`)

## Step 2: Add GitHub Repository Secrets
1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret" and add these secrets:

**Required:**
- Name: `GIST_ID`
- Value: Your gist ID from step 1

**For Coverage Badge (Optional):**
- Name: `GIST_TOKEN`
- Value: Personal Access Token with gist permissions

### Creating a Personal Access Token for Gists:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Coverage Badge"
4. Select scopes: `gist` (Create gists)
5. Click "Generate token"
6. Copy the token and add it as `GIST_TOKEN` secret

**Note:** If you skip the GIST_TOKEN, the workflow will still work but won't update the coverage badge.

## Step 3: Update README.md
Replace the placeholders in your README.md:

**Current:**
```markdown
![Build Status](https://github.com/yourusername/portfolio/actions/workflows/deploy.yml/badge.svg)
![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/yourusername/your-gist-id/raw/portfolio-coverage.json)
```

**Update to:**
```markdown
![Build Status](https://github.com/YOUR_GITHUB_USERNAME/portfolio/actions/workflows/deploy.yml/badge.svg)
![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_GIST_ID/raw/portfolio-coverage.json)
```

Replace:
- `YOUR_GITHUB_USERNAME` with your actual GitHub username
- `YOUR_GIST_ID` with the gist ID from step 1

## Step 4: Push and Test
1. Commit and push your changes
2. The GitHub Action will run
3. After completion, your badge will show the actual coverage percentage
4. The badge will update automatically on future pushes

## Example Final URLs:
- Build: `https://github.com/johndoe/portfolio/actions/workflows/deploy.yml/badge.svg`
- Coverage: `https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/johndoe/abc123def456/raw/portfolio-coverage.json`

Your coverage badge will be color-coded:
- 🟢 Green: 90%+ coverage
- 🟡 Yellow: 70-89% coverage  
- 🔴 Red: <70% coverage