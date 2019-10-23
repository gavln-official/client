import axios from '@/help/io'

export default class loginApi {
  static login(loginForm){
    return axios.get('/login.json',loginForm).then(res => res)
  }
}