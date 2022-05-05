// 用户信息登录与注册仓库
import { reqGetCode, reqUserRegister, reqLogin, reqUserInfo, reqLogout } from '@/api/index.js'
import { setToken, removeToken } from '@/utils/token.js'

const state = {
  Code: '',
  Token: localStorage.getItem('token'),
  UserInfo: ''
}

const mutations = {
  CODEDATA (state, code) {
    state.Code = code
  },
  USERLOGIN (state, token) {
    state.Token = token
  },
  USERLOGINNAME (state, UserInfo) {
    state.UserInfo = UserInfo
  },
  CLEAR (state) {
    state.Token = ''
    state.UserInfo = {}
    removeToken()
  }
}

const actions = {
  // 获取验证码
  async getCode ({ commit }, phone) {
    let res = await reqGetCode(phone)
    console.log(res)
    if (res.code === 200) {
      commit('CODEDATA', res.data)
    } else {
      Promise.reject(new Error('faile'))
    }
  },
  // 注册
  async UserRegister ({ commit }, user) {
    let res = await reqUserRegister(user)
    if (res.code === 200) {
      return 'ok'
    } else {
      Promise.reject(new Error('faile'))
    }
  },
  // 登录
  async UserLogin ({ commit }, data) {
    let res = await reqLogin(data)
    if (res.code === 200) {
      commit('USERLOGIN', res.data.token)
      // 持续化存储
      // localStorage.setItem('TOKEN', res.data.token)
      setToken(res.data.token)
    } else {
      Promise.reject(new Error('登录失败！'))
    }
    // console.log(res)
  },
  // 获取用户信息
  async getUserInfo ({ commit }) {
    let res = await reqUserInfo()
    if (res.code === 200) {
      commit('USERLOGINNAME', res.data)
    } else {
      Promise.reject(new Error('获取用户信息失败！'))
    }
    // console.log(res)
  },
  // 退出登录
  async UserLogout ({ commit }) {
    let res = await reqLogout()
    if (res.code === 200) {
      commit('CLEAR')
      return 'ok'
    } else {
      Promise.reject(new Error('faile'))
    }
    console.log(res)
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
