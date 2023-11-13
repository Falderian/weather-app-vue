<template>
  <section class="forecast">
    <div v-for="item in hoursToDisplay" :key="item.time" class="forecast__item">
      <text>{{ item.time.substring(item.time.length - 5) }}</text>
      <img :src="item.condition.icon" class="weather_icon" />
      <text>{{ item.temp_c }}&deg;</text>
      <DynamicIcon icon-name="Thermometer" />
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
.forecast {
  display: flex;
  width: fit-content;
  max-width: 100%;

  gap: 1rem;
  padding: 0.5rem;
  flex-wrap: wrap;

  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: invert(20%);

  &__item {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    padding: 0 0.5rem;
    gap: 0.5rem;

    .weather_icon {
      height: 35px;
    }

    .info {
      display: flex;
    }
  }
}
</style>
