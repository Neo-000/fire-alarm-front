<script setup>
import {RouterView, RouterLink} from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView name="default" />
  </div>
</template>

<style scoped>
.app {
  background: #f6f6f6;
}
</style>