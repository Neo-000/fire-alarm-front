<script setup>
import {RouterView, RouterLink} from 'vue-router'
import { ref ,computed} from 'vue'
// import { computed } from '@vue/runtime-core';
import header_admin from '../components/admin/main/header_admin.vue'
import footer_admin from '../components/admin/main/footer_admin.vue'
import leftMenu from '../components/admin/sidebars/leftMenu.vue'

import users from '../data/users.json'
const login = ref('true')
const login_auth = ref({
    name:'',
    password:'',
    error:'',
    error_in:''
})

function auth_admin(){
    login_auth.value.error = 0
    for (let i = 0; i < users.users.length; i++) {
        if(login_auth.value.name === users.users[i].name && login_auth.value.password === users.users[i].password){
            console.log('authentication successful -' 
            + login_auth.value.name + '=' 
            + users.users[i].name + '||| ' 
            + login_auth.value.password + ' = ' 
            + users.users[i].password)

            login_auth.value.error_in = ''
            login.value = 'true'
            return true
        }
        else{
            login_auth.value.error++
            console.log('N-503')
        }
    }
    console.log(login_auth.value.error)
    if(login_auth.value.error === users.users.length){
        login_auth.value.error_in = 'Такого пользователя нет'
    }
    

}

</script>

<template>
    <div class="app_wrapper">
        <div class="app_wrapper_block">
            <header_admin :login="login"/>
        </div>
        <div class="app_wrapper_content wrapper" v-if="login === 'false'">
            <div class="auth">
                <p class="font_h1">Выполниите вход в панель администратора</p>
                <div class="login">
                    <input 
                        type="text" 
                        class="login_input"
                        placeholder="Логин"
                        v-model="login_auth.name"
                    >
                    <input 
                        type="text" 
                        class="login_input"
                        placeholder="Пароль"
                        v-model="login_auth.password"
                    >
                    <div class="login_btn btn_admin" @click="auth_admin"> Войти</div>
                    <p class="font_min color--red">{{ login_auth.error_in }}</p>
                </div>
            </div>
        </div>
        <div class="app_wrapper_content wrapper" v-if="login === 'true'">
            <div class="left-sidebar">
                <leftMenu/>
            </div>
            <div class="views">
                 <router-view></router-view>
            </div>
        </div>
        <div class="app_wrapper_block footer_admin">
            <footer_admin/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@media (max-width:450px) {
    .footer_admin{
        display: none;
    }
}
.auth{
    width: 100%;
    // border: 1px solid;
    p{
        padding: 20px;
    }
}
.login{
    width: 30%;
    padding: 20px;
    @media (max-width:450px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &_input{
        outline: none;
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.411);
        padding: 10px;
        margin: 5px 0;
        display: block;
        width: 90%;
        &:focus{
            box-shadow:0 0 2px rgb(197, 101, 101) ;
        }
    }
    &_btn{
        width: 90%;
        padding: 10px;

    }
}

.app_wrapper_content{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    @media (max-width:450px) {
              width: 100%;
            }
    
}

.left-sidebar{
    width: 20%;
    padding: 10px;
    z-index: 120;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width:450px) {
                height:auto !important;
                width: 0;
                margin: 0;
                padding: 0;
                // display: none;
            }
}
.views{
    flex-grow: 1;
    height: 100%;
    padding: 10px;
    padding-bottom: -300px;
    width: 70%;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width:450px) {
                width: 100%;
            }
}
</style>
