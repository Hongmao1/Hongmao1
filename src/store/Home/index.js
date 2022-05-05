// Home组件的小仓库
// 小仓库不需要引用vue and vuex
// 导入获取商品列表函数
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '../../api/index.js'

const state = { categoryList: [], bannerList: [], floorList: [] }
const mutations = {
  CATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST (state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async categoryList ({ commit }) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async GetBannerList ({ commit }) {
    let result = await reqGetBannerList()
    if (result.code === 200) {
      commit('BANNERLIST', result.data)
    }
    // console.log(result)s
  },
  async GetFloorList ({ commit }) {
    let result = await reqGetFloorList()
    if (result.code === 200) {
      commit('FLOORLIST', result.data)
    }
    // console.log(result)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
