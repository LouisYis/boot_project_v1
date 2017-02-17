<template>
  <el-menu theme="dark" router default-active="2" class="boot-nav" mode="horizontal" @select="handleSelect"> 
    <div class="boot-logo">BootAdmin</div>
    <el-menu-item index="/boot/home">Home</el-menu-item> 
    <!-- <el-menu-item index="/menu">MenuTabs</el-menu-item>  -->
    <el-submenu index='/boot/'>
      <template slot="title">Others</template>
      <el-menu-item index="/boot/vuextest">vuex测试</el-menu-item>
      <el-menu-item index="/boot/any">404</el-menu-item>
      <el-menu-item index="/boot/tables">Tables</el-menu-item>
      <el-menu-item index="/boot/utilstest">UtilsTest</el-menu-item>
    </el-submenu>
    <el-dropdown @command="handleCommand" trigger="click" class="right-bar">
      <span class="text-white user-head el-dropdown-link">
        <img class="userPic" src="../assets/logo.png" height="40" width="40" :alt="systemUser.username">{{systemUser.username}}
      </span> 
      <el-dropdown-menu class="right-bar-dropdown" slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item> 
        <el-dropdown-item  command="quit" divided>退出</el-dropdown-item>
      </el-dropdown-menu> 
    </el-dropdown>
  </el-menu>
</template>

<script>
  import {Exception} from 'utils'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'navigation',
    computed: mapState({
      // 箭头函数可使代码更简练
      systemUser: state => state.user
    }),
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        let vm = this
        console.log(vm.systemUser)
        vm.basePath = keyPath.join('/')
        if (!vm.systemUser) {
          try {
            throw new Exception('请登录', '10001', vm)
          } catch (error) {
            console.log(error)
          }
          return
        }
      },
      ...mapActions([
        'userlogin',
        'userloginout'
      ]),
      handleCommand: function (command) {
        // this.$message('click' + command)
        if (command === 'quit') {
          this.$message('退出')
          this.userloginout()
          this.$router.replace({path: '/'})
        }
      }
    },
    mounted () {
      // // let user = vm.systemUser
      // if (user) {
      //   // user = JSON.parse(user)
      //   // this.systemName = user.username
      //   // this.ust = true // 启用导航菜单下拉
      // }
    }
  }
</script>
<style lang="scss" scoped>
  @mixin nav_a($flg){
    @if $flg == true{
      color: #fff;
    }
    text-decoration: none;
  }
  .el-menu{ 
    .boot-logo{
      float: left;
      color: #fff;
      line-height: 60px;
      font-size: 36px;
      font-style: italic;
    }
    .el-menu-item{
      a{
        display: block; 
        height: 100%; 
        text-align: center;
        @include nav_a(false)
      }
    }
    .el-submenu{
      .el-submenu__title{
        a{
          @include nav_a(true)
        }
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
