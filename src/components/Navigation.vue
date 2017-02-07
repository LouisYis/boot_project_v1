<template> 
  <div> 
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">

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
        <!-- <el-menu-item index="3-3">选项3</el-menu-item> -->
      </el-submenu>
      <el-menu-item index="4" >
        <router-link to="/">Quit</router-link>
      </el-menu-item>
    </el-menu> 
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
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
  } 
</style>
