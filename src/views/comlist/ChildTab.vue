<template>
  <div>
    <!-- 在模板中使用插槽 -->
    <slot></slot>
    <slot name="footer"></slot>
    <button @click="func('哈哈哈')">点击</button>
    <button @click="sendEmit('哈哈哈')">点击</button>
  </div>
</template>
 
<script lang="ts">
import { onMounted, useSlots } from 'vue'
class Person {
  firstName: string
  lastName: string
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const func = (tag:string) => {
  console.log(tag ||'func')
}
</script>
<script setup lang="ts">
const props = defineProps<{
  author: Person
}>()

onMounted(()=>{
  console.log(333,'输出func');
  console.log(props.author.firstName,props.author.lastName);
  
  func('')
})
const slots = useSlots()
// 访问插槽默认插槽default、具名插槽footer
console.log(333,slots.default)
// console.log(222,slots.footer)

const edits = defineEmits<{
  (e:'some-event',tag:string) :void
}>()
const sendEmit = (tag:string) => {
  edits('some-event',tag)
}

</script>