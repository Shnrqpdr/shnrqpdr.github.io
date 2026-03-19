<script setup lang="ts">
useSeoMeta({ title: 'Notas — Pedro Henrique' })

const { data: docs } = await useAsyncData('notas', () =>
  queryContent('/notas').sort({ date: -1 }).find()
)
</script>

<template>
  <div>
    <h1 class="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">Notas</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-6 sm:mb-10 text-sm">
      Notas tecnicas sobre fisica, matematica e outros topicos — algumas com renderizacao de equacoes e PDF disponivel.
    </p>
    <ul class="space-y-6 sm:space-y-8">
      <li v-for="doc in docs" :key="doc._path">
        <NuxtLink :to="doc._path" class="group block">
          <span class="text-xs text-gray-400 dark:text-gray-500">{{ formatDate(doc.date) }}</span>
          <h2 class="text-base font-medium group-hover:opacity-70 transition-opacity">{{ doc.title }}</h2>
          <p v-if="doc.description" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {{ doc.description }}
          </p>
          <div class="flex gap-3 mt-2">
            <span v-if="doc.pdfUrl" class="text-xs text-blue-500 hover:underline">
              PDF ↗
            </span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
