<template>
  <div>Tips</div>
</template>

<script setup lang="ts">
import type { IWeather } from '@/utils/types'

const {
  weather: { forecast }
} = defineProps<{ weather: IWeather }>()
</script>

<style scoped></style>
