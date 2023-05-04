<template>
    <div class="services_view">
        <div class="services_view-content_left">
            <lLeftInfo />
            <LeftMenu @click="click"/>
        </div>
        <div class="services_view-content_right">
            <router-view :l="loader"></router-view>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import {ref} from 'vue'
import lLeftInfo from '../sidebars/lLeftInfo.vue';
import LeftMenu from '../sidebars/LeftMenu.vue';
const loader = ref(0)
function click(){
    return defineEmits(
    'update'
    )
}
</script>

<style scoped lang="scss">
    .services_view{
        width: 100%;
        height: 100%;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        @media (max-width:450px) {
            overflow: visible;
            // height: 100vh;
            padding: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }
        &-content_left{
            padding:10px ;
            width: 25%;
            min-width: 240px;
            flex-grow: 0;
            overflow-y: scroll;
            overflow-x: hidden;
            
            // border-right: 1px solid rgba(176, 176, 176, 0.623);
            @media (max-width:450px) {
                display: none;
            }
        }
        &-content_right{
            width: 70%;
            // height: 100%;
            // outline: 1px solid blue;
            overflow-y: auto;
            overflow-x: hidden;
            // background: black;
            // height: 400px;
            @media (max-width:450px) {
                width: 100%;

            }
        }
    }
</style>