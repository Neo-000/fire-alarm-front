import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './assets/scss/main.scss'
import './assets/scss/root.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
