<script setup lang="ts">
import { ref ,onMounted} from 'vue'
const mess = ref('something')
const props = defineProps({
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
onMounted(() => {
  console.log(333,props.propG(mess.value));
  
})
const msg = '哈哈哈哈哈'
</script>
<template>
  <div>函数</div>
  <div>{{ msg }}</div>
</template>