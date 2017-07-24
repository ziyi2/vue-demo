<template>
  <div class="icon">
    <el-icon type="spinner"></el-icon>
    <el-icon type="spinner" size="lg"></el-icon>
    <el-icon type="spinner" size="2x"></el-icon>
    <el-icon type="spinner" size="3x"></el-icon>
    <el-icon type="spinner" size="4x"></el-icon>
    <el-icon type="spinner" size="5x"></el-icon>
    <el-icon type="spinner" size="5x" status="loading"></el-icon>
    <el-icon type="spinner" size="5x" status="waiting"></el-icon>
  </div>
</template>

<script>
export default {
  name: 'icon'
}
</script>

<style scoped>
  i {
    margin-left: 20px;
  }
</style>
