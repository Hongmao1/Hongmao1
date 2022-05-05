// Search组件的小仓库
// 小仓库不需要引用vue and vuex
import { reqGetSearchList } from '@/api/index'

const state = {
  SearchList: {}
}
const mutations = {
  SEARCHLIST (state, SearchList) {
    state.SearchList = SearchList
  }
}
const actions = {
  async GetSearchList ({ commit }, params = {}) {
    const res = await reqGetSearchList(params)
    if (res.code === 200) {
      commit('SEARCHLIST', res.data)
    }
    // console.log(res)
  }
}
// 简化仓库数据
const getters = {
  goodsList (state) {
    return state.SearchList.goodsList || []
  },
  attrsList (state) {
    return state.SearchList.attrsList || []
  },
  trademarkList (state) {
    return state.SearchList.trademarkList || []
  }
}

export default {
  state, mutations, actions, getters
}
