<script setup lang="ts">
import { ref , computed , reactive, onMounted, onBeforeUpdate, onBeforeMount, watchEffect, toRefs} from 'vue';
import { useRoute } from 'vue-router';
import {Category}  from '../api/modules/category.js';
import{Services} from '../api/modules/services.js';
import {ArrowLeft, ArrowRight} from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessageBox, ElMessage  } from 'element-plus';
import {Bid} from '../api/modules/bid.js';
const route = useRoute();
const new_data = ref({
    _id:'',
    _name:'',
    _items:'',
    _all_category:'',
    _data:[],
    _views:[],
    _services:''
})
let data= reactive({});
data = new_data.value;


const ApiCategoryname = async () => {
        const [err, res] = await Category.Name({'_id':data._id})
        if(err == null){
            data._name = res.data
            return true
        } else return false
};
const GetServicesId = async () => {
    const [err, res] = await Category.GetServices({'_id':data._id});
    if(err == null){
        data._items = res.data.item;
        data._data = res.data.services;
        const views = GetServicesByCategoryId();
        data._services = true;
        return true
    } else{
        data._items = 0;
        data._data = [];
        data._views = [];
        data._services = false;
        ElMessage({
        message: err.response.data.msg,
        type: 'warning',
        })
    }
};
const GetServicesByCategoryId = async () => {
    const [err, res] = await Services.GetByCategoryId({'category_id':data._id});
    if(err == null){
            data._views = res.data
            return true
        } else return false
};
const fetchall = async () => {
    console.log('fatchall start')
    const name = ApiCategoryname();
    const services = GetServicesId();
    const pg = setPagination();
    const categ = GetCategory()
};

const step = 5;
const configPagination = ref({
    allItems:'',
    pages:'',
    active_page:'1',
    min:0,
    max:step
});
let pagination = reactive({});
pagination = configPagination.value;
const setPagination = async () =>{
    console.log(data._items)
    pagination.allItems = data._items;
    pagination.pages = Math.ceil(data._items/step);
}
const paginationMore = () => {
    if(pagination.active_page < pagination.pages) {
       pagination.active_page++
    }else {
        pagination.active_page = pagination.pages;
    }
    if(pagination.min < (pagination.allItems - (step + 1)) && pagination.max < pagination.allItems ){
        if(pagination.min == 0){
            pagination.min = pagination.min + (step -1);
            pagination.max = pagination.max + (step -1);
        }else {
            pagination.min = pagination.min + step;
            pagination.max = pagination.max + step;
        }
    } else {
        pagination.min = pagination.allItems - (step + 1);
        pagination.max = pagination.allItems;
    }
    
}
const paginationBack = () => {
    console.log('0')
    if(pagination.active_page > 1) {
       pagination.active_page--
    }else {
        pagination.active_page = 1;
    }
    if(pagination.min > 0){
        if(pagination.min <= (step - 1)){
            pagination.min = 0;
            pagination.max = step;
        }else {
            pagination.min = pagination.min - step;
            pagination.max = pagination.max - step;
        }
    } else {
        pagination.min = 0;
        pagination.max = atep;
    }

}


let ismobile=ref();
window.addEventListener('resize' , () => {
  const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
})

const formSucsess = () => {
  ElMessage({
    message: 'Заявка отправлена',
    type: 'success',
  })
}
const formUnSucsess = () => {
  ElMessage({
    message: 'Ошибка сервера',
    type: 'warning',
  })
}

async function ApiBid () {
    const [err, res] = await Bid.Create(numberValidateForm);
    return res
}

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Закрыть окно? Данные не будут сохранены')
    .then(() => {
      resetForm(formRef.value)
      done()
    })
    .catch(() => {
      // catch error
    })
}
const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  name:"",
  firstname: "",
  surname: "",
  phone: "",
  msg:'Новая заявка на сайте'

})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      ApiBid()
      .then(
        res =>{
            console.log(res.status)
            if(res.status >= 200 && res.status < 400){
                formSucsess();
            }
        },
        err => {formUnSucsess()}
      );
    //   console.log(r)
      dialogVisible.value = false;
      resetForm(formRef.value);
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

