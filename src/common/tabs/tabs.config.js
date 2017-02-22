import Tableexpand from 'components/Tableexpand'

const tabstemps = [{
  name: '',
  title: '',
  only: true,
  children: [{
    name: 'home',
    title: '首页',
    component: Tableexpand
  }]
}, {
  name: 'test',
  title: '测试',
  children: [{
    name: 'test1',
    title: '测试1',
    component: {
      template: '<h2>测试1</h2>'
    }
  }, {
    name: 'test2',
    title: '测试2',
    component: {
      template: '<h2>测试2</h2>'
    }
  }]
}, {
  name: 'lang',
  title: '语言',
  children: [{
    name: 'Chinese',
    title: '中文',
    component: {
      template: '<h2>中文</h2>'
    }
  }, {
    name: 'English',
    title: '英文',
    component: {
      template: '<h2>英文</h2>'
    }
  }]
}, {
  name: 'music',
  title: '音乐',
  children: [{
    name: 'yaogun',
    title: '摇滚',
    component: {
      template: '<h2>摇滚</h2>'
    }
  }, {
    name: 'qingrou',
    title: '轻柔',
    component: {
      template: '<h2>轻柔</h2>'
    }
  }]
}, {
  name: '',
  title: '',
  only: true,
  children: [{
    name: 'setting',
    title: '设置',
    component: {
      template: '<h2>设置</h2>'
    }
  }]
}]

const tabs = []

tabstemps.forEach(function (item) {
  console.log(item)
  item.children.forEach(function (subitem) {
    tabs.push(subitem)
  })
})
console.log(tabs)
export {
  tabstemps,
  tabs
}
