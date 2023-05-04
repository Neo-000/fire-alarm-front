import { createApp } from 'vue'
import '@/assets/scss/app.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import ru from 'element-plus/dist/locale/ru'

createApp(App)
.use(router)
.use(ElementPlus, {
    locale: ru
})
.mount('#app')