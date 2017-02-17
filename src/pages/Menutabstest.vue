<template>
  <div class="container-fluid">  
    <el-row :gutter='10'>
      <el-col :sm='6' :md='5' :lg='4'>
        <el-menu @select="menuTabsSelect">
            <el-menu-item index="m1,测试1,menuTabs">测试1</el-menu-item>
            <el-menu-item index="m2,测试2,menuTabs">测试2</el-menu-item>
            <el-menu-item index="m3,测试3,menuTabs">测试3</el-menu-item>
            <el-menu-item index="m4,测试4,menuTabs">测试4</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :sm='18' :md='19' :lg='20'>
        <menutabs :theme='white'></menutabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import menutabs from '../components/MenuTabs.vue'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        white: 'white-theme'
      }
    },
    components: {
      menutabs
    },
    computed: {
      ...mapGetters([
        'getMenuTabs'
      ])
    },
    methods: {
      ...mapActions([
        'addmenutabs',
        'settabsactive',
        'removemenutabs'
      ]),
      menuTabsSelect: function (key, keyPath) {
        // console.log(key) // keyPath是一个数组 keyPath[0]是submenu的index,keyPath[1]是当前选中项的index
        var vm = this
        console.log(key.split(','))
        // 当前点击项信息
        let curinfo = key.split(',')
        if (curinfo[2] === 'menuTabs') {
          // vm.menuTabDatas.title = key
          let _item = {
            name: curinfo[0],
            title: curinfo[1],
            content: curinfo[1] + 'Tab content'
          }
          var m = false
          let _v = vm.getMenuTabs.tabsArray
          console.log(_v)
          for (var ele of _v) {
            console.log(ele)
            let a = ele.name
            if (a === curinfo[0]) {
              m = true
              break
            }
          }
          if (!m) {
            vm.addmenutabs(_item)
          }
          vm.settabsactive(curinfo[0])
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  .el-tabs__item{
    color: #fff
  }
</style>
