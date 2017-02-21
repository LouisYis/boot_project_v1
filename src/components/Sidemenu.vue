<template>
  <nav class="side-menu">    
    <el-menu default-active="2"  @select="clickMenuItem">
      <template v-for="(item,index) in menus">
        <el-menu-item v-if="item.only&&item.children.length>0"  :index='item.children[0].name +"|"+ item.children[0].title'><i
                :class="{'active': selected===item.title}"></i>{{item.children[0].title}}
        </el-menu-item>
        <el-submenu :index="index+''" v-if="!item.only">
            <template slot="title"><i ></i>{{item.title}}</template>
            <el-menu-item v-for="child in item.children" :class="{'active': selected===child.title}" :index='child.name +"|"+ child.title'>{{child.title}}
            </el-menu-item>
        </el-submenu>
        <!--<el-menu-item :class="{'active': selected===item.text}" v-for="item in menus" :index='item.name +"|"+ item.text'><a>{{item.text}}</a></el-menu-item>-->
      </template>
    </el-menu>
  </nav>
</template>
<script>
  import {tabstemps} from 'common/tabs/tabs.config.js'
  
  export default {
    data () {
      return {
        menus: tabstemps,
      //   menus: [{
      //     text: '首页',
      //     name: 'home',
      //     children: [{
      //       text: '测试22',
      //       name: 'test2'
      //     }]
      //   }, {
      //     text: '测试1',
      //     name: 'test1',
      //     children: [{
      //       text: '测试1',
      //       name: 'test1'
      //     }]
      //   }, {
      //     text: '',
      //     name: '',
      //     only: true, // 只有一个节点
      //     children: [{
      //       text: '测试22',
      //       name: 'test2'
      //     }]
      //   }, {
      //     text: '音乐',
      //     name: 'test3',
      //     children: [{
      //       text: '摇滚',
      //       name: 'test2'
      //     }, {
      //       text: '轻音乐',
      //       name: 'test2'
      //     }]
      //   }, {
      //     text: '设置',
      //     name: 'setting',
      //     children: [{
      //       text: '测试22',
      //       name: 'test2'
      //     }]
      //   }],
        selected: '首页'
      }
    },
    created () {
      this.$taber.$on('vue-tabs-active-change', (tab) => {
        if (tab) {
          this.selected = tab.meta.title
        } else {
          this.selected = '首页'
        }
      })
    },
    methods: {
      clickMenuItem (key, keypath) {
        const tabinfo = key.split('|')
        this.selected = tabinfo[1]
        console.log(key.split('|'))
        this.$taber.open({
          name: tabinfo[0],
          params: {
            title: tabinfo[1]
          }
        })
      }
    },
    mounted () {
      this.$taber.open({
        name: 'home'
      })
    }
  }
</script>
<style>
  .side-menu {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 1px;
    background-color: #2f4050;
    color: #a7b1c2;
  }

  .nav {
    list-style: none;
    padding: 0px;
  }

   li.active {
      color: #fff;
    }

  li > a {
    padding: 4px 10px 4px 40px;
    display: block;
    text-align: left;
  }
  li > a:hover {
     cursor: pointer;
     color: #fff;
   }

</style>
