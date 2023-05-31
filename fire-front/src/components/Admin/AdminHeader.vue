<script setup>
import { RouterLink } from 'vue-router';
import {Avatar} from '@element-plus/icons-vue';

</script>
<template>
    <div class="admin_header">
        <p class="admin_header-title">
            Панель Администратора
            <span class="admin_header-logo">
            <el-icon><Avatar /></el-icon>
            </span>
        </p>
            <router-link to="/">
                <el-button type="success">
            К клиентской части
            </el-button>
        </router-link>
    </div>
</template>
<style scoped lang="scss">
    .admin_btn{
        padding: 5px 10px;
        border-radius: 3px;
        background: rgba(72, 214, 72, 0.497);
        color: rgba(128, 128, 128, 0.929);
        &:hover{
            background: rgba(16, 161, 16, 0.736);
            color: rgb(237, 234, 234);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.307);
        }
    }
    .admin_header{
        &-title{
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width:450px) {
                justify-content: flex-start;
                font-size: 12px;
            }
        }
        &-logo{
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background: rgba(0, 0, 0, 0.652);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            margin-left: 20px;
            @media (max-width:450px) {
                margin-left: 5px;
            }
        }
        display: flex;
        align-items: center;
        width: 100%;
        padding: 5px;
        justify-content: space-between;
    }

</style>