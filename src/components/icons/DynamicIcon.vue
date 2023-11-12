<template>
  <component :is="iconName + 'Icon'" />
</template>

<script lang="ts">
import CloudIcon from './CloudIcon.vue'
import HumidityIcon from './HumidityIcon.vue'
import PressureIcon from './PressureIcon.vue'
import WindIcon from './WindIcon.vue'

export default {
  props: { iconName: { type: String } },
  components: {
    CloudIcon,
    WindIcon,
    HumidityIcon,
    PressureIcon
  }
}
</script>

<style scoped></style>
