// 当前模块，对API进行统一管理
import requests from './ajax'
import mockRequest from './Mockajax'

// 三级联动接口
export const reqCategoryList = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}
// 获取banner (首页轮播图)
export const reqGetBannerList = () => mockRequest.get('/banner')
// 获取floor （家用电器数据）
export const reqGetFloorList = () => mockRequest.get('/floor')
// 获取searchlist数据
export const reqGetSearchList = (params) => requests({ url: '/list', method: 'post', data: params })
// 获取商品信息
export const reqGetGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })
// 添加购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddorUpdateCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
// 获取购物车数据
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
// 修改购物车勾选状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const ChangeCheckedCart = (skuID, isChecked) => requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get' })
// 删除购物车商品
// /api/cart/deleteCart/{skuId}
export const DeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
// 获取注册验证码
// /api/user/passport/sendCode/phone
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 注册
// /api/user/passport/register
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })
// 登录接口
export const reqLogin = (data) => requests({ url: '/user/passport/login', method: 'post', data })
// 获取用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
// 退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })
// 14. 获取订单交易页信息
// /api/order/auth/trade
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })
// 获取用户地址
export const reqUserAddress = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })
// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })
// 获取支付信息
// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
// 查询是否支付
export const reqPayState = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
// 获取我的订单列表
// /api/order/auth/{page}/{limit}
export const reqGetmyOrder = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
