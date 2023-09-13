<template>
  <div>
    customDirection
    input: <input v-focus ref="inputRef" color="blue" type="text" v-model="inputValue" id="1222" data-id="1234567890" data-user="carinaanand" data-date-of-birth />
    <div>{{ $translate('greetings.hello') }}</div>
  </div>
</template>
<script setup lang="ts">
import {ref,onMounted,getCurrentInstance} from 'vue'
import type {ComponentInternalInstance} from 'vue'
const inputRef = ref<HTMLInputElement|null>(null)
const inputValue  = ref('')
// const vFocus = {
//   mounted: (el, binding, vnode, prevVnode) => {
//     el.focus()
//     console.log('el, binding, vnode, prevVnode',el, binding,888, vnode.value, prevVnode);
//   }
// }



onMounted(() => {
  const {proxy} = getCurrentInstance() as ComponentInternalInstance
  inputValue.value = 'carinaanand'
  // console.log('translate',$translate('greetings.hello'));
  console.log('proxy',proxy?.$translate('greetings.hello'));
})

setTimeout(() => {
  if(inputRef.value){
    inputRef.value.id='user'
    console.log('测试dataset',inputRef.value.value,inputRef.value.id,inputRef.value.type,inputRef.value.getAttribute("color"));
  }
}, 3000);



</script>
