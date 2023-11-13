<template>
  <component :is="iconName + 'Icon'" />
</template>

<script lang="ts">
import CloudIcon from './CloudIcon.vue'
import HumidityIcon from './HumidityIcon.vue'
import PressureIcon from './PressureIcon.vue'
import WindIcon from './WindIcon.vue'
import ThermometerIcon from './ThermometerIcon.vue'
import SunriseIcon from './SunriseIcon.vue'
import SunsetIcon from './SunsetIcon.vue'
import RainIcon from './RainIcon.vue'
import SnowIcon from './SnowIcon.vue'

export default {
  props: { iconName: { type: String } },
  components: {
    CloudIcon,
    WindIcon,
    HumidityIcon,
    PressureIcon,
    ThermometerIcon,
    SunriseIcon,
    SunsetIcon,
    RainIcon,
    SnowIcon
  }
}
</script>

<style scoped></style>
