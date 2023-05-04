<template>
    <div class="reviews_view">
        Отзывы:
        <div class="stick"></div>
        <div class="rew">
            <div class="rewies_block" v-for="item in reviews">
            <div class="rewies_block-date font_h3">
             дата: {{ item.date }}
            </div>
            <div class="rewies_block-text">
                {{ item.text }}
            </div>
            <div class="rating-mini">
                <span class="active" v-if="item.rate >= 1"></span>	
                <span class="active" v-if="item.rate >= 2"></span>	
                <span class="active" v-if="item.rate >= 3"></span>	
                <span class="active" v-if="item.rate >= 4"></span>	
                <span class="active" v-if="item.rate >= 5"></span>	
            </div>
        </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
const reviews = ref([
    {
        text:'Все отлично, работу выполнили',
        date:'12.01.2022',
        rate:'5'
    },
    {
        text:'Все хорошо',
        date:'15.01.2022',
        rate:'5'
    },
    {
        text:'Неплохо',
        date:'18.01.2022',
        rate:'4'
    },
    {
        text:'Быстро и качественно',
        date:'19.01.2022',
        rate:'5'
    },
    {
        text:'Великолепно!',
        date:'21.01.2022',
        rate:'5'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
    {
        text:'Удовлетворительно',
        date:'12.02.2022',
        rate:'3'
    },
])
</script>

<style scoped lang="scss">
    .rew{
        width: 100%;
        display: flex;
        flex-direction: space-between;
        flex-wrap: wrap;
    }
    .rewies_block{
        margin: 2px;
        padding: 10px 20px;
        width: 300px;
        // height: 120px;
        border-radius: 10px;
        border: 1px solid rgb(223, 223, 223);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .reviews_view{
        width: 100%;
        padding: 15px;
    }
    .rating-mini {
	display: inline-block;
	font-size: 0;
}
.rating-mini span {
	padding: 0;
	font-size: 20px;
	line-height: 1;
	color: lightgrey;
}
.rating-mini > span:before {
	content: '★';
}
.rating-mini > span.active {
	color: gold;
}
</style>