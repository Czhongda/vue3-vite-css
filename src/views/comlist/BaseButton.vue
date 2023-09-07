<template>
<button class="base" @click="baseClick">基按键</button>
<!-- <span>my attribute: {{ $attrs }}</span> -->
</template>
<script setup lang="ts">
import {keyName} from '@/utils/keys'
import { onMounted,useAttrs,inject} from 'vue'
const attrs = useAttrs()
const baseClick = () => {
  console.log(111,'基按键点击了')
}
const deName = ()=>{
  console.log('调用了deName');
  
  return 'deName'
}
const name = inject<string>(keyName,deName,true)
onMounted(() => {
  console.log (999,name)
})

</script>