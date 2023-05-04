<script setup>
    import popap from '../sidebars/popap.vue'
    import main_form from '../forms/main_form.vue'
    import { ref } from 'vue';
    const showModal = ref(false)
</script>
<template>
    <div class="left_sidebar background--grey_light">
        <span class=" maintitle">Не нашли нужную вам услугу?</span>
            <div class="left_sidebar-title">
                <p class="text">
                 Закажите звонок и мы постараемся вам помочь
                </p>
                <img src="../../../assets/img/ser.png" alt="">
            </div>
            <div 
                class="left_sidebar-btn"
                @click="showModal = true"
            >
                Задать вопрос
            </div>
            <!-- <div class="white">l</div> -->
    </div>
    <popap :show="showModal" @close="showModal = false">
        <main_form/>
    </popap>
</template>
<style scoped lang="scss">
.white{
    width: 100%;
    padding: 5px;
    background: white;
}
.maintitle{
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.371);
    font-weight: 700;
    width: 100%;
    padding: 5px 10px;
    font-size: 21px;
    text-align: left;
}
    .left_sidebar{
        position: sticky;
        top: 0;
        width: 100%;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient( 45deg, #D6729D, #D05F63);
        border-radius: 5px;
        box-shadow: 0 4px 1px 4px rgb(255, 255, 255);
        color: white;
        // border-bottom: 10px solid white;
        img{
            width: 60px;
            height: 60px;
            padding: 0;
            opacity: 0.9;
        }
        &-title{
            display: flex;
            align-items: center;
            // text-align: justify;
            // font-size: 12px;
            padding: 5px 10px;
            // border: 1px solid;
            // box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.26);
            border-radius: 4px;

            .text{
                
                display: flex;
                // text-align: center;
                align-items: center;
                // justify-content: center;
                font-size: 14px;
                height: 100%;
                // font-weight: bold;
                color: white;
                padding: 0 5px;
            }
        }
        &-btn{
            user-select: none;
            cursor: pointer;
            width: 100%;
            padding: 5px;
            margin: 20px 0 10px 0;
            border-radius: 4px;
            // border: 1px solid white;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            background: rgba(0, 0, 0, 0.158);
            backdrop-filter: blur(4);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.403);
            transition: all 0.3s ease-in-out;
            &:hover{
                transition: all 0.3s ease-in-out;
                background: white;
                color: black;
            }
        }
    }
</style>