import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 10,
  dv: false, // 详情弹框显示状态
  user: JSON.parse(sessionStorage.getItem('user')) || {} // 用户登录状态
  // menutabs: {
  //   tabsArray: [],
  //   active: ''
  // } // menutabs的状态
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
    state.user = {}
    // Object.keys(state.user).forEach(k => Vue.delete(state, k))
  }
  // ADD_MENUTABS (state, tabs) {
  //   console.log(state.menutabs.tabsArray)
  //   state.menutabs.tabsArray.push(tabs)
  // },
  // REMOVE_MENUTABS (state, tabitem) {
  //   let baseArry = state.menutabs.tabsArray
  //   let tempArry = []
  //   let indx
  //   baseArry.forEach(function (ele, index, array) {
  //     if (ele.name === tabitem.name) {
  //       console.log('是一样的' + index)
  //       indx = index
  //       console.log(array + '8989989')
  //     } else {
  //       tempArry.push(ele)
  //     }
  //     console.log(index)
  //   })
  //   console.log(tempArry)
  //   delete state.menutabs.tabsArray[indx]
  //   console.log(state.menutabs.tabsArray)
  //   state.menutabs.tabsArray = tempArry
  // },
  // SET_MENUTABSACTIVE (state, tabname) {
  //   // console.log(tabname)
  //   state.menutabs.active = tabname
  // }
}

// 创建store实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
