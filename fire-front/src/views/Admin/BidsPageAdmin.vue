<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted, watchEffect, onBeforeUnmount} from 'vue'
import {Iphone,Plus, DeleteFilled} from '@element-plus/icons-vue';
import {Bid} from '../../api/modules/bid.js';
import { ElMessageBox, ElMessage  } from 'element-plus';

const _bids = ref();
const bids = reactive(_bids)

const fetchBidsItems = async () =>{
    const [err, res] = await Bid.All({'_null':'0'})
        if(err == null){
            _bids.value = res.data.bids
            return true
        } else return false
}
const delete_all = async() => {
    const [err, res] = await Bid.Delete_all({'_null':'0'})
        if(err == null){
            fetchBidsItems()
            ElMessage({
                message: 'Успешно удалены все заявки',
                type: 'success',
            })
            return true
        } else return false
}
const deleteBidsByID = async(id) => {
    const [err, res] = await Bid.Delete({'_id':id})
        if(err == null){
            fetchBidsItems()
            ElMessage({
                message: 'Успешно удаленa заявка',
                type: 'success',
            })
            return true
        } else return false
}
let watchinterval;
onMounted( async () => {
    fetchBidsItems();
    watchinterval =  setInterval(() => {
        fetchBidsItems();
    }, 15000);
})
onBeforeUnmount( async () => {
    clearInterval(watchinterval)
})
</script>
<template>
    <div class="btn_group">
        <el-button 
        type="danger" 
        class="btn_del"
        @click="delete_all"
        > Удалить все</el-button>
    </div>
    <div class="bids">
        <div class="bids_card" v-for="item in bids">
            <div class="bids_card-header">
                <div class="bids_card-title">
                    {{ item.msg }}
                </div>
                <div class="bids_card-date">
                    Дата: {{ item.date }}
                </div>
                <el-button 
                type="danger" 
                plain
                @click="deleteBidsByID(item._id)"
                >
                    <el-icon><DeleteFilled /></el-icon>
                </el-button>
            </div>
            <div class="bids_card-footer">
                <div class="bids_card-name">
                    {{ item.name }}
                </div>
                <div class="bids_card-surname">
                    {{ item.surname }}
                </div>
                <div class="bids_card-phone">
                    +7{{ item.phone }}
                </div>
                <a :href="'tel:+7' + item.phone">
                <el-button type="success" plain>
                    <el-icon><Iphone /></el-icon>
                    <p class="btn_title">Позвонить</p>
                </el-button>
                </a>
                <el-button type="success" plain>
                    <el-icon><Plus /></el-icon>
                    <p class="btn_title">Создать заказ</p>
                </el-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.btn_title{
    @media (max-width:450px) {
        display: none;
    }
}
.btn_del{
}

.btn_group{
    padding: 10px;
    width: 100%;
    position: sticky;
    background: white;
    z-index: 100;
    top: 0;
}
.bids {
    width: 100%;
    padding: 10px;
    margin-bottom: 100px;

    &_card{
        width: 60%;
        margin-bottom: 10px;
        background: rgba(218, 175, 107, 0.122);
        border-radius: 4px;
        padding: 10px;
        @media (max-width:450px) {
            width: 100%;
        }
        &-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            
        }
        &-footer{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 13px;

        }
        &-title{
            font-weight: 600;
        }
        &-date{
            font-size: 10px;

        }
        &-name{
            
        }
        &-surname{

        }
        &-phone{

        }
    }
}


</style>