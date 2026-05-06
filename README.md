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

Production is served from **Cloudflare Pages** (build: `npm run build`, output: **`dist`**). SPA routing uses [`public/_redirects`](public/_redirects) so deep links work.

Use **one** of the following — do not enable Dashboard Git builds *and* the GitHub Action on the same Pages project (you would get duplicate deploys).

### Option A — Cloudflare “Connect to Git” (no GitHub secrets)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Install the GitHub app for org **Bansag**, repo **`website`**, production branch **`main`**.
3. Build settings: command **`npm run build`**, output directory **`dist`**.

After the first successful deploy, open the Pages project → **Custom domains** → add **`bansag.com`** and **`www.bansag.com`**, then confirm the DNS records Cloudflare suggests for the **bansag.com** zone (TLS is automatic).

### Option B — Deploy via GitHub Action ([`.github/workflows/deploy-cloudflare-pages.yml`](.github/workflows/deploy-cloudflare-pages.yml))

Use this if you prefer deploy credentials in GitHub instead of the Cloudflare–GitHub integration.

1. In Cloudflare, create a Pages project named **`bansag-website`** (e.g. **Workers & Pages** → **Create** → use the **Create** flow for a new project, or run locally: `npx wrangler pages project create bansag-website` with `CLOUDFLARE_API_TOKEN` set).
2. Create an **API token** with permission to edit Cloudflare Pages (e.g. **Account** → **Cloudflare Pages** → **Edit**).
3. In the GitHub repo **Settings → Secrets and variables → Actions**, add:
   - **`CLOUDFLARE_API_TOKEN`**
   - **`CLOUDFLARE_ACCOUNT_ID`**
4. In **Settings → Secrets and variables → Actions → Variables**, set **`CF_PAGES_DEPLOY`** to **`true`** to turn on the deploy workflow. Leave it unset or not `true` if you use **Option A** only.
5. Attach **Custom domains** (`bansag.com`, `www.bansag.com`) on the **bansag-website** Pages project as in Option A.

### Repository hygiene (org owner)

- **Branch protection** on **`main`**: Settings → **Branches** → **Add rule** for `main` — e.g. **Require a pull request before merging**, **Require status checks to pass** → select **`CI`** / **`build`** once workflows have run at least once.
- **Team access**: Org/repo **Settings → Collaborators and teams** (or org teams) — grant **Write** or **Maintain** as appropriate.
