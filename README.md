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

Production is deployed from the **`main`** branch (Cloudflare Pages: build `npm run build`, output directory `dist`). SPA routing uses [`public/_redirects`](public/_redirects) so client-side routes work on refresh.

### One-time Cloudflare setup (account admin)

1. **Workers & Pages → Create → Pages → Connect to Git** — authorize GitHub, select org **Bansag**, repository **website**, production branch **`main`**. Build: `npm run build`, output: **`dist`**.
2. **Custom domains** on the Pages project — add **`bansag.com`** and **`www.bansag.com`**. Complete the DNS prompts for the `bansag.com` zone (apex + `www`); SSL is issued automatically.
3. **GitHub → Settings → Branches** — protect **`main`** (e.g. require PR before merge, optional required status check **`CI / build`** once Actions runs). Add collaborators via org/repo settings.
