<template>
  <div class="container">
    <ul class="list-container" v-for="item in listDatas">
      <li>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'newslist',
    data () {
      return {
        listDatas: []
      }
    },
    created () {
      var vm = this
      vm.getLatest()
    },
    methods: {
      getLatest: function () {
        var vm = this
        // 详情页面
        // var url = "http://news-at.zhihu.com/api/4/news/9174415"
        var url = 'http://news-at.zhihu.com/api/4/news/latest'
        vm.$http.jsonp('http://strun.club/source/phpJson/urljsonp.php', {
          params: {
            'love': 'qin',
            'url': url
          }
        })
        .then(function (res) {
          var result = JSON.parse(res.bodyText).stories
          // console.log(JSON.parse(result))
          for (var i = 0; i < result.length; i++) {
            vm.listDatas.push(result[i])
          }
        }, function (res) {})
      }
    }
  }
</script>

<style lang='scss' scoped>
  .list-container{
    li{
      color: #fff;
    }
  }
</style>
