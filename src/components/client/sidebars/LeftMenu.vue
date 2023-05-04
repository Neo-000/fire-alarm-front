<template>
    <div class="leftMenu">
        <p class="font_h1">Услуги</p>
        <ul class="leftMenu_list">
            <ClientServices />
        </ul>  
    </div>
</template>

<script setup>
import ClientServices from '../main/ClientServices.vue';

</script>

<style scoped lang="scss">
    .leftMenu{
        width: 100%;
        // height: 100%;
        margin: 20px 0;
        // overflow-y: auto;
        // overflow-x: hidden;
        // padding: 10px;
        // box-shadow: 0 0 2px rgba(0, 0, 0, 0.123);
        border-radius: 5px;
        // padding: 5px 10px;
        &_list{
            // padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        &_item{
            width: 100%;
            margin: 2px;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.148);
            border-radius: 5px;
            border-left: 1px solid transparent;
            a{
                display: block;
                width: 100%;
                height: 100%;
                padding: 10px;

            }
            &:hover{
                transition: all 0.5s ease 0s;
                border-left-color: red;
                a{
                    color: red;
                }
            }

        }
    }
</style>