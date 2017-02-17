<template>
	<div class="boot-page">
		<div class="form-container">
			<loginform labelwidth="68px"></loginform>
		</div>
	</div>
</template>

<script>
  import loginform from '../components/Loginform.vue'

  export default {
    components: {
      loginform
    }
  }
</script>

<style lang='scss'>
  .boot-page{
    height: 100%;
    .boot-nav{
      margin-bottom: 18px;
    }
  }
  .form-container{
    position: relative;
        width: 480px;
        padding: 60px 20px 20px;
        margin: 120px auto;
        background: #fff;
        border-radius: 8px;
        .login-info{
          position: absolute;
          top: 0;
          left: 0;
          right: 0
        }
  }
</style>
