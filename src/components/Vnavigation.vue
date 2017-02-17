<template>
  <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-menu-item index="1"><i class="el-icon-menu"></i>基础表格</el-menu-item>
      <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>功能表格</template> 
          <el-menu-item index="2-1">
            <router-link to='/boot/tables/tableexpand' class="nav-router">展开表格</router-link>
          </el-menu-item>  
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name: 'vnavigation',
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-router{
    color: #fff;
  }
</style>
