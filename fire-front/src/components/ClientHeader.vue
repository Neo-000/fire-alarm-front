<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import { ElMessageBox } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import {Location, PhoneFilled} from '@element-plus/icons-vue';
import {Bid} from '../api/modules/bid.js'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Закрыть окно?')
    .then(() => {
        form.firstname='',
        form.msg='',
        form.name='',
        form.phone='',
        form.surname=''
      done()
    })
    .catch(() => {
      // catch error
    })
}

const ruleFormRef = ref<FormInstance>();
const form = reactive({
    name:"",
    firstname: "",
    surname: "",
    phone: "",
    msg:'Новая заявка на сайте'
});




const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
  surname: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
})

const submitForm = async () => {
    console.log(form)
    const res = await Bid.Create(form)
    dialogVisible.value = false
}



onMounted(() => {
});

</script>

<template>
  <div class="header">
    <div class="wrapper">
        <div class="logo"></div>
        <div class="info">
            <div class="contacts">
                <div class="contact_item disp-mobile-none">
                    <el-icon color="#E74C3C"><Location /></el-icon>
                    <span> г.Краснодар</span>
                </div>
                <div class="contact_item">
                    <el-icon color="#E74C3C"><PhoneFilled /></el-icon>
                    <span> +7(961)-535-08-34</span>
                </div>
            </div>
            <div class="button btn btn-root" @click="dialogVisible = true">Заказать звонок</div>
        </div>
    </div>
  </div>



  <el-dialog
    v-model="dialogVisible"
    title="Оставте заявку"
    :before-close="handleClose"
    :width="450"
  >
    <template #header>
       <p>Оставте заявку и в ближайшее время с вами свяжуться наши специалисты</p>
    </template>
    <el-form
    label-position="left"
    label-width="100px"
    :model="form"
    style="max-width: 320px"
    :rules="rules"
    
    >
        <el-form-item 
        label="Фамилия"
        prop="surname"
        >
            <el-input v-model="form.surname" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Имя" prop="name">
            <el-input v-model="form.name" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Отчество">
            <el-input v-model="form.firstname" />
        </el-form-item>
        <el-form-item label="Телефон" prop="phone">
            <el-input v-model="form.phone" data-phone-pattern>
                <template #prepend>+7</template>
            </el-input>
        </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false" type="danger">Отмена</el-button>
        <el-button type="success" @click="submitForm()">
          Отправить
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:500px) {
        flex-direction: column;
    }
}
.info{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width:500px) {
        width: 100%;
        flex-direction: column;
    }
    // background: grey;
}
.contacts{
    // background: rgb(79, 52, 52);
    width: 60%;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    @media (max-width:500px) {
        width: 100%;
        margin-bottom: 10px;
    }
}
.header{
    width: 100%;
    // border: 1px solid black;
}
.logo{
    width: 120px;
    height: 60px;
    background: url('../assets/img/logo.svg') no-repeat;
    background-size: contain;
    background-position: center center;
    @media (max-width:500px) {
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
        background-position: center center;
    }
}
</style>