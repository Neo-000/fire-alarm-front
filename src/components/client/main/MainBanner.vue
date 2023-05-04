<script setup>
import main_form from '../forms/main_form.vue';
</script>
<template>
    <div class="banner">
        <div class="banner_title font_banner">
            Выполнение работ в противопожарных системах. Монтаж видеонаблюдения и скуд. Монтаж АУПТ
        </div>
        <div class="banner_form">
            <main_form/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .banner{
        width: 100%;
        background: url('../../../assets/img/banner2.png');
        border-radius: 3px;
        padding: 50px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width:450px) {
            padding: 10px;
            flex-direction: column;
            background-position: center center;
        }
        &_title{
            width: 60%;
            user-select: none;
            color: white;
            background: linear-gradient(217deg, rgba(0, 0, 0, 0.138), rgba(125, 116, 116, 0.297) 40.71%),            
                        linear-gradient(177deg, rgba(0, 0, 0, 0.122), rgba(0,255,0,0) 70.71%),          
                        linear-gradient(70deg, rgba(177, 16, 16, 0.144), rgba(0,255,0,0) 70.71%);          

            // text-shadow: 0 0 10px rgba(0, 0, 0, 0.868);
            padding: 10px;
            border-radius: 5px;
            backdrop-filter: blur(0px);
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width:450px) {
                width: 100%;
                padding: 10px;
                margin-bottom: 5px;
                border-radius: 5px;
                text-shadow: 0 0 10px rgba(0, 0, 0, 0);
            }
        }
    }

</style>
