import { createApp } from 'vue';
import '@/assets/scss/app.scss';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router';
import ru from '@/assets/types/ru';
// import { Vue3Mq } from 'vue3-mq';


createApp(App)
  .use(router)
  // .use(Vue3Mq, {
  //   breakpoints: {
  //     mobile: 0,
  //     tablet: 536,
  //     desktop: 900,
  //     lg: 1200,
  //   }})
  .use(ElementPlus, {
    locale: ru,
  })
  .mount('#app');