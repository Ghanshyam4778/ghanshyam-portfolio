# Ghanshyam Vekariya — Cybersecurity Portfolio

A complete, mobile-responsive personal portfolio including a professional profile photo, software projects, cybersecurity labs, development internships, St. Clair College Cybersecurity Club membership, and social contacts. **No volunteer photographs are included.**

## The GitHub Pages website is READY at the repository ROOT

The homepage is `index.html`. Styling is in `styles.css`; working interactions are in `app.js`; the real portrait is `profile.webp`. All paths are relative, so the website works at `https://YOUR_USERNAME.github.io/ghanshyam-portfolio/`. There is **no** `.github/workflows` directory. Do not use Actions or Jekyll templates for this static site.

**Use GitHub Settings → Pages → Source: Deploy from a branch → main → /(root) → Save.** See `GITHUB_START_FROM_ZERO.md` for step-by-step Windows instructions.

### Run locally (simplest)

Open `index.html` in a browser; or install the VS Code **Live Server** extension and choose **Open with Live Server**. No npm installation is needed for the published website.

### Optional npm preview

From the project root:

```powershell
npm.cmd install
npm.cmd run dev
```

### Editing

- Text and links: `index.html`
- Colors and visual layout: `styles.css`
- Terminal, project filtering, command palette, interaction: `app.js`
- Replace your professional photo by replacing `profile.webp` with another WebP image with the same filename.

### Legacy React application

The previous React/Vite source is archived in `react-source/` for reference and further development. It is **not** the live GitHub Pages website and editing it will not change the root static site. To work on React separately: `cd react-source; npm.cmd install; npm.cmd run dev`. Publish edits to the files in the repository root to update GitHub Pages.

### Privacy

Only publish files and contact details you want visible to everyone. Avoid private lab details, passwords, grades beyond your intended profile information, and secrets.
