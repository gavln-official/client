import axios from 'axios'
import ca from 'element-ui/src/locale/lang/ca'

let cancel,promiseArr ={}
const CancelToken = axios.CancelToken
//请求拦截器
axios.interceptors.request.use(config => {
  //当两个请求完全相同，取消掉正在进行的相同请求
  if(promiseArr[config.url]){
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  }else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => Promise.reject(error))

//响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if(error && response.status){
    switch (response.status) {
      case 500:
        error.message = '服务器错误'
        break
      case 400:
        error.message = '客户端错误'
        break
      case 401:
        error.message = '请求未授权'
        break
      case 429:
        error.message = '请求归于频繁，请稍后再试'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  }else {
    error.message = '连接到服务器失败'
  }
  message.error(error)
  return Promise.resolve(error.response)
})

axios.defaults.baseURL = '/api'
//设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  //get请求
  get(url, params) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'get',
        url,
        params: params,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  //post请求
  post (url,params) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url,
        data: params,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}