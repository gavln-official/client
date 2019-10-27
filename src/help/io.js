import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'
import store from '@/vuex'
let cancel,
	promiseArr = {}
const CancelToken = axios.CancelToken
//请求拦截器
axios.interceptors.request.use(config => {
	//当两个请求完全相同，取消掉正在进行的相同请求
	store.dispatch('getLoading', true)
	if (promiseArr[config.url]) {
		promiseArr[config.url]('操作取消')
		promiseArr[config.url] = cancel
	} else {
		promiseArr[config.url] = cancel
	}

	if (config.type === 'formData' || config.method !== 'post') {
		return config
	}
	config.data = qs.stringify(config.data)

	return config
}, error => Promise.reject(error))

//响应拦截器
axios.interceptors.response.use(response => {
	store.dispatch('getLoading', false)
	return response && response.data
}, error => {
	store.dispatch('getLoading', false)
	if (error && error.response) {
		const {data} = error.response
		switch (error.response.status) {
			case 400:
				error.message = '参数错误'
				break
			case 401:
				error.message = '身份验证失败'
				break
			case 403:
				error.message = '拒绝访问'
				break
			case 404:
				error.message = '请求错误,未找到该资源'
				// window.location = '/404'
				break
			case 405:
				error.message = '请求方法未允许'
				break
			case 408:
				error.message = '请求超时'
				break
			case 500:
				error.message = '服务器错误'
				break
			case 501:
				error.message = '服务器错误（第三方服务器）'
				break
			case 502:
				error.message = '网络错误'
				break
			case 503:
				error.message = '服务不可用'
				break
			case 504:
				error.message = '网络超时'
				break
			case 505:
				error.message = 'http版本不支持该请求'
				break
			default:
				error.message = `连接错误${error.response.status}`
		}
		switch (data.code) {
			case -1000:
				Message.warning('无效的用户名')
				break
			case -1002:
				Message.warning('用户已存在')
				break
			case -1003:
				Message.warning('文件已存在')
				break
			case -1007:
				Message.warning('无效的邮箱格式')
				break
			case -1008:
				Message.warning('请稍后再试')
				break
			default:
				Message.error('网络开小差了，请稍后再试')
				break
		}
	} else {
		error.message = 'networkerror'
		return Promise.resolve({
			error: error.message
		})
	}
	return Promise.resolve({
		error: error.message,
		...error.response.data
	})
})
//设置默认请求头
axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.timeout = 10000
//允许请求里面带cookie
axios.defaults.withCredentials=true

export default {
	//get请求
	get(url, params, {...config}) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'get',
				url,
				params: params,
				...config,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => {
				resolve(res)
			})
		})
	},
	//post请求
	post(url, params, {...config}) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url,
				data: params,
				...config,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => {
				resolve(res)
			})
		})
	}
}