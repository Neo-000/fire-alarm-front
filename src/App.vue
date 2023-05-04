<script setup>
import {RouterView, RouterLink} from 'vue-router'
import { computed } from '@vue/runtime-core';

</script>

<template>
    <router-view></router-view>
</template>

<style scoped leng="scss">
    .app_wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }
    .grow{
        flex-grow: 1;
    }
</style>
