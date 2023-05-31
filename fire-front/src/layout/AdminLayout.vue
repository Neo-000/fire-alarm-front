<script setup>
import { RouterView } from 'vue-router';
import { ref , reactive, watchEffect, onMounted} from 'vue';
import md5 from 'md5';
import Header from '../components/Admin/AdminHeader.vue'
import Footer from '../components/Admin/AdminFooter.vue'
import Menu from '../components/Admin/AdminMenu.vue'
import { ElMessageBox, ElMessage  } from 'element-plus';
const loading =ref(true);
onMounted(() => {
  loading.value = false
})
const flag = ref(true);
const auth = reactive({flag});

const authData = ref({
  login:'21232f297a57a5a743894a0e4a801fc3',
  password:'21232f297a57a5a743894a0e4a801fc3'
})
let data = reactive(authData);
const inputValue = ref({
  login:'',
  password:''
})
let value = reactive(inputValue);
const md =(login,password) =>{
  return {login:md5(login), password:md5(password)}
}
const authorization = () =>{
  const authValue = md(inputValue.value.login, inputValue.value.password);
  let item = 0;
  if(authValue.login === authData.value.login){
    item ++;
  }
  if(authValue.password === authData.value.password){
    item ++;
  }
  if(item === 2){
    flag.value = true
    ElMessage({
    message: 'Успешная авторизация',
    type: 'success',
  })
  } else {
    ElMessage({
    message: 'Неверное имя или пароль',
    type: 'warning',
  })
  }
}
// 21232f297a57a5a743894a0e4a801fc3

</script>

<template>
  <div class="auth" v-if="!auth.flag">
    <div class="auth_title">
      Выполните вход в панель Администратора
    </div>
    <div class="auth_input">
      <el-input  v-model="inputValue.login" placeholder="Логин" clearable />
      <el-input  v-model="inputValue.password" placeholder="Пароль" clearable />
      <el-button type="success" @click="authorization">Вход</el-button>
    </div>
  </div>
  <div class="app_layout"  v-loading="loading" v-if="auth.flag">
    <div class="header_layout">
      <Header class="wrapper"></Header>
    </div>
    <div class="content_layout wrapper">
      <div class="left_sidebar">
        <Menu></Menu>
      </div>
      <div class="right_content">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer_layout" >
      <Footer class="wrapper"></Footer>
    </div>

  </div>
</template>

<style scoped lang="scss">
.left_sidebar{
  // background: rgb(210, 210, 210);
  // outline: 1px solid rgba(128, 128, 128, 0.089);
  overflow-x: hidden;
  overflow-y: auto;
  width: 19%;
  @media (max-width:450px) {
    z-index: 100;
    height: 60px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
.right_content{
  // background: rgba(0, 0, 0, 0.323);
  outline: 1px solid rgba(128, 128, 128, 0.089);
  overflow-x: hidden;
  overflow-y: auto;
    width: 80%;
  @media (max-width:450px) {
    width: 100%;
  }
}

.auth{
  
  width: 250px;
  margin: 20px auto;
  &_title{

  }
  &_input{
    :deep(.el-input__wrapper){
      margin: 10px 0;
    }

  }
}
.app_layout{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .header_layout{
    position: relative;
    width: 100%;
    z-index: 100;
    box-shadow: 0 0px 2px rgba(255, 0, 0, 0.499);
    padding-bottom: 10px;
  }
  .content_layout{
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    height: 60%;
    width: 100%;
    flex: 1 0 auto;
    /* z-index: 50; */
    margin-bottom: 2px;
  }
  .footer_layout{
    height: 60px;
    position: relative;
    background: rgb(228, 228, 228);
    width: 100%;
    /* flex: 0 0 auto; */
    z-index: 60;
    @media (max-width:450px) {
      display: none;
    }
  }
</style>
