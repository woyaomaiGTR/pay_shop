<template>
  <div class="foot-container">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isfull" @change="onCheckBoxChange">
      <label class="custom-control-label" for="fullCheck">全选</label>
    </div>
    <!-- 合计区域 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥{{amount.toFixed(2)}}</span>
    </div>
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary" style="border-radius:20px" :disabled='total===0'>结算({{total}})</button>
  </div>
</template>

<script>
export default {
  emits: ['fullChange'],
  name: 'MyFooter',
  props: {
    // 已勾选商品的总价格
    amount: {
      type: Number,
      default: 0
    },
    // 已勾选商品的总数量
    total: {
      type: Number,
      default: 0
    },
    isfull: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onCheckBoxChange(e) {
      // console.log(e.target.checked)
      this.$emit('fullChange', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.foot-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid greenyellow;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: greenyellow;
}
.amount {
  font-weight: 700;
  color: red;
}
</style>