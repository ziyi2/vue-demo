<template>
  <button class="el-button" 
          :disabled="disabled" 
          :autofocus="autofocus" 
          :type="nativeType"
          :class="[
            type ? 'el-button--' + type : '',
            size ? 'el-button--' + size : '',
            {
              'is-disabled': disabled,
              'is-loading': loading,
              'is-plain': plain
            }
          ]">
    111
  </button>
</template> 

<script>
export default {
  name: 'ElButton',
  props: {
    disabled: Boolean,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    loading: Boolean,
    plain: Boolean
  }
}
</script>

<style lang="less">
  @import '../../../theme/button.less';
</style>





