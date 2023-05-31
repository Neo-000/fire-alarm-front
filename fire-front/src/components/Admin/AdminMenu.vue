<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted, watchEffect} from 'vue'
import {Promotion, Finished, Menu, Histogram} from '@element-plus/icons-vue';
import {Bid} from '../../api/modules/bid.js';
import {Orders} from '../../api/modules/orders.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const _orders_items = ref(0);
const orders_items = reactive({_orders_items});
const _bids_items = ref(0);
const bids_items = reactive({_bids_items});

const fetchBidsItems = async () =>{
    const [err, res] = await Bid.All({'_null':'0'})
        if(err == null){
            _bids_items.value = res.data.items
            return true
        } else return false
}
const fetchOrdersItems = async () =>{
    const [err, res] = await Orders.all({'_null':'0'})
        if(err == null){
            _orders_items.value = res.data.items;
            return true
        } else return false
}
onMounted( async () => {
    // fetchBidsItems()
    // fetchOrdersItems()
})
watchEffect( async () => {
    let o = route.path;
    fetchBidsItems()
    fetchOrdersItems()
}
)

</script>
<template>
    <div class="menu">
        <router-link to="/admin/bids" class="menu_item rd">
            <el-icon><Promotion /></el-icon>
            <p class="link_title">Заявки</p>
            <div class="round">
                {{ bids_items._bids_items }}
            </div>
        </router-link>
        <router-link to="/admin/orders" class="menu_item rd">
            <el-icon><Finished /></el-icon>
            <p class="link_title">Активные заказы</p>
            <div class="round">
                {{ orders_items._orders_items }}
            </div>
        </router-link>
        <router-link to="/admin/catalog" class="menu_item rd">
            <el-icon><Menu /></el-icon>
            <p class="link_title">Каталог</p>
        </router-link>
        <router-link to="/admin/analitics" class="menu_item rd">
            <el-icon><Histogram /></el-icon>
            <p class="link_title">Аналитика</p>
        </router-link>
    </div>
</template>
<style scoped lang="scss">
.rd{
    position:relative;
}
.round{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #666666bb;
    color: white;
    // position: absolute;
    top: 2px;
    right: 2px;
    font-weight: 900;
    font-size: 10px;
    z-index: 100;
    @media (max-width:450px) {
        position: absolute;
    }
}
.menu{
    @media (max-width:450px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .link_title{

        @media (max-width:450px) {
            display: none;
            
        }
    }
    &_item{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgb(255, 163, 87);
        padding: 10px;
        width: 100%;
        color: rgba(255, 255, 255, 0.782);
        border-radius: 3px;
        &:hover{
            background:rgb(248, 140, 51) ;
        }
        @media (max-width:450px) {
            width: 55px;
            height: 55px;
            justify-content: center;
            margin: 0 5px;
        }
        :deep(.el-icon){
            width: 20px;
            height: 20px;
            @media (max-width:450px) {
            width: 50px;
            height: 50px;
        }
            & svg{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>