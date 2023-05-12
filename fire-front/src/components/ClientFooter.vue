<script setup>
</script>

<template>
    <div class="wrapper">
        <div class="footer none-select font--footer">
          <div class="footer_item">
            <p>Все предложения, размещенные на сайте, не являются публичной офертой</p>
            <p>© ООО"КубаньПожАудит"</p>
          </div>
          <div class="footer_item">
            <p>350012, г.Краснодар, ул. им Академика Лукьяненко П.П., д.32, офис 4</p>
          </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.footer{
  display: flex;
  justify-content: flex-start;
  @media (max-width:450px) {
    // flex-direction: column;
  }
  &_item{
    margin: 2px;
    padding: 2px;

  }
}
</style>