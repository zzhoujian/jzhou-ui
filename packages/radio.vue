<template>
  <label class="zj-radio" :class="{'is-checked': label === model}">
    <span class="zj-radio__input">
      <span class="zj-radio__inner"></span>
      <input
        type="radio"
        class="zj-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="zj-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>

export default {
  name: 'ZjRadio',
  // created () {
  //   console.log(this.$parent)
  // },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 判断radio是否被RadioGroup所包裹
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.zj-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .zj-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .zj-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .zj-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.zj-radio.is-checked {
  .zj-radio__input {
    .zj-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .zj-radio__label {
    color: #409eff;
  }
}
</style>
