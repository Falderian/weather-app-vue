<template>
  <section class="forecast">
    <div class="forecast__today">
      <AverageInfo :data="getAverageData(forecastWeather.forecastday[0])" />
      <WeatherByHour :day="forecastWeather.forecastday[0]" :today="true" />
    </div>
    <div class="forecast__next-days">
      <div v-for="item in forecastWeather.forecastday.slice(1)" :key="item.date">
        <span>{{ formatDate(item.date).substring(6) }}</span>
        <AverageInfo :data="getAverageData(item)" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IForecast, IForecastday } from '@/utils/types'
import AverageInfo from './AverageInfo.vue'
import WeatherByHour from './WeatherByHour.vue'
import { formatDate } from '@/utils/utils'

const { forecastWeather } = defineProps<{ forecastWeather: IForecast }>()

const getAverageData = (date: IForecastday) => {
  return [
    {
      icon: 'Sunrise',
      value: date.astro.sunrise
    },
    {
      icon: 'Sunset',
      value: date.astro.sunset
    },
    { icon: 'Thermometer', value: date.day.maxtemp_c + '%', fill: 'red' },
    { icon: 'Thermometer', value: date.day.mintemp_c + '%', fill: 'blue' },
    { icon: 'Rain', value: date.day.daily_chance_of_rain + '%' },
    { icon: 'Snow', value: date.day.daily_chance_of_snow + '%' }
  ]
}
</script>

<style lang="scss" scoped>
.forecast {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  &__today {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__next-days {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1rem;
    gap: 1rem;
  }
}
</style>
