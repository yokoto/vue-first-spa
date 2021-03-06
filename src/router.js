import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',  // IDが付いていないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)',  // 「:id」がパラメータ 何が入ってもOK
      component: Product,
      // 関数の場合第1引数として現在のルートオブジェクトが使用できる
      props: route => ({ id: Number(route.params.id)}),
      children: [
        // 商品詳細(デフォルトルート)
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        // 商品のレビュー一覧
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        // 商品のレビュー詳細
        {
          name: 'review-detail',
          path: 'review/:rid',  // 親ルートとかぶらないパラメータを指定
          component: ProductReviewDetail
        }
      ]
    }
  ]
})

// 生成したVueRouterインスタンスをエクスポート
export default router