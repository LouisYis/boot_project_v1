<template>
  <div>
    <navigation></navigation>
    <h2>vuex测试</h2>
    <p>{{getCount}}</p>
    <el-button type='ghost' v-on:click='increment'>增加</el-button>
    <el-button type='ghost' v-on:click='decrement'>减少</el-button>
  </div>
</template>

<script>

  import {mapGetters, mapActions} from 'vuex'
  import navigation from 'components/Navigation.vue'

  export default {
    components: {
      navigation
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'getCount'
      ])
    },
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  h2,p {
    color: #fff;
  }
</style>
