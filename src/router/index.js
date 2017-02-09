import Vue from 'vue'
import Router from 'vue-router'
import routes from 'router/router.config'
import NProgress from 'nprogress'// 页面顶部加载进度条
import 'nprogress/nprogress.css'// 页面顶部加载进度条css

Vue.use(Router)

const router = new Router({
  routes
})

// 监听路由跳转前变化
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    // 清除session
    sessionStorage.clear()
    // 加载条启动
    NProgress.start()
    // 路由跳转
    next()
  } else {
    if (!sessionStorage.getItem('accessToken')) {
      console.log(to.fullPath)
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      NProgress.start()
      global.authdata === '7758525' ? global.authname = '测试用户' : global.authname = '当前用户'
      next()
    }
  }
})

// 监听路由跳转完成变化
router.afterEach(transition => {
  NProgress.done()
})

export default router
