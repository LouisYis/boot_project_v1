<template>
  <div id="app"> 
    <!-- <img src="./assets/logo.png"> -->
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import navigation from 'components/Navigation.vue'
  export default {
    name: 'app',
    components: {
      navigation
    }
  }
</script>

<style lang="scss">
  // 引入css库
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/normalize.css"; 
  // 引入scss文件
  @import "scss/_container";
  @import "scss/_clearfix";

  html,body {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    background: #435571;
    min-height: 100%; 
    .loading-container{
      text-align: center;
    }
  }
  
  .text-white{
    color: #fff;
  }
</style>
