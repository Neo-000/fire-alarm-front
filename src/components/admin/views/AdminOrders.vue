<script setup>
import bd from '../../../data/bd.json'
import {Plus, Phone, DeleteFilled} from '@element-plus/icons-vue'
import { ref } from 'vue'

const orders = ref(bd.orders)

</script>
<template>
    <div class="orders">
        <div class="orders_add">
            Добавить новый заказ
            <div class="btn">
                <el-icon><Plus /></el-icon>
            </div>
        </div>
        <div class="cards">
            <div class="orders_card" v-for="item in orders">
                <div class="orders_card-title">
                    <span class="font_h2">{{ item.title }}</span>
                    <div class="btn">
                        <el-icon><DeleteFilled /></el-icon>
                    </div>
                </div>
                <div class="orders_card-body">
                    <div class="orders_card-body_item order-name">
                        <span>Дата: </span>{{ item.date }}
                    </div>
                    <div class="orders_card-body_item order-name">
                        <span>Имя: </span>{{ item.name }}
                    </div>
                    <div class="orders_card-body_item order-phone">
                        <span>Телефон: </span>{{ item.phone }}
                    </div>
                    <div class="orders_card-body_item order-object">
                        <span>Обьект: </span>{{ item.object }}
                    </div>
                    <div class="orders_card-body_item order-price">
                        <span>Сумма: </span>{{ item.price }} руб.
                    </div>
                </div>
                <div class="order_btn">
                    <a class="order_btn-i" :href="'tel:' + item.phone">Позвонить</a>
                    <div class="order_btn-i fill">Выполнено</div>
                </div>
            </div>
        </div>
        <div class="stick_admin"></div>
    </div>
</template>
<style scoped lang="scss">

    .order_btn{
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        &-i{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid green;
            user-select: none;
            color: rgb(8, 85, 8);
            font-weight: bold;
            &:hover{
                box-shadow: 0 0 2px rgba(0, 128, 0, 0.638);
            }
            &:active{
                box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.503);
            }
            

        }
        .fill{
            background: rgb(10, 176, 10);
            color: white;
        }
    }
    .el-icon{
        width: 100%;
        height: 100% ;
        svg{
            width: 100%;
            height: 100%;
        }
    }
    .orders_add{
        user-select: none;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.347);
        background: white;
        padding: 10px;
        border-radius: 5px;
        width: 20%;
        max-width: 350px;
        min-width:300px;
        transition: background 0.3 ease-in-out 0s;
        @media (max-width:450px) {
            width: 100%;
            max-width: none;
            min-width: none;
            margin: 0;
        }

        div.btn{
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border:1px solid rgb(48, 180, 48);
            background: rgb(48, 180, 48);
            color: white;
            padding: 7px;
            @media (max-width:450px) {
            width: 30px;
            height: 30px;
        }
        }
        &:hover {
            transition: all .3 ease-in-out 0s;
            color: rgb(12, 117, 1);
            text-shadow: 0 0 1px rgba(0, 0, 0, 0.237);
            box-shadow: 0 0 5px rgb(10, 104, 0);
            div.btn{
                // background: white;
                // color: green;
                box-shadow: 0 0 4px rgba(0, 0, 0, 0.414);
            }
        }
        &:active {
            transition: all .3 ease-in-out 0s;
            color: rgb(12, 117, 1);
            text-shadow: 0 0 1px rgba(0, 0, 0, 0.237);
            box-shadow:inset 0 0 5px rgb(10, 104, 0);
            div.btn{
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.414);
            }
        }
        
    }

    .orders{
        padding: 10px;
        .cards{
            padding: 10px 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &_card{
            padding: 10px;
            width: 30%;
            min-width: 300px;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.305);
            border-radius: 5px;
            // margin: 10px;
            margin-bottom: 10px;
            @media (max-width:450px) {
                width: 100%;
            }
            &:hover{
                box-shadow: 0 0 5px rgba(12, 148, 23, 0.762);
            }
            .btn{
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            i.el-icon{
                width: 20px;
                height: 20px;
                
            }
            

            &-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    font-weight: 700;
                }
                
            }
        }
    }
</style>