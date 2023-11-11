import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TWeather } from '@/utils/types'
import { useLocationStore } from './location'
import Api from '@/utils/api'

export const useWeatherStore = defineStore('weatherStore', () => {
  const locationStore = useLocationStore()
  const weather = ref<TWeather>()

  const setWeather = (newWeather: TWeather) => {
    weather.value = newWeather
  }

  const resetWeather = () => (weather.value = {} as TWeather)

  locationStore.$onAction(({ name, after }) => {
    if (name === 'setLocation')
      after(async (location) => setWeather(await Api.getCurrWeather(location.name)))
  })

  return { weather, setWeather, resetWeather }
})
