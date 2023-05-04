<template>
    <div class="error">
        <div class="error_msg">
            <img src="../../../assets/img/error.jpg" alt="">
            <p class="font_h1">К сожалению мы не нашли такую страницу <img src="../../../assets/img/svg/smile.svg" alt=""></p>
        </div>
    </div>
</template>
<script setup>


</script>
<style lang="scss" scoped>
 .error{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &_msg{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img{
            width: 70%;
        }
        p{  
            img{
                width: 80px;
            }
            display: flex;
            align-items: center;
            color: rgb(80, 80, 80);
        }
    }
 }
</style>