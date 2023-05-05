<script setup>
import ClientHeader from '@/components/ClientHeader.vue';
import ClientFooter from '@/components/ClientFooter.vue';
import MenuClientHeader from '../components/MenuClientHeader.vue';
</script>

<template>
  <div class="app_layout">
    <div class="header_layout">
      <ClientHeader></ClientHeader>
      <MenuClientHeader></MenuClientHeader>
    </div>
    <div class="content_layout">
    </div>
    <div class="footer_layout">
      <ClientFooter></ClientFooter>
    </div>

  </div>
</template>

<style scoped>

</style>
