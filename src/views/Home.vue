<script setup>
import {RouterView, RouterLink} from 'vue-router'
</script>

<template>
  <div class="home">
    HOME
    <router-link to="/test"> перейти на ТЕСТ</router-link>
  </div>
</template>

<style scoped>
.home {
  background: #f6f6f6;
}
</style>