<script setup>

</script>
<template>
    <div class="error wrapper">
      <p class="error-title font--maxi">NOT FOUND 404 Страница не найдена</p>  
      <p class="error-image"></p> 
    </div>
</template>

<style scoped lang="scss">
    .error{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        width: 100%;
        height: 100%;
        &-title{
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(128, 128, 128, 0.519);
        }
        &-image{
            width: 450px;
            height: 300px;
            background: url('../assets/img/error.jpg') no-repeat;
            background-size: contain;
            background-position: center center;
            @media (max-width:450px) {
                width: 90%;
            }
        }
    }
</style>