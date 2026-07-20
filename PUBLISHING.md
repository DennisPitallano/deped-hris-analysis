# Publishing to GitHub Pages

One-time setup, then every push to `main` auto-deploys.

## 1. Fill in placeholders

Search and replace across the repo before publishing:

| Placeholder | Replace with |
|---|---|
| `[[github-username]]` | your GitHub username |
| `[[repo-name]]` | the repository name you'll create |
| `[[Your Name]]` | your display name |
| `[[role or headline]]` | short professional tagline |
| `[[linkedin-handle]]` | your LinkedIn URL slug (or remove the LinkedIn row in `mkdocs.yml`) |

Files that contain these placeholders:

- `mkdocs.yml`
- `deliverables/index.md`
- `deliverables/downloads.md`
- `README.md`

You can do the replacement in one shot from PowerShell:

```powershell
$root = 'c:\Users\denni\Desktop\DepEd'
$replacements = @{
  '[[github-username]]' = 'YOUR_GITHUB_USERNAME'
  '[[repo-name]]'       = 'deped-hris-analysis'
  '[[Your Name]]'       = 'Your Full Name'
  '[[role or headline]]' = 'Independent technical analyst'
  '[[linkedin-handle]]' = 'your-linkedin-slug'
}
Get-ChildItem -Path $root -Recurse -Include *.md,*.yml -File `
  | Where-Object { $_.FullName -notmatch '\\(\.venv|site|node_modules|\.cache)\\' } `
  | ForEach-Object {
      $c = Get-Content $_.FullName -Raw
      foreach ($k in $replacements.Keys) { $c = $c.Replace($k, $replacements[$k]) }
      Set-Content -Path $_.FullName -Value $c -NoNewline
    }
```

## 2. Initialise a git repository

```powershell
cd C:\Users\denni\Desktop\DepEd
git init -b main
git add .
git commit -m "Initial commit — DepEd HRIS analysis, response and architecture"
```

## 3. Create the GitHub repository

- Go to <https://github.com/new>.
- Repository name: match the `[[repo-name]]` you used.
- Visibility: **Public** (required for free GitHub Pages).
- Do **not** initialise with README / .gitignore / license — we already have them.

## 4. Push

```powershell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/deped-hris-analysis.git
git push -u origin main
```

## 5. Enable GitHub Pages

- On the repo page → **Settings** → **Pages**.
- Under **Build and deployment**, set **Source** to **GitHub Actions**.
- No branch selection needed — the workflow at `.github/workflows/deploy-pages.yml` deploys the built site directly.

## 6. Watch the workflow run

- On the repo page → **Actions** tab → wait for the "Deploy site to GitHub Pages" workflow to finish (≈ 2–4 minutes; MkDocs + Slidev build in one job).
- Once green, the site is live at:
  - Papers: `https://YOUR_GITHUB_USERNAME.github.io/deped-hris-analysis/`
  - Slide deck: `https://YOUR_GITHUB_USERNAME.github.io/deped-hris-analysis/slides/`

## 7. Every future update

```powershell
# Edit whatever you want in deliverables/, mkdocs.yml, etc.
git add .
git commit -m "Update: describe what changed"
git push
```

GitHub Actions rebuilds and redeploys automatically.

## Custom domain (optional)

If you own a domain (e.g. `deped-hris.example.com`):

1. Add a `CNAME` file at the repo root containing just the domain name.
2. In your DNS provider add either:
   - `CNAME` record pointing to `YOUR_GITHUB_USERNAME.github.io.`, or
   - `A` records to GitHub's Pages IPs (documented at <https://docs.github.com/pages>).
3. In repo **Settings** → **Pages**, set the custom domain and enable **Enforce HTTPS**.
4. Update `site_url` in `mkdocs.yml` to the new domain.

## Removing the placeholder bid response (optional)

If you prefer not to publish document **B** publicly:

- Remove the nav entry in `mkdocs.yml`.
- Delete `deliverables/B_tor_response_outline.md` from the site (keep the source elsewhere).
- Remove the card in `deliverables/index.md`.
- Rebuild and push.
