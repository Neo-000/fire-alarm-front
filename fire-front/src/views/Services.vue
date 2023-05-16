<script setup>
import { ref , computed , reactive, onMounted, onBeforeUpdate, onBeforeMount, watchEffect, toRefs} from 'vue';
import { useRoute } from 'vue-router';
import {Category}  from '../api/modules/category.js';
import{Services} from '../api/modules/services.js';
import {DArrowLeft, DArrowRight} from '@element-plus/icons-vue';
const route = useRoute();
const new_data = ref({
    _id:'',
    _name:'',
    _items:[],
    _data:[]
})
let data= reactive({});
data = new_data;



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
    for (let i = 0; i < 10; i++) {
        let views = GetServicesById(id);
        const services =  views.then(
        res =>{
        },
        err => {return err}
      );
    }
}
const fetcnCategories = async () =>{
  let name = GetCategoryName();
  const category_name =  name.then(
        res =>{
        },
        err => {return err}
      );
}
const fetchServices = async () =>{
  let services = GetServicesId();
  const services_id =  services.then(
        res =>{
        },
        err => {return err}
      );
}

const fetchall = async () => {
    console.log('fetchall')
}








onMounted( async () => {
    // await fetchall()
})

watchEffect( async () => {
new_data.value._id = route.params.id;
console.log(data)
console.log(new_data)
await fetchall()
}
)


</script>

<template>
    <div class="services wrapper">
        <div class="left_sidebar">

        </div>
        <div class="services_view">
            <div class="services_view-title font--h1"></div>
            <div class="services_view-content">

                <div class="services_view-content-block err">
                    <!-- <p>В этой категории пока что нет услуг</p> -->
                    <div class="err-img"></div>
                </div>
                <div class="services_view-content-block" >
                    <div class="product_card" >
                        <p class="product_card-name"></p>
                        <p class="product_card-price">
                        руб
                        </p>
                        <p class="product_card-price none-select">
                            Узнать подробнее
                        </p>
                    </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pagination{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
    &_items{
        padding: 10px;
    }
    &_btn{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-size: 12px;
        // margin: 0 5px;
        border-radius: 3px;
        // border: 1px solid rgb(179, 173, 173);
        color: #f5f5f5;
        background: #E74C3C;
        &:hover{
            transition: all 0.3s ease 0s;
            background: #a03225;
        }
    }
}
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
        user-select: none;
        cursor: pointer;
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
        &:hover{
            transition: all 0.3s ease 0s;
            background: #a03225;
        }
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