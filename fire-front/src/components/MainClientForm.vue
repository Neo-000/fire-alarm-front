<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';


var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
document.addEventListener("DOMContentLoaded",function(){var a=function(e){var c=e.target,n=c.dataset.phoneClear;c=(c=c.dataset.phonePattern)?c:"+7(___) ___-__-__";var g=0,k=c.replace(/\D/g,""),d=e.target.value.replace(/\D/g,"");"false"!==n&&"blur"===e.type&&d.length<c.match(/([_\d])/g).length?e.target.value="":(k.length>=d.length&&(d=k),e.target.value=c.replace(/./g,function(l){return/[_\d]/.test(l)&&g<d.length?d.charAt(g++):g>=d.length?"":l}))},b=document.querySelectorAll("[data-phone-pattern]");
b=$jscomp.makeIterator(b);for(var f=b.next();!f.done;f=b.next()){f=f.value;for(var m=$jscomp.makeIterator(["input","blur","focus"]),h=m.next();!h.done;h=m.next())f.addEventListener(h.value,a)}});


const ruleFormRef = ref<FormInstance>();
const form = reactive({
    name:"",
    firstname: "",
    surname: "",
    phone: "",
    msg:''
});




const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
  surname: [
    { required: true, message: 'это обязательное поле', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {

}
</script>
<template>
    <el-form
    label-position="left"
    label-width="100px"
    :model="form"
    style="max-width: 320px"
    :rules="rules"
    
    >
        <el-form-item 
        label="Фамилия"
        prop="surname"
        >
            <el-input v-model="form.surname" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Имя" prop="name">
            <el-input v-model="form.name" 
            show-word-limit
            maxlength="10"/>
        </el-form-item>
        <el-form-item label="Отчество">
            <el-input v-model="form.firstname" />
        </el-form-item>
        <el-form-item label="Телефон" prop="phone">
            <el-input v-model="form.phone" v-phone>
                <template #prepend>+7</template>
            </el-input>
        </el-form-item>
    </el-form>
</template>
<style scoped>

</style>