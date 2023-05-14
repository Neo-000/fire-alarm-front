<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import { ElMessageBox, ElMessage  } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
// import {Location, PhoneFilled, Paperclip} from '@element-plus/icons-vue';
import {Bid} from '../api/modules/bid.js'
import {MAIN_INF} from '../config';
import HomePagePhotoBlock from '../components/HomePagePhotoBlock.vue';

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
    const [err, res] = await Bid.Create(numberValidateForm);
    return res
}

const dialogVisible = ref(false)

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
// const loading =ref(true);

onMounted(() => {
  // loading.value=false;
  const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
});

</script>

<template>
<div class="wrapper homePage">
    <div class="content-top">
        <div class="bannerHome">
            <div class="bannerHome-content">
                <div class="form">

                        <el-form
                            ref="formRef"
                            :model="numberValidateForm"
                            label-width="100px"
                            class="demo-ruleForm"
                            :label-position="ismobile?'top':'left'"
                        >
                        <div class="form-title">
                            Оставьте заявку и мы перезвоним вам
                        </div>
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
                </div>
                <div class="title font--maxi">
                    Выполнение работ в противопожарных системах, электромонтаж, монтаж АУПТ
                </div>
            </div>
        </div>
    </div>
    <HomePagePhotoBlock />
</div>
</template>

<style scoped lang="scss">


.homePage{
// overflow-y:auto;
height: 100%;
padding: 10px 0;
}
.bannerHome{
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
    // height: 300px;
    background: url('../assets/img/banner2.png') no-repeat;
    background-position: center center;
    background-size: cover;

    &-content{
        display: flex;
        justify-content: space-between;
        // align-items: flex-start;
        @media (max-width:450px) {
            flex-direction: column-reverse;
            align-items: center;
            justify-content: flex-end;
        }
        // height: 750px;
        // padding: 50px;

        .form{
            width: 100%;
            align-self: flex-start;
            // background: black;
            padding: 20px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            &-title{
                color: rgba(9, 8, 8, 0.903);
                padding: 20px;
            }
            form{
                max-width: 450px;
                padding: 10px;
                border-radius: 4px;
                background: rgba(255, 255, 255, 0.959);
                background: url('../assets/img/bckg8.png');
                backdrop-filter: blur(10px);
                transition: all 0.4s linear 0s;
                // box-shadow:;
                &:hover{
                  transition: all 0.2s ease 0s;
                  // background: white;
                  box-shadow: 0 0 20px rgba(255, 255, 255, 0.201);
                  color: black;
                }
            }
            @media (max-width:450px) {
            max-width: 100%;
            width: 100%;
            height: 50%;
        }
        }
        .title{
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-wrap: wrap;
            word-spacing: 10px;
            // font-weight: 900;
            color: rgba(255, 255, 255, 0.842);
            // font-size: 2.1vw;
            padding: 50px;
            // height: 100%;/
            // width: 50%;
            background: rgba(32, 3, 3, 0.493);
            backdrop-filter: blur(2px);
            border-radius: 0 5px 5px 0;
            width: 50%;
            // width: 160px;
            // animation: banner_title 1s linear 0s forwards;
            @media (max-width:450px) {
            padding: 10px;
            font-size: 20px;
            width: 100%;
            height: 50%;
            animation: none;
        }
        }
    }
}

.text {
  width: 29ch;
  color: white;
  font-family: monospace;
  font-size: 30px;
  white-space: nowrap; /* не переносить текст на другую строку */
  overflow: hidden; /* скрываем переполнение контентом */
  border-right: 3px solid white; /* рисуем курсор */
  animation: cursor 0.75s step-end infinite, printed_text 5s steps(29);
}

@keyframes cursor {
  0% {
    border-color: white;
  }

  50% {
    border-color: transparent;
  }

  100% {
    border-color: white;
  }
}

@keyframes printed_text {
  from {
    width: 0;
  }
}

@keyframes banner_title {
  from{opacity:0; width: 10px; font-size: 2px;}
  to{opacity: 1; width: 50%;}
}

:deep(.el-form-item__label){
  color: black;
}
</style>