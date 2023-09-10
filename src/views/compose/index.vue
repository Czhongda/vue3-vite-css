<template>
  <div>
    compose:
    <MouseDestination />
  </div>
</template>
<script setup lang="ts">
import MouseDestination from './MouseDestination.vue';
import {onMounted} from 'vue';

onMounted(() => {
  console.log(333,process.env,import.meta.env);
  console.log('import.meta',import.meta.env);
  
  
})
</script>