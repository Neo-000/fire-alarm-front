<script setup>
import { ref ,reactive, onMounted, onBeforeUpdate, onBeforeMount, watchEffect, toRefs} from 'vue';
import { useRoute } from 'vue-router';
import {Category}  from '../api/modules/category.js'

const route = useRoute();
const id = ref();
console.log(id.value)

const data = ref({
    category_name:'',
    services:[]

})

async function GetCategoryName () {
    const [err, res] = await Category.Name({'_id':id.value});
    return res
}
async function GetServicesId () {
    const [err, res] = await Category.GetServices({'_id':id.value});
    return res
}
const fetcnCategories = async () =>{
  let name = GetCategoryName();
  const category_name =  name.then(
        res =>{
            console.log('categoryName')
            console.log(res)
          data.value.category_name = res.data
          return res
        },
        err => {return err}
      );
}

const fetchServices = async () => {
    let services = GetServicesId();
    const id_services = services.then(
        res =>{
            console.log('services')
            console.log(res)
          if(res != null){
            data.value.services = res.data.services
          } else {
            data.value.services = 'Пока не добавлено'
          }
          return res
        },
        err => {return err}
      );
}

const fetchall = async () => {
    await fetcnCategories();
    await fetchServices();
}
onBeforeUpdate(() => {
    id.value= route.params.id;
    console.log(id.value)
    // fetchall()
})
onMounted(() => {
    id.value = route.params.id;
    fetchall()
})

watchEffect(() => {  
  const parse = toRefs(id);  
  console.log(parse);
});
</script>

<template>
    <div class="services">
        <div class="left_sidebar">Left Sidebar</div>
        <div class="services_view">
            <div class="services_view-title">{{data.category_name }}</div>
            {{ data }}
        </div>
    </div>
</template>

<style scoped>
.services{
    display: flex;
    width: 100%;
}
</style>