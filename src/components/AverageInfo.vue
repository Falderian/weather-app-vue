<template>
  <section class="container">
    <div v-for="item in data" :key="item.value" class="container__item">
      <DynamicIcon :icon-name="item.icon" :fill="item.fill" />
      <span :class="`${item.value > '70%' && 'warning'}`">{{ item.value }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import DynamicIcon from './icons/DynamicIcon.vue'

type TData = { icon: string; value: string | number; fill?: string }[]

const { data } = defineProps<{ data: TData }>()
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  gap: 0.5rem;

  &__item {
    display: flex;
    align-items: center;

    padding: 0.3rem;
    gap: 0.3rem;
  }

  &__item::before {
    content: '';
    left: 0;
    bottom: 0;
    height: 80%;
    width: 1px; /* or 100px */

    border-left: 1px solid lightgreen;
  }

  &__item:last-child::after {
    content: '';
    right: 0;
    bottom: 0;
    height: 80%;
    width: 1px; /* or 100px */

    border-right: 1px solid lightgreen;
  }

  .warning {
    border-bottom: 2px solid yellow;
  }
}
</style>
