<template>
  <TransitionGroup name="list">
    <section v-if="weather?.current" :class="`weather_widget ${!weather ? 'reset' : 'anim-pulse'}`">
      <div class="degrees">{{ weather!.current.temp_c }}&deg;</div>
      <div class="location">
        <div class="location__name">{{ weather.location.name }}</div>
        <div class="location__time">
          {{ formatDate(weather.current.last_updated) }}
        </div>
      </div>
      <img :src="weather.current.condition.icon" class="weather_icon" />
    </section>
    <ForecastWeather v-if="weather?.forecast" :forecast-weather="weather.forecast" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { type IWeather } from '@/utils/types'
import { formatDate } from '@/utils/utils'
import { ref } from 'vue'
import ForecastWeather from './ForecastWeather.vue'

const weatherStore = useWeatherStore()
const weather = ref<IWeather>()

weatherStore.$subscribe(() => {
  weather.value = weatherStore.weather
})
</script>

<style lang="scss" scoped>
.weather_widget {
  display: flex;
  align-items: center;

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
  }
  .weather_icon {
    height: fit-content;
  }
}
.reset {
  animation: none;
}
</style>
