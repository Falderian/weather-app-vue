import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILocation } from '@/utils/types'
import { useWeatherStore } from './weather'
import Api from '@/utils/api'

export const useLocationStore = defineStore('locationStore', () => {
  const { setWeather, resetWeather } = useWeatherStore()

  const location = ref<ILocation>()
  const setLocation = async (newLocation: ILocation) => {
    location.value = newLocation
    setWeather(await Api.getForecastWeather(newLocation.name, 5))
  }

  const resetLocation = () => {
    resetWeather()
    location.value = {} as ILocation
  }

  return { location, setLocation, resetLocation }
})
