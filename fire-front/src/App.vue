<script setup>
import { onMounted ,ref} from 'vue';
import {RouterView} from 'vue-router';
import { Category } from './api/modules/category';
const category = new Category();
// const data = {
//   name:'categ1'
// }
// onMounted(async () => {
//   category.Create(data)
// })
</script>
<template>
  <div class="app_wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
