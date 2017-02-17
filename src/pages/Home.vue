<template>
  <div>
    <navigation></navigation> 
    <transition name="component-fade" mode="out-in">
  	 <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import navigation from 'components/Navigation.vue'
  export default {
    components: {
      navigation
    }
  }
</script>

<style lang='scss'>
  .component-fade-enter-active, .component-fade-leave-active {
    transition: all .3s ease;
  }
  .component-fade-enter, .component-fade-leave-active {
    transform: rotateX(90deg);
    opacity: 0;
  }
</style>
