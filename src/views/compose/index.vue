<template>
  <div>
    compose:
    <MouseDestination />
  </div>
</template>
<script setup lang="ts">
import * as process from 'process';
import MouseDestination from './MouseDestination.vue';
import {onMounted} from 'vue';

onMounted(() => {
  console.log(333,process,process.env,process.env.NODE_ENV,import.meta.env,import.meta.env.MODE);
  console.log('import.meta',import.meta.env);
  
  
})
</script>