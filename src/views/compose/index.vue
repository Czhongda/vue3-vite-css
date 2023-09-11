<template>
  <div>
    compose:
    <MouseDestination />
    <hr />
    <button @click="changeN">changeN</button>
    <div> x:{{ rv1.x }} y:{{ rv1.y }}</div>
  </div>
</template>
<script setup lang="ts">
import MouseDestination from './MouseDestination.vue';
import { onMounted, ref,reactive } from 'vue';
import { getTest } from '@/api/test'
import { useMoo } from '@/composebles/eMouse'

const dataList = ref([])

onMounted(async () => {
  // const res = await getTest()
  // dataList.value = res.data.data
  // console.log('请求结果',dataList.value[0])
  // http://10.10.40.150:3310/modulesApi/getList
  const res1: any = await fetch('http://10.10.40.150:3310/modulesApi/getList')
  // const res1:any = await fetch('https://jsonplaceholder.typicode.com/todos/3')
  const r1 = await res1.json()
  console.log('fetch结果', r1);
})

const n1 = ref(22)
const rv1 = reactive(useMoo(n1))
const changeN = () => {
  n1.value = 33
}

</script>