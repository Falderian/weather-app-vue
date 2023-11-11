<template>
  <div class="sidebar">
    <SearchBar />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
</script>

<style scoped lang="scss">
.sidebar {
  border-left: 5px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(9.5px);
}
</style>
