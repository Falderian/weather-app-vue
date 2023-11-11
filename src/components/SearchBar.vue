<template>
  <section class="search">
    <input
      v-model="input"
      type="text"
      :class="`search__bar ${isLoading && 'anim-pulse'}`"
      :placeholder="'Search location'"
      @input="debouncedInput"
    />
    <Transition name="list">
      <div v-if="availableLocations.length" class="container fade-out">
        <span
          v-for="location in availableLocations"
          :key="location.id"
          @click="handleSelection(location)"
          class="location"
          >{{ location.name + ', ' + (location.region || location.country) }}</span
        >
      </div>
    </Transition>
    <div :class="locationOrErr() ? 'error' : 'invisible'">
      There is no place with that name, please try another.
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { TLocation } from '@/utils/types'
import { debounce } from '@/utils/utils'
import { useLocationStore } from '@/stores/location'
import Api from '@/utils/api'
import { useWeatherStore } from '../stores/weather'

const { location, setLocation } = useLocationStore()

const { resetWeather } = useWeatherStore()

const input = ref('')
const availableLocations = ref<TLocation[]>([])
const isLoading = ref<Boolean>(false)

const autocomplete = async () => {
  availableLocations.value = []
  if (!input.value) return
  loading()
  availableLocations.value = await Api.searchLocation(input.value)
  loading()
}

const handleSelection = async (selectedLocation: TLocation) => {
  loading()
  resetWeather()
  await setLocation(selectedLocation)
  input.value = selectedLocation.name
  availableLocations.value = []
  loading()
}

const debouncedInput = debounce(autocomplete)

const loading = () => (isLoading.value = !isLoading.value)

const locationOrErr = () => {
  return !availableLocations.value.length && !isLoading.value && !input.value && !location
}
</script>

<style scoped lang="scss">
.search {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  padding: 50px 30px;
  min-height: 200px;

  &__bar {
    min-width: 20rem;

    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;

    &::placeholder {
      color: white;
      opacity: 50%;
    }

    &:focus {
      outline: none;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    min-width: 20rem;

    margin-top: 22px;
    padding: 10px 0px;

    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0px 0px 20px 20px;

    animation: fade-in 1s;

    .location {
      color: lightcyan;

      padding: 0px 10px;
      transition: color 0.5s;
      &:hover {
        cursor: pointer;
        color: rgb(62, 170, 35);
      }
    }
  }
  .error {
    color: lightcoral;
    animation: pulse 2s 1;
  }
}
</style>
@/utils/api