async function GetCategory () {
    const [err, res] = await Category.Getall();
    return data._all_category = res.data.msg
}









onMounted( async () => {
    const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
})

watchEffect( async () => {
data._id = route.params.id;
await fetchall()
console.log(typeof data)
}
)


</script>

<template>
    <div class="services wrapper">
        <div class="left_sidebar">
            <div class="info">
                <div class="info_img"></div>
                <div class="info_title">
                    Наши специалисты ответят на любой интересующий вопрос по
услуге
                </div>
                <div class="button btn btn-root" @click="dialogVisible = true">Заказать звонок</div>
            </div>
            <div class="category">
                <router-link 
                class="category_item"
                :class="item['_id'] == data._id?'active_item':''"
                v-for="item in data._all_category"
                :to = "`/services/${item['_id']}`" 
                :key="item['_id']  ">
                {{ item.name }}
                </router-link>
            </div>

        </div>
        <div class="services_view">
            <div class="services_view-title font--h1">
                {{ data._name }}
            </div>
            <div class="services_view-content">

                <div class="services_view-content-block err" v-if="!data._services">
                    <!-- <p>В этой категории пока что нет услуг</p> -->
                    <div class="err-img"></div>
                </div>
                <div class="services_view-content-block"  v-if="data._services">
                    <div class="pagination none-select">
                        <div 
                        class="pagination_btn" 
                        @click="paginationBack"
                        :class="pagination.active_page == 1?'btn_disabled':''" 
                        >
                            <el-icon><ArrowLeft /></el-icon> Назад
                        </div>
                        <div class="pagination_items">
                            {{ pagination.active_page }} из {{ pagination.pages }} стр
                        </div>
                        <div
                        class="pagination_btn"
                        :class="pagination.active_page == pagination.pages?'btn_disabled':''" 
                        @click="paginationMore"
                        >
                            Далее <el-icon><ArrowRight />
                        </el-icon></div>
                    </div>
                    <div class="product_card" v-for="items in data._views.slice(pagination.min,pagination.max)">
                        <p class="product_card-name" >{{ items.name }}</p>
                        <p class="product_card-price" v-if="items.price != 0" @click="dialogVisible = true">
                        {{items.price}} руб
                        </p>
                        <p class="product_card-price none-select" v-if="items.price == 0" @click="dialogVisible = true">
                            Узнать подробнее
                        </p>
                    </div>
                    <div class="pagination none-select">
                        <div 
                        class="pagination_btn" 
                        @click="paginationBack"
                        :class="pagination.active_page == 1?'btn_disabled':''" 
                        >
                            <el-icon><ArrowLeft /></el-icon> Назад
                        </div>
                        <div class="pagination_items">
                            {{ pagination.active_page }} из {{ pagination.pages }} стр
                        </div>
                        <div
                        class="pagination_btn"
                        :class="pagination.active_page == pagination.pages?'btn_disabled':''" 
                        @click="paginationMore"
                        >
                            Далее <el-icon><ArrowRight />
                        </el-icon></div>
                    </div>
            </div>
            </div>
        </div>
    </div>

    <el-dialog
    class="index"
    v-model="dialogVisible"
    title="Оставте заявку"
    :before-close="handleClose"
    :width="ismobile?320:450"
  >
    <template #header>
       <p>Оставте заявку и в ближайшее время с вами свяжуться наши специалисты</p>
    </template>
    <el-form
    ref="formRef"
    :model="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
    :label-position="ismobile?'top':'left'"
    style="max-width: 320"
  >
        <el-form-item 
        label="Имя" 
        prop="name"
        :rules="[
            { required: true, message: 'Заполните', trigger: 'blur' },
            { min: 2, max: 10, message: 'Введите корректное имя', trigger: 'change' }
        ]"
        >
            <el-input v-model="numberValidateForm.name" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item 
        label="Фамилия"
        prop="surname"
        :rules="[
        { required: true, message: 'Заполните', trigger: 'blur' },
        { min: 2, max: 10, message: 'Введите корректную фамилию', trigger: 'change' }
      ]"
        >
            <el-input v-model="numberValidateForm.surname" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Отчество">
            <el-input v-model="numberValidateForm.firstname" />
        </el-form-item>
        <el-form-item 
        label="Телефон" 
        prop="phone"
        :rules="[
        { required: true, message: 'Заполните', trigger: 'blur' },
        { min:10,message: 'Введите корректный номер', trigger: 'change' }
        ]">
            <el-input v-model="numberValidateForm.phone" maxlength="10">
                <template #prepend>+7</template>
            </el-input>
        </el-form-item>
    <el-form-item class="mobile_bitton_form">
      <el-button type="danger" @click="submitForm(formRef)">Отправить</el-button>
      <el-button type="info" plain @click="resetForm(formRef)">Очистить</el-button>
    </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.active_item{
    background: rgba(255, 207, 207, 0.589) !important;
    border-right: 2px solid rgba(255, 0, 0, 0.551);
}
.category{
    // border: 1px solid;
    width: 100%;
    padding: 10px 0;
    align-self:stretch;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex;
    &_item{
        width: 70%;
        background: rgb(236, 236, 236);
        // border: 1px solid red;
        border-radius: 2px;
        margin: 2px 0;
        padding: 5px;
    }
}

