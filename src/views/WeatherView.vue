<template>
  <div class="wrapper">
    <WeatherWidget />
  </div>
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherWidget.vue'
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;

  height: 100%;
}
</style>
