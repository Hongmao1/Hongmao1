// 购物车数据仓库
// 导入获取购物车api
import { reqCartList, ChangeCheckedCart, DeleteCart } from '../../api/index'

const state = {
  cartList: []
}

const mutations = {
  CARTLIST (state, cartList) {
    state.cartList = cartList
  }
}

const actions = {
  // 获取购物车数据
  async getCartList ({ commit }) {
    let res = await reqCartList()
    if (res.code === 200) {
      commit('CARTLIST', res.data)
    }
  },
  // 更新购物车勾选
  async updateCartCheckout ({ commit }, { skuID, isChecked }) {
    let res = await ChangeCheckedCart(skuID, isChecked)
    if (res.code === 200) {
      console.log('全选按钮更新' + res.message)
    } else {
      console.log('faild')
    }
  },
  // 删除购物车商品
  async deleteCart ({ commit }, skuId) {
    let res = await DeleteCart(skuId)
    if (res.code === 200) {
      console.log('删除成功！')
    } else {
      console.log('faild')
    }
  }
}

const getters = {
  cartList (state) {
    return state.cartList[0] || {}
  }
}

export default {
  state, mutations, actions, getters
}
