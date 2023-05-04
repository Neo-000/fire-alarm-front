<template>
    <div class="services" v-for="item in menu">
        <router-link :to="'/client/services/' + item.id">{{ item.name }}</router-link>
    </div>
</template>
<script setup>
import bd from '../../../data/bd.json'
import { ref } from 'vue';

const menu = ref(bd.products)
</script>
<style scoped lang="scss">
.services{
    border-radius: 4px;
    box-shadow: -2px 0 1px rgba(163, 18, 18, 0.367);
    margin: 5px;
    width: 100%;
    &:hover{
        transition: all 0.2s ease-in-out 0s;
        box-shadow: -5px 0 1px rgba(163, 18, 18, 0.575);
    }
    a{
        display: block;
        width: 100%;
        height: 100%;
        padding: 5px;
        font-weight: bold;
        &:hover{
            color: rgba(129, 19, 19, 0.575);
        }
    }
}
</style>