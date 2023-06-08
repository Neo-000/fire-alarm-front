<script setup>
import {Category} from '@/api/modules/category.js'
</script>
<template>
      <div class="catalog">
        <div class="catslog_header">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
        </div>
      </div>
</template>

<style scoped lang="scss">

</style>