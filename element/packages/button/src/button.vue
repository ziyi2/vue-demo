<template>
  <button class="el-button" 
          @click="handleClick"
          :disabled="disabled" 
          :autofocus="autofocus" 
          :type="nativeType"
          :class="[
            type ? 'el-button--' + type : '',
            size ? 'el-button--' + size : '',
            {
              'is-disabled': disabled
            }
          ]">     
    <span v-if="$slots.default"><slot></slot></span>
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
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="less">
  @import '../../../theme/button.less';
</style>





