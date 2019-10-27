import {Encrypt} from '@/help/aes'
export default class Util {
  //对象重命名
  static mapToObj(params, mapObj, ignore = []) {
    return Object.keys(params).reduce((memo, item) => {
      if (!ignore.includes(item)) {
        if (!mapObj[item]) {
          mapObj[item] = item
        }
        memo[mapObj[item]] = params[item]
      }
      return memo
    }, {})
  }
  static getEncryptStr(value, str='gavln') {
    console.log(str)
    return Encrypt(Encrypt(value) + str)
  }

}