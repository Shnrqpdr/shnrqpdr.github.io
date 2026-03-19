<script setup lang="ts">
useSeoMeta({ title: 'Blog - Pedro Henrique' })

const route = useRoute()
const searchQuery = computed(() => (route.query.search as string) ?? '')

const { data: posts } = await useAsyncData(
  'all-posts',
  () => queryContent('/blog').sort({ date: -1 }).find()
)

const filtered = computed(() => {
  if (!searchQuery.value) return posts.value ?? []
  const q = searchQuery.value.toLowerCase()
  return (posts.value ?? []).filter(
    p =>
      p.title?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.tags?.some((t: string) => t.toLowerCase().includes(q))
  )
})
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 sm:mb-8 border-b border-primary/10 pb-3 sm:pb-4">
      <h1 class="text-xl sm:text-2xl font-bold tracking-tight">
        {{ searchQuery ? `Resultados para "${searchQuery}"` : 'Todas as Publicacoes' }}
      </h1>
      <NuxtLink v-if="searchQuery" to="/blog" class="text-primary text-sm font-medium hover:underline">
        Limpar busca
      </NuxtLink>
    </div>

    <p v-if="filtered.length === 0" class="text-slate-400 text-sm">Nenhuma publicacao encontrada.</p>

    <div class="space-y-1">
      <PostListItem v-for="post in filtered" :key="post._path" :post="post" />
    </div>
  </div>
</template>
