<script setup lang="ts">
defineProps<{
  post: Record<string, any>
}>()

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<template>
  <component
    :is="post.externalUrl ? 'a' : resolveComponent('NuxtLink')"
    v-bind="post.externalUrl
      ? { href: post.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
      : { to: post._path }"
    class="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 hover:bg-primary/5 rounded-xl transition-all border-b border-slate-100 dark:border-slate-800 last:border-0"
  >
    <div class="flex flex-col flex-1 min-w-0">
      <p class="text-slate-900 dark:text-slate-100 text-base sm:text-lg font-medium group-hover:text-primary transition-colors line-clamp-2 sm:truncate">
        {{ post.title }}
        <span v-if="post.externalUrl" class="material-symbols-outlined text-sm align-middle text-slate-400 ml-1">open_in_new</span>
      </p>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 min-w-0">
        <span
          v-if="post.tags?.[0]"
          class="text-primary/70 text-xs font-semibold uppercase tracking-widest shrink-0"
        >{{ post.tags[0] }}</span>
        <span v-if="post.tags?.[0]" class="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full shrink-0"></span>
        <span v-if="post.description" class="text-slate-400 dark:text-slate-500 text-xs line-clamp-2 min-w-0">
          {{ post.description }}
        </span>
      </div>
    </div>
    <div class="shrink-0 sm:text-right">
      <p class="text-slate-400 dark:text-slate-500 text-xs sm:text-sm font-light">{{ formatDate(post.date) }}</p>
    </div>
  </component>
</template>
