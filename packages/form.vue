<template>
  <div class="zj-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZjForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '120px'
    }
  }
}
</script>

<style scoped>

</style>
