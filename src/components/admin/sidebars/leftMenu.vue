<template>
    <div class="LeftMenu">
        <router-link 
            to="/admin/request"
            class="LeftMenu_item round_item"
        >
            <div class="LeftMenu_item-text">Заявки</div>
            <div class="LeftMenu_item-icon"><el-icon><Message /></el-icon></div>
            <div class="round">{{ notification }}</div>
        </router-link>
        <router-link 
            to="/admin/orders"
            class="LeftMenu_item"
        >
            <div class="LeftMenu_item-text">Активные заказы</div>
            <div class="LeftMenu_item-icon"><el-icon><Star /></el-icon></div>
        </router-link>
        <router-link 
            to="/admin"
            class="LeftMenu_item"
        >
            <div class="LeftMenu_item-text">Все категории</div>
            <div class="LeftMenu_item-icon"><el-icon><Menu /></el-icon></div>
        </router-link>
        <router-link 
            to="/admin"
            class="LeftMenu_item"
        >
            <div class="LeftMenu_item-text">Услуги</div>
            <div class="LeftMenu_item-icon"><el-icon><List /></el-icon></div>
        </router-link>
        <router-link 
            to="/admin"
            class="LeftMenu_item"
        >
            <div class="LeftMenu_item-text">Редактор</div>
            <div class="LeftMenu_item-icon"><el-icon><Edit /></el-icon></div>
        </router-link>
        <router-link 
            to="/admin"
            class="LeftMenu_item"
        >
            <div class="LeftMenu_item-text">Статистика</div>
            <div class="LeftMenu_item-icon"><el-icon><Histogram /></el-icon></div>
        </router-link>

    </div>
</template>
<script setup>
import bd from '../../../data/bd.json'
import { ref } from 'vue'
import {RouterLink} from 'vue-router'
import {Message, Star, Menu, List, Edit, Histogram} from '@element-plus/icons-vue'

const notification = ref(bd.request.length)
</script>
<style lang="scss" scoped>

.round_item{
    position:relative;
}
.round{
    position: absolute;
    top: -8px;
    right: -15px;
    background: rgb(37, 217, 37);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 10px 15px;
    border-radius: 100%;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.344);
}



.LeftMenu{
    width: 100%;
    padding: 0 20px 0 0;
    // border:1px solid blue;
    // height: 100%;

    @media (max-width:450px) {
                height: auto;
                position: fixed;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: white;
                padding: 10px 0;
                left: 0;
                bottom: 0;
                // border-top: 1px solid rgba(0, 0, 0, 0.13);
                box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.162);
                overflow-x: auto;

                &::-webkit-scrollbar {
                    // width: 1px;
                    height: 1px;
                    position: absolute;
                }

                &::-webkit-scrollbar-track {
                    background-color: rgb(11, 11, 11);
                    position: absolute;
                    
                }

                &::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.507);
                    border-radius: 20px;
                    position: absolute;
                }
            }
    
    &_item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.155);
        margin: 10px 0;
        transition: all 0.2s ease-in-out 0s;
        @media (max-width:450px) {
                justify-content: center;
                margin: 0;
                padding: 5px;
                margin: 0 5px;
            }
        &:active{
            transition: all 0.2s ease-in-out 0s;
            background: rgb(237, 162, 134);
        
                color: white !important;
                svg{
                    transition: all 0.2s ease-in-out 0s;
                    color: white;
                }
            
        }
        &-text{

            @media (max-width:450px) {
                display: none;
            }
        }
        &-icon{
            width: 30px;
            height: 30px;
            .el-icon{
                width: 100%;
                height: 100%;
                color: rgb(199, 113, 73);
                svg{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

</style>