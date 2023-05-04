<template>
    <div class="footer">
        <div class="wrapper footer_content">
            Администраторы сайта:
            <p>Некрылов В.Н.</p>
            <router-link to="/" > На главную</router-link>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.footer{
    width: 100%;
    border-top: 1px solid rgba(255, 32, 32, 0.434);
    &_content{
        padding: 10px;
    }
}
</style>