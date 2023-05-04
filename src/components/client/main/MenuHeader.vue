<template>
    <div class="menu wrapper">
        <div class="menu_header">
            <div 
            @click="Burger_Menu"
            :class="class_btn + ' ' + 'menu_btn_burger'"
            id="menu_btn_burger">
            <span></span>
            </div>
            <ul :class="'menu_header-block ' + block_menu ">
                <li><router-link 
                    to="/"
                    @click="Burger_Menu"
                    >Главная
                </router-link>
            </li>
                <li id="submenu">
                    <span @click="menuDrop" class="subSpan">
                        Услуги
                        <el-icon>
                            <ArrowUp :class="arrow"/>
                        </el-icon>
                    </span>
                    <ul 
                    :class="'submenu ' + class_submenu"
                    @click="menuDropli"
                    >
                    <ClientServices/>
                    </ul>
                </li>
                <li><router-link
                    @click="Burger_Menu"
                    to="/about">
                    О нас
                    </router-link>
                </li>
                <li><router-link 
                    @click="Burger_Menu"
                    to="/reviews">
                    Отзывы
                    </router-link>
                </li>
            </ul>


        </div>
        <div class="search">
            <el-input
            v-model="input1"
            class="w-50 m-1"
            size="large"
            placeholder="Поиск"
            :prefix-icon="Search"
            />
        </div>  
    </div>
    <div class="stick"></div>
</template>
<script setup>
import ClientServices from './ClientServices.vue';
import {RouterLink} from 'vue-router'
import { ref } from 'vue'
import{ArrowUp,ArrowDown,Search} from '@element-plus/icons-vue'

const input1 = ref('')

const arrow = ref('down')
const class_submenu = ref('disabled')
const class_btn = ref('disabled')
const block_menu = ref('disabled')
function menuDropli(){
    if(class_submenu.value == 'disabled'){
        class_submenu.value = 'submenu_active'
        arrow.value = 'up'
    } else {
        class_submenu.value = 'disabled'
        arrow.value = 'down'
    }
    Burger_Menu()
}
function menuDrop(){
    if(class_submenu.value == 'disabled'){
        class_submenu.value = 'submenu_active'
        arrow.value = 'up'
    } else {
        class_submenu.value = 'disabled'
        arrow.value = 'down'
    }
}
function Burger_Menu(){
    if(class_btn.value== 'active'){
        class_btn.value = 'disabled'
        block_menu.value = 'disabled'
    } else{
        class_btn.value = 'active'
        block_menu.value ='active_block'
    }
}

</script>

<style scoped lang="scss">
    .up{
        margin-left: 2px;
    }
    .down{
        margin-left: 2px;
        transform: rotate(180deg);
    }
    #submenu{
        // position: relative;
    }
    .submenu{
        display: block;
        padding: 20px 10px;
        border-radius: 10px;
        position: absolute;
        // left: -20px;
        // width: 550%;
        background: rgba(255, 255, 255, 0.881);
        backdrop-filter: blur(4px);
        box-shadow: 1px 1px 2px rgb(149, 149, 149);
        transition: transform 0.4s ease 0s;
        transition: opacity 1s ease-in-out;
        transform:translateY(-500%);
        z-index: 10;
        opacity: 0;
        li{
            padding: 5px;
        }
        // transform:scaleY(0);
        &-item{
            &-title{
                font-weight: 800;
            }
            &-links{
                padding: 5px;
            }

            .router-link {
            }
        }
        
        @media (max-width:450px) {
            backdrop-filter: none;
            background: transparent;
            transform: translate(-200%);
            transform: scaleY(0);
            height: 0;
            padding: 0;
            opacity: 1;
            position: static;
            display: flex;
            align-items: left;
            flex-direction: column;
            width: 100%;
            box-shadow: none;
        }
    }

    span.subSpan{
                display: flex;
                align-items: center;
            }
    @media (max-width:450px) {
        span.subSpan{
                // display: block;
                // width: 100%;
                text-align: left;
                margin: 0 auto;
                display: flex;
                align-items: center;
            }
    }
    
    .submenu_active{
        transition: opacity 0.3s ease-in-out 0s;
        transform:translateY(0%);
        transform:scaleY(1);
        opacity: 1;
        z-index: 100;
        @media (max-width:450px) {
            transform: translate(-3%);
            transform: scaleY(1);
            height: auto;
            padding: 5px;
            & li{
                padding: 5px;
                font-size: 15px;
                // box-shadow: 0px 0px 2px rgb(255, 255, 255) !important;
                border-radius: 10px;
                margin: 5px 0;
                
            }
        }
    }
    .menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        @media (max-width:450px) {
            flex-direction: row-reverse;
            padding: 5px 10px;

        }
    }
    .menu_btn_burger{
        // display: block;
        display: none;
        @media (max-width:450px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 20px;
        z-index: 30;
        span{
            position: relative;
            width: 90%;
            height: 5px;
            border-radius: 10px;
            background: rgb(67, 67, 67);
            &::after, &::before{
                position: absolute;
                content:'';
                width: 100%;
                height: 100%;
                background: rgb(67, 67, 67);
                border-radius: 10px;
            }
            &::after{
                transition: all 0.5s ease-in-out 0s;
                transform: translateY(10px);
                
            }
            &::before{
                transition: all 0.5s ease-in-out 0s;
                transform: translateY(-10px);
            }
        }  
        }
    }
    .active{
        position: fixed;
        // top: 20px;
        // right: 20px;
        z-index: 30;
        span{
            transition: all 0.2s ease-in-out 0s;
            background: transparent;
            &::after{
                transition: all 0.2s ease-in-out 0s;
                transform: rotate(-45deg);
                top: 0px;
                background: red;
                
            }
            &::before{
                transition: all 0.2s ease-in-out 0s;
                top: 0px;
                transform: rotate(45deg);
                background: red;
            }  
        }
    }

    .menu_header{
        user-select: none;
        width: 40%;
        display: flex;
        justify-content: space-between;
        z-index: 20;
        @media (max-width:450px) {
            position: relative;
            width: 12%;
            align-items: center;
        }
        a{
            text-decoration: none;
            color: black;
            &:hover{
                color: red;
            }
        }
        a, span{
            cursor: pointer;
        }
    }

    .active_block{
        transform: translateX(0%) !important;
        transition: all 0.5s ease-in-out;
    }
    .menu_header-block{
        display: flex;
        width: 100%;
        justify-content: space-between;
        @media (max-width:450px) {
            transition: all 0.5s ease-in-out;
            position: fixed;
            top: 160px;
            left: 0%;
            transform: translateX(102%);
            overflow-y: scroll !important;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.741);
            backdrop-filter: blur(10px);
            width: 100%;
            height: calc(100vh - 160px);
            align-items: left;
            justify-content: flex-start;
            padding: 10px;
            li{ 
                width: 100%;
                padding: 10px;
                font-size: 20px;
                box-shadow: 0px 0px 2px 1px rgba(10, 10, 10, 0.308);             border-radius: 10px;
                margin: 5px 0;
                a{
                    display: block;
                    color: rgb(0, 0, 0);
                    width: 100%;
                }
                span{
                    color: rgb(0, 0, 0);
                    display: flex;
                    width: 100%;
                }
                
            }
        }
        
    }

</style>