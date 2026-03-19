<script setup lang="ts">
useSeoMeta({
  title: 'Sobre - Pedro Henrique',
})
</script>

<template>
  <div>
    <h1 class="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Sobre</h1>
    <div class="prose prose-gray dark:prose-invert max-w-none">
      <p>
        Ola! Sou o Pedro Henrique dos Santos Cunha, Mestre em Fisica pela UFF e Engenheiro de Dados
        na Econodata. Tenho mais de 4 anos de experiencia desenvolvendo solucoes que unem engenharia de dados,
        machine learning e infraestrutura cloud.
      </p>
      <p>
        Minha formacao em Fisica Computacional me deu uma base forte em modelagem computacional,
        simulacoes numericas e computacao de alto desempenho (HPC). Hoje trabalho com pipelines de ETL,
        modelos preditivos, MLOps e LLMs.
      </p>
      <p>
        Neste site publico artigos sobre codigo, matematica, fisica e outros assuntos que me interessam.
      </p>
    </div>

    <div class="mt-8 sm:mt-12 p-5 sm:p-8 border border-primary/10 rounded-xl">
      <h2 class="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contato</h2>
      <div class="space-y-4">
        <a
          href="mailto:hnrqpdr.sc@gmail.com"
          class="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
        >
          <span class="material-symbols-outlined text-primary text-lg">mail</span>
          hnrqpdr.sc@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/santospedrohenrique"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
        >
          <span class="material-symbols-outlined text-primary text-lg">link</span>
          LinkedIn
        </a>
        <a
          href="https://github.com/Shnrqpdr"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
        >
          <span class="material-symbols-outlined text-primary text-lg">account_tree</span>
          GitHub
        </a>
        <!-- <a
          href="https://medium.com/@hnrqpdr.sc"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
        >
          <span class="material-symbols-outlined text-primary text-lg">article</span>
          Medium
        </a> -->
      </div>
    </div>
  </div>
</template>
