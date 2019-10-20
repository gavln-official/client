import axios from '@/help/io'


export default class Register {
  static register(registerForm) {
    axios.get('/register.json', registerForm).then(res => {
      return res
    })
  }
}