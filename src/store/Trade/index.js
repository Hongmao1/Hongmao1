// 结算仓库
import { reqOrderInfo, reqUserAddress } from '@/api/index.js'

const state = {
  orderInfo: {},
  addRess: []
}
const mutations = {
  TRADEINFO (state, orderInfo) {
    state.orderInfo = orderInfo
  },
  ADDRESS (state, address) {
    state.addRess = address
  }
}
const actions = {
  async getTrade ({ commit }) {
    let res = await reqOrderInfo()
    if (res.code === 200) {
      commit('TRADEINFO', res.data)
    } else {
      Promise.reject(new Error('获取订单信息失败！'))
    }
  },
  async getUserAddress ({ commit }) {
    let res = await reqUserAddress()
    if (res.code === 200) {
      commit('ADDRESS', res.data)
    } else {
      Promise.reject(new Error('获取用户地址失败！'))
    }
  }
}
const getters = {
  addRess (state) {
    return state.addRess || []
  },
  orderInfo (state) {
    return state.orderInfo || {}
  }
}

export default {
  state, mutations, actions, getters
}
