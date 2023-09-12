<template>
  <div>
    customDirection
    input: <input v-focus ref="inputRef" color="blue" type="text" v-model="inputValue" id="1222" data-id="1234567890" data-user="carinaanand" data-date-of-birth />
  </div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
const inputRef = ref(null)
const inputValue  = ref('')
// const vFocus = {
//   mounted: (el, binding, vnode, prevVnode) => {
//     el.focus()
//     console.log('el, binding, vnode, prevVnode',el, binding,888, vnode.value, prevVnode);
//   }
// }
onMounted(() => {
  inputValue.value = 'carinaanand'
})

setTimeout(() => {
  inputRef.value.id='user'
  console.log('测试dataset',inputRef.value.value,inputRef.value.id,inputRef.value.type,inputRef.value.getAttribute("color"));
}, 3000);

</script>
