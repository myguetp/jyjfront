import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  { VueQueryPlugin } from 'vue-query'
import VueMapboxTs from "vue-mapbox-ts";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';




import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VueMapboxTs)
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.use(VueQueryPlugin)

app.mount('#app')
