<template>
  <div>
    <navigation></navigation> 
  	<router-view></router-view>
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

