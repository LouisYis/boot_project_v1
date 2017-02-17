export const increment = ({commit}) => {
  commit('INCRE')
}
export const decrement = ({commit}) => {
  commit('DECRE')
}
export const dvshow = ({commit}) => {
  commit('SHOW')
}
export const dvhide = ({commit}) => {
  commit('HIDE')
}
export const userlogin = ({commit}, user) => {
  commit('USER_LOGIN', user)
}
export const userloginout = ({commit}) => {
  commit('USER_LOGINOUT')
}
export const addmenutabs = ({commit}, tabs) => {
  commit('ADD_MENUTABS', tabs)
}
export const removemenutabs = ({commit}, tabitem) => {
  commit('REMOVE_MENUTABS', tabitem)
}
export const settabsactive = ({commit}, tabname) => {
  commit('SET_MENUTABSACTIVE', tabname)
}
