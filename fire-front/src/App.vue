<script setup>
import { onMounted ,ref} from 'vue';
import {RouterView} from 'vue-router';
import { Category } from './api/modules/category';
import { ElMessage } from 'element-plus';



</script>
<template>
  <div class="app_wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
