<template>
  <section class="forecast_days">
    <div v-for="item in hoursToDisplay" :key="item.time" class="forecast_days__item">
      <text>{{ item.time.substring(item.time.length - 5) }}</text>
      <img :src="item.condition.icon" class="weather_icon" />
      <DynamicIcon icon-name="Thermometer" />
      <text>{{ item.temp_c }}&deg;</text>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IForecastday } from '@/utils/types'
import DynamicIcon from './icons/DynamicIcon.vue'

const { day, today } = defineProps<{ day: IForecastday; today?: boolean }>()

const currTime = new Date().getHours() + 1
const hoursToDisplay = today ? day.hour.slice(currTime) : day.hour
</script>

<style lang="scss" scoped>
.forecast_days {
  display: grid;
  grid-template: auto / repeat(8, 1fr);
  max-width: 100%;

  background: transparent;

  color: black;
  grid-gap: 3px;

  &__item {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    padding: 0 0.5rem;
    gap: 0.5rem;

    background-color: rgba($color: #000000, $alpha: 0.5);
    color: black;

    .weather_icon {
      height: 35px;
    }

    .info {
      display: flex;
    }
  }
}
</style>
