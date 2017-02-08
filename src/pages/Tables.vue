<template>
  <div>
    <navigation></navigation>
    <el-row :gutter='10'>
      <el-col :sm='6' :md='5' :lg='4'>
        <vnavigation></vnavigation>
      </el-col>
      <el-col :sm='18' :md='19' :lg='20'>
        <h2 class="text-white">表格展示区域</h2>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import vnavigation from 'components/Vnavigation.vue'
  import navigation from 'components/Navigation.vue'
  import tableexpand from 'components/Tableexpand.vue'

  export default {
    components: {
      navigation,
      vnavigation,
      tableexpand
    }
  }
</script>

<style lang='scss' scoped>
  .text-white{
    color: #fff;
  }
</style>
