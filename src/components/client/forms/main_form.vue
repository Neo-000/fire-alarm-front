<template>
    <div class="form">
        <div class="form__label">
            Оставте заявку, наши специалисты свяжуться с вами в ближайшее время и ответят на ваши вопросы!
        </div>
        <div class="input_wrapper">
            <input
            placeholder="Ваше имя" 
            v-model="FormData.name"
            type="text" 
            required/>
            <span>{{ FormError.name }}</span>
        </div>
        <div class="input_wrapper">
            <input
            placeholder="+7 (000) 000-00-00" 
            v-model="FormData.phone"
            type="text"
            data-phone-pattern
            required
            />
            <span>{{ FormError.phone }}</span>
        </div>
        <div class="input_wrapper">
            <input
            placeholder="Email" 
            v-model="FormData.email"
            type="text" />
        </div>
        <div class="stick"></div>
        <button 
            @click="onSubmit"
            type="submit"
            class="btn form_btn">
            Отправить
        </button>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const FormData = reactive({
    name: '',
    email: '',
    phone:''
  })
  const FormError = reactive({
    name:'',
    phone:''
  })
  function onSubmit_check(e){
    if(!FormData.name){
        FormError.name = 'введите имя'
    } else{
        FormError.name = ''
    }
    if(!FormData.phone){
        FormError.phone = 'введите номер телефона'
    } else {
        FormError.phone = ''
    }
  }
  
  function onSubmit() {
    onSubmit_check()
    console.log('submit!')
  }

  var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
    document.addEventListener("DOMContentLoaded",function(){var a=function(e){var c=e.target,n=c.dataset.phoneClear;c=(c=c.dataset.phonePattern)?c:"+7(___) ___-__-__";var g=0,k=c.replace(/\D/g,""),d=e.target.value.replace(/\D/g,"");"false"!==n&&"blur"===e.type&&d.length<c.match(/([_\d])/g).length?e.target.value="":(k.length>=d.length&&(d=k),e.target.value=c.replace(/./g,function(l){return/[_\d]/.test(l)&&g<d.length?d.charAt(g++):g>=d.length?"":l}))},b=document.querySelectorAll("[data-phone-pattern]");
    b=$jscomp.makeIterator(b);for(var f=b.next();!f.done;f=b.next()){f=f.value;for(var m=$jscomp.makeIterator(["input","blur","focus"]),h=m.next();!h.done;h=m.next())f.addEventListener(h.value,a)}});

  </script>
  
  <style lang="scss" scoped>
  .form{
    width: 480px;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: url('../../../assets/img/support.png') white;
    background-position: right 20% center;
    background-size: 80px 80px;
    background-repeat: no-repeat;
    @media (max-width:450px) {
        background: white;
        width: 100%;
        background-size: 50px 50px;
    }

    &__label{
        font-size: 14px;
        font-weight: 600;
        padding: 4px;
    }
    &_btn{
        margin: 6px 0;
        width: 30%;
        padding: 5px 10px;
        font-size: 14px;
        @media (max-width:450px) {
            width: 100%;
        }
    }
    .input_wrapper{
        display: flex;
        flex-direction: column;
        margin: 2px 0;
        width: 50%;
        padding: 0px;
        @media (max-width:450px) {
            width: 100%;
        }
        span{
            color: red;
            font-size: 12px;
            padding: 0 10px;
            height: 12px;
        }
        
    }
    input{
        display: block;
        box-shadow: 0px 0px 2px rgb(208, 208, 208);
        border: none;
        padding: 5px 10px;
        border-radius: 5px ;
        font-size: 14px;
        width: 100%;
        background: rgba(255, 255, 255, 0.582);
        &:focus{
            box-shadow: 0px 0px 2px rgba(242, 18, 18, 0.679);
            outline: none;
            border-color: transparent !important;
            // background: rgba(255, 94, 94, 0.03);

        }
    }
  }

  </style>