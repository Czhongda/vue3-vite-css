<template>
  <div>
    compose:
    <MouseDestination />
    <hr />
    <button @click="changeN">changeN</button>
    <div> x:{{ ro.x }} y:{{ ro.y }}</div>
  </div>
</template>
<script lang="ts">
import { useMoo } from '@/composebles/eMouse'
import { onMounted, ref,reactive } from 'vue';
const n1 = ref(22)
const {ro} = useMoo(n1)
const changeN = () => {
  n1.value *= 2 
}
</script>
<script setup lang="ts">
import MouseDestination from './MouseDestination.vue';

import { getTest } from '@/api/test'


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



</script>