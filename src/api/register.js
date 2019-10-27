import axios from '@/help/io'
import util from '@/help/util'

const mapToObj = util.mapToObj
const getEncryptStr = util.getEncryptStr

export default class Register {
	static register(registerForm) {
		let params = mapToObj(registerForm, {
			userName: 'name',
			password: 'pass',
			email: 'mail'
		})

		params.pass = getEncryptStr(params.pass)
		return axios.post('/api/1/user/registry', params).then(res => {
			console.log(res)
			return res
		})
	}
}