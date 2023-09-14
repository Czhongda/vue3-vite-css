<template>
  <div>
    group
    <hr />
    <button @click="addItem">添加一项</button>
    <button @click="delItem">添加一项</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
const items = ref([1, 2, 3, 4, 5, 6])
const addItem = () => {
  items.value.push(items.value.length + 1)
}
const delItem = () => {
  items.value.pop()
}
</script>
<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>