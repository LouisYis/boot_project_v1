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
