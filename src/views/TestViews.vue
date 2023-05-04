<script setup>
import {RouterView, RouterLink} from 'vue-router'
import{ref, computed, reactive, onMounted} from 'vue'
import {TestApi} from '@/api/service/test'

const fetch = (() =>{
    console.log(TestApi.getTest())
})
onMounted(() => {
    fetch();
})
// const data = reactive({
//     el: serv.fetchPosts
// })
</script>

<template>
  <div class="test">
    TEST VIEWS
    <!-- {{ serv }} -->
    <router-link to="/"> главная</router-link>
  </div>
</template>

<style scoped>
.test {
  background: #f6f6f6;
}
</style>