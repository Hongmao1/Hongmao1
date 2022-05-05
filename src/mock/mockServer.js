// 导入mock模块
import Mock from 'mockjs'
// 导入json数据
import banner from './banners.json'
import floor from './floors.json'

// mock数据：第一个请求地址 第二是请求数据
Mock.mock('/mock/banner', {
  code: 200,
  data: banner
})
Mock.mock('/mock/floor', {
  code: 200,
  data: floor
})
