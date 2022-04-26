<template>
  <div :style="{backgroundColor:bgcolor,color:color,fontSize:fsize+'px'}" class="foot-container">{{title}}</div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      default: 'es-header'
    },
    bgcolor: {
      type: String,
      default: '#007BFF'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    fsize: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style lang="less" scoped>
.foot-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 999;
  text-align: center;
  line-height: 45px;
}
</style>
