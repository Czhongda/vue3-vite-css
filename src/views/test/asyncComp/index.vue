<template>
  <div>
    <button @click="showTag=!showTag">加载</button>
    <AsyncComp v-if="showTag" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'
import { defineAsyncComponent } from 'vue'
const showTag = ref(false)
const time = (t, callback = () => { }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve()
    }, t)
  })
}
let count = 0
const AsyncComp = defineAsyncComponent(() => ({
  loader: import('./AsyncComp.vue'),
  //  () => {
  //   return new Promise((resolve, reject) => {
  //     (async function () {
  //       await time(2000)
  //       const res = await import('./AsyncComp.vue')
  //       if (count < 3) {
  //         console.log('执行了', count);
  //         count++
  //         reject(res)
  //       } else {
  //         resolve(res)
  //       }
  //     })()
  //   })
  // },
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 2000,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
}))
// const AsyncComp = defineAsyncComponent(() => 
//   import('./AsyncComp.vue')
// )
</script>