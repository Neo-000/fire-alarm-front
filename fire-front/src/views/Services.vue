<script setup>
import { ref , computed , reactive, onMounted, onBeforeUpdate, onBeforeMount, watchEffect, toRefs} from 'vue';
import { useRoute } from 'vue-router';
import {Category}  from '../api/modules/category.js';
import{Services} from '../api/modules/services.js';
import {DArrowLeft, DArrowRight} from '@element-plus/icons-vue';
const route = useRoute();
const id = ref();
const ListItem = ref();
const configPagination = ref({
    NumberOfPage:0,
    min:0,
    max:5
})



const data = ref({
    category_name:'',
    services:[],
    services_value:[],
    item:Number
})

async function GetCategoryName () {
    const [err, res] = await Category.Name({'_id':id.value});
    return res
}
async function GetServicesId () {
    const [err, res] = await Category.GetServices({'_id':id.value});
    return res
}
async function GetServicesById (id) {
    const [err, res] = await Services.GetById({'_id':id});
    return res
}

const fetchViewServices = async () =>{
    const items = data.value.item
    for (let i = 0; i < items; i++) {
        let views = GetServicesById(data.value.services[i]);
        const services =  views.then(
        res =>{
          data.value.services_value[i] = res.data;
          return res
        },
        err => {return err}
      );
    }
}
const fetcnCategories = async () =>{
  let name = GetCategoryName();
  const category_name =  name.then(
        res =>{
          data.value.category_name = res.data
          return res
        },
        err => {return err}
      );
}
const fetchServices = async () =>{
  let services = GetServicesId();
  const services_id =  services.then(
        res =>{
            console.log(res)
        if(res != null && res != '' && res != undefined){
            data.value.services = res.data.services;
            data.value.item = res.data.item;
            if(data.value.services != undefined && data.value.services != null){
                fetchViewServices()
            }
        }else {
            data.value.services = null;
            data.value.item = 0;
            data.value.services_value = [];
        }
          return res
        },
        err => {return err}
      );
}

const fetchall = async () => {
    await fetcnCategories();
    await fetchServices();
}








onBeforeMount( async () => {
    await fetchall()
})

watchEffect( async () => {
id.value = route.params.id;
    await fetchall()
}
)
</script>

<template>
    <div class="services wrapper">
        <div class="left_sidebar">
            <p>ListItem : {{ ListItem }}</p>
            <p>svsdfsd</p>
        </div>
        <div class="services_view">
            <div class="services_view-title font--h1">{{data.category_name }}</div>
            <div class="services_view-content">

                <div class="services_view-content-block err" v-if="data.services == null">
                    <!-- <p>В этой категории пока что нет услуг</p> -->
                    <div class="err-img"></div>
                </div>
                <div class="services_view-content-block" v-if="data.services != null">
                <div class="product_card" v-for="item in data.services_value.slice(configPagination.min,configPagination.max)">
                    <p class="product_card-name">{{ item.name}}</p>
                    <p class="product_card-price" 
                    v-if="item.price != null && item.price != undefined && item.price !=''"
                    >
                        {{ item.price }} руб
                    </p>
                    <p class="product_card-price" 
                    v-if="item.price == null || item.price == undefined || item.price ==''"
                    >
                        Узнать подробнее
                    </p>
                </div>
                <div class="pagination">
                    <div class="pagination_btn"><el-icon><DArrowLeft /></el-icon> Назад</div>
                    <div class="pagination_btn">Далее <el-icon><DArrowRight /></el-icon></div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product_card{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid rgb(239, 199, 199);
    border-image-slice: 1;
    border-width: 1px;
    border-left-width: 5px;
    border-left-color: #E74C3C;
    margin: 5px 2px;
    border-radius: 4px;
    @media (max-width:450px) {
        flex-direction: column;
        width: 45%;
        }
    &-name{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // background:grey ;
        width: 40%;
        @media (max-width:450px) {
            width: 100%;
        }
    }
    &-price{
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid #E74C3C;
        background: #E74C3C;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        color: white;
        width: 30%;
        @media (max-width:450px) {
            width: 100%;
        }

    }
}
.err{
    &-img{
        width: 320px;
        height: 150px;
        background: url('../assets/img/nonServices.svg') no-repeat;
        background-position: center center;
        background-size: contain;
    }
}
.services{
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.left_sidebar{
    width: 30%;
    background: rgba(194, 194, 194, 0.578);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    p{
        padding: 20px;
        height: 120px;
    }
    @media (max-width:450px) {
        display: none;
    }

}
.services_view{
    width: 70%;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
    padding: 10px;
    padding-bottom: 60px;
    @media (max-width:450px) {
        width: 100%;
    }
    &-title{
        padding: 5px;
        margin-bottom: 4px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.153);
        width: 100%;
        color: rgb(152, 44, 44)(146, 38, 38);
    }
    &-content{
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;

    &-block{
        @media (max-width:450px) {
            display: flex;
            flex-wrap: wrap;
        }
    }
    }

}
</style>