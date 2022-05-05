import Vue from 'vue'
import Vuex from 'vuex'

// 引用小仓库
import Home from './Home'
import Search from './Search'
import Detail from './Detail'
import CartList from './CartList'
import User from './User'
import Trade from './Trade'

// 全局注册
Vue.use(Vuex)

// 对外暴露仓库
export default new Vuex.Store({
  // 实现Vuex仓库模块化管理
  modules: {
    Home,
    Search,
    Detail,
    CartList,
    User,
    Trade
  }
})
