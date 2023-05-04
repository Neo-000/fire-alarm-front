<template>
    <div class="product">
        <!-- {{ $parent.$on('update', newList)}} -->
        {{ $parent }}
        <div class="products" v-for="item in bd.products">
            <div 
            v-if="item.id === this.$route.params['products']"
            class="products_card"
             >
             {{ getPages( item.services.length) }}
            <p class="product_card-title font_h1">{{ item.name }}</p>
            <ul class="product_card-list">
                <li class="item"
                    v-for="price in item.services.slice(min,max)"
                >
                    <p class="item-text">{{ price.title }}</p>
                    <div class="item-price btn">{{ price.price }}</div>
                </li>
            </ul>
            <div class="control">
                {{ pg }} <br>
                {{ listes }}
                <div class="control_btn" @click="Pag('-')">
                    <el-icon><ArrowLeft /></el-icon>
                    <span class="text">Назад</span>
                </div>
                <div class="control_btn" @click="Pag('+')">
                    <span class="text">Далее</span>
                    <el-icon><ArrowRight /></el-icon>
                </div>
                <div class="control_pag">
                </div>
                <div class="control_pag">
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
    import {ArrowLeft, ArrowRight} from '@element-plus/icons-vue'
    import { ref, computed } from 'vue'
    import bd from '../../../data/bd.json'
    import router from '../../../router'
    const slice = ref(1)
    const list = 4
    const min = ref(0)
    const max = ref(list)
    const loader = defineProps({
        l:''
    })
    let pg = ref(loader.l)
    let listes = {}
    function getPages(slide){
        let pages = Math.ceil(slide / list)
        listes = {}
        
        for (let i = 0; i < pages; i++) {
            listes[i]= {}
            listes[i].min = 0
            listes[i].max = list
            if(i > 0 && i < pages){
                let bMin  = listes[i-1].min
                let bMax  = listes[i-1].max
                listes[i].min = bMin + 4
                listes[i].max = bMax + 4
            }
        }
        console.log('----')
        console.log(listes)

    }
    function newList(){
        console.log('Newlist')
    }

    function Pag(action){ 
        let length = Object.keys(listes).length;
        if(action == '+'){
            pg.value += 1
            if(pg.value > length - 1){
                pg.value = length - 1
            }
            // console.log(listes[pg-1].max)         
        }
        if(action == '-'){
            pg.value -= 1
            if(pg.value <= 0){
                pg.value = 0 
            }

        }
        console.log(pg.value)
        if(pg.value == length){
            return false
        }
        min.value =  listes[pg.value].min           
        max.value =  listes[pg.value].max 
    }


    router.beforeEach(() => {
        slice.value = 1
        min.value = 0
        max.value = list
        // console.log(min.value + ' - ' + max.value)
    })
    
    
</script>
<style lang="scss" scoped>

.product{
    padding: 5px 10px;
}
.text{
    text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        // background: black;
    
    @media (max-width:450px) {
        display: none;
}
}
.control{
    // box-shadow: 0 0 2px rgba(0, 0, 0, 0.43);
    // width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    &_pag{
        color: grey;
        font-size: 12px;
        padding: 5px 10px;
    }
    &_btn{
        @media (max-width:450px) {
            font-size: 20px;
        }
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        // width: 30px;
        // font-weight: 600;
        color: green;
        margin:0 5px;
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid rgb(23, 178, 119);
        &:hover{
            background: rgb(23, 178, 119);
            color: white;
            @media (max-width:450px) {
                background: white;
                color: green;
            }
        }
    }
}
.products{
    width: 100%;
    // background: rgb(120, 249, 114);
    // padding: 10px;


    &_card{
        display: flex;
        flex-direction: column;
        &-title{
            width: 100%;
            padding: 20px;
            font-weight: 900;
            margin-bottom: 30px;
        }
        &-list{
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            
        }
    }
}
.item{
    border-left: 1px solid red;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.115);
    padding: 10px;
    margin: 10px 0 ;
    border-radius: 5px;
    &-text{
        &:first-letter{
            text-transform: uppercase;
        }
    }
    &-price{
        width: 30%;
    }
    @media (max-width:450px) {
        width: 100%;

        &-price{
            min-width: 130PX;
            font-size: 3.4vw;

        }

    }

}

</style>