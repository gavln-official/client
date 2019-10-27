import state from './state'
import type from './type'

const mutations = {
  //全局loading
  [type.IS_LOADING](state,loading) {
    state.loading = loading
  }
}
export default mutations