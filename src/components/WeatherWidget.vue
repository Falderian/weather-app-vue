<template>
  <Transition name="list">
    <section v-if="weather" :class="`weather_widget`" id="widget">
      <div class="degrees">{{ weather!.current.feelslike_c }}&deg;</div>
      <div class="location">
        <div class="location__name">{{ weather.location.name }}</div>
        <div class="location__time">
          {{ formatDate(weather.current.last_updated) }}
        </div>
        <div class="weather_icon"></div>
      </div></section
  ></Transition>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import type { TWeather } from '@/utils/types'
import { formatDate } from '@/utils/utils'
import { ref } from 'vue'

const weatherStore = useWeatherStore()
const weather = ref<TWeather>()

weatherStore.$subscribe(() => {
  weather.value = weatherStore.weather
  document.getElementById('widget')?.classList.remove('anim-pulse')
  document.getElementById('widget')?.classList.add('anim-pulse')
})
</script>

<style lang="scss" scoped>
.weather_widget {
  display: flex;

  .degrees {
    font-size: 8rem;
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__name {
      font-size: 3rem;
    }

    &__info {
    }
  }
}
</style>
