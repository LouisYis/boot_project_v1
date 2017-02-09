<template> 
  <div> 
    <el-menu theme="dark" default-active="1" class="boot-nav" mode="horizontal" @select="handleSelect">

      <el-menu-item index="0" class="boot-logo">
        <router-link to="/home">BootAdmin</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/home">Home</router-link>
      </el-menu-item>
      <!-- <el-menu-item index="2">
        <router-link to="/any">404</router-link>
      </el-menu-item> -->
      <el-submenu index="3">
        <template slot="title">Others</template>
        <el-menu-item index="3-1">
          <router-link to="/vuextest">vuex测试</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="/any">404</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="/tables">Tables</router-link>
        </el-menu-item>
      </el-submenu>
      <el-dropdown @command="handleCommand" trigger="click" class="right-bar">
        <span class="text-white user-head el-dropdown-link">
          <img class="userPic" src="../assets/logo.png" height="40" width="40" :alt="sysUsername">{{sysUsername}}
        </span> 
        <el-dropdown-menu v-if="ust" class="right-bar-dropdown" slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item> 
          <el-dropdown-item  command="quit" divided>退出</el-dropdown-item>
        </el-dropdown-menu> 
      </el-dropdown>
    </el-menu> 
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'navigation',
    data () {
      return {
        ust: false,
        sysUsername: '未登录'
      }
    },
    computed: {
      ...mapGetters([
        'getUser'
      ])
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      userme: function () {
        this.userlogin()
      },
      ...mapActions([
        'userlogin'
      ]),
      handleCommand: function (command) {
        // this.$message('click' + command)
        if (command === 'quit') {
          this.$message('退出')
          this.$router.replace({path: '/'})
        }
      }
    },
    mounted () {
      var user = sessionStorage.getItem('user')
      if (user) {
        user = JSON.parse(user)
        this.sysUsername = user.username || ''
        this.ust = true // 启用导航菜单下拉
      }
    }
  }
</script>
<style lang="scss" scoped> 
  .el-menu{ 
    .el-menu-item{ 
      &.boot-logo{
        font-size: 36px;
        font-style: italic;
      }
      a{
        display: block; 
        height: 100%;
        text-align: center;
        text-decoration: none;
      }
    }

    .right-bar{
      float: right;
      margin-right: 15px;
      .user-head{ 
        cursor: pointer;
        line-height: 60px;
        .userPic{
          float: left;
          margin: 10px;
          border-radius: 100%;
        }
      }
      
    }
  }
  .right-bar-dropdown{ 
    width: 260px;  
  } 
</style>
