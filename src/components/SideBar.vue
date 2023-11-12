<template>
  <div class="sidebar">
    <SearchBar />
    <Transition name="list">
      <WeatherDetails v-if="newWeather?.forecast" :weather="newWeather" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import SearchBar from './SearchBar.vue'
import WeatherDetails from './WeatherDetails.vue'
import { ref } from 'vue'
import type { IWeather } from '@/utils/types'

const newWeather = ref<IWeather>()

useWeatherStore().$subscribe(() => {
  newWeather.value = useWeatherStore().weather
})
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;

  border-left: 5px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(9.5px);
}
</style>
