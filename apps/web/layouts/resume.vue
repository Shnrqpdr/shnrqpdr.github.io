<script setup lang="ts">
const { isDark, toggle } = useDarkMode()
const mobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 font-display">

    <!-- Navigation -->
    <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 sm:px-6 lg:px-40 py-4">
      <div class="max-w-[1200px] mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-8 h-8 bg-primary flex items-center justify-center rounded">
              <span class="material-symbols-outlined text-background-light text-xl">terminal</span>
            </div>
            <h1 class="text-lg sm:text-xl font-bold tracking-tight">Pedro Henrique</h1>
          </NuxtLink>
        </div>
        <nav class="hidden md:flex items-center gap-10">
          <NuxtLink to="/" class="text-sm font-medium hover:text-primary transition-colors">Inicio</NuxtLink>
          <NuxtLink to="/resume" class="text-sm font-medium hover:text-primary transition-colors">Curriculo</NuxtLink>
          <NuxtLink to="/blog" class="text-sm font-medium hover:text-primary transition-colors">Blog</NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium hover:text-primary transition-colors">Contato</NuxtLink>
        </nav>
        <div class="flex items-center gap-2 sm:gap-3">
          <button
            class="flex items-center justify-center rounded-xl p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            :aria-label="isDark ? 'Modo claro' : 'Modo escuro'"
            @click="toggle"
          >
            <span class="material-symbols-outlined">{{ isDark ? 'dark_mode' : 'light_mode' }}</span>
          </button>
          <NuxtLink
            to="/about"
            class="hidden sm:inline-block bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold px-6 py-2 rounded transition-all"
          >
            Contato
          </NuxtLink>
          <!-- Mobile menu button -->
          <button
            class="flex md:hidden items-center justify-center rounded-xl p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="material-symbols-outlined">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 border-t border-primary/10 pt-4 max-w-[1200px] mx-auto">
        <nav class="flex flex-col gap-1">
          <NuxtLink to="/" class="text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors px-3 py-2.5 rounded-lg">Inicio</NuxtLink>
          <NuxtLink to="/resume" class="text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors px-3 py-2.5 rounded-lg">Curriculo</NuxtLink>
          <NuxtLink to="/blog" class="text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors px-3 py-2.5 rounded-lg">Blog</NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium hover:text-primary hover:bg-primary/5 transition-colors px-3 py-2.5 rounded-lg">Contato</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-40 py-8 sm:py-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-40 border-t border-primary/10 bg-white/50 dark:bg-white/5">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-sm text-slate-500">© {{ new Date().getFullYear() }} Pedro Henrique. Todos os direitos reservados.</p>
        <div class="flex gap-8">
          <a class="text-slate-500 hover:text-primary transition-colors text-sm" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="text-slate-500 hover:text-primary transition-colors text-sm" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>

  </div>
</template>
