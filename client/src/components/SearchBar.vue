<template>
  <section class="search">
    <input
      v-model="input"
      type="search"
      class="search__bar"
      placeholder="Search location"
      @input="debouncedInput"
    />
    <TransitionGroup name="list">
      <div v-if="availableLocations.length" class="container">
        <TransitionGroup name="list">
          <span v-for="location in availableLocations" :key="location.id" class="location">{{
            location.name
          }}</span>
        </TransitionGroup>
      </div>
      <span v-if="!availableLocations.length && !isLoading">There is no place with that name</span>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { apiUrl, debounce } from '@/utils/utils'
import { ref } from 'vue'

type Location = {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}

const input = ref('')
const availableLocations = ref<Location[]>([])
const isLoading = ref<Boolean>(false)

const autocomplete = async () => {
  availableLocations.value = []
  isLoading.value = true
  await fetch(apiUrl + 'extra/search/' + input.value)
    .then((res) => res.json())
    .then((data) => (availableLocations.value = data))
    .finally(() => (isLoading.value = false))
}

const debouncedInput = debounce(autocomplete)
</script>

<style scoped lang="scss">
.search {
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: flex-start;

  gap: 10px;
  padding: 50px 30px;
  min-height: 200px;

  &__bar {
    height: 30px;
    min-width: 20rem;

    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .location {
      color: lightcyan;
      &:hover {
        cursor: pointer;
        text-decoration: underline 1px wheat;
      }
    }
  }
}
</style>
