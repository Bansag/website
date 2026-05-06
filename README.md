# Bansag website

Marketing site for Bansag — **Vite**, **React 18**, and **TypeScript**.

**Production:** [https://bansag.com](https://bansag.com)

## Prerequisites

- Node.js 18+ (20+ recommended)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is written to `dist/`.

## Lint

```bash
npm run lint
```

## Deployments

Production targets **Cloudflare** with the static output in **`dist/`**.

### Workers Static Assets + `wrangler deploy` (current CI setup)

This repo includes [`wrangler.jsonc`](wrangler.jsonc) with **`assets.not_found_handling: "single-page-application"`** so React Router deep links and refreshes work **without** a root `/* → /index.html` rule in **`public/_redirects`**. Combining that catch-all `_redirects` line with Wrangler’s SPA asset mode triggers Cloudflare validation error **10021** (infinite loop).

- **Dashboard:** build command **`npm run build`**, deploy command **`npm run deploy`** or **`npx wrangler deploy`** (after a build, `dist/` must exist).
- **Local:** `CLOUDFLARE_API_TOKEN` must be set (or `wrangler login`) for `wrangler deploy`.

### Classic Cloudflare Pages (Git “Connect to Git” or `pages-action` only)

If you deploy **only** through **Cloudflare Pages** (not Workers static assets + Wrangler), you may use a Pages **`_redirects`** file for SPA fallback instead — **do not** use that **and** Wrangler **`single-page-application`** on the same project.

Use **one** primary pipeline:

1. **Workers + Wrangler** — as above; keep [`wrangler.jsonc`](wrangler.jsonc), no SPA `_redirects`.
2. **Pages + GitHub Action** — see [`.github/workflows/deploy-cloudflare-pages.yml`](.github/workflows/deploy-cloudflare-pages.yml); set repo secrets and **`CF_PAGES_DEPLOY=true`** if you use this instead. Do not double-deploy the same hostname from both Workers and Pages.

### Cloudflare Dashboard (Pages “Connect to Git”)

1. **Workers & Pages** → connect repo **Bansag/website**, branch **`main`**.
2. Set **build** to **`npm run build`** and output to **`dist`**, and set **deploy** to match your chosen path (**Wrangler** vs **Pages-only** as above).

After deploy, attach **Custom domains** **`bansag.com`** and **`www.bansag.com`** on the Cloudflare project and complete DNS as prompted.

### Repository hygiene (org owner)

- **Branch protection** on **`main`**: Settings → **Branches** → **Add rule** — e.g. **Require a pull request before merging**, **Require status checks** → **`CI` / `build`** once workflows have run.
- **Team access**: Org/repo **Settings → Collaborators and teams** — grant **Write** or **Maintain** as appropriate.
