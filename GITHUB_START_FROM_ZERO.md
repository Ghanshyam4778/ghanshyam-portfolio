# FROM ZERO TO LIVE — YOUR WINDOWS + VS CODE GUIDE

This package is a fresh clean project. You can use a new repository, `ghanshyam-portfolio`, under your GitHub account `Ghanshyam4778`. The deleted repository's old workflow files are **not included**.

## 1. Download, unzip, and open in VS Code

1. Download the ZIP supplied in ChatGPT.
2. Right-click → Extract All.
3. Open the extracted `Ghanshyam_Portfolio_Fresh_GitHub_Ready_v6` folder in VS Code using **File → Open Folder**.
4. In VS Code Explorer confirm you see `index.html`, `styles.css`, `app.js`, `profile.webp`, and `.nojekyll` directly in the open folder. **Do not open the `react-source` folder.**
5. Double-click `index.html` to view it in your browser, or use VS Code Live Server. The site is already complete without building.

## 2. Create a completely NEW GitHub repository

1. Go to https://github.com/new (sign in as `Ghanshyam4778`).
2. Repository name: `ghanshyam-portfolio`.
3. Set visibility to **Public**.
4. Turn OFF 'Add README', 'Add .gitignore', and license initialization.
5. Click **Create repository**.

## 3. Git upload from the VS Code terminal

Open **Terminal → New Terminal** from the extracted folder. Then enter commands one at a time:

```powershell
git init
git branch -M main
git add -A
git commit -m "Publish cybersecurity portfolio"
git remote add origin https://github.com/Ghanshyam4778/ghanshyam-portfolio.git
git push -u origin main
```

If Git asks you to set an identity, run the following using your GitHub name and the email of your choice:

```powershell
git config --global user.name "Ghanshyam4778"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Then retry **git commit** and **git push**. If Git says 'remote origin already exists', use `git remote set-url origin https://github.com/Ghanshyam4778/ghanshyam-portfolio.git`. Don't use `git push --force` on an existing repo.

## 4. Turn on GitHub Pages WITHOUT custom Actions workflows

Open: https://github.com/Ghanshyam4778/ghanshyam-portfolio/settings/pages

Under **Build and deployment**:
- **Source**: `Deploy from a branch`
- **Branch**: `main`
- **Folder**: `/(root)`
- Click **Save**

**DO NOT SELECT:** `GitHub Actions`, `/docs`, Jekyll workflow, static HTML workflow template. This project already contains its finished homepage at the root, `index.html`. GitHub will create its own Pages deployment status internally; that is normal and does not require you to create any workflow files.

## 5. Open the website

When GitHub Pages reports that the site is published, open:

https://ghanshyam4778.github.io/ghanshyam-portfolio/

If you see an old blank screen, press **Ctrl+F5** or open an Incognito window. Verify that `index.html`, `styles.css`, `app.js`, and `profile.webp` appear at the root of the GitHub repository on the **Code** tab.

The following asset URLs should work after publication:

- https://ghanshyam4778.github.io/ghanshyam-portfolio/styles.css
- https://ghanshyam4778.github.io/ghanshyam-portfolio/app.js
- https://ghanshyam4778.github.io/ghanshyam-portfolio/profile.webp

## 6. Update after publication

Edit and save files in the root folder, then in VS Code terminal:

```powershell
git add -A
git commit -m "Update my portfolio"
git push
```

The site updates after the new commit is published.

## No Git alternative

If you prefer, GitHub's repository page also supports **Add file → Upload files**. Upload the extracted *contents*, including `index.html` and `styles.css`, directly to the repository root and commit them. You must preserve the folder structure if you upload the optional React source. After uploading, follow Step 4.