@keyframes log-animation {
    90%{transform: rotate3d(0, 0, 0, 0deg);}
    // 95%{transform: rotate3d(7, 7, 7, -8deg);}
    96%{transform: rotate3d(7, 7, 7, 8deg);}
}
.info{
    width: 70%;
    padding: 20px;
    border-radius: 4px;
    background:
    linear-gradient(
        217deg, 
        rgb(255, 100, 100), 
        rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(
        127deg, 
        rgb(255, 212, 54), 
        rgba(0,255,0,0) 70.71%),
    linear-gradient(
        336deg, 
        rgba(255, 81, 151, 0.925), 
        rgba(0,0,255,0) 70.71%);
    &_img{
        width: 100%;
        height: 80px;
        background: url('../assets/img/ser.png') no-repeat;
        background-position: center center;
        background-size: contain;
        animation-direction: reverse;
        animation:log-animation 15s ease 0s infinite;
    }
    &_title{
        margin: 10px 0;
        font-size: 0.7rem;
    }
    .button{
        background: #e74d3c9c;
        color: white;
        backdrop-filter: blur(10px);
        transition: all .3s ease-in-out 0s;
        &:hover{
            background: #e74d3cf9;
            transition: all .3s ease-in-out 0s;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.495);
        }
    }
}
.index{
    position: relative;
    z-index: 1000;
}
.btn_disabled{
        cursor: auto !important;
        color: #f5f5f5ab !important;
        background: #e74d3c8e !important;
        }
.pagination{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 2px;
    margin-top: 5px;
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
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    border: 1px solid rgba(239, 199, 199, 0.819);
    border-image-slice: 1;
    border-width: 1px;
    border-left-width: 5px;
    border-left-color: #e74d3c86;
    margin: 5px 2px;
    border-radius: 4px;
    &:hover{
        transition: all 0.3s linear;
        background: rgba(255, 165, 165, 0.182);
    }
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
        text-overflow: ellipsis;
        @media (max-width:450px) {
            width: 100%;
            // min-width:200px;
        }
    }
    &-price{
        user-select: none;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid #e74d3c5d;
        background: #e74d3cc0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        color: white;
        width: 40%;
        &:hover{
            transition: all 0.3s ease 0s;
            background: #a03225;
        }
        @media (max-width:450px) {
            width: 100%;
            font-size: 12px;
            
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
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.left_sidebar{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 30%;
    background: rgba(230, 230, 230, 0.292);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 160px;
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
        color: rgb(108, 30, 30);
    }
    &-content{
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;

    &-block{
        // display: flex;
        // flex-wrap: wrap;
        @media (max-width:450px) {
            display: flex;
            flex-wrap: wrap;
        }
    }
    }

}
</style>