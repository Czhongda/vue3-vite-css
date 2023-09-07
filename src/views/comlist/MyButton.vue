<template>
  <BaseButton class="my" />
  
  <!-- <hr > -->
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import BaseButton from './BaseButton.vue'
// const props = defineProps(['class'])
// onMounted(() => {
//   console.log(111,props.class)
// })
// const emits =  defineEmits<{
//   (e:'click',tag:string) :void
// }>()

onMounted(() => {
  // console.log(999,$attrs)
})

</script>