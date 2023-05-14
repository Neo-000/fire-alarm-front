<script setup>
import { ref , onMounted} from 'vue';
import { useRoute } from 'vue-router';

const fetchServices = async () => {

}

const route = useRoute() ;
const id = route.params.id

</script>

<template>
    <div class="services">
        services
        id:({{ id }})
    </div>
</template>

<style scoped>

</style>