import {ref,reactive,watchEffect,toValue} from 'vue'
import type {Ref} from 'vue'

export function useMoo(url:string|number|Ref<string|number>){
  // const x = ref(0)
  // const y = ref(0)
  const ro = reactive({
    x:0,
    y:0
  })
  watchEffect(()=>{
    console.log('url',url);
    // document.addEventListener('mousemove',function(e){
    //   x.value = e.pageX
    //   y.value = e.pageY
    // })
    const temp = toValue(url)
    ro.x = 2*Number(temp)
    ro.y = 16*Number(temp)
  })
  return {
    ro
  }
}
