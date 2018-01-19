import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

import * as g from './g_type.js'
import * as m from './m_type.js'
import * as a from './a_type.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state,getters,mutations,actions
})

export default store