<script setup>


</script>

<template>

<div class="content-center font--banner">
      <div class="container">
        <div class="photo_block block block1" id="aps">
          <div class="str">
            <span>
              <el-icon color="red"><Paperclip /></el-icon>
              Мы предлагаем профессиональный монтаж автоматизированных пожарных систем, основанный на индивидуальном подходе к каждому клиенту, учете его особенностей и желаний.
            </span></div>
        </div>
        <div class="photo_block block block2" id="aupt">
          <div class="str">
            <span>
              <el-icon color="red"><Paperclip /></el-icon>
              Наша компания выберет тип пожарной системы, подходящий для вашего помещения и установит его строго в соответствии с государственными и международными стандартами и нормами.
            </span></div>
        </div>
        <div class="photo_block block block3" id="slabo">
          <div class="str">
            <span>
              <el-icon color="red"><Paperclip /></el-icon>
              Монтаж слаботочных систем – это важный этап при обустройстве помещений любого назначения
            </span></div>
        </div>
        <div class="photo_block block block4" id="video">
          <div class="str">
            <span>
              <el-icon color="red"><Paperclip /></el-icon>
              Мы установим современные камеры видеонаблюдения с разрешением от Full HD до 4K
            </span></div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.container {
  height: 500px;
  width: 100%;
  
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  // resize: both;
  overflow: hidden;
  @media (max-width:450px) {
    height: auto;
    flex-flow: column nowrap;
  }
}

.block {
  box-sizing: border-box;
  margin: 5px;
  transition: all 0.4s ease-in-out 0s;
  @media (max-width:450px) {
    // padding: 3px;
    width: 100% !important;
    margin: 2px !important;
    height: 140px !important;
  }
  &:hover, &:focus{
    transition: all 0.4s ease-in-out 0s;
    background-position: bottom 4px center !important;
  }
}

.block1 {
  width: calc(50% - 10px);
  height: calc(100% - 10px);
  // @media (max-width:450px) {
  //   width: calc(40% - 10px);
  //   // margin: 0;
  // }
}

.block2 {
  width: calc(50% - 10px);
  height: calc(50% - 10px);
  // @media (max-width:450px) {
  //   width: calc(60% - 10px);
  //   // margin: 0;
  // }
}

.block3,
.block4 {
  width: calc(25% - 10px);
  height: calc(50% - 10px);
  // @media (max-width:450px) {
  //   width: calc(30% - 10px);
  //   // margin: 0;
  // }
}

.block4 {
  margin-left: calc(-25% + 5px);
  // @media (max-width:450px) {
  //   margin-left: calc(-30% + 5px);
  // }
}
.str{      
  // text-indent: 20px;
  text-align: left;
  // word-spacing:-2px;
  // text-justify: distribute;
  color: rgba(255, 255, 255, 0.89);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.733);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 4px;
  padding: 10px 30px;
  // font-size: 15px;
  transition: all 0.4s ease-in-out 0s;
  opacity: 0.6;
  &:hover{
    opacity: 1;
    transition: all 0.4s ease-in-out 0s;
    backdrop-filter: blur(1px);
    background: rgba(0, 0, 0, 0.822);
    
  }
  @media (max-width:450px) {
    // font-size: 10px;
    padding: 5px;
  }
}
.photo_block{
  border-radius: 4px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
}

#aps{
    background: url('../assets/img/aps_montaj.jpeg');
  }
  #aupt{
    background: url('../assets/img/aypt_montage.webp');
  }
  #slabo{
    background: url('../assets/img/slabo_montaje.jpg');
  }
  #video{
    background: url('../assets/img/video_montaje.jpg');
  }

.content-center{
  width: 100%;
}
</style>