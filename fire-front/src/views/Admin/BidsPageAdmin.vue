<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted, watchEffect, onBeforeUnmount} from 'vue'
import {Iphone,Plus, DeleteFilled} from '@element-plus/icons-vue';
import {Bid} from '../../api/modules/bid.js';
import {Orders} from '../../api/modules/orders'
import { ElMessageBox, ElMessage  } from 'element-plus';

const active_id = ref();
const id_active = reactive(active_id);

let ismobile=ref();
window.addEventListener('resize' , () => {
  const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
})

const _bids = ref();
const bids = reactive(_bids)

const _orders = ref({
    title:'',
    object:'',
    name:'',
    firstname:'',
    surname:'',
    phone:'',
    price:'',
    msg:'',
    date_on:'',
    date_off:''

})

const orders = reactive(_orders);
const dialogVisible = ref(false);
const handleClose = () => {
    resetForm();
    dialogVisible.value = false;
}
const orderForm = (title,name,surname,phone,id) =>{
    active_id.value = id;
    orders.value.title = title;
    orders.value.name = name;
    orders.value.surname = surname;
    orders.value.phone = phone;
    dialogVisible.value = true;
}
const resetForm =() =>{
    for(var item in orders.value){
        orders.value[`${item}`] = '';
    }
}
const submitOrder = async () =>{
    await ElMessageBox.confirm('Удалить заявку?')
            .then(() => {
                console.log(active_id.value)
                console.log('yes');
                deleteBidsByID(active_id.value);
            })
            .catch(() => {
                console.log('no')
            })
    // var d_on = new Date(orders.value.date_on).toLocaleString('ru',
    //         {
    //             day: 'numeric',
    //             month: 'long',
    //             year: 'numeric'
    //         });
    // var d_off = new Date(orders.value.date_off).toLocaleString('ru',
    //         {
    //             day: 'numeric',
    //             month: 'long',
    //             year: 'numeric'
    //         });

    // orders.value.date_on = d_on;
    // orders.value.date_off = d_off;
    const [err, res] = await Orders.Create(orders.value)
        if(err == null){
            resetForm();
            dialogVisible.value = false;
            active_id.value = '';
            ElMessage({
                message: 'Успешно создан заказ',
                type: 'success',
            })
            return true
        } else return false
}



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
    const sizeX = document.documentElement.clientWidth;
    if(sizeX <= 450){
        ismobile.value = true
    } else {
        ismobile.value = false
    }
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
    <el-dialog
        v-model="dialogVisible"
        title="Оставте заявку"
        :before-close="handleClose"
        :width="ismobile?'320':'30%'"
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
                <el-input v-model="orders.title"/>
            </el-form-item>
            <el-form-item label="Объект и суть работ: "
            :rules="{ required: true}"
            >
                <el-input v-model="orders.object" required="true" :rows="4" type="textarea"/>
            </el-form-item>
            <el-form-item label="Начало работ">
                <el-date-picker
                    v-model="orders.date_on"
                    type="date"
                    placeholder="Выбрать дату"
                    size="small"
                />
            </el-form-item>
            <el-form-item label="Конечная дата">
                <el-date-picker
                    v-model="orders.date_off"
                    type="date"
                    placeholder="Выбрать дату"
                    size="small"
                />
            </el-form-item>
            <el-form-item label="Имя">
                <el-input v-model="orders.name"/>
            </el-form-item>
            <el-form-item label="Имя">
                <el-input v-model="orders.name"/>
            </el-form-item>
            <el-form-item label="Фамилия">
                <el-input v-model="orders.surname"/>
            </el-form-item>
            <el-form-item label="Телефон">
                <el-input v-model="orders.phone"/>
            </el-form-item>
            <el-form-item label="Сумма">
                <el-input v-model="orders.price"/>
            </el-form-item>
            <el-form-item label="Доп информация">
                <el-input v-model="orders.msg"/>
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
    </div>
    <el-empty description="Пока нет ничего" v-if="!bids"/>
    <div class="bids">
        <div class="bids_card" v-for="item in bids">
            <div class="bids_card-header">
                <div class="bids_card-title">
                    {{ item.msg }}
                </div>
                <div class="bids_card-date">
                    Дата: {{ item.date }}
                </div>
            </div>
            <div class="bids_card-footer">
                <div class="bids_card-name">
                    Имя: {{ item.name }}
                </div>
                <div class="bids_card-surname">
                    Фамилия: {{ item.surname }}
                </div>
                <div class="bids_card-phone">
                    Телефон: +7{{ item.phone }}
                </div>
                <div class="button_group">
                    <a :href="'tel:+7' + item.phone">
                        <el-button type="success" plain>
                        <el-icon><Iphone /></el-icon>
                        <p class="btn_title">Позвонить</p>
                    </el-button>
                    </a>
                    <el-button type="success" plain @click="orderForm(item.msg,item.name,item.surname,`+7${item.phone}`, item._id)">
                        <el-icon><Plus /></el-icon>
                        <p class="btn_title">Создать заказ</p>
                    </el-button>
                    <el-button 
                    type="danger" 
                    plain
                    @click="deleteBidsByID(item._id)"
                    >
                        <el-icon><DeleteFilled /></el-icon>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">


:deep(.el-button+.el-button){
    margin: 10px 0;
}

.button_group{
    a{
        width: 100%;
        display: flex;
        margin: 10px 0;

        button{
            width: 100%;
        }
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    padding: 10px 0;
}
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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &_card{
        width: 20%;
        min-width: 160px;
        margin: 10px;
        background: rgba(218, 175, 107, 0.122);
        border-radius: 4px;
        padding: 10px;
        transition: all .2s ease-in-out 0s;
        &:hover{
            transition: all .3s ease-in-out 0s;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.174);
            background: rgba(254, 163, 16, 0.122);
        }
        @media (max-width:450px) {
            width: 45%;
        }
        &-header{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 10px;
            
        }
        &-footer{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
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

label{
    display: block;
}

</style>