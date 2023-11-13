<script setup lang="ts">
const currBackground = 'snow.jpg'
</script>

<template>
  <div class="wrapper snow">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 68% 32%;
  height: 100vh;
}
.snow {
  background-size: cover;
  background-image: url('@/assets/background/snow.jpeg');
}
</style>
