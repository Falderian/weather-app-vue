<template>
  <section class="forecast">
    <div class="forecast__today">
      <AverageInfo :data="averageTodayData" />
    </div>
    <div class="forecast__next-days">next 2 days</div>
  </section>
</template>

<script setup lang="ts">
import type { IForecast } from '@/utils/types'
import AverageInfo from './AverageInfo.vue'

const { forecastWeather } = defineProps<{ forecastWeather: IForecast }>()
const todayForecast = forecastWeather.forecastday[0]
const { day } = todayForecast

const averageTodayData = [
  {
    icon: 'Sunrise',
    value: todayForecast.astro.sunrise
  },
  {
    icon: 'Sunset',
    value: todayForecast.astro.sunset
  },
  { icon: 'Thermometer', value: day.maxtemp_c, fill: 'red' },
  { icon: 'Thermometer', value: day.mintemp_c, fill: 'blue' },
  { icon: 'Rain', value: day.daily_chance_of_rain + '%' },
  { icon: 'Snow', value: day.daily_chance_of_snow + '%' }
]
</script>

<style lang="scss" scoped>
.forecast {
  &__today {
  }
}
</style>
