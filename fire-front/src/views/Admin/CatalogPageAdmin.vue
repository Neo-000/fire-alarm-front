<script setup>
import {Category} from '@/api/modules/category.js';
import {Services} from '@/api/modules/services.js';
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted, watchEffect, onBeforeUnmount} from 'vue'
import {Iphone,Plus, DeleteFilled} from '@element-plus/icons-vue';
import { ElMessageBox, ElMessage  } from 'element-plus';




</script>
<template>
      <div class="catalog">
        <div class="catalog_header">
          <span>Выберите категорию</span>
          <el-tree-select v-model="value" :data="category" :render-after-expand="false" />
        </div>
      </div>
</template>

<style scoped lang="scss">
  .catalog{
    padding: 10px;
    padding-top: 0;
    padding-bottom: 160px;
  }
  .catalog_header{
    & span{
      margin-right: 10px;
    }
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    width: 100%;
    background: white;
    padding: 10px;
  }
</style>