<template>
  <div class="zj-input" :class="{'zj-input--suffix': showSuffix}">
    <input
      class="zj-input__inner"
      :class="{'is-disabled': disabled}"
      :type="showPassword ? (passwordVisiable ? 'text':'password'):type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="zj-input__suffix" v-if="showSuffix">
      <i class="zj-input__icon icon-guanbi4" v-if="clearable && value" @click="clear"></i>
      <i class="zj-input__icon icon-kandian-zhihui"
        v-if="showPassword"
        @click="handlePassword"
        :class="{'icon-kandian-zhihui-active': passwordVisiable}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ZjInput',
  data () {
    return {
      passwordVisiable: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisiable = !this.passwordVisiable
    }
  }
}
</script>

<style lang="scss" scoped>
.zj-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.zj-input--suffix {
  .zj-input__inner {
    padding-right: 30px;
  }
  .zj-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.icon-kandian-zhihui-active {
        color: blue;
      }
    }
  }
}
</style>
