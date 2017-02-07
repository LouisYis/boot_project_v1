import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 10,
  dv: false // 详情弹框显示状态
}

// 定义所需的mutations
const mutations = {
  INCRE (state) {
    state.count++
  },
  DECRE (state) {
    state.count--
  }
}

// 创建store实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
