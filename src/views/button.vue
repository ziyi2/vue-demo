<template>
  <div>
    <el-button @click = "defaultButtonClick">
      默认按钮
    </el-button>
    <el-button :disabled="true">
      禁用按钮
    </el-button>
    <el-button @click = "iconButtonClick">
      <el-icon type="spinner" status="waiting"></el-icon>
      图标按钮
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  methods: {
    defaultButtonClick (e) {
      alert('默认按钮')
    },

    iconButtonClick (e) {
      alert('图标按钮')
    }
  }
}
</script>

