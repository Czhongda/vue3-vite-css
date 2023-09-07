<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>