<template>
  <i :class="[
    type ? 'el-icon--' + type : '',
    size ? 'el-icon--' + size : '' ,
    status ? 'el-icon--' + status : '']">
  </i>
</template> 

<script>
export default {
  name: 'ElIcon',
  props: {
    type: String,
    size: String,
    status: String
  }
}
</script>

<style lang="less">
  @import '../../../theme/icon.less'; 
</style>







