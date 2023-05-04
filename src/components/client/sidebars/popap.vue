<script setup>

import {Close} from '@element-plus/icons-vue'
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <div name="modal">
    <div v-if="show" class="modal">
      <div class="modal-container">
          <slot>default</slot>
            <button
              class="btn button_close"
              @click="$emit('close')"
            >
            <el-icon><Close /></el-icon>
        </button>
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.395);
        backdrop-filter: blur(5px);
        z-index: 100;
        @media (max-width:450px) {
                padding:10px;
            }
        &-container{
            padding: 20px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            position: relative;
            @media (max-width:450px) {
                padding: 30px 10px;
            }
        }
    }
    .button_close{
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
        position: absolute;
        top: 20px;
        right: 20px;
    }

</style>