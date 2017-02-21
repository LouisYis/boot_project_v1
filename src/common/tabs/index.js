import Vue from 'vue'
import VueTaber from 'vue-tabs'
import './vue-tabs.css'
import {tabs} from './tabs.config.js'
import {Exception} from 'utils'
/* eslint-disable no-new */

const vueTaber = new VueTaber({
  tabs
})
global.tabslength = ''
const maxlength = 3
vueTaber.beforeCreateEach((tab, next) => {
  console.log(tab)
  if (global.tabslength < maxlength) {
    if (tab.name === 'setting') {
      next('home')
    } else {
      global.tabslength ++
      next()
    }
  } else {
    // alert('已超出打开上限，请先关闭一些窗口后再打开')
    try {
      throw new Exception('已超出打开上限，请先关闭一些窗口后再打开', '10001', new Vue())
    } catch (error) {
      console.log(error)
    }
  }
  // console.log('tab数：' + global.tabslength)
})
vueTaber.beforeCloseEach((tab, next) => {
  console.log('tab数' + global.tabslength)
  if (global.tabslength === 0) {
    // console.log('转home')
    next('home')
    // alert('最后一个不可关闭')
    global.tabslength ++
    console.log('转home后长度' + global.tabslength)
  } else {
    if (tab.name === 'home') {
      // alert('home不可关闭')
      try {
        throw new Exception('首页不可关闭', '10001', new Vue())
      } catch (error) {
        console.log(error)
      }
      // console.log('不可关闭home后长度：' + global.tabslength)
    } else {
      global.tabslength --
      next()
      // console.log('正常关闭后长度：' + global.tabslength)
    }
  }
})

Vue.use(VueTaber)

export default vueTaber
