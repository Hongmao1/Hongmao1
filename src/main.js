import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav/TypeNav.vue'
import Pagintion from './components/Pagination/Pagination.vue'
// 引用element
import { Button, MessageBox } from 'element-ui'
// 引用api
import * as API from '@/api/index.js'
// 引入仓库
import store from './store/index.js'
// 引用mockjs---{{mock数据}}
import './mock/mockServer.js'
// 导入swipet|| 初始化数据
import './assets/css/reset.css'
import Carousel from './components/Carousel/Carousel.vue'

// 全局注册组件
Vue.component('TypeNav', TypeNav)
Vue.component('CarouSel', Carousel)
Vue.component('PaginTion', Pagintion)
// element
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 全局注册bus
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 渲染router
  router,
  // 添加仓库并为组件添加$store属性
  store
}).$mount('#app')
