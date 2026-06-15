# GitHub Actions Workflows

There are two automated workflows in `.github/workflows/`.

---

## Deploy (`deploy.yml`)

Triggers on every push to `main`. Runs `npm run build` and deploys the `dist/` output to GitHub Pages. No manual steps needed — merge to `main` and the site updates automatically.

---

## Check Links (`check-links.yml`)

Runs every **Sunday at midnight UTC** (or manually from the Actions tab) to scan every `.mdx` file in `src/content/` for broken external URLs.

### What it does

1. Finds all `https://` and `http://` links across every MDX file
2. Sends a HEAD request to each URL (falls back to GET if the server returns 403/405)
3. Flags anything that returns a 4xx/5xx status or times out
4. If broken links are found, **opens a GitHub Issue** titled "🔗 Broken Links Detected" listing each broken URL and which file it's in

### How to review failures

When the workflow fails, go to the **Issues** tab and open the auto-created issue. It lists every broken URL and the MDX file it came from. Open that file in `src/content/` and update or remove the link.

There is no automated fix — you have to check each link manually.

### Why there's no good automated fix

Most content sites (Google, AWS, Microsoft Learn, YouTube, LinkedIn) actively block scrapers and automated HTTP clients, even when you send a realistic browser `User-Agent`. A URL that returns 403 in the workflow might be perfectly valid in a real browser. This means:

- **False positives are common.** A 403 result doesn't always mean the link is broken — it may just mean the site blocked the checker.
- **There's no reliable workaround.** Headless browsers (Puppeteer, Playwright) can bypass some blocks but are heavy, slow, and still get blocked by Cloudflare and similar services.

**The practical process:** when the workflow flags a link, open it in your browser. If it loads fine, the failure was a false positive — you can ignore it. If it's actually broken, update the MDX file.

### Skipped URLs

The checker skips URLs matching these patterns (intentional placeholders in content):
- `YOURUSERNAME`
- `example.com`
- `placeholder`
