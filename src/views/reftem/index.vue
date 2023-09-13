<script setup lang="ts">
import AmodelTab from '@/components/AmodelTab.vue';
import FuncTab from '@/components/FuncTab.vue';
import { ref, onMounted,reactive } from 'vue'
import type {ComponentPublicInstance,ComponentOptionsBase} from 'vue'
// import {CountTab, CountTab2} from '@/components/tems'
const refA = ref<InstanceType<typeof AmodelTab> | null>(null)
onMounted(() => {
  // console.log(333, 'refA', refA, refA.value, refA.value?.open);
  console.log(999,refA,refA.value?.msg,refA.value?.num1);
  
})

const inputRef = ref<HTMLInputElement | null>(null)
const inputValue = ref('')
const getRef = (el:Element|ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>> | null) => { 
    console.log(el,'gai')
    inputRef.value = el as HTMLInputElement
}
onMounted(() => {
  setTimeout(() => {
    if(inputRef.value){
      inputRef.value?.focus()
    }
    console.log(222,'focus');
    
  }, 3000);
})
const inputChange = (e:Event) => {
  console.log(111, (e.target as HTMLInputElement).value, inputValue.value, inputRef.value?.value);
  inputValue.value = (e.target as HTMLInputElement).value
}

const datalist = reactive([1,2,3,4,5,6])
const itemRefs = ref(null)
onMounted(() => { 
    console.log(itemRefs.value)  // 输出一个数组
    
    
})
const myObj = reactive({
  foo: 'bar'
})

</script>
<template>
  <div>

    <button @click="refA?.open()">打开</button>
    <AmodelTab ref="refA" title="titel1" likes="122" :myObj="myObj"/>
    <hr />
    <div>
      <span>{{ myObj.foo }}</span>
    </div>
    <input @change="inputChange" :ref="(el) => {getRef(el)}" type="text" v-model="inputValue" />
    <ul>
      <li v-for="item in datalist" :key="item" ref="itemRefs">{{ item }}</li>
    </ul>
    <hr />
    <FuncTab :propG="(s:string) => {return '运行pro'+s}" />
    <!-- <CountTab />
    <CountTab2 /> -->
  </div>
</template> 
<style lang="scss" scoped></style>