<template>
  <section class="search">
    <input
      v-model="input"
      type="search"
      class="search__bar"
      placeholder="Search location"
      @input="debouncedInput"
    />
    <div>
      <div v-if="isLoading">loading...</div>
      <div v-else>{{ availableLocations }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { apiUrl, debounce } from '@/utils/utils'
import { ref } from 'vue'

const input = ref('')
const availableLocations = ref([])
const isLoading = ref<Boolean>(false)

const autocomplete = async () => {
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
}
</style>
