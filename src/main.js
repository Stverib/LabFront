import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'swiper/css';

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
