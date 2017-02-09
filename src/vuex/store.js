import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 10,
  dv: false, // 详情弹框显示状态
  user: {} // 用户登录状态
}

// 定义所需的mutations
const mutations = {
  INCRE (state) {
    state.count++
  },
  DECRE (state) {
    state.count--
  },
  USER_LOGIN (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign(state.user, user)
  },
  USER_LOGINOUT (state) {
    sessionStorage.removeItem('user')
    Object.keys(state.user).forEach(k => Vue.delete(state, k))
  }
}

// 创建store实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
