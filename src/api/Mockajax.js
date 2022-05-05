// 对axios单独二次封装
import axios from 'axios'
// 导入进度条
import nprogress from '../../node_modules/nprogress/nprogress.js'
import '../../node_modules/nprogress/nprogress.css'

const requests = axios.create({
  // 配置对象
  baseURL: '/mock',
  timeout: 5000
})

// 配置请求拦截器
requests.interceptors.request.use(config => {
  // 可以添加Headers业务
  // 进度条start
  nprogress.start()

  return config
})
// 配置响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  return Promise.reject(new Error('Falid'))
})

export default requests
