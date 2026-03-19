// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  ssr: true,

  app: {
    baseURL: process.env.BASE_URL ?? '/',
    head: {
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio and blog.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
        },
      ],
      // Applies dark class before paint to prevent flash
      script: [
        {
          innerHTML: `(function(){var s=localStorage.getItem('darkMode');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark');}})();`,
          type: 'text/javascript',
        },
      ],
    },
  },

  content: {
    highlight: {
      theme: 'github-dark',
      langs: ['python', 'typescript', 'javascript', 'bash', 'latex', 'json', 'yaml'],
    },
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [['rehype-katex', { strict: false }]],
    },
  },
})
