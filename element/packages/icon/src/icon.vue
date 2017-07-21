<template>
  <i :class="[
    type ? 'el-icon--' + type : '',
    size ? 'el-icon--' + size : '',>
  </i>
</template> 

<script>
export default {
  name: 'ElIcon',
  props: {
    type: String,
    size: String
  }
}
</script>

<style lang="less">
  @import '../../../theme/icon.less'; 
</style>







