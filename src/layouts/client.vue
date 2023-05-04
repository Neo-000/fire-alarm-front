<script setup>
import {RouterView, RouterLink} from 'vue-router'
import { computed } from '@vue/runtime-core';
import HeaderClient from '../components/client/main/HeaderClient.vue'
import MenuHeader from '../components/client/main/MenuHeader.vue'
import FooterClient from '../components/client/main/FooterClient.vue';

</script>

<template>
    <div class="app_wrapper">
        <div class="app_wrapper_block">
            <HeaderClient/>
            <MenuHeader />
        </div>
        <div class="app_wrapper_content wrapper">
            <router-view></router-view>
        </div>
        <div class="app_wrapper_block">
            <FooterClient/>
        </div>
    </div>
</template>

<style scoped leng="scss">

</style>
