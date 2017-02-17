<template>
    <el-tabs type="card" v-model="activeName" closable @tab-click="tabsClick" @tab-remove="tabsRemove" :class='theme'>
      <el-tab-pane v-for="(item, index) in menuTabs" :label="item.title" :name="item.name">{{item.content}} {{index}}</el-tab-pane>
    </el-tabs>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'menutabs',
    data () {
      return {}
    },
    props: [
      'theme'
    ],
    computed: {
      ...mapGetters([
        'getMenuTabs'
      ]),
      activeName: {
        get () {
          return this.getMenuTabs.active
        },
        set (v) {
          // 点击tab标签上的删除按钮，触发更新vux中的当前激活状态
          return this.settabsactive(v)
        }
      },
      menuTabs: {
        get () {
          return this.getMenuTabs.tabsArray
        }
      }
    },
    methods: {
      ...mapActions([
        'settabsactive',
        'removemenutabs'
      ]),
      tabsClick: function (tab, event) {
        // console.log(tab)
        // console.log(tab.label)
        this.settabsactive(tab.name)
      },
      tabsRemove: function (tab, event) {
        // console.log(tab)
        let vm = this
        this.settabsactive(vm.getMenuTabs.tabsArray[0].name)
        let b = {}
        vm.getMenuTabs.tabsArray.forEach(function (ele) {
          if (ele.name === tab.name) {
            console.log('删除')
            b = ele
          } else {
            console.log(ele.name + '未删除*************')
          }
        })
        console.log('要删除:' + b.name)
        vm.removemenutabs(b)
      }
    }
  }
</script>

<style lang='scss'>
  .white-theme{
    .el-tabs__header{
      height: 42px;
      .el-tabs__item{
        color: #fff
      }
    }
    .el-tabs__content{
      background: #fff;
      min-height: 300px;
    }
  }
  .el-tabs__content{
    padding: 15px;
  }
</style>
