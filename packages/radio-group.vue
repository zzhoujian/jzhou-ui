<template>
  <div class="zj-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZjRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 接收了value值
    // 还需要触发当前组件的input事件
    // provide 与 inject
    value: null
  }
}
</script>

<style scoped>

</style>
