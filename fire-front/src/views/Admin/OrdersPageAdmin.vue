<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted, watchEffect, onBeforeUnmount} from 'vue'
import {Iphone,Plus, DeleteFilled} from '@element-plus/icons-vue';
import {Bid} from '../../api/modules/bid.js';
import {Orders} from '../../api/modules/orders'
import { ElMessageBox, ElMessage  } from 'element-plus';

const form_orders = ref({
    title:'',
    object:'',
    name:'',
    firstname:'',
    surname:'',
    phone:'',
    price:'',
    msg:''

})
const FormOrders = reactive(form_orders);
const dialogVisible = ref(false);
const handleClose = () => {
    resetForm();
    dialogVisible.value = false;
}
const resetForm =() =>{
    for(var item in FormOrders.value){
        FormOrders.value[`${item}`] = '';
    }
}
const submitOrder = async () =>{
    const [err, res] = await Orders.Create(FormOrders.value)
        if(err == null){
            fetchAllOrders();
            resetForm();
            dialogVisible.value = false;
            ElMessage({
                message: 'Успешно создан заказ',
                type: 'success',
            })
            return true
        } else return false
}




let ismobile=ref();

const _orders = ref();
const orders = reactive(_orders);

const fetchAllOrders = async () =>{
    const [err, res] = await Orders.all({'_null':'0'})
        if(err == null){
            _orders.value = res.data.orders;
            return true
        } else return false

}
const delete_all = async () =>{
    await ElMessageBox.confirm('Удалить все заказы?')
            .then(async () => {
            const [err, res] = await Orders.delete_all({'_null':'0'})
            if(err == null){
                fetchAllOrders();
                if(orders.value == undefined || orders.value == null){
                ElMessage({
                message: 'Заказов и так нет',
                type: 'warning',
                })} else {
                ElMessage({
                message: 'Успешно удалены все заказы',
                type: 'warning',
                })
                }
                return true
            } else return false
            })
            .catch(() => {
                console.log('no')
            })
}
const deleteOrdersByID = async(id) => {
    const [err, res] = await Orders.delete({'_id':id})
        if(err == null){
            fetchAllOrders()
            ElMessage({
                message: 'Успешно удален заказ',
                type: 'success',
            })
            return true
        } else return false
}


window.addEventListener('resize' , () => {
  const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
})
let watchinterval;
onMounted( async () => {
    const sizeX = document.documentElement.clientWidth;
    if(sizeX <= 450){
        ismobile.value = true
    } else {
        ismobile.value = false
    }
    fetchAllOrders();
    watchinterval =  setInterval(() => {
        fetchAllOrders();
    }, 15000);
})
onBeforeUnmount( async () => {
    clearInterval(watchinterval)
})

</script>
<template>
    <el-dialog
        v-model="dialogVisible"
        title="Оставте заявку"
        :before-close="handleClose"
        :width="ismobile?'320':'500'"
    >
        <template #header>
        <p>Создание заказа</p>
        </template>
        <el-form
            ref="formRef"
            style="max-width: 320"
            label-width="100px"
            class="demo-ruleForm"
            label-position='top'
        >
            <el-form-item label="Наименование">
                <el-input v-model="FormOrders.title"/>
            </el-form-item>
            <el-form-item label="Объект и суть работ: "
            :rules="{ required: true}"
            >
                <el-input v-model="FormOrders.object" required="true"/>
            </el-form-item>
            <el-form-item label="Имя">
                <el-input v-model="FormOrders.name"/>
            </el-form-item>
            <el-form-item label="Фамилия">
                <el-input v-model="FormOrders.surname"/>
            </el-form-item>
            <el-form-item label="Телефон">
                <el-input v-model="FormOrders.phone"/>
            </el-form-item>
            <el-form-item label="Сумма">
                <el-input v-model="FormOrders.price"/>
            </el-form-item>
            <el-form-item label="Доп информация">
                <el-input v-model="FormOrders.msg"/>
            </el-form-item>

            <el-form-item class="mobile_bitton_form">
                <el-button type="danger" @click="submitOrder">Отправить</el-button>
                <span style="display: block; width: 20px;"></span>
                <el-button type="info" plain @click="resetForm">Очистить</el-button>
            </el-form-item>

        </el-form>
    <template #footer>
      <span class="dialog-footer">
      </span>
    </template>
  </el-dialog>



    <div class="btn_group">
        <el-button 
        type="danger" 
        class="btn_del"
        @click="delete_all"
        > Удалить все</el-button>
        <el-button 
        type="success"
        plain
        class="btn_del"
        @click="dialogVisible = true"
        > Создать заказ</el-button>
    </div>
    <el-empty description="Пока нет ничего" v-if="!orders"/>
    <div class="orders">
        <div class="orders_card" v-for="item in orders">
            <div class="orders_card-header">
                <p class="orders_card-title large_title">
                    <span class="item_text">{{ item.title }}</span>
                </p>
                <el-button 
                type="danger" plain  
                @click="deleteOrdersByID(item._id)"
                >
                    <el-icon><DeleteFilled /></el-icon>
                </el-button>
            </div>
            <div class="orders_card-content">
                <p class="orders_card-item">
                    <span class="large_text">Объект: </span> 
                    <span class="item_text">{{ item.object }}</span>
                </p>
                <p class="orders_card-item">
                    <span class="large_text">Имя: </span>
                    <span class="item_text">{{ item.name }}</span>
                </p>
                <p class="orders_card-item">
                    <span class="large_text">Фамилия: </span>
                    <span class="item_text">{{ item.surname }}</span>
                </p>
                <p class="orders_card-item" v-if="item.phone != undefined">
                    <span class="large_text">Телефон: </span>
                    <a :href="`tel:+${item.phone}`">
                    <el-button type="success">
                        +{{ item.phone }}
                    </el-button>
                </a>
                </p>
                <p class="orders_card-item" v-if="item.price != null">
                    <span class="large_text">Цена: </span>
                 {{ item.price }}
                </p>
                <p class="orders_card-item" v-if="item.price == null">
                    <span class="large_text">Цена: </span>
                    Не указана
                </p>
                <p class="orders_card-item">
                    <span class="large_text">Дата создания: </span>
                    {{ item.date }}
                </p>
                <p class="orders_card-item">
                    <span class="large_text">Доп информация: </span>
                    <span class="item_text">{{ item.msg }}</span>
                </p>
                <p class="orders_card-item">
                    <el-button
                    type="success"
                    >
                        Выполнено   
                    </el-button>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item_text{
    display: flex;
    flex-wrap: wrap;
    word-break:break-all
}
.btn_group{
    padding: 10px;
    width: 100%;
    position: sticky;
    background: white;
    z-index: 100;
    top: 0;
}
.orders{
    width: 100%;
    padding: 10px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    &_card{
        background: rgba(255, 163, 65, 0.218);
        padding: 10px;
        border-radius: 3px;
        margin: 5px;
        min-width: 160px;
        width: 24%;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        justify-content:flex-start ;
        @media (max-width:450px) {
            width: 100%
        }
        
    }
    &_card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;

    }
    &_card-content{
        margin-top: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    &_card-title{

    }
    &_card-item{
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        font-weight: 600;


    }

}

.large_text{
    font-size: 12px;
    color: grey;
    font-weight: 700;
}
.large_title{

}

</style>