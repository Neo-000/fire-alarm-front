<script setup>
import bd from '../../../data/bd.json'
import { ref } from 'vue'
import {Plus, Phone, DeleteFilled} from '@element-plus/icons-vue'
const request = ref(bd.request)

</script>
<template>
    <div class="request">
        <div class="reqCard" v-for="item, index in request">
            <div class="reqCard-title">
                <p class="reqCard-title_text">Новая заявка на сайте</p>
                <p class="reqCard-title_date font_min">{{ item.date }}</p>
            </div>
            <div class="reqCard-content">
                <div class="reqCard-content_name"><span class="item">Имя: </span>{{ item.name }}</div>
                <div class="reqCard-content_phone"><span class="item">Телефон: </span>{{ item.phone }}</div>
                <div class="btn_block">
                    <a class="reqCard-content_btn btn-def " :href="'tel:' + item.phone">
                        <el-icon><Phone /></el-icon>
                        <span class="text">Позвонить</span>
                    </a>
                    <div class="reqCard-content_btn btn-def">
                         <el-icon><Plus /></el-icon>
                        <span class="text">Создать заказ</span>
                    </div>
                    <div class="reqCard-content_btn btn">
                    <el-icon><DeleteFilled /></el-icon>
                </div>
                </div>
            </div>
        </div>
        <div class="stick_admin"></div>
        <!-- {{ request }} -->
    </div>
</template>

<style scoped lang="scss">
.text{
    padding: 0 5px;
    @media (max-width:450px) {
                display: none;
            }
}
.btn_block{
    width:40%;
    display: flex;
    justify-content: space-between;
    @media (max-width:450px) {
        justify-content: flex-start;
        padding: 10px 0;
        width: 100%;
    }
}
.request{
    width: 100%;
    height: calc(100vh + 20vh);
    padding: 10px;
    // margin-bottom:50px;
    @media (max-width:450px) {
        padding: 10 0px;
        // padding-bottom: 60px;
    }
}
.reqCard{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(128, 128, 128, 0.456);
    margin: 10px;
    @media (max-width:450px) {
        margin: 20px 0;
        padding: 5px;
        
    }
    &-title{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        @media (max-width:450px) {
            justify-content: space-between;
            // flex-direction: column;
            // align-items: flex-start;
        }
        &_text{
            color: rgba(128, 128, 128, 0.645);
            margin-right: 20px;
        }
        &_date{
            color: rgb(102, 102, 102);
            letter-spacing: 0.2rem;
            // font-weight: 900;
        }
    }
    &-content{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 5px 20px;
        @media (max-width:450px) {
            flex-direction: column;
            width: 100%;
            padding: 10px 5px;
        }
        &_name, &_phone{
            border-radius: 5px;
            // box-shadow:  0px 0px 2px rgba(0, 0, 0, 0.14);
            // border: 1px solid rgba(0, 0, 0, 0.138);
            margin: 5px;
            padding: 5px 10px;
            width: 20%;
            text-align: flex-start;
            // font-weight: 200;
            @media (max-width:450px) {
                width: 100%;
            }
            
        }
        &_name{

        }

        &_btn{
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width:450px) {
                padding: 10px 20px;
                font-size: large;
                margin: 5px;
            }

        }
    }
}
</style>