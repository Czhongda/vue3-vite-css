<template>
<button class="base" @click="baseClick">基按键</button>
<!-- <span>my attribute: {{ $attrs }}</span> -->
</template>
<script setup lang="ts">
import { onMounted,useAttrs} from 'vue'
const attrs = useAttrs()
const baseClick = () => {
  console.log(111,'基按键点击了')
}
onMounted(() => {
  console.log (999,attrs)
})

</script>