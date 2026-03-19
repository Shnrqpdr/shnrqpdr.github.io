<script setup lang="ts">
useSeoMeta({ title: 'Pedro Henrique' })

const [{ data: posts }, { data: notas }] = await Promise.all([
  useAsyncData('recent-posts', () =>
    queryContent('/blog').sort({ date: -1 }).limit(5).find()
  ),
  useAsyncData('recent-notas', () =>
    queryContent('/notas').sort({ date: -1 }).limit(5).find()
  ),
])
</script>

<template>
  <!-- Hero / About Section -->
  <section class="mb-10 sm:mb-16">
    <div class="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">

      <!-- Profile photo -->
      <div class="shrink-0">
        <img
          src="/avatar.png"
          alt="Foto de perfil"
          class="rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover border border-slate-200 dark:border-slate-700"
        />
      </div>

      <!-- Bio -->
      <div class="flex flex-col justify-center min-w-0 w-full md:max-w-2xl">
        <h1 class="text-slate-900 dark:text-slate-50 text-2xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-center md:text-left">Pedro Henrique</h1>
        <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light text-center md:text-left">
          Mestre em Fisica, Cientista e Engenheiro de Dados. Escrevo sobre codigo, matematica, fisica e o que mais me interessar.
        </p>

        <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">location_on</span>
            Volta Redonda, RJ
          </span>
          <span>·</span>
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">mail</span>
            hnrqpdr.sc@gmail.com
          </span>
        </div>

        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
          <a
            href="https://github.com/Shnrqpdr"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <span class="material-symbols-outlined text-lg">account_tree</span>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/santospedrohenrique"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            <span class="material-symbols-outlined text-lg">link</span>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Blogposts Recentes -->
  <section class="mb-10 sm:mb-14">
    <div class="flex items-baseline justify-between mb-6 sm:mb-8 border-b border-primary/10 pb-3 sm:pb-4">
      <h3 class="text-slate-900 dark:text-slate-100 text-lg sm:text-xl font-bold">Blogposts Recentes</h3>
      <NuxtLink to="/blog" class="text-primary text-sm font-medium hover:underline">Ver todos</NuxtLink>
    </div>

    <div class="space-y-1">
      <PostListItem v-for="post in posts" :key="post._path" :post="post" />
    </div>
  </section>

  <!-- Notas Recentes -->
  <section>
    <div class="flex items-baseline justify-between mb-6 sm:mb-8 border-b border-primary/10 pb-3 sm:pb-4">
      <h3 class="text-slate-900 dark:text-slate-100 text-lg sm:text-xl font-bold">Notas Recentes</h3>
      <NuxtLink to="/notas" class="text-primary text-sm font-medium hover:underline">Ver todas</NuxtLink>
    </div>

    <ul class="space-y-4">
      <li v-for="nota in notas" :key="nota._path">
        <NuxtLink :to="nota._path" class="group flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2">
          <span class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 shrink-0 sm:w-24">{{ formatDate(nota.date) }}</span>
          <div>
            <span class="text-sm font-medium group-hover:opacity-70 transition-opacity">{{ nota.title }}</span>
            <p v-if="nota.description" class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ nota.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
