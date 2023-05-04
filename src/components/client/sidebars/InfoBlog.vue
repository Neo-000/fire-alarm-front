<script setup>
    import { ref } from 'vue'
    const info =ref([
        {
            title:'Быстрота',
            text:'Мы всегда точно соблюдаем договорённости и сроки. Выполняем работы так быстро, насколько это возможно, без ущерба для качества.Находим компромиссные решения и оптимальные решения проблем.'
        },
        {
            title:'Качество',
            text:'Мы настроены на плодотворные отношения с подрядчиками и поставщиками, рассчитанные на максимально долгий срок.'
        },
        {
            title:'Надежность',
            text:'Мы ответственно реализуем проекты заказчиков, наращивая опыт и совершенствуя компетентность. Надежные системы безопасности в Краснодаре с гарантией качества.'
        }
    ])
</script>
<template>
    <div class="info">
        <div
            class="info_block" 
            v-for="(item, index) in info">
            <div class="info_block-title">
                <div class="info_block-index font_h1">{{ index + 1 }}</div>
                <span>{{ item.title }}</span>
            </div>
            <div class="info_block-text font_h3">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .info{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 30px 0;
        // border: 1px solid;
        @media (max-width:450px) {
                flex-direction: column;
            }
        &_block{
            width: 30%;
            justify-content: space-around;
            align-items: center;
            display: flex;
            flex-direction: column;
            @media (max-width:450px) {
                width: 100%;
                align-items: center;
            }
            &-title{
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: flex-start;
                font-weight: 900;
                @media (max-width:450px) {
                    width: 100%;
                    justify-content: center;
                }
                span{
                    display: block;
                    width: 50%;
                    text-align: center;
                    @media (max-width:450px) {
                        width: 40%;

                    }
                }
            }
            &-index{
                width: 60px;
                height: 60px;
                background: #b022227e;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                @media (max-width:450px) {
                    width: 30px;
                    height: 30px;
                }
            }
            &-text{
                white-space: pre-wrap;
                padding: 10px 0;
                letter-spacing: -0.1px;
                text-align: left; /* Выравнивание по ширине */
                // text-align-last: right;
                color: rgb(55, 55, 55);
                @media (max-width:450px) {
                    padding: 10px 20px;
                }

            }
        }
    }
</style>
