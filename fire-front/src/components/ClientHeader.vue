<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import { ElMessageBox, ElMessage  } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import {Location, PhoneFilled} from '@element-plus/icons-vue';
import {Bid} from '../api/modules/bid.js'
import {MAIN_INF} from '../config';

const info = ref({
    phone:MAIN_INF.phone,
    location:MAIN_INF.location
})
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
    const [err, ApiBid] = await Bid.Create(numberValidateForm);
    return ApiBid
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

onMounted(() => {
    const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
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
                    <span>{{ info.location }}</span>
                </div>
                <div class="contact_item">
                    <a :href="'tel:' + info.phone">
                    <el-icon color="#E74C3C"><PhoneFilled /></el-icon>
                    <span>{{ info.phone }}</span>
                </a>
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
    width: 220px;
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
.mobile_bitton_form{
    @media (max-width:450px) {

    }
}

</style>