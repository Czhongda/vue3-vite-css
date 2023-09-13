<template>
  <div>
    transition
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <div @mousemove="onMousemove" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <p>Move your mouse across this div...</p>
      <p>x: {{ x }}</p>
      
    </div>
    <hr />
      <div class="transform">transform</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const x = ref(0)
function onMousemove(e: MouseEvent) {
  x.value = e.clientX
}
const show = ref(false)
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  // cubic-bezier(1, 0.5, 0.8, 1)
  transition: opacity 5s ease;
  color: red;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.movearea {
  transition: 0.3s background-color cubic-bezier(1, 0.5, 0.8, 1);
}

.transform{
  background-color:blue;
  width:100px;
  height:100px;
  transition:transform 3s ease;
  &:hover{
    // rotate(45deg)
    // transform-origin: left top
    // transform:translate(50px,50px) scale(0.8,0.8);
    // transform-origin: left top;
    // transform: rotate(45deg);
    // 该实例通过skew方法把元素水平方向上倾斜30度，处置方向保持不变。
    // transform:skew(30deg,0deg);
    // transform:skew(0deg,30deg);
    transform:translate(100px,100px) rotateZ(45deg)
  }
}
</style>