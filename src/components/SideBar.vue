<template>
  <div class="sidebar">
    <SearchBar />
    <TransitionGroup name="list">
      <template v-if="newWeather?.forecast">
        <WeatherDetails :weather="newWeather" />
        <WeatherTips :weather="newWeather" />
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import type { IWeather } from '@/utils/types'
import SearchBar from './SearchBar.vue'
import WeatherDetails from './WeatherDetails.vue'
import WeatherTips from './WeatherTips.vue'

const newWeather = ref<IWeather>()

useWeatherStore().$subscribe(() => {
  newWeather.value = useWeatherStore().weather
})
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;

  border-left: 5px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(9.5px);
}
</style>
