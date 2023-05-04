<template>
    <div class="header wrapper padding--10">
        <div class="header_block logo font_min">{{HeaderContent.logo}}</div>
        <div class="header_block contact font_min">
            <div class="contact_block">
                <img src="../../../assets/img/svg/location.svg" alt="">
                <span>{{HeaderContent.location}}</span>
            </div>
            <div class="contact_block">
                <img src="../../../assets/img/svg/phone.svg" alt="">
                <span>
                    <a :href="'tel:' + HeaderContent.phone">{{HeaderContent.phone}}</a></span>
            </div>
        </div>
        <div class="header_block button">
            <div 
            @click="showModal = true"
            class="btn font_min font_btn">
                Заказать звонок
            </div>
        </div>
    </div>

    <popap :show="showModal" @close="showModal = false">
        <main_form/>
    </popap>
</template>
<script setup>
import { ref } from 'vue'
import popap from '../sidebars/popap.vue'
import main_form from '../forms/main_form.vue';
const showModal = ref(false)
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
		showModal.value = false
	}
});

const HeaderContent = ref({
    logo:'Выполнение работ в противопожарных системах',
    location:'г. Краснодар',
    phone:'8(905) 663-77-89'
})
</script>

<style scoped lang="scss">
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width:450px) {
            align-items: flex-start;
            flex-wrap: wrap;
                }
        &_block{
            display: flex;
            align-items: center;
            @media (max-width:450px) {
            }
        } 
        .logo{
            width: 20%;
            @media (max-width:450px) {
                    width: 40%;
                }

        }
        .contact{
            width: 30%;
            justify-content: space-between;
            @media (max-width:450px) {
                    width: 60%;
                }
            &_block{
                display: flex;
                align-items: center;
                justify-content: space-around;
                span a{
                    color: black;
                    text-decoration: none;
                    &:hover{
                        color: rgb(141, 47, 47);
                    }
                }
                @media (max-width:450px) {
                    justify-content: center;
                    flex-direction: column;
                }
                img{
                    width: 20px;
                    height: 30px;
                    margin-right: 10px;
                }
            }
        }
        .button{
            width: 20%;
            justify-content: flex-end;
            @media (max-width:450px) {
                    margin-top: 5px;
                    width: 100%;
                    justify-content: center;

                    & .btn{
                        width: 50%;
                    }
                }
        }    
    }

</style>