<script setup lang="ts">
import { ref } from 'vue'

const msg = '哈哈哈哈哈'
const isContentShown = ref(false)
const open = () => {
  isContentShown.value = true
  console.log(333, 'isContentShown.value = true', isContentShown.value);
}

defineExpose({
  msg,
  open
})
</script>
<template>
  <div class="modal" v-if="isContentShown">
    <div class="modal-content">
      <button class="close" @click="isContentShown = false">关闭</button>
      <p>Some text in the Modal..</p>
    </div>
  </div>
</template>