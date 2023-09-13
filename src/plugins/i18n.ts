// plugins/i18n
import type { App } from 'vue';
interface Options {
  [key: string]: Options | string
}
export default {
  install: (app:App, options:Options) => {
    
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key:string) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o:Options|string, i:string) => {
        if (o) return o[i]
      }, options) as string
      // let str:Options | string = ''
      // const keys = key.split('.')
      // keys.forEach(element => {
      //   if(str instanceof Options){
      //     str = str[element]
      //   }
      // });
      // return str
    }
  }
}