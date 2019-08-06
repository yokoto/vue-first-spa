<template>
  <div class="product">
    <h1>{{ detail.name }}</h1>
    <nav class="nav">
      <router-link :to="{ name: 'product-home' }">商品詳細</router-link>
      <router-link :to="{ name: 'product-review' }">レビュー</router-link>
    </nav>
    <!-- ここに子ルートを埋め込む -->
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: { id: Number },
  computed: mapGetters('product', ['detail']),
  watch: {
    id: {
      handler() {
        products.$store.dispatch('product/load', this.id)
      }, immediate: true
    }
  },
  beforeDestroy() {
    // 親ルートを移動するとき商品詳細データを破棄
    this.$store.dispatch('product/destroy')
  }
}
</script>