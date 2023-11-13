<template>
  <section class="forecast">
    <div class="forecast__today">
      <AverageInfo :data="averageTodayData" />
      <WeatherByHour :day="forecastWeather.forecastday[0]" :today="true" />
    </div>
    <div class="forecast__next-days">
      <span>{{ forecastWeather.forecastday[1].date }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IForecast, TAverageItem } from '@/utils/types'
import AverageInfo from './AverageInfo.vue'
import WeatherByHour from './WeatherByHour.vue'

const { forecastWeather } = defineProps<{ forecastWeather: IForecast }>()
const todayForecast = forecastWeather.forecastday[0]
const { day } = todayForecast

const averageTodayData: TAverageItem[] = [
  {
    icon: 'Sunrise',
    value: todayForecast.astro.sunrise
  },
  {
    icon: 'Sunset',
    value: todayForecast.astro.sunset
  },
  { icon: 'Thermometer', value: day.maxtemp_c + '%', fill: 'red' },
  { icon: 'Thermometer', value: day.mintemp_c + '%', fill: 'blue' },
  { icon: 'Rain', value: day.daily_chance_of_rain + '%' },
  { icon: 'Snow', value: day.daily_chance_of_snow + '%' }
]
</script>

<style lang="scss" scoped>
.forecast {
  &__today {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__next-days {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;

    max-width: 75%;
  }
}
</style>
