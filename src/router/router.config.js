import Login from 'pages/Login'
import Home from 'pages/Home'
import Notfound from 'pages/Notfound'
import Vuextest from 'pages/Vuextest'

const routers = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/vuextest',
    name: 'Vuextest',
    component: Vuextest
  }, {
    path: '*',
    name: 'Notfound',
    component: Notfound
  }
]

export default routers
