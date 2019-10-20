import axios from '@/help/io'

export default class loginAip {
  static login(loginForm){
    return axios.get('/login.json',loginForm).then(res => res)
  }
}