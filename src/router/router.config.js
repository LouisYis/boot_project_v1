// import Login from 'pages/Login'
// import Home from 'pages/Home'
// import Notfound from 'pages/Notfound'
// import Vuextest from 'pages/Vuextest'

const routers = [
  {
    path: '/',
    name: 'Login',
    component: resolve => require(['pages/Login'], resolve)
  }, {
    path: '/home',
    name: 'Home',
    component: resolve => require(['pages/Home'], resolve)
  }, {
    path: '/vuextest',
    name: 'Vuextest',
    component: resolve => require(['pages/Vuextest'], resolve)
  }, {
    path: '*',
    name: 'Notfound',
    component: resolve => require(['pages/Notfound'], resolve)
  }
]

export default routers
