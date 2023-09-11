<template>
  <div>
    compose:
    <MouseDestination />
  </div>
</template>
<script setup lang="ts">
import MouseDestination from './MouseDestination.vue';
import { onMounted,ref } from 'vue';
import {getTest} from '@/api/test'

const dataList =ref([])

onMounted(async () => {
  const res = await getTest()
  
  dataList.value = res.data.data
  console.log('请求结果',dataList.value[0])
})

</script>