import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IWeather } from '@/utils/types'

export const useWeatherStore = defineStore('weatherStore', () => {
  const weather = ref<IWeather>()

  const getCurentWeather = () => weather.value!.current
  const getForecastWeather = () => weather.value!.forecast

  const setWeather = (newWeather: IWeather) => {
    weather.value = newWeather
  }

  const resetWeather = () => (weather.value = {} as IWeather)
  return { weather, setWeather, getCurentWeather, getForecastWeather, resetWeather }
})
