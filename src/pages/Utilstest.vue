<template>
  <div>
    <navigation></navigation>
    <div class="container">
      <h2 class="text-white title">公共工具Utils测试页面</h2>
      <el-row :gutter='20' class="text-white">
        <el-col :sm='12'>
          <h3>测试日期格式化工具</h3>
          <ul v-for="dt in dates">
            <li>{{dt}}</li>
          </ul>
        </el-col>
        <el-col :sm='12'>
          <h3>测试字符串格式化工具</h3>
          <ul v-for="sfmd in sfm.sfmdates">
            <li>{{sfmd}}</li>
          </ul>
        </el-col>
        <el-col :sm='12'>
          <h3>测试统一异常处理</h3>
          <el-button type="ghost" @click="showException">显示异常</el-button>
        </el-col>
        <el-col :sm='12'>
          <h3>测试日志</h3>
          <el-button type="ghost" @click="showLog">显示日志</el-button>
          <p>按F12查看</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import navigation from 'components/Navigation.vue'
  import utils from 'utils'

  export default {
    components: {
      navigation
    },
    data () {
      return {
        // 日期格式化工具数据
        dates: [],
        // 字符串格式化工具数据
        sfm: {
          sfmbase: ['骆驼祥子', '老舍'],
          sfmdates: []
        }
      }
    },
    created () {
      let vm = this
      // 测试日期格式化工具
      vm.dates.push(utils.Format(new Date(), 'yyyy-MM-dd hh:mm:ss'))
      vm.dates.push(utils.Format(new Date(), 'yyyy-MM-dd'))
      vm.dates.push(utils.Format(new Date(), 'hh:mm:ss'))
      // 测试字符串格式化工具
      vm.sfm.sfmdates.push(utils.StringFormat('【{0}】{1}', ...vm.sfm.sfmbase))
      vm.sfm.sfmdates.push(utils.StringFormat('《{0}》{1}', ...vm.sfm.sfmbase))
      vm.sfm.sfmdates.push(utils.StringFormat('-|- {0} -|- {1} ', ...vm.sfm.sfmbase))
      vm.sfm.sfmdates.push(utils.StringFormat('《{1}》{0}', ...vm.sfm.sfmbase))
    },
    methods: {
      // 测试统一异常处理
      showException: function () {
        let vm = this
        try {
          throw new utils.Exception('系统异常', '10001', vm)
        } catch (error) {
          console.log(error)
        }
      },
      // 测试统一异常处理
      showLog: function () {
        utils.Log('日志信息')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title{
    text-align: center;
  }
</style>
