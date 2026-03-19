<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(`nota-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Nota nao encontrada' })
}

useSeoMeta({
  title: doc.value.title,
  description: doc.value.description,
})
</script>

<template>
  <article v-if="doc">
    <header class="mb-8 sm:mb-10">
      <p class="text-xs text-gray-400 dark:text-gray-500 mb-2">{{ doc.date }}</p>
      <h1 class="text-xl sm:text-2xl font-bold tracking-tight leading-snug">{{ doc.title }}</h1>
      <p v-if="doc.description" class="text-gray-500 dark:text-gray-400 mt-3 text-base">
        {{ doc.description }}
      </p>
      <a
        v-if="doc.pdfUrl"
        :href="doc.pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 mt-4 text-sm text-blue-500 hover:underline"
      >
        Baixar PDF ↗
      </a>
    </header>

    <div class="prose prose-gray dark:prose-invert max-w-none">
      <ContentRenderer :value="doc" />
    </div>

    <footer class="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
      <NuxtLink to="/notas" class="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity">
        ← Voltar para notas
      </NuxtLink>
    </footer>
  </article>
</template>
