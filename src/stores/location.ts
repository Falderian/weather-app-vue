import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TLocation } from '@/utils/types'

export const useLocationStore = defineStore('locationStore', () => {
  const location = ref<TLocation>()
  const setLocation = (newLocation: TLocation) => (location.value = newLocation)

  const resetLocation = () => {
    location.value = {} as TLocation
  }

  return { location, setLocation, resetLocation }
})
