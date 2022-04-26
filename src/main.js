import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import axios from 'axios'
const app = createApp(App)
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
