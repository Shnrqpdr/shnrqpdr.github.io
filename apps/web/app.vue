<script setup lang="ts">
const { init } = useDarkMode()
onMounted(() => init())
</script>

<template>
  <div class="font-display">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
