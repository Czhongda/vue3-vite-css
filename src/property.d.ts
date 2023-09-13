export {}
declare module 'vue' {
  // declare module '@vue/runtime-core' {
  // '@vue/runtime-core'
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}