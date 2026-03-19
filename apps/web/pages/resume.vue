<script setup lang="ts">
definePageMeta({ layout: 'resume' })
useSeoMeta({ title: 'Curriculo - Pedro Henrique' })
</script>

<template>
  <!-- Hero Section -->
  <section class="mb-12 sm:mb-20">
    <h2 class="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter">
      Mestre em Fisica,<br />
      <span class="text-primary">Cientista e Engenheiro de Dados</span>
    </h2>
    <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
      Mais de 4 anos de experiencia desenvolvendo solucoes que unem engenharia de dados e machine learning.
      Experiencia abrangente em todo o ciclo de vida de modelos de ML/DL, infraestrutura cloud e sistemas distribuidos.
    </p>
  </section>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">

    <!-- Coluna esquerda: Experiencia, Formacao, Projetos -->
    <div class="lg:col-span-8 space-y-10 sm:space-y-16">

      <!-- Experiencia -->
      <section id="experiencia">
        <div class="flex items-center gap-4 mb-8">
          <span class="material-symbols-outlined text-primary">work</span>
          <h3 class="text-xl sm:text-2xl font-bold">Experiencia Profissional</h3>
        </div>
        <div class="space-y-8 sm:space-y-12">

          <!-- Econodata - Eng. Dados -->
          <div class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div class="flex flex-wrap justify-between items-start mb-2">
              <h4 class="text-lg sm:text-xl font-bold">Engenheiro de Dados</h4>
              <span class="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">Dez 2024 – Presente</span>
            </div>
            <p class="text-primary font-medium mb-3">Econodata</p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Criacao e manutencao de pipelines de ETL para dados de natureza diversa.
              Gerenciamento de infraestrutura de dados na GCP. Criacao e deploy de modelos preditivos com ML/DL via Vertex AI.
              Utilizacao de LLMs para transformacao de dados nao estruturados obtidos via Web Scraping e RAG.
            </p>
          </div>

          <!-- Econodata - Dev Full-Stack -->
          <div class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/60"></div>
            <div class="flex flex-wrap justify-between items-start mb-2">
              <h4 class="text-lg sm:text-xl font-bold">Desenvolvedor Full-Stack</h4>
              <span class="text-sm font-semibold text-slate-500 px-3 py-1">Jan 2024 – Dez 2024</span>
            </div>
            <p class="text-primary font-medium mb-3">Econodata</p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Implementacao e manutencao de microsservicos com Node.js e NGINX.
              Frontend com Vue.js/Nuxt 3 focando em performance e SEO.
              Gerenciamento da infraestrutura na GCP com servicos de observabilidade.
              Principal responsavel pela implementacao de testes e2e com Cypress.
            </p>
          </div>

          <!-- Prothera -->
          <div class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
            <div class="flex flex-wrap justify-between items-start mb-2">
              <h4 class="text-lg sm:text-xl font-bold">Desenvolvedor Full-Stack</h4>
              <span class="text-sm font-semibold text-slate-500 px-3 py-1">Abr 2021 – Jan 2024</span>
            </div>
            <p class="text-primary font-medium mb-3">Prothera</p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Atuacao em FrontEnd (Vue.js), BackEnd (Java/Quarkus), DevOps e P&amp;D.
              Desenvolvimento de APIs REST, testes e2e com Puppeteer e Cypress.
              Treinamento de desenvolvedores menos experientes.
            </p>
          </div>

          <!-- CNPq -->
          <div class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
            <div class="flex flex-wrap justify-between items-start mb-2">
              <h4 class="text-lg sm:text-xl font-bold">Pesquisador — Iniciacao Cientifica</h4>
              <span class="text-sm font-semibold text-slate-500 px-3 py-1">Ago 2021 – Ago 2022</span>
            </div>
            <p class="text-primary font-medium mb-3">CNPq / PIBIC-UFF</p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Pesquisa em Fisica Teorica na area de Teoria de Espalhamento.
              Criacao de simulacoes computacionais para simular protons em contato com o campo magnetico terrestre,
              estudando fenomenos como a Aurora Boreal.
            </p>
          </div>

          <!-- LNCC -->
          <div class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
            <div class="flex flex-wrap justify-between items-start mb-2">
              <h4 class="text-lg sm:text-xl font-bold">Aprendiz de Computacao de Alto Desempenho</h4>
              <span class="text-sm font-semibold text-slate-500 px-3 py-1">Out 2021 – Jul 2022</span>
            </div>
            <p class="text-primary font-medium mb-3">LNCC</p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Criacao de um Cluster Beowulf com NIS, SLURM e MPI.
              Simulacoes de ondas sonoras 2D com diferencas finitas e programacao paralela em GPUs (CUDA)
              no cluster SDumont do LNCC.
            </p>
          </div>

        </div>
      </section>

      <!-- Formacao -->
      <section id="formacao">
        <div class="flex items-center gap-4 mb-8">
          <span class="material-symbols-outlined text-primary">school</span>
          <h3 class="text-xl sm:text-2xl font-bold">Formacao Academica</h3>
        </div>
        <div class="space-y-8">

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h4 class="text-lg font-bold">Mestrado em Fisica</h4>
              <p class="text-slate-600 dark:text-slate-400">Universidade Federal Fluminense (UFF)</p>
            </div>
            <span class="text-sm font-medium shrink-0">Jul 2023 – Ago 2025</span>
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h4 class="text-lg font-bold">Bacharelado em Fisica Computacional</h4>
              <p class="text-slate-600 dark:text-slate-400">Universidade Federal Fluminense (UFF)</p>
            </div>
            <span class="text-sm font-medium shrink-0">Mar 2018 – Dez 2022</span>
          </div>

        </div>
      </section>

      <!-- Projetos -->
      <section id="projetos">
        <div class="flex items-center gap-4 mb-8">
          <span class="material-symbols-outlined text-primary">potted_plant</span>
          <h3 class="text-xl sm:text-2xl font-bold">Projetos em Destaque</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a
            href="https://github.com/Shnrqpdr/Wave-Equation"
            target="_blank"
            rel="noopener noreferrer"
            class="group border border-primary/10 rounded-xl overflow-hidden bg-white/50 dark:bg-white/5 hover:border-primary/40 transition-all"
          >
            <div class="h-36 sm:h-48 w-full bg-primary/5 flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl text-primary/20">waves</span>
            </div>
            <div class="p-4 sm:p-6">
              <h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Wave Equation</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                Simulacao de ondas sonoras 2D usando diferencas finitas com programacao paralela em GPUs via CUDA no cluster SDumont.
              </p>
              <div class="flex gap-2">
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">C/C++</span>
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">CUDA</span>
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">MPI</span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Shnrqpdr"
            target="_blank"
            rel="noopener noreferrer"
            class="group border border-primary/10 rounded-xl overflow-hidden bg-white/50 dark:bg-white/5 hover:border-primary/40 transition-all"
          >
            <div class="h-36 sm:h-48 w-full bg-primary/5 flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl text-primary/20">scatter_plot</span>
            </div>
            <div class="p-4 sm:p-6">
              <h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Quantum Scattering</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                Simulacoes computacionais de espalhamento de protons no campo magnetico terrestre — pesquisa PIBIC-UFF/CNPq.
              </p>
              <div class="flex gap-2">
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">Python</span>
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">NumPy</span>
                <span class="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">SciPy</span>
              </div>
            </div>
          </a>

        </div>
      </section>

      <!-- Publicacao -->
      <section id="publicacao">
        <div class="flex items-center gap-4 mb-8">
          <span class="material-symbols-outlined text-primary">menu_book</span>
          <h3 class="text-xl sm:text-2xl font-bold">Publicacao</h3>
        </div>
        <div class="border border-primary/10 rounded-xl p-6 bg-white/50 dark:bg-white/5">
          <h4 class="font-bold text-lg mb-1">Quantum scattering in a wavy circle</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">Pedro Henrique dos Santos Cunha</p>
        </div>
      </section>

    </div>

    <!-- Coluna direita: Competencias & Contato -->
    <aside class="lg:col-span-4 space-y-8 sm:space-y-12">

      <div class="bg-primary/5 p-5 sm:p-8 rounded-xl border border-primary/10">
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">database</span>
          Competencias Tecnicas
        </h3>
        <div class="space-y-8">

          <div>
            <h4 class="text-xs uppercase tracking-widest font-bold text-primary mb-3">Ciencia de Dados &amp; ML</h4>
            <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Machine Learning / Deep Learning</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> MLOps (Vertex AI, pipelines)</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Gradient Boosting / LLMs / RAG</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Feature Engineering</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-widest font-bold text-primary mb-3">Infraestrutura &amp; Cloud</h4>
            <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Google Cloud Platform</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Docker / Kubernetes</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> CI/CD (Jenkins, GitHub Actions)</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> HPC (MPI, OpenMP, CUDA)</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-widest font-bold text-primary mb-3">Linguagens &amp; Frameworks</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Python</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">C/C++</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">TypeScript</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">SQL</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Bash</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Vue.js / Nuxt</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Node.js</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Java / Quarkus</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">PyTorch</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">TensorFlow</span>
              <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-primary/20 shadow-sm">Scikit-learn</span>
            </div>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-widest font-bold text-primary mb-3">Certificacoes</h4>
            <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Jornada em Ciencia de Dados</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Algoritmos para Big Data</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Deep Learning</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Analise de Dados</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="p-5 sm:p-8 border border-primary/10 rounded-xl">
        <h3 class="text-lg sm:text-xl font-bold mb-4">Vamos conversar</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Sempre aberto a colaboracoes em projetos de alto impacto em engenharia de dados, ML e pesquisa.
        </p>
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
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
          >
            <span class="material-symbols-outlined text-primary text-lg">description</span>
            Download Curriculo (PDF)
          </a>
        </div>
      </div>

    </aside>
  </div>
</template>
