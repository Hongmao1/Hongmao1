import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
// 添加路由组件
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'
import Search from '@/pages/Search/Search.vue'
import Register from '@/pages/Register/Register.vue'
import Detail from '@/pages/Detail/Detail.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/AddCartSuccess.vue'
import ShopCart from '@/pages/ShopCart/ShopCart.vue'
import Trade from '@/pages/Trade/Trade.vue'
import Pay from '@/pages/Pay/Pay.vue'
import PaySuccess from '@/pages/PaySuccess/PaySuccess.vue'
import Center from '@/pages/Center/'
import Myorder from '../pages/Center/myOrder/'
import GroupOrder from '@/pages/Center/groupOrder'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递那些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, meta: { show: true }, name: 'home' },
  { path: '/login', component: Login, meta: { show: false } },
  { path: '/register', component: Register, meta: { show: false } },
  { path: '/search/:keyword?', component: Search, meta: { show: true }, name: 'search' },
  { path: '/detail/:skuid?', component: Detail, meta: { show: true }, name: 'detail' },
  { path: '/addcartsuccess', component: AddCartSuccess, meta: { show: true }, name: 'addcartsuccess' },
  { path: '/shopcart', component: ShopCart, meta: { show: true }, name: 'shopcart' },
  { path: '/trade', component: Trade, meta: { show: true }, name: 'trade' },
  { path: '/pay', component: Pay, meta: { show: true } },
  { path: '/paysuccess', component: PaySuccess, meta: { show: true } },
  {
    path: '/center',
    component: Center,
    meta: { show: true },
    children: [
      { path: 'myorder', component: Myorder },
      { path: 'grouporder', component: GroupOrder },
      { path: '/center', redirect: '/center/myorder' }
    ]
  }
]

const router = new VueRouter({
  routes,
  // 一进页面的滚动条的位置
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  let token = store.state.User.Token
  let name = store.state.User.UserInfo.name
  if (token) {
    // 已经登录
    if (to.path === '/login') {
      next('/home')
    } else {
      // 未登录
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          await store.dispatch('UserLogout')
          next('/login')
        }
      }
    }
  } else {
    // 未登录
    next()
  }
})

export default router
