<template>
  <div class="main-layout">
    <header>
      <!-- Header content -->
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>