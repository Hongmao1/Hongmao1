// detail仓库
import { reqGetGoodsInfo, reqAddorUpdateCart } from '../../api/index'
import { getUUID } from '../../utils/uuid_token'

const state = {
  goodsInfo: {},
  uuid_token: getUUID()
}

const mutations = {
  GOODSINFO (state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}

const actions = {
  // 获取商品信息
  async getGoodsInfo ({ commit }, skuId) {
    let result = await reqGetGoodsInfo(skuId)
    if (result.code === 200) {
      commit('GOODSINFO', result.data)
    }
  },
  // 添加购物车
  async addorUpdateCart ({ commit }, { skuId, skuNum }) {
    let result = await reqAddorUpdateCart(skuId, skuNum)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  }
}

const getters = {
  // 导航数据简化
  categoryView (state) {
    return state.goodsInfo.categoryView || {}
  },
  // 商品信息简化
  skuInfo (state) {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList (state) {
    return state.goodsInfo.spuSaleAttrList || []
  }
}

export default {
  state, mutations, actions, getters
}
