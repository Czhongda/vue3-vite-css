
<template>
  <div>
  <ChildTab @some-event.once="callback" ref="childRef" :author="{firstName:'f',lastName:'l'}">
    <span>默认插槽</span>
    <template v-slot:footer>
      <div>具名插槽footer</div>
    </template>
  </ChildTab>
  <CustomInput v-model="inputValue" />
  <hr />
  <MyButton @click="onClick" class="index" />
  <FancyList>
    <template #item="{ name, age }">
      <div>{{ name }} - {{ age }}</div>
    </template>
  </FancyList>
  <MouseTracker v-slot="{ x, y }"> Mouse is at: {{ x }}, {{ y }} </MouseTracker>
</div>
</template>

<script setup lang="ts">
import ChildTab from './ChildTab.vue'
import CustomInput from './CustomInput.vue'
import MyButton from './MyButton.vue'
import FancyList from './FancyList.vue'
import MouseTracker from './MouseTracker.vue'
import { ref,onMounted,watch } from 'vue'
const childRef = ref(null)
const inputValue = ref('')
onMounted(() => {
  console.log(111,childRef.value)
})
const callback = (tag:string) => {
  console.log(222,tag)
}
watch(inputValue,(newVal,oldVal)=>{
  console.log(333,newVal,oldVal)
})

const onClick = () => {
  console.log(444,'index点击了')
}
</script>