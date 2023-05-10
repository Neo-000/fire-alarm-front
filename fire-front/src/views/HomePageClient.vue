<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';

</script>

<template>
<div class="wrapper homePage">
    <div class="content-top">
        <div class="bannerHome">
            <div class="bannerHome-content">
                <div class="form">
                    <el-form>
                        <el-input></el-input>
                    </el-form>
                </div>
                <div class="title">
                    Выполнение работ в противопожарных системах, электромонтаж, монтаж АУПТ
                </div>
            </div>
        </div>
    </div>
    <div class="content-center">
        это для инфоблока
    </div>
    <div class="content-bottom">
        это для фото и прочей фигни
    </div>
</div>
</template>

<style scoped lang="scss">

.homePage{
overflow-y:auto;
height: 100%;
}
.bannerHome{
    width: 100%;
    // height: 300px;
    background: url('../assets/img/banner2.png') no-repeat;
    background-position: center center;
    background-size: cover;

    &-content{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width:450px) {
            flex-direction: column-reverse;
        }
        height: 750px;
        // padding: 50px;

        .form{
            width: 50%;
            background: black;
            padding: 20px;
            @media (max-width:450px) {
            width: 100%;
        }
        }
        .title{
            color: white;
            font-size: 34px;
            padding: 50px;
            width: 50%;
            background: rgba(0, 0, 0, 0.297);
            backdrop-filter: blur(2px);
            border-radius: 0 5px 5px 0;
            @media (max-width:450px) {
            width: 100%;
        }
        }
    }
}
</style>