<template>
    <div class="header">
        <div class="header_wrap wrapper">
            <div class="header_block font_h1">
                <el-icon><UserFilled /></el-icon>
            Admin Panel
            </div>
            <div class="header_block btn_admin font_btn" v-if="props.login === 'true'">
                Настройки
                <el-icon><Tools /></el-icon>
            </div>
            <!-- {{ props.login }} -->
        </div>
    </div>
    <div class="stick"></div>
</template>
<script setup>
import{UserFilled , Tools} from '@element-plus/icons-vue'
import { ref } from 'vue'
const props = defineProps({
  login:''
})


</script>
<style scoped lang="scss">
    .header{
        width: 100%;
        padding: 20px;
        &_wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;        
             
         }

        &_block{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px 10px;
            i{
                width: 25px;
                height: 25px;
                margin: 0 10px;
                svg{
                    width: 100%;
                    height: 100%;
                    transition: transform 0.45s ease-in-out 0s;
                    // color: rgba(0, 0, 0, 0.366);

                }

            }
        }
    }
    .btn_admin:hover svg{
        transform: rotate(134deg);
    }
</style>