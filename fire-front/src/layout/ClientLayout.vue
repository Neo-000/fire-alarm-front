<script setup>
import ClientHeader from '@/components/ClientHeader.vue';
import ClientFooter from '@/components/ClientFooter.vue';
import MenuClientHeader from '../components/MenuClientHeader.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="app_layout">
    <div class="header_layout">
      <ClientHeader></ClientHeader>
      <MenuClientHeader></MenuClientHeader>
    </div>
    <div class="content_layout">
      <router-view></router-view>
    </div>
    <div class="footer_layout">
      <ClientFooter></ClientFooter>
    </div>

  </div>
</template>

<style scoped>
  .app_layout{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .header_layout{
    position: relative;
    width: 100%;
    z-index: 100;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.304);
    padding-bottom: 10px;
  }
  .content_layout{
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 60%;
    width: 100%;
    flex: 1 0 auto;
    z-index: 50;
  }
  .footer_layout{
    position: relative;
    background: grey;
    width: 100%;
    flex: 0 0 auto;
    z-index: 60;
  }
</style>
