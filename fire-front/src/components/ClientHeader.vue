<script setup lang="ts">
import { ref, reactive} from 'vue'
import { ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Закрыть окно?')
    .then(() => {
        form.value = {
            name:"",
            firstname:"",
            surname:"",
            phone:"",
            msg:""
        }
      done()
    })
    .catch(() => {
      // catch error
    })
}
const form = ref({
    name:"",
    firstname: "",
    surname: "",
    phone: "",
    msg: ""
})




const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  
})
const ruleFormRef = ref<FormInstance>()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}


</script>

<template>
  <div class="header">
    <div class="wrapper">
        <div class="logo"></div>
        <div class="info">
            <div class="contacts"></div>
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
        :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
        }"

        >
            <el-input v-model="form.surname" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Имя">
            <el-input v-model="form.name" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Отчество">
            <el-input v-model="form.firstname" />
        </el-form-item>
        <el-form-item label="Телефон">
            <el-input v-model="form.phone">
                <template #prepend>+7</template>
            </el-input>
        </el-form-item>
        <el-form-item label="">
            <el-input 
            placeholder="Кратко опишите свой вопрос"
            v-model="form.msg" 
            show-word-limit
            maxlength="50"
            
            />
        </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false" type="danger">Отмена</el-button>
        <el-button type="success" @click="submitForm(ruleFormRef)">
          Отправить
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header{
    width: 100%;
    border: 1px solid black;
}
.logo{
    width: 120px;
    height: 60px;
    background: url('../assets/img/logo.svg') no-repeat;
    background-size: contain;
}
</style>