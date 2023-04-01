import App from './App.vue'
import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.js"

import router from './router/router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import store from './store'

const app = createApp(App)
app.use(Toast)
app.use(router)
app.use(store)
app.mount('#app')