<script setup lang='ts'>
import { useMouse } from '@/composebles/mouse'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>