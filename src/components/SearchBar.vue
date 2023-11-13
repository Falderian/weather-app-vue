<template>
  <section class="search">
    <input
      v-model="input"
      type="text"
      :class="`search__bar ${inputClasses}`"
      :placeholder="'Search location'"
      autofocus="true"
      @input="debouncedInput"
    />
    <Transition name="list">
      <div v-if="availableLocations.length" class="container fade-out">
        <span
          v-for="location in availableLocations"
          :key="location.name"
          @click="handleSelection(location)"
          class="location"
          >{{ location.name + ', ' + (location.region || location.country) }}</span
        >
      </div>
    </Transition>
    <div :class="hasError ? 'error' : 'invisible'">
      There is no place with that name, please try another.
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { ILocation } from '@/utils/types'
import { debounce } from '@/utils/utils'
import Api from '@/utils/api'
import { useLocationStore } from '@/stores/location'

const { setLocation, resetLocation } = useLocationStore()

const input = ref('')
const hasError = ref(false)
const availableLocations = ref<ILocation[]>([])
const isLoading = ref<Boolean>(false)

const inputClasses = computed(() => {
  if (isLoading.value) return 'anim-pulse'
  if (!input.value) return 'anim-focus'
  return ''
})

const autocomplete = async () => {
  availableLocations.value = []
  if (!input.value) return
  loading()
  availableLocations.value = await Api.searchLocation(input.value)
  hasError.value = locationOrErr()
  loading()
}

const handleSelection = async (selectedLocation: ILocation) => {
  loading()
  resetLocation()
  await setLocation(selectedLocation)
  input.value = selectedLocation.name
  availableLocations.value = []
  loading()
}

const debouncedInput = debounce(autocomplete)

const loading = () => (isLoading.value = !isLoading.value)

const locationOrErr = () => !(availableLocations.value.length && input.value && isLoading)
</script>

<style scoped lang="scss">
.search {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  padding-top: 1rem;

  &__bar {
    min-width: 100%;

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

  .selected {
    border-bottom: 1px solid greenyellow;
  }
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;

    min-width: calc(100% - 4rem);

    margin-top: 24px;
    padding: 0.5rem 0px;

    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0px 0px 1rem 1rem;

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
