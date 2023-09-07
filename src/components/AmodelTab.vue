<script setup lang="ts">
import { ref ,onMounted} from 'vue'
const props = defineProps<{
  myObj: {
    foo: string
  }
  title?: string
  likes?: number|string
}>()
const msg = '哈哈哈哈哈'
const num1 = ref(999)
const isContentShown = ref(false)
const open = () => {
  isContentShown.value = true
  console.log(333, 'isContentShown.value = true', isContentShown.value);
  // eslint-disable-next-line vue/no-mutating-props
  props.myObj.foo = '哈哈哈'
}

defineExpose({
  msg,
  num1,
  open
})
onMounted(() => {
  // props.title='hhh'
})
</script>
<template>
  <div class="modal" v-if="isContentShown">
    <div class="modal-content">
      <button class="close" @click="isContentShown = false">关闭</button>
      <p>Some text in the Modal..</p>
    </div>
  </div>
  <span>{{ title }}{{ likes || 'like替代' }}</span>
</template>