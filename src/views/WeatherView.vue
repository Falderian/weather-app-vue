<template>
  <div class="container">
    <WeatherWidget />
  </div>
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherWidget.vue'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
}
</style>
