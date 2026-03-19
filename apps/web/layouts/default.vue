<script setup lang="ts">
const { isDark, toggle } = useDarkMode()

const router = useRouter()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

function onSearch(e: KeyboardEvent) {
  if (e.key === 'Enter' && searchQuery.value.trim()) {
    const base = route.path.startsWith('/notas') ? '/notas' : '/blog'
    router.push(`${base}?search=${encodeURIComponent(searchQuery.value.trim())}`)
    searchQuery.value = ''
    mobileMenuOpen.value = false
  }
}
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
    <div class="flex h-full grow flex-col">

      <!-- Header -->
      <header class="border-b border-primary/10 px-4 sm:px-6 py-4 lg:px-40">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4 sm:gap-8">
            <NuxtLink to="/" class="flex items-center gap-2 text-primary">
              <span class="material-symbols-outlined text-2xl sm:text-3xl">terminal</span>
              <h2 class="text-slate-900 dark:text-slate-100 text-lg sm:text-xl font-bold tracking-tight">Pedro Henrique</h2>
            </NuxtLink>
            <nav class="hidden md:flex items-center gap-6">
              <NuxtLink
                to="/blog"
                class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              >Blogposts</NuxtLink>
              <NuxtLink
                to="/notas"
                class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              >Notas</NuxtLink>
              <!-- <NuxtLink
                to="/resume"
                class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              >Curriculo</NuxtLink> -->
              <NuxtLink
                to="/about"
                class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
              >Contato</NuxtLink>
            </nav>
          </div>

          <div class="flex items-center gap-2 sm:gap-4">
            <div class="relative hidden sm:block">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-xl select-none">search</span>
              <input
                v-model="searchQuery"
                class="bg-primary/5 dark:bg-primary/10 border-none focus:ring-1 focus:ring-primary rounded-xl pl-10 pr-4 py-2 text-sm w-48 lg:w-64 placeholder:text-slate-400 dark:text-slate-100 outline-none"
                placeholder="Buscar publicacoes..."
                type="text"
                @keydown="onSearch"
              />
            </div>

            <button
              class="flex items-center justify-center rounded-xl p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              :aria-label="isDark ? 'Modo claro' : 'Modo escuro'"
              @click="toggle"
            >
              <span class="material-symbols-outlined">{{ isDark ? 'dark_mode' : 'light_mode' }}</span>
            </button>

            <div class="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30 shrink-0 hidden sm:flex">
              <img class="w-full h-full object-cover" src="/avatar.png" alt="Foto de perfil" />
            </div>

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
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 border-t border-primary/10 pt-4 space-y-3">
          <!-- Mobile search -->
          <div class="relative sm:hidden">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-xl select-none">search</span>
            <input
              v-model="searchQuery"
              class="w-full bg-primary/5 dark:bg-primary/10 border-none focus:ring-1 focus:ring-primary rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-slate-400 dark:text-slate-100 outline-none"
              placeholder="Buscar publicacoes..."
              type="text"
              @keydown="onSearch"
            />
          </div>
          <nav class="flex flex-col gap-1">
            <NuxtLink
              to="/blog"
              class="text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 text-sm font-medium transition-colors px-3 py-2.5 rounded-lg"
            >Blogposts</NuxtLink>
            <NuxtLink
              to="/notas"
              class="text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 text-sm font-medium transition-colors px-3 py-2.5 rounded-lg"
            >Notas</NuxtLink>
            <NuxtLink
              to="/about"
              class="text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 text-sm font-medium transition-colors px-3 py-2.5 rounded-lg"
            >Contato</NuxtLink>
          </nav>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex flex-1 justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-40 overflow-hidden">
        <div class="flex flex-col max-w-[800px] flex-1 min-w-0">
          <slot />
        </div>
      </main>

      <!-- Footer -->
      <footer class="mt-auto pt-8 pb-12 border-t border-primary/10 px-4 sm:px-6 lg:px-40">
        <div class="max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-400 text-sm font-light">© {{ new Date().getFullYear() }} Pedro Henrique.</p>
          <div class="flex gap-6">
            <NuxtLink to="/blog" class="text-slate-400 hover:text-primary text-sm transition-colors">Blogposts</NuxtLink>
            <NuxtLink to="/notas" class="text-slate-400 hover:text-primary text-sm transition-colors">Notas</NuxtLink>
          </div>
        </div>
      </footer>

    </div>
  </div>
</template>
