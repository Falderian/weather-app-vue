<template>
  <section class="wrapper">
    <section class="details">
      <span class="details__weather"
        >CURRENT CONTIDITIONS: {{ weather!.current.condition.text }}</span
      >
      <div v-for="item in weatherValues" :key="item.key" class="grid">
        <span>{{ item.text }}</span>
        <text>{{ weather.current[item.key as keyof ICurrentWeather] + ' ' + item.mesure }} </text
        ><DynamicIcon :icon-name="item.icon" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import type { ICurrentWeather, IWeather } from '@/utils/types'
import DynamicIcon from './icons/DynamicIcon.vue'

const { weather } = defineProps<{ weather: IWeather }>()

const weatherValues = [
  { key: 'feelslike_c', text: 'Feels like', mesure: '\u00B0', icon: 'Thermometer' },
  { key: 'wind_kph', text: 'Wind', mesure: 'km/h', icon: 'Wind' },
  { key: 'pressure_mb', text: 'Pressure', mesure: 'Pa', icon: 'Pressure' },
  { key: 'humidity', text: 'Humidity', mesure: '%', icon: 'Humidity' },
  { key: 'cloud', text: 'Cloudy', mesure: '%', icon: 'Cloud' }
]
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2rem;

    border-bottom: 1px solid #fff;
    .grid {
      display: grid;
      grid-template-columns: 4fr 2fr 0fr;
      gap: 0.5rem;

      span:first-child {
        color: rgba(255, 255, 255, 0.7);
      }

      text {
        text-align: end;
      }
    }

    &__weather {
      text-transform: uppercase;
      font-weight: 500;
    }
  }
}
</style>
