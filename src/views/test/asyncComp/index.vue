<template>
  <div>
    <button @click="showTag = !showTag">加载</button>
    <AsyncComp v-if="showTag" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'
import { defineAsyncComponent } from 'vue'
const showTag = ref(false)
console.log(333, defineAsyncComponent);

const time = (t:number, callback = () => { }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve(t)
    }, t)
  })
}
let count = 0
// const AsyncComp = defineAsyncComponent(() => ({
//   loader:() => import('./AsyncComp.vue'),
//   // 加载异步组件时使用的组件
//   loadingComponent: LoadingComponent,
//   // 展示加载组件前的延迟时间，默认为 200ms
//   delay: 2000,

//   // 加载失败后展示的组件
//   errorComponent: ErrorComponent,
//   // 如果提供了一个 timeout 时间限制，并超时了
//   // 也会显示这里配置的报错组件，默认值是：Infinity
//   timeout: 3000,
//   onError(error, retry, fail, attempts) {
//     // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
//     // 必须调用其中一个才能继续错误处理。
//     if (attempts < 3) {
//       // 请求发生错误时重试，最多可尝试 3 次
//       console.log(attempts)
//       retry()
//     } else {
//       fail()
//     }
//   }
// }))
// const AsyncComp = defineAsyncComponent(() =>
//   import('./AsyncComp.vue')
// )
</script>