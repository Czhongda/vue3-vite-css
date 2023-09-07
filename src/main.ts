import './assets/main.css'
// import {countTab, countTab2} from '@/components/tems'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.component('countTab', countTab).component('countTab2', countTab2)

app.use(createPinia())
app.use(router)

app.mount('#app')
