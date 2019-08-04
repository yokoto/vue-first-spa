<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.router-link-active { background: #e25193; }
</style>
