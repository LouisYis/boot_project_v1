<template>
  <div class="container-fluid">  
    <el-row :gutter='10'>
      <el-col :sm='6' :md='5' :lg='4'>
		<side-menu></side-menu>
      </el-col>
      <el-col :sm='18' :md='19' :lg='20'>
		<vue-tabs></vue-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Tableexpand from 'components/Tableexpand.vue'
  import SideMenu from 'components/Sidemenu.vue'

  export default {
    name: 'app',
    components: {
      Tableexpand, SideMenu
    }
  }
</script>

<style lang='scss' scoped>
  .el-tabs__item{
    color: #fff
  }
</style>
