<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'ProjectshpApp',

  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    // 派发一个action|| 获取商品列表
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less" scoped>
</style>
