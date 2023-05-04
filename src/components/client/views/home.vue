<template>
    <div class="app_wrapper_content">
        <div class="about_view font_h1 ">
        <MainBanner />
        <InfoBlog />
        <PhotoBlock />

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MainBanner from '../main/MainBanner.vue'
import InfoBlog from '../sidebars/InfoBlog.vue'
import PhotoBlock from '../sidebars/PhotoBlock.vue'


</script>


<style scoped lang="scss">
    .about_view{
        padding: 20px;
        width: 100%;
        @media (max-width:450px) {
            padding: 10px 5px;
        }
    }
</style>