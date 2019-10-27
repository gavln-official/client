import type from './type'

const actions = {
	getLoading({commit}, loading) {
		commit(type.IS_LOADING, loading)
	}
}

export default actions