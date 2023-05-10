<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref} from 'vue';
import{Fold} from '@element-plus/icons-vue'
import {Category} from '../api/modules/category.js'
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled , Search} from '@element-plus/icons-vue'

const visible = ref(false)



const slideMenu =ref(false)
async function GetCategory () {
    const [err, res] = await Category.Getall();
    return res
}
const data = ref({
  Category:{}
})
const fetcnCategories = async () =>{
  let New = GetCategory();
  const categories = New.then(
        res =>{
          data.value.Category = res.data.msg
          return res
        },
        err => {return err}
      );
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
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const seach =ref()


onMounted(() => {
  const sizeX = document.documentElement.clientWidth;
  if(sizeX <= 450){
    ismobile.value = true
  } else {
    ismobile.value = false
  }
  fetcnCategories()
});
</script>

<template>
    <div class="wrapper">
        <el-drawer v-model="visible" :show-close="false" size="90%">
          <template #header="{ close, titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">Меню</h4>
            <el-button type="danger" @click="close">
              <el-icon><CircleCloseFilled /></el-icon>
            </el-button>
          </template>
          <el-menu
        :default-active="activeIndex"
        active-text-color="#c47a03"
        text-color="#000"
        class="el-menu-demo"
        :mode="ismobile?'vertical':'horizontal'"
        @select="handleSelect"
      >
    <el-menu-item index="1">Главная</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Услуги</template>
      <el-menu-item index="2-1" v-for="item in data.Category">
        <router-link :to="'/services/' + item['_id']">
          {{ item['name']}}
        </router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">О нас</el-menu-item>
        </el-menu>
        </el-drawer>
      <div class="menu" v-if="!ismobile">
        <el-menu
        :default-active="activeIndex"
        active-text-color="#c47a03"
        text-color="#000"
        class="el-menu-demo"
        :mode="ismobile?'vertical':'horizontal'"
        @select="handleSelect"
      >
    <el-menu-item index="1">Главная</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Услуги</template>
      <el-menu-item index="2-1" v-for="item in data.Category">
        <router-link :to="'/services/' + item['_id']">
          {{ item['name']}}
        </router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">О нас</el-menu-item>
        </el-menu>
      </div>
      <div class="search">
        <el-input v-model="seach" class="w-50 m-2" placeholder="Поиск">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      </div>
      <div class="mobile_button" v-if="ismobile" @click="visible = true">
        <span></span>
      </div> 
    </div>
    <div class="h-6" />
</template>

<style scoped lang="scss">
.bs{
  color:#c47a03
}

.wrapper{
  overflow-y: auto;
  overflow-x: hidden;
  // height: 100%;
  width: 100%;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  border-bottom: 1px solid rgb(204, 204, 204);
  padding-bottom: 0;
  @media (max-width:450px) {
    border: none;    
  }
}

.menu{
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  // height: 100%;
  width: 100%;
  z-index: 105;
  @media (max-width:450px) {
    
  }
}
.mobile_menu{

}
.activeMenu{
  right: 0;
}
:deep(.el-menu){
  border: none;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, 
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background: rgb(255, 255, 255) !important;
}

.mobile_button{
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
    & span{
      display: block;
      width: 30px;
      height: 4px;
      border-radius: 2px;
      background: grey;
      position: relative;

      &:hover, &::after:hover, &::before:hover{
          background: red;
      }
      &::after, &::before{
        content:"";
        width: 100%;
        height: 100%;
        border-radius: inherit;
        position: absolute;
        background: inherit;
      }
      &::after{
        top: -8px;
      }
      &::before{
        top: 8px;
      }
    }
}

:deep(.el-input__wrapper:hover){
  box-shadow:0 0 0 1px rgb(249, 249, 249);
  border: 1px red;
}
</style>