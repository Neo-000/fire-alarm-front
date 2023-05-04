<script setup>
import { onMounted ,ref} from 'vue';
import {RouterView} from 'vue-router'
</script>
<template>
  <div class="app_wrapper">
    {{ data }}
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
