<template>
  <div class="app-container">我是app根组件
    <EsHeader title="购物车案例"></EsHeader>
    <EsGoods v-for="item in goodslist" :key="item.id" :id="item.id" :thumb="item.goods_img" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" :checked="item.goods_state" @stateChange="onGoodsStateChange" @goodsCountChange="lastChange"></EsGoods>
    <EsFooter @fullChange="onFullStateChange" :amount="amount" :total="total"></EsFooter>
  </div>
</template>

<script>
import EsHeader from './components/es-header/EsHeader.vue'
import EsFooter from './components/es-footer/EsFooter.vue'
import EsGoods from './components/es-goods/EsGoods.vue'
export default {
  name: 'MyApp',
  data() {
    return {
      goodslist: []
    }
  },
  computed: {
    amount() {
      let a = 0
      this.goodslist
        .filter(x => x.goods_state)
        .forEach(x => {
          a += x.goods_price * x.goods_count
        })
      return a
    },
    total() {
      let b = 0
      this.goodslist
        .filter(x => x.goods_state)
        .forEach(x => {
          b += x.goods_count
        })
      return b
    }
  },
  components: {
    EsHeader,
    EsFooter,
    EsGoods
  },
  methods: {
    async getData() {
      const { data: res } = await this.$http.get('/api/cart')
      console.log(res)
      this.goodslist = res.list
    },
    // 全选按钮的变化
    onFullStateChange(val) {
      this.goodslist.forEach(x => (x.goods_state = val))
    },
    // 每一项选中的变化
    onGoodsStateChange(e) {
      // this.goodslist.some(item => {
      //   if (item.id === e.id) {
      //     item.goods_state = e.value
      //     return true
      //   }
      // }),
      this.goodslist.find(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
        }
      })
    },
    lastChange(e) {
      this.goodslist.find(x => {
        if (x.id === e.id) {
          x.goods_count = e.value
        }
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 45px;
}
</style>
