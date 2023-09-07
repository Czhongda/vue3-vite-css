<template>
  <ul>
  <li v-for="item in items" :key="item.name">
    <slot name="item" v-bind="item"></slot>
  </li>
</ul>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const items = reactive([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 },
  { name: 'Susan', age: 25 },
])
</script>