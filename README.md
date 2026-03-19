# my-personal-blog

Personal portfolio and blog - statically generated with **Nuxt 3 + Nuxt Content**, deployed to GitHub Pages.

## Features

- **Blog posts in Markdown** - file-based via Nuxt Content with syntax highlighting
- **LaTeX documents** - write math with `$...$` / `$$...$$`, rendered via KaTeX; link to compiled PDFs
- **Static site generation** - zero-server, deployed to GitHub Pages via GitHub Actions
- **Tailwind CSS** - utility-first styling with `@tailwindcss/typography` prose renderer

## Structure

```
my-personal-blog/
├── apps/
│   └── web/                  # Nuxt 3 app
│       ├── content/
│       │   ├── blog/         # Blog posts (.md)
│       │   └── latex/        # LaTeX documents (.md with KaTeX math)
│       ├── layouts/
│       ├── pages/
│       │   ├── index.vue
│       │   ├── about.vue
│       │   ├── blog/
│       │   └── latex/
│       └── nuxt.config.ts
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions: generate + deploy to Pages
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 20

### Install & run

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Build & preview locally

```bash
npm run generate
npm run preview
```

## Writing Content

### Blog posts

Create a file in `apps/web/content/blog/`:

```md
---
title: "My Post Title"
description: "Short summary"
date: "2026-03-08"
tags: ["tag1", "tag2"]
---

Post body here...
```

### LaTeX documents

Create a file in `apps/web/content/latex/`. Write math using `$...$` (inline) and `$$...$$` (block):

```md
---
title: "My Paper"
description: "A short note on something interesting"
date: "2026-03-08"
pdfUrl: "/pdfs/my-paper.pdf"  # optional
---

The Gaussian integral evaluates to:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$
```

Math is rendered via **KaTeX**.

## Deployment

### GitHub Pages setup

1. In your GitHub repo → **Settings → Pages**, set source to **GitHub Actions**.
2. If the repo is a project page (not `<username>.github.io`), add a repository variable:
   - **Settings → Variables → Actions**: `BASE_URL` = `/<repo-name>/`
3. Push to `main` - the workflow builds and deploys automatically.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Nuxt 3](https://nuxt.com) |
| Content | [Nuxt Content](https://content.nuxt.com) |
| Math rendering | [KaTeX](https://katex.org) via remark-math + rehype-katex |
| Styling | [Tailwind CSS](https://tailwindcss.com) + Typography plugin |
| Deployment | GitHub Actions → GitHub Pages |
