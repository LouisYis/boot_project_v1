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
    path: '/boot',
    name: 'Home',
    component: resolve => require(['pages/Home'], resolve),
    children: [
      {
        path: 'vuextest',
        name: 'Vuextest',
        component: resolve => require(['pages/Vuextest'], resolve)
      }, {
        path: 'tables',
        name: 'Tables',
        component: resolve => require(['pages/Tables'], resolve),
        children: [
          {
            path: 'tableexpand',
            component: resolve => require(['components/Tableexpand'], resolve)
          }]
      }, {
        path: 'utilstest',
        name: 'Utilstest',
        component: resolve => require(['pages/Utilstest'], resolve)
      // }, {
      //   path: '/menu',
      //   name: 'Menutabstest',
      //   component: resolve => require(['pages/Menutabstest'], resolve)
      }, {
        path: 'home',
        component: resolve => require(['pages/Main'], resolve)
      }
    ]
  }, {
    path: '*',
    name: 'Notfound',
    component: resolve => require(['pages/Notfound'], resolve)
  }
]

export default routers
