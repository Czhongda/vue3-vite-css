import './assets/main.css'
// import {countTab, countTab2} from '@/components/tems'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive('focus', {
  mounted(el, binding, vnode, prevVnode) {
    // console.log(binding.value.color) // => "white"
    console.log('绑定','el, binding, vnode, prevVnode',el,el.type,el.id,el.dataset, binding, vnode, prevVnode);
  }
})
// app.component('countTab', countTab).component('countTab2', countTab2)

app.use(createPinia())
app.use(router)

app.mount('#app')
