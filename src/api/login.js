import axios from '@/help/io'
import util from '@/help/util'
const getEncryptStr = util.getEncryptStr
console.log(util)
export default class loginApi {
  static login(loginForm){
    let params = loginForm
    params.pass = getEncryptStr(params.pass)
    return axios.post('/api/1/user/login',params).then(res => res)
  }

  static getUseInfo() {
    return axios.post('/api/1/user/getUserInfo').then(res => res)
  }
}