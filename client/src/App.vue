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
  grid-template-columns: 60% 40%;
}
.snow {
  background-size: cover;
  background-image: url('@/assets/background/snow.jpeg');
}
</style>
