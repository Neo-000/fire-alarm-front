<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref} from 'vue';
import{Fold} from '@element-plus/icons-vue'
import {Category} from '../api/modules/category.js'
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

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
          This is drawer content.
        </el-drawer>
      <div :class="ismobile?'menu mobile_menu' + (slideMenu?' activeMenu':' noactive'):'menu'">
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
        <el-input></el-input>
      </div>
      <div class="mobile_button" v-if="ismobile" @click="visible = true">
        <el-icon><Fold /></el-icon>
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
  height: 100%;
  width: 100%;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu{
  overflow-y: auto;
  overflow-x: hidden;
  // height: 100%;
  width: 100%;
  @media (max-width:450px) {
    
  }
}
.mobile_menu{

}
.activeMenu{
  right: 0;
}


.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, 
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background: rgb(255, 255, 255) !important;
}
</style>