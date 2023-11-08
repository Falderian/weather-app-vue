<template>
  <section class="container">
    <section class="header">
      <MainLogo />
    </section>
    <WeatherView />
  </section>
  <SideBar />
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import WeatherView from '@/views/WeatherView.vue'
import MainLogo from '@/components/icons/MainLogo.vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  padding: 2rem 0 0 4rem;
}
.header {
  display: flex;
  align-items: center;

  gap: 10rem;
}
</style>
