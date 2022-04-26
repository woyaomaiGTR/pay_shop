<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="reduce" :disabled="number===0">-</button>
    <!-- 购买的数量 -->
    <input type="number" class="number-box" v-model.number.lazy="number">
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
export default {
  emits: ['countChange'],
  name: 'MyCount',
  data() {
    return {
      number: this.num
    }
  },
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  methods: {
    add() {
      this.number++
    },
    reduce() {
      this.number--
    }
  },
  watch: {
    number(newVal) {
      const result = parseInt(newVal)
      if (isNaN(result) || newVal < 1) {
        this.number = 1
        return
      }
      if (String(newVal).indexOf('.') !== -1) {
        this.number = result
        return
      }
      this.$emit('countChange', this.number)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  width: 25px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>