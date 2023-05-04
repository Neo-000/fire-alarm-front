<script setup>
import { ref } from 'vue'
const categories = ref([
    {
        title:'Монтаж АПС',
        img:'/src/assets/img/back_test.jpg'

    },
    {
        title:'Монтаж АУПТ',
        img:'/src/assets/img/back_test.jpg'

    },
    {
        title:'Монтаж АПС',
        img:'/src/assets/img/back_test.jpg'

    },
    {
        title:'Монтаж АПС',
        img:'/src/assets/img/back_test.jpg'

    },
    {
        title:'Монтаж АПС',
        img:'/src/assets/img/back_test.jpg'

    },
    {
        title:'Монтаж АПС',
        img:'/src/assets/img/back_test.jpg'

    },
])
</script>
<template>
    <div class="photo">
        <div class="photo_block" v-for="item in categories">
            <div class="photo_block-title font_large">{{ item.title }}</div>
            <img :src="item.img" alt="">
        </div>
    </div>
</template>
<style scoped lang="scss">
    .photo{
        width: 100%;
        display: flex;
        margin: 10px 0;
        padding: 10px 0;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;


        &_block{
            position: relative;
            width: 20%;
            border-radius: 10px;
            margin: 5px;
            @media (max-width:450px) {
                width: 30%;
                align-items: center;
                
            }
            img{
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
            &-title{
                position: absolute;
                top: 0;
                height: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background: rgba(0, 0, 0, 0.36);
                backdrop-filter: blur(2px);
                border-radius: 10px;
                transition: all 0.3s ease-in-out 0s;
                font-weight: 900;
                text-shadow: 0 0px 10px black;
                &:hover{
                    transition: all 0.4s ease-in-out 0s;
                    backdrop-filter: blur(0px);
                }
            }
        }

    }
</style>