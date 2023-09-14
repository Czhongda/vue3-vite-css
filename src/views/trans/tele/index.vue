<template>
  <div>
    tele
    <div class="outer">
      <h3>Tooltips with Vue 3 Teleport</h3>
      <div>
        <MyModal />
      </div>
    </div>
    OtModal
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <Teleport to="body">
      <!-- 使用这个 modal 组件，传入 prop -->
      <ot-modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </ot-modal>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import MyModal from './MyModal.vue'
import OtModal from './OtModal.vue'
import { ref,onMounted } from 'vue'
const showModal = ref(false)

var result = window.matchMedia('(max-width: 700px)');

if (result.matches) {
  console.log('页面宽度小于等于700px');
} else {
  console.log('页面宽度大于700px');
}

onMounted(() => {
  console.log('mounted',window.location.hash)
})
</script>
<style lang="scss" scoped>
.outer {
  transform: translate(100px, 100px);
}
</style>