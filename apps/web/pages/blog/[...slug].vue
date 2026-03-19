<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Publicacao nao encontrada' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>

<template>
  <article v-if="post">
    <header class="mb-8 sm:mb-10">
      <p class="text-xs text-gray-400 dark:text-gray-500 mb-2">{{ formatDate(post.date) }}</p>
      <h1 class="text-xl sm:text-2xl font-bold tracking-tight leading-snug">{{ post.title }}</h1>
      <p v-if="post.description" class="text-gray-500 dark:text-gray-400 mt-3 text-base">
        {{ post.description }}
      </p>
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-3 sm:mt-4">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="prose prose-gray dark:prose-invert max-w-none">
      <ContentRenderer :value="post" />
    </div>

    <footer class="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
      <NuxtLink to="/blog" class="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity">
        ← Voltar para publicacoes
      </NuxtLink>
    </footer>
  </article>
</template>
