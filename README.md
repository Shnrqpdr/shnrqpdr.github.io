# shnrqpdr.github.io

Blog pessoal onde escrevo sobre codigo, matematica, fisica e o que mais me interessar.

Nuxt 3 com conteudo em Markdown, geracao estatica e deploy automatico no GitHub Pages.

## Rodando local

Node.js 20+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run generate     # build estatico
npm run preview      # preview do build
```

## Estrutura

Tudo mora dentro de `apps/web/`:

```
apps/web/
├── content/
│   ├── blog/          # Posts (.md)
│   └── notas/         # Notas tecnicas, com KaTeX
├── components/
├── layouts/
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── blog/
│   └── notas/
├── utils/
└── nuxt.config.ts
```

## Conteudo

Posts vao em `apps/web/content/blog/` como `.md` com frontmatter:

```md
---
title: "Titulo do post"
description: "Resumo curto"
date: "2026-03-08"
tags: ["tag1", "tag2"]
---

Texto aqui...
```

Se o post for de outro site, coloca `externalUrl` no frontmatter e ele vira um link externo na listagem.

Notas vao em `apps/web/content/notas/`. Mesma ideia, mas com suporte a math (`$...$` inline, `$$...$$` bloco) via KaTeX. Da pra linkar um PDF com `pdfUrl`.

## Deploy

Push na `master` e pronto. GitHub Actions roda `nuxt generate` e publica no Pages.

## Stack

Nuxt 3, Nuxt Content, Tailwind CSS, KaTeX, GitHub Actions.
